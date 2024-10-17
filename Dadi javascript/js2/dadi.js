// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve

const pcNumber = Math.floor(Math.random() * 6) + 1;
const playerNumber = Math.floor(Math.random() * 6) + 1;

console.log(`Il tuo Numero = ${playerNumber} - Il Numero del Tuo avversario ${pcNumber}`)

if(playerNumber > pcNumber){
    console.log(`HAI VINTO!`)
}else if (pcNumber > playerNumber){
    console.log('IL TUO AVVERSARIO HA VINTO ;(')
}else {
    console.log('AVETE PAREGGIATO RITIRA I DADI!')
}
