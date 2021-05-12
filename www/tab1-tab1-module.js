(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Fleet\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">fleet</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-icon name=\"person\" slot=\"end\" color=\"medium\"></ion-icon>\r\n      <ion-chip  color=\"primary\">\r\n        <ion-label class=\"label-color\">{{ userInfo.firstName }} {{userInfo.middleName}} {{userInfo.lastName}}</ion-label>\r\n      </ion-chip>\r\n    </ion-item>\r\n\r\n    <ion-card-content>\r\n      Employee ID: {{userInfo.employeeId}}\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-list>\r\n\r\n    <ion-item>\r\n      <ion-label color=\"primary\" (click)=\"showModalProfile()\" >\r\n        <ion-icon name=\"person\" > </ion-icon>\r\n          Profile\r\n        </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label color=\"primary\" >\r\n        <ion-icon name=\"navigate\"></ion-icon>\r\n          Special Request\r\n        </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label color=\"primary\" (click)=\"showModalAdminHelpdesk()\">\r\n        <ion-icon name=\"call\"></ion-icon>\r\n          Admin Helpdesk\r\n        </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label color=\"primary\" (click)=\"showModalTechSupport()\">\r\n        <ion-icon name=\"laptop\"></ion-icon>\r\n          Tech Support\r\n        </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label color=\"primary\" routerLink=\"/login\">\r\n        <ion-icon name=\"log-out\"></ion-icon>\r\n          Logout\r\n        </ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer class='bar-stable'>\r\n  <ion-item>\r\n    <ion-label color=\"primary\">\r\n      <ion-icon name=\"bulb\"></ion-icon>\r\n      Dark Mode\r\n    </ion-label>\r\n    <ion-toggle slot=\"end\" name=\"darkMode\" [disabled]=\"darkmodeFlagAuto\" (click)=\"toggleDarkModeHandler($event)\" color=\"tertiary\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n\r\n    <ion-label color=\"primary\">\r\n      <ion-icon name=\"moon\"></ion-icon>\r\n      Auto\r\n    </ion-label>\r\n    <ion-toggle slot=\"end\" *ngIf=\"autoDarkModeEnabled\" name=\"darkMode\" [disabled]=\"darkmodeFlag\" (click)=\"toggleDarkModeAutoHandler($event)\" color=\"tertiary\" checked></ion-toggle>\r\n    <ion-toggle slot=\"end\" *ngIf=\"!autoDarkModeEnabled\" name=\"darkMode\" [disabled]=\"darkmodeFlag\" (click)=\"toggleDarkModeAutoHandler($event)\" color=\"tertiary\"></ion-toggle>\r\n  </ion-item>\r\n  </ion-footer>\r\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile/profile.page */ "ncJE");
/* harmony import */ var _services_profile_passdataprofile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/profile/passdataprofile.service */ "S4JI");
/* harmony import */ var _admin_helpdesk_admin_helpdesk_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin-helpdesk/admin-helpdesk.page */ "Zaiz");
/* harmony import */ var _tech_support_tech_support_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tech-support/tech-support.page */ "d8vs");



/* eslint-disable radix */







let Tab1Page = class Tab1Page {
    constructor(modalCtrl, routerOutlet, passdataprofileService) {
        this.modalCtrl = modalCtrl;
        this.routerOutlet = routerOutlet;
        this.passdataprofileService = passdataprofileService;
        this.darkmodeFlag = false;
        this.darkmodeFlagAuto = false;
        this.autoDarkModeEnabled = false;
        //darkmode
        this.toggleDarkModeHandler = (event) => {
            document.body.classList.toggle('dark');
            if (event.target.ariaChecked === 'false') {
                this.darkmodeFlag = true;
            }
            else {
                this.darkmodeFlag = false;
            }
        };
    }
    ngOnInit() {
        this.passdataprofileService.on().subscribe(data => {
            this.userInfo = data.data;
        });
        if (this.userInfo.isAutoDarkMode) {
            this.autoDarkModeEnabled = true;
            this.darkmodeFlagAuto = true;
        }
        else {
            this.autoDarkModeEnabled = false;
            this.darkmodeFlagAuto = false;
        }
    }
    //showModalProfile ProfilePage
    showModalProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modalProfile = yield this.modalCtrl.create({
                component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"],
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl
            });
            return yield modalProfile.present();
        });
    }
    //showModalAdminHelpdesk
    showModalAdminHelpdesk() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modalAdminHelpdesk = yield this.modalCtrl.create({
                component: _admin_helpdesk_admin_helpdesk_page__WEBPACK_IMPORTED_MODULE_7__["AdminHelpdeskPage"],
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl
            });
            return yield modalAdminHelpdesk.present();
        });
    }
    //showModalTechSupport
    showModalTechSupport() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modalTechSupport = yield this.modalCtrl.create({
                component: _tech_support_tech_support_page__WEBPACK_IMPORTED_MODULE_8__["TechSupportPage"],
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl
            });
            return yield modalTechSupport.present();
        });
    }
    toggleDarkModeAutoHandler(ev) {
        if (ev.target.ariaChecked === 'false') {
            this.darkmodeFlagAuto = true;
            this.applyDarkMode();
        }
        else {
            this.darkmodeFlagAuto = false;
            this.applyDarkMode();
        }
    }
    applyDarkMode() {
        this.currTime = this.calculateCurrentTime(new Date()).toString();
        if (this.currTime.includes('pm')) {
            if (parseInt(this.currTime.substring(0, 2)) >= 6) {
                document.body.classList.toggle('dark');
            }
        }
        else if (this.currTime.includes('am')) {
            if (parseInt(this.currTime.substring(0, 2)) === 12) {
                document.body.classList.toggle('dark');
            }
            else if (parseInt(this.currTime.substring(0, 2)) <= 6) {
                document.body.classList.toggle('dark');
            }
        }
        else {
            document.body.classList.toggle('light');
        }
    }
    calculateCurrentTime(date) {
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        const ampm = this.hours >= 12 ? 'pm' : 'am';
        this.hours = this.hours % 12;
        this.hours = this.hours ? this.hours : 12;
        this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        this.strTime = this.hours + ':' + this.minutes + ' ' + ampm;
        return this.strTime;
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"] },
    { type: _services_profile_passdataprofile_service__WEBPACK_IMPORTED_MODULE_6__["PassdataprofileService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 20px;\n}\n\n.label-color {\n  color: #6a64ff;\n}\n\nion-item {\n  font-weight: 600;\n}\n\nion-toggle {\n  --background: #000;\n  --background-checked: #7a49a5;\n  --handle-background: #7a49a5;\n  --handle-background-checked: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFFQSw0QkFBQTtFQUNBLGlDQUFBO0FBQ0YiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5sYWJlbC1jb2xvcntcclxuICBjb2xvcjojNmE2NGZmO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5pb24tdG9nZ2xlIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMDA7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM3YTQ5YTU7XHJcblxyXG4gIC0taGFuZGxlLWJhY2tncm91bmQ6ICM3YTQ5YTU7XHJcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjMDAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map