function scrollHeader() {
  const head = document.getElementById("header");
  if (this.scrollY >= 50) {
    head.classList.add("Scroll-header");
  }
  if (this.scrollY < 50) {
    head.classList.remove("Scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

let right = document.querySelector(".right");
let card = document.querySelector(".card1");
let left = document.querySelector(".left");
let value = 0;
right.addEventListener("click", () => {
  value -= 20;
  card.style.marginLeft = `${value}%`;
  if (value == -80) {
    right.style = "display:none;";
  }
  if (value != 80) {
    left.style = "display:block;";
  }
});
left.addEventListener("click", () => {
  value += 20;
  card.style.marginLeft = `${value}%`;

  if (value == 0) {
    left.style = "display:none;";
  }
  if (value != -80) {
    right.style = "display:block;";
  }
});

let accordionItems = document.querySelectorAll(".value__accordion-item");
accordionItems.forEach((item) => {
  let accordionHeader = item.querySelector(".value__accordion-header");
  accordionHeader.addEventListener("click", () => {
    let openItem = document.querySelector(".accordion-open");
    toggleItem(item);
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});
const toggleItem = (item) => {
  let accordionContent = item.querySelector(".value__accordion-content");
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrolY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrolY > sectionTop && scrolY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

function showScroll() {
  const scr = document.getElementById("scroll-up");
  if (this.scrollY >= 350) {
    scr.classList.add("show-scroll");
  } else {
    scr.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", showScroll);
