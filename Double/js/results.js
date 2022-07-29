if ("content" in document.createElement("template")) {
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#resultsTable");
  let gameResults = localStorage.getItem("ScoreList");

  if (gameResults === null) {
    gameResults = [];
  } else {
    gameResults = JSON.parse(gameResults);
  }

  const sortedGameResults = gameResults.slice().sort((a, b) => a.time - b.time);

  function builder() {
    if (sortedGameResults.length >= 10) 
      {sortedGameResults.length = 10};
    for (let i = 0; i < sortedGameResults.length; i++) {
      const clone = template.content.cloneNode(true);
      const td = clone.querySelectorAll("td");
      td[0].textContent = sortedGameResults[i].name;
      td[1].textContent = sortedGameResults[i].time;
      tbody.appendChild(clone);
    }
  }
      
  builder();
}
