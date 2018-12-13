<?php
	header("Content-type:text/html;charset=utf-8");
	//一，接收
	$callname = $_GET['callname'];
	$username = $_GET['username'];
	$phonenumber = $_GET['phonenumber'];
	$email = $_GET['email'];
	$pass=$_GET['pass'];
	//二、处理
	//1、连接数据库服务器	
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		
	}else{
		mysql_select_db("mdl",$conn);
		$sqlstr="insert into user(callname,username,phonenumber,email,pass)
					values('$callname','$username','$phonenumber','$email','$pass')";
		$result=mysql_query($sqlstr,$conn);
		mysql_close($conn);
		if($result==1){
			echo "1";
		}else{
			echo "0";
		}
	}
?>