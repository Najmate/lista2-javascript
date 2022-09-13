const prompt = require('prompt-sync')();

const val1Text = prompt('Escreva o primeiro valor: ');
const val2Text = prompt('Escreva o primeiro valor: ');
const val3Text = prompt('Escreva o primeiro valor: ');

const val1 = Number(val1Text);
const val2 = Number(val2Text);
const val3 = Number(val3Text);

if(val1>val2 && val1>val3){
    console.log(`O maior número é: ${val1}`)
}

if(val2>val1 && val2>val3){
    console.log(`O maior número é: ${val2}`)
}

if(val3>val1 && val3>val2){
    console.log(`O maior número é: ${val3}`)
}