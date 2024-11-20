// Get elements
const settingMenu = document.querySelector(".settings-menu");
const popup = document.querySelector(".popup");
const navUserIcon = document.querySelector(".nav-user-icon");
const eyes = document.querySelectorAll(".ri-eye-fill");
const closeIcons = document.querySelectorAll(".ri-close-circle-fill");

// Ensure popup and setting menu are hidden on page load
document.addEventListener("DOMContentLoaded", function() {
  popup.classList.remove("popup-height"); // Ensure popup is hidden by default
  settingMenu.classList.remove("settings-menu-height"); // Ensure setting menu is hidden by default
});

// Toggle the setting menu when the user icon is clicked
navUserIcon.addEventListener("click", settingMenuToggle);

// Toggle the popup height when any eye icon is clicked
eyes.forEach((eye) => {
  eye.addEventListener("click", eyeMenuToggle);
});

// Close the popup when any close icon is clicked
closeIcons.forEach((closeIcon) => {
  closeIcon.addEventListener("click", closePopup);
});

// Function to toggle the popup height
function eyeMenuToggle() {
  popup.classList.toggle("popup-height"); // Toggle popup height
  const links = document.getElementById("myLinks");

  // Hide myLinks if visible
  if (links && links.style.display === "block") {
    links.style.display = "none";
  }
}

// Function to toggle the setting menu height
function settingMenuToggle() {
  settingMenu.classList.toggle("settings-menu-height"); // Toggle setting menu height
  popup.classList.remove("popup-height"); // Ensure popup is closed when setting menu is toggled

  const links = document.getElementById("myLinks");

  // Hide myLinks if visible
  if (links && links.style.display === "block") {
    links.style.display = "none";
  }
}

// Function to close the popup
function closePopup() {
  popup.classList.remove("popup-height"); // Remove popup height class
}

// Function to toggle the hamburger menu
function humBurgurMenu() {
  const links = document.getElementById("myLinks");

  // Toggle display of myLinks
  if (links) {
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }

  // Close popup and setting menu when hamburger is clicked
  popup.classList.remove("popup-height");
  settingMenu.classList.remove("settings-menu-height");
}


function updateStatus(button, status) {
  button.textContent = status;
}

//Login 

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Dummy check for the email and password
  if (email === 'user@example.com' && password === 'password123') {
      errorMessage.textContent = '';
      alert('Login successful!');
      // Redirect to dashboard or any other page
      window.location.href = 'dashboard.html';
  } else {
      errorMessage.textContent = 'Invalid email or password!';
  }
});
