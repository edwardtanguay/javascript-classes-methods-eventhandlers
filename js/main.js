import './InfoBox.js';
import { InfoBox } from './InfoBox.js'; 

const contentElem = document.querySelector('.content');
const infoBox = new InfoBox('Info', 'This is the info.');

contentElem.innerHTML = infoBox.display();
