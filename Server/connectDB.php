<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

$connect_data = "
    host=localhost 
    port=8080 
    dbname=MetrostroyCollege 
    user=postgres";

$db_connect = pg_connect($connect_data);

if (!$db_connect) {
    die("Ошибка подключения: " . pg_result_error());
}
echo "Подключение к БД прошло успешно.";

pg_close($connect_data);

echo "Подключено к бд";