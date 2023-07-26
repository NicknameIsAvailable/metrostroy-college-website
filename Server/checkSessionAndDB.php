<?php
session_start();

if(!file_exists(__DIR__ . '/OptionsFile.php')){
    http_response_code(500);
    exit;
}
require_once __DIR__ . '/OptionsFile.php';

if(!file_exists(__DIR__ . '/const.php')){
    http_response_code(500);
    exit;
}
require_once __DIR__ . '/const.php';

if(!isset($_SESSION['mailuser'])){
    http_response_code(300);
    exit(json_encode([
        'access'=> false
    ]));
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