import './style.css';
import img from './restaurant.jpg';


function component() {
  const container = document.createElement('div');
    container.classList.add('content__welcome-container')
  const title = document.createElement('h1');
    title.innerText = "Chez Meunier";
    title.classList.add('content__welcome-title');
  container.appendChild(title);

  const tagline = document.createElement('p');
    tagline.innerText = "A great dining experience in central Paris";
    tagline.classList.add('content__welcome-tagline');
  container.appendChild(tagline);

  const image = document.createElement('img');
    image.src = img;
    image.classList.add('content__welcome-img')
  container.appendChild(image)

    return container
  }

  content.appendChild(component());
