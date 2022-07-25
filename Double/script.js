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
const doubleImgArray = doubleImgArrayCopy.map((a, i) => Object.assign({}, a));
let currentCard = null;
const imgArray = shuffle(doubleImgArray);
let matchedCardsCounter = 0;
let seconds = 0;
const secondsCounter = document.getElementById('seconds-counter');

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
        img.src = cardBack;
        img.width = 200;
        img.height = 200;
        img.addEventListener("click", function(event) { 

            if (secondsCounter.innerText === "") {
              myTimer();
              setInterval(myTimer, 1000); 
            }
            event.target.src = arr[i].src;
            isMatchCards(event, arr);
        }) ;         
      document.body.appendChild(img);
    }; 
};

function isMatchCards(event, arr) {
    const clickedCard = event.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");

    if (flippedCards.length === 2) {

        if (flippedCards[0].getAttribute("src") 
        === flippedCards[1].getAttribute("src")) {
            matchedCardsCounter += 1; 

            flippedCards.forEach(function (clickedCard) {
            clickedCard.classList.remove("flipped"); 
            clickedCard.style.pointerEvents = "none";
        });        
        checkStatusWon(arr);        
        } else {
            flippedCards.forEach(function (clickedCard) {
              clickedCard.classList.remove("flipped"); 
              setTimeout( () => clickedCard.src = cardBack, 1000);
            });               
        }    
    }; 
};

cardFieldBuilder(imgArray);

function myTimer() {
    seconds += 1;
    secondsCounter.innerText = seconds;
   return(seconds);
};

function checkStatusWon(arr) {
  if (matchedCardsCounter === arr.length/2 ) {
    const endTime = secondsCounter.innerText;
    restartGame(endTime);
  }
}

function restartGame(endTime) {
    seconds = 0;
    clearInterval(myTimer());
    secondsCounter.innerText = endTime;   
}
