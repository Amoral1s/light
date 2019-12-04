const replaceForms = () => {
  const validPhone = document.querySelectorAll('#phone');
  const validName = document.querySelectorAll('#name');
  const validTextArea = document.getElementById('#form2-message');
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
  validTextArea.addEventListener('keyup', () => {
    console.log(1);
    validTextArea.value = validTextArea.value.replace(/[^а-я, ^А-Я, ^\d?\.?]/,'');
  });
};
export default replaceForms;