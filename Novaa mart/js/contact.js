document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name && email && message) {
            alert("Thank you for reaching out, " + name + "! We will get back to you soon.");
            this.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
