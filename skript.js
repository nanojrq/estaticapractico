function puntitos(){
    let mmm = localStorage.getItem("mostRecentScore");
    let feliz = document.getElementById("felic");
    if(mmm < 20){
        document.getElementById("felic").innerHTML = "Vuelve a intentarlo!";
    }
    document.getElementById("puntos").innerText = mmm;   
};