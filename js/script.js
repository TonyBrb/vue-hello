/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = new Vue({
  el: '#app',
  data:{
    saluto: 'Buon pomeriggio (scritto con Vue)',
    immagine: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Anagoria_Sonnenuntergang_Namib.JPG/1200px-Anagoria_Sonnenuntergang_Namib.JPG'
  }
})