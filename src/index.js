import './style.css';
import navbar from './components/navbar/navbar.js';
import tabComponent from './components/tabs/tabs.js';


const content = document.getElementById('content');

content.appendChild(navbar());
content.appendChild(tabComponent());
