document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll to the inquiry form section
  const ctaButton = document.getElementById('cta-book-now');
  if (ctaButton) {
    ctaButton.addEventListener('click', function(event) {
      event.preventDefault();
      const inquiryForm = document.getElementById('inquiry-form');
      if (inquiryForm) {
        inquiryForm.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
});
