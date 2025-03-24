// Suaviza o scroll da página
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Play sound effect when "Dar uma olhada" is clicked
document.getElementById('intro-button').addEventListener('click', () => {
    console.log('Button clicked!'); // Debugging log
    const audio = new Audio('Sounds/transition.wav'); // Path to the sound file
    audio.play().catch(error => {
        console.error('Audio playback failed:', error); // Log playback errors
    });
});