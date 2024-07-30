/*Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

— На каждой странице реализован счетчик просмотров
— Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
— Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
— Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.
Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

— На каждой странице реализован счетчик просмотров
— Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
— Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
— Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер. */
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

let counts = {
  home: 0,
  about: 0,
};

const pathfiles = path.join(__dirname, "counts.json");
const dataJson = fs.readFileSync(pathfiles, "utf-8");
counts = JSON.parse(dataJson);

app.get("/", function (req, res) {
  counts.home += 1;
  fs.writeFileSync(pathfiles, JSON.stringify(counts, null, 2));
  res.send(`
      <h1>Корневая страница</h1> 
      <p>Просмотров : ${counts.home}</p>
      <a href = '/about'>ссылка на страницу /about </a>
    `);
});

app.get("/about", function (req, res) {
  counts.about += 1;
  fs.writeFileSync(pathfiles, JSON.stringify(counts, null, 2));
  res.send(`
      <h1>Страница about</h1>
      <p>Просмотров : ${counts.about}</p>
      <a href = '/'>ссылка на страницу / </a>
      `);
});

app.use((req, res) => {
  res.status(404).send("<h1>Страница не найдена!</h1>");
});

app.listen(3001, () => {
  console.log(`Сервер запущен на порту ${3001}`);
});
// в процессе проверок возникли проблемы с портом 3000, убить его не получилось.
