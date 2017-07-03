var Li = document.getElementsByClassName("tu");
var inde = 0
setInterval(function() {
	for (var i = 0; i < Li.length; i++) {
		Li[i].style.opacity = "0";
	}
	Li[inde].style.opacity = "1";
	inde++;
	if (inde > 3) {
		inde = 0;
	}
}, 2000)


var hd = document.getElementsByClassName("hd");
var ind = 0;
function show() {
	for (var i = 0; i < hd.length; i++) {
		hd[i].style.background = "black";
		hd[i].style.background = "rgba(0,0,0,0.5)";
	}
	hd[ind].style.background = "red";
	ind++;
	if (ind > 3) {
		ind = 0;
	}
}
setInterval("show()", 2000);

//单击四个按钮跳转到相应位置
var num1 = 0;
var num2 = 0;
function show1(num) {
	for (var i = 0; i < hd.length; i++) {
		hd[i].style.background = "black";
		hd[i].style.background = "rgba(0,0,0,0.5)";
		Li[i].style.opacity = "0";
	}
	Li[num].style.opacity = "1";
	hd[num].style.background = "red";
	num1 = num;
	num = num2;
}

//上一页，下一页
var ind=0;
function shngyiye(num){
	if(num==11){
		ind--;
		if(ind<0){
			ind=3;
		}
		for(var i=0;i<Li.length;i++){
			Li[i].style.opacity="0";
		}
		Li[ind].style.opacity="1";
	}else{
		ind++;
		if(ind>3){
			ind=0;
		}
		for(var i=0;i<Li.length;i++){
			Li[i].style.opacity="0";
		}
		Li[ind].style.opacity="1";
	}
}
