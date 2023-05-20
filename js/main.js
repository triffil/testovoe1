const activityPage = document.querySelector('.activityPage');
const mapSection = document.querySelector('.mapPage');
const timerSection = document.querySelector('.timerPage');




// Обработчик изменения хеша в URL
function handleHashChange() {
    const hash = window.location.hash; // Получаем текущий хеш URL
    renderPage(hash); // Отображаем соответствующую страницу
}

// Функция для отображения содержимого страницы
function renderPage(hash) {
    if (hash === '#/activity') {
        activityPage.classList.remove('nonvisible');
        mapSection.classList.add('nonvisible');
        timerSection.classList.add('nonvisible')
    } else if (hash === '#/maps') {
        activityPage.classList.add('nonvisible');
        mapSection.classList.remove('nonvisible');
        timerSection.classList.add('nonvisible')
    } else if (hash === '#/time') {
        activityPage.classList.add('nonvisible');
        mapSection.classList.add('nonvisible');
        timerSection.classList.remove('nonvisible')
    }
}

// Регистрируем обработчик изменения хеша в URL
window.addEventListener('hashchange', handleHashChange);

// Отображаем первую страницу при загрузке приложения
renderPage(window.location.hash);