const addNoteBg = document.querySelector('.add-note-background');
const openAddNote = document.querySelector('.open-modal-button');
const cancelBtn = document.querySelector('.cancel-btn');
const allNotes = document.querySelector('.all-notes');
const input = document.querySelector('.note-input')
const textarea = document.querySelector('.note-textarea')
const createBtn = document.querySelector('.create-btn')


const notes = [];

class Note {
  constructor(title, description) {
    this.title = title
    this.description = description
    this.id = Math.random()
  }
}

window.addEventListener('DOMContentLoaded', getNotes);
cancelBtn.addEventListener('click', hideAddNote);
openAddNote.addEventListener('click', showAddNote);
createBtn.addEventListener('click', createNote)

// Create Note
function createNote(e) {
  e.preventDefault()
  let inputValue = input.value
  let textareaValue = textarea.value

  // console.log(inputValue)
  // console.log(textareaValue)
  const note = new Note(inputValue, textareaValue)
  if (inputValue === '' && textareaValue === '') {
    alert('Please put in an input')
    // allNotes.style.display = 'none'
    return
  }

  const markup = `
    <div class='note-container'>
  <div class='note-header'>
    <h2 class='note-title'>${inputValue}</h2>
  </div>
  <div class='note-body'>
    <p class='note-description'>
      ${textareaValue}
    </p>
  </div>
  <div class='note-footer'>
    <div class='edit-note'>
      <i class='fas fa-pen'></i>
    </div>
    <div class='delete-note'>
      <i class='fas fa-trash'></i>
    </div>
  </div>
  </div>
  `
  
  allNotes.insertAdjacentHTML('beforeend', markup)
  notes.push(note)
  // console.log(notes)
  getNotes()
  hideAddNote(e)
  
  input.value = ''
  textarea.value = ''
} 

function showAddNote() {
  addNoteBg.style.display = 'grid';
}

function hideAddNote(evt) {
  evt.preventDefault();
  addNoteBg.style.display = 'none';
}

function getNotes() {
  if (!notes.length) {
    allNotes.innerHTML = '<h2>There are currently no notes available</h2>';
  } else {
    const noNote = allNotes.querySelector('h2')
    noNote.style.display = 'none'
  }
}

{
  {/* <div class='note-container'>
  <div class='note-header'>
    <h2 class='note-title'>Note Title</h2>
  </div>
  <div class='note-body'>
    <p class='note-description'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi
      delec
    </p>
  </div>
  <div class='note-footer'>
    <div class='edit-note'>
      <i class='fas fa-pen'></i>
    </div>
    <div class='delete-note'>
      <i class='fas fa-trash'></i>
    </div>
  </div>
</div>; */}
}
