(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roaster-roaster-module"],{

/***/ "+PCa":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/roaster/roaster.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>roaster</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "/Dlq":
/*!*******************************************!*\
  !*** ./src/app/roaster/roaster.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2FzdGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "JGOD":
/*!*****************************************!*\
  !*** ./src/app/roaster/roaster.page.ts ***!
  \*****************************************/
/*! exports provided: RoasterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoasterPage", function() { return RoasterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_roaster_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./roaster.page.html */ "+PCa");
/* harmony import */ var _roaster_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roaster.page.scss */ "/Dlq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RoasterPage = class RoasterPage {
    constructor() { }
    ngOnInit() {
    }
};
RoasterPage.ctorParameters = () => [];
RoasterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-roaster',
        template: _raw_loader_roaster_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_roaster_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoasterPage);



/***/ }),

/***/ "NXyg":
/*!*******************************************!*\
  !*** ./src/app/roaster/roaster.module.ts ***!
  \*******************************************/
/*! exports provided: RoasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoasterPageModule", function() { return RoasterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _roaster_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roaster-routing.module */ "S/Em");
/* harmony import */ var _roaster_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roaster.page */ "JGOD");







let RoasterPageModule = class RoasterPageModule {
};
RoasterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _roaster_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoasterPageRoutingModule"]
        ],
        declarations: [_roaster_page__WEBPACK_IMPORTED_MODULE_6__["RoasterPage"]]
    })
], RoasterPageModule);



/***/ }),

/***/ "S/Em":
/*!***************************************************!*\
  !*** ./src/app/roaster/roaster-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RoasterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoasterPageRoutingModule", function() { return RoasterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _roaster_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roaster.page */ "JGOD");




const routes = [
    {
        path: '',
        component: _roaster_page__WEBPACK_IMPORTED_MODULE_3__["RoasterPage"]
    }
];
let RoasterPageRoutingModule = class RoasterPageRoutingModule {
};
RoasterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RoasterPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=roaster-roaster-module.js.map