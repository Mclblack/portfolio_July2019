var firebaseConfig = {
    apiKey: "AIzaSyDcuwnj97wABZhXeqUJbY3kjD8IuTXLqXE",
    authDomain: "webdev-contact.firebaseapp.com",
    databaseURL: "https://webdev-contact.firebaseio.com",
    projectId: "webdev-contact",
    storageBucket: "webdev-contact.appspot.com",
    messagingSenderId: "21427598389",
    appId: "1:21427598389:web:1488af9d862c73af"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//// Listen for form submit

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('name'),
        email = getInputVal('email'),
        phone = getInputVal('phone'),
        message = getInputVal('message');

    saveMessage(name, email, phone, message);
    
    document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
}, 3000);

     document.getElementById('contactForm').reset();
}







// Submit form




// Show alert

// Clear form



// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// // Save message to firebase
function saveMessage(name, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}
