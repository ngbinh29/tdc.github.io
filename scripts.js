
// Contact page
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  // const message = document.getElementById('message').value;

  console.log('Name:', name);
  console.log('Email:', email);
  // console.log('Message:', message);

  // Here you can add your form submission logic (e.g., sending data to a server)
  alert('Thank you for your message! We will get back to you soon.');
  
  // Optionally, reset the form
  document.getElementById('contact-form').reset();
});

