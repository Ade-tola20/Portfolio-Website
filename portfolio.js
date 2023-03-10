let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyyddgo3AmZbYPZEsc4b2ZUAcS3k9IhHynbYTQJ1rkbcI3HJ-N7QtLy9q2ueNIYwS2YFg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent!"
      setTimeout(function() {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
