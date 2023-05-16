let nome = prompt('Nome');
document.getElementById('nome').innerHTML = nome;

let cognome = prompt('Cognome');
document.getElementById('cognome').innerHTML = cognome;

let colore = prompt('Colore preferito');
document.getElementById('colore').innerHTML = colore;

let user_pass = nome+cognome+colore+21;
console.log(user_pass);
document.getElementById('user_pass').innerHTML = user_pass;

