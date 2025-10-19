var zone = document.getElementById("zone");
var science = document.getElementById("science");
science.addEventListener("click", function () {
    zone.classList.toggle("visible");
    zone.classList.toggle("invisible");
});
var bouton0 = document.getElementById("0");
var bouton1 = document.getElementById("1");
var bouton2 = document.getElementById("2");
var bouton3 = document.getElementById("3");
var bouton4 = document.getElementById("4");
var bouton5 = document.getElementById("5");
var bouton6 = document.getElementById("6");
var bouton7 = document.getElementById("7");
var bouton8 = document.getElementById("8");
var bouton9 = document.getElementById("9");
var boutonAddition = document.getElementById("addition");
var boutonSoustraction = document.getElementById("soustraction");
var boutonProduit = document.getElementById("produit");
var boutondivision = document.getElementById("divsion");
var boutondAC = document.getElementById("AC");
var boutondDel = document.getElementById("DEL");
var boutondVirgule = document.getElementById("virgule");
var boutondEgal = document.getElementById("egal");
var boutonHistorique = document.getElementById("historique");
var Ecran = document.getElementById("ecran");
var racine = document.getElementById("racine");
var clear = document.getElementById("Clear");
var boutonfactoriel = document.getElementById("factoriel");
var boutonExposant = document.getElementById("exposant");
var boutonSin = document.getElementById("sin");
var boutonCos = document.getElementById("cos");
var boutonTan = document.getElementById("tan");
var boutonLn = document.getElementById("ln");
var boutonLog = document.getElementById("log");
var boutonRacine = document.getElementById("racine");
var boutonCarre = document.getElementById("carre");
var boutonChange = document.getElementById("change");
var boutonExponentiel = document.getElementById("e");
var boutonCombinaison = document.getElementById("combinaison");
var boutonArangement = document.getElementById("arangement");
var bouton10e = document.getElementById("10e");
var boutonGame = document.getElementById("Game");
/* ---------------------------------------- DECLARATION DES FOCTIONS ------------------------------------------*/
function additionner(a, b) {
    return a + b;
}
function enlever(a, b) {
    return a - b;
}
function multiplier(a, b) {
    return (a * b);
}
function diviser(a, b) {
    if (a == 0 || b == 0) {
        return 0;
    }
    else {
        return (a / b);
    }
}
function fact(a) {
    if (a == 0 || a == 1) {
        return 1;
    }
    return (a * fact(a - 1));
}
function expo(a, b) {
    var reponse = 1;
    for (var i = 0; i < a; i++) {
        reponse = reponse * b;
    }
    return reponse;
}
function Carre(x) {
    return (x * x);
}
function logarithmeNeperien(x) {
    return Math.log(x);
}
function EXPONENTIEL(x) {
    return Math.exp(x);
}
function aleatoire() {
    return Math.floor(Math.random() * 1001);
}
/* ----------------------------------------- LES VARIABLES GLOBALES ------------------------------------------*/
var resultat;
var nombre1 = 0;
var nombre2 = 0;
var signe = "";
var his = 0;
var verifieNombre = "";
var virgule = "";
var visuel = "";
var temp = 0;
var premierFois = "oui";
var jeu = 1;
var correctNombre;
/*---------------------------------------- GESTION DES BOUTONS DE NOMBRES --------------------------------------*/
bouton0.addEventListener("click", function () {
    if (virgule) {
        visuel = visuel + '0';
        nombre1 = Number(visuel);
        Ecran.value = visuel;
    }
    else {
        if (nombre1 == resultat) {
            nombre1 = 0;
        }
        nombre1 = nombre1 * 10 + 0;
        verifieNombre = "Valide";
        Ecran.value = String(nombre1);
    }
});
bouton1.addEventListener("click", function () {
    if (virgule) {
        visuel = visuel + '1';
        nombre1 = Number(visuel);
        Ecran.value = visuel;
    }
    else {
        if (nombre1 == resultat) {
            nombre1 = 0;
        }
        nombre1 = nombre1 * 10 + 1;
        verifieNombre = "Valide";
        Ecran.value = String(nombre1);
    }
});
bouton2.addEventListener("click", function () {
    if (virgule) {
        visuel = visuel + '2';
        nombre1 = Number(visuel);
        Ecran.value = visuel;
    }
    else {
        if (nombre1 == resultat) {
            nombre1 = 0;
        }
        nombre1 = nombre1 * 10 + 2;
        verifieNombre = "Valide";
        Ecran.value = String(nombre1);
    }
});
bouton3.addEventListener("click", function () {
    if (virgule) {
        visuel = visuel + '3';
        nombre1 = Number(visuel);
        Ecran.value = visuel;
    }
    else {
        if (nombre1 == resultat) {
            nombre1 = 0;
        }
        nombre1 = nombre1 * 10 + 3;
        verifieNombre = "Valide";
        Ecran.value = String(nombre1);
    }
});
bouton4.addEventListener("click", function () {
    if (virgule) {
        visuel = visuel + '4';
        nombre1 = Number(visuel);
        Ecran.value = visuel;
    }
    else {
        if (nombre1 == resultat) {
            nombre1 = 0;
        }
        nombre1 = nombre1 * 10 + 4;
        verifieNombre = "Valide";
        Ecran.value = String(nombre1);
    }
});
bouton5.addEventListener("click", function () {
    if (virgule) {
        visuel = visuel + '5';
        nombre1 = Number(visuel);
        Ecran.value = visuel;
    }
    else {
        if (nombre1 == resultat) {
            nombre1 = 0;
        }
        nombre1 = nombre1 * 10 + 5;
        verifieNombre = "Valide";
        Ecran.value = String(nombre1);
    }
});
bouton6.addEventListener("click", function () {
    if (virgule) {
        visuel = visuel + '6';
        nombre1 = Number(visuel);
        Ecran.value = visuel;
    }
    else {
        if (nombre1 == resultat) {
            nombre1 = 0;
        }
        nombre1 = nombre1 * 10 + 6;
        verifieNombre = "Valide";
        Ecran.value = String(nombre1);
    }
});
bouton7.addEventListener("click", function () {
    if (virgule) {
        visuel = visuel + '7';
        nombre1 = Number(visuel);
        Ecran.value = visuel;
    }
    else {
        if (nombre1 == resultat) {
            nombre1 = 0;
        }
        nombre1 = nombre1 * 10 + 7;
        verifieNombre = "Valide";
        Ecran.value = String(nombre1);
    }
});
bouton8.addEventListener("click", function () {
    if (virgule) {
        visuel = visuel + '8';
        nombre1 = Number(visuel);
        Ecran.value = visuel;
    }
    else {
        if (nombre1 == resultat) {
            nombre1 = 0;
        }
        nombre1 = nombre1 * 10 + 8;
        verifieNombre = "Valide";
        Ecran.value = String(nombre1);
    }
});
bouton9.addEventListener("click", function () {
    if (virgule) {
        visuel = visuel + '9';
        nombre1 = Number(visuel);
        Ecran.value = visuel;
    }
    else {
        if (nombre1 == resultat) {
            nombre1 = 0;
        }
        nombre1 = nombre1 * 10 + 9;
        verifieNombre = "Valide";
        Ecran.value = String(nombre1);
    }
});
/*------------------------------------- LES DIFFERENTES FONTIONS DE LA CALCO ------------------------------------*/
/* FONCTION AC */
boutondAC.addEventListener("click", function () {
    Ecran.value = "0";
    nombre1 = 0;
    nombre2 = 0;
    signe = "";
    verifieNombre = "";
    virgule = "";
    jeu = 1;
});
/* FONCTION DEL */
boutondDel.addEventListener("click", function () {
    nombre1 = (nombre1 - (nombre1 % 10)) / 10;
    Ecran.value = String(nombre1);
    virgule = "";
    jeu = 1;
});
/* FONCTION CLEAR */
clear.addEventListener("click", function () {
    nombre1 = 0;
    nombre2 = 0;
    his = 0;
    signe = "";
    resultat = 0;
    Ecran.value = "0";
    verifieNombre = "";
    virgule = "";
    jeu = 1;
    visuel = "";
});
/* FONCTION HISTORIQUE */
boutonHistorique.addEventListener("click", function () {
    nombre1 = his;
    verifieNombre = "";
    Ecran.value = String(nombre1);
    virgule = "";
    jeu = 1;
});
/* FONCTION ADDITION */
boutonAddition.addEventListener("click", function () {
    signe = "+";
    nombre2 = nombre2 + nombre1;
    nombre1 = 0;
    Ecran.value = String(nombre2) + signe;
    his = nombre2;
    virgule = "";
    jeu = 1;
});
/* FONCTION SOUSTRACTION */
boutonSoustraction.addEventListener("click", function () {
    if (premierFois == "non") {
        nombre1 = nombre2 - nombre1;
    }
    nombre2 = nombre1;
    nombre1 = 0;
    signe = "-";
    Ecran.value = String(nombre2) + signe;
    virgule = "";
    jeu = 1;
    premierFois = "non";
});
/* FONCTION PRODUIT */
boutonProduit.addEventListener("click", function () {
    if (premierFois == "non") {
        nombre1 = nombre1 * nombre2;
    }
    signe = "X";
    nombre2 = nombre1;
    Ecran.value = String(nombre2) + signe;
    nombre1 = 0;
    virgule = "";
    jeu = 1;
    premierFois = "non";
});
/* FONCTION DIVISION */
boutondivision.addEventListener("click", function () {
    if (premierFois == "non") {
        nombre1 = nombre2 / nombre1;
    }
    signe = "/";
    nombre2 = nombre1;
    Ecran.value = String(nombre2) + signe;
    nombre1 = 0;
    virgule = "";
    jeu = 1;
    premierFois = "non";
});
/* FONCTION FACTORIELLE */
boutonfactoriel.addEventListener("click", function () {
    if (nombre1) {
        resultat = fact(nombre1);
        his = resultat;
        Ecran.value = String(resultat);
        nombre1 = resultat;
    }
    else {
        Ecran.value = "Syntax Error";
    }
    verifieNombre = "";
    virgule = "";
    jeu = 1;
});
/* FONCTION EXPOSANT */
boutonExposant.addEventListener("click", function () {
    Ecran.value = "^";
    signe = "^";
    nombre2 = nombre1;
    nombre1 = resultat;
    virgule = "";
    jeu = 1;
});
/* FONCTION Sinus */
boutonSin.addEventListener("click", function () {
    nombre1 = nombre1 * (Math.PI / 180);
    resultat = Math.round(Math.sin(nombre1) * 1e10) / 1e10;
    his = resultat;
    Ecran.value = String(resultat);
    nombre1 = resultat;
    verifieNombre = "";
    virgule = "";
    jeu = 1;
});
/* FONCTION Cosinus */
boutonCos.addEventListener("click", function () {
    nombre1 = nombre1 * (Math.PI / 180);
    resultat = Math.round(Math.cos(nombre1) * 1e10) / 1e10;
    his = resultat;
    Ecran.value = String(resultat);
    nombre1 = resultat;
    verifieNombre = "";
    virgule = "";
    jeu = 1;
});
/* FONCTION Tangente */
boutonTan.addEventListener("click", function () {
    nombre1 = nombre1 * (Math.PI / 180);
    resultat = Math.round(Math.tan(nombre1) * 1e10) / 1e10;
    his = resultat;
    Ecran.value = String(resultat);
    nombre1 = resultat;
    verifieNombre = "";
    virgule = "";
    jeu = 1;
});
/* FONCTION Racine Carre */
boutonRacine.addEventListener("click", function () {
    virgule = "";
    if (!nombre1 && !resultat) {
        Ecran.value = "Syntax Error";
    }
    else {
        if (nombre1) {
            if (nombre1 >= 0) {
                resultat = Math.round(Math.sqrt(nombre1) * 1e10) / 1e10;
                his = resultat;
                Ecran.value = String(resultat);
                nombre1 = resultat;
            }
            else {
                Ecran.value = "Math Error";
            }
        }
    }
    virgule = "";
    jeu = 1;
});
/* FONCTION Nombre Carre */
boutonCarre.addEventListener("click", function () {
    virgule = "";
    if (!nombre1 && !resultat) {
        Ecran.value = "Syntax Error";
    }
    else {
        if (nombre1) {
            resultat = (Carre(nombre1));
            his = resultat;
            Ecran.value = String((resultat));
            nombre1 = resultat;
        }
        else {
            if (resultat) {
                resultat = Carre(resultat);
                his = resultat;
                Ecran.value = String((resultat));
                nombre1 = resultat;
            }
        }
    }
});
/* FONTION VIRGULE */
boutondVirgule.addEventListener(("click"), function () {
    Ecran.value = String(nombre1 + ".");
    virgule = "actif";
    visuel = String(nombre1) + '.';
    jeu = 1;
});
/*FONCTION CHANGE SIGNE */
boutonChange.addEventListener("click", function () {
    nombre1 = nombre1 * -1;
    Ecran.value = String(nombre1);
    jeu = 1;
});
/* FONCTION LN */
boutonLn.addEventListener("click", function () {
    if (nombre1) {
        resultat = logarithmeNeperien(nombre1);
        his = resultat;
        Ecran.value = String(resultat);
        nombre1 = resultat;
    }
    else {
        Ecran.value = "Syntax Error";
    }
    virgule = "";
    jeu = 1;
});
/* FONCTION LOG */
boutonLog.addEventListener("click", function () {
    if (nombre1) {
        resultat = (logarithmeNeperien(nombre1) / logarithmeNeperien(10));
        his = resultat;
        Ecran.value = String(resultat);
        nombre1 = resultat;
    }
    else {
        Ecran.value = "Syntax Error";
    }
    virgule = "";
    jeu = 1;
});
/* FONCTION EXPONENTIEL */
boutonExponentiel.addEventListener("click", function () {
    resultat = EXPONENTIEL(1);
    his = resultat;
    Ecran.value = String(resultat);
    nombre1 = resultat;
    virgule = "";
    jeu = 1;
});
/* FONCTION COMBINAISON */
boutonCombinaison.addEventListener("click", function () {
    nombre2 = nombre1;
    signe = "Combi";
    Ecran.value = String(nombre2) + "C";
    nombre1 = 0;
    virgule = "";
    jeu = 1;
});
/* FONCTION ARRANGEMENT */
boutonArangement.addEventListener("click", function () {
    nombre2 = nombre1;
    signe = "Arra";
    Ecran.value = String(nombre2) + "A";
    nombre1 = 0;
    virgule = "";
    jeu = 1;
});
/* FONCTION PUISSANCE DE 10 */
bouton10e.addEventListener("click", function () {
    if (nombre1) {
        resultat = expo(nombre1, 10);
        his = resultat;
        Ecran.value = String(resultat);
    }
    else {
        Ecran.value = "Syntax Error";
    }
    jeu = 1;
    virgule = "";
});
/* FONCTIONNALITE MINI-JEU */
boutonGame.addEventListener("click", function () {
    if (jeu == 1) {
        setTimeout(function () {
            Ecran.value = "Trouver le nombre...";
        }, 1);
        setTimeout(function () {
            Ecran.value = "Intervalle 1-1000...";
        }, 2000);
        setTimeout(function () {
            Ecran.value = "[Game] pour valider....";
        }, 4000);
        setTimeout(function () {
            Ecran.value = "Les botons 0-9...";
        }, 6000);
        setTimeout(function () {
            Ecran.value = "sont autorisés...";
        }, 8000);
        setTimeout(function () {
            Ecran.value = "Les autres boutons...";
        }, 10000);
        setTimeout(function () {
            Ecran.value = "annulent le jeu...";
        }, 12000);
        setTimeout(function () {
            Ecran.value = "Ready ?";
        }, 14000);
        setTimeout(function () {
            Ecran.value = "Let's go";
        }, 16000);
        correctNombre = aleatoire();
        jeu = 2;
    }
    else {
        if (correctNombre != nombre1) {
            if (correctNombre > nombre1) {
                Ecran.value = "Plus Grand";
                nombre1 = 0;
            }
            if (nombre1 > correctNombre) {
                Ecran.value = "Plus Petit";
                nombre1 = 0;
            }
        }
        else {
            Ecran.value = "Vous Avez Gagné";
            jeu = 1;
        }
    }
});
/*------------------------------------------- Le BOUTON DE RESULTAT -----------------------------------------*/
boutondEgal.addEventListener("click", function () {
    if (signe) {
        if (signe == "+") {
            resultat = Math.round(additionner(nombre2, nombre1) * 1e10) / 1e10;
            his = resultat;
            Ecran.value = String(resultat);
            nombre1 = resultat;
            nombre2 = 0;
        }
        if (signe == "-") {
            resultat = Math.round(enlever(nombre2, nombre1) * 1e10) / 1e10;
            his = resultat;
            Ecran.value = String(resultat);
            nombre1 = resultat;
            nombre2 = 0;
        }
        if (signe === "X") {
            resultat = Math.round(multiplier(nombre2, nombre1) * 1e10) / 1e10;
            his = resultat;
            Ecran.value = String(resultat);
            nombre1 = resultat;
            nombre2 = 0;
        }
        if (signe === "/") {
            resultat = Math.round(diviser(nombre2, nombre1) * 1e10) / 1e10;
            if (resultat == 0) {
                Ecran.value = "Math Error";
                nombre1 = resultat;
                nombre2 = 0;
            }
            else {
                resultat = Math.round(resultat * 1e10) / 1e10;
                his = resultat;
                Ecran.value = String(resultat);
                nombre1 = resultat;
                nombre2 = 0;
            }
        }
        if (signe == "^") {
            if (!nombre1) {
                Ecran.value = ("0");
            }
            else {
                resultat = Math.round(expo(nombre1, nombre2) * 1e10) / 1e10;
                his = resultat;
                Ecran.value = String(resultat);
                nombre1 = resultat;
                nombre2 = 0;
            }
        }
        if (signe == "Combi") {
            if (nombre1) {
                if (nombre2 > nombre1) {
                    Ecran.value = "Syntax Error";
                    nombre1 = 0;
                    nombre2 = 0;
                }
                else {
                    resultat = (fact(nombre1) / (fact(nombre2) * fact(nombre1 - nombre2)));
                    his = resultat;
                    Ecran.value = String(resultat);
                    nombre1 = resultat;
                }
            }
            else {
                Ecran.value = "Syntax Error";
            }
        }
        if (signe == "Arra") {
            if (nombre1) {
                if (nombre2 > nombre1) {
                    Ecran.value = "Syntax Error";
                    nombre1 = 0;
                    nombre2 = 0;
                }
                else {
                    resultat = (fact(nombre1) / fact(nombre1 - nombre2));
                    his = resultat;
                    Ecran.value = String(resultat);
                    nombre1 = resultat;
                }
            }
            else {
                Ecran.value = "Syntax Error";
            }
        }
    }
    else {
        Ecran.value = String(nombre1);
        his = nombre1;
        nombre1 = 0;
    }
    verifieNombre = "";
    virgule = "";
    jeu = 1;
    premierFois = "oui";
});
