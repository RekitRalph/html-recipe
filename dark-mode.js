// Dark mode toggle functionality
$(document).ready(function() {
  // Check for saved dark mode preference, default to light mode
  const darkMode = localStorage.getItem('darkMode');

  if (darkMode === 'enabled') {
    $('body').addClass('dark-mode');
  }

  // Remove the loading class now that JS has loaded
  $('html').removeClass('dark-mode-loading');

  // Toggle dark mode when button is clicked
  $('#darkModeToggle').click(function() {
    $('body').toggleClass('dark-mode');

    // Save preference to localStorage
    if ($('body').hasClass('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});
