let loader = document.querySelector('.loader');
function init(){
    let myMap = new ymaps.Map("map", {
        center: [56.73300256798184,37.16403099999994],
        zoom: 15
    });
    let placemark = new ymaps.Placemark([56.73300256798184,37.16403099999994], {}, {
    })
    myMap.geoObjects.add(placemark);
}
ymaps.ready(init);



/* Яндекс карта не загружена  — начальное значение */
let loaded_map = false;
/* Яндекс карта не загружена */
if (!loaded_map) {

    /* запуск setInterval каждые 500 милисекунд — ищем объект «Яндекс Карты» */
    let timerID = setInterval(function () {
        if (typeof ymaps !== "undefined") {
            loader.classList.add('nonvisible');
            loaded_map = true;
            /* останавливаем setInterval */
            clearInterval(timerID);
        }
        else {
            loader.classList.remove('nonvisible');
        }
    }, 500);
}



// Получаем элемент, в котором будет отображаться таймер
let timerElement = document.querySelector('.timer');
// Устанавливаем начальное время
let startTime = new Date().getTime();

// Обновляем таймер каждую секунду
setInterval(function() {
    // Получаем текущее время
    let currentTime = new Date().getTime();

    // Вычисляем разницу между текущим временем и начальным временем
    let timeDiff = currentTime - startTime;

    // Вычисляем минуты и секунды
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Отображаем время в формате "минуты:секунды" в элементе таймера
    timerElement.textContent = hours + ':' + minutes + ':' + seconds;
}, 1000);


