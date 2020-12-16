/* Create una todo list usando VueJS.
Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS.
Se non sapere che fare, di seguito trovate uno screenshot.
Funzionalitá:
La nostra todo list avrá alcune tasks di default predefinite
L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
Da tenere a mente:
Ricordate di scrivere le istruzioni prima di iniziare a lavorare cercate di descrivere in modo sintetico gli step che pensate siano necessari.
Consultate la documentazione e se siete bloccati, aprite un ticket.
Il sono a disposizione per i tickets fino alle 13:00 mentre nel pomeriggio Raffa e Fabiola dalle 15:00 alle 18:00.
La consegna dell'esercizio é domani pomeriggio. Avete oggi e domani per farlo.
Domani mattina ci vediamo tutti su Zoom alla solita ora 9:30 per un Q&A di un oretta circa cosi rispondo ai vostri dubbi e poi vi lascio lavorare.
Che vue sia con voi */


var todoApp = new Vue({
  el: '#todoApp',
  data: {
    message: 'Booleans to Todo App',
    addTodoInput: '',
    ToDoList: [],
    hasError: false
  },
  methods:{
    addTask: function(){
      
      if(!this.addTodoInput){
        this.hasError = true;
        return;
      }
      
      this.hasError = false;
      
      this.ToDoList.push({
        id:this.ToDoList.length+1, 
        title: this.addTodoInput, 
        isComplete: false
      });
      
      this.addTodoInput = '';
    },
     
    
    updateTask: function(e, list){
      e.preventDefault();
      list.title = e.target.innerText;
      e.target.blur();
    }
    

    
    
  }
});

