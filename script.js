document.getElementById("contactForm").addEventListener("submit", function(e) {
  // Get values from fields
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // Simple email pattern check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Check if any field is empty
  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill all fields.");
    e.preventDefault(); // Stop form submission
  }
  // Check if email is valid
  else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault(); // Stop form submission
  }
  // Otherwise form will be submitted
});
