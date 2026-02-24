document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");
  const yearEl = document.getElementById("year");
  const themeToggle = document.querySelector(".theme-toggle");
  const themeLabel = document.querySelector("[data-theme-label]");
  const body = document.body;

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("is-open");
    });

    navList.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        navList.classList.remove("is-open");
      }
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  const applyTheme = (mode) => {
    if (mode === "light") {
      body.classList.add("theme-light");
      if (themeLabel) themeLabel.textContent = "Light";
    } else {
      body.classList.remove("theme-light");
      if (themeLabel) themeLabel.textContent = "Dark";
    }
  };

  const storedTheme = window.localStorage.getItem("kr-theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    applyTheme(storedTheme);
  } else {
    // Default to light theme on first visit
    applyTheme("light");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = body.classList.contains("theme-light");
      const next = isLight ? "dark" : "light";
      applyTheme(next);
      window.localStorage.setItem("kr-theme", next);
    });
  }
});
