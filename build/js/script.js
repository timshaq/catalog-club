"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/js/btnBurger.js":
  /*!*****************************!*\
    !*** ./src/js/btnBurger.js ***!
    \*****************************/

  /*! exports provided: default */

  /***/
  function srcJsBtnBurgerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\tconst btnBurger = document.getElementById('btnBurger');\r\n\r\n\tif(!btnBurger) return;\r\n\r\n\tconst menuTooltip = document.getElementById('menuTooltip');\r\n\r\n\tbtnBurger.addEventListener('click', function() {\r\n\r\n\t\tif(menuTooltip.classList.contains('open')) {\r\n\t\t\tmenuTooltip.classList.remove('open');\r\n\t\t} else {\r\n\t\t\tmenuTooltip.classList.add('open');\r\n\t\t\t// menuTooltip.focus();\r\n\t\t\t// menuTooltip.onblur = function(ev) {\r\n\t\t\t// \tif(window.innerWidth < 768) return;\r\n\t\t\t// \tif(ev.relatedTarget === btnBurger) return;\r\n\t\t\t// \tmenuTooltip.classList.remove('open');\r\n\t\t\t// };\r\n\t\t}\r\n\r\n\t})\r\n\r\n\tconst liContainsNL = document.querySelectorAll('.menu-tooltip__li.contains');\r\n\tconst liContainsList = Array.prototype.slice.call(liContainsNL);\r\n\r\n\tconst liNonContainsNL = document.querySelectorAll('.menu-tooltip__li');\r\n\tconst liNonContainsList = Array.prototype.slice.call(liContainsNL);\r\n\r\n\tliContainsList.forEach(li => {\r\n\t\tconsole.log(li)\r\n\t\tli.addEventListener('click', function() {\r\n\t\t\tif(window.innerWidth >= 1200) return;\r\n\r\n\t\t\tif(li.classList.contains('open')) {\r\n\t\t\t\tliNonContainsNL.forEach(li => li.classList.remove('hidden'))\r\n\t\t\t\tli.classList.remove('open')\r\n\t\t\t} else {\r\n\t\t\t\tliNonContainsNL.forEach(li => li.classList.add('hidden'))\r\n\t\t\t\tli.classList.remove('hidden')\r\n\t\t\t\tli.classList.add('open')\r\n\t\t\t}\r\n\r\n\t\t})\r\n\t})\r\n\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/btnBurger.js?");
    /***/
  },

  /***/
  "./src/js/callbackPopup.js":
  /*!*********************************!*\
    !*** ./src/js/callbackPopup.js ***!
    \*********************************/

  /*! exports provided: default */

  /***/
  function srcJsCallbackPopupJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\r\n\tconst callbackPopup = document.getElementById('callbackPopup');\r\n\r\n\tif (!callbackPopup) return;\r\n\r\n\tconst html = document.getElementById('html')\r\n\r\n\tfunction disableScroll() {\r\n\t\thtml.style.overflowX = 'hidden';\r\n\t\thtml.style.overflowY = 'hidden';\r\n\t};\r\n\r\n\tfunction enableScroll() {\r\n\t\thtml.style.overflowX = 'hidden';\r\n\t\thtml.style.overflowY = 'scroll';\r\n\t};\r\n\r\n\tfunction closeEl(el) {\r\n\t\tel.classList.remove('open');\r\n\t\tenableScroll();\r\n\t}\r\n\r\n\tfunction openEl(el) {\r\n\t\tel.classList.add('open');\r\n\t\tdisableScroll();\r\n\t}\r\n\r\n\r\n\t\r\n\r\n\tconst callbackOpenNL = document.querySelectorAll('.callback-btn');\r\n\tconst callbackOpen = Array.prototype.slice.call(callbackOpenNL);;\r\n\tconst callbackClose = document.getElementById('callbackClose');\r\n\r\n\tcallbackOpen.forEach(btn => {\r\n\t\tbtn.addEventListener('click', () => openEl(callbackPopup));\r\n\t})\r\n\r\n\t// callbackClose.addEventListener('click', function() {\r\n\t// \tcloseEl(callbackPopup);\r\n\t// })\r\n\r\n\tcallbackPopup.addEventListener('click', function(ev) {\r\n\t\tif(ev.target === this) closeEl(callbackPopup);\r\n\t})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/callbackPopup.js?");
    /***/
  },

  /***/
  "./src/js/orderAddPopup.js":
  /*!*********************************!*\
    !*** ./src/js/orderAddPopup.js ***!
    \*********************************/

  /*! exports provided: default */

  /***/
  function srcJsOrderAddPopupJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\r\n\r\n\tconst orderAddProduct = document.getElementById('orderAddProduct');\r\n\r\n\tif (!orderAddProduct) return;\r\n\r\n\tconst html = document.getElementById('html')\r\n\r\n\tconst orderAddProductPopup = document.getElementById('orderAddProductPopup')\r\n\r\n\tfunction disableScroll() {\r\n\t\thtml.style.overflowX = 'hidden';\r\n\t\thtml.style.overflowY = 'hidden';\r\n\t};\r\n\r\n\tfunction enableScroll() {\r\n\t\thtml.style.overflowX = 'hidden';\r\n\t\thtml.style.overflowY = 'scroll';\r\n\t};\r\n\r\n\tfunction closeEl(el) {\r\n\t\tel.classList.remove('open');\r\n\t\tenableScroll();\r\n\t}\r\n\r\n\tfunction openEl(el) {\r\n\t\tel.classList.add('open');\r\n\t\tdisableScroll();\r\n\t}\r\n\r\n\torderAddProduct.addEventListener('click', function() {\r\n\t\topenEl(orderAddProductPopup);\r\n\t})\r\n\r\n\torderAddProductPopup.addEventListener('click', function(ev) {\r\n\t\tif(ev.target === this) closeEl(orderAddProductPopup);\r\n\t})\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/orderAddPopup.js?");
    /***/
  },

  /***/
  "./src/js/printTable.js":
  /*!******************************!*\
    !*** ./src/js/printTable.js ***!
    \******************************/

  /*! exports provided: default */

  /***/
  function srcJsPrintTableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\nconst printBtn = document.getElementById('printBtn');\r\n\r\nif(!printBtn) return;\r\n\r\nconst tableForPrint = document.getElementById('tableForPrint');\r\n\r\n\r\nprintBtn.addEventListener('click', () => window.print())\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/printTable.js?");
    /***/
  },

  /***/
  "./src/js/reviews.js":
  /*!***************************!*\
    !*** ./src/js/reviews.js ***!
    \***************************/

  /*! exports provided: default */

  /***/
  function srcJsReviewsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\r\n\tconst reviewsPopup = document.getElementById('reviewsPopup');\r\n\r\n\tif (!reviewsPopup) return;\r\n\r\n\tconst html = document.getElementById('html')\r\n\r\n\tfunction disableScroll() {\r\n\t\thtml.style.overflowX = 'hidden';\r\n\t\thtml.style.overflowY = 'hidden';\r\n\t};\r\n\r\n\tfunction enableScroll() {\r\n\t\thtml.style.overflowX = 'hidden';\r\n\t\thtml.style.overflowY = 'scroll';\r\n\t};\r\n\r\n\tfunction closeEl(el) {\r\n\t\tel.classList.remove('open');\r\n\t\tenableScroll();\r\n\t}\r\n\r\n\tfunction openEl(el) {\r\n\t\tel.classList.add('open');\r\n\t\tdisableScroll();\r\n\t}\r\n\r\n\r\n\tconst reviewsPopupOpen = document.getElementById('reviewsPopupOpen');\r\n\tconst reviewsPopupClose = document.getElementById('reviewsPopupClose');\r\n\r\n\treviewsPopupOpen.addEventListener('click', () => openEl(reviewsPopup));\r\n\r\n\treviewsPopupClose.addEventListener('click', function() {\r\n\t\tcloseEl(reviewsPopup);\r\n\t})\r\n\r\n\treviewsPopup.addEventListener('click', function(ev) {\r\n\t\tif(ev.target === this) closeEl(reviewsPopup);\r\n\t})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/reviews.js?");
    /***/
  },

  /***/
  "./src/js/saleCard.js":
  /*!****************************!*\
    !*** ./src/js/saleCard.js ***!
    \****************************/

  /*! exports provided: default */

  /***/
  function srcJsSaleCardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\tconst cardsNL = document.querySelectorAll('.sale-card');\r\n\r\n\tif (!cardsNL.length) return;\r\n\r\n\r\n\tconst cardsList = Array.prototype.slice.call(cardsNL);\r\n\r\n\tcardsList.forEach(card => {\r\n\r\n\t\tconst btn = card.querySelector('button.sale-card__link');\r\n\r\n\t\tbtn.addEventListener('click', function() {\r\n\t\t\tif(card.classList.contains('open')) {\r\n\t\t\t\tcard.classList.remove('open');\r\n\t\t\t\tbtn.innerText = 'Подробнее >>';\r\n\t\t\t} else {\r\n\t\t\t\tcard.classList.add('open');\r\n\t\t\t\tbtn.innerText = 'Скрыть >>'\r\n\t\t\t}\r\n\t\t})\r\n\r\n\t})\r\n});\n\n//# sourceURL=webpack:///./src/js/saleCard.js?");
    /***/
  },

  /***/
  "./src/js/script.js":
  /*!**************************!*\
    !*** ./src/js/script.js ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcJsScriptJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders.js */ \"./src/js/sliders.js\");\n/* harmony import */ var _callbackPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callbackPopup.js */ \"./src/js/callbackPopup.js\");\n/* harmony import */ var _btnBurger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btnBurger.js */ \"./src/js/btnBurger.js\");\n/* harmony import */ var _saleCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saleCard.js */ \"./src/js/saleCard.js\");\n/* harmony import */ var _reviews_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reviews.js */ \"./src/js/reviews.js\");\n/* harmony import */ var _weekThingPopups_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weekThingPopups.js */ \"./src/js/weekThingPopups.js\");\n/* harmony import */ var _serviceFaq_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceFaq.js */ \"./src/js/serviceFaq.js\");\n/* harmony import */ var _printTable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./printTable.js */ \"./src/js/printTable.js\");\n/* harmony import */ var _orderAddPopup_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orderAddPopup.js */ \"./src/js/orderAddPopup.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n\tvar header = document.getElementById('header');\r\n\r\n\tObject(_sliders_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\tObject(_callbackPopup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n\tObject(_btnBurger_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\t\r\n\tObject(_saleCard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n\tObject(_reviews_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n\tObject(_weekThingPopups_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\r\n\tObject(_serviceFaq_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\r\n\tObject(_printTable_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\r\n\tObject(_orderAddPopup_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\r\n\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");
    /***/
  },

  /***/
  "./src/js/serviceFaq.js":
  /*!******************************!*\
    !*** ./src/js/serviceFaq.js ***!
    \******************************/

  /*! exports provided: default */

  /***/
  function srcJsServiceFaqJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\tconst serviceFaqLiNL = document.querySelectorAll('.service-faq .service-faq__li');\r\n\r\n\tif (!serviceFaqLiNL.length) return;\r\n\r\n\r\n\tconst serviceFaqLiList = Array.prototype.slice.call(serviceFaqLiNL);\r\n\r\n\tserviceFaqLiList.forEach(li => {\r\n\t\tli.addEventListener('click', function() {\r\n\t\t\tif(li.classList.contains('open')) {\r\n\t\t\t\tli.classList.remove('open');\r\n\t\t\t} else {\r\n\t\t\t\tli.classList.add('open');\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/serviceFaq.js?");
    /***/
  },

  /***/
  "./src/js/sliders.js":
  /*!***************************!*\
    !*** ./src/js/sliders.js ***!
    \***************************/

  /*! exports provided: default */

  /***/
  function srcJsSlidersJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\tconst previewSlider = new Swiper('#previewSlider', {\r\n\t\tloop: true,\r\n\t\tcenteredSlides: true,\r\n\t\tpagination: {\r\n\t\t\tel: '#previewPagination',\r\n\t\t\ttype: 'bullets',\r\n\t\t\tclickable: true,\r\n\t\t},\r\n\t\tnavigation: {\r\n\t\t\tnextEl: '#previewNextBtn',\r\n\t\t\tprevEl: '#previewPrevBtn'\r\n\t\t},\r\n\t\tbreakpoints: {\r\n\t\t\t320: {\r\n\t\t\t\tslidesPerView: 1,\r\n\t\t\t\tspaceBetween: 0,\r\n\t\t\t},\r\n\t\t\t768: {\r\n\t\t\t\tslidesPerView: 1.58,\r\n\t\t\t\tspaceBetween: 30,\r\n\t\t\t},\r\n\t\t\t1200: {\r\n\t\t\t\tslidesPerView: 1.622,\r\n\t\t\t\tspaceBetween: 30,\r\n\t\t\t},\r\n\t\t},\r\n\r\n\t})\r\n\r\n\tconst brandsSlider = new Swiper('#brandsSlider', {\r\n\t\tnavigation: {\r\n\t\t\tnextEl: '#brandsNextBtn',\r\n\t\t\tprevEl: '#brandsPrevBtn'\r\n\t\t},\r\n\t\tbreakpoints: {\r\n\t\t\t320: {\r\n\t\t\t\tslidesPerView: 2,\r\n\t\t\t\tspaceBetween: 10,\r\n\t\t\t},\r\n\t\t\t768: {\r\n\t\t\t\tslidesPerView: 5,\r\n\t\t\t\tspaceBetween: 23,\r\n\t\t\t},\r\n\t\t\t1200: {\r\n\t\t\t\tslidesPerView: 7,\r\n\t\t\t\tspaceBetween: 20,\r\n\t\t\t},\r\n\t\t},\r\n\r\n\t})\r\n\r\n\tconst shopLineSlider = new Swiper('#shopLineSlider', {\r\n\t\tnavigation: {\r\n\t\t\tnextEl: '#shopLineNextBtn',\r\n\t\t\tprevEl: '#shopLinePrevBtn'\r\n\t\t},\r\n\t\tbreakpoints: {\r\n\t\t\t320: {\r\n\t\t\t\tslidesPerView: 2,\r\n\t\t\t\tspaceBetween: 10,\r\n\t\t\t},\r\n\t\t\t768: {\r\n\t\t\t\tslidesPerView: 3,\r\n\t\t\t\tspaceBetween: 30,\r\n\t\t\t},\r\n\t\t\t1200: {\r\n\t\t\t\tslidesPerView: 5,\r\n\t\t\t\tspaceBetween: 80,\r\n\t\t\t},\r\n\t\t},\r\n\r\n\t})\r\n\r\n\tconst asideFashionIdeasSlider = new Swiper('#fashionIdeasSlider', {\r\n\t\tslidesPerView: 1,\r\n\t\tspaceBetween: 0,\r\n\t\tnavigation: {\r\n\t\t\tnextEl: '#fashionIdeasNextBtn',\r\n\t\t\tprevEl: '#fashionIdeasPrevBtn'\r\n\t\t},\r\n\t\t// breakpoints: {\r\n\t\t// \t320: {\r\n\t\t// \t\tslidesPerView: 2,\r\n\t\t// \t\tspaceBetween: 10,\r\n\t\t// \t},\r\n\t\t// \t768: {\r\n\t\t// \t\tslidesPerView: 5,\r\n\t\t// \t\tspaceBetween: 23,\r\n\t\t// \t},\r\n\t\t// \t1200: {\r\n\t\t// \t\tslidesPerView: 7,\r\n\t\t// \t\tspaceBetween: 20,\r\n\t\t// \t},\r\n\t\t// },\r\n\r\n\t})\r\n\r\n\tconst serviceAboutGalleriesNl = document.querySelectorAll('.service-about__gallery .swiper-container')\r\n\tconst serviceAboutGalleriesEl = Array.prototype.slice.call(serviceAboutGalleriesNl);\r\n\t\t\r\n\tconst serviceAboutGallery = new Swiper(serviceAboutGalleriesEl, {\r\n\t\tslidesPerView: 1.2,\r\n\t\tspaceBetween: 10,\r\n\r\n\t})\r\n\r\n\tconst serviceLinksSliderEl = document.getElementById('serviceLinksSlider')\r\n\r\n\tconst serviceLinksSlider = new Swiper(serviceLinksSliderEl, {\r\n\t\tslidesPerView: 1.3,\r\n\t\tspaceBetween: 10,\r\n\t})\r\n\r\n\tconst instructionSliderEl = document.getElementById('instructionSlider')\r\n\r\n\tconst instructionSlider = new Swiper(instructionSliderEl, {\r\n\t\tslidesPerView: 2.1,\r\n\t\tspaceBetween: 10,\r\n\t})\r\n\r\n\tconst serviceRefundSliderEl = document.getElementById('serviceRefundSlider')\r\n\r\n\tconst serviceRefundSlider = new Swiper(serviceRefundSliderEl, {\r\n\t\tslidesPerView: 2,\r\n\t\tspaceBetween: 10,\r\n\t})\r\n\r\n\r\n// ORDER STEP 1\r\n\r\n\tconst addProductSliderNextBtn = document.getElementById('addProductSliderNextBtn')\r\n\tconst addProductSliderPrevBtn = document.getElementById('addProductSliderPrevBtn')\r\n\t\r\n\r\n\tconst addProductPopupPaginationSliderEl = document.getElementById('addProductPopupPaginationSlider')\r\n\r\n\tconst addProductPopupPaginationSlider = new Swiper(addProductPopupPaginationSliderEl, {\r\n\t\tslidesPerView: 1,\r\n\t\tspaceBetween: 0,\r\n\t\tallowTouchMove: false,\r\n\t\tnavigation: {\r\n\t\t\tnextEl: addProductSliderNextBtn,\r\n\t\t\tprevEl: addProductSliderPrevBtn\r\n\t\t},\r\n\t})\r\n\r\n\tconst addProductPopupProductsSliderEl = document.getElementById('addProductPopupProductsSlider')\r\n\r\n\tconst addProductPopupProductsSlider = new Swiper(addProductPopupProductsSliderEl, {\r\n\t\tslidesPerView: 1,\r\n\t\tspaceBetween: 0,\r\n\t\tallowTouchMove: false,\r\n\t\tnavigation: {\r\n\t\t\tnextEl: addProductSliderNextBtn,\r\n\t\t\tprevEl: addProductSliderPrevBtn\r\n\t\t},\r\n\t})\r\n\r\n// ORDER STEP 1\r\n\r\n\tvar mobSlidersArray = []\r\n\t\r\n\tif(serviceAboutGalleriesEl.length) {\r\n\t\tserviceAboutGallery.forEach(slider => {\r\n\t\t\tmobSlidersArray.push(slider)\r\n\t\t})\r\n\t}\r\n\r\n\tif(serviceLinksSliderEl) {\r\n\t\tmobSlidersArray.push(serviceLinksSlider)\r\n\t}\r\n\r\n\tif(instructionSliderEl) {\r\n\t\tmobSlidersArray.push(instructionSlider)\r\n\t}\r\n\r\n\tif(serviceRefundSliderEl) {\r\n\t\tmobSlidersArray.push(serviceRefundSlider)\r\n\t}\r\n\r\n\tif(addProductPopupProductsSliderEl) {\r\n\t\tmobSlidersArray.push(addProductPopupProductsSlider)\r\n\t}\r\n\r\n\tif(addProductPopupPaginationSliderEl) {\r\n\t\tmobSlidersArray.push(addProductPopupPaginationSlider)\r\n\t}\r\n\r\n\tfunction destroySliders(vw, mob = mobSlidersArray) {\r\n\t\tif(vw >= 768) {\r\n\t\t\tmob.forEach(slider => {\r\n\t\t\t\tslider.destroy(false,true)\r\n\t\t\t\tslider.el.removeAttribute('class')\r\n\r\n\t\t\t\tslider.wrapperEl.removeAttribute('class')\r\n\t\t\t\tslider.wrapperEl.classList.add(slider.el.parentElement.classList[0])\r\n\r\n\t\t\t\tslider.slides.forEach(li => {\r\n\t\t\t\t\tvar className = li.classList[0]\r\n\t\t\t\t\tli.classList.remove('swiper-slide')\r\n\t\t\t\t\tli.removeAttribute('style')\r\n\t\t\t\t\t// li.classList.add(className)\r\n\t\t\t\t})\r\n\t\t\t})\r\n\r\n\t\t} else {\r\n\t\t\tmob.forEach(slider => {\r\n\t\t\t\tslider.el.classList.add('swiper-container')\r\n\r\n\t\t\t\tslider.wrapperEl.removeAttribute('class')\r\n\t\t\t\tslider.wrapperEl.classList.add('swiper-wrapper')\r\n\r\n\t\t\t\tslider.slides.forEach(li => {\r\n\t\t\t\t\tli.classList.add('swiper-slide')\r\n\t\t\t\t})\r\n\r\n\t\t\t\tslider.init()\r\n\t\t\t\tslider.navigation.init()\r\n\t\t\t\tslider.update()\r\n\t\t\t})\r\n\t\t\t\r\n\t\t}\r\n\t}\r\n\r\n\tif(!mobSlidersArray.length) return;\r\n\r\n\twindow.onresize = function() {\r\n\t    destroySliders(window.innerWidth)\r\n\t};\r\n\r\n\tdestroySliders(window.innerWidth)\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/sliders.js?");
    /***/
  },

  /***/
  "./src/js/weekThingPopups.js":
  /*!***********************************!*\
    !*** ./src/js/weekThingPopups.js ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcJsWeekThingPopupsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\r\n\r\n\r\n\tconst thingsNL = document.querySelectorAll('.week-thing__thing.thing');\r\n\r\n\tif (!thingsNL.length) return;\r\n\r\n\tconst thingsList = Array.prototype.slice.call(thingsNL);\r\n\r\n\tconst html = document.getElementById('html')\r\n\r\n\tfunction disableScroll() {\r\n\t\thtml.style.overflowX = 'hidden';\r\n\t\thtml.style.overflowY = 'hidden';\r\n\t};\r\n\r\n\tfunction enableScroll() {\r\n\t\thtml.style.overflowX = 'hidden';\r\n\t\thtml.style.overflowY = 'scroll';\r\n\t};\r\n\r\n\tfunction closeEl(el) {\r\n\t\tel.classList.remove('open');\r\n\t\tenableScroll();\r\n\t}\r\n\r\n\tfunction openEl(el) {\r\n\t\tel.classList.add('open');\r\n\t\tdisableScroll();\r\n\t}\r\n\r\n\r\n\r\n\r\n\tconst popup = document.getElementById('week-thing-popup');\r\n\tconst popupClose = popup.querySelector('.popup__close');\r\n\tconst popupImg = popup.querySelector('.popup__ph');\r\n\tconst popupText = popup.querySelector('.popup__article');\r\n\r\n\tthingsList.forEach(thing => {\r\n\t\tconsole.log('clicl')\r\n\r\n\t\tthing.addEventListener('click', function() {\r\n\r\n\t\t\tif(popup.classList.contains('open')) {\r\n\t\t\t\tcloseEl(popup);\r\n\t\t\t} else {\r\n\t\t\t\tconst thingImg = thing.querySelector('.thing__ph').getAttribute('src');\r\n\t\t\t\tpopupImg.setAttribute('src', thingImg);\r\n\r\n\t\t\t\tvar textForPopup = thing.querySelector('.thing__popup-text').innerText;\r\n\r\n\t\t\t\t// console.log(textForPopup)\r\n\r\n\t\t\t\tif(!textForPopup) textForPopup = 'Описание не найдено';\r\n\r\n\t\t\t\tpopupText.innerText = textForPopup;\r\n\r\n\t\t\t\topenEl(popup);\r\n\t\t\t}\r\n\r\n\t\t})\r\n\r\n\t})\r\n\r\n\tpopupClose.addEventListener('click', function() {\r\n\t\tcloseEl(popup);\r\n\t})\r\n\r\n\tpopup.addEventListener('click', function(ev) {\r\n\t\tif(ev.target === this) closeEl(popup);\r\n\t})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/weekThingPopups.js?");
    /***/
  },

  /***/
  0:
  /*!*************************************************************************************************************************************************************************************************************************************************!*\
    !*** multi ./src/js/btnBurger.js ./src/js/callbackPopup.js ./src/js/orderAddPopup.js ./src/js/printTable.js ./src/js/reviews.js ./src/js/saleCard.js ./src/js/script.js ./src/js/serviceFaq.js ./src/js/sliders.js ./src/js/weekThingPopups.js ***!
    \*************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    eval("__webpack_require__(/*! C:\\main\\layouts\\catalog-club\\src\\js\\btnBurger.js */\"./src/js/btnBurger.js\");\n__webpack_require__(/*! C:\\main\\layouts\\catalog-club\\src\\js\\callbackPopup.js */\"./src/js/callbackPopup.js\");\n__webpack_require__(/*! C:\\main\\layouts\\catalog-club\\src\\js\\orderAddPopup.js */\"./src/js/orderAddPopup.js\");\n__webpack_require__(/*! C:\\main\\layouts\\catalog-club\\src\\js\\printTable.js */\"./src/js/printTable.js\");\n__webpack_require__(/*! C:\\main\\layouts\\catalog-club\\src\\js\\reviews.js */\"./src/js/reviews.js\");\n__webpack_require__(/*! C:\\main\\layouts\\catalog-club\\src\\js\\saleCard.js */\"./src/js/saleCard.js\");\n__webpack_require__(/*! C:\\main\\layouts\\catalog-club\\src\\js\\script.js */\"./src/js/script.js\");\n__webpack_require__(/*! C:\\main\\layouts\\catalog-club\\src\\js\\serviceFaq.js */\"./src/js/serviceFaq.js\");\n__webpack_require__(/*! C:\\main\\layouts\\catalog-club\\src\\js\\sliders.js */\"./src/js/sliders.js\");\nmodule.exports = __webpack_require__(/*! C:\\main\\layouts\\catalog-club\\src\\js\\weekThingPopups.js */\"./src/js/weekThingPopups.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/btnBurger.js_./src/js/callbackPopup.js_./src/js/orderAddPopup.js_./src/js/printTable.js_./src/js/reviews.js_./src/js/saleCard.js_./src/js/script.js_./src/js/serviceFaq.js_./src/js/sliders.js_./src/js/weekThingPopups.js?");
    /***/
  }
  /******/

});