document.getElementById("getStartedBtn").addEventListener("click", function () {
    console.log("Get Started clicked");
  
    // Redirect to the assistant.html page
    window.location.href = 'Mental-Health-Assistant.html';
  });

  // Redirect for the "Login" button
document.querySelector(".login-btn").addEventListener("click", function () {
    console.log("Login clicked");
    window.location.href = 'Login-Signup.html';
  });
  
  // Redirect for the "Sign Up" button
  document.querySelector(".signup-btn").addEventListener("click", function () {
    console.log("Sign Up clicked");
    window.location.href = 'Login-Signup.html'; // You can change this to any other page
  });