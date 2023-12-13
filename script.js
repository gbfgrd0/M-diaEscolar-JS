var nome = prompt("Escreva seu nome");
var n1 = prompt("Primeira nota");
var n2 = prompt("Segunda nota");

console.log("Nome do aluno: ", nome)
console.log("Nota 1: ", n1, "Nota 2:", n2)

var média = (parseInt(n1) + parseInt(n2)) / 2 
console.log("Média do aluno: ", média)
console.log(média)

if (média >= 7){
    alert("Você foi aprovado!")
}
else{
    alert ("Você não foi aprovado!")
}

