<?php

if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Origin, Accept, Access-Control-Allow-Credentials");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Credentials: true");
    exit;
}
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

session_start();

if(!file_exists(__DIR__ . '/const.php')){
    http_response_code(404);
    exit;
}

require_once __DIR__ . '/const.php';
const TIME = 10800;

$connectDB = @pg_connect(VAR_CONNECT_DB);
if(!$connectDB){
    http_response_code(500);
    exit;
}

$data = json_decode(file_get_contents('php://input'),1);

$login = htmlspecialchars($data['login']);
$password = htmlspecialchars($data['password']);
$ip = $_SERVER['REMOTE_ADDR'];

$response_block_ip = @pg_query_params($connectDB, "SELECT * FROM blockIpUser WHERE lineblockip = $1", [$ip]);
if(!$response_block_ip){
    http_response_code(500);
    exit;
}

if(pg_num_rows($response_block_ip) != 0){

    $check_line_time = pg_fetch_row($response_block_ip, 0)[3];

    if($check_line_time != null) {
        $time_now = array_combine(['day', 'month', 'year', 'hour', 'min', 'second'],
            explode(':', date('d:m:Y:H:i:s', time() + TIME)));

        $time_now_set = mktime($time_now['hour'], $time_now['min'], $time_now['second'], $time_now['month'], $time_now['day'], $time_now['year']);

        if($time_now_set < $check_line_time){
            http_response_code(423);
            exit;
        }
    }
}

$response = @pg_query_params($connectDB, 'SELECT * FROM usersCollege WHERE mailUser = $1', [$login]);
if(!$response){
    http_response_code(500);
    exit;
}

if(pg_num_rows($response) == 0){ // Проверка на логин
    blockIP:

    $response = @pg_query_params($connectDB, "SELECT * FROM blockIpUser WHERE lineblockip = $1", [$ip]);
    if(!$response){
        http_response_code(500);
        exit;
    }

    $time_now = array_combine(['day', 'month', 'year', 'hour', 'min', 'second'],
        explode(':', date('d:m:Y:H:i:s', time() + TIME)));
    $time_now_set = mktime($time_now['hour'], $time_now['min'], $time_now['second'], $time_now['month'], $time_now['day'], $time_now['year']);

    $time_sleep_last_message = mktime($time_now['hour'], $time_now['min'] + 3, $time_now['second'], $time_now['month'], $time_now['day'], $time_now['year']);

    if(pg_num_rows($response) == 0){ // Проверка на наличие блокировок ip
        $response = @pg_query_params($connectDB,
            "INSERT INTO blockIpUser(lineblockip, countopensite, last_message_time) VALUES ($1, $2, $3)",
            [$ip, 1, $time_sleep_last_message]);
        if(!$response){
            http_response_code(500);
            exit;
        }

        http_response_code(403);
        echo json_encode([
            'access' => 'false',
            'message' => "Неверный логин или пароль"
        ]);
        exit;
    }
    else{
        $countOpenSite = pg_fetch_row($response, 0)[2];

        $fetch_last_time = pg_fetch_row($response, 0)[4];

        if($time_now_set > $fetch_last_time){

            $response = @pg_query_params($connectDB, "UPDATE blockIpUser
                                                            SET countopensite = $1, last_message_time = $2, timesleep = $3
                                                            WHERE lineblockip = $4", [1, $time_sleep_last_message, null, $ip]);
            if(!$response){
                http_response_code(500);
                exit;
            }

            http_response_code(403);
            echo json_encode([
                'access' => 'false',
                'message' => "Слишком много попыток"
            ]);
            exit;
        }

        if(($countOpenSite + 1) < 7){
            $response = @pg_query_params($connectDB, "UPDATE blockIpUser
                                                            SET countopensite = $1, last_message_time = $2
                                                            WHERE lineblockip = $3", [$countOpenSite + 1, $time_sleep_last_message, $ip]);
            if(!$response){
                http_response_code(500);
                exit;
            }

            http_response_code(429);

            echo json_encode([
                'access' => 'false',
                'message' => "Неверный логин или пароль"
            ]);
            exit;
        }
        else{

            $time_now = array_combine(['day', 'month', 'year', 'hour', 'min', 'second'],
                explode(':', date('d:m:Y:H:i:s', time() + TIME)));

            $time_out = $countOpenSite - 5;
            $time_now_set_sleep = mktime($time_now['hour'], $time_now['min'] + $time_out, $time_now['second'], $time_now['month'], $time_now['day'], $time_now['year']);
            $time_sleep_after_block = mktime($time_now['hour'], $time_now['min'] + $time_out + 3, $time_now['second'], $time_now['month'], $time_now['day'], $time_now['year']);

            $response = @pg_query_params($connectDB, "UPDATE blockIpUser
                                                            SET timesleep = $1, countopensite = $2, last_message_time = $3
                                                            WHERE lineblockip = $4", [$time_now_set_sleep, $countOpenSite + 1, $time_sleep_after_block, $ip]);
            if(!$response){
                http_response_code(500);
                exit;
            }

            http_response_code(403);
            echo json_encode([
                'access' => 'false',
                'message' => 'Слишком много попыток'
            ]);
            exit;
        }
    }
}

$password_hash = pg_fetch_row($response, 0)[2];
if(!password_verify($password, $password_hash))
    goto blockIP;


if(pg_num_rows($response_block_ip) != 0){
    $response_check = @pg_query_params($connectDB, "DELETE FROM blockIpUser WHERE lineblockip = $1", [$ip]);
    if(!$response_check){
        http_response_code(500);
        exit;
    }
}

$result_array = pg_fetch_assoc($response);

foreach ($result_array AS $key=> $value){
    if($key == 'iduser')
        continue;
    $_SESSION[$key] = $value;
}

if(!@pg_close($connectDB)){
    http_response_code(500);
    exit;
}

echo json_encode([
    'response'=> true,
    'data'=>[
        'mail'=> $result_array['mailuser'],
        'access'=> $result_array['accessusercollege'],
        'lastname'=>$result_array['lastnameusercollege'],
        'name'=> $result_array['nameusercollege'],
        'group'=> $result_array['groupusercollege']
    ]
]);