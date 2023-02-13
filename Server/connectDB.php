<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

$connectSQL = pg_connect("
    host=localhost 
    port=5432
    dbname=MetrostroyCollege
    user=postgres
    password=postgres
    ") or die ("Ошибка подключения к бд");