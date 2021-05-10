(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-info-trip-info-module"],{

/***/ "tEQw":
/*!*******************************************************!*\
  !*** ./src/app/trip-info/trip-info-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TripInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripInfoPageRoutingModule", function() { return TripInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _trip_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-info.page */ "Lo9z");




const routes = [
    {
        path: '',
        component: _trip_info_page__WEBPACK_IMPORTED_MODULE_3__["TripInfoPage"]
    }
];
let TripInfoPageRoutingModule = class TripInfoPageRoutingModule {
};
TripInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TripInfoPageRoutingModule);



/***/ }),

/***/ "xUwp":
/*!***********************************************!*\
  !*** ./src/app/trip-info/trip-info.module.ts ***!
  \***********************************************/
/*! exports provided: TripInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripInfoPageModule", function() { return TripInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _trip_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-info-routing.module */ "tEQw");
/* harmony import */ var _trip_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-info.page */ "Lo9z");







let TripInfoPageModule = class TripInfoPageModule {
};
TripInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trip_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["TripInfoPageRoutingModule"]
        ],
        declarations: [_trip_info_page__WEBPACK_IMPORTED_MODULE_6__["TripInfoPage"]]
    })
], TripInfoPageModule);



/***/ })

}]);
//# sourceMappingURL=trip-info-trip-info-module.js.map