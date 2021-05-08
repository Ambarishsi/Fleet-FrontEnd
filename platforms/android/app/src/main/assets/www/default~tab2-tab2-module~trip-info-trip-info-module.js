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





let TripInfoPage = class TripInfoPage {
    constructor(modalControlTripInfo) {
        this.modalControlTripInfo = modalControlTripInfo;
    }
    ngOnInit() {
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

/***/ "XHbK":
/*!***********************************************!*\
  !*** ./src/app/trip-info/trip-info.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-color {\n  color: #949494;\n  font-weight: 600;\n}\n\n.right {\n  float: right;\n}\n\n.alert-info {\n  margin-bottom: 0;\n}\n\nsummary[role=button] {\n  background-color: #045089;\n  color: #fff;\n  padding: 0.5em;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\nsummary[role=button]:hover, summary[role=button]:focus,\nsummary::marker {\n  color: #3dc2ff;\n}\n\ndetails {\n  border: 1px solid #045089;\n  margin-bottom: 0.55em;\n  border-radius: 5px;\n  background-color: #fff;\n}\n\n.margin {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\ndetails p {\n  padding: 0 1em;\n}\n\np {\n  color: #949494;\n}\n\n.rounded-corner {\n  padding-top: 3rem;\n  border-top-right-radius: 25px;\n  border-top-left-radius: 25px;\n  background-color: #b3e5f1ea;\n  margin: 0;\n  height: 100vh;\n}\n\n.color {\n  color: #949494;\n  font-weight: 600;\n}\n\na {\n  text-decoration: none;\n}\n\nion-avatar {\n  width: 80px;\n  height: 80px;\n}\n\n.map {\n  float: right;\n  color: #eb445a;\n}\n\n.size {\n  font-size: 3.5rem;\n}\n\n.location-content {\n  color: #949494;\n  font-weight: 600;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.fab-inner {\n  font-weight: 600;\n  font-size: 2rem;\n}\n\n.ionchip {\n  left: -4em;\n  background-color: #ffc409;\n}\n\n.bottom {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyaXAtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTs7RUFDaUIsY0FBQTtBQUdqQjs7QUFGQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FBTUY7O0FBSkE7RUFBVyxjQUFBO0FBUVg7O0FBTkE7RUFDRSxjQUFBO0FBU0Y7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBU0Y7O0FBTkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFTRjs7QUFOQTtFQUNFLHFCQUFBO0FBU0Y7O0FBTkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVNGOztBQU5BO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFTRjs7QUFQQTtFQUNFLGlCQUFBO0FBVUY7O0FBUEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVUY7O0FBSEE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtBQU9GIiwiZmlsZSI6InRyaXAtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jb2xvcntcclxuICBjb2xvcjogIzk0OTQ5NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucmlnaHR7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYWxlcnQtaW5mb3tcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5zdW1tYXJ5W3JvbGU9YnV0dG9uXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDQ1MDg5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuc3VtbWFyeVtyb2xlPWJ1dHRvbl06aG92ZXIsIHN1bW1hcnlbcm9sZT1idXR0b25dOmZvY3VzLFxyXG5zdW1tYXJ5OjptYXJrZXIge2NvbG9yOiAgIzNkYzJmZn1cclxuZGV0YWlscyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0NTA4OTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjU1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLm1hcmdpbntcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcbmRldGFpbHMgcCB7cGFkZGluZzogMCAxZW07fVxyXG5cclxucHtcclxuICBjb2xvcjogIzk0OTQ5NDtcclxufVxyXG5cclxuLnJvdW5kZWQtY29ybmVye1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZTVmMWVhO1xyXG4gIG1hcmdpbjowO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb2xvcntcclxuICBjb2xvcjogIzk0OTQ5NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4ubWFwe1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogI2ViNDQ1YTtcclxufVxyXG4uc2l6ZXtcclxuICBmb250LXNpemU6IDMuNXJlbTtcclxufVxyXG5cclxuLmxvY2F0aW9uLWNvbnRlbnR7XHJcbiAgY29sb3I6Izk0OTQ5NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLy8gaW9uLWZhYntcclxuLy8gICB0b3A6IDE2NXB4O1xyXG4vLyB9XHJcblxyXG4uZmFiLWlubmVye1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uaW9uY2hpcHtcclxuICBsZWZ0OiAtNGVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmM0MDk7XHJcbn1cclxuLmJvdHRvbXtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "gug6":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trip-info/trip-info.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Trip Info</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)='dismissTripInfo()'>Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n<div slot=\"fixed\" style=\"width: 100%;\">\n        <div class=\"alert alert-info\" >\n          <strong style=\"float:left\">\n            <ion-icon name=\"time\"></ion-icon>\n            Pickup at 13:54 </strong>\n            <strong style=\"float:right\">\n              <ion-icon name=\"lock-closed\"></ion-icon>\n              8028\n            </strong>&nbsp;PM\n        </div>\n\n<div  >\n    <ion-list >\n      <ion-item lines=\"none\" >\n        <ion-avatar slot=\"start\">\n          <img src=\"../../assets/ambarish.jpg\" >\n        </ion-avatar>\n        <ion-label class=\"color\" >\n          <p>Driver Name: RAVI</p>\n          <p>Vehicle No: MH NB0</p>\n            <ion-label color=\"primary\" class=\"tele\">\n              <ion-icon name=\"call\"></ion-icon>\n              <a href=\"tel:9304387089\">&emsp;9304387089</a>\n            </ion-label>\n        </ion-label>\n        <div class=\"map\">\n          <ion-icon name=\"navigate-circle\" class=\"size\"></ion-icon>\n          <!-- <br>\n          <small>Tracking</small> -->\n        </div>\n      </ion-item>\n\n    </ion-list>\n  </div>\n\n    <div class=\"rounded-corner\" >\n      <div class=\"margin\">\n      <details>\n        <summary role=\"button\" tabindex=\"0\">\n            Ambarish\n          <div style=\"float: right;\">\n            109447\n          </div>\n        </summary>\n\n        <div class=\"location-content\">\n        <ion-icon name=\"pin\"></ion-icon>\n          Marathalli, Bangalore\n        </div>\n\n      </details>\n      <details>\n        <summary role=\"button\" tabindex=\"0\">\n          Ambarish\n          <div style=\"float: right;\">\n            109447\n          </div>\n        </summary>\n        <div class=\"location-content\">\n          <ion-icon name=\"pin\"></ion-icon>\n            Marathalli, Bangalore\n          </div>\n      </details>\n      <details>\n        <summary role=\"button\" aria-expanded=\"false\" tabindex=\"0\">\n          Ambarish\n          <div style=\"float: right;\">\n            109447\n          </div>\n        </summary>\n        <div class=\"location-content\">\n          <ion-icon name=\"pin\"></ion-icon>\n            Marathalli, Bangalore\n          </div>\n      </details>\n      <details>\n        <summary role=\"button\" tabindex=\"0\">\n          Ambarish\n          <div style=\"float: right;\">\n            109447\n          </div>\n        </summary>\n        <div class=\"location-content\">\n          <ion-icon name=\"pin\"></ion-icon>\n            Marathalli, Bangalore\n          </div>\n      </details>\n    </div>\n  </div>\n\n   <!-- fab placed in the center of the content with a list on each side -->\n  <!-- <ion-fab vertical=\"center\" horizontal=\"center\">\n    <ion-fab-button >\n      <ion-icon class=\"fab-inner\" name=\"add\" ></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-chip class=\"ionchip\">\n        <ion-icon class=\"fab-inner\"name=\"checkmark-circle\"></ion-icon>\n        <ion-label>Boarded</ion-label>\n      </ion-chip>\n    </ion-fab-list>\n    <ion-fab-list side=\"bottom\">\n      <ion-chip class=\"ionchip\">\n        <ion-icon class=\"fab-inner\" name=\"close-circle\"></ion-icon>\n        <ion-label>No Show</ion-label>\n      </ion-chip>\n    </ion-fab-list>\n    <ion-fab-list side=\"start\">\n      <ion-chip class=\"ionchip\">\n        <ion-icon class=\"fab-inner\" name=\"checkmark-done-circle\"></ion-icon>\n        <ion-label>Alighted</ion-label>\n      </ion-chip>\n    </ion-fab-list>\n    <ion-fab-list side=\"end\">\n      <ion-chip class=\"ionchip\">\n        <ion-icon class=\"fab-inner\" name=\"help-circle\"></ion-icon>\n        <ion-label>Waiting</ion-label>\n      </ion-chip>\n    </ion-fab-list>\n  </ion-fab> -->\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" class=\"bottom\">\n    <ion-fab-button  color=\"warning\">\n      <ion-icon md=\"caret-up\" ios=\"chevron-up-circle-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n\n        <ion-chip class=\"ionchip\">\n          <ion-icon class=\"fab-inner\"name=\"checkmark-circle\"></ion-icon>\n          <ion-label>Boarded</ion-label>\n        </ion-chip>\n\n        <ion-chip class=\"ionchip\">\n          <ion-icon class=\"fab-inner\" name=\"close-circle\"></ion-icon>\n          <ion-label>NoShow</ion-label>\n        </ion-chip>\n\n        <ion-chip class=\"ionchip\">\n          <ion-icon class=\"fab-inner\" name=\"checkmark-done-circle\"></ion-icon>\n          <ion-label>Alighted</ion-label>\n        </ion-chip>\n\n        <ion-chip class=\"ionchip\">\n          <ion-icon class=\"fab-inner\" name=\"help-circle\"></ion-icon>\n          <ion-label>Waiting</ion-label>\n        </ion-chip>\n\n    </ion-fab-list>\n  </ion-fab>\n\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default~tab2-tab2-module~trip-info-trip-info-module.js.map