<?php
session_start();

if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Headers: *");
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    exit;
}
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');


if(!file_exists(__DIR__ . '/const.php')){
    http_response_code(404);
    exit;
}

require_once __DIR__ . '/const.php';
function checkConnect($answer, $http_response_code) : void {
    if(!$answer){
        http_response_code($http_response_code);
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

$answer = @pg_close($connectDB);
checkConnect($answer, 500);

session_unset();
session_destroy();