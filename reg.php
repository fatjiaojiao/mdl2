<?php
	header("Content-type:text/html;charset=utf-8");
	
	//一、接收数据
	$phonenumber = $_GET['phonenumber'];
	
	//二、从数据库中查询
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		//die("连接失败".mysql_error());
		//三、响应
	}else{
		mysql_select_db("mdl",$conn);
		$sqlstr="select*from user where phonenumber='$phonenumber'";
		$result=mysql_query($sqlstr,$conn);
		mysql_close($conn);
		
		if(mysql_num_rows($result)==0){
			echo "0";
		}else{
			echo "1";
		}
	}
?>