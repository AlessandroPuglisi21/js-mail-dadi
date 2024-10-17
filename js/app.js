//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

const mailPresent = ['andreaandreini22@gmail.com' ,'samuele.uranio@gmail.com' , 'simonerossi@libero.it' ,'alessandropuglisi2000@gmail.com']
const myMail = prompt('inserisci la tua Email')

if(mailPresent.includes(myMail)){
    console.log(`Benvenuto ${myMail}!`)
}else{
    console.log(`Mi spiace ${myMail}, ma la tua Email non é presente`)
}

