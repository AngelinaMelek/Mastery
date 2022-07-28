(function() {
  const imgData = [
    {
      src: "../img/among.png",
      name: "AmongUs",
    },
    {
      src: "../img/glasses.png",
      name: "Glasses",
    },
    {
      src: "../img/mango.png",
      name: "Mango",
    },
  ];
  
  const cardBack = "../img/font.png";
  
  const doubleImgArrayCopy =  imgData.concat(imgData);
  const doubleImgArray = doubleImgArrayCopy.map((a, i) => Object.assign({}, a));
  const imgArray = shuffle(doubleImgArray);
  
  const secondsCounter = document.getElementById('seconds-counter');
  const modal = document.querySelector("[data-modal-window]");
  const playerNameSubmit = document.querySelector(".playerName-button");
  const cardField = document.getElementById("cardField"); 
  const playerName = document.getElementById("playerName"); 
  
  let matchedCardsCounter = 0;
  let currentCard = null;
  let resultsObj = {};
  let seconds = 0;
  let intervalID = null;
  let endTime = 0;

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
      img.classList.add("card-style")
      img.src = cardBack;
      img.width = 80;
      img.height = 80;
      img.addEventListener("click", function(event) { 

        if (secondsCounter.innerText === "") {
          myTimer();
          intervalID = setInterval(myTimer, 1000);         
        }
        event.target.src = arr[i].src;
        isMatchCards(event, arr);
      }) ;      
      cardField.appendChild(img);   
    }; 
  };

  function isMatchCards(event, arr) {
    const clickedCard = event.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");

    if (flippedCards.length === 2) {
      if (flippedCards[0].getAttribute("src") === flippedCards[1].getAttribute("src")) {
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
  };

  function checkStatusWon(arr) {
    if (matchedCardsCounter === arr.length / 2 ) {
      endTime = secondsCounter.innerText;
      clearInterval(intervalID); 
      modal.style.display = "block";
    }
  }

  playerNameSubmit.addEventListener("click", function(event){
    event.preventDefault();
    restartGame();
  });

  function restartGame() {
    let gameResults = localStorage.getItem("ScoreList");
   
    if (gameResults === null) {
      gameResults = [];
    } else {
      gameResults = JSON.parse(gameResults);
    }

    resultsObj.name = playerName.value;
    resultsObj.time = endTime;    
    gameResults.push(resultsObj);
    localStorage.setItem("ScoreList", JSON.stringify(gameResults));
    
    if (playerName.value !== "") {
        window.location.replace("../html/results.html");
    }
  }
})();

