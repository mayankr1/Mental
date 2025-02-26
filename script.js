document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Add your sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Sign-in form submitted!');
});
