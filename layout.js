document.addEventListener("DOMContentLoaded", function() {

  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      setupNavbar();
    });

  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

});

function setupNavbar(){

  // Active link
  const links = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
      if(link.getAttribute("href") === currentPage){
          link.classList.add("active");
      }
  });

  // Mobile toggle
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", function(){
      navLinks.classList.toggle("show");
  });

                          }
