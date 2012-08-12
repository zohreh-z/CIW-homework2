//Zepto
$(function(){

	var slides	= $('div.scroll div.train'),
		train	 = $('div.scroll div.train > div'),
		lists	  = $('div.scroll ul.btn li'),
		current=0,picsize=640,flag=false;
	
	(gotoslide = function(n){

		if(n>=lists.length) n=0;
		if(n<0) n=lists.length-1;
		train.css({left : (-n*picsize)+'px'});
		lists.eq(current).removeClass('active');
		lists.eq(n).addClass('active');
		current=n;

	})(0);
	
	lists.click(function(){
		gotoslide($(this).index());
	})
})


// JavaScript Document
/*
tm=function(){
	var slide=document.getElementsByClassName('scroll').item(0);
	var train=slide.getElementsByClassName('train').item(0);
	var lists=slide.getElementsByClassName('btn').item(0).getElementsByTagName('li');
	
		
	autoPlayStart=function(){
		if(flag) return;
		t=setInterval(autoplay,2000);	
	}
	
	autoPlayStop=function(){
		clearInterval(t);
		flag=false;
	}
	
	gotoslide=function(n){
		if(n>=lists.length) n=0;
		if(n<0) n=lists.length-1;
		train.style.left=(-n*picsize)+'px';
		lists.item(current).className='';
		lists.item(n).className='active';
		current=n;
	}
	
	prvSlide=function(){
		gotoslide(current-1);
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
	
	slide.getElementsByClassName('prev').item(0).onclick=prvSlide;
	slide.getElementsByClassName('next').item(0).onclick=autoplay;
	slide.onmouseover=autoPlayStop;
	slide.onmouseout=autoPlayStart;
	gotoslide(0);
	autoPlayStart();
}*/