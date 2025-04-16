document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault(); 


  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  if (username === '' || email === '' || password === '') {
    document.getElementById('registration-error').style.display = 'block';
    return;
  }

  document.cookie = `username=${username}; path=/; max-age=3600`;
  document.cookie = `email=${email}; path=/; max-age=3600`; 
  document.cookie = `password=${password}; path=/; max-age=3600`; 


  alert('Registration successful! You can now log in.');
  window.location.href = 'Login.html';
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
