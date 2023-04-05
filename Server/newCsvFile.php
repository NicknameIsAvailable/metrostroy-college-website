<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
header('Content-Type: text/html; utf-8');

//TODO: Добавить заголовки
//TODO: Указать точный путь к файлам

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

file_put_contents(__DIR__."interval.txt", file_get_contents("php://input"));

$file_csv = @fopen(__DIR__."interval.txt", 'r') or exit('Dont open');

$mainArrayMonday = array();
$mainArrayTuesday = array();
$mainArrayWednesday = array();
$mainArrayThursday = array();
$mainArrayFriday = array();
$itLocalWhile = 0;
$groupNumber = "";
while($row = fgetcsv($file_csv, separator: ';')){
    if($itLocalWhile < 12) {
        ++$itLocalWhile;
        continue;
    }
    if($itLocalWhile % 2 == 0) {
        $arrayMonday = ['groupNumber' => '', 'time' => '', 'weekDay' => 'Понедельник', 'subjectFirst' => '', 'teacherFirst' => '', 'auditoryFirst' => '', 'subjectSecond' => '', 'teacherSecond' => '', 'auditorySecond' => '', 'locationName' => 'ул. Демьяна Бедного, д.21'];
        $arrayTuesday = ['groupNumber' => '', 'time' => '', 'weekDay' => 'Вторник', 'subjectFirst' => '', 'teacherFirst' => '', 'auditoryFirst' => '', 'subjectSecond' => '', 'teacherSecond' => '', 'auditorySecond' => '', 'locationName' => 'ул. Демьяна Бедного, д.21'];
        $arrayWednesday = ['groupNumber' => '', 'time' => '', 'weekDay' => 'Среда', 'subjectFirst' => '', 'teacherFirst' => '', 'auditoryFirst' => '', 'subjectSecond' => '', 'teacherSecond' => '', 'auditorySecond' => '', 'locationName' => 'ул. Демьяна Бедного, д.21'];
        $arrayThursday = ['groupNumber' => '', 'time' => '', 'weekDay' => 'Четверг', 'subjectFirst' => '', 'teacherFirst' => '', 'auditoryFirst' => '', 'subjectSecond' => '', 'teacherSecond' => '', 'auditorySecond' => '', 'locationName' => 'ул. Демьяна Бедного, д.21'];
        $arrayFriday = ['groupNumber' => '', 'time' => '', 'weekDay' => 'Пятница', 'subjectFirst' => '', 'teacherFirst' => '', 'auditoryFirst' => '', 'subjectSecond' => '', 'teacherSecond' => '', 'auditorySecond' => '', 'locationName' => 'ул. Демьяна Бедного, д.21'];
    }

    if(!empty($row[0])) {
        $groupNumber = $row[0];
    }

    if (!empty($row[5]) && empty($row[7]) && ($itLocalWhile % 2 == 0)){ //Понедельник одна группа
        //$arrayMonday['groupNumber'] = $groupNumber;
        $arrayMonday['subjectFirst'] = $row[5];
        if(!empty($row[8]))
            $arrayMonday['auditoryFirst'] = $row[8];
    }

    if(!empty($row[5]) && empty($row[7]) && ($itLocalWhile % 2 == 1))
        $arrayMonday['teacherFirst'] = $row[5];

    if(!empty($row[5]) && !empty($row[7]) && ($itLocalWhile % 2 == 0)) { //Понедельник 2 группы
        //$arrayMonday['groupNumber'] = $groupNumber;
        $arrayMonday['subjectFirst'] = $row[5];
        $arrayMonday['subjectSecond'] = $row[7];
        $arrayMonday['auditoryFirst'] = $row[6];
        $arrayMonday['auditorySecond'] = $row[8];
    }
    if(!empty($row[5]) && !empty($row[7]) && ($itLocalWhile % 2 == 1)){
        $arrayMonday['teacherFirst'] = $row[5];
        $arrayMonday['teacherSecond'] = $row[7];
    }

    if (!empty($row[10]) && empty($row[12]) && ($itLocalWhile % 2 == 0)){ //Вторник одна группа
        //$arrayTuesday['groupNumber'] = $groupNumber;
        $arrayTuesday['subjectFirst'] = $row[10];
        if(!empty($row[13]))
            $arrayTuesday['auditoryFirst'] = $row[13];
    }
    if(!empty($row[10]) && empty($row[12]) && ($itLocalWhile % 2 == 1))
        $arrayTuesday['teacherFirst'] = $row[10];

    if(!empty($row[10]) && !empty($row[12]) && ($itLocalWhile % 2 == 0)) { //Вторник 2 группы
        //$arrayTuesday['groupNumber'] = $groupNumber;
        $arrayTuesday['subjectFirst'] = $row[10];
        $arrayTuesday['subjectSecond'] = $row[12];
        $arrayTuesday['auditoryFirst'] = $row[11];
        $arrayTuesday['auditorySecond'] = $row[13];
    }
    if(!empty($row[10]) && !empty($row[12]) && ($itLocalWhile % 2 == 1)){
        $arrayTuesday['teacherFirst'] = $row[10];
        $arrayTuesday['teacherSecond'] = $row[12];
    }

    if (!empty($row[15]) && empty($row[17]) && ($itLocalWhile % 2 == 0)){ //Среда одна группа
        //$arrayWednesday['groupNumber'] = $groupNumber;
        $arrayWednesday['subjectFirst'] = $row[15];
        if(!empty($row[18]))
            $arrayWednesday['auditoryFirst'] = $row[18];
    }
    if(!empty($row[15]) && empty($row[17]) && ($itLocalWhile % 2 == 1))
        $arrayWednesday['teacherFirst'] = $row[15];
    if(!empty($row[15]) && !empty($row[17]) && ($itLocalWhile % 2 == 0)) { //Среда 2 группы
        //$arrayWednesday['groupNumber'] = $groupNumber;
        $arrayWednesday['subjectFirst'] = $row[15];
        $arrayWednesday['subjectSecond'] = $row[17];
        $arrayWednesday['auditoryFirst'] = $row[16];
        $arrayWednesday['auditorySecond'] = $row[18];
    }
    if(!empty($row[15]) && !empty($row[17]) && ($itLocalWhile % 2 == 1)){
        $arrayWednesday['teacherFirst'] = $row[15];
        $arrayWednesday['teacherSecond'] = $row[17];
    }

    if (!empty($row[20]) && empty($row[22]) && ($itLocalWhile % 2 == 0)){ //Четверг одна группа
        //$arrayThursday['groupNumber'] = $groupNumber;
        $arrayThursday['subjectFirst'] = $row[20];
        if(!empty($row[23]))
            $arrayThursday['auditoryFirst'] = $row[23];
    }
    if(!empty($row[20]) && empty($row[22]) && ($itLocalWhile % 2 == 1))
        $arrayThursday['teacherFirst'] = $row[20];

    if(!empty($row[20]) && !empty($row[22]) && ($itLocalWhile % 2 == 0)) { //Четверг 2 группы
        //$arrayThursday['groupNumber'] = $groupNumber;
        $arrayThursday['subjectFirst'] = $row[20];
        $arrayThursday['subjectSecond'] = $row[22];
        $arrayThursday['auditoryFirst'] = $row[21];
        $arrayThursday['auditorySecond'] = $row[23];
    }
    if(!empty($row[20]) && !empty($row[22]) && ($itLocalWhile % 2 == 1)){
        $arrayThursday['teacherFirst'] = $row[20];
        $arrayThursday['teacherSecond'] = $row[22];
    }

    if (!empty($row[25]) && empty($row[27]) && ($itLocalWhile % 2 == 0)){ //Пятница одна группа
        //$arrayFriday['groupNumber'] = $groupNumber;
        $arrayFriday['subjectFirst'] = $row[25];
        if(!empty($row[28]))
            $arrayFriday['auditoryFirst'] = $row[28];
    }
    if(!empty($row[25]) && empty($row[27]) && ($itLocalWhile % 2 == 1))
        $arrayFriday['teacherFirst'] = $row[25];

    if(!empty($row[25]) && !empty($row[27]) && ($itLocalWhile % 2 == 0)) { //Пятница 2 группы
        //$arrayFriday['groupNumber'] = $groupNumber;
        $arrayFriday['subjectFirst'] = $row[25];
        $arrayFriday['subjectSecond'] = $row[27];
        $arrayFriday['auditoryFirst'] = $row[26];
        $arrayFriday['auditorySecond'] = $row[28];
    }
    if(!empty($row[25]) && !empty($row[27]) && ($itLocalWhile % 2 == 1)){
        $arrayFriday['teacherFirst'] = $row[25];
        $arrayFriday['teacherSecond'] = $row[27];
    }

    if($itLocalWhile % 2 == 1) {

        $mainArrayMonday[] = $arrayMonday;
        $mainArrayTuesday[] = $arrayTuesday;
        $mainArrayWednesday[] = $arrayWednesday;
        $mainArrayThursday[] = $arrayThursday;
        $mainArrayFriday[] = $arrayFriday;
    }
    $arrayMonday['groupNumber'] =  $groupNumber;
    $arrayTuesday['groupNumber'] = $groupNumber;
    $arrayWednesday['groupNumber'] = $groupNumber;
    $arrayThursday['groupNumber'] = $groupNumber;
    $arrayFriday['groupNumber'] = $groupNumber;

    ++$itLocalWhile;
}
unset($mainArrayMonday[count($mainArrayMonday) - 1]);
$mainArrayCsvFormat = [$mainArrayMonday, $mainArrayTuesday, $mainArrayWednesday, $mainArrayThursday,$mainArrayFriday];
for($iterator = 0; $iterator < count($mainArrayCsvFormat); ++$iterator){
    unset($mainArrayCsvFormat[$iterator][count($mainArrayMonday)]);
}

$arrayListTime = [
    '09:00 - 09:45',
    '10:00 - 10:45',
    '11:00 - 11:45',
    '12:00 - 12:45',
    '13:05 - 13:50',
    '14:10 - 14:55',
    '15:05 - 15:50',
    '15:55 - 16:40'];

for($iterator = 0; $iterator < count($mainArrayCsvFormat); ++$iterator){
    for($iteratorTwo = 0, $it_time = 0; $iteratorTwo < count($mainArrayCsvFormat[$iterator]); ++$iteratorTwo, ++$it_time){
        if($it_time == 8)
            $it_time = 0;

        $mainArrayCsvFormat[$iterator][$iteratorTwo]['time'] = $arrayListTime[$it_time];
    }
}

$mainArrayJSON = json_encode($mainArrayCsvFormat);
print_r($mainArrayJSON);
