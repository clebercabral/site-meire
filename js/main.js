const WA_NUMBER = '5561992496159';
const WA_MSG = 'Olá, Rosemeire! Gostaria de agendar uma conversa.';
const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

document.querySelectorAll('[data-wa]').forEach(a => {
  a.href = waUrl; a.target = '_blank'; a.rel = 'noopener';
});

const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const setMenu = open => {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
};
toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

