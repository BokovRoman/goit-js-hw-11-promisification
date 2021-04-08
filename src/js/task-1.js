// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" 
// через ms миллисекунд.Значением исполнившегося промиса должно быть то кол -во миллисекунд 
// которое передали во время вызова функции delay.


// 1 способ с задержкой
// const delay = ms => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(ms);
//         },ms)
//     });
// };

// 2 способ без задержки
// const delay = ms => {
//     return new Promise((resolve) => {
//         resolve(ms);
//     });
// };


// 3 способ
const delay = ms => {
    return Promise.resolve(ms);
    
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms