import { toggleMenu, data, closeMobileMenu } from "./sharedFunctions.js";

let tech_img = document.querySelector(".sliderT__img");
//current page content set to the first in json file
let tech_current = 0;
let tech_indicators = document.querySelectorAll(".sliderT__indicator--dot");
let tech_name = document.querySelector(".sliderT__text--name");
let tech_description = document.querySelector(".sliderT__text--description");
let windowSize = window.innerWidth;

displayTechPage();

toggleMenu();

closeMobileMenu();

//fucntion that allow viewer to select slide by clicking on indicators
for (let i = 0; i < tech_indicators.length; i++) {
  tech_indicators[i].addEventListener("click", () => {
    tech_current = i;
    console.log(tech_current);
    tech_indicators.forEach((indicator) => {
      indicator.classList.remove("sliderT__indicator--active");
    });
    tech_indicators[i].classList.add("sliderT__indicator--active");

    displayTechPage();
  });
}

function displayTechPage() {
  data.then((data) => {
    if (windowSize >= 1440) {
      tech_img.src = data["technology"][tech_current]["images"].portrait;
    } else tech_img.src = data["technology"][tech_current]["images"].landscape;
    tech_name.textContent = data["technology"][tech_current].name;
    tech_description.textContent = data["technology"][tech_current].description;
  });
}
