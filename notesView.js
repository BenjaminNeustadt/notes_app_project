class NotesView {
  constructor(model){
    this.model = model;
    this.maincontainerEl = document.querySelector('#main-container');

    this.ButtonEl = document.querySelector('#post-note-button');

    this.ButtonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#postit-input').value
      this.addNewNote(newNote);
    });
  }
  addNewNote(newNote){
    this.model.addNote(newNote);
    this.displayNotes();
  }
  // set the const notes to equal the input, that is input using the NotesModel class
  displayNotes(){
    const notes = this.model.getNotes();
    // const user-input = document.querySelector('#postit-input').value
    //this.model.addNote(user-input);

    notes.forEach(n => {
      const note = document.createElement('div');
      note.innerText = n;
      note.className = 'note';
      //note.id = 'note';
      this.maincontainerEl.append(note);
    });
  }
}

module.exports = NotesView;
