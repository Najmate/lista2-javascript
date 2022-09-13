const prompt = require('prompt-sync')();

const ageText = prompt('Insira a idade do participante: ');
const age = Number(ageText);

if(age>=10 && age<=14){
    console.log('O participante faz parte da categoria Infantil (10-14)');

}

else if(age>=15 && age<=17){ 
    console.log('O participante faz parte da categoria Juvenil (15-17)');  
}

else if(age>=18 && age<=25){
    console.log('O participante faz parte da categoria Adulto (18-25)'); 
    
}

else{
 console.log('Opção invalida!');   
}