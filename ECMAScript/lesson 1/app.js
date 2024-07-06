// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.
// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

//1.
// const arr = [1,7,5,9]
// console.log(Math.min(...arr))
// // Или 
// console.log(arr.sort((a,b) => a - b)[0])

//2.
// const counter = createCounter(1)

// function createCounter(arg) {
//     return {
//         increment : () => arg += 1,
//         decrement : () => arg-= 1
//     }
// }

// console.log(counter.decrement())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.decrement())
// console.log(counter.decrement())
// console.log(counter.decrement())

//3.
// function findElementByClass(rootEl, className) {
//     if (rootEl.classList && rootEl.classList.contains(className)) return rootEl;

//     for (let i = 0; i < rootEl.children.length; i++) {
//         const element = findElementByClass(rootEl.children[i], className);
//         if (element) return element;
//     }

//     return null;
// }

//     const rootElement = document.querySelector('#root');
//     const targetElement = findElementByClass(rootElement, 'my-class');
//     console.log(targetElement);
