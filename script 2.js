const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> { 
    wrapper.classList.add('active'); 
});

loginLink.addEventListener('click', ()=> { 
    wrapper.classList.remove('active'); 
});

btnPopup.addEventListener('click', ()=> { 
    wrapper.classList.add('active-popup'); 
});

iconClose.addEventListener('click', ()=> { 
    wrapper.classList.remove('active-popup'); 
});



// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the login button and the close button
    const loginButton = document.querySelector(".btnLogin-popup");
    const closeButton = document.querySelector(".icon-close");
  
    // Get the login form and the wrapper
    const loginForm = document.querySelector(".form-box.Login");
    const wrapper = document.querySelector(".wrapper");
  
    // Add click event listener to the login button
    loginButton.addEventListener("click", function () {
      // Show the login form and wrapper
      loginForm.style.display = "block";
      wrapper.style.display = "block";
    });
  
    // Add click event listener to the close button
    closeButton.addEventListener("click", function () {
      // Hide the login form and wrapper
      loginForm.style.display = "none";
      wrapper.style.display = "none";
    });
  
    // Handle form submission
    const loginFormElement = loginForm.querySelector("form");
    loginFormElement.addEventListener("submit", function (event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // You can add additional logic here for validating the email and password
  
      // Redirect to the specified page (diet.html)
      window.location.href = "diet.html";
    });
  });
  