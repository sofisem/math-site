// Функция для показа красивых уведомлений
function showToast(message, type = 'info') {
    // Создаем контейнер, если его еще нет
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    // Выбираем иконку и класс в зависимости от типа
    let icon = 'ℹ️';
    let typeClass = '';
    
    if (type === 'error') {
        icon = '🔒';
        typeClass = 'toast--error';
    } else if (type === 'success') {
        icon = '✅';
        typeClass = 'toast--success';
    } else if (type === 'warning') {
        icon = '⚠️';
        typeClass = 'toast--warning';
    }

    // Создаем само уведомление
    const toast = document.createElement('div');
    toast.className = `toast ${typeClass}`;
    toast.innerHTML = `
        <span class="toast__icon">${icon}</span>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // Анимация появления (небольшая задержка, чтобы браузер отрисовал элемент)
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Автоматическое скрытие через 4 секунды
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        
        // Удаляем из DOM через 400мс (после завершения анимации)
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 400);
    }, 4000);
}