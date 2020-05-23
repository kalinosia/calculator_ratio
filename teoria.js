var zdjeciaone=['gify/one1.jpg','gify/one2.jpg','gify/one3.jpg', 'gify/one4.jpg', 'gify/one5.jpg', 'gify/one6.jpg'];
var zdjeciafour=['gify/four1.jpg','gify/four2.jpg','gify/four3.jpg', 'gify/four4.jpg', 'gify/four5.jpg'];
var i=1;
var j=1;
function one(){
	
	//if(document.getElementById('zdjecieone').src == "gify/one1.jpg") document.getElementById('zdjecieone').src = zdjeciaone[1] ;
	
	if(i==6)i=0;
	
	document.getElementById('zdjecieone').src = zdjeciaone[i] ;
	i++;
	
}
function four(){
	
	if(i==5)i=0;
	
	document.getElementById('zdjeciefour').src = zdjeciafour[i] ;
	i++;
	
}

