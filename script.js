document.addEventListener("DOMContentLoaded", () => {
    const themeSelect = document.getElementById("theme-select");
    const listStyleSelect = document.getElementById("list-style-select");
    const dynamicList = document.getElementById("dynamic-list"); // Correctly targets the <ul> element

    // Populate list dynamically
    const items = ["Blue", "Red", "Yellow", "Green", "Orange"];
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        dynamicList.appendChild(li);
    });

    // Load preferences from localStorage
    const savedTheme = localStorage.getItem("theme");
    const savedListStyle = localStorage.getItem("listStyle");

    if (savedTheme) {
        document.body.className = savedTheme;
        themeSelect.value = savedTheme;
    }

    if (savedListStyle) {
        dynamicList.className = savedListStyle; // Apply the saved style to the <ul>
        listStyleSelect.value = savedListStyle;
    }

    // Event listener for theme selection
    themeSelect.addEventListener("change", (e) => {
        const theme = e.target.value;
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    });

    // Event listener for list style selection
    listStyleSelect.addEventListener("change", (e) => {
        const style = e.target.value;
        dynamicList.className = style; // Apply the selected style to the <ul>
        localStorage.setItem("listStyle", style);
    });
});


