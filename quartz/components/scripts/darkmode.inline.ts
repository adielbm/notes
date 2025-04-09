// Get user preference (or fallback to system's preference)
const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
const currentTheme = localStorage.getItem("theme") ?? userPref;

// Set the theme immediately on the <html> element
document.documentElement.setAttribute("saved-theme", currentTheme);

// Disable transitions on initial load by adding a class to <html>
document.documentElement.classList.add("disable-theme-toggle-animation");

// Emit a theme change event
const emitThemeChangeEvent = (theme: "light" | "dark") => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  });
  document.dispatchEvent(event);
};

// Initialize the theme toggle after the DOM is ready
document.addEventListener("nav", () => {
  // Switch theme when toggle is changed
  const switchTheme = (e: Event) => {
    const newTheme = (e.target as HTMLInputElement)?.checked ? "dark" : "light";
    document.documentElement.setAttribute("saved-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    emitThemeChangeEvent(newTheme);
  };

  // Listen for changes in prefers-color-scheme and update theme
  const themeChange = (e: MediaQueryListEvent) => {
    const newTheme = e.matches ? "dark" : "light";
    document.documentElement.setAttribute("saved-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    toggleSwitch.checked = e.matches;
    emitThemeChangeEvent(newTheme);
  };

  // Darkmode toggle handling
  const toggleSwitch = document.querySelector("#darkmode-toggle") as HTMLInputElement;

  toggleSwitch.addEventListener("change", switchTheme);

  // Set the initial state of the toggle based on current theme
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }

  // Listen for system preference changes
  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  colorSchemeMediaQuery.addEventListener("change", themeChange);

  // Immediately update the toggle state based on system preference (if not already set)
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }

  // Ensure transitions are disabled initially, and then re-enable them after load
  window.onload = () => {
    // Set the transition state back after page load
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("disable-theme-toggle-animation");
    });
  };
});
