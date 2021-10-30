//PALINDROMA 
/*
const parola = prompt('Inserisci parola');;

const parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function invertiParola(str){
  let strInversa = str.split('').reverse().join('');  
  return strInversa;
}
*/

//PARI DISPARI

const pariDispari = prompt('scegli pari o dispari');
const numeroUtente = prompt('scegli numero da 1 a 5');

function numeroMacchina() {
    numero = Math.round(Math.random() * 5)+1;
}

let sommaNumeri = 