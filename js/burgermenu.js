document.addEventListener("DOMContentLoaded", () => {
  
  //Elements selected from DOM
  const burger = document.querySelector(".burger"); //The burger icon
  const mobileMenu = document.getElementById("mobile-menu"); //The mobile nav menu
  const closeMenu = document.getElementById("close-menu"); //The X in the burger

  //Shows the mobile menu when the burger button is clicked.
  burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  //Hides mobile menu when the closed button is clicked.
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  //Closes mobile menu when clicking a link.
  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
});
