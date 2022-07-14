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

const doubleSrcImgArray =  imgData.concat(imgData);
console.log(doubleSrcImgArray);

function shuffle(arr) {
  const arrCopy = arr.slice();
  for (let i = arrCopy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = arrCopy[i]; arrCopy[i] = arrCopy[j]; arrCopy[j] = t;
  }
  return arrCopy;
} 

function cardFieldBuilder(arr) {

  for (let i = 0; i < arr.length; i++){
  const img = document.createElement("img");
  img.src = arr[i].src;
  img.width = 300;
  img.height = 300;
  img.alt = arr[i].name;
  document.body.appendChild(img);
  }
}

cardFieldBuilder(shuffle(doubleSrcImgArray));
 