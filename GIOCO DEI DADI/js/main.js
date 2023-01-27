// TRACCIA:
// Gioco dei dadi
//
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// SVOLGIMENTO
// Creo costante bottone che darà il via all'evento
const calculationButton = document.getElementById("calculation_button");
const gameResult = document.getElementById("output_message");

calculationButton.addEventListener(
    "click",
    function () {
        // Genera numero randomico da 1 a 6 per PC
        const numberPc = Math.floor(Math.random() * 6) + 1;
        document.getElementById("number_pc").innerHTML = numberPc;

        // Genera numero randomico da 1 a 6 per utente
        const numberUser = Math.floor(Math.random() * 6) + 1;
        document.getElementById("number_user").innerHTML = numberUser;

        let outputMessage;

        // SE numero PC più alto vince
        if (numberPc > numberUser) {
            outputMessage = ("Mi dispiace, ha vinto il PC.");

            // ALTRIMENTI SE numero uguale pareggiano
        } else if (numberPc == numberUser) {
            outputMessage = ("Poteva andare peggio, è un pareggio.");

            // ALTRIMENTI vince utente
        } else {
            outputMessage = ("COMPLIMENTI, HAI VINTO!");

        };

        gameResult.innerHTML = outputMessage;

    }
);


