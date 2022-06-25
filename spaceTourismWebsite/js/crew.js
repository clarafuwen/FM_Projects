import { toggleMenu, data, closeMobileMenu } from "./sharedFunctions.js";

let crew_img = document.querySelector(".sliderC__img");
let crew_current = 0;
let crew_indicators = document.querySelectorAll(".sliderC__indicator--dot");
let crew_role = document.querySelector(".sliderC__text--role");
let crew_name = document.querySelector(".sliderC__text--name");
let crew_bio = document.querySelector(".sliderC__text--bio");

displayCrewPage();
toggleMenu();
closeMobileMenu();

//fucntion that allow viewer to select slide by clicking on indicators
for (let i = 0; i < crew_indicators.length; i++) {
  crew_indicators[i].addEventListener("click", () => {
    crew_current = i;
    console.log(crew_current);
    crew_indicators.forEach((indicator) => {
      indicator.classList.remove("sliderC__indicator--active");
    });
    crew_indicators[i].classList.add("sliderC__indicator--active");

    displayCrewPage();
  });
}

function displayCrewPage() {
  data.then((data) => {
    crew_img.src = data["crew"][crew_current]["images"]["png"];
    crew_role.textContent = data["crew"][crew_current].role;
    crew_name.textContent = data["crew"][crew_current].name;
    crew_bio.textContent = data["crew"][crew_current].bio;
  });
}
