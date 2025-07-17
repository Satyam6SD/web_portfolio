// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Animate skill progress bars & update visitor counter when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Animate skill bars (only if present)
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    const width = bar.dataset.width; // cleaner
    bar.style.width = width;
  });

  // Visitor counter
  let count = Number(localStorage.getItem('visitorCount')) || 0;
  count++;
  localStorage.setItem('visitorCount', count);
  document.querySelectorAll('#visitorCount').forEach(el => {
    el.textContent = count;
  });
});

// Simple contact form validation
function validateForm() {
  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return false;
  }
  alert('Message sent successfully!');
  return true;
}

// Toggle navbar on small screens (hamburger menu)
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu?.classList.toggle('show');
}
