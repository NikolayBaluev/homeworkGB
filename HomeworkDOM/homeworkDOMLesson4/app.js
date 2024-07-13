/* Задание 1 (тайминг 15 минут)
1 В html создать кнопку button
2 После загрузки страницы вывести в консоль текст
“страница загрузилась”
3 Добавить событие onclick которое выводит в
консоль текст “событие onclick”
4 Добавить событие addEventListener которое
выводит в консоль текст “событие
addEventListener”*/

// const ElButton = document.createElement("button");
// ElButton.className = "ElButton";
// ElButton.textContent = "Нажми";
// document.body.appendChild(ElButton);
// window.onload = () => {
//   console.log("страница загрузилась");
// };
// ElButton.onclick = () => console.log("событие onclick");
// ElButton.addEventListener("click", (event) => {
//   console.log("событие addEventListener");
// });

/*Задание 2 (тайминг 30 минут)
1 Создать в html три кнопки button с нумерацией (1, 2, 3
соответственно)
2 Добавить клик на кнопку , чтобы в консоль выводилась
именно та кнопка на которую мы нажали
3 Добавить кнопку button с текстом 4, которая считает
сколько раз на нее нажали и количество нажатий на эту
кнопку выводит в консоль
4 Создать кнопку button с текстом 5, При клике на которую,
меняется текст данной кнопки на “Вы нажали на эту
кнопку” */
    // const bodyEl = document.body;
// const ElButton1 = document.createElement("button");
// for (let i = 1; i < 4; i++) {
//     bodyEl.insertAdjacentHTML(
//         'beforeend',
//         `<button class="ElButton${i}">Кнопка${i}</button>`)
// }

// const buttons = document.querySelectorAll("button");
// // buttons.forEach((el) => (el.onclick = () => console.log(el)));
// buttons.forEach((el) =>
//     el.addEventListener("click", (ev) => console.log(ev.target))
// );

// const button4 = document.createElement("button")
// button4.textContent = 'Кнопка 4'
// bodyEl.appendChild(button4)
// let count = 0
// button4.addEventListener('click', () => {
//     count++
//     console.log(count);
// })

// const button5 = document.createElement("button")
// button5.textContent = 'Кнопка 5'
// bodyEl.appendChild(button5)
// // button5.onclick = () => (button5.textContent = "Вы нажали на эту кнопку"); 
// button5.addEventListener('click', () => {
//     button5.textContent = "Вы нажали на эту кнопку";
// })

/*
Задание 3 (тайминг 30 минут)
1 Создать кнопку, которая добавляем заголовок h1 с текстом,
“Новый заголовок, данный элемент нужно расположить
после кнопки
2 Создать вторую кнопку, которая будет удалять созданный
заголовок h1
3 Создать третью кнопку, при наведении на которую в
консоль будет выводиться текст “вы навели на данную
кнопку” , как только вы убираем курсор мыши с кнопки, в
консоли должен появиться текст “Наведения на кнопку
больше нет”
 */
////// create
// const bodyEl1 = document.body;
// const button5 = document.createElement("button")

// button5.textContent = 'создать h1'

// bodyEl1.insertAdjacentElement('beforeend', button5)

// let count1 = 0
// button5.addEventListener('click', () => {
//     button5.insertAdjacentHTML('afterend',
//     `<h1 class="JsH1">Новый заголовок ${count1++}</h1>`)
// })

// /////// remove

// const button6 = document.createElement("button")

// button6.textContent = 'удалить h1'

// bodyEl1.insertAdjacentElement('beforeend', button6)

// button6.addEventListener('click', () => {
//     bodyEl1.querySelector('.JsH1').remove();
//     count1--
// })

// /// кнопка 3


// const button7 = document.createElement("button")

// button7.textContent = 'событие'

// bodyEl1.insertAdjacentElement('beforeend', button7)


// button7.addEventListener('mouseover', ()=>{
//     console.log('вы навели на данную кнопку');
// })

// button7.addEventListener('mouseout', ()=>{
//     console.log('Наведения на кнопку больше нет');
// })

/*Задание 4 (тайминг 30 минут)
1 Создать в html список состоящий из 3-х произвольных
элементов li
2 Нужно создать кнопку которая будет добавлять элементы
списка с текстом “новый элемент списка”
3 Создать кнопку, которая будет удалять первый элемент из
созданного списка
4 Создать кнопку, при клике на которую ей добавляется класс
“click” */

// const bodyEl2 = document.body;
// const ulEl = document.createElement('ul');

// bodyEl2.appendChild(ulEl);

// for (let i = 1; i < 4; i++) {
//     const liEl = document.createElement('li')
//     liEl.textContent = `Элемент ${i}`
//     ulEl.append(liEl)
// }

// const button8 = document.createElement('button')


// button8.textContent = 'new elem'
// bodyEl2.after(button8)

// button8.addEventListener('click', () => {
//         ulEl.insertAdjacentHTML('beforeend', '<li>новый элемент списка</li>')
//     })

// //// удаление элемента списка

// const button9 = document.createElement('button')
// button9.textContent = 'Удалить первый li'

// button8.after(button9)

// button9.addEventListener('click', () => {
//     // ulEl.querySelector('li').remove()
//     ulEl.firstChild.remove()
// })

// //// создание класса

// const button10 = document.createElement('button')
// button10.textContent = 'добавить class'

// button9.after(button10)

// button10.addEventListener('click', () => {
//     button10.classList.add('class')
// })

/*Задание 4 (тайминг 20 минут)
1 Дан тег <div class="content"></div>
2 Создайте с помощью javascript новый элемент button
3 Добавьте текст для кнопки “Отправить”
4 При клике на данную кнопку необходимо чтобы текст
поменялся на “Текст отправлен” */
// const bodyEl2 = document.body;
// const newContainer = document.createElement('div');
// newContainer.className = 'container';

// const button11 = document.createElement('button');
// button11.textContent = 'Отправить'

// bodyEl2.appendChild(newContainer);
// newContainer.appendChild(button11);

// button11.addEventListener('click', () => button11.textContent = 'Текст отправлен')
