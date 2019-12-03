'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import modal from './modules/modal';
import tabs from "./modules/tabs";
import moar from "./modules/moar";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";
import Validator from "./modules/valid";
import replaceForms from "./modules/replaceForms";


modal();
tabs();
moar();
sendForm();
calc();
replaceForms();

const valids = () => {
  const valid = new Validator ({
    selector: '#form1',
    pattern: {
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ]
      
    }
  });
  valid.init();
  const valid11 = new Validator ({
    selector: '#form11',
    pattern: {
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ]
      
    }
  });
  valid11.init();
  const valid2 = new Validator ({
    selector: '#form2',
    pattern: {
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ]
      
    }
  });
  valid2.init();
  const valid3 = new Validator ({
    selector: '#form3',
    pattern: {
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ]
      
    }
  });
  valid3.init();
  const valid4 = new Validator ({
    selector: '#form4',
    pattern: {
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ]
      
    }
  });
  valid4.init();
  const valid5 = new Validator ({
    selector: '#form5',
    pattern: {
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ]
      
    }
  });
  valid5.init();
  const valid6 = new Validator ({
    selector: '#form6',
    pattern: {
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ]
      
    }
  });
  valid6.init();
  const valid7 = new Validator ({
    selector: '#form7',
    pattern: {
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ]
      
    }
  });
  valid7.init();
};
valids();