document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields.';
      status.style.color = '#ff6b6b';
      return;
    }

    status.textContent = `Thanks, ${name}! Your message has been sent. I'll get back to you soon.`;
    status.style.color = '#00d4ff';
    form.reset();
  });
});