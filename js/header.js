
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const closeNav = document.getElementById('close-nav');

hamburger.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent background scroll
});

closeNav.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  document.body.style.overflow = '';
});

mobileNav.addEventListener('click', (e) => {
  if (e.target === mobileNav) {
    mobileNav.style.display = 'none';
    document.body.style.overflow = '';
  }
});
