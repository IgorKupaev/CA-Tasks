const loadApp = () => {
  const tableCells = [...document.getElementsByTagName('td')];
  const modal = document.getElementById('modal');
  const modalContainer = document.getElementById('modalContainer');
  const modalInput = document.getElementById('modalInput');
  const modalButton = document.getElementById('modalButton');

  const state = { changeEl: null };

  const openModal = e => {
    state.changeEl = e.target;
    modalInput.value = e.target.innerHTML;
    modal.style = 'display: flex';
  }

  const closeModal = () => {
    modal.style = 'display: none';
    state.changeEl = null;
  }

  const changeCell = () => {
    state.changeEl.innerHTML = modalInput.value;
  }

  const handleChangeCell = () => {
    changeCell();
    closeModal();
  }

  tableCells.forEach(cell => {
    cell.addEventListener('click', openModal)
  })

  modal.addEventListener('click', closeModal);
  modalContainer.addEventListener('click', e => e.stopPropagation());
  modalButton.addEventListener('click', handleChangeCell);
}

loadApp();
