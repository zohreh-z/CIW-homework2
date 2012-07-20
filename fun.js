// JavaScript Document

function rnd(x,y){

	return Math.floor( Math.random()*(y-x+1) )+x;
}

function rndcolor(){
	
	var c='#';
	for(i=0;i<6;i++){
		c+=rnd(0,15).toString(16);
	}
	return c;
	
}

function move(){
	
	var div= document.getElementsByClassName('box').item(0);
	div.style.left=rnd(1,90)+'%';
	div.style.top=rnd(1,90)+'%';
	div.style.color=rndcolor();
	div.style.backgroundColor=rndcolor();

}