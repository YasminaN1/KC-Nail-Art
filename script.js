// Mobile menu
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }
  function closeMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
  }
  // close on outside click
  document.addEventListener('click', function(e){
    const menu = document.getElementById('mobileMenu');
    const btn = document.querySelector('.hamburger');
    if(!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('open');
    }
  });
 
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));
 
  // Stagger service cards
  document.querySelectorAll('.service-card.reveal').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });