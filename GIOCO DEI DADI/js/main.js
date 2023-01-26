// TRACCIA:
// Gioco dei dadi
//
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// SVOLGIMENTO
// Genera numero randomico da 1 a 6 per PC
const numberPc = Math.floor(Math.random() * 6) + 1;
console.log("Il numero del PC è " + numberPc);
// Genera numero randomico da 1 a 6 per utente
const numberUser = Math.floor(Math.random() * 6) + 1;
console.log("Il numero dell'utente è " + numberUser);
// SE numero PC più alto vince
if (numberPc > numberUser) {
    console.log("Numero PC: " + numberPc + ", Numero utente: " + numberUser + "\n" + "Vince il PC.");

    // ALTRIMENTI vince utente
} else if (numberPc == numberUser) {
    console.log("Numero PC: " + numberPc + ", Numero utente: " + numberUser + "\n" + "Pareggio.");
} else {
    console.log("Numero PC: " + numberPc + ", Numero utente: " + numberUser + "\n" + "Vince l'utente.");
}

