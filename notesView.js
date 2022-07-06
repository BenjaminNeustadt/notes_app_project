class NotesView {
  constructor(model){
    this.model = model;
    this.maincontainerEl = document.querySelector('#main-container');
  }

  displayNotes(){
    const notes = this.model.getNotes();

    notes.forEach(n => {
      const note = document.createElement('div');
      note.innerText = n;
      note.className = 'note';
      this.maincontainerEl.append(note);
    });
  }
}

module.exports = NotesView;
