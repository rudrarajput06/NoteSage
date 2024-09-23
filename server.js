// Elements for BTech section
const fileInputBTech = document.getElementById('fileInputBTech');
const uploadButtonBTech = document.getElementById('uploadButtonBTech');
const notesListBTech = document.getElementById('notesListBTech');
const uploadStatusBTech = document.getElementById('uploadStatusBTech');

// Elements for MBA section
const fileInputMBA = document.getElementById('fileInputMBA');
const uploadButtonMBA = document.getElementById('uploadButtonMBA');
const notesListMBA = document.getElementById('notesListMBA');
const uploadStatusMBA = document.getElementById('uploadStatusMBA');

// Elements for BSc section
const fileInputBSc = document.getElementById('fileInputBSc');
const uploadButtonBSc = document.getElementById('uploadButtonBSc');
const notesListBSc = document.getElementById('notesListBSc');
const uploadStatusBSc = document.getElementById('uploadStatusBSc');

// Store notes in localStorage for each category
let notesBTech = JSON.parse(localStorage.getItem('notesBTech')) || [];
let notesMBA = JSON.parse(localStorage.getItem('notesMBA')) || [];
let notesBSc = JSON.parse(localStorage.getItem('notesBSc')) || [];

// Function to display notes
function displayNotes(list, notes) {
  list.innerHTML = '';  // Clear existing notes
  notes.forEach((note, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <a href="${note.url}" download="${note.name}">${note.name}</a>
      <button onclick="deleteNote('${list.id}', ${index})">Delete</button>
    `;
    list.appendChild(listItem);
  });
}

// Upload function for each category
function uploadFile(fileInput, notes, storageKey, statusElement, listElement) {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const note = {
        name: file.name,
        url: event.target.result
      };
      notes.push(note);
      localStorage.setItem(storageKey, JSON.stringify(notes));
      displayNotes(listElement, notes);
      statusElement.textContent = "File uploaded successfully!";
    };
    reader.readAsDataURL(file);
  } else {
    statusElement.textContent = "Please select a file first!";
  }
}

// Delete function for each category
function deleteNote(listId, index) {
  let notesArray, storageKey;
  if (listId === 'notesListBTech') {
    notesArray = notesBTech;
    storageKey = 'notesBTech';
  } else if (listId === 'notesListMBA') {
    notesArray = notesMBA;
    storageKey = 'notesMBA';
  } else {
    notesArray = notesBSc;
    storageKey = 'notesBSc';
  }
  notesArray.splice(index, 1);
  localStorage.setItem(storageKey, JSON.stringify(notesArray));
  displayNotes(document.getElementById(listId), notesArray);
}

// Event listeners for BTech
uploadButtonBTech.addEventListener('click', () => {
  uploadFile(fileInputBTech, notesBTech, 'notesBTech', uploadStatusBTech, notesList
