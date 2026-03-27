


const aboutStickyNav = document.getElementById("about-mobile-sticky-nav");
const aboutHeader = document.querySelector(".about-header");

function handleAboutStickyNav() {
  if (!aboutStickyNav || !aboutHeader) return;

  if (window.innerWidth > 478) {
    aboutStickyNav.classList.remove("visible");
    return;
  }

  const headerBottom = aboutHeader.offsetTop + aboutHeader.offsetHeight;
  const scrolledPastHeader = window.scrollY > headerBottom;

  if (scrolledPastHeader) {
    aboutStickyNav.classList.add("visible");
  } else {
    aboutStickyNav.classList.remove("visible");
  }
}

window.addEventListener("scroll", handleAboutStickyNav);
window.addEventListener("resize", handleAboutStickyNav);
handleAboutStickyNav();