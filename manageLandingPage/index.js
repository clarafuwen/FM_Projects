const nav = document.querySelector(".header__nav");
const header_icons = document.querySelectorAll(".header__icons");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const dots = document.querySelectorAll(".dot");

//toggle close icon, hamburger icon and overlay
header_icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
      nav.setAttribute("data-visible", true);
      overlay.style.display = "block";
      hamburger.classList.add("hidden");
      close.classList.remove("hidden");
    } else {
      nav.setAttribute("data-visible", false);
      overlay.style.display = "none";
      hamburger.classList.remove("hidden");
      close.classList.add("hidden");
    }
  });
});

// highlight it when an indicator is clicked
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    dots[i].classList.add("active");
  });
}

//function deals with edge cases: viewer resizes window when mobile menu is open
//it hides the overlay when screen size hits 1000px and unhide overlay when window size resize back dow
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1001) {
    overlay.style.display = "none";
  }
  if (window.innerWidth < 1001 && hamburger.classList.contains("hidden")) {
    overlay.style.display = "block";
  }
});

function errorMessage() {
  let error = document.querySelector(".error");
  let email = document.getElementById("emailAddress");

  console.log(email.value);

  if (!emailIsValid(email.value)) {
    error.textContent = "please insert a valid email";
    error.style.fontStyle = "italic";
  }
}

//email address validation
function emailIsValid(email) {
  // return /\S+@\S+\.\S+/.test(email);
  return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
}
