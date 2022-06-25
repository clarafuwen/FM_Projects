import { toggleMenu, data, closeMobileMenu } from "./sharedFunctions.js";

//for display destination page and slides
let dest_img = document.querySelector(".sliderD__img");
let dest_current = 0;
let dest_indicators = document.querySelectorAll(".sliderD__indicator--text");
let dest_heading = document.querySelector(".sliderD__text--heading");
let dest_description = document.querySelector(".sliderD__text--description");
let dest_distance = document.querySelector(".sliderD__stats--distance");
let dest_time = document.querySelector(".sliderD__stats--time");

displayDestinationPage();

toggleMenu();

closeMobileMenu();

//fucntion that allow viewer to select slide by clicking on indicators
for (let i = 0; i < dest_indicators.length; i++) {
  dest_indicators[i].addEventListener("click", () => {
    dest_current = i;
    console.log(dest_current);
    dest_indicators.forEach((indicator) => {
      indicator.classList.remove("sliderD__indicator--active");
    });
    dest_indicators[i].classList.add("sliderD__indicator--active");

    displayDestinationPage();
  });
}

function displayDestinationPage() {
  data.then((data) => {
    dest_img.src = data["destinations"][dest_current]["images"]["png"];
    for (let i = 0; i < dest_indicators.length; i++) {
      dest_indicators[i].textContent = data["destinations"][i].name;
    }
    dest_heading.textContent = data["destinations"][dest_current].name;
    dest_description.textContent =
      data["destinations"][dest_current].description;
    dest_distance.textContent = data["destinations"][dest_current].distance;
    dest_time.textContent = data["destinations"][dest_current].travel;
  });
}
