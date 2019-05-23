const switcher = document.querySelector(".switcher__button");

document.addEventListener("DOMContentLoaded", setSwitcherValue);
switcher.addEventListener("click", switchTheme);

let switcherValue;

function setSwitcherValue() {
  if (localStorage.length > 0 && localStorage.switcherValue !== null) {
    switcherValue = parseInt(localStorage.getItem("switcherValue"));
  } else {
    switcherValue = 3;
  }
  const root = document.documentElement;
  if (switcherValue == 1) {
    root.style.setProperty("--color-primary", "#e25e35");
    root.style.setProperty("--color-secondary", "#864107");
    root.style.setProperty("--color-terciary", "rgb(255, 188, 141)");
  } else if (switcherValue === 2) {
    root.style.setProperty("--color-primary", "#a74f6c");
    root.style.setProperty("--color-secondary", "rgb(86, 32, 50)");
    root.style.setProperty("--color-terciary", "rgb(255, 179, 174)");
  } else if (switcherValue === 3) {
    root.style.setProperty("--color-primary", "#3f99bd");
    root.style.setProperty("--color-secondary", "#375663");
    root.style.setProperty("--color-terciary", "#fff4ce");
  } else if (switcherValue === 4) {
    root.style.setProperty("--color-primary", "#9051ff");
    root.style.setProperty("--color-secondary", "#0e4e56");
    root.style.setProperty("--color-terciary", "rgb(157, 225, 255)");
  }
}

function switchTheme() {
  const root = document.documentElement;
  if (switcherValue !== 4) {
    switcherValue++;
  } else {
    switcherValue = 1;
  }
  if (switcherValue == 1) {
    root.style.setProperty("--color-primary", "#e25e35");
    root.style.setProperty("--color-secondary", "#864107");
    root.style.setProperty("--color-terciary", "rgb(255, 188, 141)");
  } else if (switcherValue === 2) {
    root.style.setProperty("--color-primary", "#a74f6c");
    root.style.setProperty("--color-secondary", "rgb(86, 32, 50)");
    root.style.setProperty("--color-terciary", "rgb(255, 179, 174)");
  } else if (switcherValue === 3) {
    root.style.setProperty("--color-primary", "#3f99bd");
    root.style.setProperty("--color-secondary", "#375663");
    root.style.setProperty("--color-terciary", "#fff4ce");
  } else if (switcherValue === 4) {
    root.style.setProperty("--color-primary", "#9051ff");
    root.style.setProperty("--color-secondary", "#0e4e56");
    root.style.setProperty("--color-terciary", "rgb(157, 225, 255)");
  }
  localStorage.setItem("switcherValue", JSON.stringify(switcherValue));
}
