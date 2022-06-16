function navLinkActive(event) {
  const a = document.querySelector(".nav-link--active");
  event.stopPropagation();
  event.target.classList.add("nav-link--active");
  a.classList.remove("nav-link--active");
  console.log(event);
}

const links = document.querySelector(".nav-box");

links.addEventListener("click", navLinkActive, true);

let btns = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let name = btns[i].getAttribute("data-modal-btn");
    let modal = document.querySelector("[data-modal-window='" + name + "']");
    modal.style.display = "block";
    let close = modal.querySelector(".close-modal-window");
    close.addEventListener("click", function () {
      modal.style.display = "none";
    });
  });
}

window.onclick = function (event) {
  if (event.target.hasAttribute("data-modal-window")) {
    let modals = document.querySelectorAll("*[data-modal-window]");
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
};
