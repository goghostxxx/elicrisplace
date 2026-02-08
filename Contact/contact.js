const form = document.getElementById('contactForm');
const statusText = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  statusText.textContent = 'Sending message...';
  setTimeout(() => {
    statusText.textContent = 'Message sent successfully! We will get back to you soon.';
    form.reset();
  }, 1200);
});