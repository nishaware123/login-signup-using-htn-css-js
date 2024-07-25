const registerForm = document.getElementById("register-form");

// User Registration
registerForm.addEventListener("submit", (e) => {
  e.preventDefault(); // to prevent refresh page on submitting the form

  const userEmail = document.getElementById("register-email").value;
  const userName = document.getElementById("register-name").value;
  const userPassword = document.getElementById("register-password").value;
  const userConfirmPassword = document.getElementById(
    "register-confirm-password"
  ).value;

  if (userPassword !== userConfirmPassword) {  // check the condition for password is equal or not with confirmPassword
    alert("Password and Confirm password does not match");
    return
  }

  localStorage.setItem("userName", userName);
  localStorage.setItem("userEmail", userEmail);
  localStorage.setItem("userPassword", userPassword);

  alert("User Register successfully");
  registerForm.reset();

  window.location.href = "./login.html"

});


