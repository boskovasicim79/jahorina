function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    var hamburger_lines = document.querySelector('.hamburger_lines');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    hamburger_lines.classList.toggle('active');
}