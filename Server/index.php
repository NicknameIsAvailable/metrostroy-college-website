<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
require(__DIR__ . "/api.php");

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

if(!in_array($_GET['action'])) {
    apiError("That method is not allowed");
};

$action = $_GET['action'];




