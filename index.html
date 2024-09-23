// Elements from the DOM
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const notesList = document.getElementById('notesList');
const uploadStatus = document.getElementById('uploadStatus');

// Store notes in localStorage
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Function to display notes
function displayNotes() {
  notesList.innerHTML = ''; // Clear existing notes

  notes.forEach((note, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <a href="${note.url}" download="${note.name}">${note.name}</a>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    notesList.appendChild(listItem);
  });
}

// Function to handle file upload
uploadButton.addEventListener('click', () => {
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const note = {
        name: file.name,
        url: event.target.result
      };
      
      notes.push(note);
      localStorage.setItem('notes', JSON.stringify(notes));
      displayNotes();
      uploadStatus.textContent = "File uploaded successfully!";
    };
    
    reader.readAsDataURL(file);
  } else {
    uploadStatus.textContent = "Please select a file first!";
  }
});

// Function to delete a note
function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  displayNotes();
}

// Initial rendering of notes
displayNotes();
