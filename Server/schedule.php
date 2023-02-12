<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once('connectDB.php');

// подключение сессии и куки(в будущем!)

if (!$_SERVER["REQUEST_METHOD"] == "POST") {
    echo "ошибка";
//    ошибка не тот метод запроса
}

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if(!isset($_POST['valueSearch'], $_POST['valueRadioButton'])){
    header('Location:');// Вывести предупреждение!
}

$varValueSearch = pg_escape_string($_POST['valueSearch']); //Значение поля
$varValueRadioButton = $_POST['valueRadioButton']; // Значение кнопки (какую выбрали)

$sqlSchedule = "SELECT p.PlaceName as \"Аудитория\", w.WeekDayName as \"День недел\", g.GroupName as \"№ Группы\", sub.SubjectName as \"Предмет\", t.second_name as \"Ф.И.О.\", l.LessonTime as \"Начало занятий\", la.locationname as \"Местро проведения\"
FROM schedule s
    INNER JOIN place p ON s.PlaceID = p.ID
    INNER JOIN groups g ON s.GroupID = g.ID
    INNER JOIN subjects sub ON s.SubjectID = sub.ID
    INNER JOIN teachers t ON s.TeacherID = t.ID
    INNER JOIN weekday w ON s.WeekdayID = w.ID
    INNER JOIN lesson l ON s.LessonID = l.ID
    INNER JOIN locationadress la ON s.locationadressid = la.ID
    ";

//TODO: добавить where

switch($varValueRadioButton){
    case 'Group' : {
        $sqlSchedule .= "WHERE g.groupname = '$varValueSearch'";
        break;
    }
    case 'Location' : {
        $sqlSchedule .= "WHERE la.locationname = '$varValueSearch'";
        break;
    }
    case 'Teacher' :
    {
        $sqlSchedule .= "WHERE t.second_name = '$varValueSearch'";
        break;
    }
}

$pg_sqlRequest = @pg_query($connectSQL, $sqlSchedule);

if(pg_num_rows($pg_sqlRequest) < 1) exit('Запрос не получил ни одного результата!'); // Разные виды ошибок на js!

$arrayJSON = array();

for($iterator = 0; $iterator < pg_num_rows($pg_sqlRequest); ++$iterator) $arrayJSON[] = pg_fetch_array($pg_sqlRequest, $iterator, PGSQL_ASSOC);

$olga = json_encode($arrayJSON, true);

print_r($olga);
?>