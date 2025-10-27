// ==============================
// DARK MODE TOGGLE SCRIPT
// ==============================

//User's darkmode preference from local storage.
let darkmode = localStorage.getItem("darkmode");

// Select theme switch buttons (desktop and mobile)
const themeSwitch = document.getElementById("theme-switch");
const themeSwitchMobile = document.getElementById("theme-switch-mobile");

// ==============================
// DARK MODE TOGGLE FUNCTIONS
// ==============================
const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "inactive");
};

if (darkmode === "active") enableDarkmode();

function toggleDarkmode() {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
}

themeSwitch?.addEventListener("click", toggleDarkmode);
themeSwitchMobile?.addEventListener("click", toggleDarkmode);
