<?php

if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Origin, Accept, Access-Control-Allow-Credentials");
    header("Access-Control-Allow-Credentials: true");
    exit;
}

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
session_start();

if(!file_exists(__DIR__ . '/const.php')){
    http_response_code(404);
    exit;
}

require_once __DIR__ . '/const.php';
function checkConnect($answer, $response_code) : void {
    if(!$answer){
        http_response_code($response_code);
        exit;
    }
}
if(!isset($_SESSION['mailuser'])){
    http_response_code(300);
    exit;
}

$connectDB = @pg_connect(VAR_CONNECT_DB);
checkConnect($connectDB, 500);

$response = @pg_query_params($connectDB, "SELECT passwordusercollege FROM userscollege WHERE mailuser = $1", [$_SESSION['mailuser']]);
checkConnect($response, 500);

if(pg_num_rows($response) == 0){
    http_response_code(300);
    exit;
}

$passwordDB = pg_fetch_row($response, 0)[0];

$answer = @pg_close($connectDB);
checkConnect($answer, 500);

if($passwordDB != $_SESSION['passwordusercollege']){
    session_unset();
    session_destroy();
    http_response_code(300);
    exit;
}