const loginForm = document.getElementById("login-form");

//Login User
loginForm.addEventListener("submit", (event)=>{
    event.preventDefault(); //prevent the page from refreshing

    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    // get values from localstorage
    const storedEmail = localStorage.getItem("userEmail")
    const storedPassword = localStorage.getItem("userPassword")

    // check the email
    if (loginEmail !== storedEmail) {
        alert("Email not registred")
        return
    }

     // check the password
    if (loginPassword !== storedPassword) {
        alert("Password is incorrect")
        return
    }

    alert("User login successfully (:-)")

    window.location.href = "./home.html"

})