const accordion = document.querySelector(".semester-accordion");
const toggleButtons = document.querySelectorAll(".semester-toggle");
const semesterPanels = document.querySelectorAll(".semester-panel");
const semesterLinks = document.querySelectorAll(".semester-nav a");

function updateAccordionState() {
  if (!accordion) return;

  const hasOpenPanel = document.querySelector(".semester-panel.open");

  if (hasOpenPanel) {
    accordion.classList.add("has-open-panel");
  } else {
    accordion.classList.remove("has-open-panel");
  }
}

function closeAllPanels() {
  semesterPanels.forEach(panel => {
    panel.classList.remove("open");

    const button = panel.querySelector(".semester-toggle");
    if (button) {
      button.textContent = "+";
      button.setAttribute("aria-expanded", "false");
    }
  });

  updateAccordionState();
}

function openPanel(panel) {
  closeAllPanels();

  panel.classList.add("open");

  const button = panel.querySelector(".semester-toggle");
  if (button) {
    button.textContent = "-";
    button.setAttribute("aria-expanded", "true");
  }

  updateAccordionState();
}

toggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    const panel = button.closest(".semester-panel");
    const isOpen = panel.classList.contains("open");

    if (isOpen) {
      closeAllPanels();
    } else {
      openPanel(panel);
    }
  });
});

semesterLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const targetId = link.getAttribute("href").replace("#", "");
    const targetPanel = document.getElementById(targetId);

    if (!targetPanel) return;

    openPanel(targetPanel);

    targetPanel.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

const mobileStickyNav = document.getElementById("mobile-sticky-nav");
const siteHeader = document.querySelector(".index-header");
const mobileHamburger = document.getElementById("mobile-hamburger");
const mobileSemesterLinks = document.querySelectorAll(".mobile-semester-menu a");

function handleStickyNav() {
  if (!mobileStickyNav || !siteHeader) return;

  if (window.innerWidth > 478) {
    mobileStickyNav.classList.remove("visible");
    mobileStickyNav.classList.remove("menu-open");

    if (mobileHamburger) {
      mobileHamburger.setAttribute("aria-expanded", "false");
    }
    return;
  }

  const headerBottom = siteHeader.offsetTop + siteHeader.offsetHeight;
  const scrolledPastHeader = window.scrollY > headerBottom;

  if (scrolledPastHeader) {
    mobileStickyNav.classList.add("visible");
  } else {
    mobileStickyNav.classList.remove("visible");
    mobileStickyNav.classList.remove("menu-open");

    if (mobileHamburger) {
      mobileHamburger.setAttribute("aria-expanded", "false");
    }
  }
}

function toggleMobileMenu() {
  if (!mobileStickyNav || !mobileHamburger) return;

  const isOpen = mobileStickyNav.classList.contains("menu-open");

  if (isOpen) {
    mobileStickyNav.classList.remove("menu-open");
    mobileHamburger.setAttribute("aria-expanded", "false");
  } else {
    mobileStickyNav.classList.add("menu-open");
    mobileHamburger.setAttribute("aria-expanded", "true");
  }
}

if (mobileStickyNav && siteHeader) {
  window.addEventListener("scroll", handleStickyNav);
  window.addEventListener("resize", handleStickyNav);
  handleStickyNav();
}

if (mobileHamburger) {
  mobileHamburger.addEventListener("click", event => {
    event.stopPropagation();
    toggleMobileMenu();
  });
}

if (mobileStickyNav && mobileHamburger) {
  document.addEventListener("click", event => {
    const clickedInsideNav = mobileStickyNav.contains(event.target);

    if (!clickedInsideNav) {
      mobileStickyNav.classList.remove("menu-open");
      mobileHamburger.setAttribute("aria-expanded", "false");
    }
  });
}

mobileSemesterLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const targetId = link.getAttribute("href").replace("#", "");
    const targetPanel = document.getElementById(targetId);

    if (!targetPanel) return;

    openPanel(targetPanel);

    mobileStickyNav.classList.remove("menu-open");
    mobileHamburger.setAttribute("aria-expanded", "false");

    targetPanel.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

updateAccordionState();