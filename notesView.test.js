/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('Page View', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NotesModel();
    view = new NotesView(model);
  });

  it('displays the list of notes on page', () => {
    model.addNote('hello?');
    model.addNote('there?');
    model.addNote('yelpe?');
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(3);
  });

  it('creates a new div when the user clicks on the button', () => {
    const ButtonEl = document.querySelector('#post-note-button')
    ButtonEl.click();
    expect(document.querySelector('div.note')).not.toBeNull();
  });

  it('displays the notes when user inputs string and clicks Post noted', () => {
    const input = document.querySelector('#postit-input');
    input.value = "This is a test";
    const ButtonEl = document.querySelector('#post-note-button');
    ButtonEl.click();
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('This is a test');
  });

  it('when displayNotes() is called twice it shows there should still be the right number of notes from the model on the page', () => {
    model.addNote('hello?');
    model.addNote('there?');
    model.addNote('yelpe?');
    view.displayNotes();
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(3);
  });

});
