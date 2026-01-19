document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.getElementById('lang-switcher');

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.title = translations[lang].title;

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    };

    langSwitcher.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        setLanguage(newLang);
    });

    // Set initial language to English
    setLanguage('en');
});
