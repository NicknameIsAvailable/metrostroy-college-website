<?php
if(!file_exists(__DIR__ . '/checkSessionAndDB.php')){
    http_response_code(500);
    exit;
}
require_once __DIR__ . '/checkSessionAndDB.php';

$rest_json = json_decode(file_get_contents("php://input"), true);

if (!isset($rest_json['valueSearch'], $rest_json['valueRadioButton'])) {
    http_response_code(404);
    exit;
}

$varValueSearch = pg_escape_string($rest_json['valueSearch']); //Значение поля
$varValueRadioButton = pg_escape_string($rest_json['valueRadioButton']); // Значение кнопки (какую выбрали)

$sqlSchedule = "SELECT g.GroupName as groupNumber, p1.PlaceName as auditoryFirst, p2.PlaceName as auditorySecond, w.WeekDayName as weekDay, sub1.SubjectName as subjectFirst, sub2.SubjectName as subjectSecond, t1.second_name as teacherFirst, t2.second_name as teacherSecond, l.LessonTime as time, la.locationname as locationName
FROM schedule s
    INNER JOIN groups g ON s.GroupID = g.id
    INNER JOIN lesson l ON s.TimeID = l.id
    INNER JOIN weekday w ON s.WeekdayID = w.id
    LEFT JOIN subjects sub1 ON s.SubjectFirstID = sub1.id
    LEFT JOIN subjects sub2 ON s.SubjectSecondID = sub2.id
    LEFT JOIN teachers t1 ON s.TeacherFirstID = t1.id
    LEFT JOIN place p1 ON s.auditoryFirstID = p1.id
    LEFT JOIN teachers t2 ON s.TeacherSecondID = t2.id
    LEFT JOIN place p2 ON s.auditorySecondID = p2.id
    INNER JOIN locationaddress la ON s.locationNameId = la.id
    ORDER BY s.id
    ";

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

$connectDB = @pg_connect(VAR_CONNECT_DB);
checkConnect($connectDB, 500);

$pg_sqlRequest = @pg_query($connectDB, $sqlSchedule);
checkConnect($pg_sqlRequest, 500);

$arrayJSON = json_encode(pg_fetch_all($pg_sqlRequest));

$result = @pg_close($connectDB);
checkConnect($result, 500);

echo $arrayJSON;