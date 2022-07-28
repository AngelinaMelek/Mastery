const btn = document.createElement('button');
const textInBtn = document.createTextNode("Let's play");
btn.appendChild(textInBtn);
document.body.appendChild(btn);

btn.addEventListener("click", function() {
    window.location.replace("../html/index.html");
})

if ("content" in document.createElement("template")) {
    const tbody = document.querySelector("tbody");
    const template = document.querySelector("#resultsTable");
    let gameResults = localStorage.getItem("ScoreList");

    if (gameResults === null) {
      gameResults = [];
    } else {
      gameResults = JSON.parse(gameResults);
    }

    console.log(gameResults);

    function builder() {
        for (let i = 0; i < gameResults.length; i++) {
            const clone = template.content.cloneNode(true);
            const td = clone.querySelectorAll("td");
            td[0].textContent = gameResults[i].name;
            td[1].textContent = gameResults[i].time;
            tbody.appendChild(clone);
        }
        }    
    builder();
}
