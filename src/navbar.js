import './navbar.css';
import 'animate.css';


export default function navbar() {
  const nav = document.createElement('nav');
    nav.classList.add('nav')

  const siteTitle = document.createElement('h3');
    siteTitle.classList.add('nav__title');
    siteTitle.innerText = "Chez Meunier";
  nav.appendChild(siteTitle)

  const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('nav__tabs-container');
    tabsContainer.appendChild(tabButton("Welcome"))
    tabsContainer.appendChild(tabButton("Menu"))
    tabsContainer.appendChild(tabButton("Contact"))
  nav.appendChild(tabsContainer)

  return nav
}

function tabButton(btnText) {
  const btn = document.createElement('button');
    btn.innerText = btnText;
    btn.classList.add('nav__tabs-btn')

    btn.onmouseenter = () => {
      btn.classList.add('animate__animated' , 'animate__pulse')
    }
    btn.addEventListener('animationend', () => {
      btn.classList.remove('animate__animated' , 'animate__pulse')
    });

    return btn
}
