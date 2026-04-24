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

/* FAQ FUNCTIONALITY */
const faqLayout = document.querySelector(".faq-layout");
const faqTitle = document.querySelector(".faqs-title");
const faqTabs = document.querySelectorAll(".faq-tab");
const faqAnswers = document.querySelectorAll(".faq-answer-content");

function closeAllFaqs() {
  faqLayout.classList.remove("faq-open");

  faqAnswers.forEach(answer => {
    answer.classList.remove("active");
  });

  faqTabs.forEach(tab => {
    tab.classList.remove("active");
    tab.setAttribute("aria-expanded", "false");
  });

  faqLayout.style.backgroundColor = "";
}

faqTabs.forEach((tab, index) => {
  tab.setAttribute("aria-expanded", "false");

  tab.addEventListener("click", () => {
    const isAlreadyOpen = tab.classList.contains("active");

    if (isAlreadyOpen) {
      closeAllFaqs();
      return;
    }

    closeAllFaqs();

    faqLayout.classList.add("faq-open");
    tab.classList.add("active");
    tab.setAttribute("aria-expanded", "true");
    faqAnswers[index].classList.add("active");

    const tabColor = window.getComputedStyle(tab).backgroundColor;
    faqLayout.style.backgroundColor = tabColor;
  });
});