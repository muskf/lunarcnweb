<?php
$servers = [
    "QbyPixel" => "mc.cubewhy.eu.org",
    "test" => "test"
]; // LiquidLunar 置顶服务器

if (in_array("format", $_GET)) {
    $format = $_GET["format"];
} else {
    $format = "raw";
}

switch ($format) {
    case "json":
        echo json_encode($servers);
        break;
    case "raw":
        foreach ($servers as $server) {
            echo $server;
            echo "\n";
        }
}
