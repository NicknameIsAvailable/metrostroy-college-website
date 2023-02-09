<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
require(__DIR__ . "/schedule.php");

function JSON ($arr = array()) {
    return @json_encode($arr, 128);
};

function apiError($msg) {
    echo JSON (array(
        'error' => true,
        'reason' => $msg
    ));
};

if(!isset($_GET['action'])) {
    apiError("No method specified");
};

$action = $_GET['action'];




