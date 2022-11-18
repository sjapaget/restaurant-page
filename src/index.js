import './style.css';
import navbar from './navbar';
import welcomeComponent from './welcome';


const content = document.getElementById('content');

content.appendChild(navbar());
content.appendChild(welcomeComponent());
