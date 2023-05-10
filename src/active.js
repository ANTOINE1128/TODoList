function activateCancelListeners() {
  const cancelBtn = document.querySelectorAll('.cancelBtn');
  const updateController = document.querySelectorAll('.update-controller');
  const inputs = document.querySelectorAll('.input-controller textarea');
  cancelBtn.forEach((cB, i) => {
    cB.addEventListener('click', () => {
      updateController[i].style.display = 'none';
      inputs[i].disabled = true;
      inputs[i].style.border = 'none';
    });
  });
}
function activateEditListeners() {
  const editBtn = document.querySelectorAll('.editBtn');
  const updateController = document.querySelectorAll('.update-controller');
  const inputs = document.querySelectorAll('.input-controller textarea');
  editBtn.forEach((eB, i) => {
    eB.addEventListener('click', () => {
      updateController[i].style.display = 'block';
      inputs[i].disabled = false;
    });
  });
}