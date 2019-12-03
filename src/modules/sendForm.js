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
        statusMessage = document.createElement('div'),
        consMessage = document.getElementById('#form2-message');

  form1.addEventListener('submit', (event) => {
    event.preventDefault();
    form1.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form1);
    let body = {};
    
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body, () => {
      statusMessage.textContent = successMessage;
    }, () => {
      statusMessage.textContent = errorMessage;
    });
  });
  form2.addEventListener('submit', (event) => {
    event.preventDefault();
    form2.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form2);
    let body = {};
    
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body, () => {
      statusMessage.textContent = successMessage;
    }, () => {
      statusMessage.textContent = errorMessage;
    });
  });
  
  
  form5.addEventListener('submit', (event) => {
    event.preventDefault();
    form5.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form5);
    let body = {};
    
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body, () => {
      statusMessage.textContent = successMessage;
    }, () => {
      statusMessage.textContent = errorMessage;
    });
  });
  form6.addEventListener('submit', (event) => {
    event.preventDefault();
    form6.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form6);
    let body = {};
    
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body, () => {
      statusMessage.textContent = successMessage;
    }, () => {
      statusMessage.textContent = errorMessage;
    });
  });
  
  



form3.addEventListener('submit', (event) => {
    event.preventDefault();
    JSON.stringify(consMessage.value);
  });
form7.addEventListener('submit', (event) => {
  event.preventDefault();
  form7.appendChild(statusMessage);
  statusMessage.textContent = loadMessage;
  const formData = new FormData(form7);
  let body = {};
  
  formData.forEach((val, key) => {
    body[key] = val;
  });
  postData(body, () => {
    JSON.stringify(consMessage.value);
    statusMessage.textContent = successMessage;
  }, () => {
    statusMessage.textContent = errorMessage;
    console.log(JSON.stringify(consMessage.value));
    
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
};
export default sendForm;
