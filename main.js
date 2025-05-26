function showPassword() {
    let passField = document.getElementById("password");
    if (passField.type === "password") {
        passField.type = "text";
    } else {
        passField.type = "password";
    }
}

document.querySelector("button").addEventListener("mousemove", function(e) {
    let rect = this.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    this.style.background = `radial-gradient(circle at ${x}px ${y}px,rgba(255, 0, 153, 0.98), blue)`;
});

document.querySelector("button").addEventListener("mouseleave", function() {
    this.style.background = "black";
})

function loginUser() {
  const username = document.getElementById("username").value;
  localStorage.setItem("loggedInUser", username); // Save username
  window.location.href = "survey.html"; // Go to the survey page
}