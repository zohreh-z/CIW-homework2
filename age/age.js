// JavaScript Document
window.onload=function(){

	var bday=new Date(prompt("Enter your BirthDay?","05 feb 1990"));
	function birthday(){
		var now=new Date();
		now1=new Date(now.getTime()-bday.getTime());
		document.getElementById('txt').innerHTML=now1.getFullYear()-1970+' Year '+now1.getMonth()+' Month '+(now1.getDay()-1)+' Day '+now1.getHours()+' Hours '+now1.getMinutes()+' Minutes '+now1.getSeconds()+' Seconds ';;
	}
	setInterval(birthday,50);

}
