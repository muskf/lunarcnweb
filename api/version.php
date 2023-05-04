<?php
header('Content-Type: text/plain; charset=utf-8');

$owner = 'CubeWhyMC';
$repo = 'LunarClient-CN';

$url = "https://api.github.com/repos/{$owner}/{$repo}/releases/latest";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: application/vnd.github.v3+json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Linux; Android 8.1.0; OPPO R11st Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36');

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

if ($httpcode === 200) {
  $data = json_decode($response, true);
  $version = htmlspecialchars($data['tag_name'], ENT_QUOTES, 'UTF-8');
  echo "document.write(\"$version\")";
} else {
  http_response_code($httpcode);
  error_log("Failed to get latest release version for {$owner}/{$repo}");
  echo "document.write(\"v2.11.2-fix20\")";
}
?>
