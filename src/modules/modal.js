const modal = () => {
  const callBtn = document.querySelectorAll('.call-btn'),
        callBtnCallback = document.querySelectorAll('.call-btn-callback'),
        popup = document.querySelector('.popup-call'),
        popupCallBack = document.querySelector('.popup-callback'),
        callBtnDiscount = document.querySelectorAll('.discount-btn'),
        popupDiscount = document.querySelector('.popup-discount'),
        callBtnCheck = document.querySelectorAll('.check-btn'),
        popupCheck = document.querySelector('.popup-check'),
        callBtnCons = document.querySelectorAll('.consultation-btn'),
        popupCons = document.querySelector('.popup-consultation');
  


  callBtn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      popup.classList.add('popup-active');
    });
  });
  popup.addEventListener('click', (event) => {
    let target = event.target;

    if(target.classList.contains('popup-close')) {
      popup.classList.remove('popup-active');
    } else {
      target = target.closest('.popup-content');

      if(!target) {
        popup.classList.remove('popup-active');
      }
    }
  });
  callBtnCallback.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      popupCallBack.classList.add('popup-active');
    });
  });
  popupCallBack.addEventListener('click', (event) => {
    let target = event.target;

    if(target.classList.contains('popup-close')) {
      popupCallBack.classList.remove('popup-active');
    } else {
      target = target.closest('.popup-content');

      if(!target) {
        popupCallBack.classList.remove('popup-active');
      }
    }
  });
  callBtnDiscount.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      popupDiscount.classList.add('popup-active');
    });
  });
  popupDiscount.addEventListener('click', (event) => {
    let target = event.target;

    if(target.classList.contains('popup-close')) {
      popupDiscount.classList.remove('popup-active');
    } else {
      target = target.closest('.popup-content');

      if(!target) {
        popupDiscount.classList.remove('popup-active');
      }
    }
  });
  callBtnCheck.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      popupCheck.classList.add('popup-active');
    });
  });
  popupCheck.addEventListener('click', (event) => {
    let target = event.target;

    if(target.classList.contains('popup-close')) {
      popupCheck.classList.remove('popup-active');
    } else {
      target = target.closest('.popup-content');

      if(!target) {
        popupCheck.classList.remove('popup-active');
      }
    }
  });
  callBtnCons.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      popupCons.classList.add('popup-active');
    });
  });
  popupCons.addEventListener('click', (event) => {
    let target = event.target;

    if(target.classList.contains('popup-close')) {
      popupCons.classList.remove('popup-active');
    } else {
      target = target.closest('.popup-content');

      if(!target) {
        popupCons.classList.remove('popup-active');
      }
    }
  });

  
};

export default modal;
