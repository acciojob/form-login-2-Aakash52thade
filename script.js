const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual form submission

  const firstName = document.querySelector('[name="First Name"]').value.trim();
  const lastName = document.querySelector('[name="Last Name"]').value.trim();
  const phone = document.querySelector('[name="Phone Number"]').value.trim();
  const email = document.querySelector('[name="Email ID"]').value.trim();

  const message = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phone}\nEmail ID: ${email}`;
  alert(message);
});
