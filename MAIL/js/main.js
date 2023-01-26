// TRACCIA:
// Mail
//
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// SVOLGIMENTO
// creare un array di email con il quale confrontare
const mailList = ["mail@mail.it", "mail@mail.com", "mymail@mymail.it", "mymail@mail.com"];

// creare variabile interruttore per verificare quando diventerà vera
// identificare tutte le mail dell'array
for (let i = 0; i < mailList.length; i++) {
    console.log(mailList[i]);
}
// chiedere email all'uente
// verificare che la mail sia presente nella lista dell'array
// stampare esito controllo