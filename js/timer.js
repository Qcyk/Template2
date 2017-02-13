function odliczanie()
	{
		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();
		var miesiac = dzisiaj.getMonth()+1;
		var rok = dzisiaj.getFullYear();
		
		
		
		document.getElementById("czas").innerHTML = 
		 dzien+"/"+miesiac+"/"+rok;
		 
		 setTimeout("odliczanie()",1000);
	}