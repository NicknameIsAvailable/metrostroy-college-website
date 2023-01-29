<?php
header("Access-Control-Allow-Origin: *");

$connectSQL = pg_connect("host=localhost port=5432 dbname=test user=postgres password=~30455954_S") or die ("Не удалось подключиться");
echo $connectSQL;
