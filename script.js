document.addEventListener("DOMContentLoaded", () => {

    const answers = {
        q1: "February 18",
        q2: "Her toes look like beans",
        q3: "Stormy",
        q4: "Snacking",
        q5: "All of the above"
    };

    const submitButton = document.getElementById("submit-button");
    const resultDisplay = document.getElementById("result");

    submitButton.addEventListener("click", () => {
        let score = 0;
        for (let key in answers) {
            const selected = document.querySelector(`input[name="${key}"]:checked`);
            if (selected && selected.value === answers[key]) {
                score++;
            }
        }

        resultDisplay.textContent = `You got ${score} out of 5 correct!`;

        if (score === 5) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    });

    const restartButton = document.querySelector(".restart-button");
    restartButton.addEventListener("click", () => {
        const allRadios = document.querySelectorAll('input[type="radio"]');
        allRadios.forEach(radio => radio.checked = false);
        resultDisplay.textContent = "";
    });

    const facts = [
        "Pusheen's birthday is February 18!",
        "Pusheen has a sister named Stormy.",
        "Pusheen loves snacking the most.",
        "Pusheen's favorite foods include pizza, donuts, and bacon.",
        "Pusheen's toes look like tiny beans.",
        "Pusheen sometimes dresses up in costumes for fun comics.",
        "The creator of Pusheen is Claire Belton."
    ];

    const factButton = document.getElementById("fact-button");
    const factDisplay = document.getElementById("pusheen-fact");

    factButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    });
});