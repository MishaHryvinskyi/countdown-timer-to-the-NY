// * Напиши таймер зворотнього відліку до Нового Року, який можна зупиняти при кліку на кнопку Stop


// 1) Отримуємо посилання на елементи з якими будемо працювати.
const refs = {
    timer: document.getElementById("timer"),
    stopBtn: document.getElementById("stopBtn"),
    startBtn: document.getElementById("startBtn"),
};





// 2) Створюємо дату наступного Нового Року до якого будемо рахувати час.
const countDownDate = new Date(`Jan 1, ${new Date().getFullYear() +1}`);

// 7) запустити сет таймаут, який буде оновлювати час кожну секунду.
setInterval(countDownTimeToNY, 1000);

function countDownTimeToNY () {
    // 3) Отримати поточну дату
    const now = new Date().getTime();

    // 4) Отримати різницю. Від дати Нового Року відняти поточну дату.
    // таким чином ми отримаємо кількість мілісекунд яка залишається до НР.
    const diff = countDownDate - now;
    
    // 5) З нашої різниці витягнути дні, години, хвилини і секунди.
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(diff / (1000 * 60) % 60);
    const seconds = Math.floor(diff / (1000) % 60);

    // 6) Показати результат на екрані
    refs.timer.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
};

countDownTimeToNY();