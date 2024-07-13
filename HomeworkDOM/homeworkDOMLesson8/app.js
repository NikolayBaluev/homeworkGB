// const ulEl = document.querySelector('ul')
// ulEl.addEventListener('click', ev => {
//     ev.target.style.color = 'red'
//     ev.currentTarget.style.backgroundColor = 'blue'
// })


/*Задание 1 (тайминг 20 минут)
1 В html создать элемент checkbox и текст рядом с
ним “Согласен с условиями”
2 Добавить кнопку отправить
3 При клике на кнопку отправить нужно проверять
выбран ли активным элемент checkbox
4 Если элемент не выбран, добавить текст под
чекбоксом “Необходимо согласиться с условиями” */

// document.body.insertAdjacentHTML('beforeend', 
// `<form class="form">
// <input type="checkbox">
// <label>Согласен с условиями</label>
// <br>
// <button type = "submit">Отправить</button>
// </form>`);

// const checkboxEl = document.querySelector('input[type="checkbox"]');
// const buttonEl = document.querySelector('button');
// const formEl = document.querySelector('form')

// let errorMessage = false;
// buttonEl.addEventListener('click', event => {
//     event.preventDefault();
//     if (!checkboxEl.checked && !errorMessage) {
//         const pElem = document.createElement('p')
//         pElem.textContent = 'Необходимо согласиться с условиями'
//         buttonEl.insertAdjacentElement('afterend', pElem)
//         errorMessage = true
//     } else if (checkboxEl.checked){
//         formEl.submit()
//     }
// })


/*Задание 1 (тайминг 25 минут)
1 В html создать 2 элемента радио кнопки (input
type=”radio”) и текст “Чай”, “Кофе”
соответственно
2 Кнопка отправить
3 Если выбран чай, необходимо вывести сообщение
“Чай закончился”
4 Если выбран кофе, необходимо вывести
соообщение “кофе закончился” */

    // document.body.insertAdjacentHTML('beforeend', `
    // <form class="form">
    // <label><input id="tea" type="radio" name="chooseDrink">Чай</label>
    // <label><input  id="coffee"type="radio" name="chooseDrink">Кофе</label>
    // <br>
    // <button type = "submit">Отправить</button>
    // <p></p>
    // </form>
    // `)
    // const form = document.querySelector('.form')
    // const buttonEl1 = form.querySelector('button')
    // const inputElem = form.querySelectorAll('input')
    // const ErrorElem1 = form.querySelector('p')

    // buttonEl1.addEventListener('click', ev => {
    //     ev.preventDefault();

    //     inputElem.forEach(el => {
    //         if (el.checked) {
    //             el.id === 'tea' 
    //             ? ErrorElem1.textContent = 'чай закончился'
    //             : el.id === 'coffee' 
    //             ? ErrorElem1.textContent = 'кофе закончился'
    //             : ErrorElem1
    //         }
    //     })
    // })

/*
Задание 3 (тайминг 20 минут)
1 Создать поле ввода (пароль)
2 Кнопка отправить
3 Если пользователь вводит текст “пароль” то поле ввода
должно быть подсвечено зеленым цветом
4 Если пароль неверный, у поля ввода появляется красная
обводка и текст “пароль неверный”
 */
// document.body.insertAdjacentHTML('beforeend', `
// <form class="form">
// <label>Введите пароль:
// <br>
// <input id="passwordField" type="passoword" placeholder ="пароль"></label>
// <br>
// <br>
// <button type = "submit" >Отправить</button>
// <p></p>
// </form>
// `)

// const inputPassElem = document.querySelector('#passwordField')
// const buttonEl = document.querySelector('button')

// buttonEl.addEventListener('click', ev => {
//     ev.preventDefault();
//     if (inputPassElem.value === 'пароль') {
//         inputPassElem.style.border = '3px solid green'
//     } else {
//         inputPassElem.style.border = '3px solid red'
//         inputPassElem.placeholder = 'пароль не верный'
//         inputPassElem.value = ""
//     }
// })
/*
Задание 4 (тайминг 20 минут)
1 Создать поле ввода и под ним заголовок h1 с текстом
“Заголовок”
2 При вводе текста в поле ввода необходимо чтобы текст
внутри заголовка менятся на введенный в поле ввода
 */
// document.body.insertAdjacentHTML('beforeend', `
// <form class="form">

// <input type="text"></label>
// <br>
// <h1>Заголовок</h1>
// </form>
// `)

//     const inputEl = document.querySelector('input')
//     const h1Element = document.querySelector('h1')

//     inputEl.addEventListener('input', ev => {
//         h1Element.textContent = inputEl.value
//     })