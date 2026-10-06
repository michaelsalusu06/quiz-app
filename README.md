# QuizApp

An interactive, time-sensitive True/False trivia game built entirely with vanilla web technologies. This project focuses on asynchronous JavaScript timing events, dynamic DOM manipulation, and precise CSS positioning.

## Features

* **Dynamic Content Generation:** Trivia questions and answers are stored in JavaScript arrays and injected into the document object model at runtime.
* **Asynchronous Countdown Timer:** Each question features a strict 10-second countdown utilizing `setInterval` and `clearInterval` to manage the game state.
* **Real-Time Scoring:** Points are calculated and updated on the screen instantly upon user interaction.
* **Custom UI Layout:** The interface utilizes CSS absolute positioning to cleanly lock the score and timer displays relative to the main question card.

## File Structure

* `index.html`: The main landing page for the application.
* `quiz.html`: The core trivia interface housing the interactive elements.
* `style.css`: Custom stylesheet handling the relative/absolute UI positioning.
* `script.js`: The central logic controlling the arrays, scoring loop, and interval timers.

## Getting Started

1. Clone the repository to your local machine:
   ```bash
   git clone [https://github.com/michaelsalusu06/QuizApp.git](https://github.com/michaelsalusu06/QuizApp.git)
