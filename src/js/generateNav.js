export function generateNav(container) {
  const header = document.createElement('div');
  header.classList.add('header');

  const nav = document.createElement('ul');
  nav.classList.add('nav');

  header.appendChild(nav);

  const popular = document.createElement('li');
  popular.classList.add('nav__link', 'nav__link_active');
  popular.textContent = 'популярные товары';

  const recent = document.createElement('li');
  recent.classList.add('nav__link');
  recent.textContent = 'Недавно купили';

  const interesting = document.createElement('li');
  interesting.classList.add('nav__link');
  interesting.textContent = 'Вас может заинтересовать';

  nav.appendChild(popular);
  nav.appendChild(recent);
  nav.appendChild(interesting);

  container.appendChild(nav);
}
