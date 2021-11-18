let imgs = [
    {
        id:1,
        img: '<img src="./img/photo_01.jpg" alt="photo">',
        text: 'First img',
    },
    {
        id:2,
        img: '<img src="./img/photo_02.jpg" alt="photo">',
        text: 'Second img',
    },
    {
        id:3,
        img: '<img src="./img/photo_03.jpg" alt="photo">',
        text: 'Third img',
    },
    {
        id:4,
        img: '<img src="./img/photo_04.jpg" alt="photo">',
        text: 'Fourth img',
    },
    {
        id:5,
        img: '<img src="./img/photo_05.jpg" alt="photo">',
        text: 'Fifth img',
    },
    {
        id:6,
        img: '<img src="./img/photo_06.jpg" alt="photo">',
        text: 'Sixth img',
    },
    {
        id:7,
        img: '<img src="./img/photo_07.jpg" alt="photo">',
        text: 'Seventh img',
    },
    {
        id:8,
        img: '<img src="./img/photo_08.jpg" alt="photo">',
        text: 'Eighth img',
    },
    {
        id:9,
        img: '<img src="./img/photo_09.jpg" alt="photo">',
        text: 'Ninth img',
    },
    {
        id:10,
        img: '<img src="./img/photo_10.jpg" alt="photo">',
        text: 'Tenth img',
    },
    {
        id:11,
        img: '<img src="./img/photo_11.jpg" alt="photo">',
        text: 'Eleventh img',
    },
    {
        id:12,
        img: '<img src="./img/photo_12.jpg" alt="photo">',
        text: 'Twelfth img',
    },
    {
        id:13,
        img: '<img src="./img/photo_13.jpg" alt="photo">',
        text: 'Thirteenth img',
    },
    {
        id:14,
        img: '<img src="./img/photo_14.jpg" alt="photo">',
        text: 'Fourteenth img',
    },
    {
        id:15,
        img: '<img src="./img/photo_15.jpg" alt="photo">',
        text: 'Fifteenth img',
    },
    {
        id:16,
        img: '<img src="./img/photo_16.jpg" alt="photo">',
        text: 'Sixteen img',
    },
    {
        id:17,
        img: '<img src="./img/photo_17.jpg" alt="photo">',
        text: 'Seventeenth img',
    },
    {
        id:18,
        img: '<img src="./img/photo_18.jpg" alt="photo">',
        text: 'Eighteenth img',
    },
    {
        id:19,
        img: '<img src="./img/photo_19.jpg" alt="photo">',
        text: 'Nineteenth img',
    },
    {
        id:20,
        img: '<img src="./img/photo_20.jpg" alt="photo">',
        text: 'Twentieth img',
    },
    {
        id:21,
        img: '<img src="./img/photo_21.jpg" alt="photo">',
        text: 'Twenty first img',
    },
    {
        id:22,
        img: '<img src="./img/photo_22.jpg" alt="photo">',
        text: 'Twenty second img',
    },
    {
        id:23,
        img: '<img src="./img/photo_23.jpg" alt="photo">',
        text: 'Twenty third img',
    },
    {
        id:24,
        img: '<img src="./img/photo_24.jpg" alt="photo">',
        text: 'Twenty fourth img',
    },
    {
        id:25,
        img: '<img src="./img/photo_25.jpg" alt="photo">',
        text: 'Twenty fifth img',
    },
    {
        id:26,
        img: '<img src="./img/photo_26.jpg" alt="photo">',
        text: 'Twenty sixth img',
    },
    {
        id:27,
        img: '<img src="./img/photo_27.jpg" alt="photo">',
        text: 'Twenty seventh img',
    },
    {
        id:28,
        img: '<img src="./img/photo_28.jpg" alt="photo">',
        text: 'Twenty eighth img',
    },
    {
        id:29,
        img: '<img src="./img/photo_29.jpg" alt="photo">',
        text: 'Twenty nineth img',
    },
]


// render img******************************************************************************

const container = document.querySelector('.img_list');

function renderImg(imgArray, box) {
    let contentString = '';
    imgArray.forEach(function (item) {
        contentString +=
        `
            <li>
                ${item.img}
                <p>${item.text}</p>
            </li>
        `
    });
    // console.log(contentString);
    box.insertAdjacentHTML('afterbegin', contentString);
}

const imgOnPage = 6;
renderImg(imgs.slice(0, imgOnPage), container);

// render buttons********************************************************************************
 
const containerButtons = document.querySelector('.buttons_wrap');

const count = Math.ceil(imgs.length / imgOnPage);

   function renderButtons() {
    let contentString = ' ';
       for (let i = 1; i <= count; i++) {
        contentString += `<button class="pag_button">${i}</button>`
        


        // containerButtons.innerHTML += 
        // '<button class="pag_button">' + i + '</button>';
        containerButtons.innerHTML = contentString;

       }
       
   }
   renderButtons();

   let curentPage;
//при загрузке активна первая кнопка
const firstButton = document.querySelector('.pag_button');
firstButton.classList.add('active');
curentPage =  Number(document.querySelector(".active").innerHTML);




const allBut = document.querySelectorAll('.pag_button');


    allBut.forEach(el => {
        this.el = function () {
            classClearing();
            el.classList.add('active');
            curentPage = Number(document.querySelector(".active").innerHTML);
        }
   });

//ПОЛУЧЕНИЕ ВЫРЕЗАННОГ МАССИВА************************************************
function getCurentArr(page) {

    const start = (page - 1) * imgOnPage;
        const end = start + imgOnPage;
        const items = imgs.slice(start, end); 

        container.innerHTML = '';
        renderImg(items, container);
    
}
getCurentArr(curentPage);

//клики по кнопкам с цифрами*******************************************************************
allBut.forEach(el => {
    el.onclick = function () {
        
   
    classClearing();
    el.classList.add('active');
    curentPage = Number(document.querySelector(".active").innerHTML);
    getCurentArr(curentPage);
}
});

//клики по кнопкам с цифрами (ПЕРВАЯ ВЕРСИЯ)*******************************************************************
//
    // allBut.forEach(el => {
    // el.onclick = function () {
    //     classClearing();
    //     el.classList.add('active');
    //     curentPage = Number(document.querySelector(".active").innerHTML);



        // getCurentArray(curentPage);
    //     const pageNum = Number(this.innerHTML);

    // // console.log(pageNum);
    // const start = (pageNum - 1) * imgOnPage;
    //     // console.log(start);
    //     const end = start + imgOnPage;
    //     // console.log(end);
    //     const items = imgs.slice(start, end); //картинки которые будут на одной странице; вырезаются из массива объектов
    //     console.log(items);

    //     container.innerHTML = '';
    //     renderImg(items, container);

//     }
    
// });
//***************************************************************************************** */


function classClearing() {
    allBut.forEach(function (el) {
      el.classList.remove("active");
    });
}





// кнопки назад и вперед****************************************************************************************
   
const prevButton = document.querySelector('.prev_button');
const nextButton = document.querySelector('.next_button');


//клики по кнопкам prev and next************************************************************************************
//одной функцией*********************************************************************************

let curentBut;
[prevButton, nextButton].forEach((el, i) => {
    el.onclick = function () {
        if (i == 0 && curentPage == 1) {
            curentPage = count;
         }
         else if (i == 0 && curentPage != 1) {
            curentPage--;
         } 
         else
         if (i == 1 && curentPage == count) {
            curentPage = 1;
         }
         else if (i == 1 && curentPage != count) {
            curentPage++;
    }

    classClearing();
    curentBut = allBut[curentPage - 1];
    curentBut.classList.add('active');
 getCurentArr(curentPage);
    }

});



// клики на каждую кнопку отдельно******************************************************************************
// //клин на кнопку назад********************************************************************************************
// prevButton.onclick = function () {
//     if (curentPage == 1) {
//         curentPage = count;
//      }
//      else if (curentPage != 1) {
//         curentPage--;
//      } 
//      classClearing();
//         curentBut = allBut[curentPage - 1];
//         curentBut.classList.add('active');
//      getCurentArr(curentPage);
// }

// // клик на кнопку вперед************************************************************************************************
// nextButton.onclick = function () {
//     if (curentPage == count) {
//         curentPage = 1;
//      }
//      else if (curentPage != count) {
//         curentPage++;
// }
//         classClearing();
//         curentBut = allBut[curentPage - 1];
//         curentBut.classList.add('active');  
    
//         getCurentArr(curentPage);

// }