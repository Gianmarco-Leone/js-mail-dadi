// TRACCIA:
// Gioco dei dadi
//
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// SVOLGIMENTO
// Creo costante bottone che darà il via all'evento
const calculationButton = document.getElementById("calculation_button");

calculationButton.addEventListener(
    "click",
    function () {
        // Genera numero randomico da 1 a 6 per PC
        const numberPc = Math.floor(Math.random() * 6) + 1;
        // console.log("Il numero del PC è " + numberPc);
        document.getElementById("number_pc").innerHTML = numberPc;

        // Genera numero randomico da 1 a 6 per utente
        const numberUser = Math.floor(Math.random() * 6) + 1;
        // console.log("Il numero dell'utente è " + numberUser);
        document.getElementById("number_user").innerHTML = numberUser;

        // SE numero PC più alto vince
        if (numberPc > numberUser) {
            console.log("Numero PC: " + numberPc + ", Numero utente: " + numberUser + "\n" + "Vince il PC.");
            let outputMessage = ("Mi dispiace, ha vinto il PC.");
            document.getElementById("output_message").innerHTML = outputMessage;

            // ALTRIMENTI SE numero uguale pareggiano
        } else if (numberPc == numberUser) {
            console.log("Numero PC: " + numberPc + ", Numero utente: " + numberUser + "\n" + "Pareggio.");
            let outputMessage = ("Poteva andare peggio, è un pareggio.");
            document.getElementById("output_message").innerHTML = outputMessage;

            // ALTRIMENTI vince utente
        } else {
            console.log("Numero PC: " + numberPc + ", Numero utente: " + numberUser + "\n" + "Vince l'utente.");
            let outputMessage = ("COMPLIMENTI, HAI VINTO!");
            document.getElementById("output_message").innerHTML = outputMessage;

        };



    }
);


