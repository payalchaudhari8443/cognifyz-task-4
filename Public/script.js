// Client-side routing
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`${sectionId}-section`).classList.add('active');
}

// Form validation
function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Username validation
    if (username.length < 3) {
        document.getElementById('usernameFeedback').textContent = 'Username must be at least 3 characters';
        document.getElementById('usernameFeedback').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('usernameFeedback').textContent = 'Looks good!';
        document.getElementById('usernameFeedback').classList.remove('error');
    }

    // Email validation
    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailFeedback').textContent = 'Enter a valid email';
        document.getElementById('emailFeedback').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('emailFeedback').textContent = 'Looks good!';
        document.getElementById('emailFeedback').classList.remove('error');
    }

    // Password validation (called separately in real-time)
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        isValid = false;
    }

    if (isValid) {
        document.getElementById('registrationForm').submit();
    }
    return isValid;
}

// Real-time password strength check
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('passwordFeedback');

    if (password.length === 0) {
        feedback.textContent = '';
    } else if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        feedback.textContent = 'Password must be 8+ characters with letters and numbers';
        feedback.classList.add('error');
    } else {
        feedback.textContent = 'Strong password!';
        feedback.classList.remove('error');
    }
}