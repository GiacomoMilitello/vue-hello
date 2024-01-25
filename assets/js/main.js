/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const { createApp } = Vue
 
  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        imageVue: 'assets/img/v3.jpg'
      }
    },
    methods: {
    }
  }).mount('#app')