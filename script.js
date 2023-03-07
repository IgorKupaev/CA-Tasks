const createInput = document.getElementById('createInput');
const createButton = document.getElementById('createButton');
const notesContainer = document.getElementById('notes');

const modal = document.getElementById('modal');
const modalContainer = document.getElementById('modalContainer');

const editInput = document.getElementById('editInput');
const editButton = document.getElementById('editButton');

let changeId = null;

modal.addEventListener('click', closeModal);
modalContainer.addEventListener('click', e => e.stopPropagation());

const render = () => {
  const arrOfNotes = JSON.parse(localStorage.getItem('notes')) || [];
  notesContainer.innerHTML = '';
  arrOfNotes.forEach(note => {

    const el = document.createElement('div');
    const elBody = document.createElement('div');
    const elRemoveButton = document.createElement('button');
    const elEditButton = document.createElement('button');
    const buttonsContainer = document.createElement('div');

    elEditButton.classList = 'noteButtonEdit';
    elEditButton.innerHTML = 'Изменить';
    elEditButton.id = note.id;
    elEditButton.addEventListener('click', e => openModal(e.target.id));

    elRemoveButton.innerHTML = 'Удалить';
    elRemoveButton.classList = 'noteButtonRemove';
    elRemoveButton.id = note.id;
    elRemoveButton.addEventListener('click', e => remove(e.target.id));

    buttonsContainer.className = 'buttonsContainer';
    buttonsContainer.appendChild(elEditButton);
    buttonsContainer.appendChild(elRemoveButton);

    elBody.innerHTML = note.body;
    elBody.className = 'noteBody';

    el.className = 'note';
    el.appendChild(elBody);
    el.appendChild(buttonsContainer);

    notesContainer.appendChild(el);
  });
}

function create() {
  if (createInput.value !== '') {
    const arrOfNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const newNote = {id: String(Date.now()), body: createInput.value};
    localStorage.setItem('notes', JSON.stringify([...arrOfNotes, newNote]));
    createInput.value = '';
    render();
  }
}

function remove(id) {
  let arrOfNotes = JSON.parse(localStorage.getItem('notes')) || [];
  localStorage.setItem('notes', JSON.stringify(arrOfNotes.filter(note => note.id !== id)));
  render();
}

function openModal(id) {
  modal.style = 'display: flex';
  changeId = id;
  const arrOfNotes = JSON.parse(localStorage.getItem('notes'));
  const note = arrOfNotes.find(el => el.id === id);
  editInput.value = note.body;
}

function closeModal() {
  modal.style = 'display: none';
}

function editNote() {
  const arrOfNotes = JSON.parse(localStorage.getItem('notes'));
  localStorage.setItem('notes', JSON.stringify(arrOfNotes.map(note => {
    if (note.id === changeId) {
      return {...note, body: editInput.value};
    };
    return note;
  })))
  render();
  changeId = null;
  closeModal();
}

createButton.addEventListener('click', create);
editButton.addEventListener('click', editNote);

render();
