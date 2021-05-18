(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["live-tracking-live-tracking-module"],{

/***/ "9UlA":
/*!*******************************************************!*\
  !*** ./src/app/live-tracking/live-tracking.module.ts ***!
  \*******************************************************/
/*! exports provided: LiveTrackingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveTrackingPageModule", function() { return LiveTrackingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _live_tracking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./live-tracking-routing.module */ "zTj4");
/* harmony import */ var _live_tracking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./live-tracking.page */ "NpRI");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");








let LiveTrackingPageModule = class LiveTrackingPageModule {
};
LiveTrackingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _live_tracking_routing_module__WEBPACK_IMPORTED_MODULE_5__["LiveTrackingPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_live_tracking_page__WEBPACK_IMPORTED_MODULE_6__["LiveTrackingPage"]]
    })
], LiveTrackingPageModule);



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

/***/ "Y2Sk":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/live-tracking/live-tracking.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>Live Tracking</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)='dismissLiveTrackingModal()'>Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <app-location-picker></app-location-picker> -->\r\n</ion-content>\r\n");

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

/***/ }),

/***/ "zTj4":
/*!***************************************************************!*\
  !*** ./src/app/live-tracking/live-tracking-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: LiveTrackingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveTrackingPageRoutingModule", function() { return LiveTrackingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _live_tracking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./live-tracking.page */ "NpRI");




const routes = [
    {
        path: '',
        component: _live_tracking_page__WEBPACK_IMPORTED_MODULE_3__["LiveTrackingPage"]
    }
];
let LiveTrackingPageRoutingModule = class LiveTrackingPageRoutingModule {
};
LiveTrackingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LiveTrackingPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=live-tracking-live-tracking-module.js.map