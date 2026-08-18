import AOS from "aos";
import lozad from "lozad";
import {
  setBackgroundElement,
  setHoverBackgroundElement,
  buttonToTop,
  menuSpy,
  stickElementToEdge,
  initCategoryFilter,
  countUpInit,
} from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";
$(document).ready(function () {
  setBackgroundElement();
  setHoverBackgroundElement();
  stickElementToEdge();
  menuSpy();
  countUpInit();
  buttonToTop();
  header.init();
  swiperInit();
  initCategoryFilter();
});

/*==================== Aos Init ====================*/
AOS.init({
  offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

window.FE = {
  lozad: observer.observe,
};
