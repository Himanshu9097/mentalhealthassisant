document.getElementById("getStartedBtn").addEventListener("click", function () {
    console.log("Get Started clicked");
  
    // Redirect to the assistant.html page
    window.location.href = 'Mental-Health-Assistant.html';
  });

  // Redirect for the "Login" button
document.querySelector(".login-btn").addEventListener("click", function () {
    console.log("Login clicked");
    window.location.href = 'consultant.html';
  });
  
  // Redirect for the "Sign Up" button
  document.querySelector(".signup-btn").addEventListener("click", function () {
    console.log("Sign Up clicked");
    window.location.href = 'Login-Signup.html'; // You can change this to any other page
  });

  document.querySelector(".login-btn").addEventListener("click", function () {
    console.log("Login clicked");
    window.open('login.html', '_blank');
  });


  document.querySelector(".hero-btn-primary").addEventListener("click", function () {
    console.log("Sign Up clicked");
    window.location.href = 'journal-js-master/index.html'; // You can change this to any other page
  });

  document.querySelector(".hero-btn-secondary").addEventListener("click", function () {
    console.log("Sign Up clicked");
    window.location.href = 'https://drive.google.com/file/d/1ptE8VIxFcgKfNkxpefJ1LztHmyQ9ETKJ/view?usp=sharing'; // You can change this to any other page
  });