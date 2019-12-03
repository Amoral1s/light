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


modal();
tabs();
moar();
sendForm();
calc();

