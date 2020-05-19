
function oblicz()
	{
		 alert("obliczam");
	}
	
	function farbabrak()
{
if(document.getElementById('farba').value!='';
{
document.getElementById('utwardzacz').disabled=true;
}}

	document.getElementById('farba').onblur = function(){
	if( this.value != '' )
	document.getElementById('utwardzacz').readony = true;
}
//================================================
	
	/*
	function funsprfarb()
	{
		var farba=document.getElementById("farba").value;
		if (farba=="") break;
		if(farba!="") alert("oblicz");
	}
	
	function oblicz()
	{
		alert("obliczam");
	var a=document.getElementById("a").value;
	var b=document.getElementById("b").value;
	
	var farba=document.getElementById("farba").value;
	var utwardzacz=document.getElementById("utwardzacz").value;
	//od tąd zacząć??
	
		var jednostka = parseFloat(farba)/parseFloat(a);
		var utwardzacznew=parseFloat(b)*parseFloat(jednostka);
		 document.getElementById("utwardzacz").value=utwardzacznew;
	
	if (utwardzacz=="" && farba!="")
		{
		var jednostka = parseFloat(farba)/parseFloat(a);
		var utwardzacz=parseFloat(b)*parseFloat(jednostka);
		return document.getElementById("utwardzacz").value=utwardzacz;
		
		}
	else if farba=="" & utwardzacz!=""
		{}
	else if farba=="" & utwardzacz==""
		alert("Wpisz wartość dla jednej z danych"); 
	else alert("Nieprawidłowe dane!");
	}
	return utwardzacz;
