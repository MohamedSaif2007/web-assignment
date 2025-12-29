
window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress');
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        progressBars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
        });
    }
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const status = document.getElementById('formStatus');

    if (name.length < 3) {
        status.innerText = "Please enter a valid name.";
        status.style.color = "red";
    } else if (!email.includes("@")) {
        status.innerText = "Please enter a valid email address.";
        status.style.color = "red";
    } else {
        status.innerText = "Thank you! Your message has been sent.";
        status.style.color = "green";
        this.reset();
    }
});