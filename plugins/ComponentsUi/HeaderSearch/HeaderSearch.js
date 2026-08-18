export function headerSearch() {
  const $desktopForm = $("#header-search-form-desktop");
  const $desktopInput = $desktopForm.find("input");
  const $desktopClose = $desktopForm.find(".close");
  const $desktopSubmit = $desktopForm.find("button");

  const $mobileForm = $("#header-search-form-mobile");
  const $mobileInput = $mobileForm.find("input");
  const $mobileSubmit = $mobileForm.find("button");

  /**
   * =========================
   * DESKTOP
   * =========================
   */

  function openDesktopSearch() {
    const $form = $("#header-search-form-desktop");
    const $input = $form.find("input");

    if (!$form.length) {
      console.warn("Desktop search form not found");
      return;
    }

    console.log("OPEN DESKTOP SEARCH");

    $form.addClass("active");
    $("body").addClass("disable");

    setTimeout(() => {
      $input.trigger("focus");
    }, 300);
  }

  function closeDesktopSearch() {
    const $form = $("#header-search-form-desktop");

    if (!$form.length) {
      return;
    }

    $form.removeClass("active");
    $("body").removeClass("disable");
  }

  /**
   * =========================
   * DESKTOP TRIGGER
   * =========================
   *
   * Delegated event:
   * Không phụ thuộc header đã tồn tại
   * tại thời điểm headerSearch() được gọi.
   */
  $(document)
    .off("click.headerSearchDesktop")
    .on(
      "click.headerSearchDesktop",
      ".header-wrapper .header-search",
      function (e) {
        /**
         * Nếu click bên trong form search
         * thì không trigger mở form.
         */
        if ($(e.target).closest("#header-search-form-desktop").length) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        console.log("DESKTOP SEARCH CLICK");

        openDesktopSearch();
      },
    );

  /**
   * =========================
   * DESKTOP FORM
   * =========================
   */

  $(document)
    .off("click.headerSearchForm")
    .on("click.headerSearchForm", "#header-search-form-desktop", function (e) {
      e.stopPropagation();
    });

  /**
   * =========================
   * DESKTOP CLOSE
   * =========================
   */

  $(document)
    .off("click.headerSearchClose")
    .on(
      "click.headerSearchClose",
      "#header-search-form-desktop .close",
      function (e) {
        e.preventDefault();
        e.stopPropagation();

        console.log("DESKTOP SEARCH CLOSE");

        closeDesktopSearch();
      },
    );

  /**
   * =========================
   * DESKTOP SUBMIT
   * =========================
   */

  $(document)
    .off("click.headerSearchSubmit")
    .on(
      "click.headerSearchSubmit",
      "#header-search-form-desktop button",
      function (e) {
        e.preventDefault();
        e.stopPropagation();

        const $input = $("#header-search-form-desktop").find("input");

        submitSearch($input);
      },
    );

  /**
   * =========================
   * MOBILE
   * =========================
   */

  $(document)
    .off("click.headerSearchMobileForm")
    .on(
      "click.headerSearchMobileForm",
      "#header-search-form-mobile",
      function (e) {
        e.stopPropagation();
      },
    );

  /**
   * Mobile submit
   */
  $(document)
    .off("click.headerSearchMobileSubmit")
    .on(
      "click.headerSearchMobileSubmit",
      "#header-search-form-mobile button",
      function (e) {
        e.preventDefault();
        e.stopPropagation();

        const $input = $("#header-search-form-mobile").find("input");

        submitSearch($input);
      },
    );

  /**
   * =========================
   * SEARCH
   * =========================
   */

  function submitSearch($input) {
    const keyword = $.trim($input.val());

    if (!keyword) {
      $input.trigger("focus");
      return;
    }

    window.location.href = `/?s=${encodeURIComponent(keyword)}`;
  }

  /**
   * =========================
   * ENTER KEY
   * =========================
   */

  $(document)
    .off("keydown.headerSearchInput")
    .on(
      "keydown.headerSearchInput",
      "#header-search-form-desktop input, #header-search-form-mobile input",
      function (e) {
        if (e.key !== "Enter") {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        submitSearch($(this));
      },
    );

  /**
   * =========================
   * CLICK OUTSIDE
   * =========================
   */

  $(document)
    .off("click.headerSearchOverlay")
    .on(
      "click.headerSearchOverlay",
      "#header-search-form-desktop",
      function (e) {
        /**
         * Chỉ đóng khi click chính xác vào
         * phần overlay bên ngoài nội dung search.
         *
         * Nếu target chính là #header-search-form-desktop
         * => click overlay.
         *
         * Nếu click vào container / input / button / close
         * => không đóng.
         */
        if (e.target === this) {
          e.preventDefault();
          e.stopPropagation();

          closeDesktopSearch();
        }
      },
    );

  /**
   * =========================
   * ESC
   * =========================
   */

  $(document)
    .off("keyup.headerSearch")
    .on("keyup.headerSearch", function (e) {
      if (e.key === "Escape") {
        closeDesktopSearch();
      }
    });
}
