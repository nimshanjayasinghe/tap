// Initialize Telegram Web App
const tg = window.Telegram.WebApp;
tg.ready(); // Inform Telegram that the app is ready

// DOM Elements
const scoreDisplay = document.getElementById('score');
const tapButton = document.getElementById('tapButton');
const energyDisplay = document.getElementById('energy');
const maxEnergyDisplay = document.getElementById('maxEnergy');
const energyBar = document.getElementById('energyBar');
const claimButton = document.getElementById('claimButton');

// Game State
let score = 0;
let currentEnergy = 100;
const maxEnergy = 100;
const energyPerTap = 10; // Example: 10 energy per tap
const energyRegenRate = 1; // Example: 1 energy per second

// Initialize Displays
scoreDisplay.textContent = score;
energyDisplay.textContent = currentEnergy;
maxEnergyDisplay.textContent = maxEnergy;
energyBar.value = currentEnergy;
energyBar.max = maxEnergy;

// Tap Button Event Listener
tapButton.addEventListener('click', () => {
    if (currentEnergy >= energyPerTap) {
        score++;
        scoreDisplay.textContent = score;

        currentEnergy -= energyPerTap;
        energyDisplay.textContent = currentEnergy;
        energyBar.value = currentEnergy;

        // Haptic feedback (optional, but good for UX)
        if (tg.HapticFeedback) {
            tg.HapticFeedback.impactOccurred('light');
        }

        // Simple button animation
        tapButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            tapButton.style.transform = 'scale(1)';
        }, 100);

    } else {
        // Optionally, provide feedback that user is out of energy
        if (tg.HapticFeedback) {
            tg.HapticFeedback.notificationOccurred('error');
        }
        tg.showAlert("Not enough energy to tap!"); // Changed to tg.showAlert
    }
});

// Energy Regeneration
setInterval(() => {
    if (currentEnergy < maxEnergy) {
        currentEnergy = Math.min(maxEnergy, currentEnergy + energyRegenRate);
        energyDisplay.textContent = currentEnergy;
        energyBar.value = currentEnergy;
    }
}, 1000); // Regenerate every second

// Claim Button Event Listener
claimButton.addEventListener('click', () => {
    if (score > 0) {
        // In a real airdrop, this would involve backend interaction.
        // For this fake version, we'll just show a message and maybe reset score.
        tg.showPopup({
            title: 'Airdrop Claimed!',
            message: `You've "claimed" ${score} coins! This is a demo, so no actual tokens are distributed.`,
            buttons: [{type: 'ok', text: 'Awesome!'}]
        }, (buttonId) => {
            if (buttonId === 'ok') {
                // Optionally reset score or provide other feedback
                // score = 0;
                // scoreDisplay.textContent = score;
                // tg.showAlert("Score has been reset (for demo purposes).");
            }
        });
    } else {
        tg.showAlert("Tap some coins first before claiming!");
    }
});

// Inform Telegram about the color scheme
tg.setHeaderColor(tg.themeParams.secondary_bg_color || '#ffffff'); // Set header color
tg.setBackgroundColor(tg.themeParams.bg_color || '#f0f0f0'); // Set background color

// Expand the app to full height
tg.expand();
