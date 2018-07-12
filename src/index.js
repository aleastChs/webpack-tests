import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
    var element = document.createElement('div');
    
    element.innerHTML = _.join(['Hello', "Webpack"], ' ')
    element.classList.add('hello');
    
    var logo = new Image();
    logo.src = Icon;
    
    element.appendChild(logo);
    
    return element;
}

document.body.appendChild(component());