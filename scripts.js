const sidebar = document.querySelector(".sidebar");
const sidebarButton = document.querySelector(".menu-button");
const searchButton = document.querySelector(".bx-search");

sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

searchButton.addEventListener("click", () => {
  sidebar.classList.add("active");
});
