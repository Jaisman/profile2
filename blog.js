
document.addEventListener("DOMContentLoaded", function() {
    const modeSwitchButton = document.getElementById("modeSwitch");

    modeSwitchButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const headlines = document.querySelectorAll('.item');
    let currentIndex = 0;

    function showNextHeadline() {
        headlines[currentIndex].style.opacity = '0';
        setTimeout(() => {
            headlines[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % headlines.length;
            headlines[currentIndex].style.display = 'block';
            headlines[currentIndex].style.opacity = '1';
        }, 500); // Adjust the delay as needed
    }

    // Initial appearance
    headlines[currentIndex].style.display = 'block';
    headlines[currentIndex].style.opacity = '1';

    // Set interval to show headlines one after the other
    setInterval(showNextHeadline, 3000); // Adjust the time interval (in milliseconds) between headlines
});

