/**Debut Tableu Word */
var TabWord =["Porteur","rateau","pelle","monument","livre","enfant","reparateur","jeune","mort","mardi","decembre",
"papa","cahier","germaine","voiture","mackbook","isi","vite","Simplon","Coach","Montagne","riviere","Ronaldo",
"Dieu","maman","fabrique","selon","france","uk","vie","jeudi","Vendredi","fevrier","etude","allemagne","singleton",
"Fatou","Chaussure","fenetre","lire","damm","orthographe","mere","hopital","manguier","furit","Messi","Ami","college","Habib"];
/**Fin Tableau Word */

/**Debut Tableu Word */
var TabNiveau2 =["Porteur","rateau","pelle","monument","livre","enfant","reparateur","jeune","mort","mardi","decembre",
"papa","cahier","germaine","voiture","mackbook","isi","vite","Simplon","Coach","Montagne","riviere","Ronaldo",
"Dieu","maman","fabrique","selon","france","uk","vie","jeudi","Vendredi","fevrier","etude","allemagne","singleton",
"Fatou","Chaussure","fenetre","lire","damm","orthographe","mere","hopital","manguier","furit","Messi","Ami","college","Habib"];
/**Fin Tableau Word */

/**Debut Tableu Word */
var TabNiveau3 =["Porteur","rateau","pelle","monument","livre","enfant","reparateur","jeune","mort","mardi","decembre",
"papa","cahier","germaine","voiture","mackbook","isi","vite","Simplon","Coach","Montagne","riviere","Ronaldo",
"Dieu","maman","fabrique","selon","france","uk","vie","jeudi","Vendredi","fevrier","etude","allemagne","singleton",
"Fatou","Chaussure","fenetre","lire","damm","orthographe","mere","hopital","manguier","furit","Messi","Ami","college","Habib"];
/**Fin Tableau Word */

/**Debut Tableu Word */
var TabNiveau4 =["Porteur","rateau","pelle","monument","livre","enfant","reparateur","jeune","mort","mardi","decembre",
"papa","cahier","germaine","voiture","mackbook","isi","vite","Simplon","Coach","Montagne","riviere","Ronaldo",
"Dieu","maman","fabrique","selon","france","uk","vie","jeudi","Vendredi","fevrier","etude","allemagne","singleton",
"Fatou","Chaussure","fenetre","lire","damm","orthographe","mere","hopital","manguier","furit","Messi","Ami","college","Habib"];
/**Fin Tableau Word */

/**Debut Tableu Word */
var TabHard =["Porteur","rateau","pelle","monument","livre","enfant","reparateur","jeune","mort","mardi","decembre",
"papa","cahier","germaine","voiture","mackbook","isi","vite","Simplon","Coach","Montagne","riviere","Ronaldo",
"Dieu","maman","fabrique","selon","france","uk","vie","jeudi","Vendredi","fevrier","etude","allemagne","singleton",
"Fatou","Chaussure","fenetre","lire","damm","orthographe","mere","hopital","manguier","furit","Messi","Ami","college","Habib"];
/**Fin Tableau Word */

if(
    localStorage.getItem("TabWord") == null ||
    localStorage.getItem("TabWord") == undefined
){
    localStorage.setItem("formations", JSON.stringify(formations));
}

var tab =0

function affichagedynamique(){
    decrementation();
    var inputgrise = document.querySelector("#inputgrise");
    var TextGenerator =document.getElementById('TextGenerator').innerHTML=TabWord[0];
    inputgrise.addEventListener('blur', function() {
        var TextGenerator =document.getElementById('TextGenerator').innerHTML=TabWord[tab];
        let longueur = TextGenerator.length;
        tab++
        TestCompare(TextGenerator);
        TextGenerator =document.getElementById('TextGenerator').innerHTML=TabWord[tab];
    });
}



/**La fonction qui va nous permettre de faire le decompte une fois que l'on commence a saisir */
var Second= document.querySelector('#Second').innerHTML=60
function decrementation(){
    setInterval(() => {
       if(Second>0){
        Second--
       document.querySelector('#Second').innerHTML=Second;
       }
       else{
        var inputgrise =document.getElementById("inputgrise");
        Second=0;
        inputgrise.disabled=true;
       }
    }, 1000);
}
/**-----------------------Fin de la fonction decrementation------------------------- */




/** Debut de la fonction qui va nous permettre de de comparer les valeur */
function TestCompare(chaine){
    let inputgrise = document.getElementById("inputgrise").value.trim();
    if(inputgrise==chaine){
        viderchamp();
        document.getElementById("TextGenerator").style.color="green";
        ScoreIncrementation()
    }else{
        viderchamp();
        document.getElementById("TextGenerator").style.color="red";
    }

}
/**Fin de la fonction qui va nous permettre de comparer les valeurs sasies */




/**Debut de la fonction qui va vider le champs */
function viderchamp(){
    document.getElementById("inputgrise").value="";
}
/**Fin section de la fonction qui va vider le champ */



/**--------Debut Section Incrementation --------------------*/
var point =0
function ScoreIncrementation(){
    point = point+5
    let Point = document.getElementById("Point").innerHTML=point+" pts";
}
/**--------Fin Section Inscrementation */

function Start(){
    let StartCompte =document.getElementById("StartCompte");
    StartCompte.style.display="none"
    affichagedynamique();
}

var SideCompte=0
function afficherSideBar(){
   let side = document.getElementById("Container_Side_Bar")
   SideCompte++
   console.log(SideCompte)
   if(SideCompte%2==0){
       side.classList.remove("SideActive")
   }else{
       side.classList.add("SideActive")
   }
}