// Simple form handler for demo
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out! (Demo only)');
        form.reset();
    });
}
