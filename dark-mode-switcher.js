
const modeToggleBtn =  document.querySelector('.dark-mode-btn')

let isDarkMode = false;

// Check if the mode preference is stored in localStorage
const storedMode = localStorage.getItem("darkMode");
if (storedMode === "true") {
    isDarkMode = true;
    document.body.classList.add("dark");
}

modeToggleBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark", isDarkMode);

    // Store the mode preference in localStorage
    localStorage.setItem("darkMode", isDarkMode.toString());
});