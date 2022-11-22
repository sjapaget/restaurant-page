import './tabs.css';
import welcomeComponent from "../welcome/welcome.js";
import menuComponent from '../menu/menu.js';

import 'animate.css';

export default function tabComponent() {
  const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('tabs__container');

    const tabContent = document.createElement('article');

    const welcome  = welcomeComponent();
    const menu = menuComponent();

    const tabElements = [welcome, menu];

    tabContent.appendChild(welcome);

    menu.style.display = "none";
    tabContent.appendChild(menu);



    const tabsBtnRow = document.createElement('div');
    tabsBtnRow.classList.add('tabs__btn-row');
    tabsBtnRow.appendChild(tabButton("Welcome", tabElements));
    tabsBtnRow.appendChild(tabButton("Menu", tabElements));
    // tabsBtnRow.appendChild(tabButton("Contact", contact));

    tabsContainer.appendChild(tabsBtnRow);
    tabsContainer.appendChild(tabContent);

  return tabsContainer
}

function tabButton(btnText, tabElements) {
  const btn = document.createElement('button');
    btn.innerText = btnText;
    btn.classList.add('tabs__btn')

    btn.onclick = (event) => {
      switch(event.target.innerText) {
        case "Welcome":
          tabElements[0].style.display = "flex";
          tabElements[1].style.display = "none";
          break;
          case "Menu":
          tabElements[0].style.display = "none";
          tabElements[1].style.display = "block";

      }
    }

    btn.onmouseenter = () => {
      btn.classList.add('animate__animated' , 'animate__pulse')
    }

    btn.addEventListener('animationend', () => {
      btn.classList.remove('animate__animated' , 'animate__pulse')
    });

    return btn
}
