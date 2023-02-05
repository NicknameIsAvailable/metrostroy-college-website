<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
class api {
    public static function schedule() {
        $list = array();
    }
}

$connectSQL = pg_connect("
    host=localhost 
    port=5432 
    dbname=MetrostroyCollege 
    user=postgres
    password=postgres
    ");

$setRequestSQL = $_POST['search'];

function camelcase($str, $delimeter = "_") {
    return str_replace($delimeter, "", ucwords($str, $delimeter));
}

$sqlSchedule = "SELECT id, placeid, groupid, subjectid, teacherid, weekdayid, lessonid, locationadressid
	FROM public.schedule;"; // WHERE g.GroupName = '$setRequestSQL'

//if($_POST['contact'] == 'group') $sqlSchedule .= "WHERE g.GroupName = '$setRequestSQL'";
//
//if($_POST['contact'] == 'teacher') $sqlSchedule .= "WHERE t.TeacherName = '$setRequestSQL' OR t.last_name = '$setRequestSQL' OR t.patronymic = '$setRequestSQL'";
//
//if($_POST['contact']  == 'audience') $sqlSchedule .= "WHERE p.PlaceName = '$setRequestSQL'";

$resultSQL = pg_query($connectSQL, $sqlSchedule);

$place = pg_query($connectSQL, "SELECT placename FROM place");

if(!isset($_GET['schedule'], $allowed_methods)) {
    echo JSON (array(
        'resultSQL' => $resultSQL,
    ));
};