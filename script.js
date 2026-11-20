// 1. Welcome Button - the.btn button for home
let myButton = document.querySelector(".btn");

if (myButton) {
 myButton.addEventListener("click", function() {
 let name = prompt("What is your name?");
 if (name) {
 alert("Thank you " + name + "! Welcome to MindForge. Let's build something great!");

 let heading = 
 document.querySelector("h1");
 if (heading) {
  heading.textContent = "Welcome " + " to MindForge " + name;
 }
 }
 });
}

// 2. Smooth scroll when you click menu
document.querySelectorAll('nav a').forEach(link => {
 link.addEventListener('click', function(e) {
 const targetId = this.getAttribute('href');
 if (targetId && targetId.startsWith('#')) {
 e.preventDefault();
 const section = document.querySelector(targetId);
 if (section) {
 section.scrollIntoView({ behavior: 'smooth' });
 }
 }
 });
});

// 3. Highlight menu as you scroll
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

// 4. Contact form - make am work
const contactForm = document.querySelector('form');
if (contactForm) {
 contactForm.addEventListener('submit', function(e) {
 e.preventDefault();
 const name = document.querySelector('input[type="text"]').value;
 const email = document.querySelector('input[type="email"]').value;
 const message = document.querySelector('textarea').value;

 if (!name || !email || !message) {
 alert("Please fill all the fields!");
 return;
 }

 alert("Thank you " + name + "! Your message has been sent. We will get back to you soon.");
 contactForm.reset();
 });
}
