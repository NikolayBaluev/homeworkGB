// const myPromise = new Promise ((resolve, reject) => {
    
// })

// console.log(myPromise);

// myPromise.then((res) => {

// }).catch((err) => {

// })


// const url1 = `https://dog.ceo/api/breeds/image/random`;
// const url2 = `https://jsonplaceholder.typicode.com/users`;

// fetch(url1)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         // console.log(err.message);
//         console.log('Что-то сломалось');
//     })

// fetch(url2)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         // console.log(err.message);
//         console.log('Что-то сломалось');
//     })

    // const getData = async (url1) => {
    //     try {
    //         const res = await fetch(url1);
    //         const dataFromServer = await res.json();
    //         return dataFromServer;
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    // const fetchData = await getData(url1)

    // console.log(fetchData);

    // const imgEl = document.querySelector('img');
    // imgEl.src = fetchData.message

    // const buttonEl = document.querySelector('button');
    // buttonEl.addEventListener('click', async ev => {
    //     const fetchData = await getData(url1)
    //     const imgEl = document.querySelector('img');
    //     imgEl.src = fetchData.message
    // })

    