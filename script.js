//  for nav scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.backgroundColor = 'rgba(114, 207, 175, 0.95)';
    } else {
      nav.style.backgroundColor = 'rgba(114, 207, 175, 0.6)';
    }
  });

  // apply for theme 

  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    alert(`btn clicked`);
    body.classList.toggle("dark");

    // Optional: Change button icon
    if (body.classList.contains("dark")) {
      toggleBtn.textContent = "☀️"; // Switch to light
    } else {
      toggleBtn.textContent = "🌙"; // Switch to dark
    }
  });
  
  