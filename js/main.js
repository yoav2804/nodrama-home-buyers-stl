// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// FAQ accordion
document.querySelectorAll('.faq-question').forEach((btn) => {
  const answer = btn.nextElementSibling;
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    answer.style.maxHeight = isOpen ? '0px' : `${answer.scrollHeight}px`;
  });
});

// Lead capture / contact forms: markup only for now, no backend wired up yet.
document.querySelectorAll('.offer-form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
});
