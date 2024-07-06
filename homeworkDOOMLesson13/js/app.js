import { iniTheme, switchTheme } from "./theme.js";
import { fetchRepos } from "./api.js";

const themeSwitcherBtn = document.querySelector('.themeSwitcherBtn');

const UserNameinputEL = document.querySelector('.themeNameInput'),
        searchUserNameBtn = document.querySelector('.searchUserName'),
        reposEl = document.querySelector('.repos'),
        favouriteEl = document.querySelector('.favourites'); 

const favoritesKey = 'favorites';

iniTheme();

themeSwitcherBtn.addEventListener('click', switchTheme);


searchUserNameBtn.addEventListener('click', async () => {
    const userName = UserNameinputEL.value
    if (userName) {
        try{
            const repos = await fetchRepos(userName);
        displayRepos(repos)
        } catch(error) {
            alert(error.message)
        }
    }
});

function displayRepos(repos) {
    reposEl.innerHTML = '';


    repos.forEach((repo) => {
        const isFavouriteRepos = isFavourited(repo.id);
        reposEl.insertAdjacentHTML('beforeend', `
        <div class = "repo-card">
            <h4>${repo.name}</h4>
            <button class = "favBtn ${isFavouriteRepos ? 
                'favourited' : ''}" data-repo-id="${repo.id}">
                ${isFavouriteRepos ? 
                'Уже в избранном' : 
                'Добавить в избранное'}</button>
        </div>
        `)})

    document.querySelectorAll('.favBtn').forEach((fav) => {
            fav.addEventListener('click', () =>{
                const repoId = fav.getAttribute('data-repo-id')
                const repo = repos.find((r) => r.id == repoId)
                toggleFavourite(repo)
                fav.classList.toggle('favourited')
                fav.textContent = fav.classList.contains('favourited') ? "Удалить из избранного" : "Не в избранном"
            })
        })

}

function toggleFavourite(repo) {
    const favourites = getFavourites();
    const index = favourites.findIndex((fav) => fav.id === repo.id)
    if (index === -1) {
        favourites.push(repo);
    } else {
        favourites.splice(index, 1)
    }
    localStorage.setItem(favoritesKey, JSON.stringify(favourites));
    displayFavourites()
}

function getFavourites () {
    return JSON.parse(localStorage.getItem(favoritesKey)) || [] ;
}

function isFavourited (repoId) {
    const favorites = getFavourites()
    return favorites.some((fav) => fav.id === repoId )
}

function displayFavourites () {
    favouriteEl.innerHTML = '';
    const favorites = getFavourites();

    favorites.forEach(el => {
        favouriteEl.insertAdjacentHTML('beforeend', `
            <li><a href =" ${el.html_url}" target ="_blank">${el.name}</a></li>
        `)
    })
}

document.addEventListener('DOMContentLoaded', displayFavourites)











//-------------- seminar

/*Задание 1 (тайминг 125 минут)
1. Создание медиа плеера
2. Создать файл index.html
3. Создать папку img в которую загрузить изображение
кнопок play, pause
4. Скачать произвольное видео из интернета
5. Добавить Тег видео в html
6. Продумать внешний вид progress и volume
7. Продумать время проигрывателя
8. Реализовать функционал своего собственного видеоплеера */


/*
мини тайминги
1. Скачать все картинки (найти макет по желанию)
2. Добавляете html добавляете все элементы для
управления видео
3. Реализуем кнопки play, pause
4. время и ползунки
5. Собираем внешний вид
*/

// localStorage.setItem('user', JSON.stringify({user : 'Иван'}));

// console.log(JSON.parse(localStorage.getItem('user')));

// localStorage.setItem('string', 'hello world');

// // localStorage.removeItem('user');

// // localStorage.clear()

// console.log(localStorage.key(0))


// localStorage.setItem('user', JSON.stringify('key21'));


