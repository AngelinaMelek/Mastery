const imgData = [
{
  src: "./img/among.png",
  name: "AmongUs",
},
{
  src: "./img/glasses.png",
  name: "Glasses",
},
{
  src: "./img/mango.png",
  name: "Mango",
},
];

const cardBack = "./img/font.png";

const doubleImgArrayCopy =  imgData.concat(imgData);
const doubleImgArray = doubleImgArrayCopy.map((a, i) => Object.assign({id: i, isOpen: false}, a));;

function shuffle(arr) {
  const arrCopy = arr.slice();
  for (let i = arrCopy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = arrCopy[i]; arrCopy[i] = arrCopy[j]; arrCopy[j] = t;
  }
  return arrCopy;
} 

function cardFieldBuilder(arr) {

  for (let i = 0; i < arr.length; i++) { 
    const img = document.createElement("img");
    img.setAttribute("data-card-id", arr[i].id); 
    img.src = cardBack;
    img.width = 200;
    img.height = 200;
    img.addEventListener("click", function(event) {  

      if (arr[i].isOpen === false) {
        event.target.src = arr[i].src;
        arr[i].isOpen = true
      } else {
        event.target.src = cardBack;
        arr[i].isOpen = false
      };

      const a1 = document.querySelector('[data-card-id="' + arr[i].id + '"]');  
      console.log(a1.dataset.cardId);
      const a = arr.filter(item => item.isOpen === true);
      // console.log(a[0].src);
      if (a.length>=2 && a1 === a1) {
      // console.log(a[1].src);
      // arr[a1.dataset.cardId].src = cardBack; 
      // a[1].src = cardBack;
      // event.target.src = cardBack;
    }     
      // if (a.length >= 2) {
      //   arr[0].isOpen = false;
      //   console.log("🚀 ~ file: script.js ~ line 55 ~ img.addEventListener ~ arr[0].isOpen", arr[0].isOpen)
      //   arr[1].isOpen = false;
      //  const a1 = document.querySelector('[data-card-id="' + arr[i].id + '"]');  
      //   console.log(a1.src);
      // }
    });
    document.body.appendChild(img);
  }
}

cardFieldBuilder(shuffle(doubleImgArray));

/**
 * 1. Отрисовать игровое поле с рубашками
 * 2. Нужно добавить обработчики, чтобы менять состояние карты
 * 3. Нужно учитывать открытые карты
 * 
 */