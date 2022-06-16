let figures = document.querySelectorAll(".figures");
let flipTop = document.querySelectorAll(".cards__item--topFlip");
let flipBottom = document.querySelectorAll(".cards__item--bottomFlip");

//varibales for each animation
let ani_d_u, ani_d_b, ani_h_u, ani_h_b, ani_m_u, ani_m_b, ani_s_u, ani_s_b;

const flip = [{ transform: "rotateX(90deg)" }];
const flipTimeTop = {
  duration: 250,
  iterations: 1,
  easing: "ease-in",
};
const flipTimeBottom = {
  duration: 500,
  iterations: 1,
  easing: "ease-in-out",
};

//set time according to given 8:23:55:41
let days = 8 * 1000 * 60 * 60 * 24;
let hours = 23 * 1000 * 60 * 60;
let minutes = 55 * 1000 * 60;
let seconds = 43 * 1000;

let days_pre = 8,
  hours_pre = 23,
  minutes_pre = 55;

let distance = days + hours + minutes + seconds;

let now = new Date().getTime();
let future = now + distance;
let setDate = new Date(future);

let x = setInterval(function () {
  // Get today's date and time
  now = new Date().getTime();

  // Find the distance between now and the count down date
  distance = setDate - now;

  // Time calculations for days, hours, minutes and seconds
  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //flip each figure when changed
  if (days !== days_pre) {
    ani_d_u = flipTop[0].animate(flip, flipTimeTop);
    ani_d_b = flipBottom[0].animate(flip, flipTimeBottom);
    days_pre = days;
  }

  if (hours !== hours_pre) {
    ani_h_u = flipTop[1].animate(flip, flipTimeTop);
    ani_h_b = flipBottom[1].animate(flip, flipTimeBottom);
    hours_pre = hours;
  }

  if (minutes !== minutes_pre) {
    ani_m_u = flipTop[2].animate(flip, flipTimeTop);
    ani_m_b = flipBottom[2].animate(flip, flipTimeBottom);
    minutes_pre = minutes;
  }

  //always flip card for seconds
  ani_s_u = flipTop[3].animate(flip, flipTimeTop);
  ani_s_b = flipBottom[3].animate(flip, flipTimeBottom);

  //add 0 in front when figure less than 10
  figures[0].textContent = days < 10 ? `0${days}` : `${days}`;
  figures[1].textContent = days < 10 ? `0${days}` : `${days}`;
  figures[2].textContent = hours < 10 ? `0${hours}` : `${hours}`;
  figures[3].textContent = hours < 10 ? `0${hours}` : `${hours}`;
  figures[4].textContent = minutes < 10 ? `0${minutes}` : `${minutes}`;
  figures[5].textContent = minutes < 10 ? `0${minutes}` : `${minutes}`;
  figures[6].textContent = seconds < 10 ? `0${seconds}` : `${seconds}`;
  figures[7].textContent = seconds < 10 ? `0${seconds}` : `${seconds}`;

  //pause all flip animation except for seconds
  ani_d_u.pause();
  ani_d_b.pasue();
  ani_h_u.pause();
  ani_h_b.pasue();
  ani_m_u.pause();
  ani_m_b.pasue();

  if (distance < 0) {
    clearInterval(x);
    figures.innerHTML = "EXPIRED";
  }
}, 1000);
