<html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</head>
<body>
    <h1> Введите сюда вашу группу </h1>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Номер группы</a>
    <form action="schedule.php" method="post">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" name="search">
      <button class="btn btn-outline-success" type="submit">Найти</button>
        <input type="radio" id="contactChoice1"
            name="contact" value="group" checked>
        <label for="contactChoice1">по группе</label>
        <input type="radio" id="contactChoice2"
            name="contact" value="teacher">
        <label for="contactChoice2">по преподавателю</label>
        <input type="radio" id="contactChoice3"
            name="contact" value="audience">
        <label for="contactChoice3">по аудитории</label>
    </form>
</form>
  </div>
</nav>
</body>
</html>

<?php 
require_once("connectDB.php");

if(isset($_POST['search'])){ // Обновление страницы, первый заход показывает только html вариант, далее отправляется post-запрос и выводится расписание вместе с html разметкой  

$setRequestSQL = $_POST['search'];

$sqlSchedule = "SELECT p.PlaceName as \"Аудитория\", w.WeekDayName as \"День недели\", g.GroupName as \"№ Группы\", sub.SubjectName as \"Предмет\", t.TeacherName as \"Имя\", t.last_name as \"Фамилия\", t.patronymic as \"Отчество\", l.LessonTime as \"Начало занятий\", la.nameadress as \"Местро проведения\"
FROM schedule s
    INNER JOIN place p ON s.PlaceID = p.ID
    INNER JOIN groups g ON s.GroupID = g.ID
    INNER JOIN subjects sub ON s.SubjectID = sub.ID
    INNER JOIN teachers t ON s.TeacherID = t.ID
    INNER JOIN weekday w ON s.WeekdayID = w.ID
	INNER JOIN lesson l ON s.LessonID = l.ID
    INNER JOIN locationadress la ON s.locationadressid = la.ID"; // WHERE g.GroupName = '$setRequestSQL'

if($_POST['contact'] == 'group') $sqlSchedule .= "WHERE g.GroupName = '$setRequestSQL'";

if($_POST['contact'] == 'teacher') $sqlSchedule .= "WHERE t.TeacherName = '$setRequestSQL' OR t.last_name = '$setRequestSQL' OR t.patronymic = '$setRequestSQL'";

if($_POST['contact']  == 'audience') $sqlSchedule .= "WHERE p.PlaceName = '$setRequestSQL'";

$resultSQL = pg_query($connectSQL, $sqlSchedule);

if(pg_num_rows($resultSQL) < 1) exit;

for($iterator = 0, $j; $iterator < $j = pg_num_rows($resultSQL); ++$iterator){ 
    $resArray = pg_fetch_array($resultSQL, $iterator, PGSQL_ASSOC);

    if($iterator == 0){
        echo "
        <table class=\"table\">
            <thead>
        <tr>";

        foreach ($resArray as $key=>$value) {
            echo "<td>$key</td>";
        } 
        echo "
        </thead>
        <tr/>
        </table>";
    }

    echo "
    </thead>
    <tr/>
    </table>
    <table class=\"table\">
    <tbody>
    <tr>"; 

    foreach($resArray AS $value){
        echo "<td>$value</td>";
    }

    echo "
    </tr>
    <tbody>
    </table>";
}
}
?>

<style type="text/css">
.table{
	border: 1px solid #eee;
	table-layout: fixed;
	width: 100%;
	margin-bottom: 20px;
}
.table th {
	font-weight: bold;
	padding: 5px;
	background: #efefef;
	border: 1px solid #dddddd;
}
.table td{
	padding: 5px 10px;
	border: 1px solid #eee;
	text-align: left;
}
.table tbody tr:nth-child(odd){
	background: #fff;
}
.table tbody tr:nth-child(even){
	background: #F7F7F7;
}
</style>