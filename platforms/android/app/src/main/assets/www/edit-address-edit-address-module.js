(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-address-edit-address-module"],{

/***/ "9LKp":
/*!*************************************************************!*\
  !*** ./src/app/edit-address/edit-address-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditAddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressPageRoutingModule", function() { return EditAddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-address.page */ "bC/S");




const routes = [
    {
        path: '',
        component: _edit_address_page__WEBPACK_IMPORTED_MODULE_3__["EditAddressPage"]
    }
];
let EditAddressPageRoutingModule = class EditAddressPageRoutingModule {
};
EditAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditAddressPageRoutingModule);



/***/ }),

/***/ "vvDS":
/*!*****************************************************!*\
  !*** ./src/app/edit-address/edit-address.module.ts ***!
  \*****************************************************/
/*! exports provided: EditAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressPageModule", function() { return EditAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-address-routing.module */ "9LKp");
/* harmony import */ var _edit_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-address.page */ "bC/S");







let EditAddressPageModule = class EditAddressPageModule {
};
EditAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditAddressPageRoutingModule"]
        ],
        declarations: [_edit_address_page__WEBPACK_IMPORTED_MODULE_6__["EditAddressPage"]]
    })
], EditAddressPageModule);



/***/ })

}]);
//# sourceMappingURL=edit-address-edit-address-module.js.map