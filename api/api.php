<?php
// 获取公告内容
$announcement = $_POST['announcement'];

// 如果公告内容非空，则写入到文件中
if(!empty($announcement)) {
	$file = fopen('/minad/announcement.txt', 'w');
	fwrite($file, $announcement);
	fclose($file);
	echo '公告发布成功！';
	exit;
}

// 如果公告内容为空，则读取文件中的最新公告内容并返回
if(file_exists('/minad/announcement.txt')) {
	$file = fopen('/minad/announcement.txt', 'r');
	$announcement = fread($file, filesize('/minad/announcement.txt'));
	fclose($file);
	echo $announcement;
} else {
	echo '暂无公告';
}
?>
