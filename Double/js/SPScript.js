const gameBtn = document.createElement('button');
const resultBtn = document.createElement('button');
const gameTextBtn = document.createTextNode("Let's play");
const resultTextBtn = document.createTextNode('Score table');
gameBtn.appendChild(gameTextBtn);
resultBtn.appendChild(resultTextBtn);
document.body.appendChild(gameBtn);
document.body.appendChild(resultBtn);

gameBtn.addEventListener("click", function() {
    window.location.replace("../html/index.html");
})

resultBtn.addEventListener("click", function() {
    window.location.replace("../html/results.html");
})


