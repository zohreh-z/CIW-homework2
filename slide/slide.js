// JavaScript Document
window.onload=function(){
	var slide=document.getElementsByClassName('scroll').item(0);
	var train=slide.getElementsByClassName('train').item(0);
	var current=0;
	var lists=slide.getElementsByClassName('btn').item(0).getElementsByTagName('li');
	gotoslide=function(n){
		if(n>=lists.length) n=0;
		train.style.left=(-n*980)+'px';
		lists.item(current).className='';
		lists.item(n).className='active';
		current=n;
	
	}
	
	autoplay=function(){
		gotoslide(current+1);
	}
	
	for(var i=0;i<lists.length;i++){
		(function(j){
			lists.item(j).onclick=function(){
				gotoslide(j);
			}
		})(i);
	}
	setInterval(autoplay,3000);
}