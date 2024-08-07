import { showProductQuantity, deleteProductFromCart, productInCart, preResultSum, blockScroll } from "/others.js";

const url1 = "/data/data.json";
async function fetchData(url) {
    try {
        const responce = await fetch(url);
        const data = await responce.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
document.addEventListener("DOMContentLoaded", async () => {
    const data = await fetchData(url1);

    function displayProducts() {
        const containerEl = document.querySelector('.cards')
        data.forEach(item => {
            containerEl.insertAdjacentHTML("beforeend", `
        <div class="cards__block">
        <a class="cards__link" href="${item.cardLink}">
            <img class="cards__img" src="${item.img}" alt="product">
            <div class="cards__text">
                <p class="cards__text-discription">${item.title}</p>
                <p class="cards__text-price">&#36 ${item.price}</p>
            </div>
        </a>
        <div class="add-box">
            <a id="${item.id}" class="add" href="${item.addLink}">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23px"
                    height="22px" viewBox="0 0 36 32" fill="#fff">
                    <path fill-rule="evenodd"
                        d="M3.1835938,4.3639603 C3.1835938,4.3639603 6.57666,4.3639603 6.57666,4.3639603 C6.57666,4.3639603 11.409912,21.81926 11.409912,21.81926 C11.547852,22.331264 12.021362,22.685959 12.553955,22.685959 C12.553955,22.685959 27.40857,22.685959 27.40857,22.685959 C27.881958,22.685959 28.296265,22.410057 28.49353,21.976841 C28.49353,21.976841 33.89868,9.564976 33.89868,9.564976 C34.05652,9.190784 34.01709,8.777065 33.80017,8.442135 C33.583008,8.107204 33.208252,7.910095 32.81372,7.910095 C32.81372,7.910095 16.400757,7.910095 16.400757,7.910095 C15.749756,7.910095 15.217163,8.442135 15.217163,9.092228 C15.217163,9.742321 15.749756,10.274361 16.400757,10.274361 C16.400757,10.274361 30.998901,10.274361 30.998901,10.274361 C30.998901,10.274361 26.619507,20.32196 26.619507,20.32196 C26.619507,20.32196 13.44165,20.32196 13.44165,20.32196 C13.44165,20.32196 8.6085205,2.866665 8.6085205,2.866665 C8.470581,2.3543892 7.9970703,1.9996948 7.4643555,1.9996948 C7.4643555,1.9996948 3.1835938,1.9996948 3.1835938,1.9996948 C2.5325928,1.9996948 2.0,2.5317345 2.0,3.1818275 C2.0,3.8319206 2.5325928,4.3639603 3.1835938,4.3639603 ZM11.429443,30.999886 C12.909058,30.999886 14.112427,29.798256 14.112427,28.320457 C14.112427,26.842926 12.909058,25.641293 11.429443,25.641293 C9.949951,25.641293 8.746582,26.842926 8.746582,28.320457 C8.746582,29.797989 9.949951,30.999886 11.429443,30.999886 ZM28.197632,30.999886 C28.256836,30.999886 28.335815,30.999886 28.39502,30.999886 C29.105103,30.940865 29.756104,30.625694 30.229614,30.07389 C30.703003,29.542122 30.920044,28.852493 30.880493,28.123611 C30.781982,26.66558 29.499756,25.542736 28.020142,25.641293 C26.540527,25.739582 25.435791,27.040031 25.534546,28.497803 C25.633179,29.896545 26.796997,30.999886 28.197632,30.999886 Z" />
                </svg>
                <p class="add-txt">${item.btnText}</p>
            </a>
        </div>
    </div>
`)
        });
    }
    displayProducts();

    function buyProduct() {
        const addEl = document.querySelectorAll('.add');
        addEl.forEach(item => {
            data.forEach(elem => {
                const productId = Number(item.getAttribute("id"));
                if (productId === elem.id) {
                    item.addEventListener('click', (e) => {
                        e.preventDefault();

                        let productInfo = {
                            id: elem.id,
                            quantity: 1,
                            img: elem.img,
                            title: elem.title,
                            price: elem.price,
                            shipping: elem.shipping,
                            color: elem.color,
                            size: elem.size,
                        };
                        localStorage.setItem(productId, JSON.stringify(productInfo))
                        console.log(productId + " Выбраны товары");
                        window.location.reload();
                    });
                }

            });
        });
    }
    buyProduct();

    deleteProductFromCart();
});
productInCart();
blockScroll();
showProductQuantity();
preResultSum();

