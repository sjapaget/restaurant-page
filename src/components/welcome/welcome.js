import img from './restaurant.jpg';
import './welcome.css'

export default function welcomeComponent() {
  const container = document.createElement('div');
    container.classList.add('content__welcome-container')

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
