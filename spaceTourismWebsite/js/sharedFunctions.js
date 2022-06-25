//constants for toggling mobile menu
const toggleNav = document.querySelector(".nav_toggle");
const toggle_icons = document.querySelectorAll(".toggle_icon");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");

const URL = "./assets/data.json";

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

function mobileMenuReset() {
  toggleNav.classList.remove("nav_toggle_hidden");
  overlay.classList.add("hidden");
  hamburger.classList.remove("nav_toggle_hidden");
  close.classList.add("nav_toggle_hidden");
  nav.style.display = "none";
}

//get data from local json file
export const data = getData(URL);

//function that toggle between hamburger and close icons
export function toggleMenu() {
  toggleNav.addEventListener("click", () => {
    toggle_icons.forEach((icon) => icon.classList.toggle("nav_toggle_hidden"));
    if (hamburger.classList.contains("nav_toggle_hidden")) {
      overlay.classList.remove("hidden");
      nav.style.display = "flex";
    } else if (close.classList.contains("nav_toggle_hidden")) {
      overlay.classList.add("hidden");
      nav.style.display = "none";
    }
  });
}

//function deals with edge cases: resize window when mobile menu is open
//it hides the overlay and displays nav according to screen sizes
//resets to mobile menu when window shrinks back down below 768px
export function closeMobileMenu() {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      overlay.classList.add("hidden");
      toggleNav.classList.add("nav_toggle_hidden");
      nav.style.display = "flex";
      if (window.innerWidth >= 1440) {
        nav.style.display = "block";
      }
    } else {
      mobileMenuReset();
    }
  });
}
