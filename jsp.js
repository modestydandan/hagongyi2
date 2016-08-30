// JavaScript Document<script language="javascript">
//index	中的图片轮换图片效果
var now=1;//图片轮转
	function init()
	{
		for(i=1;i<4;i++)
		{
		if(now==i)document.getElementById("pic"+i).style.display="block";
		else document.getElementById("pic"+i).style.display="none";
		}
		now++;
		if(now==4)now=1;
		setTimeout("init()",1000);
	}
	
	
	
function toDouble(n)
{
	if(n<10)
	{
		return '0'+n;
	}
	else
	{
		return ''+n;
	}
}

	function tick()
	{
			
		var Bimg=document.getElementById('img2');
		var aImg=Bimg.getElementsByTagName('img');
		var oDate=new Date();
		var str=toDouble(oDate.getHours())+toDouble(oDate.getMinutes())+
		toDouble(oDate.getSeconds());
		for( var i=0;i<aImg.length;i++)
		{
			aImg[i].src="number/"+str[i]+".jpg";
		}
		setInterval("tick()",1000);
	}
	
	

	

