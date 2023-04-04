// * Напиши таймер зворотнього відліку до Нового Року, який можна зупиняти при кліку на кнопку Stop


// 1) Отримуємо посилання на елементи з якими будемо працювати.
const refs = {
    timer: document.getElementById("timer"),
    stopBtn: document.getElementById("stopBtn"),
    startBtn: document.getElementById("startBtn"),
};

// 2) Створюємо дату наступного Нового Року до якого будемо рахувати час.
// 3) Отримати поточну дату
// 4) Отримати різницю. Від дати Нового Року відняти поточну дату.
// таким чином ми отримаємо кількість мілісекунд яка залишається до НР.
// 5) З нашої різниці витягнути дні, години, хвилини і секунди.
// 6) Показати результат на екрані
// 7) запустити сет таймаут, який буде оновлювати час кожну секунду.

const countDownDate = new Date(`Jan 1, ${new Date().getFullYear() +1}`);
console.log('countDownDate:', countDownDate);
console.log(countDownDate); 
const day = new Date();
console.log(new Date());