
//получение дынных из local storage
  var productStr = localStorage.getItem('basket');
  var product = JSON.parse(productStr);

  //рендер данных в корзину
  const basketContainer = document.querySelector('.basket_box');

function renderImg(product, box) {
    let contentString = '';
    product.forEach(function (item) {
        contentString +=
        `
        <div class="basket_item">
                <div class="del_btn">
                    <button  value="del" data-id=""><img src="./img/del.png" alt="delet button">
                    </div>
             <div class="basket_wrap">
                  <div class="prod_img">
                  ${item.img}
                  </div>
                  <div class="prod_title">
                      <h3>${item.name}</h3>
                      
                  </div>
                    <ul class="count flex">
                        <li><button class="minus"><img src="./img/minus.png" alt=""></button></li>
                        <li class="number">1</li>
                        <li><button class="plus"><img src="./img/plus.png" alt=""></button></li>
                    </ul>
                    <div>
                        <p><span class="price">${item.cost}</span> грн.</p>
                    </div>
             </div>
             <p class="cost">Цена: <span>${item.cost}</span> грн.</p>
           </div>
        `
    });
    // console.log(contentString);
    box.insertAdjacentHTML('afterbegin', contentString);
}

renderImg(product, basketContainer);


// ***************************************************************************************************************************
// burger menu
$(document).ready(function() {
  $('.burger_button').click(function(){
      $('.burger_button').toggleClass('open-menu');
      $('.mobile_menu_list').toggleClass('open-menu');
  });
});


// ***************************************************************************************************************************
  const plusButton = document.querySelectorAll('.plus');
  const minusButton = document.querySelectorAll('.minus');

  const summCostItem = document.querySelectorAll('.price');
  const summCost = document.querySelector('.summ_cost');
  const delivery = document.querySelector('.delivery').innerText;
  const toPay = document.querySelector('.to_pay');
  const checkArr = [];
  var summCostValue = 0;


   // ***************************************************************************************************************************
//remove product
const delButtons = document.querySelectorAll('button[value=del]');
var product = document.querySelectorAll('.basket_item');


for (let i = 0; i < delButtons.length; i++) {
  delButtons[i].onclick = function () {
    // console.log('del');
    // let item = product[i];
    

    product[i].remove();
    
    checkArr.push(parseInt(summCostItem[i].innerText));
     
    summCostValue -= checkArr[i];
    summCost.innerText = summCostValue;
    
    let value = summCostValue + parseInt(delivery);
    
    toPay.innerText = value;
          }
      }
//удаление из Local storage???????

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //добавление и удаление товара  (количество товарара)

      
     
  
      for (let i = 0; i < plusButton.length; i++) {
        plusButton[i].onclick = function () {
          let num = plusButton[i].parentElement.previousElementSibling.innerText;
          num++;
          plusButton[i].parentElement.previousElementSibling.innerText = num;

          let price = parseInt(plusButton[i].parentElement.parentElement.nextElementSibling.parentElement.nextElementSibling.lastElementChild.innerText);
          let cost = price * num;
            plusButton[i].parentElement.parentElement.nextElementSibling.lastElementChild.lastElementChild.innerText = cost;

            checkArr.push(parseInt(summCostItem[i].innerText));
     
    summCostValue += checkArr[i];
    summCost.innerText = summCostValue;
    
    let value = summCostValue + parseInt(delivery);
    
    toPay.innerText = value;
        }
      }


    for (let i = 0; i < minusButton.length; i++) {
      minusButton[i].onclick = function () {
        let num = minusButton[i].parentElement.nextElementSibling.innerText;
        num--;
        if (num < 1) {
          let qst = confirm('Удалить??');
          if (qst) {
            product[i].remove();
          }
        }
        else
        {
          minusButton[i].parentElement.nextElementSibling.innerText = num;
          let price = parseInt(plusButton[i].parentElement.parentElement.nextElementSibling.parentElement.nextElementSibling.lastElementChild.innerText);
          let cost = price * num;
            plusButton[i].parentElement.parentElement.nextElementSibling.lastElementChild.lastElementChild.innerText = cost;
        }

        checkArr.push(parseInt(summCostItem[i].innerText));
     
    summCostValue -= checkArr[i];
    summCost.innerText = summCostValue;
    
    let value = summCostValue + parseInt(delivery);
    
    toPay.innerText = value;
      }
        
    }

    //*********************************************************************************************************************************** */
    //цикл, рассчитывающий суммарную стоимость товаров
   for (let i = 0; i < summCostItem.length; i++) {

    checkArr.push(parseInt(summCostItem[i].innerText));
     
    summCostValue += checkArr[i];
    summCost.innerText = summCostValue;
    
    let value = summCostValue + parseInt(delivery);
    
    toPay.innerText = value;




   }