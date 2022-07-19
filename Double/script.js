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
const doubleImgArray = doubleImgArrayCopy.map((a, i) => Object.assign({id: i, isOpen: false}, a));
let currentCard = null;

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
        arr[i].isOpen = true;
      } 
     checkedCard(event, arr);
    });
    document.body.appendChild(img);
  } 
  currentCard = null;
}


cardFieldBuilder(shuffle(doubleImgArray));

function checkedCard (event, arr) {
  const clickedCard = event.target;
  console.log(clickedCard);
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  // let a1 = document.querySelector('[data-card-id="' + arr[0].id + '"]');
  // console.log('a1', a1);

  if (currentCard === null) {
    currentCard = clickedCard;
  }
 
  if (flippedCards.length === 2) {

    if (flippedCards[0].getAttribute("src") 
    === flippedCards[1].getAttribute("src")) {
    console.log("match");
    flippedCards.forEach(function (clickedCard) {
      clickedCard.classList.remove("flipped"); 
      clickedCard.style.pointerEvents = "none";
    });
    } else {
      console.log("wrong");
      flippedCards.forEach(function (clickedCard) {
      clickedCard.classList.remove("flipped"); 
    });
      setTimeout( () => event.target.src = cardBack, 1000);
      setTimeout( () => currentCard.src = cardBack , 1000);

      arr[0].isOpen = false;
      arr[1].isOpen = false; 
      // console.log("arr0", arr[0].isOpen);   
      // console.log("arr1", arr[1].isOpen); 
         
    }  
  }
};
