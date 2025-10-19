let zone = document.getElementById("zone") as HTMLElement;
let science = document.getElementById("science") as HTMLButtonElement;

science.addEventListener("click",() => {
    zone.classList.toggle("visible");
    zone.classList.toggle("invisible");
});

let bouton0 = document.getElementById("0") as HTMLButtonElement;
let bouton1 = document.getElementById("1") as HTMLButtonElement;
let bouton2 = document.getElementById("2") as HTMLButtonElement;
let bouton3 = document.getElementById("3") as HTMLButtonElement;
let bouton4 = document.getElementById("4") as HTMLButtonElement;
let bouton5 = document.getElementById("5") as HTMLButtonElement;
let bouton6 = document.getElementById("6") as HTMLButtonElement;
let bouton7 = document.getElementById("7") as HTMLButtonElement;
let bouton8 = document.getElementById("8") as HTMLButtonElement;
let bouton9 = document.getElementById("9") as HTMLButtonElement;
let boutonAddition = document.getElementById("addition") as HTMLButtonElement;
let boutonSoustraction = document.getElementById("soustraction") as HTMLButtonElement;
let boutonProduit = document.getElementById("produit") as HTMLButtonElement;
let boutondivision = document.getElementById("divsion") as HTMLButtonElement;
let boutondAC = document.getElementById("AC") as HTMLButtonElement;
let boutondDel = document.getElementById("DEL") as HTMLButtonElement;
let boutondVirgule = document.getElementById("virgule") as HTMLButtonElement;
let boutondEgal = document.getElementById("egal") as HTMLButtonElement;
let boutonHistorique = document.getElementById("historique") as HTMLButtonElement;
let Ecran = document.getElementById("ecran") as HTMLInputElement;
let racine = document.getElementById("racine") as HTMLButtonElement
let clear = document.getElementById("Clear") as HTMLButtonElement
let boutonfactoriel = document.getElementById("factoriel") as HTMLButtonElement
let boutonExposant = document.getElementById("exposant") as HTMLButtonElement
let boutonSin = document.getElementById("sin") as HTMLButtonElement
let boutonCos = document.getElementById("cos") as HTMLButtonElement
let boutonTan = document.getElementById("tan") as HTMLButtonElement
let boutonLn = document.getElementById("ln") as HTMLButtonElement
let boutonLog = document.getElementById("log") as HTMLButtonElement
let boutonRacine= document.getElementById("racine") as HTMLButtonElement
let boutonCarre= document.getElementById("carre") as HTMLButtonElement
let boutonChange= document.getElementById("change") as HTMLButtonElement
let boutonExponentiel= document.getElementById("e") as HTMLButtonElement
let boutonCombinaison= document.getElementById("combinaison") as HTMLButtonElement
let boutonArangement= document.getElementById("arangement") as HTMLButtonElement
let bouton10e= document.getElementById("10e") as HTMLButtonElement
let boutonGame= document.getElementById("Game") as HTMLButtonElement


/* ---------------------------------------- DECLARATION DES FOCTIONS ------------------------------------------*/

function additionner(a:number,b:number) : number {
    return a+b;
}

function enlever(a:number,b:number) : number {
    return a-b;
}

function multiplier(a:number, b:number) {
    return (a * b);
}

function diviser(a:number, b:number) {
    if (a == 0 || b == 0) {
        return 0;
    } else {
        return (a / b);
    }
}

function fact(a:number) : number {
    if (a == 0 || a == 1){
        return 1
    }
    return (a * fact(a-1))
}

function expo(a:number , b:number) : number{
    let reponse : number = 1;
    for (let i = 0; i < a; i++) {
        reponse = reponse * b
    }
    return reponse
}

function Carre(x:number) : number {
    return ( x * x )
}

function logarithmeNeperien(x  : number) : number{
    return Math.log(x)
    
}

function EXPONENTIEL(x:number) : number {
    return Math.exp(x)
}

function aleatoire() : number {
    return Math.floor(Math.random() * 1001 )
}


/* ----------------------------------------- LES VARIABLES GLOBALES ------------------------------------------*/

let resultat : number;
let nombre1 : number = 0;
let nombre2 : number = 0;
let signe : string = "" 
let his : number = 0;
let verifieNombre = "";
let virgule : string = ""
let visuel : string = ""
let temp : number = 0
let premierFois : String = "oui"
let jeu : number = 1
let correctNombre : number


/*---------------------------------------- GESTION DES BOUTONS DE NOMBRES --------------------------------------*/

bouton0.addEventListener("click",()=>{
    if (virgule) {
        visuel = visuel+'0'
        nombre1 = Number(visuel)
        Ecran.value = visuel
    } else {
        if (nombre1 == resultat) {
            nombre1 = 0
        }
        nombre1 = nombre1*10 + 0;
        verifieNombre = "Valide"
        Ecran.value = String(nombre1);
    }
});

bouton1.addEventListener("click",()=>{
    if (virgule) {
        visuel = visuel+'1'
        nombre1 = Number(visuel)
        Ecran.value = visuel
    } else {
        if (nombre1 == resultat) {
            nombre1 = 0
        }
        nombre1 = nombre1*10 + 1;
        verifieNombre = "Valide"
        Ecran.value = String(nombre1);
    }
});

bouton2.addEventListener("click",()=>{
    if (virgule) {
        visuel = visuel+'2'
        nombre1 = Number(visuel)
        Ecran.value = visuel
    } else {
        if (nombre1 == resultat) {
            nombre1 = 0
        }
        nombre1 = nombre1 * 10 + 2;
        verifieNombre = "Valide"
        Ecran.value = String(nombre1);
    }
});

bouton3.addEventListener("click",()=>{
    if (virgule) {
        visuel = visuel+'3'
        nombre1 = Number(visuel)
        Ecran.value = visuel
    } else {
        if (nombre1 == resultat) {
            nombre1 = 0
        }
        nombre1 = nombre1 * 10 + 3;
        verifieNombre = "Valide"
        Ecran.value = String(nombre1);
    }
});

bouton4.addEventListener("click",()=>{
    if (virgule) {
        visuel = visuel+'4'
        nombre1 = Number(visuel)
        Ecran.value = visuel
    } else {
        if (nombre1 == resultat) {
            nombre1 = 0
        }
        nombre1 = nombre1 * 10 + 4;
        verifieNombre = "Valide"
        Ecran.value = String(nombre1);
    }
});

bouton5.addEventListener("click",()=>{
    if (virgule) {
        visuel = visuel+'5'
        nombre1 = Number(visuel)
        Ecran.value = visuel
    } else {
        if (nombre1 == resultat) {
            nombre1 = 0
        }
        nombre1 = nombre1 * 10 + 5;
        verifieNombre = "Valide"
        Ecran.value = String(nombre1);
    } 
});

bouton6.addEventListener("click",()=>{
    if (virgule) {
        visuel = visuel+'6'
        nombre1 = Number(visuel)
        Ecran.value = visuel 
    } else {
        if (nombre1 == resultat) {
            nombre1 = 0
        }
        nombre1 = nombre1 * 10 + 6;
        verifieNombre = "Valide"
        Ecran.value = String(nombre1);
    }
});

bouton7.addEventListener("click",()=>{
    if (virgule) {
        visuel = visuel+'7'
        nombre1 = Number(visuel)
        Ecran.value = visuel
    } else {
        if (nombre1 == resultat) {
            nombre1 = 0
        }
        nombre1 = nombre1 * 10 + 7;
        verifieNombre = "Valide"
        Ecran.value = String(nombre1);
    }
});

bouton8.addEventListener("click",()=>{
    if (virgule) {
        visuel = visuel+'8'
        nombre1 = Number(visuel)
        Ecran.value = visuel
    } else {
        if (nombre1 == resultat) {
            nombre1 = 0
        }
        nombre1 = nombre1 * 10 + 8;
        verifieNombre = "Valide"
        Ecran.value = String(nombre1);
    }
});

bouton9.addEventListener("click",()=>{
    if (virgule) {
        visuel = visuel+'9'
        nombre1 = Number(visuel)
        Ecran.value = visuel
    } else {
        if (nombre1 == resultat) {
            nombre1 = 0
        }
        nombre1 = nombre1 * 10 + 9;
        verifieNombre = "Valide"
        Ecran.value = String(nombre1);
    }
});

/*------------------------------------- LES DIFFERENTES FONTIONS DE LA CALCO ------------------------------------*/
/* FONCTION AC */

boutondAC.addEventListener("click",()=>{
    Ecran.value = "0";
    nombre1 = 0;
    nombre2 = 0 
    signe = ""
    verifieNombre = ""
    virgule = ""
    jeu = 1
});

/* FONCTION DEL */

boutondDel.addEventListener("click",()=>{
    nombre1 = (nombre1 - (nombre1 % 10)) / 10 ;
    Ecran.value = String(nombre1);
    virgule = ""
    jeu = 1
});

/* FONCTION CLEAR */

clear.addEventListener("click",()=>{
    nombre1 = 0
    nombre2 = 0
    his = 0 
    signe = ""
    resultat = 0
    Ecran.value = "0"
    verifieNombre = ""
    virgule = ""
    jeu = 1
    visuel = ""
})

/* FONCTION HISTORIQUE */

boutonHistorique.addEventListener("click",()=>{
    nombre1 = his
    verifieNombre = ""
    Ecran.value = String(nombre1);
    virgule = ""
    jeu = 1
});

/* FONCTION ADDITION */

boutonAddition.addEventListener("click",() =>{
        signe = "+"
        nombre2 = nombre2 + nombre1
        nombre1 = 0
        Ecran.value = String(nombre2)+signe
        his = nombre2
        virgule = ""
        jeu = 1
})

/* FONCTION SOUSTRACTION */

boutonSoustraction.addEventListener("click",() =>{
    if (premierFois == "non") {
        nombre1 =  nombre2 - nombre1
    }
        nombre2 = nombre1
        nombre1 = 0
        signe = "-"
        Ecran.value = String(nombre2)+signe 
        virgule = ""   
        jeu = 1
        premierFois = "non"
})

/* FONCTION PRODUIT */

boutonProduit.addEventListener("click",() =>{
    if (premierFois == "non") {
        nombre1 = nombre1 * nombre2
    }
        signe = "X"
        nombre2 = nombre1
        Ecran.value = String(nombre2)+signe 
        nombre1 = 0     
        virgule = ""
        jeu = 1
        premierFois = "non"
})

/* FONCTION DIVISION */
boutondivision.addEventListener("click",() =>{
    if (premierFois == "non") {
        nombre1 = nombre2 / nombre1
    }
        signe = "/";
        nombre2 = nombre1
        Ecran.value = String(nombre2)+signe 
        nombre1 = 0
        virgule = ""
        jeu = 1
        premierFois = "non"
})

/* FONCTION FACTORIELLE */
boutonfactoriel.addEventListener("click", () =>{
    if (nombre1) {
        resultat = fact(nombre1)
        his = resultat
        Ecran.value = String(resultat)
        nombre1 = resultat
    } else {
        Ecran.value = "Syntax Error"
    }
    verifieNombre = ""
    virgule = ""
    jeu = 1
})

/* FONCTION EXPOSANT */
boutonExposant.addEventListener("click", () =>{
        Ecran.value = "^"
        signe = "^"
        nombre2 = nombre1
        nombre1 = resultat
        virgule = ""
        jeu = 1
});

/* FONCTION Sinus */
boutonSin.addEventListener("click",()=>{
        nombre1 = nombre1 * (Math.PI / 180)
        resultat = Math.round(Math.sin(nombre1) * 1e10) / 1e10
        his = resultat
        Ecran.value = String(resultat)
        nombre1 = resultat
        verifieNombre = ""
    virgule = ""
    jeu = 1
});

/* FONCTION Cosinus */
boutonCos.addEventListener("click", () =>{
        nombre1 = nombre1 * (Math.PI / 180)
        resultat = Math.round(Math.cos(nombre1) * 1e10) / 1e10
        his = resultat
        Ecran.value = String(resultat)
        nombre1 = resultat
        verifieNombre = ""
    virgule = ""
    jeu = 1
});

/* FONCTION Tangente */
boutonTan.addEventListener("click", () =>{

        nombre1 = nombre1 * (Math.PI / 180)
        resultat = Math.round(Math.tan(nombre1) * 1e10) / 1e10
        his = resultat
        Ecran.value = String(resultat)
        nombre1 = resultat
        verifieNombre = ""
    virgule = ""
    jeu = 1
});

/* FONCTION Racine Carre */
boutonRacine.addEventListener("click", () =>{
    virgule = ""
    if (!nombre1 && !resultat) {
        Ecran.value = "Syntax Error"
    } else {
        if (nombre1){
            if (nombre1 >= 0) {
                resultat = Math.round(Math.sqrt(nombre1) * 1e10) / 1e10
                his = resultat
                Ecran.value = String(resultat)
                nombre1 = resultat
            } else {
                Ecran.value = "Math Error"
            }
        }
    }
    virgule = ""
    jeu = 1
})

/* FONCTION Nombre Carre */
boutonCarre.addEventListener("click",()=>{
    virgule = ""
    if (!nombre1 && !resultat) {
        Ecran.value = "Syntax Error"
    } else {
        if (nombre1) {
            resultat = (Carre(nombre1))
            his = resultat
            Ecran.value = String((resultat))
            nombre1 = resultat
        }else{
            if (resultat) {
                resultat = Carre(resultat)
                his = resultat
                Ecran.value = String((resultat))
                nombre1 = resultat
            }
        }
    }
})

/* FONTION VIRGULE */
boutondVirgule.addEventListener(("click"),()=>{
    Ecran.value = String(nombre1+".")
    virgule = "actif"
    visuel = String(nombre1)+'.'
    jeu = 1
})

/*FONCTION CHANGE SIGNE */

boutonChange.addEventListener("click",()=>{
    nombre1 = nombre1 * -1
    Ecran.value = String(nombre1)
    jeu = 1
})

/* FONCTION LN */

boutonLn.addEventListener("click", ()=>{
    if (nombre1) {
        resultat = logarithmeNeperien(nombre1)
        his = resultat
        Ecran.value = String(resultat)
        nombre1 = resultat
    } else {
        Ecran.value = "Syntax Error"
    }
    virgule = ""
    jeu = 1
})

/* FONCTION LOG */

boutonLog.addEventListener("click", ()=>{
    if (nombre1) {
        resultat = (logarithmeNeperien(nombre1) / logarithmeNeperien(10)) 
        his = resultat
        Ecran.value = String(resultat)
        nombre1 = resultat
    } else {
        Ecran.value = "Syntax Error"
    }
    virgule = ""
    jeu = 1
})

/* FONCTION EXPONENTIEL */

boutonExponentiel.addEventListener("click",()=>{
        resultat = EXPONENTIEL(1)
        his = resultat
        Ecran.value = String(resultat)
        nombre1 = resultat
        virgule = ""
        jeu = 1
})

/* FONCTION COMBINAISON */

boutonCombinaison.addEventListener("click",()=>{
    nombre2 = nombre1
    signe = "Combi"
    Ecran.value = String(nombre2)+"C"
    nombre1 = 0
    virgule = ""
    jeu = 1
})

/* FONCTION ARRANGEMENT */

boutonArangement.addEventListener("click",()=>{
    nombre2 = nombre1
    signe = "Arra"
    Ecran.value = String(nombre2)+"A"
    nombre1 = 0
    virgule = ""
    jeu = 1
})

/* FONCTION PUISSANCE DE 10 */

bouton10e.addEventListener("click",()=>{
    if (nombre1) {
        resultat = expo(nombre1,10)
        his = resultat
        Ecran.value = String(resultat)
    } else {
        Ecran.value = "Syntax Error"
    }
    jeu = 1
    virgule = ""
})

/* FONCTIONNALITE MINI-JEU */

boutonGame.addEventListener("click",()=>{
    if (jeu == 1) {
        setTimeout (()=>{
            Ecran.value = "Trouver le nombre..."
        }, 1)
        setTimeout (()=>{
            Ecran.value = "Intervalle 1-1000..."
        }, 2000)
        setTimeout (()=>{
            Ecran.value = "[Game] pour valider...."
        }, 4000)
        setTimeout (()=>{
            Ecran.value = "Les botons 0-9..."
        }, 6000)
        setTimeout (()=>{
            Ecran.value = "sont autorisés..."
        }, 8000)
        setTimeout (()=>{
            Ecran.value = "Les autres boutons..."
        }, 10000)
        setTimeout (()=>{
            Ecran.value = "annulent le jeu..."
        }, 12000)
        setTimeout (()=>{
            Ecran.value = "Ready ?"
        }, 14000)
        setTimeout (()=>{
            Ecran.value = "Let's go"
        }, 16000)
        correctNombre = aleatoire()
        jeu = 2
    } else {
        if (correctNombre != nombre1) {
            if (correctNombre > nombre1){
                Ecran.value = "Plus Grand"
                nombre1 = 0
            }
            if (nombre1 > correctNombre) {
                Ecran.value = "Plus Petit"
                nombre1 = 0
            }
        } else {
            Ecran.value = "Vous Avez Gagné"
            jeu = 1
        }
    }
    
   
})

/*------------------------------------------- Le BOUTON DE RESULTAT -----------------------------------------*/

boutondEgal.addEventListener("click",()=>{
    if (signe) {
        if (signe == "+"){
            resultat = Math.round(additionner(nombre2,nombre1) * 1e10) / 1e10
            his = resultat
            Ecran.value = String(resultat);
            nombre1 = resultat
            nombre2 = 0
        }
        if (signe == "-") {
            resultat = Math.round(enlever(nombre2, nombre1) * 1e10) / 1e10
            his = resultat;
            Ecran.value = String(resultat);
            nombre1 = resultat
            nombre2 = 0
        }
        if (signe === "X") {
            resultat = Math.round(multiplier(nombre2, nombre1) * 1e10) / 1e10
            his = resultat;
            Ecran.value = String(resultat);
            nombre1 = resultat
            nombre2 = 0
        }
        if (signe === "/") {
            resultat = Math.round(diviser(nombre2, nombre1) * 1e10) / 1e10
            if (resultat == 0) {
                Ecran.value = "Math Error"
                nombre1 = resultat
                nombre2 = 0
            } else {
                resultat = Math.round(resultat * 1e10) / 1e10
                his= resultat;
                Ecran.value = String(resultat);
                nombre1 = resultat
                nombre2 = 0
            } 
        }
        if (signe =="^") {
            if (!nombre1) {
                Ecran.value = ("0")
            } else {
                resultat = Math.round(expo(nombre1, nombre2) * 1e10) / 1e10
                his = resultat
                Ecran.value = String(resultat)
                nombre1 = resultat
                nombre2 = 0
            }
        }
        if (signe == "Combi") {
            if (nombre1) {
                if (nombre2 > nombre1) {
                Ecran.value = "Syntax Error"
                nombre1 = 0
                nombre2 = 0
            } else {
                resultat = ( fact(nombre1) / ( fact(nombre2) * fact(nombre1 - nombre2) ))
                his = resultat
                Ecran.value = String(resultat)
                nombre1 = resultat
            }
        } else {
                Ecran.value = "Syntax Error"
            }
        }
        if (signe == "Arra") {
            if (nombre1) {
                if (nombre2 > nombre1) {
                Ecran.value = "Syntax Error"
                nombre1 = 0
                nombre2 = 0
            } else {
                resultat = ( fact(nombre1) / fact(nombre1 - nombre2) )
                his = resultat
                Ecran.value = String(resultat)
                nombre1 = resultat
            }
        } else {
                Ecran.value = "Syntax Error"
            }
        }
    } else {
        Ecran.value = String(nombre1)
        his = nombre1
        nombre1 = 0
    }
    verifieNombre = ""
    virgule = "" 
    jeu = 1
    premierFois = "oui"
});
