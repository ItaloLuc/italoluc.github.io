// Index.html script

const translations = {
    en: {
        introTitle: "Welcome to My Portfolio",
        introSubtitle: "I hope you like what you see!",
        buttonText: "Take a look",
    },
    pt: {
        introTitle: "Bem-vindo ao Meu Portfólio",
        introSubtitle: "Espero que você goste do que vê!",
        buttonText: "Dar uma olhada",
    },
};

    const button = document.getElementById('intro-button');
    const introSection = document.getElementById('intro');

    button.addEventListener('click', function () {
        // Add the fade-out class to the intro section
        introSection.classList.add('fade-out');

        // Wait for the animation to complete before redirecting
        setTimeout(() => {
            window.location.href = '/portfolio.html';
        }, 1000); // Match the duration of the fade-out animation

        
    });

    function playSoundHover() {
        const audio = document.getElementById("hover-sound");
        audio.volume = 0.2; // Set the volume level (0.0 to 1.0)
        audio.play();
    }

    function playSoundClick() {
        const audio = document.getElementById("click-sound");
        audio.volume = 0.2; // Set the volume level (0.0 to 1.0)
        audio.play();
    }

    function setLanguage(language) {
        const elements = {
            introTitle: document.querySelector("#intro h1"),
            introSubtitle: document.querySelector("#intro p"),
            buttonText: document.querySelector("#intro-button"),
        };

        const translation = translations[language];
        elements.introTitle.textContent = translation.introTitle;
        elements.introSubtitle.textContent = translation.introSubtitle;
        elements.buttonText.textContent = translation.buttonText;

        // Update the redirect URL for the "Take a Look" button
        const button = document.getElementById("intro-button");
        const redirectUrl = language === "en" ? "portfolio-en.html" : "portfolio.html";

        // Remove any existing event listeners to avoid duplicates
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        newButton.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default behavior
            redirectToPortfolio(redirectUrl);
        });

        // Save the selected language to localStorage
        localStorage.setItem("selectedLanguage", language);
    }
    

    // Load the saved language from localStorage or default to Portuguese
    const savedLanguage = localStorage.getItem("selectedLanguage") || "pt";
    setLanguage(savedLanguage);

    // Add event listeners to the language switcher buttons
    document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));
    document.getElementById("btn-pt").addEventListener("click", () => setLanguage("pt"));

    function redirectToPortfolio(url) {
        const introSection = document.getElementById("intro");
        introSection.classList.add("fade-out"); // Add fade-out animation
        setTimeout(() => {
            window.location.href = url; // Redirect after animation
        }, 1000); // Match the fade-out animation duration
    }

    // Portfolio English version

    const skillLevels = document.querySelectorAll('.level');
    
    window.addEventListener('scroll', () => {
        skillLevels.forEach(level => {
            const rect = level.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                level.style.width = level.getAttribute('style').split(':')[1];
            }
        });
    });

    const quotes = [
        "Great things never come from comfort zones.",
        "Creativity is intelligence having fun.",
        "The only limit to your impact is your imagination and effort.",
        "Success is the sum of small efforts repeated day in and day out.",
        "Technology moves the world, but passion moves technology.",
        "If you can dream it, you can do it.",
        "Persistence is the path to success.",
        "Believe in yourself and everything else will fall into place.",
        "If you're not scared, you're not taking risks, and if you're not taking risks, then what the heck are you doing?",
        "When life lets you down, what's the solution? Just keep swimming.",
        "Yes, the past can hurt. But the way I see it, you can either run from it or learn from it.",
        "What is necessary is not just to endure, much less to hide – all idealism is a lie before the necessary – but to love it.",
        "Life is a play that does not allow rehearsals. So sing, cry, dance, laugh, and live intensely before the curtain closes and the play ends without applause.",
        "A broken clock is right twice a day.",
        "If you're going to try, go all the way. Otherwise, don't even start. This could mean losing girlfriends, wives, relatives and maybe even your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery--isolation. Isolation is the gift. All the others are a test of your endurance, of how much you really want to do it. And, you'll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. If you're going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It's the only good fight there is.",
        "What does it matter the evil that torments you, if the dream makes you happy and can come true?",
        "Perhaps this is the greatest risk we can take, to be seen as we truly are.",
        "No one was going to hand me my future on a silver platter, achieving my dream depended on me, holding it tightly and making it a reality.",
    ];

    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display the random quote in the hero section
    document.getElementById('quote').textContent = `"${randomQuote}"`;

    // Map skill levels to progress percentages
    const levelMapping = {
        "Basic": "30%",
        "Intermediate": "60%",
        "Advanced": "90%"
    };

    // Get all skill cards
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        // Get the level from the data attribute
        const level = card.getAttribute('data-level');

        // Get the corresponding progress percentage
        const progress = levelMapping[level];

        // Set the width of the progress bar
        const progressBar = card.querySelector('.level');
        if (progressBar) {
            progressBar.style.width = progress;
        }
    });

    function playSoundHover2() {
    const audio = document.getElementById("hover-sound2");
    audio.volume = 0.2; // Set the volume level (0.0 to 1.0)
    audio.play();
    }

    function playSoundHover() {
        const audio = document.getElementById("hover-sound");
        audio.volume = 0.2; // Set the volume level (0.0 to 1.0)
        audio.play();
    }

    function playSoundButton(event) {
    event.preventDefault(); // Prevent immediate redirection
    const sound = document.getElementById("button-sound");
    sound.currentTime = 0.5;
    sound.play();
    
}