// * Напиши таймер зворотнього відліку до Нового Року, який можна зупиняти при кліку на кнопку Stop


// 1) Отримуємо посилання на елементи з якими будемо працювати.
// const refs = {
//     timer: document.getElementById("timer"),
//     stopBtn: document.getElementById("stopBtn"),
//     startBtn: document.getElementById("startBtn"),
// };

// // 2) Створюємо дату наступного Нового Року до якого будемо рахувати час.
// const countDownDate = new Date(`Jan 1, ${new Date().getFullYear() +1}`);

// вішаємо слухача подій на кнопку STOP
// refs.stopBtn.addEventListener('click', stopTimer);
// refs.startBtn.addEventListener('click', startTimer);

// // 7) запустити сет таймаут, який буде оновлювати час кожну секунду.
// let timerId = setInterval(countDownTimeToNY, 1000);

// function countDownTimeToNY () {
//     // 3) Отримати поточну дату
//     const now = new Date().getTime();

//     // 4) Отримати різницю. Від дати Нового Року відняти поточну дату.
//     // таким чином ми отримаємо кількість мілісекунд яка залишається до НР.
//     const diff = countDownDate - now;
    
//     // 5) З нашої різниці витягнути дні, години, хвилини і секунди.
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
//     const minutes = Math.floor(diff / (1000 * 60) % 60);
//     const seconds = Math.floor(diff / (1000) % 60);

//     // 6) Показати результат на екрані
//     refs.timer.textContent = `${days} days ${addZerro(hours)} hours ${addZerro(minutes)} minutes ${addZerro(seconds)} seconds`;
// };

// // Функція яка зупиняє таймер
// function stopTimer () {
//     clearInterval(timerId);
//     refs.stopBtn.disabled = true;
//     refs.startBtn.disabled = false;
// }

// // Функція яка відновлює роюоту таймера
// function startTimer() {
//     timerId = setInterval(countDownTimeToNY, 1000);
//     refs.stopBtn.disabled = false;
//     refs.startBtn.disabled = true;
// }

// // створюємо функцію яка додає нулі.
// function addZerro (number) {
//     return String(number).padStart(2, '0');
// }

// countDownTimeToNY();


// !=========================== One-BUTTON ==========================================!

// Створюємо об'єкт для керування однією кнопкою, для налаштування наших кнопок
const BUTTON_UI = {
    activBtn : "stop",

    start: {
        text: "Start",
        class: "start",
    },

    stop: {
        text: "Stop",
        class: "stop",
    },
}

const refs = {
    timer: document.getElementById("timer"),
    btn: document.getElementById("btn"),
};

// 2) Створюємо дату наступного Нового Року до якого будемо рахувати час.
const countDownDate = new Date(`Jan 1, ${new Date().getFullYear() +1}`);


refs.btn.addEventListener('click', handleButtonClick);

// 7) запустити сет таймаут, який буде оновлювати час кожну секунду.
let timerId = setInterval(countDownTimeToNY, 1000);

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
    refs.timer.textContent = `${days} days ${addZerro(hours)} hours ${addZerro(minutes)} minutes ${addZerro(seconds)} seconds`;
};


// Функція яка зупиняє таймер
function stopTimer () {
    clearInterval(timerId);
    
}

// Функція яка відновлює роюоту таймера
function startTimer() {
    timerId = setInterval(countDownTimeToNY, 1000);
    
}

// створюємо функцію яка додає нулі.
function addZerro (number) {
    return String(number).padStart(2, '0');
}


// Створюємо функцію для керування кнопкою
function handleButtonClick () {
    const { 
        activBtn, 
        stop: { class: stopClass, text: stopText },
        start: { class: startClass, text: startText }, 
    } = BUTTON_UI;

    if (activBtn === stopClass) {
        console.log("Stop");
        stopTimer();
        BUTTON_UI.activBtn = startClass;
        refs.btn.textContent = startText;
        refs.btn.classList.add(startClass);
        refs.btn.classList.remove(stopClass);
    } else {
        console.log("Start");
        startTimer();
        BUTTON_UI.activBtn = stopClass;
        refs.btn.textContent = stopText;
        refs.btn.classList.add(stopClass);
        refs.btn.classList.remove(startClass);
    }
}

countDownTimeToNY();