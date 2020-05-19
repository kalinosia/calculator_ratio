var i;
function zatwierdz(){
	
	if (document.getElementById("two").checked==true)  i=2;
	else if (document.getElementById("three").checked==true)  i=3;
	else if (document.getElementById("four").checked==true)  i=4;
	else if (document.getElementById("five").checked==true)  i=5;
	
	switch (i) {
			 case 2: 
				document.getElementById("wybor").style.display='none';
				
				document.getElementById("liczbydwa").style.display='inline';
				document.getElementById("liczbydwasrednik").style.display ='inline';
				document.getElementById("liczbydwadwa" ).style.display ='inline';
				
				document.getElementById("opispomocniczy").style.display ='block';
				document.getElementById("showone").style.display='block';
				document.getElementById("showtwo").style.display='block';
				
				document.getElementById("przyciski").style.display='block';
				
				break;
			 case 3: 
				document.getElementById("wybor").style.display='none';
				
				document.getElementById("liczbydwa").style.display='inline';
				document.getElementById("liczbydwasrednik").style.display ='inline';
				document.getElementById("liczbydwadwa" ).style.display ='inline';
				document.getElementById("liczbytrzysrednik" ).style.display ='inline';
				document.getElementById("liczbytrzy").style.display ='inline';
				
				document.getElementById("opispomocniczy").style.display ='block';
				document.getElementById("showone").style.display='block';
				document.getElementById("showtwo").style.display='block';
				document.getElementById("showthree").style.display='block';
				
				document.getElementById("przyciski").style.display='block';
		
				break;
			 case 4: 
				document.getElementById("wybor").style.display='none';
				
				document.getElementById("liczbydwa").style.display='inline';
				document.getElementById("liczbydwasrednik").style.display ='inline';
				document.getElementById("liczbydwadwa" ).style.display ='inline';
				document.getElementById("liczbytrzysrednik" ).style.display ='inline';
				document.getElementById("liczbytrzy").style.display ='inline';
				document.getElementById("liczbyczterysrednik").style.display ='inline';
				document.getElementById("liczbycztery").style.display ='inline';
				
				document.getElementById("opispomocniczy").style.display ='block';
				document.getElementById("showone").style.display='block';
				document.getElementById("showtwo").style.display='block';
				document.getElementById("showthree").style.display='block';
				document.getElementById("showfour").style.display='block';
				
				document.getElementById("przyciski").style.display='block';
				break;
			case 5: 
				document.getElementById("opispomocniczy").style.display ='block';
				document.getElementById("wybor").style.display='none';
				document.getElementById("showone").style.display='block';
				document.getElementById("showtwo").style.display='block';
				document.getElementById("showthree").style.display='block';
				document.getElementById("showfour").style.display='block';
				document.getElementById("showfive").style.display='block';
				
				document.getElementById("przyciski").style.display='block';
				
				document.getElementById("liczbydwa").style.display='inline';
				document.getElementById("liczbydwasrednik").style.display ='inline';
				document.getElementById("liczbydwadwa" ).style.display ='inline';
				document.getElementById("liczbytrzysrednik" ).style.display ='inline';
				document.getElementById("liczbytrzy").style.display ='inline';
				document.getElementById("liczbyczterysrednik").style.display ='inline';
				document.getElementById("liczbycztery").style.display ='inline';
				document.getElementById("liczbypiecsrednik").style.display ='inline';
				document.getElementById("liczbypiec").style.display ='inline';
							
				break;
			 default: alert("Zaznacz wybraną ilość składowych żeby pojawił się formularz obliczeniowy.");
		 }
		 return i;
}
//zamiana wejścia text na liczbowe
document.querySelector('input[type="number"]').addEventListener('focus', function() {
	document.querySelector('input[type="text"]').setAttribute('type', 'number');
	document.querySelector('input[type="text"]').setAttribute('type', 'number');
	document.querySelector('input[type="text"]').setAttribute('type', 'number');
	document.querySelector('input[type="text"]').setAttribute('type', 'number');
	document.querySelector('input[type="text"]').setAttribute('type', 'number');
	});

	
//wyłączenie możliwości wpisywania danych po wpisaniu jednej
//Można spróbować zrobić CHANGE dla inputów textowych lub length lub 
//input.addEventListener("input", function() {
//    const val = this.value; i tak dlaje
//onchange można zacząć obliczać na nowo lol
   
	document.getElementById("danea").addEventListener('blur', function(){
		if (document.getElementById("danea").value!=""){
		document.getElementById("daneb").readOnly=true;
		document.getElementById("danec").readOnly=true;
		document.getElementById("daned").readOnly=true;
		document.getElementById("danee").readOnly=true;
		}
});
	document.getElementById("daneb").addEventListener('blur', function(){
		if (document.getElementById("daneb").value!=""){
		document.getElementById("danea").readOnly=true;
		document.getElementById("danec").readOnly=true;
		document.getElementById("daned").readOnly=true;
		document.getElementById("danee").readOnly=true;
		}
});
	document.getElementById("danec").addEventListener('blur', function(){
		if (document.getElementById("danec").value!=""){
		document.getElementById("daneb").readOnly=true;
		document.getElementById("danea").readOnly=true;
		document.getElementById("daned").readOnly=true;
		document.getElementById("danee").readOnly=true;
		}
		
});
	document.getElementById("daned").addEventListener('blur', function(){
		if (document.getElementById("daned").value!=""){
		document.getElementById("daneb").readOnly=true;
		document.getElementById("danec").readOnly=true;
		document.getElementById("danea").readOnly=true;
		document.getElementById("danee").readOnly=true;
		}
		
});
	document.getElementById("danee").addEventListener('blur', function(){
		if (document.getElementById("danee").value!=""){
		document.getElementById("daneb").readOnly=true;
		document.getElementById("danec").readOnly=true;
		document.getElementById("daned").readOnly=true;
		document.getElementById("danea").readOnly=true;
		}
		
});
//wykasowana dana wszystkie włączone CO JEST ŹŁE BO SIĘ ZACINALOLOLO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! można spróbować onblur w html...
/*
document.querySelectorAll('input[type="text"]').addEventListener('focus', function() {
	if  ((document.getElementById("danea").value=="")&&(document.getElementById("daneb").value=="")&&(document.getElementById("danec").value=="")&&(document.getElementById("daned").value=="")&&(document.getElementById("danee").value=="")){
		document.getElementById("danea").readOnly=false;
		document.getElementById("daneb").readOnly=false;
		document.getElementById("danec").readOnly=false;
		document.getElementById("daned").readOnly=false;
		document.getElementById("danee").readOnly=false;
	}
	});
	*/
	/*
	document.querySelector("#daneb").addEventListener('focus', function() {
	if  ((document.getElementById("danea").value=="")&&(document.getElementById("daneb").value=="")&&(document.getElementById("danec").value=="")&&(document.getElementById("daned").value=="")&&(document.getElementById("danee").value=="")){
		document.getElementById("danea").readOnly=false;
		document.getElementById("daneb").readOnly=false;
		document.getElementById("danec").readOnly=false;
		document.getElementById("daned").readOnly=false;
		document.getElementById("danee").readOnly=false;
	}
	});
	
	*/
//przywróceniemożliwości wpisywania po wyczyszczeniu danych
function wykasowanadana(){
	if  ((document.getElementById("danea").value=="")&&(document.getElementById("daneb").value=="")&&(document.getElementById("danec").value=="")&&(document.getElementById("daned").value=="")&&(document.getElementById("danee").value=="")){
		document.getElementById("danea").readOnly=false;
		document.getElementById("daneb").readOnly=false;
		document.getElementById("danec").readOnly=false;
		document.getElementById("daned").readOnly=false;
		document.getElementById("danee").readOnly=false;
	}
}

function readall(){
document.getElementById("danea").readOnly=false;		
document.getElementById("daneb").readOnly=false;	
document.getElementById("danec").readOnly=false;	
document.getElementById("daned").readOnly=false;	
document.getElementById("danee").readOnly=false;	
//czy to działa nei wiem        ?????
document.getElementById("a").required=true;
document.getElementById("b").required=true;
document.getElementById("c").required=true;
document.getElementById("d").required=true;
document.getElementById("e").required=true;

}

function oblicz(){
	var a=document.getElementById("a").value;
	var b=document.getElementById("b").value;
	var c=document.getElementById("c").value;
	var d=document.getElementById("d").value;
	var e=document.getElementById("e").value;
	
	var aa= document.getElementById("danea").value;
	var bb= document.getElementById("daneb").value;
	var cc= document.getElementById("danec").value;
	var dd= document.getElementById("daned").value;
	var ee= document.getElementById("danee").value;
	

	
	switch(i){
	case 2:
		if (((a=="")||(b==""))||((a=="")&&(b=="")))alert("Pola stosunku są wymagane!! Wpisz liczby do górnych pól!");
		
		else{
			if ((aa!="") && (bb!=""))alert("Powinna być wpisana tylko jednawartość! Usuń tą którą chcesz obliczyć. Możesz zmieniać pozostałe dane. Jeżeli masz wszystkie nowe dane, lepiej kliknij wyczyść dane!");
			else if (document.getElementById("danea").value!="") {
				var jednostka = parseFloat(document.getElementById("danea").value)/parseFloat(a);
				document.getElementById("daneb").value=parseFloat(b)*parseFloat(jednostka);
			
			}
			else if (document.getElementById("daneb").value!="") {
				var jednostka = parseFloat(bb)/parseFloat(b);
				document.getElementById("danea").value=parseFloat(a)*parseFloat(jednostka);
			}
			else alert("Wpisz dane do jednego z pól");
		}
	break;
	case 3:
	if (((a=="")||(b==""))||((a=="")&&(b=="")))alert("Pola stosunku są wymagane!! Wpisz liczby do górnych pól!");
		
		else{ 
		
			 if (aa!="") {
				var jednostka = parseFloat(aa)/parseFloat(a);
				document.getElementById("daneb").value=parseFloat(b)*parseFloat(jednostka);
				document.getElementById("danec").value=parseFloat(c)*parseFloat(jednostka);
			}
			else if (bb!="") {
				var jednostka = parseFloat(bb)/parseFloat(b);
				document.getElementById("danea").value=parseFloat(a)*parseFloat(jednostka);
				document.getElementById("danec").value=parseFloat(c)*parseFloat(jednostka);
			}
			else if (cc!="") {
				var jednostka = parseFloat(cc)/parseFloat(c);
				document.getElementById("danea").value=parseFloat(a)*parseFloat(jednostka);
				document.getElementById("daneb").value=parseFloat(b)*parseFloat(jednostka);
			}
			else alert("Brak danej!");
		}
	break;
	case 4:
		if ((a=="")||(b=="")||(c=="")||(d==""))alert("Pola stosunku są wymagane!! Wpisz liczby do górnych pól!");
		
		else{ 
		
			 if (aa!="") {
				var jednostka = parseFloat(aa)/parseFloat(a);
				document.getElementById("daneb").value=parseFloat(b)*parseFloat(jednostka);
				document.getElementById("danec").value=parseFloat(c)*parseFloat(jednostka);
				document.getElementById("daned").value=parseFloat(d)*parseFloat(jednostka);
			}
			else if (bb!="") {
				var jednostka = parseFloat(bb)/parseFloat(b);
				document.getElementById("danea").value=parseFloat(a)*parseFloat(jednostka);
				document.getElementById("danec").value=parseFloat(c)*parseFloat(jednostka);
				document.getElementById("daned").value=parseFloat(d)*parseFloat(jednostka);
			}
			else if (cc!="") {
				var jednostka = parseFloat(cc)/parseFloat(c);
				document.getElementById("danea").value=parseFloat(a)*parseFloat(jednostka);
				document.getElementById("daneb").value=parseFloat(b)*parseFloat(jednostka);
				document.getElementById("daned").value=parseFloat(d)*parseFloat(jednostka);
			}
			else if (dd!="") {
				var jednostka = parseFloat(dd)/parseFloat(d);
				document.getElementById("danea").value=parseFloat(a)*parseFloat(jednostka);
				document.getElementById("daneb").value=parseFloat(b)*parseFloat(jednostka);
				document.getElementById("danec").value=parseFloat(c)*parseFloat(jednostka);
			}
			else alert("Brak danej!");
		}
	break;
	case 5:
		if ((a=="")||(b=="")||(c=="")||(d=="")||(e==""))alert("Pola stosunku są wymagane!! Wpisz liczby do górnych pól!");
		
		else{ 
		
			 if (aa!="") {
				var jednostka = parseFloat(aa)/parseFloat(a);
				document.getElementById("daneb").value=parseFloat(b)*parseFloat(jednostka);
				document.getElementById("danec").value=parseFloat(c)*parseFloat(jednostka);
				document.getElementById("daned").value=parseFloat(d)*parseFloat(jednostka);
				document.getElementById("danee").value=parseFloat(e)*parseFloat(jednostka);
			}
			else if (bb!="") {
				var jednostka = parseFloat(bb)/parseFloat(b);
				document.getElementById("danea").value=parseFloat(a)*parseFloat(jednostka);
				document.getElementById("danec").value=parseFloat(c)*parseFloat(jednostka);
				document.getElementById("daned").value=parseFloat(d)*parseFloat(jednostka);
				document.getElementById("danee").value=parseFloat(e)*parseFloat(jednostka);
			}
			else if (cc!="") {
				var jednostka = parseFloat(cc)/parseFloat(c);
				document.getElementById("danea").value=parseFloat(a)*parseFloat(jednostka);
				document.getElementById("daneb").value=parseFloat(b)*parseFloat(jednostka);
				document.getElementById("daned").value=parseFloat(d)*parseFloat(jednostka);
				document.getElementById("danee").value=parseFloat(e)*parseFloat(jednostka);
			}
			else if (dd!="") {
				var jednostka = parseFloat(cc)/parseFloat(c);
				document.getElementById("danea").value=parseFloat(a)*parseFloat(jednostka);
				document.getElementById("daneb").value=parseFloat(b)*parseFloat(jednostka);
				document.getElementById("danec").value=parseFloat(c)*parseFloat(jednostka);
				document.getElementById("danee").value=parseFloat(e)*parseFloat(jednostka);
			}
			else if (ee!="") {
				var jednostka = parseFloat(dd)/parseFloat(d);
				document.getElementById("danea").value=parseFloat(a)*parseFloat(jednostka);
				document.getElementById("daneb").value=parseFloat(b)*parseFloat(jednostka);
				document.getElementById("danec").value=parseFloat(c)*parseFloat(jednostka);
				document.getElementById("daned").value=parseFloat(d)*parseFloat(jednostka);
			}
			else alert("Brak danej!");
		}
	break;
	default: alert("Ups, coś poszło nie tak :(");
}
}