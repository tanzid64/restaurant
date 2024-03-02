const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("close-icon");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);


menuIcon.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        })
        tab.classList.add("active");
    })
})
