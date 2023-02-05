<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

$connectSQL = pg_connect("
    host=localhost 
    port=8080 
    dbname=MetrostroyCollege 
    user=postgres
    password=postgres
    ");

