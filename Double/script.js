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
const imgArray = shuffle(doubleImgArray);



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
            const clickedCard = event.target;
            clickedCard.classList.add("flipped");
            const flippedCards = document.querySelectorAll(".flipped");

            if (currentCard === null) {
                currentCard = arr[i].src; 
            }
            
            event.target.src = arr[i].src;
                console.log("target", event.target.src);
                console.log("current", currentCard); 
            checkedCards (flippedCards, event);
      }) ;    
      document.body.appendChild(img);
}  
console.log(arr);}

function checkedCards(flippedCards, event) {
    if (flippedCards.length === 2) {

        if (flippedCards[0].getAttribute("src") 
        === flippedCards[1].getAttribute("src")) {

        console.log("match");
        flippedCards.forEach(function (clickedCard) {
          clickedCard.classList.remove("flipped"); 
          clickedCard.style.pointerEvents = "none";
          flippedCards = null;
          currentCard = null;
        });

        } else {
          console.log("wrong");
          flippedCards.forEach(function (clickedCard) {
            clickedCard.classList.remove("flipped"); 
            setTimeout( () => clickedCard.src = cardBack, 1000);
            console.log(clickedCard.src);
          });      
          flippedCards = null;
          currentCard = null; 
        }          
    };
}

cardFieldBuilder(imgArray);
