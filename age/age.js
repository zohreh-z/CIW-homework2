// JavaScript Document
window.onload=function(){

	var bday=new Date(prompt("Enter your BirthDay?","05 feb 1990"));
	function birthday(){
		var now=new Date();
		now1=new Date(now.getTime()-bday.getTime());
	
		var time;
		time=now1.getFullYear()-1970+' Year ';	
		time+=now1.getMonth()+' Month ';
		time+=now1.getDay()+' Day ';
		time+=now1.getHours()+' Hours ';
		time+=now1.getMinutes()+' Minutes ';
		time+=now1.getSeconds()+' Seconds ';
		document.getElementById('txt').innerHTML=time;
	}
	setInterval(birthday,50);

}
