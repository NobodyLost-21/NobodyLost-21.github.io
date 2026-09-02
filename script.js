const translations = {
    de: {
        bio: "Willkommen auf meiner offiziellen Website! <br> Ich bin Nobody Lost und erstelle Animationen, Comics und arbeite aktuell an <strong>ERASED FRAGMENTS</strong>.",
        otherName: "Man kann mich auch <strong>False Chemistry</strong> nennen<br>False Chemistry ist ein weiterer Künstlername von mir.",
        morePlatforms: "Ich bin eine unabhängige Künstlerin, die auf mehreren Plattformen unterwegs ist.",
        channelsTitle: "Meine offiziellen Kanäle:",
        projectsTitle: "Meine jetzigen Projekte",
        projectsDesc: "du findest sie auf meinen Kanälen"
    },
    en: {
        bio: "Welcome to my official website! <br> I am Nobody Lost, creating animations, comics, and currently working on <strong>ERASED FRAGMENTS</strong>.",
        otherName: "You can also call me <strong>False Chemistry</strong>.<br>False Chemistry is another alias of mine.",
        morePlatforms: "I am an independent artist active on multiple social media platforms.",
        channelsTitle: "My Official Channels:",
        projectsTitle: "My Current Projects",
        projectsDesc: "you can find them on my channels"
    },
    es: {
        bio: "¡Bienvenido a mi sitio web oficial! <br> Soy Nobody Lost und creo animaciones, cómics y actualmente trabajo en <strong>ERASED FRAGMENTS</strong>.",
        otherName: "También me puedes llamar <strong>False Chemistry</strong>.<br>False Chemistry es otro alias mío.",
        morePlatforms: "Soy una artista independiente activa en varias plataformas.",
        channelsTitle: "Mis Canales Oficiales:",
        projectsTitle: "Mis Proyectos Actuales",
        projectsDesc: "puedes encontrarlos en mis canales"
    }
};

let currentLang = 'de'; 
const userLang = navigator.language || navigator.userLanguage;

if (userLang.startsWith('en')) currentLang = 'en';
else if (userLang.startsWith('es')) currentLang = 'es';

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-select-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);

    const buttons = document.querySelectorAll('.lang-select-btn');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedLang = event.target.getAttribute('data-lang');
            updateLanguage(selectedLang);
