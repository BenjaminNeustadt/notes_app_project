(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(postit) {
          return this.notes.push(postit);
        }
        reset() {
          return this.notes.length = 0;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.maincontainerEl = document.querySelector("#main-container");
        }
        displayNotes() {
          const notes = this.model.getNotes();
          notes.forEach((n) => {
            const note = document.createElement("div");
            note.innerText = n;
            note.className = "note";
            this.maincontainerEl.append(note);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  console.log("The notes app is running, great");
  var model = new NotesModel();
  model.addNote("This is an example note");
  var view = new NotesView(model);
  view.displayNotes();
})();
