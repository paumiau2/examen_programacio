
function mostraDescompte(){
    let texteFinal=document.getElementById("texteFinal");
    let inputpreu=document.getElementById("inputpreu");
    let preu=parseInt(inputPreu.value);
    let descompte=calculaDescompte(preu);
    preuFinal=preu-descompte;
    texteFinal.textContent="Se li aplica un descompte de "+descompte+"€. El preu final queda en "+preuFinal+"€";
}

function inicialitza(){
    let boton=document.getElementById("Calcular");
    boton.addEventListener("click",mostraDescompte);
}
window.onload=inicialitza;