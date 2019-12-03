const moar = () => {
  const moarBtn = document.querySelector('.add-sentence-btn'),
        hiddenBlocks = document.querySelectorAll('.sentence-block');

  moarBtn.addEventListener('click', () => {
    hiddenBlocks.forEach((elem) => {
        elem.classList.remove('hidden');
        moarBtn.classList.add('hidden');
    });
    
  });
};
export default moar;
