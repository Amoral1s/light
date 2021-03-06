const calc = () => {
  //табы
  const calcBody = document.querySelectorAll('.tabs1'),
        calcBtn = document.querySelector('#accordion'),
        calcHead = document.querySelectorAll('.tabHead1'),
        collapse = document.getElementById('collapseThree'),
        calcNext = document.querySelectorAll('.nextCalcBtn');
      let currentSlide = 0;
    const toggleContent = (index) => {
      for (let i = 0; i < calcBody.length; i++) {

        if (index === i) {
          calcBody[i].classList.add('in');
        } else if (index === 1 && !calcCheck.checked) {
          calcBody[i].classList.remove('in');
          calcBody[index].classList.add('in3');
        } else {
          calcBody[i].classList.remove('in');
          calcBody[i].classList.remove('in3');
        }
        
      }

    };
    if (!calcBtn) {
      return;
    }
    const nextSlide = (elem, index, strClass) => {
      if (index === 0) {
        toggleContent(0);
      }
      if (index === 1) {
        if (index === 1 && collapse.classList.contains('in')) {
          index = 3;
          toggleContent(3);
        } else {
          toggleContent(1);

        }
      }
      if (index === 2) {
        toggleContent(2);
      }
      if (index === 3) {
        toggleContent(3);
      }

      /* if (index === 1 && !calcCheck.checked) {
        elem[index].classList.add('in3');
      }
      else if (index === 2) {
        elem[index].classList.add(strClass);
        elem[index-1].classList.remove(strClass);
      }
      elem[index].classList.add(strClass);
      elem[index-1].classList.remove(strClass);
      console.log(index); */
      
    };
    calcBtn.addEventListener('click', (event, index) => {
        let target = event.target;
       
        if ((target = event.target.closest('.tabHead1') || event.target.closest('.nextCalcBtn')) && target.classList.contains('tabHead1')) {
          event.preventDefault();
          calcHead.forEach((item, i) => {
              if (item === target) {
                toggleContent(i);
              }
          });
          currentSlide = 0;
        } else if ((target = event.target.closest('.tabHead1') || event.target.closest('.nextCalcBtn')) && target.matches('.nextCalcBtn')) {
          let total = 0;

          if (calcCheck.checked) {
            total = 10000;
            secondCalc.forEach((elem) => {
              elem.style.display = 'none';
            });
          }
          if (calcCheck.checked) {
            total = 10000;
            secondCalc.forEach((elem) => {
              elem.style.display = 'none';
            });
          } else {
            total = 15000;
            secondCalc.forEach((elem) => {
              elem.style.display = 'inline-block';
            });
          }
          if (floor.checked) {
            count.value = (+total*+firstRadius.value*+numRings.value*+secondRadius.value*+secondNumRings.value)+2000;
          } else {
            count.value = +total * +firstRadius.value * +numRings.value * +secondRadius.value * +secondNumRings.value;
          }
          
          calcNext.forEach((item) => {
            if (item === target) {
              event.preventDefault();
              currentSlide++;
              nextSlide(calcBody, currentSlide, 'in');
            }
        });
        } else {
          return;
        }
      });
    

  //расчет 

  const calcBlock = document.querySelector('#accordion'),
        calcCheck = document.querySelector('#myonoffswitch'),
        firstRadius = document.querySelector('.firstradius'),
        numRings = document.querySelector('.numRings'),
        secondRadius = document.querySelector('.secondRadius'),
        secondNumRings = document.querySelector('.secondNumRings'),
        distance = document.querySelector('.distance'),
        floor = document.querySelector('#myonoffswitch-two'),
        count = document.querySelector('#calc-result'),
        callBtnCalc = document.querySelector('.call-calc-btn'),
        secondCalc = document.querySelectorAll('.secondCalc');
  const validName = document.querySelectorAll('#name');
        
    let objectCalc = {
      'diameter': [],
      'rings': [],
      'secondDiameter': [],
      'secondRings': [],
      'floor': [],
      'type': [],
      'distance': [],
      'count': []
    };
    const countSum = () => {

      let total = 0;

      if (calcCheck.checked) {
        total = 10000;
        secondCalc.forEach((elem) => {
          elem.style.display = 'none';
        });
      }
      
      calcBlock.addEventListener('change', (event) => {
        
        if (calcCheck.checked) {
          total = 10000;
          secondCalc.forEach((elem) => {
            elem.style.display = 'none';
          });
        } else {
          total = 15000;
          secondCalc.forEach((elem) => {
            elem.style.display = 'inline-block';
          });
        }
        if (floor.checked) {
          count.value = (+total*+firstRadius.value*+numRings.value*+secondRadius.value*+secondNumRings.value)+2000;
        } else {
          count.value = +total * +firstRadius.value * +numRings.value * +secondRadius.value * +secondNumRings.value;
        }
      });
       
    };
    countSum();
    
    const errorMessage = 'Что то пошло не так...',
          loadMessage = 'Загрузка...',
          successMessage = 'Спасибо! Ваша заявка принята!',
          form4 = document.getElementById('form4'),
          statusMessage = document.createElement('div');
    form4.addEventListener('submit', (event) => {
      event.preventDefault();
      let errorDiv = [...document.querySelectorAll('.validator-error')];
      form4.appendChild(statusMessage);
      if (validName[1].value.length < 2) {
        statusMessage.textContent = 'Заполните поля правильно!';
        return;
      }
      if (errorDiv.length > 0) {
        statusMessage.textContent = 'Заполните поля правильно!';
        errorDiv.length = 0;
        return;
      }
      if (calcCheck.checked) {
        countSum.total = 10000;
        secondCalc.forEach((elem) => {
          elem.style.display = 'none';
        });
        objectCalc.type.push('Тип септика', 'Однокамерный');
      } else {
        countSum.total = 15000;
        secondCalc.forEach((elem) => {
          elem.style.display = 'inline-block';
        });
        objectCalc.type.push('Тип септика', 'Двухкамерный');
      }
      if (floor.checked) {
        objectCalc.floor.push('Днище колодца', 'Есть');
      } else {
        objectCalc.floor.push('Днище колодца', 'Нету');
      }
      if (firstRadius.value == 1) {
        objectCalc.diameter.push('Диаметр первого септика', '1.4 метра');
      } else {
        objectCalc.diameter.push('Диаметр первого септика', '2 метра');
      }
      if (numRings.value == 1) {
        objectCalc.rings.push('Количество колец первого септика', '1 штука');
      } else if (numRings.value == 1.3){
        objectCalc.rings.push('Количество колец первого септика', '2 штуки');
      } else {
        objectCalc.rings.push('Количество колец первого септика', '3 штуки');
      }
      if (secondRadius.value == 1 && !calcCheck.checked) {
        objectCalc.secondDiameter.push('Диаметр второго септика', '1.4 метра');
      } else if (secondRadius.value == 1.2 && !calcCheck.checked){
        objectCalc.secondDiameter.push('Диаметр второго септика', '2 метра');
      } else {}
      if (secondNumRings.value == 1 && !calcCheck.checked) {
        objectCalc.secondRings.push('Количество колец первого септика', '1 штука');
      } else if (secondNumRings.value == 1.3 && !calcCheck.checked){
        objectCalc.secondRings.push('Количество колец первого септика', '2 штуки');
      } else if (secondNumRings.value == 1.5 && !calcCheck.checked){
        objectCalc.secondRings.push('Количество колец первого септика', '3 штуки');
      } else {}
      objectCalc.distance.push('Расстояние до дома', distance.value);
      objectCalc.count.push('Примерная стоимость', count.value);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(form4);
      let body = {};
      
      formData.forEach((val, key) => {
        body[key] = val;
      });
      postData(body, () => {
        form4.reset();
        statusMessage.textContent = successMessage;
        calcCheck.value = '';
        firstRadius.value = '';
        numRings.value = '';
        secondRadius.value = '';
        secondNumRings.value = '';
        floor.value = '';
        count.value = '';
        secondCalc.value = '';
        distance.value = '';
      }, () => {
        statusMessage.textContent = errorMessage;
      });
    });
    const postData = (body, outputData, errorData) => {
      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
          return;
        } if (request.status === 200) {
          outputData();
        } else {
          errorData(request.status);
        }
      });
      request.open('POST', './server.php');
      request.setRequestHeader('Content-Type', 'application/JSON');
      let allDate = [{body},{objectCalc}];
      request.send(JSON.stringify(allDate));
    };
};

export default calc;
