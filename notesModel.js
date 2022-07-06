class NotesModel{
  constructor(){
    this.notes = [];
  }

  getNotes(){
    return this.notes;
  }

  addNote(postit){
    return this.notes.push(postit);
  }

  reset(){
    return this.notes.length = 0;
  }
}

module.exports = NotesModel;
