// render img on catalog page (popular sets) ******************************************************************************

const container = document.querySelector('.products_box');

function renderImg(imgArray, box) {
    let contentString = '';
    imgArray.forEach(function (item) {
        contentString +=
        `
        <div class="products_item">
            <div>
            ${item.img}
               <div class="products_text">
                    <h3>${item.name}</h3>
               </div>
            </div>
            <ul class="products_btn flex">
                <li><span>${item.cost} грн.</span></li>
                <li><button class="add_item" data-id="${item.id}"><img src="./img/basket.svg" alt="basket"> <p>В корзину</p></button></li>
            </ul>
        </div>
        `
    });
    // console.log(contentString);
    box.insertAdjacentHTML('beforeEnd', contentString);
}

const imgOnPage = 6;
renderImg(prodacts.slice(0, imgOnPage), container);

for (let i = 0; i < 5; i++) {
    page = prodacts.length / imgOnPage * i;
    
}

//клик по кнопке добавление контента *******************************************************************
const moreBtn = document.querySelector('.products_general_btn');

let someArr = [];
let start = 0;
    let end;
// let someArr = document.querySelectorAll('.products_item');

moreBtn.onclick = function () {
    
    someArr = document.querySelectorAll('.products_item');
   
    start = start + 6;
    end = start + imgOnPage;

    if (end >= prodacts.length) {
        moreBtn.remove();
    }
        renderImg(prodacts.slice(start, end), container);
    }
   

// ***************************************************************************************************************************
// burger menu
$(document).ready(function() {
    $('.burger_button').click(function(){
        $('.burger_button').toggleClass('open-menu');
        $('.mobile_menu_list').toggleClass('open-menu');
    });
});

// добавление товара в корзину


let addBtn = document.querySelectorAll('.add_item');

let prod = [];//
let oldBasket = JSON.parse(localStorage.getItem('basket')) || [];


for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].onclick = function () {
        console.log('click!');

        let cuentBasketId = prodacts[i]["id"];
        console.log(cuentBasketId);
        oldBasket.push(prodacts[i]);

        if (oldBasket[i].hasOwnProperty(cuentBasketId)) {
            // oldBasket.pop(prodacts[i]);
            console.log('true');
        }else{
            console.log('false');
        }
        
        localStorage.setItem('basket', JSON.stringify(oldBasket));//и добаляем массив в storage
     
    }
}


















