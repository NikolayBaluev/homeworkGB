// <div id="block">
// <p>1</p>
// <p>2</p>
// </div>
// 1 Получите ссылку на первый абзац из дива с id, равным block, выведите его в
// консоль 2 Получите ссылку на первый абзац с классом www. и вывести его в
// консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p>

// const parag = document.querySelector("p")
// const parag2 = document.querySelectorAll('.www')[0]
// console.log(parag2);

/*Дан тег <a class="link" href="#">link text html</a>
a. Вам необходимо поменять текст внутри ссылки на “link
text js”
b. Заменить href, на значение
https://developer.mozilla.org/ru/
2 Дан тег <img class="photo" src="" alt="">
a. Вам необходимо с помощью js поменять значение src на
любое изображение из интернета*/
// const linkText = document.querySelector('.link')
// linkText.textContent = 'link text js'
// linkText.href  = 'https://developer.mozilla.org/ru/'
// console.log(linkText);

// const photo = document.querySelector(".photo")
// photo.src = 'https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-oboi-s-nadpisyu-s-dnem-rozhdeniya-19.jpg'



// Дан тег <div class="content"></div>
// 2 Создайте новый элемент p
// 3 Добавьте в него текст “Новый текстовый элемент”
// 4 Добавьте созданный элемент внутри <div
// class="content"></div>
// 5 Удалите добавленный узел

// const p3 = document.createElement("p");
// p3.textContent = "Новый текстовый элемент"
// const contentp3 = document.querySelector('.content')
// contentp3.appendChild(p3)
// contentp3.removeChild(p3)

// Создать элемент button, добавить в блок <div
// class="content"></div>
// 2 При клике на который в консоль выводится сколько раз
// пользователь нажал на данную кнопку

// const contentp4 = document.querySelector('.content')
// const p4 = document.createElement('button')
// p4.textContent = 'кликни'
// contentp4.appendChild(p4)
// let count = 0
// p4.onclick = () => {
//     count++
//     console.log(`Нажата ${count} раз`);
// }

// 1 Дан тег <div class="content"></div>
// 2 Создайте с помощью javascript новый элемент button
// 3 Добавьте текст для кнопки “Отправить”
// 4 При клике на данную кнопку необходимо чтобы текст
// поменялся на “Текст отправлен”
// const contentp5 = document.querySelector('.content')
// const b5 = document.createElement('button')
// contentp5.appendChild(b5)
// b5.textContent = "Отправить"
// b5.addEventListener('click', () => {
//     b5.textContent = "Текст отправлен"
// })
//----------------------------------------------------------
// DZ
/*
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a>

<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title" data-number="100">Card title</h5>
<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
<p class="card-text" data-number="50">
Some quick example text to build on the card title and make up the bulk of the card's
content.
</p>
<a href="#" id="super_link" class="card-link">Card link</a>
<a href="#" class="card-link" data-number="50">Another link</a>
</div>
</div>
*/
//1 Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// const getEl  = document.getElementById('super_link')
// console.log(getEl);
//2 нутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// const clText = document.querySelectorAll('.card-link')
// for (let i = 0; i < clText.length; i++) {
//     clText[i].textContent = "Ссылка"
// }
// 3 Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// const cardCl = document.querySelectorAll('.card-body .card-link');
// console.log(cardCl);
//4 Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// const element = document.querySelector('[data-number="50"]');
// if (element) {
//     console.log(element);
// } else {
//     console.log("Элемент с атрибутом data-number=50 не найден.");
// }
//5 Выведите содержимое тега title в консоль.
    // const tagTitle = document.querySelector("title").textContent
    // console.log(tagTitle);
//6 Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
    // const CardTitle = document.querySelector('.card-title').parentElement
    // console.log(CardTitle);
//7 Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
    // const creatElP = document.createElement('p')
    // creatElP.textContent = 'Привет'
    // const ElClassCard = document.querySelector(".card")
    // ElClassCard ?
    //     ElClassCard.insertBefore(creatElP, ElClassCard.firstChild)
    //             :console.error("Элемент с классом 'card' не найден.");
//8 Удалите тег h6 на странице.
    // const tagH6 = document.querySelector('h6')
    // tagH6.remove()
    



