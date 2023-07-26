<?php

if(!file_exists(__DIR__ .'/checkSessionAndDB.php')){
    http_response_code(500);
    echo(json_encode(["message" => "нет доступа"]));
    exit;
}
require_once __DIR__ .'/checkSessionAndDB.php';

$json = json_decode(file_get_contents('php://input'), true);

$connect_DB = @pg_connect(VAR_CONNECT_DB);
checkConnect($connect_DB, 500);

for($iterator = 0; $iterator < count($json) - 1; ++$iterator){

    $result_DB = @pg_query_params($connect_DB, "
    UPDATE schedule
SET SubjectFirstID = (SELECT id FROM subjects WHERE subjectname = '$1'),
	SubjectSecondID = (SELECT id FROM subjects WHERE subjectname = '$2'),
	auditoryFirstID = (SELECT id FROM place WHERE placename = '$3'),
	auditorySecondID =  (SELECT id FROM place WHERE placename = '$4'),
	TeacherFirstID = (SELECT id FROM teachers WHERE second_name = '$5'),
	TeacherSecondID = (SELECT id FROM teachers WHERE second_name = '$6')
	
WHERE groupid = (SELECT id FROM groups WHERE groupname = '$7') AND
	  timeid = (SELECT id FROM lesson WHERE lessontime = '$8') AND
	  weekdayid = (SELECT id FROM weekday WHERE weekdayname = '$9') AND
	  locationnameid = (SELECT id FROM locationaddress WHERE locationname = '$10')
    ", [
        $json['new'][$iterator]['subjectFirst'],
        $json['new'][$iterator]['subjectSecond'],
        $json['new'][$iterator]['auditoryFirst'],
        $json['new'][$iterator]['auditorySecond'],
        $json['new'][$iterator]['teacherFirst'],
        $json['new'][$iterator]['teacherSecond'],
        $json['prev'][$iterator]['groupNumber'],
        $json['prev'][$iterator]['time'],
        $json['prev'][$iterator]['weekDay'],
        $json['prev'][$iterator]['locationName'],
    ]);

    checkConnect($result_DB, 500);
}