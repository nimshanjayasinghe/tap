# Telegram Fake Airdrop Tapper Mini App

This project is a simple Telegram Mini App that simulates a "tap-to-earn" airdrop game. Users can tap a button to earn "coins," manage their "energy," and "claim" a fake airdrop.

## Features

- Tap to earn coins.
- Energy system: Tapping consumes energy, which regenerates over time.
- Fake airdrop claim: Simulates claiming earned coins (for demonstration purposes only).
- Integration with Telegram Mini App SDK:
    - Uses Telegram theme variables for UI.
    - Haptic feedback for interactions.
    - Native alerts and popups.
    - Expands to full height.

## Project Structure

- `index.html`: The main HTML file for the Mini App.
- `style.css`: CSS file for styling the application.
- `script.js`: JavaScript file containing the application logic.
- `README.md`: This file.

## Setup and Running

This Mini App is a web application built with HTML, CSS, and JavaScript.

### Prerequisites

- A web server to host the files (HTTPS is required by Telegram for Mini Apps). Examples:
    - GitHub Pages (for static sites)
    - Netlify
    - Vercel
    - Your own server with Nginx/Apache configured for HTTPS.
- A Telegram Bot created via @BotFather.

### Steps to Deploy

1.  **Host the Files:**
    *   Upload `index.html`, `style.css`, and `script.js` to your chosen hosting provider.
    *   Ensure the application is accessible via an HTTPS URL (e.g., `https://yourusername.github.io/tapper-app/`).

2.  **Configure Your Telegram Bot:**
    *   Open Telegram and chat with `@BotFather`.
    *   Use the `/mybots` command and select the bot you want to use.
    *   Go to "Bot Settings" -> "Menu Button".
    *   You can either configure the menu button to launch the Mini App directly or set up a command.
    *   **To set the menu button URL:**
        *   Click "Edit Menu Button URL".
        *   Enter the HTTPS URL where your `index.html` is hosted.
        *   Give it a name (e.g., "Play Tapper Game").
    *   **Alternatively, to use a command (e.g., `/play`):**
        *   Use the `/setcommands` command with BotFather.
        *   Create a command (e.g., `play - Starts the Tapper Game`).
        *   In your bot's code (if you have a server-side bot part), you would handle this command by sending a message with an inline keyboard button that links to your Mini App URL, or by sending a message with a direct link that opens the app. For a simpler setup, the menu button is easier.

3.  **Launch the Mini App:**
    *   Open a chat with your bot in Telegram.
    *   If you configured the menu button, it should appear near the message input field. Click it to launch the app.
    *   If you used a command and a server-side bot, send the command (e.g., `/play`).

## Development

- You can test the Mini App by opening the `index.html` file in a web browser. Some Telegram-specific features (like haptic feedback or user data) might not work or will use fallbacks outside the Telegram environment.
- For testing Telegram-specific features, you'll need to deploy it and launch it through the Telegram app.

## Disclaimer

This is a "fake" airdrop tapper for demonstration and educational purposes. No real cryptocurrency or tokens are involved or distributed.
