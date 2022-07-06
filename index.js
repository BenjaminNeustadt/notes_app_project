const NotesModel = require('./notesModel');

console.log('The notes app is running, great');

const model = new NotesModel();

console.log(model.getNotes());

