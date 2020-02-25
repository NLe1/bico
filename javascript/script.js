/* Open when someone clicks on the span element */
function toggleNav() {
  const myNav = document.getElementById("myNav");
  if (myNav.style.height === "100%") {
    myNav.style.height = "0%";
  } else {
    myNav.style.height = "100%";
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("chosen");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function toggleDetail() {
  const detail = document.getElementById("chitietblock");
  const btn = document.getElementsByClassName("btn-info");
  if (detail.style.display === "" || detail.style.display === "none") {
    detail.style.display = "flex";
    btn[0].innerText = "Ít chi tiết hơn!";
    btn[1].innerText = "Less details!";
  } else {
    detail.style.display = "none";
    btn[0].innerText = "Chi tiết hơn?";
    btn[1].innerText = "More details?";
  }
}

function onMouseOverHandler(e) {
  e.style.backgroundColor = "#C4DBE6";
  e.style.cursor = "pointer";
}

function onMouseDownHandler(e) {
  e.style.backgroundColor = "#ADC1CB";
}

function onMouseUpHandler(e) {
  e.style.backgroundColor = "#D8E3E8";
}

function onClickHandler(e) {
  window.location.href = `/${e.id}.html`;
}

function onHoverItemProduct(e) {
  e.style.backgroundColor = "red";
  e.children[0].children[0].classList.remove("fa-chevron-circle-right");
  e.children[0].children[0].classList.add("fa-chevron-circle-left");
  e.style.cursor = "pointer";
}

function onLeaveItemProduct(e) {
  e.style.backgroundColor = "#397b33";
  e.children[0].children[0].classList.remove("fa-chevron-circle-left");
  e.children[0].children[0].classList.add("fa-chevron-circle-right");
}
