// // import Swiper from "swiper";
// // import {
// //   Autoplay,
// //   EffectFade,
// //   Grid,
// //   Mousewheel,
// //   Navigation,
// //   Pagination,
// // } from "swiper/modules";

// // /**
// //  * @param swiperInit
// //  */
// // export function swiperInit() {
// //   $(".swiper-column-auto").each(function (index) {
// //     const $this = $(this);
// //     // Configuration flagsvideoSetting
// //     const config = {
// //       loop: $this.hasClass("swiper-loop"),
// //       touchMove: $this.hasClass("allow-touchMove") || true,
// //       mouseWheel: $this.hasClass("allow-mouseWheel")
// //         ? { forceToAxis: true }
// //         : false,
// //       autoHeight: $this.hasClass("auto-height"),
// //       hasVideo: $this.hasClass("auto-detect-video"),
// //       progressbar: $this.hasClass("progressbar"),
// //       time: $this.attr("data-time") || 3500,
// //       autoplay: $this.hasClass("autoplay"),
// //     };

// //     // Add unique identifier class
// //     $this.addClass(`swiper-column-auto-id-${index}`);

// //     // Create swiper with optimized options
// //     new Swiper(`.swiper-column-auto-id-${index} .swiper`, {
// //       modules: [Navigation, Pagination, Mousewheel],
// //       speed: 500,
// //       observer: true,
// //       observeParents: true,
// //       spaceBetween: 0,
// //       loop: config.loop,
// //       ...(config.autoplay && {
// //         autoplay: {
// //           delay: config.time,
// //         },
// //       }),
// //       slidesPerView: "auto",
// //       pagination: {
// //         el: `.swiper-column-auto-id-${index} .swiper-pagination`,
// //         clickable: true,
// //         ...(config.progressbar && {
// //           type: "progressbar",
// //         }),
// //       },
// //       mousewheel: config.mouseWheel,
// //       allowTouchMove: config.touchMove,
// //       navigation: {
// //         prevEl: `.swiper-column-auto-id-${index} .btn-prev`,
// //         nextEl: `.swiper-column-auto-id-${index} .btn-next`,
// //       },
// //       watchSlidesProgress: true,
// //       autoHeight: config.autoHeight,
// //       on: {
// //         init: function () {},
// //         slideChange: function () {},
// //       },
// //     });
// //   });
// //   /*
// //    * About Processes
// //    * --------------------------------------------------
// //    * Click process item -> change swiper slide
// //    * Swiper slide change -> update active process item
// //    */
// //   if ($this.hasClass("about-processes-swiper")) {
// //     const $processItems = $this
// //       .closest(".about-processes")
// //       .find(".about-processes-list .process-item");

// //     const setActiveProcess = (index) => {
// //       $processItems.removeClass("active");

// //       $processItems.eq(index).addClass("active");

// //       $processItems.find(".process-item__icon").text("+");

// //       $processItems.eq(index).find(".process-item__icon").text("−");
// //     };

// //     // Swiper -> Process item
// //     swiper.on("slideChange", function () {
// //       setActiveProcess(this.realIndex);
// //     });

// //     // Process item -> Swiper
// //     $processItems.on("click", function () {
// //       const index = Number($(this).attr("data-index"));

// //       if (Number.isNaN(index)) {
// //         return;
// //       }

// //       swiper.slideToLoop(index);

// //       setActiveProcess(index);
// //     });

// //     // Initial active state
// //     setActiveProcess(swiper.realIndex);
// //   }
// //   new Swiper(".section-home-banner .swiper", {
// //     slidesPerView: 1,
// //     spaceBetween: 0,
// //     speed: 1000,
// //     loop: true,
// //     effect: "fade",
// //     autoplay: {
// //       delay: 3500,
// //     },
// //     modules: [Pagination, Navigation, Autoplay, EffectFade],
// //     pagination: {
// //       el: ".section-home-banner .swiper-pagination",
// //       clickable: true,
// //       renderBullet: function (index, className) {
// //         const slide = this.slides[index];
// //         const title = slide.getAttribute("data-title") || `Slide ${index + 1}`;
// //         return `<span class="${className}">${title}</span>`;
// //       },
// //     },
// //     navigation: {
// //       nextEl: ".section-home-banner .btn-next",
// //       prevEl: ".section-home-banner .btn-prev",
// //     },
// //   });
// // }

// import Swiper from "swiper";
// import {
//   Autoplay,
//   EffectFade,
//   Mousewheel,
//   Navigation,
//   Pagination,
// } from "swiper/modules";

// /**
//  * @param swiperInit
//  */
// export function swiperInit() {
//   /*
//    * Swiper Column Auto
//    * --------------------------------------------------
//    */
//   $(".swiper-column-auto").each(function (index) {
//     const $this = $(this);

//     const config = {
//       loop: $this.hasClass("swiper-loop"),
//       touchMove: $this.hasClass("allow-touchMove"),
//       mouseWheel: $this.hasClass("allow-mouseWheel")
//         ? { forceToAxis: true }
//         : false,
//       autoHeight: $this.hasClass("auto-height"),
//       progressbar: $this.hasClass("progressbar"),
//       time: $this.attr("data-time") || 3500,
//       autoplay: $this.hasClass("autoplay"),
//     };

//     $this.addClass(`swiper-column-auto-id-${index}`);

//     const swiper = new Swiper(`.swiper-column-auto-id-${index} .swiper`, {
//       modules: [Navigation, Pagination, Mousewheel],

//       speed: 500,
//       observer: true,
//       observeParents: true,

//       spaceBetween: 0,
//       loop: config.loop,

//       slidesPerView: "auto",

//       allowTouchMove: config.touchMove,
//       mousewheel: config.mouseWheel,

//       autoHeight: config.autoHeight,

//       ...(config.autoplay && {
//         autoplay: {
//           delay: config.time,
//         },
//       }),

//       pagination: {
//         el: `.swiper-column-auto-id-${index} .swiper-pagination`,
//         clickable: true,
//         ...(config.progressbar && {
//           type: "progressbar",
//         }),
//       },

//       navigation: {
//         prevEl: `.swiper-column-auto-id-${index} .btn-prev`,
//         nextEl: `.swiper-column-auto-id-${index} .btn-next`,
//       },

//       watchSlidesProgress: true,
//     });

//     /*
//      * About Processes
//      * --------------------------------------------------
//      * Click process item -> change swiper slide
//      * Swiper slide change -> update active process item
//      */
//     if ($this.hasClass("about-processes-swiper")) {
//       const $processItems = $this
//         .closest(".about-processes")
//         .find(".about-processes-list .process-item");

//       const setActiveProcess = (index) => {
//         $processItems.removeClass("active");
//         $processItems.eq(index).addClass("active");

//         $processItems.find(".process-item__icon").text("+");
//         $processItems.eq(index).find(".process-item__icon").text("−");
//       };

//       swiper.on("slideChange", function () {
//         setActiveProcess(this.realIndex);
//       });

//       $processItems.on("click", function () {
//         const index = Number($(this).attr("data-index"));

//         if (Number.isNaN(index)) {
//           return;
//         }

//         swiper.slideToLoop(index);
//         setActiveProcess(index);
//       });

//       setActiveProcess(swiper.realIndex);
//     }
//   });

//   /*
//    * Home Banner
//    * --------------------------------------------------
//    */
//   new Swiper(".section-home-banner .swiper", {
//     modules: [Pagination, Navigation, Autoplay, EffectFade],

//     slidesPerView: 1,
//     spaceBetween: 0,
//     speed: 1000,

//     loop: true,
//     effect: "fade",

//     autoplay: {
//       delay: 3500,
//     },

//     pagination: {
//       el: ".section-home-banner .swiper-pagination",
//       clickable: true,

//       renderBullet: function (index, className) {
//         const slide = this.slides[index];
//         const title = slide?.getAttribute("data-title") || `Slide ${index + 1}`;

//         return `<span class="${className}">${title}</span>`;
//       },
//     },

//     navigation: {
//       nextEl: ".section-home-banner .btn-next",
//       prevEl: ".section-home-banner .btn-prev",
//     },
//   });

//   /*
//    * About History
//    * --------------------------------------------------
//    */
//   $(".about-history-swiper").each(function (index) {
//     const $this = $(this);

//     // Add unique class to avoid conflict if there are
//     // multiple history swipers on the same page.
//     $this.addClass(`about-history-swiper-${index}`);

//     new Swiper(`.about-history-swiper-${index}`, {
//       modules: [Pagination],

//       slidesPerView: "auto",
//       centeredSlides: false,

//       spaceBetween: -20,
//       speed: 500,

//       loop: false,

//       observer: true,
//       observeParents: true,

//       pagination: {
//         el: `.about-history-swiper-${index} .swiper-pagination`,
//         clickable: true,
//       },

//       breakpoints: {
//         768: {
//           spaceBetween: 40,
//         },

//         1200: {
//           spaceBetween: 80,
//         },
//       },
//     });
//   });
// }
import Swiper from "swiper";
import { EffectFade, Mousewheel, Navigation, Pagination } from "swiper/modules";

/**
 * @param swiperInit
 */
export function swiperInit() {
  /*
   * Swiper Column Auto
   * --------------------------------------------------
   */
  $(".swiper-column-auto").each(function (index) {
    const $this = $(this);

    const isAboutProcesses = $this.hasClass("about-processes-swiper");

    const config = {
      loop: $this.hasClass("swiper-loop"),

      touchMove: $this.hasClass("allow-touchMove"),

      mouseWheel: $this.hasClass("allow-mouseWheel")
        ? {
            forceToAxis: true,
          }
        : false,

      autoHeight: $this.hasClass("auto-height"),

      progressbar: $this.hasClass("progressbar"),

      time: $this.attr("data-time") || 3500,

      autoplay: $this.hasClass("autoplay"),
    };

    /*
     * Unique class
     */
    $this.addClass(`swiper-column-auto-id-${index}`);

    /*
     * ==================================================
     * SWIPER
     * ==================================================
     */
    const swiper = new Swiper(`.swiper-column-auto-id-${index} .swiper`, {
      modules: [Navigation, Pagination, Mousewheel],

      /*
       * About Processes
       * Center Focus
       */
      ...(isAboutProcesses
        ? {
            /*
             * Giống CodePen:
             * 5 slides nằm trên một hàng
             * slide active ở chính giữa.
             */
            slidesPerView: 5,

            centeredSlides: true,

            loop: true,

            spaceBetween: 0,

            speed: 500,

            grabCursor: true,

            allowTouchMove: true,

            watchSlidesProgress: true,
          }
        : {
            /*
             * Default Swiper
             */
            slidesPerView: "auto",

            spaceBetween: 0,

            loop: config.loop,

            speed: 500,

            allowTouchMove: config.touchMove,

            mousewheel: config.mouseWheel,

            autoHeight: config.autoHeight,
          }),

      observer: true,

      observeParents: true,

      /*
       * Loop cho các swiper thông thường
       */
      ...(isAboutProcesses
        ? {}
        : {
            loop: config.loop,
          }),

      /*
       * Autoplay
       */
      ...(config.autoplay && {
        autoplay: {
          delay: config.time,
        },
      }),

      /*
       * Pagination
       */
      pagination: {
        el: `.swiper-column-auto-id-${index} .swiper-pagination`,

        clickable: true,

        ...(config.progressbar && {
          type: "progressbar",
        }),
      },

      /*
       * Navigation
       */
      navigation: {
        prevEl: `.swiper-column-auto-id-${index} .btn-prev`,

        nextEl: `.swiper-column-auto-id-${index} .btn-next`,
      },

      watchSlidesProgress: true,
    });

    /*
     * ==================================================
     * ABOUT PROCESSES
     * ==================================================
     */
    if (isAboutProcesses) {
      const $processItems = $this
        .closest(".about-processes")
        .find(".processes-list .process-item");

      /*
       * -----------------------------------------------
       * Set active process
       * -----------------------------------------------
       */
      const setActiveProcess = (index) => {
        if (!$processItems.length) {
          return;
        }

        $processItems.removeClass("active");

        $processItems.find(".process-item__icon").text("+");

        const $activeItem = $processItems.eq(index);

        if (!$activeItem.length) {
          return;
        }

        $activeItem.addClass("active");

        $activeItem.find(".process-item__icon").text("−");
      };

      /*
       * -----------------------------------------------
       * Swiper -> Process Item
       * -----------------------------------------------
       */
      swiper.on("slideChange", function () {
        setActiveProcess(this.realIndex);
      });

      /*
       * -----------------------------------------------
       * Process Item -> Swiper
       * -----------------------------------------------
       */
      $processItems.on("click", function () {
        const index = Number($(this).attr("data-index"));

        if (Number.isNaN(index)) {
          return;
        }

        /*
         * Update accordion immediately
         */
        setActiveProcess(index);

        /*
         * Move swiper
         */
        swiper.slideToLoop(index);
      });

      /*
       * -----------------------------------------------
       * Initial state
       * -----------------------------------------------
       */
      setActiveProcess(swiper.realIndex);
    }
  });

  /*
   * Home Banner
   * --------------------------------------------------
   */
  $(".home-banner").each(function (index) {
    const $banner = $(this);

    $banner.addClass(`home-banner-${index}`);

    const swiper = new Swiper(`.home-banner-${index} .swiper`, {
      modules: [Navigation, EffectFade],

      slidesPerView: 1,

      spaceBetween: 0,

      speed: 1000,

      loop: true,

      effect: "fade",

      allowTouchMove: true,

      observer: true,

      observeParents: true,

      navigation: {
        nextEl: `.home-banner-${index} .btn-right`,

        prevEl: `.home-banner-${index} .btn-left`,
      },

      on: {
        init(swiper) {
          playActiveVideo(swiper);
        },

        slideChangeTransitionStart(swiper) {
          pauseAllVideos(swiper);
        },

        slideChangeTransitionEnd(swiper) {
          playActiveVideo(swiper);
        },
      },
    });

    /*
     * Pause all videos
     */
    function pauseAllVideos(swiper) {
      swiper.slides.forEach((slide) => {
        const video = slide.querySelector("video");

        if (!video) {
          return;
        }

        video.pause();

        video.currentTime = 0;

        video.onended = null;
      });
    }

    /*
     * Play active video
     */
    function playActiveVideo(swiper) {
      const activeSlide = swiper.slides[swiper.activeIndex];

      if (!activeSlide) {
        return;
      }

      const video = activeSlide.querySelector("video");

      if (!video) {
        return;
      }

      video.currentTime = 0;

      video.onended = () => {
        swiper.slideNext();
      };

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  });

  /*
   * About History
   * --------------------------------------------------
   */
  $(".about-history-swiper").each(function (index) {
    const $this = $(this);

    $this.addClass(`about-history-swiper-${index}`);

    new Swiper(`.about-history-swiper-${index}`, {
      modules: [Pagination],

      slidesPerView: "auto",

      centeredSlides: false,

      spaceBetween: -20,

      speed: 500,

      loop: false,

      observer: true,

      observeParents: true,

      pagination: {
        el: `.about-history-swiper-${index} .swiper-pagination`,

        clickable: true,
      },

      breakpoints: {
        768: {
          spaceBetween: 40,
        },

        1200: {
          spaceBetween: 80,
        },
      },
    });
  });
}
