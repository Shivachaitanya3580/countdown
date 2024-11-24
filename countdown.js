let countdownValue = 10;
const countdownElement = document.getElementById("countdown");

const countdownInterval = setInterval(() => {
    countdownElement.textContent = countdownValue;

    if (countdownValue === 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Time completed";
    } else {
        countdownValue--;
    }
}, 1000); 