
const skillLevels = document.querySelectorAll('.level');
    
window.addEventListener('scroll', () => {
    skillLevels.forEach(level => {
        const rect = level.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            level.style.width = level.getAttribute('style').split(':')[1];
        }
    });
});

    // List of inspirational quotes
const quotes = [
    "Grandes coisas nunca vêm da zona de conforto.",
    "A criatividade é a inteligência se divertindo.",
    "O único limite para o seu impacto é a sua imaginação e esforço.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A tecnologia move o mundo, mas a paixão move a tecnologia.",
    "Se você pode sonhar, você pode fazer.",
    "A persistência é o caminho do êxito.",
    "Acredite em si mesmo e todo o resto se encaixará.",
    "Se você não está com medo, você não está se arriscando, e se você não está se arriscando, então que merda você está fazendo?",
    "Quando a vida te decepciona, qual é a solução? Simplesmente continue a nadar.",
    "Sim, o passado pode machucar. Mas, do modo como vejo, você pode fugir dele ou aprender com ele.",
    "O necessário não é apenas para se suportar, menos ainda para se ocultar – todo o idealismo é mentira perante o necessário – mas para o amar",
    "A vida é uma peça de teatro que não permite ensaios. Por isso, cante, chore, dance, ria e viva intensamente, antes que a cortina se feche e a peça termine sem aplausos.",
    "Um relógio quebrado está certo duas vezes por dia.",
    "Se você for tentar, tente de verdade. Caso contrário nem comece. Isso pode significar perder tudo. E talvez até sua cabeça. Isso pode significar não comer nada por três ou quatro dias. Isso pode significar congelar num banco de praça. Isso pode significar escárnio, isolamento. Isolamento é uma dádiva. Todo o resto é teste da sua resistência. De quanto você realmente quer fazer isso. E você vai fazer isso, enfrentando rejeições das piores espécies. E isso será melhor do que qualquer coisa que você já imaginou. Se você for tentar, tente de verdade. Não há outro sentimento melhor que isso. Você estará sozinho com os deuses. E as noites vão arder em chamas. Você levará sua vida direto para a risada perfeita. Esta é a única briga boa que existe.",
    "Que importa o mal que te atormenta, se o sonho te contenta e pode realizar-se?",
    "Talvez esse seja o maior risco que podemos correr, sermos vistos como somos de verdade.",
    "Ninguém ia me entregar o meu futuro de mão beijada, alcançar o meu sonho dependia de mim, segurá-lo com força e torná-lo realidade.",
];

// Select a random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Display the random quote in the hero section
document.getElementById('quote').textContent = `"${randomQuote}"`;

// Map skill levels to progress percentages
const levelMapping = {
    "Básico": "30%",
    "Intermediário": "60%",
    "Avançado": "90%"
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