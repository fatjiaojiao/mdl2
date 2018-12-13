//#20cd4f
function getColor(){
	var str="#";
	for(var i=0;i<6;i++){
		str+=(parseInt(Math.random()*16)).toString(16);
	}
	return str;
}