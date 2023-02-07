<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

$connectSQL = pg_connect("
    host=localhost 
    port=5432
    dbname=MetrostroyCollege 
    user=postgres
    password=postgres
    ");

if($connectSQL)
    echo "Соединение установлено";
else
    die("Ошибка подключения к бд");


//if($_POST['search']) echo "Что-то случилось";
//
//$setRequestSQL = $_POST['search'];

$sqlSchedule = pg_query($connectSQL, "SELECT p.placename as \"Аудитория\", w.weekdayname as \"День недели\", g.groupname as \"№ Группы\", sub.subjectname as \"Предмет\", t.second_name as \"ФИО\", l.lessontime as \"Начало занятий\", la.locationame as \"Местро проведения\"
FROM schedule s
    INNER JOIN place p ON s.PlaceID = p.ID
    INNER JOIN groups g ON s.GroupID = g.ID
    INNER JOIN subjects sub ON s.SubjectID = sub.ID
    INNER JOIN teachers t ON s.TeacherID = t.ID
    INNER JOIN weekday w ON s.WeekdayID = w.ID
	INNER JOIN lesson l ON s.LessonID = l.ID
    INNER JOIN locationadress la ON s.locationadressid = la.ID" // WHERE g.GroupName = '$setRequestSQL'
);

//if($_POST['contact'] == 'group') $sqlSchedule .= "WHERE g.GroupName = '$setRequestSQL'";
//
//if($_POST['contact'] == 'teacher') $sqlSchedule .= "WHERE t.TeacherName = '$setRequestSQL' OR t.last_name = '$setRequestSQL' OR t.patronymic = '$setRequestSQL'";
//
//if($_POST['contact']  == 'audience') $sqlSchedule .= "WHERE p.PlaceName = '$setRequestSQL'";


if(!isset($_GET['schedule'], $allowed_methods)) {
    echo JSON (array(
        $sqlSchedule
    ));
};
