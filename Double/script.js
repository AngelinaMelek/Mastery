const card = document
  .getElementById("11")
  .addEventListener("click", function () {
    console.log(document.getElementById("11").src);
    if (document.getElementById("11").src === "./img/font.png") {
      return (document.getElementById("11").src = "img/round.png");
    } else {
      return (document.getElementById("11").src = "img/corgi.png");
    }
  });

console.log("zz" + card);

// function double() {}

let p = document.createElement("p");
document.body.appendChild(p);
