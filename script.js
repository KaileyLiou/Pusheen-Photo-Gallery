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

    if (submitButton && resultDisplay) {
        submitButton.addEventListener("click", () => {
            let score = 0;

            for (let key in answers) {
                const selected = document.querySelector(`input[name="${key}"]:checked`);
                if (selected && selected.value === answers[key]) {
                    score++;
                }
            }

            resultDisplay.textContent = `You got ${score} out of 5 correct!`;

            if (score === 5 && typeof confetti === "function") {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        });
    }

    const restartButton = document.querySelector(".restart-button");
    if (restartButton && resultDisplay) {
        restartButton.addEventListener("click", () => {
            const allRadios = document.querySelectorAll('input[type="radio"]');
            allRadios.forEach(radio => radio.checked = false);
            resultDisplay.textContent = "";
        });
    }

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

    if (factButton && factDisplay) {
        factButton.addEventListener("click", () => {
            const randomIndex = Math.floor(Math.random() * facts.length);
            factDisplay.textContent = facts[randomIndex];
        });
    }

    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close-lightbox");

    if (images.length && lightbox && lightboxImg && closeBtn) {

        images.forEach(img => {
            img.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = img.src;
                document.body.style.overflow = "hidden";
            });
        });

        const closeLightbox = () => {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        };

        closeBtn.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeLightbox();
            }
        });
    }

});