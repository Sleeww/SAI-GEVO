const cards = document.querySelectorAll(".tool-card");
const themeToggle = document.querySelector(".theme-toggle");

const storedTheme = localStorage.getItem("sai-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("sai-theme", theme);
  themeToggle?.setAttribute("aria-pressed", String(theme === "dark"));
}

setTheme(initialTheme);

// Keep the prototype lightweight: this only adds focus feedback for keyboard users.
cards.forEach((card) => {
  const link = card.querySelector("a");
  if (!link) return;

  link.addEventListener("focus", () => card.classList.add("is-focused"));
  link.addEventListener("blur", () => card.classList.remove("is-focused"));
});

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});
