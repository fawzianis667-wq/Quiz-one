function toggleSidebar(){

let sidebar = document.getElementById("sidebar");
let content = document.querySelector(".main-content");

sidebar.classList.toggle("active");
content.classList.toggle("shift");

}