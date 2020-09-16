class NoteListView {
  constructor(notelist) {
    this.notelist = notelist;
  }

  returnView() {
    if (this.notelist.returnNotes()[0]) {
      var text = this.notelist.returnNotes().map((item) => {
        return `<li id="note-${item.id}" ><div>${item
          .getText()
          .slice(0, 21)}</div></li>`;
      });
    } else {
      text = [];
    }
    return `<ul>${text.join('')}</ul>`;
  }
}
