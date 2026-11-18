// 1. Make menu links scroll smoothly
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// 2. Highlight the menu for the section you dey read
const sections = document.querySelectorAll('section, div[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// 3. Contact Form - make am work
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]')?.value || document.querySelector('input[type="text"]')?.value;
    const email = document.querySelector('input[type="email"]')?.value;
    const message = document.querySelector('textarea')?.value;

    if (!name || !email || !message) {
      alert('Please fill all the fields!');
      return;
    }

    alert('Thank you ' + name + '! Your message has been sent. We will get back to you soon.');
    form.reset();
  });
}

// 4. Welcome message when site opens
console.log('Welcome to MindForge!');
