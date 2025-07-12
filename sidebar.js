// Sidebar Navigation - Minimal Implementation (No Active State)
document.addEventListener('DOMContentLoaded', function() {
  // Clean up any active classes that might be in the HTML
  document.querySelectorAll('.sidebar-icon').forEach(icon => {
    icon.classList.remove('active');
  });
  
  // Configuration
  const CONFIG = {
    sectionOffset: 50  // Offset for section detection
  };
  
  // Set up click events for sidebar icons
  function setupClickEvents() {
    document.querySelectorAll('.sidebar-icon').forEach(icon => {
      icon.addEventListener('click', function(e) {
        const sectionId = this.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        
        if (section) {
          // Prevent default link behavior
          const link = this.querySelector('a');
          if (link) {
            e.preventDefault();
          }
          
          // Basic scroll to section
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: sectionTop - CONFIG.sectionOffset,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // Initialize navigation
  setupClickEvents();
});
