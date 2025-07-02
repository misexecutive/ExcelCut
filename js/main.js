// 🔧 Reserved for future enhancements like mobile nav toggle, animations, etc.

// Example: Highlight current nav link (optional if not handled via CSS)
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  const current = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});
