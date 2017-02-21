// JavaScript Document

function $( v ){
	if( typeof v === 'function' ){
		window.onload = v;
	} else if ( typeof v === 'string' ) {
		return document.getElementById(v);
	} else if ( typeof v === 'object' ) {
		return v;
	}
}
//运动函数
	function doMove(obj,dir,taget,attr,endFn){
		dir=parseInt(getStyle(obj,attr))<taget?dir:-dir;
			clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var speed=parseInt(getStyle(obj,attr))+dir;
			if(speed>taget&&dir>0||speed<taget&&dir<0){
				speed=taget;
			}
			obj.style[attr]=speed +'px';
			if(speed==taget){
				clearInterval(obj.timer);
				if(endFn){
					endFn();
				}
			}
			},50);
		}
	//抖动 函数
		function shake(obj,attr,endFn){
			if(obj.onoff){
				return;
			}
			 obj.onoff=true;
					var pos=parseInt(getStyle(obj,attr));
					var arr=[];
					var num=0;
					var timer=null;
					for(var i=20;i>0;i-=2){
						arr.push(i,-i);
					}
					arr.push(0);
					clearInterval(obj.shake);
					obj.shake=setInterval(function(){
					obj.style[attr]=pos+arr[num]+'px';
					num++;
					if(num==arr.length){
						clearInterval(obj.shake);
						if(endFn){
							endFn();
						}
						obj.onoff= false;
					}
					},50)
				}
//获取某个元素的某个属性的方法
function getStyle( obj, attr ){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}
//滚动缓冲函数
	function moveLeft(obj,old,now){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			//设置缓冲时间
			var ispeed=(now-old)/10;
		ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
			if(now==old){
				clearInterval(obj.timer);
			}else{
				old=ispeed+old;
				obj.style.left=old+'px';
		}
		},30)
		
	}
	
//渐入
function  fadeIn(obj){
	var iCurr=getStyle(obj,'opacity');
	if(iCurr==1){
		return false;
	}
	var value=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var iSpeed=5;
		if(value==100){
			clearInterval(obj.timer);
		}else{
			value+=iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+')';
		}
	},60);
}
//渐出
function fadeOut(obj){
	var iCurr=getStyle(obj,'opacity');
	if(iCurr==1){
		return false;
	}
	var value=100;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var iSpeed=-5;
		if(value==0){
			clearInterval(obj.timer);
		}else{
			value+=iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+')';
		}
	},60);
}