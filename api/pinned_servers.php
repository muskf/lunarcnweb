<?php
$servers = [
    "QbyPixel" => "mc.cubewhy.eu.org",
    "HLN-Hypixel Boost" => "bpc-jp.hln-boost.eu.org"
//    "Hypixel" => "mc.hypixel.net"
]; // LiquidLunar 置顶服务器

$format = $_GET["format"];

switch ($format) {
    case "json":
        echo json_encode($servers);
        break;
    case "raw":
        foreach ($servers as $server) {
            echo $server;
            echo "\n";
        }
        break;
}
