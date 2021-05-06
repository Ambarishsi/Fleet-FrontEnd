(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-helpdesk-admin-helpdesk-module"],{

/***/ "j10G":
/*!*****************************************************************!*\
  !*** ./src/app/admin-helpdesk/admin-helpdesk-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdminHelpdeskPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHelpdeskPageRoutingModule", function() { return AdminHelpdeskPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_helpdesk_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-helpdesk.page */ "Zaiz");




const routes = [
    {
        path: '',
        component: _admin_helpdesk_page__WEBPACK_IMPORTED_MODULE_3__["AdminHelpdeskPage"]
    }
];
let AdminHelpdeskPageRoutingModule = class AdminHelpdeskPageRoutingModule {
};
AdminHelpdeskPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminHelpdeskPageRoutingModule);



/***/ }),

/***/ "jkdc":
/*!*********************************************************!*\
  !*** ./src/app/admin-helpdesk/admin-helpdesk.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminHelpdeskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHelpdeskPageModule", function() { return AdminHelpdeskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-helpdesk-routing.module */ "j10G");
/* harmony import */ var _admin_helpdesk_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-helpdesk.page */ "Zaiz");







let AdminHelpdeskPageModule = class AdminHelpdeskPageModule {
};
AdminHelpdeskPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminHelpdeskPageRoutingModule"]
        ],
        declarations: [_admin_helpdesk_page__WEBPACK_IMPORTED_MODULE_6__["AdminHelpdeskPage"]]
    })
], AdminHelpdeskPageModule);



/***/ })

}]);
//# sourceMappingURL=admin-helpdesk-admin-helpdesk-module.js.map