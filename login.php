<?php
	header("Content-type:text/html;charset=utf-8");
	$phone=$_GET['phonenumber'];
	$email=$_GET['email'];
	$pass=$_GET['pass'];
	$conn=mysql_connect('localhost','root','root');
	if(!$conn){
		
	}else{
		mysql_select_db("mdl",$conn);
		$sqlstr="select*from user where phonenumber='$phonenumber' and email='$email' and pass='$pass'";
		$result=mysql_query($sqlstr,$conn);
		mysql_close($conn);
		
		if(mysql_num_rows($result)==0){
			echo "0";
		}else{
			echo "1";
		}
	}
?>