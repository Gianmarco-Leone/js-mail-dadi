// TRACCIA:
// Mail
//
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// SVOLGIMENTO
// Creo costante bottone che darà il via all'evento
const calculationButton = document.getElementById("calculation_button");

calculationButton.addEventListener(
    "click",
    function () {

        // Chiedere email all'uente
        let inputEmail = document.getElementById("insert_email");
        let userMail = inputEmail.value;

        // Creare un array di email con il quale confrontare
        const mailList = ["mail@mail.it", "mail@mail.com", "mymail@mymail.it", "mymail@mymail.com"];

        // Creare variabile interruttore per verificare quando diventerà vera
        let mailChecked = false;

        // Identificare tutte le mail dell'array
        for (let i = 0; i < mailList.length; i++) {
            // console.log(mailList[i]);

            // Verificare che la mail sia presente nella lista dell'array
            if (mailList[i] == userMail) {
                mailChecked = true;
            }
        }

        // Stampare esito controllo
        if (mailChecked == true) {
            // console.log("Benvenuto " + userMail + ", puoi accedere.");

            let outputMessage = "Benvenuto " + userMail + ", puoi accedere.";
            document.getElementById("output_message").innerHTML = outputMessage;

        } else {
            alert("Non hai i permessi per accedere.");
            document.getElementById("output_message").innerHTML = "";

        }

    }

);

