(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-info-schedule-info-module"],{

/***/ "08d7":
/*!*******************************************************!*\
  !*** ./src/app/schedule-info/schedule-info.module.ts ***!
  \*******************************************************/
/*! exports provided: ScheduleInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleInfoPageModule", function() { return ScheduleInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _schedule_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule-info-routing.module */ "1xvY");
/* harmony import */ var _schedule_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule-info.page */ "3ns2");







let ScheduleInfoPageModule = class ScheduleInfoPageModule {
};
ScheduleInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _schedule_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScheduleInfoPageRoutingModule"]
        ],
        declarations: [_schedule_info_page__WEBPACK_IMPORTED_MODULE_6__["ScheduleInfoPage"]]
    })
], ScheduleInfoPageModule);



/***/ }),

/***/ "1xvY":
/*!***************************************************************!*\
  !*** ./src/app/schedule-info/schedule-info-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ScheduleInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleInfoPageRoutingModule", function() { return ScheduleInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _schedule_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-info.page */ "3ns2");




const routes = [
    {
        path: '',
        component: _schedule_info_page__WEBPACK_IMPORTED_MODULE_3__["ScheduleInfoPage"]
    }
];
let ScheduleInfoPageRoutingModule = class ScheduleInfoPageRoutingModule {
};
ScheduleInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScheduleInfoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=schedule-info-schedule-info-module.js.map