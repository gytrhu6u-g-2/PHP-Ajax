<?php
    $id = $_POST['id'];
    $name = $_POST['name'];
    $age = $_POST['age'];
    $list = array("id" => $id, "name" => $name, "age" => $age);
    header("Content-type: application/json; charset=UTF-8");
    echo json_encode($list);
    exit();