<?php

$envFile = fopen(__DIR__ . '/..env', 'r');

while (($line = fgets($envFile)) !== false) {

    $line = trim($line);

    if (empty($line) || str_starts_with($line, '#'))
        continue;

    list($name, $value) = explode('=', $line, 2);

    putenv("$name=$value");
}

fclose($envFile);

$arrayValueDB = ['host'=> getenv('HOST'),'port'=> getenv('PORT'), 'dbname'=> getenv('DBNAME'), 'user'=> getenv('USER'), 'password'=> getenv('PASSWORD')];
$VAR_CONNECT_DB = "host={$arrayValueDB['host']} port={$arrayValueDB['port']} dbname={$arrayValueDB['dbname']} user={$arrayValueDB['user']} password={$arrayValueDB['password']}";

function checkConnect($answer, $response_code, $message = "") : void {
    if(!$answer){
        http_response_code($response_code);
        echo json_encode(['message'=> $message]);
        exit;
    }
}