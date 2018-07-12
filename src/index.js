import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');
    
    element.innerHTML = _.join(['Hello', "Webpack"], ' ')
    element.classList.add('hello');
    
    var logo = new Image();
    logo.src = Icon;
    
    element.appendChild(logo);
    
    console.log(Data);
    
    return element;
}

document.body.appendChild(component());