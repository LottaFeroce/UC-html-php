function mostrarMensalidade(){
    var agua = document.getElementById("agua").value;
    var luz = document.getElementById("luz").value;
    var internet = document.getElementById("internet").value;
    var iptu = document.getElementById("iptu").value;
    var res = (agua)+(luz)+(internet)+(iptu)
    var total = parseFloat(res)
    console.log(total)

    alert("A sua fatura de Água foi: "+agua+"\nA sua fatura de Luz foi de: "+luz+"\nA sua fatura de Internet foi de: "+internet+"\nO valor do seu IPTU foi de: "+iptu+"\nTotalizando um valor de: "+total)   
}

function calc(){
    parseFloat(agua)+parseFloat(luz)+parseFloat(internet)+parseFloat(iptu)
}


function mudaCor(){
    var ediv = document.getElementById("container");
    console.log(ediv)
    ediv.style.backgroundColor = "darkgreen"
 }
        