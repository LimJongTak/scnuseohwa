function toggleMenu() {
    const menu = document.getElementById('hamburger-menu');
    const menuBar = document.getElementById('menu-bar');
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        menuBar.classList.remove("open");
    } else {
        menu.style.display = "flex";
        menuBar.classList.add("open");
    }
}
