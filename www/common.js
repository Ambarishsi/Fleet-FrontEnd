(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "9feF":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tech-support/tech-support.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Tech Support</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)='dismissTechSupport()'>Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <object data=\"https://tawk.to/chat/5fdb33bca8a254155ab43057/1epo446f4\"  width=\"100%\" height=\"100%\"></object>\n</ion-content>\n");

/***/ }),

/***/ "BD8v":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-helpdesk/admin-helpdesk.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Admin Helpdesk</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)='dismiss()'>Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item class=\"call-person\">\n      <ion-icon name=\"business-outline\" class=\"call-person\"></ion-icon>\n      Transport coordinator mobile 1\n    </ion-item>\n    <ion-card-content>\n      <ion-label color=\"primary\" class=\"tele\">\n        <ion-icon name=\"call\"></ion-icon>\n        <a  href=\"tel:9304387089\">  9304387089</a>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item class=\"call-person\">\n      <ion-icon name=\"business-outline\" class=\"call-person\"></ion-icon>\n      Transport coordinator mobile 2\n    </ion-item>\n    <ion-card-content>\n      <ion-label color=\"primary\" class=\"tele\">\n        <ion-icon name=\"call\"></ion-icon>\n        <a href=\"tel:8123969683\">  8123969683</a>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "C7/S":
/*!*********************************************************!*\
  !*** ./src/app/admin-helpdesk/admin-helpdesk.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tele {\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n\n.call-person {\n  color: #6a64ff;\n  font-weight: 600;\n}\n\na {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkbWluLWhlbHBkZXNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJhZG1pbi1oZWxwZGVzay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVsZXtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY2FsbC1wZXJzb257XHJcbiAgY29sb3I6IzZhNjRmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "Lo9z":
/*!*********************************************!*\
  !*** ./src/app/trip-info/trip-info.page.ts ***!
  \*********************************************/
/*! exports provided: TripInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripInfoPage", function() { return TripInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_trip_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./trip-info.page.html */ "gug6");
/* harmony import */ var _trip_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trip-info.page.scss */ "XHbK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let TripInfoPage = class TripInfoPage {
    constructor(modalControlTripInfo) {
        this.modalControlTripInfo = modalControlTripInfo;
    }
    ngOnInit() {
    }
    dismissTripInfo() {
        this.modalControlTripInfo.dismiss();
    }
};
TripInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
TripInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-trip-info',
        template: _raw_loader_trip_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_trip_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TripInfoPage);



/***/ }),

/***/ "XHbK":
/*!***********************************************!*\
  !*** ./src/app/trip-info/trip-info.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-color {\n  color: #949494;\n  font-weight: 600;\n}\n\n.right {\n  float: right;\n}\n\n.alert-info {\n  margin-bottom: 0;\n}\n\nsummary[role=button] {\n  background-color: #045089;\n  color: #fff;\n  padding: 0.5em;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\nsummary[role=button]:hover, summary[role=button]:focus,\nsummary::marker {\n  color: #3dc2ff;\n}\n\ndetails {\n  border: 1px solid #045089;\n  margin-bottom: 0.55em;\n  border-radius: 5px;\n  background-color: #fff;\n}\n\n.margin {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ndetails p {\n  padding: 0 1em;\n}\n\np {\n  color: #949494;\n}\n\n.rounded-corner {\n  padding-top: 3rem;\n  border-top-right-radius: 25px;\n  border-top-left-radius: 25px;\n  background-color: #b3e5f1ea;\n  margin: 0;\n  height: 100vh;\n}\n\n.color {\n  color: #949494;\n  font-weight: 600;\n}\n\na {\n  text-decoration: none;\n}\n\nion-avatar {\n  width: 80px;\n  height: 80px;\n}\n\n.map {\n  float: right;\n  color: #eb445a;\n}\n\n.size {\n  font-size: 3.5rem;\n}\n\n.location-content {\n  color: #949494;\n  font-weight: 600;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.fab-inner {\n  font-weight: 600;\n  font-size: 2rem;\n}\n\n.ionchip {\n  left: -4em;\n  background-color: #ffc409;\n}\n\n.bottom {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyaXAtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTs7RUFDaUIsY0FBQTtBQUdqQjs7QUFGQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FBTUY7O0FBSkE7RUFBVyxjQUFBO0FBUVg7O0FBTkE7RUFDRSxjQUFBO0FBU0Y7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBU0Y7O0FBTkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFTRjs7QUFOQTtFQUNFLHFCQUFBO0FBU0Y7O0FBTkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVNGOztBQU5BO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFTRjs7QUFQQTtFQUNFLGlCQUFBO0FBVUY7O0FBUEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVUY7O0FBSEE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtBQU9GIiwiZmlsZSI6InRyaXAtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jb2xvcntcclxuICBjb2xvcjogIzk0OTQ5NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucmlnaHR7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYWxlcnQtaW5mb3tcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5zdW1tYXJ5W3JvbGU9YnV0dG9uXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDQ1MDg5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuc3VtbWFyeVtyb2xlPWJ1dHRvbl06aG92ZXIsIHN1bW1hcnlbcm9sZT1idXR0b25dOmZvY3VzLFxyXG5zdW1tYXJ5OjptYXJrZXIge2NvbG9yOiAgIzNkYzJmZn1cclxuZGV0YWlscyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0NTA4OTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjU1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLm1hcmdpbntcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcbmRldGFpbHMgcCB7cGFkZGluZzogMCAxZW07fVxyXG5cclxucHtcclxuICBjb2xvcjogIzk0OTQ5NDtcclxufVxyXG5cclxuLnJvdW5kZWQtY29ybmVye1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZTVmMWVhO1xyXG4gIG1hcmdpbjowO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb2xvcntcclxuICBjb2xvcjogIzk0OTQ5NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4ubWFwe1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogI2ViNDQ1YTtcclxufVxyXG4uc2l6ZXtcclxuICBmb250LXNpemU6IDMuNXJlbTtcclxufVxyXG5cclxuLmxvY2F0aW9uLWNvbnRlbnR7XHJcbiAgY29sb3I6Izk0OTQ5NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLy8gaW9uLWZhYntcclxuLy8gICB0b3A6IDE2NXB4O1xyXG4vLyB9XHJcblxyXG4uZmFiLWlubmVye1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uaW9uY2hpcHtcclxuICBsZWZ0OiAtNGVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmM0MDk7XHJcbn1cclxuLmJvdHRvbXtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "Zaiz":
/*!*******************************************************!*\
  !*** ./src/app/admin-helpdesk/admin-helpdesk.page.ts ***!
  \*******************************************************/
/*! exports provided: AdminHelpdeskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHelpdeskPage", function() { return AdminHelpdeskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_helpdesk_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-helpdesk.page.html */ "BD8v");
/* harmony import */ var _admin_helpdesk_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-helpdesk.page.scss */ "C7/S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let AdminHelpdeskPage = class AdminHelpdeskPage {
    constructor(modalCtrlAdminHelpdesk) {
        this.modalCtrlAdminHelpdesk = modalCtrlAdminHelpdesk;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalCtrlAdminHelpdesk.dismiss();
    }
};
AdminHelpdeskPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AdminHelpdeskPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-helpdesk',
        template: _raw_loader_admin_helpdesk_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_helpdesk_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminHelpdeskPage);



/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "d8vs":
/*!***************************************************!*\
  !*** ./src/app/tech-support/tech-support.page.ts ***!
  \***************************************************/
/*! exports provided: TechSupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechSupportPage", function() { return TechSupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tech_support_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tech-support.page.html */ "9feF");
/* harmony import */ var _tech_support_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tech-support.page.scss */ "r/kd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let TechSupportPage = class TechSupportPage {
    constructor(modalCtrlTechSupport, renderer, loadingController) {
        this.modalCtrlTechSupport = modalCtrlTechSupport;
        this.renderer = renderer;
        this.loadingController = loadingController;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        console.log('inside view init');
        this.presentLoading();
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Connecting...',
                duration: 2000,
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            // console.log('Loading dismissed!');
        });
    }
    dismissTechSupport() {
        this.modalCtrlTechSupport.dismiss();
    }
};
TechSupportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
TechSupportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tech-support',
        template: _raw_loader_tech_support_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tech_support_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TechSupportPage);



/***/ }),

/***/ "gug6":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trip-info/trip-info.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Trip Info</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)='dismissTripInfo()'>Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n<div slot=\"fixed\" style=\"width: 100%;\">\n        <div class=\"alert alert-info\" >\n          <strong style=\"float:left\">\n            <ion-icon name=\"time\"></ion-icon>\n            Pickup at 13:54 </strong>\n            <strong style=\"float:right\">\n              <ion-icon name=\"lock-closed\"></ion-icon>\n              8028\n            </strong>&nbsp;PM\n        </div>\n\n<div  >\n    <ion-list >\n      <ion-item lines=\"none\" >\n        <ion-avatar slot=\"start\">\n          <img src=\"../../assets/ambarish.jpg\" >\n        </ion-avatar>\n        <ion-label class=\"color\" >\n          <p>Driver Name: RAVI</p>\n          <p>Vehicle No: MH NB0</p>\n            <ion-label color=\"primary\" class=\"tele\">\n              <ion-icon name=\"call\"></ion-icon>\n              <a href=\"tel:9304387089\">&emsp;9304387089</a>\n            </ion-label>\n        </ion-label>\n        <div class=\"map\">\n          <ion-icon name=\"navigate-circle\" class=\"size\"></ion-icon>\n          <!-- <br>\n          <small>Tracking</small> -->\n        </div>\n      </ion-item>\n\n    </ion-list>\n  </div>\n\n    <div class=\"rounded-corner\" >\n      <div class=\"margin\">\n      <details>\n        <summary role=\"button\" tabindex=\"0\">\n            Ambarish\n          <div style=\"float: right;\">\n            109447\n          </div>\n        </summary>\n\n        <div class=\"location-content\">\n        <ion-icon name=\"pin\"></ion-icon>\n          Marathalli, Bangalore\n        </div>\n\n      </details>\n      <details>\n        <summary role=\"button\" tabindex=\"0\">\n          Ambarish\n          <div style=\"float: right;\">\n            109447\n          </div>\n        </summary>\n        <div class=\"location-content\">\n          <ion-icon name=\"pin\"></ion-icon>\n            Marathalli, Bangalore\n          </div>\n      </details>\n      <details>\n        <summary role=\"button\" aria-expanded=\"false\" tabindex=\"0\">\n          Ambarish\n          <div style=\"float: right;\">\n            109447\n          </div>\n        </summary>\n        <div class=\"location-content\">\n          <ion-icon name=\"pin\"></ion-icon>\n            Marathalli, Bangalore\n          </div>\n      </details>\n      <details>\n        <summary role=\"button\" tabindex=\"0\">\n          Ambarish\n          <div style=\"float: right;\">\n            109447\n          </div>\n        </summary>\n        <div class=\"location-content\">\n          <ion-icon name=\"pin\"></ion-icon>\n            Marathalli, Bangalore\n          </div>\n      </details>\n    </div>\n  </div>\n\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" class=\"bottom\">\n    <ion-fab-button  color=\"warning\">\n      <ion-icon md=\"caret-up\" ios=\"chevron-up-circle-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n\n        <ion-chip class=\"ionchip\">\n          <ion-icon class=\"fab-inner\"name=\"checkmark-circle\"></ion-icon>\n          <ion-label>Boarded</ion-label>\n        </ion-chip>\n\n        <ion-chip class=\"ionchip\">\n          <ion-icon class=\"fab-inner\" name=\"close-circle\"></ion-icon>\n          <ion-label>NoShow</ion-label>\n        </ion-chip>\n\n        <ion-chip class=\"ionchip\">\n          <ion-icon class=\"fab-inner\" name=\"checkmark-done-circle\"></ion-icon>\n          <ion-label>Alighted</ion-label>\n        </ion-chip>\n\n        <ion-chip class=\"ionchip\">\n          <ion-icon class=\"fab-inner\" name=\"help-circle\"></ion-icon>\n          <ion-label>Waiting</ion-label>\n        </ion-chip>\n\n    </ion-fab-list>\n  </ion-fab>\n\n</div>\n</ion-content>\n");

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "r/kd":
/*!*****************************************************!*\
  !*** ./src/app/tech-support/tech-support.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRlY2gtc3VwcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsV0FBQTtBQUFGIiwiZmlsZSI6InRlY2gtc3VwcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLWNsYXNzIHtcclxuICAtLWJhY2tncm91bmQ6ICMyMjI7XHJcbiAgLS1zcGlubmVyLWNvbG9yOiAjZmZmO1xyXG5cclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=common.js.map