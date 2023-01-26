// TRACCIA:
// Mail
//
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// SVOLGIMENTO
// chiedere email all'uente
let userMail = prompt("Qual'è la tua email?");

// creare un array di email con il quale confrontare
const mailList = ["mail@mail.it", "mail@mail.com", "mymail@mymail.it", "mymail@mymail.com"];

// creare variabile interruttore per verificare quando diventerà vera
let mailChecked = false;

// identificare tutte le mail dell'array
for (let i = 0; i < mailList.length; i++) {
    console.log(mailList[i]);

    // verificare che la mail sia presente nella lista dell'array
    if (mailList[i] == userMail) {
        mailChecked = true;
    }
}

// stampare esito controllo
if (mailChecked == true) {
    console.log("Benvenuto " + userMail + ", puoi accedere.");

} else {
    alert("Non hai i permessi per accedere.")

}