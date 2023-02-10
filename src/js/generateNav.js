export function generateNav(container) {
  const header = document.createElement('div');
  header.classList.add('header');

  const nav = document.createElement('ul');
  nav.classList.add('nav');

  header.appendChild(nav);

  const popular = document.createElement('li');
  popular.classList.add('nav__item', 'nav__item_active');
  popular.textContent = 'популярные товары';

  const recent = document.createElement('li');
  recent.classList.add('nav__item');
  recent.textContent = 'Недавно купили';

  const interesting = document.createElement('li');
  interesting.classList.add('nav__item');
  interesting.textContent = 'Вас может заинтересовать';

  nav.appendChild(popular);
  nav.appendChild(recent);
  nav.appendChild(interesting);

  container.appendChild(nav);
}
