(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab3Page = class Tab3Page {
    constructor() { }
};
Tab3Page.ctorParameters = () => [];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "IqiF");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Roster\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">fleet</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n <ion-card class=\"card\">\r\n    <ion-row >\r\n      <ion-col size=\"3\">\r\n          <div class=\"displayDate\">06 May</div>\r\n      </ion-col>\r\n      <ion-col>\r\n       <div>Thursday</div> \r\n       <div>Login Time : <b>NA</b></div> \r\n       <div>Logout Time : <b>NA</b></div>\r\n        <div> <ion-icon name=\"car-outline\" size=\"small\"></ion-icon>\r\n        SLK Soft Campus SEZ-UNIT 1</div>\r\n      </ion-col>\r\n   \r\n    </ion-row>  \r\n  </ion-card>   \r\n  <ion-card class=\"card\">\r\n    <ion-row >\r\n      <ion-col size=\"3\">\r\n          <div class=\"displayDate\">07 May</div>\r\n      </ion-col>\r\n      <ion-col>\r\n       <div>Friday</div> \r\n       <div>Login Time : <b>NA</b></div> \r\n       <div>Logout Time : <b>NA</b></div>\r\n        <div> <ion-icon name=\"car-outline\" size=\"small\"></ion-icon>\r\n        SLK Soft Campus SEZ-UNIT 1</div>\r\n      </ion-col>\r\n   \r\n    </ion-row>  \r\n  </ion-card>   \r\n  <ion-card class=\"card\">\r\n    <ion-row >\r\n      <ion-col size=\"3\">\r\n          <div class=\"displayDate\">08 May</div>\r\n      </ion-col>\r\n      <ion-col>\r\n       <div>Saturday</div> \r\n       <div>Login Time : <b>NA</b></div> \r\n       <div>Logout Time : <b>NA</b></div>\r\n        <div> <ion-icon name=\"car-outline\" size=\"small\"></ion-icon>\r\n        SLK Soft Campus SEZ-UNIT 1</div>\r\n      </ion-col>\r\n   \r\n    </ion-row>  \r\n  </ion-card>   \r\n  <ion-card class=\"card\">\r\n    <ion-row >\r\n      <ion-col size=\"3\">\r\n          <div class=\"displayDate\">09 May</div>\r\n      </ion-col>\r\n      <ion-col>\r\n       <div>Monday</div> \r\n       <div>Login Time : <b>NA</b></div> \r\n       <div>Logout Time : <b>NA</b></div>\r\n        <div> <ion-icon name=\"car-outline\" size=\"small\"></ion-icon>\r\n        SLK Soft Campus SEZ-UNIT 1</div>\r\n      </ion-col>\r\n   \r\n    </ion-row>  \r\n  </ion-card> \r\n\r\n\r\n  \r\n\r\n\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n  cursor: pointer;\n}\n\n/**Desktop Query*/\n\n@media only screen and (min-width: 768px) {\n  .displayDate {\n    background: #6a64ff;\n    border-radius: 48px;\n    text-align: center;\n    color: white;\n    padding: 20px;\n    width: 24%;\n    margin-left: 98px;\n  }\n}\n\n/*Tablet Query*/\n\n@media only screen and (min-width: 481px) and (max-width: 768px) {\n  .displayDate {\n    background: #6a64ff;\n    border-radius: 46px;\n    text-align: center;\n    color: white;\n    padding: 24px;\n    width: 53%;\n    margin-left: 39px;\n  }\n}\n\n/*Mobile Query*/\n\n@media only screen and (max-width: 480px) {\n  .displayDate {\n    background: #6a64ff;\n    border-radius: 34px;\n    text-align: center;\n    color: white;\n    padding: 14px;\n    width: 83%;\n    margin-left: 9px;\n    margin-top: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVFQUFBO0VBQ0UsbUZBQUE7RUFDSixlQUFBO0FBQUo7O0FBR0EsaUJBQUE7O0FBQ0E7RUFDSTtJQUVTLG1CQUFBO0lBQ0MsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VBRFo7QUFDRjs7QUFLRSxlQUFBOztBQUNBO0VBQ0U7SUFFSSxtQkFBQTtJQUNNLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtFQUpaO0FBQ0Y7O0FBUUUsZUFBQTs7QUFDQTtFQUNFO0lBRVUsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDVixlQUFBO0VBUEY7QUFDRiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5jYXJke1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLDAsMCwuMDgpLCAwIDAgNnB4IHJnYmEoMCwwLDAsLjA1KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMiksLjNzIGJveC1zaGFkb3csLjNzIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuLyoqRGVza3RvcCBRdWVyeSovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5kaXNwbGF5RGF0ZVxyXG4gICAge1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZDojNmE2NGZmO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDk4cHg7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qVGFibGV0IFF1ZXJ5Ki9cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLmRpc3BsYXlEYXRlXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZDojNmE2NGZmO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ2cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MyU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM5cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLypNb2JpbGUgUXVlcnkqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODBweCkge1xyXG4gICAgLmRpc3BsYXlEYXRlXHJcbiAgICB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojNmE2NGZmO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MyU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4vLyAgIGlvbi1pY29uIHtcclxuLy8gICAgIGNvbG9yOiBibHVlO1xyXG4vLyAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogMTZweDtcclxuLy8gICB9XHJcblxyXG4gICJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map