import menuData from './menu.json'

export default function menuComponent(){
  const container = document.createElement('div');
    container.classList.add('content__menu-container');

    const menuSectionsArray = menuSectionGenerator(menuData);



    menuSectionsArray.forEach(section => container.appendChild(section));

  return container
}

function menuSectionGenerator(data) {
  return data.menu.map(menuCategory => {
    const menuCategorySection = document.createElement('section');

    const subMenuTitle = document.createElement('h5');
      subMenuTitle.innerText = menuCategory.category;
      menuCategorySection.appendChild(subMenuTitle);

    const subMenuItemsContainer = document.createElement('ul');

      menuCategory.items.forEach(item => {
        subMenuItemsContainer.appendChild(menuItemGenerator(item.name, item.price));
      })
    menuCategorySection.appendChild(subMenuItemsContainer);

    return menuCategorySection;
  });
}

function menuItemGenerator(name, price) {
  const listItem = document.createElement('li');
  listItem.innerText = `${name} - £${price/100}`
  return listItem
}
