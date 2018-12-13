
//1、
//功能：判断一个年份是不是闰年:
//参数：年
//返回值：true:是闰年；false：不是闰年；

function isRunYear(year){
	if((year%4==0 && year%100!=0)||(year%400==0)){
		return true;
	}else{
		return false;
	}
}

//2、
//功能：判断一个数是不是素数
//参数：一个数
//返回值：true：是素数；false：不是素数
function isPrime(num){
	//2、判断
	var isSu=true;//假定是质数（素数）
	for(var i=2;i<=num-1;i++){
		if(num%i==0){//有因数
			isSu = false;
			break;
		}
	}	
	return isSu;
}

//3、
//功能：判断一个数是不是水仙花数
//参数：一个数
//返回值：true：是水仙花数；false：不是水仙花数
function isWaterFlower(num){
	//1、求出num的每个位置上的数字
	var ge = num%10;
	var shi = parseInt(num/10)%10;
	var bai = parseInt(num/100);
	
	//2、判断
	if(ge*ge*ge+shi*shi*shi+bai*bai*bai==num){
		return true;
	}else{
		return false;
	}
}


//4、
//封装函数：
//功能：产生n位数字验证码
//参数：
//      验证码的位数
//返回值：n位验证码

function checkMa(n){
	var str="";
	for(var i=0;i<n;i++){
		//1、随机获取一个0-9之间的数字
		var num = parseInt(Math.random()*10);//0
		//2、把获取到的数字拼接到str上。
		str = str+num;
	}
	return str;
}

//5、
//功能：根据年月日计算，日期是当年的第几天
//参数：年，月，日
//返回值：第几天

function getDayCount(year,month,date){
	//2、逻辑	
	var seconds=28;
	var days = 0;
	switch(month){
		case 12:days = days+30;
		case 11:days = days+31;
		case 10:days = days+30;
		case 9:days = days+31;
		case 8:days = days+31;
		case 7:days = days+30;
		case 6:days = days+31;
		case 5:days = days+30;
		case 4:days = days+31;
		case 3:days = days+seconds;
		case 2:days = days+31;
		case 1:days = days + date;
	}
	if(month>2){
		if(isRunYear(year)==true){
			days +=1;
		}
	}
	
	//3、（输出）改变文本框的内容
	return days;
}

//功能：求1-n之间的数的阶乘和 
//参数：n
//返回值：和

function factorailSum(n){
	//2、逻辑
	var sum = 0;
	for(var i=1;i<=n;i++){
		//1）、求阶乘
		var jie=1;
		for(var j=1;j<=i;j++){
			jie = jie*j;
		}
		
		//2）、求和
		sum = sum +jie;
	}
	
	//3、输出
	return sum;
	
}

//功能：打印n-m年间的闰年，每行打印4个
//参数：起始年份，结束年份
//返回值：无

function printRunYear(startYear,endYear){
	var count=0;
	for(var year=startYear;year<=endYear;year++){
		if(isRunYear(year)==true){
			document.write(year+",");
			count++;
			if(count%4==0){
				document.write("<br/>");
			}
		}
	}
}

//根据数字得到汉字的星期
//参数：数字
//返回值：汉字的星期

function getWeek(num){
	switch(num){
		case 0:return "星期天";
		case 1:return "星期一";
		case 2:return "星期二";
		case 3:return "星期三";
		case 4:return "星期四";
		case 5:return "星期五";
		case 6:return "星期六";
		default:;
	}
}

//判断日期的合法性
//参数：年，月，日
//是否合法：true：合法；false：不合法；
function isDate(year,month,date){
	//1、年的合法性
	if(year<0){
		return false;
	}
	
	//2、月份的合法性
	if(month<1 || month>12){
		return false;
	}
	
	//3、日期的合法性
	//1)、保证在1-31之间
	if(date<1 || date>31){
		return false;
	}
	/*
	if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
		if(date>31){
			return false;
		}
	}
*/	
	
	//2）、30天的情况
	if(month==4 || month==6 || month==9 || month==11){
		if(date>30){
			return false;
		}
	}
	
	if(month==2){
		if(isRunYear(year)==true){
			if(date>29){
				return false;
			}
		}else{
			if(date>28){
				return false;
			}
		}
	}
	
	return true;
	
}
