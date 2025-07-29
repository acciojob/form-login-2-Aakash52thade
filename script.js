// This code runs when the form is submitted
document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent actual form submission

  // Get values from input fields using name attributes
  const firstName = this.elements["First Name"].value;
  const lastName = this.elements["Last Name"].value;
  const phone = this.elements["Phone Number"].value;
  const email = this.elements["Email ID"].value;

  // Format the message to be shown in the alert
  const message = `First Name ${firstName}\nLast Name ${lastName}\nPhone Number ${phone}\nEmail ID ${email}`;

  // Display the alert with form data
  alert(message);
});
