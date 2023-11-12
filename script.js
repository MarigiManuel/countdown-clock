// Set the date to count down to (e.g., New Year's Eve)
const countDownDate = new Date('Jan 1, 2024 00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calculate remaining time
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the 'countdown' div
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = 'Happy New Year!';
    }
}, 1000); // Update every second
