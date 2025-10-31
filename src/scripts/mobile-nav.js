window.onload = function () {
  let show = false;
  document.addEventListener("click", function (e) {
    e.stopPropagation();
    const specificDiv = document.querySelector(".nav-links-mobile");

    if (show && !specificDiv.contains(event.target)) {
      closeNav();
    }
  });

  document.getElementById("hamburger-icon").addEventListener("click", openNav);
  document
    .getElementById("close-hamburger-menu")
    .addEventListener("click", closeNav);

  function openNav(e) {
    e.stopPropagation();
    document.querySelector(".nav-links-mobile").style.padding = "2rem 1rem";
    document.querySelector(".nav-links-mobile").style.width = "200px";
    show = true;
  }

  function closeNav() {
    document.querySelector(".nav-links-mobile").style.padding = "0";
    document.querySelector(".nav-links-mobile").style.width = "0";
    show = true;
  }
};
