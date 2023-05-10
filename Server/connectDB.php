<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
//header("Access-Control-Allow-Headers: http://127.0.0.1:3000/");

$connectSQL = pg_connect("
    host=localhost 
    port=5432
    dbname=MetrostroyCollege
    user=postgres
    password=postgres
    ") or die ("Ошибка подключения к бд");