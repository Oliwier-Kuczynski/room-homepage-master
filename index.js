const hamburger = document.querySelector("[data-burger-menu]");

hamburger.addEventListener("click", openMobileMenu);

let isNavOpen = false;

function openMobileMenu() {
  if (!isNavOpen) {
    hamburger.childNodes[1].src = "../images/icon-close.svg";
    isNavOpen = true;
  } else {
    hamburger.childNodes[1].src = "../images/icon-hamburger.svg";
    isNavOpen = false;
  }

  const logo = document.querySelector("[data-logo]");
  logo.classList.toggle("active");

  const nav = document.querySelector("[data-nav]");
  nav.classList.toggle("active");

  const navLinks = document.querySelector("[data-nav-links]");
  navLinks.classList.toggle("active");
}

//slides
let slideCounter = 1;

const leftNavigationArrow = document.querySelector(
  "[data-left-navigation-arrow]"
);

const rightNavigationArrow = document.querySelector(
  "[data-right-navigation-arrow]"
);

leftNavigationArrow.addEventListener("click", () => {
  slide(slideCounter--);
});

rightNavigationArrow.addEventListener("click", () => {
  slide(slideCounter++);
});

function slide(plusOrMinus) {
  plusOrMinus;

  if (slideCounter === 0) {
    slideCounter = 3;
  } else if (slideCounter === 4) {
    slideCounter = 1;
  }

  const headerColumnLeft = document.querySelector("[data-header-column-left]");
  const headerColumnRightTitle = document.querySelector(
    "[data-header-column-right-title]"
  );
  const headerColumnRightDescription = document.querySelector(
    "[data-header-column-right-description]"
  );

  leftNavigationArrow.style.pointerEvents = "none";
  rightNavigationArrow.style.pointerEvents = "none";

  switch (slideCounter) {
    case 1:
      headerColumnLeft.style.backgroundImage =
        "url('./images/desktop-image-hero-1.jpg')";

      headerColumnLeft.classList.add("fade-in");

      headerColumnRightTitle.textContent =
        "Discover innovative ways to decorate";

      headerColumnRightDescription.textContent =
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
      break;

    case 2:
      headerColumnLeft.style.backgroundImage =
        "url('./images/desktop-image-hero-2.jpg')";

      headerColumnLeft.classList.add("fade-in");

      headerColumnRightTitle.textContent =
        "We are available all across the globe";

      headerColumnRightDescription.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`;
      break;

    case 3:
      headerColumnLeft.style.backgroundImage =
        "url('./images/desktop-image-hero-3.jpg')";

      headerColumnLeft.classList.add("fade-in");

      headerColumnRightTitle.textContent =
        "Manufactured with the best materials";

      headerColumnRightDescription.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`;
      break;
  }

  headerColumnLeft.addEventListener("animationend", () => {
    headerColumnLeft.classList.remove("fade-in");

    leftNavigationArrow.style.pointerEvents = "all";
    rightNavigationArrow.style.pointerEvents = "all";
  });
}
