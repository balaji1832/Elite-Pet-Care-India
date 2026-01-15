
const fadeElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // repeat animation
    }
  });
}, {
  threshold: 0.15
});

fadeElements.forEach(el => observer.observe(el));
