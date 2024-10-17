// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve

function tiraDadi() {
    const pcNumber = Math.floor(Math.random() * 6) + 1; 
    const playerNumber = Math.floor(Math.random() * 6) + 1; 

    console.log(`Il tuo Numero = ${playerNumber} - Il Numero del Tuo avversario = ${pcNumber}`);

    let resultMessage;

    if (playerNumber > pcNumber) {
        resultMessage = (`TU (${playerNumber}) - AVVERSSARIO (${pcNumber})<br> HAI VINTO!`);
        messageColor = 'win'
    } else if (pcNumber > playerNumber) {
        resultMessage = (`TU (${playerNumber}) - AVVERSSARIO (${pcNumber})<br>  HAI PERSO!`);
        messageColor = 'Lose'
    } else {
        resultMessage = (`TU (${playerNumber}) - AVVERSSARIO (${pcNumber})<br>  AVETE PAREGGIATO`);
        messageColor = 'pareggio'
    }

   //ID NUMBER
    document.getElementById('number').innerHTML= resultMessage;
}
