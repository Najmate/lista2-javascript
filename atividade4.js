const prompt = require ('prompt-sync')()

const NumeroText = prompt ('Digite um numero:');
const N = Number (NumeroText);

const par = Math.sqrt(N,2);
const impar = Math.pow(N,2);

if (N % 2==0){
    console.log (`O seu Número é par e sua raiz é: ${par}`);
}
else{
    console.log (`O seu número é impar e ele elevado ao quadrado é: ${impar}`);
}