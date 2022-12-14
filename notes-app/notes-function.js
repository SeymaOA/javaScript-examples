// read existing notes from local storage
const getSavedNotes = function (){
const notesJSON = localStorage.getItem('notes')

if(notesJSON !== null){
    return JSON.parse(notesJSON)
}else{
    return []
}
}

//Save the notes to localStorage
const saveNotes = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the DOM structure for a note
const generateNoteDOM = function(note){
    const noteEl = document.createElement('p')
    const button = document.createElement('button')

    button.textContent = 'x'

        if(note.title.length > 0){
            noteEl.textContent = note.title
        }else{
            noteEl.textContent = 'Unnamed note'
        }
        noteEl.appendChild(button)
        return noteEl
}

// Render application notes

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}