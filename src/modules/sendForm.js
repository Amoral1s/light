const sendForm = () => {
  const errorMessage = 'Что то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Ваша заявка принята!',
        form1 = document.getElementById('form1'),
        form2= document.getElementById('form2'),
        form3 = document.getElementById('form3'),
        form5 = document.getElementById('form5'),
        form6 = document.getElementById('form6'),
        form7 = document.getElementById('form7'),
        form11 = document.getElementById('form11'),
        statusMessage = document.createElement('div'),
        consMessage = document.getElementById('#form2-message');
  const validName = document.querySelectorAll('#name');
  
  statusMessage.classList.add('status-message');
  form1.addEventListener('submit', (event) => {
    event.preventDefault();
    let errorDiv = [...document.querySelectorAll('.validator-error')];
    form1.appendChild(statusMessage);
    if (errorDiv.length > 0) {
      statusMessage.textContent = 'Заполните поля правильно!';
      errorDiv.length = 0;
      return;
    }
    
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form1);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body, () => {
      statusMessage.textContent = successMessage;
      form1.reset();
      
    }, () => {
      statusMessage.textContent = errorMessage;
    });
  });
  form11.addEventListener('submit', (event) => {
    event.preventDefault();
    let errorDiv = [...document.querySelectorAll('.validator-error')];
    form11.appendChild(statusMessage);
    if (validName[1].value.length < 2) {
      statusMessage.textContent = 'Заполните поля правильно!';
      return;
    }
    if (errorDiv.length > 0) {
      statusMessage.textContent = 'Заполните поля правильно!';
      errorDiv.length = 0;
      return;
    }
    
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form11);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body, () => {
      statusMessage.textContent = successMessage;
      form11.reset();
      
    }, () => {
      statusMessage.textContent = errorMessage;
    });
  });
  form2.addEventListener('submit', (event) => {
    event.preventDefault();
    let errorDiv = [...document.querySelectorAll('.validator-error')];
    form2.appendChild(statusMessage);
    if (validName[0].value.length < 2) {
      statusMessage.textContent = 'Заполните поля правильно!';
      return;
    }
    if (errorDiv.length > 0) {
      statusMessage.textContent = 'Заполните поля правильно!';
      errorDiv.length = 0;
      return;
    }
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form2);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body, () => {
      statusMessage.textContent = successMessage;
      form2.reset();
      
    }, () => {
      statusMessage.textContent = errorMessage;
    });
  });
  
  form5.addEventListener('submit', (event) => {
    event.preventDefault();
    let errorDiv = [...document.querySelectorAll('.validator-error')];
    form5.appendChild(statusMessage);
    if (validName[1].value.length < 2) {
      statusMessage.textContent = 'Заполните поля правильно!';
      return;
    }
    if (errorDiv.length > 0) {
      statusMessage.textContent = 'Заполните поля правильно!';
      errorDiv.length = 0;
      return;
    }
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form5);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body, () => {
      statusMessage.textContent = successMessage;
      form5.reset();
    }, () => {
      statusMessage.textContent = errorMessage;
    });
  });
  form6.addEventListener('submit', (event) => {
    event.preventDefault();
    let errorDiv = [...document.querySelectorAll('.validator-error')];
    form6.appendChild(statusMessage);
   
    if (validName[4].value.length < 2) {
      statusMessage.textContent = 'Заполните поля правильно!';
      return;
    }
    if (errorDiv.length > 0) {
      statusMessage.textContent = 'Заполните поля правильно!';
      errorDiv.length = 0;
      return;
    }
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form6);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body, () => {
      statusMessage.textContent = successMessage;
      form6.reset();
    }, () => {
      statusMessage.textContent = errorMessage;
    });
  });
  let jsonForm = [];
  form3.addEventListener('submit', (event) => {
    event.preventDefault();
    jsonForm.push('Сообщение', consMessage.value);
  });
  
  
  form7.addEventListener('submit', (event) => {
    event.preventDefault();
    let errorDiv = [...document.querySelectorAll('.validator-error')];
    form7.appendChild(statusMessage);
    
    if (validName[5].value.length < 2) {
      statusMessage.textContent = 'Заполните поля правильно!';
      return;
    }
    if (errorDiv.length > 0) {
      statusMessage.textContent = 'Заполните поля правильно!';
      errorDiv.length = 0;
      return;
    }
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form7);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData7(body, () => {
      statusMessage.textContent = successMessage;
      form7.reset();
      consMessage.value = '';
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
    request.send(JSON.stringify(body));
  };
  const postData7 = (body, outputData, errorData) => {
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
    let allDate = [{body},{jsonForm}];
    request.send(JSON.stringify(allDate));
  };
  };
export default sendForm;
