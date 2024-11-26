let panels = document.querySelectorAll(".panel");
let activePanel = document.querySelector(".active");

for (let panel of panels) {
    panel.addEventListener("click", () => {
        activePanel.classList.remove("active");
        panel.classList.add("active");
        activePanel = panel;
    });
}
