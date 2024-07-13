/*Перед просмотром семинара изучить
https://learn.javascript.ru/error-handling
https://learn.javascript.ru/async
https://learn.javascript.ru/network */

//seminar

/*
1. Создайте функцию delayedMessage(message, delay),
которая принимает аргументы message (строка) и delay
(число). Функция должна выводить заданное сообщение в
консоль через указанную задержку.
2. Вызовите функцию delayedMessage() три раза с разными
сообщениями и задержками.
3. После вызова всех функций delayedMessage(), добавьте
сообщение вида "Конец программы" с помощью
console.log().
 
delayedMessage("Сообщение 1", 2000);
delayedMessage("Сообщение 2", 1000);
delayedMessage("Сообщение 3", 3000);
 
Ожидаемый результат:
"Сообщение 2"
"Сообщение 1"
"Сообщение 3"
"Конец программы" */

// let count = 0;

// function delayedMessage(message, delay) {
//     setTimeout(() => {
//         console.log(message)
//         count--
//         if (count === 0) {
//             console.log('Конец программы')
//         }
//     }, delay);
//     count++;
// }

// delayedMessage("Сообщение 4", 2000);
// delayedMessage("Сообщение 1", 1000);
// delayedMessage("Сообщение 5", 3000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 6", 3000);
// delayedMessage("Сообщение 3", 1000);
// delayedMessage("Сообщение 7", 3000);
    
/*У вас есть список задач, которые необходимо выполнить в определенном 
порядке. Каждая задача должна быть выполнена через определенный 
промежуток времени, заданный в миллисекундах. Вам необходимо написать
функцию, которая принимает список задач и интервал времени, а затем
выполняет каждую задачу через определенный промежуток времени. 
Нельзя использовать setTimeout, выставляя сразу все задачи в очередь.
  */
// const tasks = [
//     {name: 'task1', time: 1000}, // выполнится через 1 сек.
//     {name: 'task2', time: 2000}, // выполнится через 3 сек.
//     {name: 'task3', time: 4000}, // выполнится через 7 сек.
//   ];

// function completeTask(task) {
//     const {name, time} = task[0];
    
//     setTimeout(() => {
//         console.log(name);
//         if (task.length > 1) {
//             completeTask(task.slice(1));
//         }
//     }, time)
// }

// completeTask(tasks)

/*Напишите программу, которая загружает данные с сервера с
использованием объекта XMLHttpRequest и отображает полученную
информацию в консоли.
1. Создайте функцию loadData(url), которая принимает аргумент url
(строка) - адрес сервера для загрузки данных.
2. Внутри функции loadData() создайте объект XMLHttpRequest с
помощью new XMLHttpRequest().
3. Зарегистрируйте обработчик события onreadystatechange, который
будет вызываться при изменении состояния запроса. Проверьте,
если readyState равен 4 (успешно выполнен запрос) и status равен
200 (успешный статус ответа сервера), то выведите полученные
данные в консоль с помощью console.log(xhr.responseText).
Задание 2 продолжение
4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
запроса, url - адрес сервера, true - асинхронный режим запроса.
5. Отправьте запрос на сервер с помощью xhr.send().
6. Выведите в консоль слово "привет", после вызова функции.
Дополнительно:
а) Откройте запрос с помощью xhr.open("GET", url, false), где "GET" - тип
запроса, url - адрес сервера, false - асинхронный режим запроса. Посмотрите, 
что изменится, объясните почему. Какой вариант чаще используется/лучше?
б) Переписать на fetch с обработкой ошибок.

API: https://jsonplaceholder.typicode.com/users */

// const urlApi = 'https://jsonplaceholder.typicode.com/users';

// function loadData(url) {
//     const xhr = new XMLHttpRequest();

//     // xhr.onreadystatechange = () => {
//     //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//     //         console.log(xhr.responseText)
//     //     }
//     // }

//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             console.log(xhr.responseText)
//         }
//     }

//     xhr.open("GET", url);

//     xhr.send();
// }

// loadData(urlApi)
// console.log('Hello')

// async function loadData(url) { // ИДЕАЛ
//     const response = await fetch(url);

//     if (!response.ok) {
//         throw new Error('Сервер ответил ошибкой')
//     }

//     return response.json();;
// }

// function loadData(url) {
//     return fetch(url).then((response) =>{
//         if (!response.ok) {
//             throw new Error('Сервер ответил ошибкой')
//         }
//         return response.json()
//     })
// }

// loadData(urlApi).then((data) => {
//     console.log(data)
// }).catch((error) => {
//     alert(`Ошибка: ${error.message}`)
// })

/*
Необходимо получить список пользователей с сервера, отсортировать их
в алфавитном порядке и вывести в тег ul (его необходимо создать в html) 
на странице данный список пользователей.
API: https://jsonplaceholder.typicode.com/users */

// const urlApi = 'https://jsonplaceholder.typicode.com/users'

// async function loadData(url) { 
//         const response = await fetch(url);
    
//         if (!response.ok) {
//             throw new Error('Сервер ответил ошибкой')
//         }
    
//         return response.json();;
//     }

// const ulElem = document.createElement('ul')
// document.body.appendChild(ulElem)

// loadData(urlApi).then((data) => {
//     const dataSorted = data.toSorted((a,b) => a.name.localeCompare(b.name))

//     dataSorted.forEach((element) => {
//     ulElem.insertAdjacentHTML('beforeend', `
//         <li>
//         ${element.name}
//         </li>
//         `)
//     })
// }).catch((error) => {
//     alert(`Ошибка: ${error.message}`)
// })
