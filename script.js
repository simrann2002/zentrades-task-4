document.addEventListener('DOMContentLoaded', function() {

    // Validate email format
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
     
    // Validate password
    function validatePassword(password) {
        // This regex now only checks for at least one uppercase letter, at least one digit, and only @ as a special character
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]*$/;
        return regex.test(password);
    }
  
    // Handle form submission
    document.querySelector('.login-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;
  
      // Check if email is valid
      if (!validateEmail(username)) {
        alert('Please enter a valid email address.');
        return false;
      }
  
      // Check if password is valid
      if (!validatePassword(password)) {
        alert('Password must contain an uppercase letter, a number, and can only include special character @.');
        return false;
      }
  
      // Check if credentials are correct
      if (password === 'SmartServTest@123') {
        // Redirect to dashboard
        window.location.href = 'dashboard.html'; 
      } else {
        alert('Incorrect password. Please try again.');
      }
    });
  
    // Handle "Forgot your password?" link
    document.querySelector('.forgot-password').addEventListener('click', function(event) {
      event.preventDefault();
      window.open('mailto:support@smartserv.io');
    });
  
  });
  