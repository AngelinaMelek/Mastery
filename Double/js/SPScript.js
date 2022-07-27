const btn = document.createElement('button');
const textInBtn = document.createTextNode('lorem');
btn.appendChild(textInBtn);
document.body.appendChild(btn);

btn.addEventListener("click", function() {
    window.location.replace("../html/index.html");
})
