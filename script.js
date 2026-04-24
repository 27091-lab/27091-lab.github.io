document.addEventListener("DOMContentLoaded", function () {

  // Scroll animation
  const sections = document.querySelectorAll('.section');

  window.addEventListener('scroll', () => {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.classList.add('show');
      }
    });
  });

});

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
