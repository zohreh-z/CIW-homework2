// JavaScript Document

for(i=0;i<200;i++){
	document.write('<div class="box"></div>');
}

function rnd(x,y){
	
	return Math.floor(Math.random()*(y-x+1))+x;
}

function rndcolor(){
	
	var c='#';
	for(i=0;i<6;i++){
		c+=rnd(0,15).toString(16);
	}
	return c;
}

var listbox=document.getElementsByClassName('box');

show=function(){
	for(j=0;j<listbox.lenght;j++){
		listbox.item(j).style.position='absolute';	
		listbox.item(j).style.height=rnd(5,20)+'px';	
		listbox.item(j).style.width=rnd(1,30)+'px';	
		listbox.item(j).style.left=rnd(1,90)+'%';
		listbox.item(j).style.top=rnd(1,90)+'%';
		listbox.item(j).style.backgroundColor=rndcolor();
	}
}

setInterval(show,1000);