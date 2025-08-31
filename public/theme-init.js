// Theme initialization - prevents flash of wrong theme
(function() {
  const savedTheme = localStorage.getItem('theme');
  
  // Default to dark mode if no saved preference
  if (!savedTheme) {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  } else if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();
