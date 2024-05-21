// scripts.js
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing with email: ${email}`);
    document.getElementById('email').value = '';
});
