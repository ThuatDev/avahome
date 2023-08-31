// tạo function truyền tham trị
function myFunction(tt, tt2) {
  console.log(tt);
  console.log(`wew ${tt2}`);
}
myFunction("hello world", "hello world 2");

let slideIndex = 1;
let slideInterval;

function autoSlide() {
  plusSlides(1);
}

function startAutoSlide() {
  slideInterval = setInterval(autoSlide, 9000); // Auto slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

function plusSlides(n) {
  stopAutoSlide();
  showSlides((slideIndex += n));
  startAutoSlide();
}

function currentSlide(n) {
  stopAutoSlide();
  showSlides((slideIndex = n));
  startAutoSlide();
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove(
      "fade"
    ); /* Xóa class "fade" trước khi ẩn slide */
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add(
    "fade"
  ); /* Thêm class "fade" khi hiển thị slide */
  dots[slideIndex - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
  startAutoSlide();
});

// fixxed;
// Lấy thẻ header
const header = document.querySelector(".header__container");

// Kích hoạt khi cuộn trang
function checkScrollPosition() {
  if (window.scrollY >= 150) {
    header.classList.add("sticky");
    console.log("adđhello");
  } else {
    header.classList.remove("sticky");
  }
}

// Gọi hàm kiểm tra khi tải trang
checkScrollPosition();

// Lắng nghe sự kiện scroll
window.addEventListener("scroll", checkScrollPosition);
// tính toán sự ẩn hiện lấy ra 2 class
// querySelectorAll(".project-item");
// .project-item và .project-itemm

const projectItems = document.querySelectorAll(".project-item ,.project-itemm");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  projectItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", handleScroll);

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 50 && // Khi mục cách 100px phía dưới màn hình
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
// list2
//   const projectItemsm = document.querySelectorAll(".project-itemm");

// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight)
//   );
// }

// function handleScroll() {
//   projectItemsm.forEach((item) => {
//     if (isInViewport(item)) {
//       item.classList.add("showw");
//     }
//   });
// }

// window.addEventListener("scroll", handleScroll);

// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 50 && // Khi mục cách 100px phía dưới màn hình
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight)
//   );
// }
// nav
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const submenuItems = document.querySelectorAll(".dow");
const overlay = document.querySelector(".overlay");
menuToggle.addEventListener("click", function () {
  mobileMenu.style.left = mobileMenu.style.left === "-300px" ? "0" : "-300px";
  // và cho body màu  xám

  menuToggle.textContent = mobileMenu.style.left === "0px" ? "✕" : "☰";
});

submenuItems.forEach((submenu) => {
  const parentLink = submenu.querySelector("a");
  const arrowIcon = submenu.querySelector("i");

  parentLink.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.classList.toggle("active");
    submenu.classList.toggle("active");
    arrowIcon.classList.toggle("fa-chevron-up");
    arrowIcon.classList.toggle("fa-chevron-down");
  });

  arrowIcon.addEventListener("click", function () {
    submenu.classList.toggle("active");
    arrowIcon.classList.toggle("fa-chevron-up");
    arrowIcon.classList.toggle("fa-chevron-down");
  });
});
// js project
var tabs = document.querySelector(".tabs");

var tabsNav = tabs.querySelectorAll(".tabs__nav .nav-item");

var isAnimation = tabs.dataset.animation;
if (isAnimation === "true" || isAnimation === "false") {
  isAnimation = isAnimation === "true" ? true : false;
}

var animationDuration = tabs.dataset.animationDuration;

animationDuration =
  animationDuration !== undefined ? parseInt(animationDuration) : 200;

tabsNav.forEach(function (tabNav) {
  tabNav.addEventListener("click", function (e) {
    e.preventDefault();
    var tabNavItem = this.parentElement;

    //Loại bỏ class active ở item đang active
    var tabNavItemActive = tabs.querySelector(".tabs__nav .active");
    tabNavItemActive.classList.remove("active");

    //add class active vào item vừa click
    tabNavItem.classList.add("active");

    var hash = this.getAttribute("href");

    if (hash === null || hash === "#") {
      hash = this.dataset.target;
    }

    if (hash !== undefined) {
      //Loại bỏ tab đang active
      var tabPanelActive = tabs.querySelector(
        ".tabs__content .tabs--panel.active"
      );

      tabPanelActive.classList.remove("active");

      var tabPanel = tabs.querySelector(`.tabs__content .tabs--panel${hash}`);
      tabPanel.classList.add("active");

      //Kiểm tra xem animation có được kích hoạt hay không?
      if (isAnimation) {
        //set transtions
        tabPanelActive.style.transitionDuration = animationDuration + "ms";
        tabPanel.style.transitionDuration = animationDuration + "ms";

        setTimeout(function () {
          tabPanelActive.classList.remove("show");
          tabPanel.classList.add("show");
        }, animationDuration);
      } else {
        tabPanelActive.classList.remove("show");
        tabPanel.classList.add("show");
      }
    }
  });
});
