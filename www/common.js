(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "3ns2":
/*!*****************************************************!*\
  !*** ./src/app/schedule-info/schedule-info.page.ts ***!
  \*****************************************************/
/*! exports provided: ScheduleInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleInfoPage", function() { return ScheduleInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_schedule_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./schedule-info.page.html */ "ylr2");
/* harmony import */ var _schedule_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-info.page.scss */ "7hGP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ScheduleInfoPage = class ScheduleInfoPage {
    constructor(modalControlTripInfo) {
        this.modalControlTripInfo = modalControlTripInfo;
    }
    ngOnInit() {
    }
    dismissTripInfo() {
        this.modalControlTripInfo.dismiss();
    }
};
ScheduleInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ScheduleInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-schedule-info',
        template: _raw_loader_schedule_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_schedule_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ScheduleInfoPage);



/***/ }),

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

/***/ "7hGP":
/*!*******************************************************!*\
  !*** ./src/app/schedule-info/schedule-info.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-color {\n  color: white;\n  font-weight: 600;\n}\n\n.right {\n  float: right;\n}\n\n.alert-info {\n  margin-bottom: 0;\n}\n\n.margin {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ndetails p {\n  padding: 0 1em;\n}\n\np {\n  color: #949494;\n}\n\n.rounded-corner {\n  padding-top: 3rem;\n  border-top-right-radius: 25px;\n  border-top-left-radius: 25px;\n  background-color: #b3e5f1ea;\n  margin: 0;\n  height: 100vh;\n}\n\n.color {\n  color: #949494;\n  font-weight: 600;\n}\n\na {\n  text-decoration: none;\n}\n\nion-avatar {\n  width: 80px;\n  height: 80px;\n}\n\n.map {\n  float: right;\n}\n\n.size {\n  font-size: 3.5rem;\n}\n\n.location-content {\n  color: #949494;\n  font-weight: 600;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.fab-inner {\n  font-weight: 600;\n  font-size: 2rem;\n}\n\n.ionchip {\n  left: -4em;\n  background-color: #ffc409;\n}\n\n.bottom {\n  position: fixed;\n}\n\n.label-color {\n  color: #6a64ff;\n}\n\n.alertstyle {\n  width: 100%;\n  margin-top: 1rem;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  font-size: 15px;\n}\n\n.small {\n  font-weight: 600;\n}\n\n.item {\n  margin: 10px auto;\n}\n\n.below-header {\n  margin-left: 23px;\n  margin-bottom: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjaGVkdWxlLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUtFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUlFO0VBQVcsY0FBQTtBQUFiOztBQUVFO0VBQ0UsY0FBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFDRTtFQUNFLGlCQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUlFO0VBQ0UsY0FBQTtBQURKOztBQUlFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFLRTtFQUNFLGdCQUFBO0FBRko7O0FBTUU7RUFDRSxpQkFBQTtBQUhKOztBQU1FO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUhKIiwiZmlsZSI6InNjaGVkdWxlLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY29sb3J7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLmFsZXJ0LWluZm97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuXHJcblxyXG5cclxuICAubWFyZ2lue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIH1cclxuICBkZXRhaWxzIHAge3BhZGRpbmc6IDAgMWVtO31cclxuICBcclxuICBwe1xyXG4gICAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZGVkLWNvcm5lcntcclxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzZTVmMWVhO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICAuY29sb3J7XHJcbiAgICBjb2xvcjogIzk0OTQ5NDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5zaXple1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2NhdGlvbi1jb250ZW50e1xyXG4gICAgY29sb3I6Izk0OTQ5NDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbiAgXHJcbiBcclxuICBcclxuICAuZmFiLWlubmVye1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmlvbmNoaXB7XHJcbiAgICBsZWZ0OiAtNGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzQwOTtcclxuICB9XHJcbiAgLmJvdHRvbXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICBcclxuICB9XHJcblxyXG5cclxuICAubGFiZWwtY29sb3J7XHJcbiAgICBjb2xvcjojNmE2NGZmO1xyXG4gIH1cclxuICBcclxuICAuYWxlcnRzdHlsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc21hbGx7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuaXRlbXtcclxuICAgIG1hcmdpbjoxMHB4IGF1dG87XHJcbiAgfVxyXG5cclxuICAuYmVsb3ctaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "9feF":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tech-support/tech-support.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Tech Support</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)='dismissTechSupport()'>Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <iframe (load)=\"myLoadEvent()\" src=\"https://tawk.to/chat/5fdb33bca8a254155ab43057/1epo446f4\" frameborder=\"0\" name=\"techSupport\" id=\"techSupport\" width=\"100%\" height=\"100%\"></iframe>\n  <!-- <object (load)=\"myLoadEvent()\" data=\"https://tawk.to/chat/5fdb33bca8a254155ab43057/1epo446f4\" width=\"100%\" height=\"100%\"></object> -->\n</ion-content>\n");

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
                duration: 4000,
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            // console.log('Loading dismissed!');
        });
    }
    myLoadEvent() {
        console.log('its loaded');
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

/***/ }),

/***/ "ylr2":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule-info/schedule-info.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>Roaster Info</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)='dismissTripInfo()'>Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n<div slot=\"fixed\" style=\"width: 100%;\">\r\n    \r\n\r\n<div  >\r\n    <ion-list >\r\n      <ion-item lines=\"none\" >\r\n      \r\n        <ion-label class=\"color\" >\r\n          <h1>10 May</h1>\r\n   \r\n           \r\n        </ion-label>\r\n   \r\n        <div class=\"map\">\r\n          <ion-button color=\"success\" >Save</ion-button>\r\n          \r\n        \r\n        </div>\r\n      </ion-item>\r\n\r\n      \r\n\r\n    </ion-list>\r\n  </div>\r\n\r\n    <div class=\"rounded-corner\" >\r\n  <div class=\"below-header\">\r\n      <ion-label class=\"label-color\"> NA - NA SLK Soft Campus SEZ - Unit 1</ion-label>\r\n    </div>\r\n      <div class=\"margin\">\r\n        <ion-list lines=\"none\">\r\n  \r\n        <ion-item >\r\n          \r\n          <ion-label class=\"label-color\" >Drop Location</ion-label>\r\n          <ion-select class=\"custom-options\">\r\n            <ion-select-option value=\"SLK Soft Campus SEZ-Unit 1\">SLK Soft Campus SEZ-Unit 1</ion-select-option>\r\n            <ion-select-option value=\"SLK Soft Campus SEZ-Unit 2\">SLK Soft Campus SEZ-Unit 2</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label class=\"label-color\">Login Time</ion-label>\r\n          <ion-select class=\"custom-options\">\r\n            <ion-select-option value=\"8:00 , 10 May\">8:00 , 10 May</ion-select-option>\r\n            <ion-select-option value=\"9:00 , 10 May\">9:00 , 10 May</ion-select-option>\r\n            <ion-select-option value=\"10:00 , 10 May\">10:00 , 10 May</ion-select-option>\r\n            <ion-select-option value=\"11:00 , 10 May\">11:00 , 10 May</ion-select-option>\r\n            <ion-select-option value=\"12:00 , 10 May\">12:00 , 10 May</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label class=\"label-color\">Logout Time</ion-label>\r\n          <ion-select class=\"custom-options\">\r\n            <ion-select-option value=\"8:00 , 10 May\">8:00 , 10 May</ion-select-option>\r\n            <ion-select-option value=\"9:00 , 10 May\">9:00 , 10 May</ion-select-option>\r\n            <ion-select-option value=\"10:00 , 10 May\">10:00 , 10 May</ion-select-option>\r\n            <ion-select-option value=\"11:00 , 10 May\">11:00 , 10 May</ion-select-option>\r\n            <ion-select-option value=\"12:00 , 10 May\">12:00 , 10 May</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item >\r\n          <ion-label class=\"label-color\">Remarks</ion-label>\r\n          <ion-select class=\"custom-options\">\r\n            <ion-select-option value=\"Business Need\">Business Need</ion-select-option>\r\n            <ion-select-option value=\"Personal Need\">Personal Need</ion-select-option>\r\n            <ion-select-option value=\"Emergency\">Emergency</ion-select-option>\r\n            <ion-select-option value=\"Others\">Others</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        </ion-list>\r\n\r\n      \r\n    </div>\r\n  </div>\r\n\r\n\r\n \r\n\r\n</div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map