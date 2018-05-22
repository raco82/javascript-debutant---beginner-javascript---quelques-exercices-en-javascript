  //numero

    function un(){
	var x = document.getElementById("un").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function deux(){
	var x = document.getElementById("deux").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function trois(){
	var x = document.getElementById("trois").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function quatre(){
	var x = document.getElementById("quatre").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function cinq(){
	var x = document.getElementById("cinq").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function six(){
	var x = document.getElementById("six").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function sept(){
	var x = document.getElementById("sept").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function huit(){
	var x = document.getElementById("huit").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function neuf(){
	var x = document.getElementById("neuf").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function zero(){
	var x = document.getElementById("zero").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function point(){
	var x = document.getElementById("point").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function reinitialiser(){
	document.getElementById("resultat").value = "";
}

function suppr(){
	var valeur = document.getElementById("resultat").value;
	var longueur = valeur.length;
	var fin = longueur - 1;
	valeur = valeur.substring(0, fin);
	document.getElementById("resultat").value = valeur;

}

function plusoumoins(){
	var x = document.getElementById("plusoumoins").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = x + valeur;
}

//operations

function plus(){
	var x = document.getElementById("plus").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function moins(){
	var x = document.getElementById("moins").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function multi(){
	var x = document.getElementById("multi").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function divise(){
	var x = document.getElementById("divise").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function egal(){
	var valeur = document.getElementById("resultat").value;
	var resultatFinal = eval(valeur);
	document.getElementById("resultat").value = resultatFinal;

}

//fonction

function sinus(){
	var x = document.getElementById("sinus").value;
	var valeur = document.getElementById("resultat").value;
	var sin = Math.sin(valeur);
	document.getElementById("resultat").value = sin;
}

function cosinus(){
	var x = document.getElementById("cosinus").value;
	var valeur = document.getElementById("resultat").value;
	var cos = Math.cos(valeur);
	document.getElementById("resultat").value = cos;
}

function tangente(){
	var x = document.getElementById("tangente").value;
	var valeur = document.getElementById("resultat").value;
	var tan = Math.tan(valeur);
	document.getElementById("resultat").value = tan;
}

function expo(){
	var x = document.getElementById("expo").value;
	var valeur = document.getElementById("resultat").value;
	var exp = Math.exp(valeur);
	document.getElementById("resultat").value = exp;
}

function racine(){
	var x = document.getElementById("racine").value;
	var valeur = document.getElementById("resultat").value;
	var rac = Math.sqrt(valeur);
	document.getElementById("resultat").value = rac;
}

function puissance(){
	var y = document.getElementById("puissance").value;
	var valeur = document.getElementById("resultat").value;
	var x = document.getElementById("puissance").value;
	var valeur1 = document.getElementById("resultat").value;
	var puiss = Math.pow(valeur,valeur1);
	document.getElementById("resultat").value = puiss ;
}

function xcarre(){
	var x = document.getElementById("xcarre").value;
	var valeur = document.getElementById("resultat").value;
	var resultat = valeur*valeur;
	document.getElementById("resultat").value = resultat;
}

function ouvert(){
	var x = document.getElementById("ouvert").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}

function ferme(){
	var x = document.getElementById("ferme").value;
	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = valeur + x;
}



