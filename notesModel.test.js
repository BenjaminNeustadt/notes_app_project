const NotesModel = require('./notesModel');

describe('model', () => {

//let model;
  beforeEach(() => {
     model = new NotesModel();
  });

  it ('getNotes() initially returns empty array', () => {
    //const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it ('addNote() adds a string to the array', () => {
    //const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it ('reset() empties the array of inputs', () => {
    //const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
