import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
  //   scrollActive: function () {
  //     let height = $("header").height();
  //     if ($(window).scrollTop() > height) {
  //       $("header").addClass("active");
  //     } else {
  //       $("header").removeClass("active");
  //     }
  //   },
  scrollActive() {
    const headerHeight = document.querySelector(".header").offsetHeight;

    if (window.scrollY > headerHeight) {
      document.querySelector(".header").classList.add("active");
    } else {
      document.querySelector(".header").classList.remove("active");
    }
  },
  mobile: function () {
    $(".header-hamburger").on("click", function () {
      $(this).toggleClass("active");
      $("body").toggleClass("isOpenMenu");
    });
  },
  initVariable: function () {
    const height = $("header").height();
    document.documentElement.style.setProperty(
      "--header-height",
      `${height}px`,
    );
  },
  init: function () {
    headerSearch();
    header.scrollActive();
    header.mobile();
    header.initVariable();
    this.scrollActive();

    window.addEventListener("scroll", () => this.scrollActive());
  },
};
document.addEventListener(
  "scroll",
  function (e) {
    header.scrollActive();
  },
  true,
);
