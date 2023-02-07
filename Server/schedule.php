<?php
header('Access-Control-Allow-Origin: *');

require "connectDB.php";

if(isset($_POST['search'])){ // Обновление страницы, первый заход показывает только html вариант, далее отправляется post-запрос и выводится расписание вместе с html разметкой

$sqlSchedule = "SELECT p.PlaceName as \"Аудитория\", w.WeekDayName as \"День недели\", g.GroupName as \"№ Группы\", sub.SubjectName as \"Предмет\", t.TeacherName as \"Имя\", t.last_name as \"Фамилия\", t.patronymic as \"Отчество\", l.LessonTime as \"Начало занятий\", la.nameadress as \"Местро проведения\"
FROM schedule s
    INNER JOIN place p ON s.PlaceID = p.ID
    INNER JOIN groups g ON s.GroupID = g.ID
    INNER JOIN subjects sub ON s.SubjectID = sub.ID
    INNER JOIN teachers t ON s.TeacherID = t.ID
    INNER JOIN weekday w ON s.WeekdayID = w.ID
	INNER JOIN lesson l ON s.LessonID = l.ID
    INNER JOIN locationadress la ON s.locationadressid = la.ID"; // WHERE g.GroupName = '$setRequestSQL'

$resultSQL = pg_query($connectSQL, $sqlSchedule);

if(!isset($_GET['schedule'], $allowed_methods)) {
    echo JSON (array(
        $resultSQL,
    ));
}};
//
//if($_POST['contact'] == 'group') $sqlSchedule .= "WHERE g.GroupName = '$setRequestSQL'";
//
//if($_POST['contact'] == 'teacher') $sqlSchedule .= "WHERE t.TeacherName = '$setRequestSQL' OR t.last_name = '$setRequestSQL' OR t.patronymic = '$setRequestSQL'";
//
//if($_POST['contact']  == 'audience') $sqlSchedule .= "WHERE p.PlaceName = '$setRequestSQL'";


