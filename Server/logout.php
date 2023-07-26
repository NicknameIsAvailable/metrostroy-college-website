<?php
if(!file_exists(__DIR__ . '/checkSessionAndDB.php')){
    http_response_code(404);
    exit;
}
require_once __DIR__ . '/checkSessionAndDB.php';

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