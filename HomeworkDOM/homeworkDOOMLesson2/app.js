//Cеминар

/*1 Задание */
// const classBlock = document.querySelector('.block')
// const newClassInBlock = document.createElement('div')
// newClassInBlock.textContent = 'Элемент внутри'
// newClassInBlock.style.color = 'blue'
// newClassInBlock.style.border = '1px solid black'
// newClassInBlock.style.padding = '16px'
// newClassInBlock.style.backgroundColor = "orange"
// newClassInBlock.setAttribute('class', 'item')
// classBlock.appendChild(newClassInBlock)

/* 2 задание*/
// const classText = document.querySelector('.text')
// console.log(classText.previousElementSibling);
// console.log(classText.parentElement);
// console.log(classText.parentElement.previousElementSibling);
// console.log(classText.parentElement.parentElement);

/* 3 задание */
// const h2ClassSubtitle = document.querySelector('.subtitle')
// const parentH2Class = document.querySelector('body')
// let parenth2 = h2ClassSubtitle.parentNode
// while(parenth2 !== parentH2Class){
//     console.log(parenth2);
//     parenth2 = parenth2.parentNode
// }

/* 4 задание */
// const input = document.querySelector('input')
// const btn = document.querySelector('.btn')
// let h2 = document.querySelector('h2')
// btn.addEventListener('click', (event) => {
//     event.preventDefault();

//     if (input.value.trim() === '') {
//         if(!h2){
//             h2 = document.createElement('h2')
//             input.parentElement.insertAdjacentElement('afterend', h2)
//         }
//         h2.textContent = 'Вы не заполнили поле ввода'
//         input.style.border = '3px solid red'
//     } else {
//         h2.remove()
//         input.style.border = '1px solid green'
//     }
// })
