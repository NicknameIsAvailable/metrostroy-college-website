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

$sqlSchedule = "SELECT p.PlaceName as auditory, w.WeekDayName as weekDay, g.GroupName as groupNumber, sub.SubjectName as subject, t.second_name as secondname, l.LessonTime as time, la.locationname as locationName
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

$arrayJSON = json_encode(pg_fetch_all($pg_sqlRequest));

pg_close($connectSQL);

print_r($arrayJSON);

?>
