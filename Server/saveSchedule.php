<?php

if(!file_exists(__DIR__ . '/checkSessionAndDB.php')){
    http_response_code(500);
    echo json_encode(["message" => "Нет доступа"]);
    exit;
}
require_once __DIR__ . '/checkSessionAndDB.php';

$connect_DB = @pg_connect(VAR_CONNECT_DB);
checkConnect($connect_DB, 500, 'Нет подключения к базе данных!');

$json = json_decode(file_get_contents("php://input"), true);

function getNameTableJSON($strNameTAble) : string {
    switch ($strNameTAble) {
        case 'groups' : {
            $strNameTAble = 'Группа : ';
            break;
        }

        case 'weekday' : {
            $strNameTAble = 'День недели : ';
            break;
        }

        case 'lesson' : {
            $strNameTAble = 'Время занятий : ';
            break;
        }

        case 'locationaddress' : {
            $strNameTAble = 'Адрес занятий : ';
            break;
        }

        case 'place' : {
            $strNameTAble = 'Аудитория : ';
            break;
        }

        case 'subjects' : {
            $strNameTAble = 'Предмет : ';
            break;
        }

        case 'teachers' : {
            $strNameTAble = 'Преподаватель : ';
            break;
        }

    }

    return $strNameTAble;
}

function getValueArray($arrayLocal) : array {

    if(count($arrayLocal) == 0)
        return [];

    $arrayList = [];
    foreach ($arrayLocal AS $value){
        foreach ($value AS $keyLocal=> $valueLocal)
            if($keyLocal != 'id')
                $arrayList[] = $valueLocal;
    }

    return $arrayList;
}

$data_list_table_db = [
    ['name'=> 'groups', 'column'=> '', 'replace'=> 'Есть изменения', 'data'=> ''],
    ['name'=> 'lesson', 'column'=> '', 'replace'=> 'Есть изменения', 'data'=> ''],
    ['name'=> 'weekDay', 'column'=> '', 'replace'=> 'Есть изменения', 'data'=> ''],
    ['name'=> 'subjects', 'column'=> '', 'replace'=> 'Есть изменения', 'data'=> ''],
    ['name'=> 'teachers', 'column'=> '', 'replace'=> 'Есть изменения', 'data'=> ''],
    ['name'=> 'place', 'column'=> '', 'replace'=> 'Есть изменения', 'data'=> ''],
    ['name'=> 'subjects', 'column'=> '', 'replace'=> 'Есть изменения', 'data'=> ''],
    ['name'=> 'teachers', 'column'=> '', 'replace'=> 'Есть изменения', 'data'=> ''],
    ['name'=> 'place', 'column'=> '', 'replace'=> 'Есть изменения', 'data'=> ''],
    ['name'=> 'locationaddress', 'column'=> '', 'replace'=> 'Есть изменения', 'data'=> '']];

$array_new_data = array(); // Массив для новых значений.

if(!isset($json['fromCsv'], $json['schedule'])){
    http_response_code(403);
    echo json_encode(['message'=> 'Плохой запрос JSON']);
    exit;
}

if($json['fromCsv']) {

    $json = $json['schedule']; // JSON -> schedule NOT fromCsv

    for($iterator_table_schedule = 0; $iterator_table_schedule < count($json); ++$iterator_table_schedule) {

        $data_one_table_schedule = $json[$iterator_table_schedule];

        $iterator_schedule = 0; // До -> 10
        foreach ($data_one_table_schedule AS $key => $value) {

            if($data_list_table_db[$iterator_schedule]['replace'] == 'Есть изменения'){

                $name_table = $data_list_table_db[$iterator_schedule]['name']; // Имя таблицы на итераторе.

                $data_result = @pg_query_params($connect_DB, "SELECT * FROM $name_table", []);
                checkConnect($data_result, 500, "No data result");

                $local_fetch_array = @pg_fetch_all($data_result);
                $data_list_table_db[$iterator_schedule]['data'] = getValueArray($local_fetch_array);

                $data_list_table_db[$iterator_schedule]['column'] = @pg_field_name($data_result, 1); // Получение второго столбика.

                $data_list_table_db[$iterator_schedule]['replace'] = 'Нет изменений';
            }

            if($value != null && $value != '' && $value != ' ') {

                if (!in_array($value, $data_list_table_db[$iterator_schedule]['data'])) {

                    $locNameTable = $data_list_table_db[$iterator_schedule]['name'];
                    $locKeyTable = $data_list_table_db[$iterator_schedule]['column'];

                    $result_DB = @pg_query_params($connect_DB, "INSERT INTO $locNameTable($locKeyTable) VALUES ($1)", [$value]);
                    checkConnect($result_DB, 500, "No in_array");

                    $array_new_data[] = ['name' => getNameTableJSON($locNameTable), 'value' => $value]; // Массив для вывода.

                    if ($iterator_schedule == 3 || $iterator_schedule == 4 || $iterator_schedule == 5) {
                        $data_list_table_db[$iterator_schedule + 3]['replace'] = 'Есть изменения';
                        $data_list_table_db[$iterator_schedule]['replace'] = 'Есть изменения';
                    }
                    elseif ($iterator_schedule == 6 || $iterator_schedule == 7 || $iterator_schedule == 8) {
                        $data_list_table_db[$iterator_schedule - 3]['replace'] = 'Есть изменения';
                        $data_list_table_db[$iterator_schedule]['replace'] = 'Есть изменения';
                    }
                    else
                        $data_list_table_db[$iterator_schedule]['replace'] = 'Есть изменения';
                }
            }

            ++$iterator_schedule;
        }
    }


    $result_delete_table_db = @pg_query_params($connect_DB, "TRUNCATE TABLE schedule RESTART IDENTITY", []);
    checkConnect($result_delete_table_db, 500, 'Не удалось удалить данные из таблицы!');


    $array_list_table = ['groups' => [], 'lesson' => [], 'weekDay' => [], 'subjects' => [], 'teachers' => [], 'place' => [], 'locationaddress' => []];

    foreach ($array_list_table AS $key=> $value){ // Получение значений из каждой таблицы

        $result_select_table = @pg_query_params($connect_DB, "SELECT * FROM $key", []);
        checkConnect($result_select_table, 500, 'Нет выборки!');

        $array_list_table[$key] = @pg_fetch_all($result_select_table);
    }

    for ($iterator = 0; $iterator < count($json); ++$iterator) { // Заполнение расписания id

        $localArraySELECT = reset($array_list_table);

        foreach ($json[$iterator] AS $keyJSON=> $valueJSON) {

            if ($keyJSON == 'subjectSecond') {
                for($itLoc = 0; $itLoc < 3; ++$itLoc)
                    $localArraySELECT = prev($array_list_table);
            }

            for ($itLocal = 0; $itLocal < count($localArraySELECT); ++$itLocal) {
                if ($valueJSON == $localArraySELECT[$itLocal][array_key_last($localArraySELECT[$itLocal])])
                    $json[$iterator][$keyJSON] = $localArraySELECT[$itLocal]['id'];
            }

            if($valueJSON == '' || $valueJSON == ' ')
                $json[$iterator][$keyJSON] = 'null';

            $localArraySELECT = next($array_list_table);
        }
   }

    $stringValuesIDForDB = "INSERT INTO schedule (groupid, timeid, weekdayid, subjectfirstid, teacherfirstid, auditoryfirstid, subjectsecondid, teachersecondid, auditorysecondid, locationnameid) VALUES ";

    for($iterator = 0; $iterator < count($json); ++$iterator) // Выгрузка расписания
        $stringValuesIDForDB .= "({$json[$iterator]['groupNumber']},{$json[$iterator]['time']},{$json[$iterator]['weekDay']},{$json[$iterator]['subjectFirst']},{$json[$iterator]['teacherFirst']},{$json[$iterator]['auditoryFirst']},{$json[$iterator]['subjectSecond']},{$json[$iterator]['teacherSecond']},{$json[$iterator]['auditorySecond']},{$json[$iterator]['locationName']}),";

    $stringValuesIDForDB = mb_strcut($stringValuesIDForDB, 0, -1);

    $requestDBSchedule = @pg_query($connect_DB, $stringValuesIDForDB);
    checkConnect($requestDBSchedule, 500, @pg_last_error());

    $array_new_data = json_encode($array_new_data);

    echo $array_new_data;
}
else {

    for ($iterator = 0; $iterator < count($json['prev']); ++$iterator) {

        $result_DB = @pg_query_params($connect_DB, "
    UPDATE schedule
    SET SubjectFirstID = (SELECT id FROM subjects WHERE subjectname = $1),
	    SubjectSecondID = (SELECT id FROM subjects WHERE subjectname = $2),
	    auditoryFirstID = (SELECT id FROM place WHERE placename = $3),
	    auditorySecondID = (SELECT id FROM place WHERE placename = $4),
	    TeacherFirstID = (SELECT id FROM teachers WHERE second_name = $5),
	    TeacherSecondID = (SELECT id FROM teachers WHERE second_name = $6)

WHERE groupid = (SELECT id FROM groups WHERE groupname = $7) AND
	  timeid = (SELECT id FROM lesson WHERE lessontime = $8) AND
	  weekdayid = (SELECT id FROM weekday WHERE weekdayname = $9) AND
	  locationnameid = (SELECT id FROM locationaddress WHERE locationname = $10)
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

        checkConnect($result_DB, 500, 'Bad request');
    }
}

checkConnect(@pg_close($connect_DB), 500, 'Нет закрытия БД');
