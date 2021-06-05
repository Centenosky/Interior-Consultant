const $toggleIcon = document.querySelector('.toggle-icon');
const $menu = document.getElementById('menu');

$toggleIcon.addEventListener('click', () => {
  $toggleIcon.classList.toggle('is-active');
  $menu.classList.toggle('visible');
});
