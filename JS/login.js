document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission to server

  // Get the username, email, and password entered by the user
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if all fields are filled out
  if (username === '' || email === '' || password === '') {
    document.getElementById('registration-error').style.display = 'block';
    return;
  }

  // Save the user data to cookies
  document.cookie = `username=${username}; path=/; max-age=3600`; // Cookie expires in 1 hour
  document.cookie = `email=${email}; path=/; max-age=3600`; // Cookie expires in 1 hour
  document.cookie = `password=${password}; path=/; max-age=3600`; // Cookie expires in 1 hour

  // Redirect to the login page after registration
  alert('Registration successful! You can now log in.');
  window.location.href = 'Login.html';
});

// Function to get a specific cookie's value
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
