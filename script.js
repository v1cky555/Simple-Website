document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for your message, " + document.getElementById("name").value + "!");
    this.reset(); // Reset the form fields
});