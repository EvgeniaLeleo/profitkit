import { DATA_KEYS } from './constants';
import { generateCards } from './generateCards';

export function generateNav(container, data) {
  const header = document.createElement('div');
  header.classList.add('header');

  const nav = document.createElement('ul');
  nav.classList.add('nav');

  header.appendChild(nav);

  const popular = document.createElement('li');
  popular.classList.add('nav__link', 'nav__link_active');
  popular.textContent = 'Популярные товары';

  const recent = document.createElement('li');
  recent.classList.add('nav__link');
  recent.textContent = 'Недавно купили';

  const forYou = document.createElement('li');
  forYou.classList.add('nav__link');
  forYou.textContent = 'Вас может заинтересовать';

  nav.appendChild(popular);
  nav.appendChild(recent);
  nav.appendChild(forYou);

  container.appendChild(nav);

  /**
   * Tabs functionality
   */
  const navLinks = nav.querySelectorAll('.nav__link');

  navLinks.forEach((navLink, i) => {
    navLink.addEventListener('click', () => {
      navLinks.forEach((navLink) => {
        navLink.classList.remove('nav__link_active');
      });
      navLink.classList.add('nav__link_active');

      if (data[DATA_KEYS[i]]) {
        const items = [...data[DATA_KEYS[i]]].map(
          (id) => data.items.filter((item) => id === item.id)[0]
        );
        generateCards(items);
      }
    });
  });
}
