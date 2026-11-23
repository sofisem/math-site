// Скрипт для показа баннера с куки
document.addEventListener("DOMContentLoaded", () => {
    const isCookieAccepted = localStorage.getItem('sonches_cookie_accepted');

    if (!isCookieAccepted) {
        const cookieBanner = document.createElement('div');
        cookieBanner.className = 'cookie-banner';
        cookieBanner.innerHTML = `
            <div class="cookie-text">
                🍪 Мы используем <strong>файлы cookie</strong> и сервисы Google для сохранения твоего прогресса и корректной работы сайта. 
                Продолжая пользоваться платформой, ты соглашаешься с нашей 
                <a href="privacy.html" target="_blank">Политикой конфиденциальности</a>.
            </div>
            <div class="cookie-buttons">
                <button class="btn-cookie-accept">Принять</button>
            </div>
        `;

        document.body.appendChild(cookieBanner);

        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 500);

        const acceptBtn = cookieBanner.querySelector('.btn-cookie-accept');
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('sonches_cookie_accepted', 'true');
            cookieBanner.classList.remove('show');
            
            setTimeout(() => {
                if (cookieBanner.parentNode) {
                    cookieBanner.parentNode.removeChild(cookieBanner);
                }
            }, 500);
        });
    }
});

