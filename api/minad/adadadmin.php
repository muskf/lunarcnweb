<!DOCTYPE html>
<html>
<head>
	<title>公告系统 - 管理员页面</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<h1>公告系统 - 管理员页面</h1>

    <?php
	session_start();
	// 如果未登录，显示登录界面
	if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
		if(isset($_POST['username']) && isset($_POST['password'])) {
			$username = $_POST['username'];
			$password = $_POST['password'];
			
			// 模拟用户名和密码
			$valid_username = 'cubewhy';
			$valid_password = 'asiedhioqwsaed15676123sdazd';

			if($username == $valid_username && $password == $valid_password) {
				$_SESSION['loggedin'] = true;
			} else {
				echo '<div class="error">用户名或密码不正确</div>';
			}
		}
?>
		<form method="post" action="">
			<label for="username">用户名：</label>
			<input type="text" id="username" name="username" autocomplete="off" maxlength="20" pattern="^[a-zA-Z0-9]*$" required oninput="this.value = this.value.replace(/<[^>]*>/gi, '')">
			<label for="password">密码：</label>
			<input type="password" id="password" name="password" autocomplete="off" maxlength="20" pattern="^[a-zA-Z0-9]*$" required oninput="this.value = this.value.replace(/<[^>]*>/gi, '')">
			<input type="checkbox" id="show-password" onclick="togglePasswordVisibility()"> 
			<label for="show-password">显示密码</label>
			<input type="submit" value="登录">
		</form>
<?php

		// 如果登录成功，跳转到当前页面
		if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
			header('Location: ' . $_SERVER['REQUEST_URI']);
		}
	} else {
		// 显示公告发布界面
		if(isset($_POST['announcement'])) {
			$announcement = $_POST['announcement'];

			// 将公告写入文件
			$file = 'announcement.txt';
			file_put_contents($file, $announcement);

			echo '<div class="success">公告发布成功</div>';
		}

		// 显示公告
		$file = 'announcement.txt';
		if(file_exists($file)) {
			$announcement = file_get_contents($file);
			echo '<div class="announcement"> <p>当前公告内容:</p>' . $announcement . '</div>';
		}

?>
		<form method="post" action="">
			<label for="announcement">公告内容：</label>
			<input type="text" id="announcement" name="announcement">
			<input type="submit" value="发布公告">
		</form>
<?php
		// 显示退出按钮
		echo '<form method="post" action=""><input type="submit" name="logout" value="退出"></form>';

		if(isset($_POST['logout'])) {
			session_destroy();
			header('Location: ' . $_SERVER['REQUEST_URI']);
		}
	}
?>

<script>
	function togglePasswordVisibility() {
		var passwordInput = document.getElementById("password");
		if(passwordInput.type === "password") {
			passwordInput.type = "text";
		} else {
			passwordInput.type = "password";
		}
	}
</script>

</body>
</html>
