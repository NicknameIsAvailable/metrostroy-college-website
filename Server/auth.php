<?php
session_start();
require_once("connectDB.php");

$login_user_site = pg_escape_string($connectSQL, $_POST['login_user']);
$password_user_site = pg_escape_string($connectSQL, $_POST['password_user']);

$sql_request = pg_query_params($connectSQL, "SELECT * FROM users_college WHERE user_login = $1", [$login_user_site]);

if(pg_num_rows($sql_request) == 0) header("Location:index.php"); // Высвечивать предупреждение о непрв. входа!
$arr_password = pg_fetch_array($sql_request, 0, PGSQL_ASSOC);

if(!(password_verify($password_user_site, $arr_password['user_password']))) header("Location:index.php"); // Высвечивать предупреждение о непрв. входа!

session_destroy(); //Сессии на будущее!

echo pg_num_rows($sql_request);