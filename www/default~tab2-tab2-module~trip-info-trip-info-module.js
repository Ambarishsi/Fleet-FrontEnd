(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab2-tab2-module~trip-info-trip-info-module"],{

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
/* harmony import */ var _live_tracking_live_tracking_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../live-tracking/live-tracking.page */ "NpRI");






let TripInfoPage = class TripInfoPage {
    constructor(modalControlTripInfo) {
        this.modalControlTripInfo = modalControlTripInfo;
    }
    ngOnInit() {
    }
    //showModalEditAddress
    showModalCabLiveTracing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modalLiveTrackingCab = yield this.modalControlTripInfo.create({
                component: _live_tracking_live_tracking_page__WEBPACK_IMPORTED_MODULE_5__["LiveTrackingPage"],
                swipeToClose: true,
            });
            return yield modalLiveTrackingCab.present();
        });
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

/***/ "NpRI":
/*!*****************************************************!*\
  !*** ./src/app/live-tracking/live-tracking.page.ts ***!
  \*****************************************************/
/*! exports provided: LiveTrackingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveTrackingPage", function() { return LiveTrackingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_live_tracking_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./live-tracking.page.html */ "Y2Sk");
/* harmony import */ var _live_tracking_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-tracking.page.scss */ "qgZ5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let LiveTrackingPage = class LiveTrackingPage {
    constructor(modalCtrlLiveTracking) {
        this.modalCtrlLiveTracking = modalCtrlLiveTracking;
    }
    ngOnInit() {
    }
    dismissLiveTrackingModal() {
        this.modalCtrlLiveTracking.dismiss();
    }
};
LiveTrackingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
LiveTrackingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-live-tracking',
        template: _raw_loader_live_tracking_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_live_tracking_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LiveTrackingPage);



/***/ }),

/***/ "XHbK":
/*!***********************************************!*\
  !*** ./src/app/trip-info/trip-info.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-color {\n  color: #949494;\n  font-weight: 600;\n}\n\n.right {\n  float: right;\n}\n\n.alert-info {\n  margin-bottom: 0;\n}\n\nsummary[role=button] {\n  background-color: #045089;\n  color: #fff;\n  padding: 0.5em;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\nsummary[role=button]:hover, summary[role=button]:focus,\nsummary::marker {\n  color: #3dc2ff;\n}\n\ndetails {\n  border: 1px solid #045089;\n  margin-bottom: 0.55em;\n  border-radius: 5px;\n  background-color: #fff;\n}\n\n.margin {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ndetails p {\n  padding: 0 1em;\n}\n\np {\n  color: #949494;\n}\n\n.rounded-corner {\n  padding-top: 3rem;\n  border-top-right-radius: 25px;\n  border-top-left-radius: 25px;\n  background-color: #b3e5f1ea;\n  margin: 0;\n  height: 100vh;\n}\n\n.color {\n  color: #949494;\n  font-weight: 600;\n}\n\na {\n  text-decoration: none;\n}\n\nion-avatar {\n  width: 80px;\n  height: 80px;\n}\n\n.map {\n  float: right;\n  color: #eb445a;\n}\n\n.size {\n  font-size: 3.5rem;\n  cursor: pointer;\n}\n\n.location-content {\n  color: #949494;\n  font-weight: 600;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.fab-inner {\n  font-weight: 600;\n  font-size: 2rem;\n}\n\n.ionchip {\n  left: -4em;\n  background-color: #ffc409;\n}\n\n.bottom {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyaXAtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTs7RUFDaUIsY0FBQTtBQUdqQjs7QUFGQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FBTUY7O0FBSkE7RUFBVyxjQUFBO0FBUVg7O0FBTkE7RUFDRSxjQUFBO0FBU0Y7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBU0Y7O0FBTkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFTRjs7QUFOQTtFQUNFLHFCQUFBO0FBU0Y7O0FBTkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVNGOztBQU5BO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFTRjs7QUFQQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQVVGOztBQVBBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVVGOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSEE7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7QUFPRiIsImZpbGUiOiJ0cmlwLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY29sb3J7XHJcbiAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnJpZ2h0e1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmFsZXJ0LWluZm97XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuc3VtbWFyeVtyb2xlPWJ1dHRvbl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzA0NTA4OTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbnN1bW1hcnlbcm9sZT1idXR0b25dOmhvdmVyLCBzdW1tYXJ5W3JvbGU9YnV0dG9uXTpmb2N1cyxcclxuc3VtbWFyeTo6bWFya2VyIHtjb2xvcjogICMzZGMyZmZ9XHJcbmRldGFpbHMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNDUwODk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41NWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5tYXJnaW57XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5kZXRhaWxzIHAge3BhZGRpbmc6IDAgMWVtO31cclxuXHJcbnB7XHJcbiAgY29sb3I6ICM5NDk0OTQ7XHJcbn1cclxuXHJcbi5yb3VuZGVkLWNvcm5lcntcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2U1ZjFlYTtcclxuICBtYXJnaW46MDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29sb3J7XHJcbiAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLm1hcHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6ICNlYjQ0NWE7XHJcbn1cclxuLnNpemV7XHJcbiAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9jYXRpb24tY29udGVudHtcclxuICBjb2xvcjojOTQ5NDk0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4vLyBpb24tZmFie1xyXG4vLyAgIHRvcDogMTY1cHg7XHJcbi8vIH1cclxuXHJcbi5mYWItaW5uZXJ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5pb25jaGlwe1xyXG4gIGxlZnQ6IC00ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzQwOTtcclxufVxyXG4uYm90dG9te1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Y2Sk":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/live-tracking/live-tracking.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Live Tracking</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)='dismissLiveTrackingModal()'>Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "gug6":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trip-info/trip-info.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Trip Info</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)='dismissTripInfo()'>Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n<div slot=\"fixed\" style=\"width: 100%;\">\n        <div class=\"alert alert-info\" >\n          <strong style=\"float:left\">\n            <ion-icon name=\"time\"></ion-icon>\n            Pickup at 13:54 </strong>\n            <strong style=\"float:right\">\n              <ion-icon name=\"lock-closed\"></ion-icon>\n              8028\n            </strong>&nbsp;PM\n        </div>\n\n<div  >\n    <ion-list >\n      <ion-item lines=\"none\" >\n        <ion-avatar slot=\"start\">\n          <img src=\"../../assets/ambarish.jpg\" >\n        </ion-avatar>\n        <ion-label class=\"color\" >\n          <p>Driver Name: RAVI</p>\n          <p>Vehicle No: MH NB0</p>\n            <ion-label color=\"primary\" class=\"tele\">\n              <ion-icon name=\"call\"></ion-icon>\n              <a href=\"tel:9304387089\">&emsp;9304387089</a>\n            </ion-label>\n        </ion-label>\n        <div class=\"map\">\n          <ion-icon name=\"navigate-circle\" class=\"size\" (click)=\"showModalCabLiveTracing()\"></ion-icon>\n          <!-- <br>\n          <small>Tracking</small> -->\n        </div>\n      </ion-item>\n\n    </ion-list>\n  </div>\n\n    <div class=\"rounded-corner\" >\n      <div class=\"margin\">\n      <details>\n        <summary role=\"button\" tabindex=\"0\">\n            Ambarish\n          <div style=\"float: right;\">\n            109447\n          </div>\n        </summary>\n\n        <div class=\"location-content\">\n        <ion-icon name=\"pin\"></ion-icon>\n          Marathalli, Bangalore\n        </div>\n\n      </details>\n      <details>\n        <summary role=\"button\" tabindex=\"0\">\n          Ambarish\n          <div style=\"float: right;\">\n            109447\n          </div>\n        </summary>\n        <div class=\"location-content\">\n          <ion-icon name=\"pin\"></ion-icon>\n            Marathalli, Bangalore\n          </div>\n      </details>\n      <details>\n        <summary role=\"button\" aria-expanded=\"false\" tabindex=\"0\">\n          Ambarish\n          <div style=\"float: right;\">\n            109447\n          </div>\n        </summary>\n        <div class=\"location-content\">\n          <ion-icon name=\"pin\"></ion-icon>\n            Marathalli, Bangalore\n          </div>\n      </details>\n      <details>\n        <summary role=\"button\" tabindex=\"0\">\n          Ambarish\n          <div style=\"float: right;\">\n            109447\n          </div>\n        </summary>\n        <div class=\"location-content\">\n          <ion-icon name=\"pin\"></ion-icon>\n            Marathalli, Bangalore\n          </div>\n      </details>\n    </div>\n  </div>\n\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" class=\"bottom\">\n    <ion-fab-button  color=\"warning\">\n      <ion-icon md=\"caret-up\" ios=\"chevron-up-circle-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n\n        <ion-chip class=\"ionchip\">\n          <ion-icon class=\"fab-inner\"name=\"checkmark-circle\"></ion-icon>\n          <ion-label>Boarded</ion-label>\n        </ion-chip>\n\n        <ion-chip class=\"ionchip\">\n          <ion-icon class=\"fab-inner\" name=\"close-circle\"></ion-icon>\n          <ion-label>NoShow</ion-label>\n        </ion-chip>\n\n        <ion-chip class=\"ionchip\">\n          <ion-icon class=\"fab-inner\" name=\"checkmark-done-circle\"></ion-icon>\n          <ion-label>Alighted</ion-label>\n        </ion-chip>\n\n        <ion-chip class=\"ionchip\">\n          <ion-icon class=\"fab-inner\" name=\"help-circle\"></ion-icon>\n          <ion-label>Waiting</ion-label>\n        </ion-chip>\n\n    </ion-fab-list>\n  </ion-fab>\n\n</div>\n</ion-content>\n");

/***/ }),

/***/ "qgZ5":
/*!*******************************************************!*\
  !*** ./src/app/live-tracking/live-tracking.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXZlLXRyYWNraW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=default~tab2-tab2-module~trip-info-trip-info-module.js.map