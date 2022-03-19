// const addNoteBg = document.querySelector('.add-note-background');
// const openAddNote = document.querySelector('.open-modal-button');
// const cancelBtn = document.querySelector('.cancel-btn');
// const allNotes = document.querySelector('.all-notes');
// const input = document.querySelector('.note-input')
// const textarea = document.querySelector('.note-textarea')
// const createBtn = document.querySelector('.create-btn')



// const notes = [];

// class Note {
//   constructor(title, description) {
//     this.title = title
//     this.description = description
//     this.id = Math.random()
//   }
// }

// window.addEventListener('DOMContentLoaded', getNotes);
// cancelBtn.addEventListener('click', hideAddNote);
// openAddNote.addEventListener('click', showAddNote);
// createBtn.addEventListener('click', createNote)
// createBtn.addEventListener('key')



// // Create Note
// function createNote(e) {
//   e.preventDefault()
  
//   const inputValue = input.value
//   const textareaValue = textarea.value
//   // console.log(inputValue)
//   // console.log(textareaValue)
//   const note = new Note(inputValue, textareaValue)

//   if (inputValue === '' || textareaValue === '') {
//     alert('Please put in an input')
//     // allNotes.style.display = 'none'
//     return
//   }

  
  
//   notes.push(note)
//   // console.log(notes)
//   getNotes()
//   input.value = ''
//   textarea.value = ''
//   const markup = `
//     <div class='note-container'>
//     <div class='note-header'>
//       <h2 class='note-title'>${inputValue}</h2>
//     </div>
//     <div class='note-body'>
//       <p class='note-description'>
//         ${textareaValue}
//       </p>
//     </div>
//     <div class='note-footer'>
//       <div class='edit-note'>
//         <i class='fas fa-pen'></i>
//       </div>
//       <div class='delete-note'>
//         <i class='fas fa-trash'></i>
//       </div>
//     </div>
//     </div>
//   `
//   allNotes.insertAdjacentHTML('beforeend', markup)
//   hideAddNote(e)
//   // console.log(notes[0].title)


  
// } 



// const deleteBtn = document.body

// deleteBtn.addEventListener('click', deleteNote)


// // Delete Note
// function deleteNote(e) {
//   e.preventDefault()
//   if (e.target.classList.contains('delete-note')) {
//     e.target.parentElement.parentElement.remove()

//   }
  
// }
// // if (allNotes.style.display = 'none') {
// //   allNotes.innerHTML = '<h2>There are currently no notes available</h2>';
// // }


// function showAddNote() {
//   addNoteBg.style.display = 'grid';
// }

// function hideAddNote(e) {
//   e.preventDefault();
//   addNoteBg.style.display = 'none';
// }

// function getNotes() {
//   if (notes.length === 0) {
//     allNotes.innerHTML = '<h2>There are currently no notes available</h2>';
//     console.log(notes)
//   } else {
//     const noNote = allNotes.querySelector('h2')
//     noNote.style.display = 'none'
//     console.log(notes)

//   }
// }







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



















































const openAddNote = document.querySelector('.open-modal-button');
const addNoteBg = document.querySelector('.add-note-background')
const cancelBtn = document.querySelector('.cancel-btn')
const createBtn = document.querySelector('.create-btn')
const allNotes = document.querySelector('.all-notes')
// const body = document.querySelector('body')




// const addNoteBg = document.querySelector('.add-note-background');
// const cancelBtn = document.querySelector('.cancel-btn');
// const allNotes = document.querySelector('.all-notes');
// const input = document.querySelector('.note-input')
// const textarea = document.querySelector('.note-textarea')
// const createBtn = document.querySelector('.create-btn')









openAddNote.addEventListener('click', showAddNote)
cancelBtn.addEventListener('click', hideAddNote)
createBtn.addEventListener('click', createNote)
allNotes.addEventListener('click', deleteNote)
allNotes.addEventListener('click', editNote)
window.addEventListener('DOMContentLoaded', getNotes)

// For createNote(),

class Note {
  constructor(title, description) {
    this.title = title
    this.description = description
    this.id = Math.random()
  }
} 

const notes = []





function showAddNote(e) {
  e.preventDefault()
  addNoteBg.style.display = 'grid'
}

function hideAddNote(e) {
  e.preventDefault()
  addNoteBg.style.display = 'none'
}
const input = document.querySelector('.note-input')
const textarea = document.querySelector('.note-textarea')

function createNote(e) {
  e.preventDefault()
  // Temporary storage
  const inputValue = input.value
  const textareaValue = textarea.value
  
  const note = new Note (inputValue, textareaValue)
  // console.log(note)
  
  notes.push(note)
  getNotes(e)

  // Interface
  if (input.value === '' || textarea.value === '') {
    alert('Text field(s) is empty, please type something')
    return
  }

  const noteHtml = `
    <div class='note-container'>
      <span hidden>${note.id}</span>
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
  allNotes.insertAdjacentHTML('afterbegin', noteHtml)
  hideAddNote(e)

  input.value = ''
  textarea.value = ''
}

function deleteNote(e) {
  e.preventDefault()
  const deleteBtn = e.target
  // Temporary Storage
  if (deleteBtn.classList.contains('delete-note')) {
    const parent = deleteBtn.parentElement.parentElement
    const deletedNoteId = parent.querySelector('span').innerText
    // console.log(deletedNoteId)
    const deletedNote = notes.find(note => {
      return note.id == deletedNoteId
    })
    const deletedNoteIndex = notes.indexOf(deletedNote)
    notes.splice(deletedNoteIndex, 1)
    // console.log(notes)
  }
  

  // Interface
  if (deleteBtn.classList.contains('delete-note')) {
    deleteBtn.parentElement.parentElement.remove()
  }

}

function editNote(e) {
  e.preventDefault()
  const editBtn = e.target
  const parent = editBtn.parentElement.parentElement
  
  
  // Interface
  if (editBtn.classList.contains('edit-note')){
    showAddNote(e)
    let editTitle = parent.querySelector('.note-title').innerText
    let editDescription = parent.querySelector('.note-description').innerText
    
    input.value = editTitle
    textarea.value = editDescription
    
    addNoteBg.querySelector('h2').innerText = 'Edit Note'
    createBtn.className = 'edit-btn'
    createBtn.innerText = 'Edit Note'    
    
    const editBtn2 = document.querySelector('.edit-btn')
    editBtn2.addEventListener('click', editCard)
    
    function editCard(e) {
      e.preventDefault()
      parent.remove()
      addNoteBg.querySelector('h2').innerText = 'Create New Note'
      createBtn.className = 'create-btn'
      createBtn.innerText = 'Create Note'
    }
  }

  // Temporary Storage
  if (editBtn.classList.contains('edit-note')) {
    const editNoteId = parent.querySelector('span').innerText
    const editNote = notes.find(note => {
      return note.id == editNoteId
    })
    // console.log(editNote)
    const editNoteIndex = notes.indexOf(editNote)
    // console.log(editNoteIndex)
    notes.splice(editNoteIndex, 1)
    // console.log(notes)
    const editBtn2 = document.querySelector('.edit-btn')
    editBtn2.addEventListener('click', editCard)

    function editCard(e){
      e.preventDefault()
      const inputValue = input.value
      const textareaValue = textarea.value

      const editNote = new Note(inputValue, textareaValue)
      
      notes.push(editNote)
      notes.pop()
      console.log(notes)
    }
  
    
    
  }

}

function getNotes(e) {
  e.preventDefault()
  let noNote
  if (notes.length === 0) {
    allNotes.innerHTML = `<h2 class='hidden'>There are currently no notes here</h2>`

  } else {
    noNote = allNotes.querySelector('h2.hidden')
    noNote.style.display = 'none'
  }
}




































// function editNote(e) {
//   e.preventDefault()
//   if(e.target.classList.contains('edit-note')) {
//     const oldNoteContainer = e.target.parentElement.parentElement
//     const editId = oldNoteContainer.querySelector('span').innerText
//     const newNoteContainer = notes.find(note => {
//       return note.id == editId
//     })
//     // console.log(newNoteContainer)
//     // const index = notes.indexOf(newNoteContainer)
//     // notes.splice(index, 1)
//     // console.log(notes)

//     showAddNote(e)
//     const newInput = oldNoteContainer.querySelector('.note-title')
//     const newTextarea = oldNoteContainer.querySelector('.note-description')
    
    
//     note.title = newInput.value 
//     note.description = newTextarea.value 


//   }

// } 




























// function editNote(e) {
//   e.preventDefault()
//   const editBtn = e.target
//   if (editBtn.classList.contains('edit-note')) {
//     // const id = notes.id
//     // if (notes.id) {
//     //   console.log('edit')
//     // }
//     const newNoteContainer = notes.find((note) => {
      
//         // console.log('edit')
//       // showAddNote(e)
//       // const input = document.querySelector('.note-input')
//       // const textarea = document.querySelector('.note-textarea')
      
//       // console.log(note.title)
//       // input.value = note.title
//       // textarea.value = note.description
      
//       const oldNoteContainer = editBtn.parentElement
//       const noteId = oldNoteContainer.querySelector('span').innerText
//       note.id = noteId
//       // const newInput = input.value
//         // const newTextarea = textarea.value

//         // let editNote = notes.find(note => note.id)

        

        

//         // console.log(note)
//         // notes[note.title] = newInput
//         // notes[note.textarea] = newTextarea

//         // console.log(notes.push())

//         // const newCreateNote = document.querySelector('.create-btn')
//         // newCreateNote.addEventListener('click', createNoteTwo)

//         // function createNoteTwo(e) {
//         //   e.preventDefault()

//         // }
        

//         // note.title = input.value
//         // note.description = textarea.value

      
//     })
//     console.log(newNoteContainer)
//   }
// }