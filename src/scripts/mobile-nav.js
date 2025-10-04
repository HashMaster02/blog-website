window.onload = function () {
  document.getElementById("hamburger-icon").addEventListener("click", openNav);
  document
    .getElementById("close-hamburger-menu")
    .addEventListener("click", closeNav);

  function openNav() {
    document.querySelector(".nav-links-mobile").style.padding = "2rem 1rem";
    document.querySelector(".nav-links-mobile").style.width = "200px";
  }

  function closeNav() {
    document.querySelector(".nav-links-mobile").style.padding = "0";
    document.querySelector(".nav-links-mobile").style.width = "0";
  }
};
