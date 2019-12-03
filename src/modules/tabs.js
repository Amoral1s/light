const tabs = () => {
  const panelGroup = document.querySelector('#accordion-two'),
        tabHead = document.querySelectorAll('.tabHead2'),
        tabBody = document.querySelectorAll('.tabs2');

  const toggleContent = (index) => {
    for (let i = 0; i < tabBody.length; i++) {
      if (index === i) {
        tabBody[i].classList.add('in');
      } else {
        tabBody[i].classList.remove('in');
      }
    }
  };

  panelGroup.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
          target = target.closest('.panel-heading');
  
      if (target.classList.contains('panel-heading')) {
        tabHead.forEach((item, i) => {
            if (item === target) {
              toggleContent(i);
            }
        });
      }
    });
  
};

export default tabs;
