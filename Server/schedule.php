<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

require_once('connectDB.php');

// подключение сессии и куки(в будущем!)

if (!$_SERVER["REQUEST_METHOD"] == "POST") {
    echo "ошибка";
//    обработать исключение
}

$rest_json = json_decode(file_get_contents("php://input"), true);

if (isset($rest_json['valueSearch'], $rest_json['valueRadioButton'])) {

    $varValueSearch = pg_escape_string($rest_json['valueSearch']); //Значение поля
    $varValueRadioButton = $rest_json['valueRadioButton']; // Значение кнопки (какую выбрали)

} else {

    // обработать исключения

}

$sqlSchedule = "SELECT g.GroupName as groupNumber, p1.PlaceName as auditoryFirst, p2.PlaceName as auditorySecond, w.WeekDayName as weekDay, sub1.SubjectName as subjectFirst, sub2.SubjectName as subjectSecond, t1.second_name as teacherFirst, t2.second_name as teacherSecond, l.LessonTime as time, la.locationname as locationName
FROM schedule s
    INNER JOIN groups g ON s.GroupID = g.ID
    INNER JOIN lesson l ON s.TimeID = l.ID
    INNER JOIN weekday w ON s.WeekdayID = w.ID
    INNER JOIN subjects sub1 ON s.SubjectFirstID = sub1.ID
    INNER JOIN subjects sub2 ON s.SubjectSecondID = sub2.ID
    INNER JOIN teachers t1 ON s.TeacherFirstID = t1.ID
    INNER JOIN place p1 ON s.auditoryFirstID = p1.ID
    INNER JOIN teachers t2 ON s.TeacherSecondID = t2.ID
    INNER JOIN place p2 ON s.auditorySecondID = p2.ID
    INNER JOIN locationadress la ON s.locationNameId = la.ID
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
        $sqlSchedule .= "WHERE t1.second_name = '$varValueSearch' OR t2.second_name = '$varValueSearch'";
        break;
    }
}

$pg_sqlRequest = @pg_query($connectSQL, $sqlSchedule);

if(pg_num_rows($pg_sqlRequest) < 1) exit('Запрос не получил ни одного результата!'); // Разные виды ошибок на js!

$arrayJSON = json_encode(pg_fetch_all($pg_sqlRequest));

print_r($arrayJSON);

?>