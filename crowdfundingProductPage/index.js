// to toggle hamburger and close icons
const navToggle = document.querySelector(".nav-toggle");
const toggleIcons = document.querySelectorAll(".toggle-icons");
const hamburger_icon = document.querySelector(".hamburger");

//to manipulate the nav menu's display on mobile screen
const nav = document.querySelector(".nav");

const overlay = document.querySelector(".overlay");
const backProject = document.querySelector(".btn-back-roject");
const selection_modal = document.querySelector(".selection-modal");
const selectReward = document.querySelectorAll('input[name="reward-type"]');
const successModal = document.querySelector(".success-modal");
const btnSumbmit = document.querySelectorAll(".btn-submit-pledge");
const btn_selectReward = document.querySelectorAll(".btn-select");
const finish = document.querySelector(".finish");
const closeModal = document.querySelector(".close-modal");

const bookmark = document.querySelector(".bookmark");
const btn_bookmark = document.querySelector(".bookmark-project");
const icon_bookmark = document.getElementById("circle1");

// for resetting reward box styles after choosing a reward or close modal
const allBoxes = document.querySelectorAll(".box");
const allPledges = document.querySelectorAll(".selected-pledge");

const progressBar = document.querySelector(".progress-bar-filler");

const goal = 100000;
let pledgeTotal = 89914;
let backNum = 5007;
let progress = 1;
let selectedID;

//to toggle hamburger and close icon on click
navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  overlay.classList.toggle("hidden");
  toggleIcons.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});

//to toggle bookmark icons on click
btn_bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark-active");
  icon_bookmark.classList.toggle("checked");
  bookmark.classList.toggle("bookmarked");
});

//back this project button
backProject.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  selection_modal.classList.remove("hidden");
});

//select reward button, when a reward selected, trace back to its container and container
//style to indicate being selected
selectReward.forEach((reward) => {
  reward.addEventListener("change", () => {
    let box = reward.parentElement.parentElement;
    let selected = box.querySelector(".selected-pledge");
    if (reward.checked) {
      resetBoxesStyles();
      selectedID = reward.id;
      box.classList.add("selected-border");
      selected.classList.remove("hidden");
    }
  });
});

btn_selectReward.forEach((button) => {
  button.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    selection_modal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", complete);

// if window is resized when mobile menu is open,
// close the mobile nav and render desktop layout
window.addEventListener("resize", () => {
  if (window.innerWidth > 500) {
    overlay.classList.add("hidden");
    toggleIcons.classList.add("hidden");
  } else if (window.innerWidth <= 500) {
    console.log("mobile");
    if (hamburger_icon.classList.contains("hidden")) {
      overlay.classList.remove("hidden");
    }
  }
});

function success() {
  resetBoxesStyles();
  resetRadioButton();
  selection_modal.classList.add("hidden");
  overlay.classList.remove("hidden");
  successModal.classList.remove("hidden");
}

function complete() {
  successModal.classList.add("hidden");
  selection_modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function resetBoxesStyles() {
  allBoxes.forEach((box) => box.classList.remove("selected-border"));
  allPledges.forEach((pledge) => pledge.classList.add("hidden"));
}

function resetRadioButton() {
  selectReward.forEach((reward) => {
    reward.checked = false;
  });
}

//update pledge total amount and backers number and progress bar percentage
function updateStats() {
  let rewardID = selectedID + "-pledge";
  let placeholder = Number(document.getElementById(rewardID).placeholder);
  console.log(placeholder);
  let amount = Number(document.getElementById(rewardID).value);
  amount = amount === 0 ? placeholder : amount;
  console.log(amount);
  pledgeTotal += amount;
  backNum++;
  progress = pledgeTotal / goal;
}

function displayStats() {
  document.getElementById("pledgeTotal").textContent =
    "$" + pledgeTotal.toLocaleString();
  document.getElementById("backerNumber").textContent =
    backNum.toLocaleString();
  progressBar.style.width = progress * 100 + "%";
}
