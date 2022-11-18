import './tabs.css';
import welcomeComponent from "../welcome/welcome.js";
import menuComponent from '../menu/menu.js';

import 'animate.css';

export default function tabComponent() {
  const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('tabs__container');

  const tabsBtnRow = document.createElement('div');
    tabsBtnRow.classList.add('tabs__btn-row');
    tabsBtnRow.appendChild(tabButton("Welcome"));
    tabsBtnRow.appendChild(tabButton("Menu"));
    tabsBtnRow.appendChild(tabButton("Contact"));
  tabsContainer.appendChild(tabsBtnRow);

  const tabContent = document.createElement('article');
    tabContent.appendChild(menuComponent())

  tabsContainer.appendChild(tabContent);

  return tabsContainer
}

function tabButton(btnText) {
  const btn = document.createElement('button');
    btn.innerText = btnText;
    btn.classList.add('tabs__btn')

    btn.onclick = () => {

    }

    btn.onmouseenter = () => {
      btn.classList.add('animate__animated' , 'animate__pulse')
    }

    btn.addEventListener('animationend', () => {
      btn.classList.remove('animate__animated' , 'animate__pulse')
    });

    return btn
}
