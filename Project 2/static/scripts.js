
document.getElementById('confirm-password').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('password-match-message');
    
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match";
        message.classList.remove('hidden');
    } else {
        message.textContent = "";
        message.classList.add('hidden');
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('password-match-message');

    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        message.textContent = "Passwords do not match";
        message.classList.remove('hidden');
    }
});
