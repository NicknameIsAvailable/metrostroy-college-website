<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    include "connectDB.php";
    $json = file_get_contents("php://input");
    $obj = json_decode($json, true);
    $search = $obj['search'];
    $json = json_encode($obj);
    echo $json;
    $mama = $_POST['govno'];
    echo $mama;
