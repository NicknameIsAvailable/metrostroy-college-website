<?php
session_start();
$connectSQL = require_once("connectDB.php");

if(!$connectSQL) header("Location:index.php"); // Высвечивать предупреждение о подключении к бд!

$login_user_site = pg_escape_string($connectSQL, $_POST['login_user']);
$password_user_site = pg_escape_string($connectSQL, $_POST['password_user']);

$sql_request = pg_query_params($connectSQL, "SELECT * FROM users_college WHERE user_login = $1", [$login_user_site]);

if(pg_num_rows($sql_request) == 0) header("Location:index.php"); // Высвечивать предупреждение о непрв. входа!
$arr_password = pg_fetch_array($sql_request, 0, PGSQL_ASSOC);

if(!(password_verify($password_user_site, $arr_password['user_password']))) header("Location:index.php"); // Высвечивать предупреждение о непрв. входа!

session_destroy(); //Сессии на будущее!

?>

<!--<!DOCTYPE html>-->
<!--<html>-->
<!--    <head>-->
<!--    <meta charset="utf-8">-->
<!--    <meta name="viewport" content="width=device-width, initial-scale=1">-->
<!--    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">-->
<!--    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>-->
<!--    <link href="projectCSS\aut.css" rel="stylesheet">-->
<!--  </head>-->
<!--  <title> Личный кабинет </title>-->
<!--  <body>-->
<!--  <section class="menu">-->
<!--      <!-- Логотип -->-->
<!--      <a href="aut.php" class="menu__logo logo">Колледж "Метростроя"</a>-->
<!--      <ul class="menu__list list">-->
<!--        <li class="menu__item item">-->
<!--          <a href="#" class="menu__link link">-->
<!--            <img src="icon\icon2.png" alt="Home" />-->
<!--            <span>Новости</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li class="menu__item item">-->
<!--          <a href="schedule.php" class="menu__link link">-->
<!--            <img src="icon\icon1.png" alt="Recents" />-->
<!--            <span>Расписание</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li class="menu__item item">-->
<!--          <a href="#" class="menu__link link">-->
<!--            <img src="icon\icon4.png" alt="Starred" />-->
<!--            <span>Ведомости</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li class="menu__item item">-->
<!--          <a href="#" class="menu__link link">-->
<!--            <img src="./img/photos.svg" alt="Photos" />-->
<!--            <span>[]</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li class="menu__item item">-->
<!--          <a href="#" class="menu__link link">-->
<!--            <img src="./img/shared.svg" alt="Shared" />-->
<!--            <span>[]</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li class="menu__item item">-->
<!--          <a href="#" class="menu__link link">-->
<!--            <img src="./img/file.svg" alt="File" />-->
<!--            <span>[]</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li class="menu__item item">-->
<!--          <a href="#" class="menu__link link">-->
<!--            <img src="./img/delete.svg" alt="Delete" />-->
<!--            <span>[]</span>-->
<!--          </a>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <ul class="menu__admin admin">-->
<!--        <li class="admin__item item">-->
<!--          <a href="" class="admin__link link">-->
<!--            <img src="icon\icon3.png" alt="Get help" />-->
<!--            <span>Настройки</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li class="admin__item item">-->
<!--          <a href="" class="admin__link link">-->
<!--            <img src="./img/logout.svg" alt="Logout" />-->
<!--            <span>Ваш аккаунт</span>-->
<!--          </a>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </section>-->
<!--    <section class="content">-->
<!--      <!-- Заполнить любым текстом -->-->
<!--      --><?php //echo pg_num_rows($sql_request); ?>
<!--    </section>-->
<!--  </body>-->
<!--</body>-->
<!--</html>-->