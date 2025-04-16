const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


<<<<<<< HEAD
const hamburger = document.querySelector(".hamburger");
const navList = document.getElementById("navList");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});

=======
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to server
  
    // Get the username and password entered by the user
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Mock credentials (this can be replaced with actual authentication logic)
    const validUsername = 'user123';
    const validPassword = 'password123';
  
    // Check if the username and password match the valid credentials
    if (username === validUsername && password === validPassword) {
      // Save the login information in cookies
      document.cookie = `username=${username}; path=/; max-age=3600`; // Cookie expires in 1 hour
      document.cookie = `password=${password}; path=/; max-age=3600`; // Cookie expires in 1 hour
  
      // Redirect to the home page or dashboard (example)
      window.location.href = 'index.html';
    } else {
      // Show error message if the login is invalid
      document.getElementById('login-error').style.display = 'block';
    }
  });
  
  // You can also add a function to check if cookies are set for auto-login if needed
  function checkLoginCookies() {
    const username = getCookie('username');
    const password = getCookie('password');
  
    if (username && password) {
      // Automatically log the user in if cookies are found
      window.location.href = 'index.html'; // Redirect to home page
    }
  }
  
  // Function to get a specific cookie's value
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  checkLoginCookies(); // Check cookies on page load
  
>>>>>>> 1fc44b11a6386d5b40edd4cef2861b3115baee6d
