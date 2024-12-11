// Add an event listener to the signup link
document.getElementById("signup-link").addEventListener("click", function () {
  // When the signup link is clicked, hide the login form
  document.getElementById("login-form").style.display = "none";
  // Show the signup form
  document.getElementById("signup-form").style.display = "block";
});

// Add an event listener to the login link
document.getElementById("login-link").addEventListener("click", function () {
  // When the login link is clicked, hide the signup form
  document.getElementById("signup-form").style.display = "none";
  // Show the login form
  document.getElementById("login-form").style.display = "block";
});
