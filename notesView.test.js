/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('Page View', () => {

  it('displays the list of notes on page, which should at first be empty array', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('hello?');
    model.addNote('there?');
    view.displayNotes();
    expect(document.querySelectorAll('p').length).toEqual(2);
  });

});
