const menuBtn = document.querySelector(".menu-icon");
const searchBtn = document.querySelector(".search-icon");
const crossBtn = document.querySelector(".cross-icon");
const searchForm = document.querySelector(".search");
const navItems = document.querySelector(".nav-items");

menuBtn.onclick = () => {
    navItems.classList.add("active");
    menuBtn.classList.add("hide");

}