console.log('hello');

const contentProductsURL = "/back_end/contentProducts.json"

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

        const data = await fetchData(contentProductsURL);
        
        const contanerProducts = document.querySelector('.img_for_products'); 

        data.forEach(element => {
            contanerProducts.insertAdjacentHTML("beforeend", `
                <div class="background_products_first">
                    <a href="#"><img class="img_for_product" src=${element.img}></img></a>
                        <div class="all_products_first">
                            <p class ="name_product_first">${element.title}</p>
                            <p class="text_product_first">${element.description}</p>
                            <p class="price_product_first">$ ${element.price}</p>
                        </div>                               
                 </div>             
            `)
        });
    })