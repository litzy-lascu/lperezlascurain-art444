const themeButtons = document.querySelectorAll(
  "#dark-mode-toggle, #mobile-dark-toggle, #dark-mode-toggle-about, #about-mobile-dark-toggle"
);

const root = document.documentElement;

/* APPLY THEME */
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  updateThemeButtonLabels(theme);
}

/* UPDATE BUTTON LABELS */
function updateThemeButtonLabels(theme) {
  themeButtons.forEach(button => {
    button.textContent = theme === "dark" ? "light mode." : "dark mode.";
  });
}

/* REAL VERSION: 6 AM / 6 PM */
function applyThemeByTime() {
  const currentHour = new Date().getHours();

  if (currentHour >= 18 || currentHour < 6) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }
}

/* BUTTON CLICK TOGGLE */
themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const currentTheme =
      root.getAttribute("data-theme") === "dark" ? "dark" : "light";

    if (currentTheme === "dark") {
      applyTheme("light");
    } else {
      applyTheme("dark");
    }
  });
});
applyThemeByTime();
