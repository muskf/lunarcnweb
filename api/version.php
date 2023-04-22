<?php
header('Content-Type: text/plain; charset=utf-8');

$owner = 'CubeWhyMC';
$repo = 'LunarClient-CN';

$url = "https://api.github.com/repos/{$owner}/{$repo}/releases/latest";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: application/vnd.github.v3+json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3');

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

if ($httpcode === 200) {
  $data = json_decode($response, true);
  $version = $data['tag_name'];

  print "document.write(\"$version\")";
} else {
  http_response_code($httpcode);
  echo "Failed to get latest release version for {$owner}/{$repo}";
}
?>
