/*
Задание 1. Получение данных о пользователе.

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch 
для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который 
разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен 
с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), 
функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. 
Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/
*/

const API = "https://reqres.in/api/users?page=2";

async function getUserData(ID) {
  try {
    const response = await fetch(API);

    if (!response.ok) {
      throw new Error("Сервер ответил ошибкой");
    }

    const data = await response.json();

    for (let user of data.data) {
      if (user.id === ID) {
        return user;
      }
    }
  } catch (err) {
    console.error(err.message);
  }
}
function requestUser(userID) {
  getUserData(userID).then((user) => {
    if (user) {
      console.log(user);
      getVisualResult(user);
    } else {
      console.error("Пользователь c таким id не найден");
    }
  });
}
function getVisualResult(obj) {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
        <div class = "container">
        <p> id пользователя : <strong>${obj.id}</strongp></p>
        <img class ='img_user' src='${obj.avatar}'/>
        <p>${obj.last_name + " " + obj.first_name}</p>
        <p>${obj.email}</p>
        </div>
        `
  );

  const userElemIMG = document.querySelector(".img_user");
  const userContainer = document.querySelector(".container");
  userElemIMG.style.borderRadius = "50%";
  userContainer.style.display = "flex";
  userContainer.style.flexDirection = "column";
  userContainer.style.alignItems = "center";
  userContainer.style.justifyContent = "center";
  userContainer.style.textAlign = "center";
  userContainer.style.height = "100%";
  document.body.style.height = "100vh";
  document.body.style.margin = "0";
  document.body.style.backgroundColor = "#FAEBD7";
}

// ID пользователя
requestUser(10);


/*
Задание 2. Отправка данных на сервер.

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch 
для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные 
успешно отправлены, или отклоняется в случае ошибки.

*Подсказка *

// Пример использования функции
const user = {
  "name": "John Doe",
  "job": "unknown"
};

saveUserData(user)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });
saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет 
POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о 
пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. 
Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.
Работа должна быть выполнена с API: https://reqres.in/ 
*/
// const URLApi = "https://reqres.in/api/users";

// const user = {
//   name: "John Doe",
//   job: "unknown",
// };

// async function saveUserData(user) {
//   try {
//     const response = await fetch(URLApi, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(user),
//     });

//     if (!response.ok) {
//       throw new Error("Сервер ответил ошибкой");
//     }

//     const data = await response.json();

//     return data;
//   } catch (err) {
//     throw new Error(err);
//   }
// }

// saveUserData(user)
//   .then((data) => {
//     console.log(`User data saved successfully : ${JSON.stringify(data, 0, 1)}`);
//   })
//   .catch((error) => {
//     console.error(`Ошибка : ${error.message}`);
//   });

/*Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).

Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. 
Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"
*/

// document.body.insertAdjacentHTML(
//   "beforeend",
//   `
//     <div class="container">
//         <button class = "btn" >Нажми для смены цвета</button>
//         <p class="text_content" id ="myElement"> HELLO WORLD</p>
//     </div>
// `
// );

// const elContainerText = document.querySelector(".container");
// const elText = document.querySelector(".text_content");
// const elbtn = document.querySelector(".btn");

// elContainerText.style.display = "flex";
// elContainerText.style.flexDirection = "column";
// elContainerText.style.alignItems = "center";
// elContainerText.style.justifyContent = "center";
// elContainerText.style.textAlign = "center";
// elContainerText.style.height = "100%";

// elText.style.fontSize = "40px";
// elText.style.fontWeight = "bold";

// elbtn.style.padding = "10px 20px";
// elbtn.style.border = "none";
// elbtn.style.borderRadius = "10px";
// elbtn.style.cursor = "pointer";

// document.body.style.height = "100vh";
// document.body.style.margin = "0";
// document.body.style.backgroundColor = "#F0FFF0";

// function changeStyleDelayed(myElement, time) {
//   const element = document.querySelector("#" + myElement);
//   setTimeout(() => {
//     const randomColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
//     element.style.color = randomColor;
//     elbtn.style.backgroundColor = randomColor;
//   }, time);
// }

// function getRandomRGB() {
//   return Math.floor(Math.random() * 256);
// }

// elbtn.addEventListener("click", () => {
//   changeStyleDelayed("myElement", 2000);
// });

