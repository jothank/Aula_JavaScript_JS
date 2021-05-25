function botao(){
    document.getElementById("Agradecimento").innerHTML = "Clique aqui novamente!";
}

function redirecionar(){
    window.open("http://www.google.com.br/");
}

function trocar(){
    document.getElementById("mousemove").innerHTML ="passou o mouse"
    //alert("passou o mouse");
}

function voltar(){
    document.getElementById("mousemove").innerHTML ="volte com mouse"
    //alert("passou o mouse");
}

function funcaochange(elemento){
    alert(elemento.value)
}


/*function botao(){
    document.getElementById("Agradecimento").innerHTML = "Obrigado por clicar!";
}


/*function botao(){
    alert("obrigado por clicar")
}

/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar=true
    }else{
        valida=false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
alert(validaIdade(idade));

/*var d = new Date();

alert(d.getDay());
alert(d.getMonth());
alert(d.getFullYear());*/

/*var count;

for(count=0; count <= 5; coun++){
    alert(count);
}*/

/*var count =0;

while(count < 5){
    console.log(count);
    alert(count);
    count++;
}*/

/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menos de idade");
}*/

/*var nome = "Jonathan Costa";
var idade = 31;
var idade2 = 18;
//alert(nome + " tem " + idade);
console.log(nome);
console.log(idade + idade2);
var lista = ["maça","pera","laranja"];
lista.push("uva");
console.log(lista)
console.log(lista.join(" - "))*/