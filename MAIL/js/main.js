// TRACCIA:
// Mail
//
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// SVOLGIMENTO
// Chiedere email all'uente
let userMail = prompt("Qual'è la tua email?");

// Creare un array di email con il quale confrontare
const mailList = ["mail@mail.it", "mail@mail.com", "mymail@mymail.it", "mymail@mymail.com"];

// Creare variabile interruttore per verificare quando diventerà vera
let mailChecked = false;

// Identificare tutte le mail dell'array
for (let i = 0; i < mailList.length; i++) {
    console.log(mailList[i]);

    // Verificare che la mail sia presente nella lista dell'array
    if (mailList[i] == userMail) {
        mailChecked = true;
    }
}

// Stampare esito controllo
if (mailChecked == true) {
    console.log("Benvenuto " + userMail + ", puoi accedere.");

} else {
    alert("Non hai i permessi per accedere.")

}