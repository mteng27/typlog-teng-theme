// Theme Toggle Script
(function() {
  // Check saved theme or system preference on load
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
  
  // Update toggle button icon
  function updateIcon() {
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.textContent = document.documentElement.classList.contains('dark') ? '☾' : '☀';
    }
  }
  
  // Toggle function
  window.toggleTheme = function(e) {
    if (e) e.preventDefault();
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcon();
  };
  
  // Set initial icon when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateIcon);
  } else {
    updateIcon();
  }
})();