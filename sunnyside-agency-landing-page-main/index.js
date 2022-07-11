const nav = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");

//by clicking hamburger button
//when data is visible, expand navagation
//else close navigation
hamburger.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    hamburger.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    hamburger.setAttribute("aria-expanded", false);
  }
});
