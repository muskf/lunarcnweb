<?php
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$allowed_user_agent = "liquidlunar";
$check_uuid_file = "uuid.txt";

// 验证请求参数
$uuid = $_GET['uuid'] ?? '';

if ($uuid !== '') {
    // 检查是否存在相同的 UUID 值
    $existing_uuids = file($check_uuid_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if (in_array($uuid, $existing_uuids)) {
        echo "UUID already exists.";
        exit;
    }

    // 查询 Mojang API 验证 UUID
    $mojang_api_url = "https://sessionserver.mojang.com/session/minecraft/profile/{$uuid}";
    $response = file_get_contents($mojang_api_url);

    if ($response !== false) {
        $json = json_decode($response, true);

        if (isset($json['id']) && isset($json['name'])) {
            // UUID 存在，写入到 checkuuid.txt 文件
            file_put_contents($check_uuid_file, $uuid . "\n", FILE_APPEND);
            echo "Done";
        } else {
            echo "Invalid response from Mojang API.";
            exit;
        }
    } else {
        echo "Failed to connect to Mojang API.";
        exit;
    }
} else {
    echo "Invalid request.";
    exit;
}
?>
