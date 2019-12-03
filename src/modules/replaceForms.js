const replaceForms = () => {
  const validPhone = document.querySelectorAll('#phone');
  const validName = document.querySelectorAll('#name');
  const validTextArea = document.querySelectorAll('#form2-message');
  validPhone.forEach((elem) =>{
    elem.addEventListener('keyup', () => {
      elem.value = elem.value.replace(/[^\+()-\d]/g, '');
    });
  });
  validName.forEach((elem) =>{
    elem.addEventListener('keyup', () => {
      elem.value = elem.value.replace(/[^а-я, ^А-Я]/,'');
    });
  });
  validTextArea.forEach((elem) =>{
    elem.addEventListener('keyup', () => {
      elem.value = elem.value.replace(/[^а-я, ^А-Я]/,'');
    });
  });
};
export default replaceForms;