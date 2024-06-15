// const btnEl = document.querySelector('.btn');

// const menuEl = document.querySelector('.menu');


// btnEl.addEventListener('click', ev => {
//     ev.stopPropagation();

//     menuEl.classList.toggle('hidden');
// })

// menuEl.addEventListener('click', ev => {
//     ev.stopPropagation();
// })

// document.addEventListener('click', ev => {

//     if (!menuEl.classList.contains('hidden')) {
//         menuEl.classList.add('hidden');
//     }
// })

/*
Дан макет
https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/sh
op-(Copy)-(Copy)?node-id=73%3A140 в котором
представлены товары на странице корзины
2. Необходимо создать файл data.js в котором создать
переменную dataProducts в которую присвоить JSON
данные по товарам.
3. Вам нужно самостоятельно создать JSON данные (не
забыть про кавычки для ключей и значений
4. Добавить все данные из макета, чтобы в дальнейшим по
ним мы смогли создать вёрстку
 */

// const url1 = "/data.json";

// async function fetchData(url) {
//     try {
//         const responce = await fetch(url);
//         const data = await responce.json();
//         return data;
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// document.addEventListener("DOMContentLoaded", async () => {
//     const data = await fetchData(url1);

//     const containerEl = document.querySelector('.container')

    
//     data.forEach(el => {

//         containerEl.insertAdjacentHTML("beforeend", `
//             <div class="product-card">
//         <img class="product-img" src="${el.img}" alt="${el.title}">
//         <div class="product-info">
//             <h2 class="product-title">${el.title}</h2>
//             <p class="product-price">Price: $<span class="product-price-value">${el.price}</span></p>
//             <p class="product-color">Color: <span class="product-color-value">${el.color}</span></p>
//             <p class="product-size">Size: 
//             <span class="product-size-value">${el.size}</span>
//             <p class="product-quantity">Quantity:
//             <input class="product-input" type="number" value="${el.quantity}" min="1"></p>
//         </div>
//         <div>
//             <button class="close-btn">×</button>
//         </div>
//     </div>
//             `)
    
//     });

//     containerEl.addEventListener("click", ev => {

//         if (ev.target.closest(".close-btn")) {
//             const item = ev.target.closest(".product-card");
//             if (item) {
//                 item.remove()
//             }
//         }
//     })

// })


const arr = [1,2,4,5,6,7,'a', 'b', 'c']

// console.log(arr.reduce((a,b)=> a+b));

// console.log(arr.filter((a)=> a !== 2));

console.log(arr.join("").replace(/[^a-z]/g, "").split(''));
/*
Задание 2 (тайминг 30 минут)
1. Создаём вёрстку по данному макету
2. Добавляем все теги и стили для них, чтобы получилось
один в один как в макете
3. Пока данные для шаблонизации использовать не нужно
*/


/*
Задание 3 (тайминг 40 минут)
1. Создаём блоки с помощью javascript для этого используем данные
из dataProducts
2. Формируем товары на основе нашей вёрстки
3. Проверяем, как будет выглядеть сайт, если в json данных, добавить
еще один объект с товаром (в вёрстке должен появиться еще один
блок, на основе этих данных)
 */