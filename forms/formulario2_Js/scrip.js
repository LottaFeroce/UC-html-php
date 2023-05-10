
var x = 37;
var y = 18;
var result = x*y;
console.log("Aqui Jais John Arbuckle")
console.log(result)

function mostrarInfo(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var idade = document.getElementById("idade").value;
    var cidade = document.getElementById("email").value;
    

    alert("Olá "+nome+" contato: "+email+" sua idade é: "+idade+" você mora em: "+cidade)
   
}

function hello(){alert("Nishikiyama")}
//alert("Ten Years In The Joint")
//alert("Bring that shit "+nome)

function mudaCor(){
    var ediv = document.getElementById("container");
    console.log(ediv)
    ediv.style.backgroundColor = "lightgreen"
 }
        