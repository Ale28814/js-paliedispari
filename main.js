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
//Richiesta di scelta all'utente
const parDis = prompt('Scegli: Pari o Dispari');
console.log(parDis);
const userNumb = parseInt(prompt('Scegli: numero da 1 a 5'));
console.log(userNumb);

//Creazione scelta pc
function randomNumb() {
  pcNumb = Math.round(Math.random()* 5) + 1;
  return pcNumb;
}
let numbRand = randomNumb();
console.log(randomNumb());

//Verifica pari e dispari
function pariDispari() {
  let somma = userNumb + randomNumb();
  if (somma % 2 == 0) {
    alert('numero pari')
  } else if (somma % 2 == 1) {
    alert('numero dispari')
  }
  return somma;
}
let disPar = pariDispari();

function vincitore() {
  if (userNumb % 2 == 0) {
    alert('utente vincitore')
  } else if (userNumb % 2 == 1) {
    alert('computer vincitore')
  } else {
    alert('avete pareggiato')
  }
  return;
}
let risFnale = vincitore();