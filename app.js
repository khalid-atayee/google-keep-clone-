class App{
    constructor(){
        this.notes=[];
        this.$notes = document.querySelector('#notes');
        this.$placeholder = document.querySelector('#placeholder');
        this.$form = document.querySelector('#form');
        this.$form_buttons= document.querySelector('#form-buttons');
        this.$note_title = document.querySelector('#note-title');
        this.$note_text = document.querySelector('#note-text');
      
        this.addEventListeners();
      
       
    }

    addEventListeners(){
        document.body.addEventListener('click',(event)=>{
            this.handelFormClick(event);
        });
        this.$form.addEventListener('submit',(event)=>{
            event.preventDefault();
            const title = this.$note_title.value;
            const text = this.$note_text.value;
            const hasNote = title || text;
            if(hasNote){
                this.addNote({title,text});
            }
            

        });
    }

    handelFormClick(event){
        const isClicked = this.$form.contains(event.target);
        if(isClicked){
            this.openForm();
        }
        else
        {
            this.closeForm();

        }

    }
    
    openForm(){
        this.$form.classList.add('form-open');
        this.$form_buttons.style.display="block";
        this.$note_title.style.display="block";

    }
    closeForm(){
        this.$form.classList.remove('form-open');
        this.$form_buttons.style.display="none";
        this.$note_title.style.display ="none";
        this.$note_text.value='';
        this.$note_title.value='';
    }
    addNote(note){
        const newNote = {
            title:note.title,
            text:note.text,
            color:'white',
            id:this.notes.length>0 ? this.notes[this.notes.length -1].id+1 : 1,
        };
        this.notes = [...this.notes, newNote];
        this.displayNotes();
        this.closeForm();
        


    }
    displayNotes(){
        const hasNotes=this.notes.length>0;
       this.$placeholder.style.display = hasNotes ? 'none' : 'flex';
       this.$notes.innerHTML=this.notes.map((note)=>{
        return ` 
        <div style="background: ${note.color};" class = "note">
        <div class = "${note.title && 'note-title'}">${ note.title}</div>
        <div class="note-text">${note.text}</div>
        <div class = "toolbar-container">
        <div class = "toolbar">
        <img class="toolbar-color" src="https://icon.now.sh/palette">
        <img class="toolbar-delete" src="https://icon.now.sh/delete">
      </div>
      </div>
      </div>

        
        `;

       }).join('');

       
    }

}



new App();
