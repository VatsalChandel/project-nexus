// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
const contactFormDB = firebase.database().ref('contactForm');
const feedbackFormDB = firebase.database().ref('feedbackForm');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitContactForm);
document.getElementById('feedback-form').addEventListener('submit', submitFeedbackForm);

// Submit contact form
function submitContactForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    saveContactForm(name, email, message);
    document.getElementById('contact-form').reset();
}

// Save contact form to Firebase
function saveContactForm(name, email, message) {
    const newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        email: email,
        message: message
    });
}

// Submit feedback form
function submitFeedbackForm(e) {
    e.preventDefault();

    const name = document.getElementById('feedback-name').value;
    const email = document.getElementById('feedback-email').value;
    const message = document.getElementById('feedback-message').value;

    saveFeedbackForm(name, email, message);
    document.getElementById('feedback-form').reset();
}

// Save feedback form to Firebase
function saveFeedbackForm(name, email, message) {
    const newFeedbackForm = feedbackFormDB.push();
    newFeedbackForm.set({
        name: name,
        email: email,
        message: message
    });
}
