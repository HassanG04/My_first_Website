// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Interactive button on home page
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const responses = [
                "Fun Fact:I love RTS videogames!",
                "My linkedin would feel honored to have you!",
                "Feel free to ask me for anything.",
                "Check the Hobbies.",
                "Don't hesitate to contact me."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            document.getElementById('ctaResponse').textContent = randomResponse;
            
            // Change button text after first click
            if (ctaButton.textContent === 'Click Me!') {
                ctaButton.textContent = 'Click again!';
            }
        });
    }
    //Creating Dark mode function
    document.addEventListener('DOMContentLoaded', function() {
        // Dark mode initialization
        function initializeDarkMode() {
            const isDark = localStorage.getItem('dark-mode') === 'enabled';
            const icon = document.querySelector('#darkModeToggle i');
            
            if (isDark) {
                document.body.classList.add('dark-mode');
                icon.classList.replace('fa-sun', 'fa-moon');
            } else {
                document.body.classList.remove('dark-mode');
                icon.classList.replace('fa-moon', 'fa-sun');
            }
        }
        // Initialize on page load
        initializeDarkMode();
        // Toggle handler
        document.getElementById('darkModeToggle').addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
            
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });
    // Add active class to current page in navbar
    const currentPage=location.pathname.split('/').pop();
    if(currentPage){
        document.querySelectorAll('.nav-link').forEach(link =>{
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
            else{
                link.classList.remove('active');
            }
        });
    }
});
});