const replaceForms = () => {
  const validPhone = document.querySelectorAll('#phone');
  const validName = document.querySelectorAll('#name');
  const validTextArea = document.getElementById('#form2-message');
  validPhone.forEach((elem) =>{
    elem.addEventListener('keyup', () => {
      elem.value = elem.value.replace(/[^\+()-\d]/g, '');
    });
    elem.addEventListener('keydown', () => {
      elem.value = elem.value.replace(/[^\+()-\d]/g, '');
    });
  });
  validName.forEach((elem) =>{
    elem.addEventListener('keyup', () => {
      elem.value = elem.value.replace(/[^а-я, ^А-Я]/,'');
    });
    elem.addEventListener('keydown', () => {
      elem.value = elem.value.replace(/[^а-я, ^А-Я]/,'');
    });
  });
  validTextArea.addEventListener('keyup', () => {
    validTextArea.value = validTextArea.value.replace(/[^а-я, ^А-Я, ^\d?\.?]/,'');
  });
  validTextArea.addEventListener('keydown', () => {
    validTextArea.value = validTextArea.value.replace(/[^а-я, ^А-Я, ^\d?\.?]/,'');
  });
};
export default replaceForms;