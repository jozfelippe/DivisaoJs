let numerador = prompt("Digite o numerador:");
let denominador = prompt("Digite o denominador:");

if (denominador == 0)
{
    alert("Não é possível dividir por 0")
}
else
{
    alert(`${numerador} dividido por ${denominador} é igual a ${(numerador / denominador)}`)
}