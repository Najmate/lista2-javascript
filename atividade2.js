const prompt = require('prompt-sync')();

const aText = prompt('Digite o primeiro número: ');
const bText = prompt('Digite o segundo número: ');
const cText = prompt('Digite o terceiro número: ');

const a = Number(aText);
const b = Number(bText);
const c = Number(cText);

if(a<b && b<c){
console.log(`A ordem crescente dos números é: ${a}, ${b}, ${c}`)
}

if(a<c && c<b){
    console.log(`A ordem crescente dos números é: ${a}, ${c}, ${b}`)
}

if(b<a && a<c){
    console.log(`A ordem crescente dos números é: ${b}, ${a}, ${c}`)
}

if(b<c && c<a){
    console.log(`A ordem crescente dos números é: ${b}, ${c}, ${a}`)
}

if(c<a && a<b){
    console.log(`A ordem crescente dos números é: ${c}, ${a}, ${b}`)
}

if(c<b && b<a){
    console.log(`A ordem crescente dos números é: ${c}, ${b}, ${a}`)
}

    

