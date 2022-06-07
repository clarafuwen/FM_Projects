const URL = "data.json";
let block_titles = document.querySelectorAll(".block__title--heading");
let block__content = document.querySelectorAll(".block__content--current");
let block__history = document.querySelectorAll(".block__content--history");
const timeframes = document.querySelectorAll(".timeframe");

//to keep the value of selected timeframe, default set to "weekly"
let tf = "weekly";

getData(tf);

timeframes.forEach((timeframe) => {
  timeframe.addEventListener("change", () => {
    tf = timeframe.value;
    getData(tf);
  });
});

//fetch data from local json file
function getData(timeframe) {
  fetch(URL)
    .then((response) => (response = response.json()))
    .then((response) => loadData(response, timeframe))
    .catch((error) => {
      console.log(error);
    });
}

//load and display data according to selected timeframe
function loadData(d, tf) {
  let i = 0;
  d.forEach((category) => {
    block_titles[i].textContent = category.title;
    block__content[i].textContent =
      category.timeframes[`${tf}`]["current"] + "hrs";
    block__history[i].textContent =
      "Last Week - " + category.timeframes[`${tf}`]["previous"] + "hrs";
    i++;
  });
}
