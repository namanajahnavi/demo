// script.js

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  document.getElementById('applicationForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear any existing errors
    document.querySelectorAll('.error').forEach(function(element) {
        element.textContent = '';
    });

    let isValid = true;

    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (name.length < 3) {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long.';
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // More robust email validation pattern
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    }

    // Validate Phone Number
    const mobile = document.getElementById('mobile').value.trim();
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(mobile)) {
        isValid = false;
        document.getElementById('mobileError').textContent = 'Phone number must be exactly 10 digits.';
    }

    // Validate OTP
    const otp = document.getElementById('otp').value.trim();
    const otpPattern = /^[0-9]{6}$/;
    if (!otpPattern.test(otp)) {
        isValid = false;
        document.getElementById('otpError').textContent = 'OTP must be a 6-digit number.';
    }

    // If the form is valid, submit it
    if (isValid) {
        alert('Form submitted successfully!');
        // Uncomment the following line if you want to allow form submission
        // this.submit();
    }
});