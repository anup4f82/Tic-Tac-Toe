$(document).ready (function(){
count = 0;

$('#zero').on('click',function(){
	
	place(this)
   
  	 
});
$('#one').on('click',function(){

	place(this)

});
$('#two').on('click',function(){
	

	place(this)
	
  	 
});
$('#three').on('click',function(){
	
	place(this)
  	 
});
$('#four').on('click',function(){
	
	place(this)
  	 
});
$('#five').on('click',function(){
	
	place(this)
  	 
});

$('#six').on('click',function(){
	
	place(this)
  	 
});

$('#seven').on('click',function(){
	
	place(this)
  	 
});

$('#eight').on('click',function(){
	
	place(this)
  	 
});







function place(e){

	

if (count%2 === 0) {

   value =  "X"
}

else {

	value =  "O"
}

e.innerHTML = value
count+=1

}


});

