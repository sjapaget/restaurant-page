import './navbar.css';



export default function navbar() {
  const nav = document.createElement('nav');
    nav.classList.add('nav')

  const siteTitle = document.createElement('h3');
    siteTitle.classList.add('nav__title');
    siteTitle.innerText = "Chez Meunier";
  nav.appendChild(siteTitle)

  return nav
}
