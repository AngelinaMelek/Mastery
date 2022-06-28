function navLinkActive(event) {
  console.log(event);
  const a = document.querySelector(".nav-link--active");
  a.classList.remove("nav-link--active");
  console.log(event.target.tagName);
  if (event.target.tagName === "A") {
    event.target.classList.add("nav-link--active");
  } else {
    const innerLink = event.target.querySelector("a.nav-link");
    console.log(innerLink);
    innerLink.classList.add("nav-link--active");
  }
}

const links = document.querySelector(".nav-box");

links.addEventListener("click", navLinkActive, true);

const btns = document.querySelectorAll("*[data-modal-btn]");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const name = btns[i].getAttribute("data-modal-btn");
    const modal = document.querySelector("[data-modal-window='" + name + "']");
    modal.style.display = "block";
  });
  const modal = document.querySelector("[data-modal-window]");
  const close = modal.querySelector(".close-modal-window");
  close.addEventListener("click", function () {
    modal.style.display = "none";
  });
}

window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-modal-window")) {
    const modals = document.querySelectorAll("*[data-modal-window]");
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
  console.log("close-modal-window");
});
