document.getElementById('login-toggle').addEventListener('click', function() {

    document.getElementById('signup-form').classList.add('hidden');

    setTimeout(function() {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'flex';
        setTimeout(function() {
            document.getElementById('login-form').classList.remove('hidden');
        }, 20); 
    }, 500); 

    document.getElementById('login-toggle').classList.add('active');
    document.getElementById('signup-toggle').classList.remove('active');
    
});

document.getElementById('signup-toggle').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('hidden');
    setTimeout(function() {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'flex';
        setTimeout(function() {
            document.getElementById('signup-form').classList.remove('hidden');
        }, 20); 
    }, 500); 
    document.getElementById('signup-toggle').classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.querySelector('#signup-form input[placeholder="Username"]').value;
    var email = document.querySelector('#signup-form input[type="email"]').value;
    var password = document.querySelector('#signup-form input[type="password"]').value;
    var confirmPassword = document.querySelector('#signup-form input[placeholder="Confirm Password"]').value;

    if (username.trim() === '') {
        alert('Username cannot be empty!');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else if (!validateEmail(email)) {
        alert('Invalid email format!');
    } else {
        alert('Signup successful!');
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
