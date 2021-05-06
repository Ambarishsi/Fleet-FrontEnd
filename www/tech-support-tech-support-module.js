(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tech-support-tech-support-module"],{

/***/ "ZaUj":
/*!*****************************************************!*\
  !*** ./src/app/tech-support/tech-support.module.ts ***!
  \*****************************************************/
/*! exports provided: TechSupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechSupportPageModule", function() { return TechSupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tech_support_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tech-support-routing.module */ "o8Js");
/* harmony import */ var _tech_support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tech-support.page */ "d8vs");







let TechSupportPageModule = class TechSupportPageModule {
};
TechSupportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tech_support_routing_module__WEBPACK_IMPORTED_MODULE_5__["TechSupportPageRoutingModule"]
        ],
        declarations: [_tech_support_page__WEBPACK_IMPORTED_MODULE_6__["TechSupportPage"]]
    })
], TechSupportPageModule);



/***/ }),

/***/ "o8Js":
/*!*************************************************************!*\
  !*** ./src/app/tech-support/tech-support-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TechSupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechSupportPageRoutingModule", function() { return TechSupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tech_support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tech-support.page */ "d8vs");




const routes = [
    {
        path: '',
        component: _tech_support_page__WEBPACK_IMPORTED_MODULE_3__["TechSupportPage"]
    }
];
let TechSupportPageRoutingModule = class TechSupportPageRoutingModule {
};
TechSupportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TechSupportPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tech-support-tech-support-module.js.map