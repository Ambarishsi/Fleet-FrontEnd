(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ambar\Documents\GitHub\Fleet-FrontEnd\src\main.ts */"zUnb");


/***/ }),

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.service */ "XNvx");










let LoginPage = class LoginPage {
    constructor(modalCtrl, router, loginService, alertController, toastController) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.loginService = loginService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('username', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('password');
    }
    ngOnInit() {
        localStorage.clear();
        this.username.setValue('');
        this.password.setValue('');
    }
    login() {
        const requestData = {
            username: this.username.value,
            password: this.password.value
        };
        this.loginService.login(requestData).subscribe(data => {
            localStorage.setItem('UserData', JSON.stringify(data));
            this.router.navigateByUrl('/tabs/tab2');
        }, err => {
            if (err.status === 401) {
                this.presentToast('Invalid username or password');
            }
            else {
                this.presentToast('Please try again');
            }
            console.log(err);
        });
    }
    // async presentToast(messageTxt:string) {
    //   const toast = await this.toastController.create({
    //     message: messageTxt,
    //     duration: 2000,
    //     position: 'top',
    //     color:'tertiary'
    //   });
    //   toast.present();
    // }
    presentToast(errCode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: errCode,
                position: 'bottom',
                duration: 2000,
                animated: true,
                translucent: true,
                color: 'tertiary',
                buttons: [
                    {
                        text: 'X',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield toast.present();
            const { role } = yield toast.onDidDismiss();
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    authUrl: 'http://ec2-13-127-132-99.ap-south-1.compute.amazonaws.com:7080/v1/api/auth/login',
    employeeURL: 'http://ec2-13-127-132-99.ap-south-1.compute.amazonaws.com:7080/employee-ws/v1/employee'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "S4JI":
/*!*********************************************************!*\
  !*** ./src/services/profile/passdataprofile.service.ts ***!
  \*********************************************************/
/*! exports provided: PassdataprofileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassdataprofileService", function() { return PassdataprofileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let PassdataprofileService = class PassdataprofileService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    emit(data) {
        this.subject.next(data);
    }
    on() {
        return this.subject.asObservable();
    }
};
PassdataprofileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PassdataprofileService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\r\n  <div class=\"content\">\r\n    <img class=\"logo\" src=\"https://cdn0.iconfinder.com/data/icons/citycons/150/Citycons_bus-512.png\"/>\r\n    <form >\r\n      \r\n      <div class=\"field\">\r\n        <span><ion-icon name=\"person-circle-outline\"></ion-icon></span>\r\n        <input type=\"text\" [formControl]=\"username\"  autocomplete=\"off\" placeholder=\"username\">\r\n        \r\n      </div>\r\n      <div class=\"field\">\r\n        <span><ion-icon name=\"key-outline\"></ion-icon></span>\r\n        <input type=\"password\" [formControl]=\"password\" autocomplete=\"off\" placeholder=\"password\">\r\n       \r\n      </div>\r\n      <div class=\"forgot-pass\"><a href=\"#\">Forgot Password?</a></div>\r\n      <button (click)=\"login()\">Sign in</button>\r\n    </form>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "XNvx":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let LoginService = class LoginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
        this.loginApiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authUrl;
    }
    login(data) {
        return this.httpClient.post(this.loginApiURL, data, this.httpOptions);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "YIsq":
/*!*****************************************************!*\
  !*** ./src/app/edit-address/edit-address.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWFkZHJlc3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/login/login.module */ "X3zk");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.module */ "cRhG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _app_login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_8__["ProfilePageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "bC/S":
/*!***************************************************!*\
  !*** ./src/app/edit-address/edit-address.page.ts ***!
  \***************************************************/
/*! exports provided: EditAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressPage", function() { return EditAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_address_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-address.page.html */ "fzYH");
/* harmony import */ var _edit_address_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-address.page.scss */ "YIsq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let EditAddressPage = class EditAddressPage {
    constructor(modalCtrlEditAddress) {
        this.modalCtrlEditAddress = modalCtrlEditAddress;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalCtrlEditAddress.dismiss();
    }
};
EditAddressPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
EditAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-address',
        template: _raw_loader_edit_address_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_address_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditAddressPage);



/***/ }),

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "v+7O");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "ncJE");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "fzYH":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-address/edit-address.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Edit Address</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)='dismiss()'>Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "ncJE":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "tXh8");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "zxxS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_profile_passdataprofile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/profile/passdataprofile.service */ "S4JI");
/* harmony import */ var _edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-address/edit-address.page */ "bC/S");







let ProfilePage = class ProfilePage {
    constructor(modalCtrlProfile, passdataprofileService) {
        this.modalCtrlProfile = modalCtrlProfile;
        this.passdataprofileService = passdataprofileService;
    }
    ngOnInit() {
        this.passdataprofileService.on().subscribe(data => {
            this.userInfo = data.data;
        });
    }
    //showModalEditAddress
    showModalEditAddress() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modalAddress = yield this.modalCtrlProfile.create({
                component: _edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_6__["EditAddressPage"],
                swipeToClose: true,
            });
            return yield modalAddress.present();
        });
    }
    dismiss() {
        this.modalCtrlProfile.dismiss();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_profile_passdataprofile_service__WEBPACK_IMPORTED_MODULE_5__["PassdataprofileService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-wrapper {\n  background: #222;\n}\n\n.my-custom-class .modal-wrapper {\n  background: #222;\n}\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.logo {\n  height: 50%;\n  width: 64%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15px;\n  display: block;\n}\n\n/**Desktop Query*/\n\n@media only screen and (min-width: 768px) {\n  .content {\n    border-radius: 10px;\n    padding: 40px 30px;\n    width: 38%;\n    margin: auto;\n    margin-top: 15px;\n  }\n}\n\n/*Tablet Query*/\n\n@media only screen and (min-width: 481px) and (max-width: 768px) {\n  .content {\n    margin: auto;\n    padding: 24px;\n    margin-top: 15px;\n  }\n}\n\n/*Mobile Query*/\n\n@media only screen and (max-width: 480px) {\n  .content {\n    margin: auto;\n    padding: 24px;\n    margin-top: 15px;\n  }\n}\n\n.content .text {\n  font-size: 33px;\n  font-weight: 600;\n  margin-bottom: 35px;\n  color: #000;\n}\n\n.content .field {\n  height: 50px;\n  width: 100%;\n  display: flex;\n  position: relative;\n}\n\n.field input {\n  height: 100%;\n  width: 100%;\n  padding-left: 45px;\n  font-size: 18px;\n  outline: none;\n  border: none;\n  color: #595959;\n  background: #dde1e7;\n  border-radius: 8px;\n}\n\n.field input:focus ~ label {\n  box-shadow: inset 2px 2px 5px #babecc, inset -1px -1px 2px #ffffff73;\n}\n\n.field:nth-child(2) {\n  margin-top: 20px;\n}\n\n.field span {\n  position: absolute;\n  width: 50px;\n  line-height: 50px;\n  color: #595959;\n}\n\nspan {\n  padding-top: 0.2rem;\n  padding-left: 1rem;\n}\n\n.field label {\n  position: absolute;\n  top: 50%;\n  left: 45px;\n  pointer-events: none;\n  color: #666666;\n  transform: translateY(-50%);\n}\n\n.field input:focus ~ label {\n  opacity: 0;\n}\n\n.forgot-pass {\n  text-align: left;\n  margin: 10px 0 10px 5px;\n}\n\n.forgot-pass a {\n  font-size: 16px;\n  color: #3498db;\n  text-decoration: none;\n}\n\n.forgot-pass:hover a {\n  text-decoration: underline;\n}\n\nbutton {\n  background: #6a64ff;\n  color: #fff;\n  margin: 16px 0 0;\n  padding: 10px 40px;\n  width: 100%;\n}\n\nbutton:hover {\n  background: #6A64D7;\n}\n\n.signup {\n  font-size: 16px;\n  color: #595959;\n  margin: 10px 0;\n}\n\n.signup a {\n  color: #000;\n  text-decoration: none;\n}\n\n.signup a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBS0EsaUJBQUE7O0FBQ0E7RUFDRTtJQUVFLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBSEY7QUFDRjs7QUFjQSxlQUFBOztBQUNBO0VBQ0U7SUFRRSxZQUFBO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0VBbkJKO0FBQ0Y7O0FBeUJBLGVBQUE7O0FBQ0E7RUFDRTtJQVFFLFlBQUE7SUFDRSxhQUFBO0lBQ0EsZ0JBQUE7RUE5Qko7QUFDRjs7QUF3Q0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUF0Q0Y7O0FBeUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUF0Q0Y7O0FBeUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBdENGOztBQTJDQTtFQUNFLG9FQUFBO0FBeENGOztBQTRDQTtFQUNFLGdCQUFBO0FBekNGOztBQTRDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXpDRjs7QUEyQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBeENGOztBQTJDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQXhDRjs7QUE0Q0E7RUFDRSxVQUFBO0FBekNGOztBQTRDQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUF6Q0Y7O0FBNENBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQXpDRjs7QUE0Q0E7RUFDRSwwQkFBQTtBQXpDRjs7QUE0Q0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXpDRjs7QUE0Q0E7RUFFRSxtQkFBQTtBQTFDRjs7QUE2Q0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUExQ0Y7O0FBNkNBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBMUNGOztBQTZDQTtFQUNFLDBCQUFBO0FBMUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG59XHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIC5tb2RhbC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcclxuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG59XHJcblxyXG4ubG9nb3tcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNjQlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKipEZXNrdG9wIFF1ZXJ5Ki9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250ZW50e1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XHJcbiAgICB3aWR0aDogMzglO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICBcclxuICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgIC8vICAgcGFkZGluZzogMjRweDtcclxuICAgIC8vICAgbWFyZ2luLXRvcDogMTVweDtcclxuICBcclxuICAgIC8vIGJveC1zaGFkb3c6IC0zcHggLTNweCA3cHggI2ZmZmZmZjczLFxyXG4gICAgLy8gICAgICAgICAgICAgMnB4IDJweCA1cHggcmdiYSg5NCwgMTA0LCAxMjEsIDAuMjg4KTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi8qVGFibGV0IFF1ZXJ5Ki9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAuY29udGVudHtcclxuXHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gcGFkZGluZzogNDBweCAzMHB4O1xyXG4gICAgLy8gd2lkdGg6IDM4JTtcclxuICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgIC8vIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgXHJcblxyXG4gIH1cclxuICBcclxufVxyXG5cclxuLypNb2JpbGUgUXVlcnkqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcclxuICAuY29udGVudHtcclxuXHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gcGFkZGluZzogNDBweCAzMHB4O1xyXG4gICAgLy8gd2lkdGg6IDM4JTtcclxuICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgIC8vIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgXHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIG1hcmdpbjogYXV0bztcclxuLy8gcGFkZGluZzogMjRweDtcclxuLy8gbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbi5jb250ZW50IC50ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMzNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5jb250ZW50IC5maWVsZHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5maWVsZCBpbnB1dHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzU5NTk1OTtcclxuICBiYWNrZ3JvdW5kOiAjZGRlMWU3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAvLyBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDVweCAjYmFiZWNjLFxyXG4gIC8vICAgICAgICAgICAgIGluc2V0IC01cHggLTVweCAxMHB4ICNmZmZmZmY3MztcclxufVxyXG5cclxuLmZpZWxkIGlucHV0OmZvY3VzIH4gbGFiZWx7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA1cHggI2JhYmVjYyxcclxuICAgICAgICAgICAgICBpbnNldCAtMXB4IC0xcHggMnB4ICNmZmZmZmY3MztcclxufVxyXG5cclxuLmZpZWxkOm50aC1jaGlsZCgyKXtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZmllbGQgc3BhbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgY29sb3I6ICM1OTU5NTk7XHJcbn1cclxuc3BhbntcclxuICBwYWRkaW5nLXRvcDowLjJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OjFyZW07XHJcbn1cclxuXHJcbi5maWVsZCBsYWJlbHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNDVweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBjb2xvcjogIzY2NjY2NjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcblxyXG4uZmllbGQgaW5wdXQ6Zm9jdXMgfiBsYWJlbHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDEwcHggMCAxMHB4IDVweDtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzIGF7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMzQ5OGRiO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzOmhvdmVyIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBiYWNrZ3JvdW5kOiM2YTY0ZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAxNnB4IDAgMDtcclxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuXHJcbiAgYmFja2dyb3VuZDojNkE2NEQ3O1xyXG59XHJcblxyXG4uc2lnbnVwe1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzU5NTk1OTtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLnNpZ251cCBhe1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNpZ251cCBhOmhvdmVye1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "tXh8":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)='dismiss()'>Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"person\" slot=\"end\"></ion-icon>\n      <ion-chip  color=\"primary\">\n        <ion-label class=\"label-color\">\n          {{ userInfo.firstName +\" \"+ userInfo.middleName +\" \"+ userInfo.lastName }}\n        </ion-label>\n      </ion-chip>\n    </ion-item>\n\n    <ion-card-content>\n      Employee ID: {{ userInfo.employeeId }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n\n    <ion-item>\n        <ion-label class=\"label-color\">Location Tracking</ion-label>\n        <ion-toggle *ngIf=\"userInfo.allowTracking\" slot=\"end\" name=\"LocationTracking\" color=\"tertiary\" checked></ion-toggle>\n        <ion-toggle *ngIf=\"!userInfo.allowTracking\" slot=\"end\" name=\"LocationTracking\" color=\"tertiary\"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"label-color\">Address: </ion-label>\n      <ion-button (click)=\"showModalEditAddress()\">\n        Edit Address\n        <ion-icon name=\"create-outline\"></ion-icon>\n      </ion-button>\n    </ion-item>\n\n    <ion-item>\n      <div class=\"alert alert-primary alertstyle\" role=\"alert\">\n        <strong><small class=\"small\">Pickup Address: </small></strong><br>\n          {{userInfo.pickUpAddress}}\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div class=\"alert alert-primary alertstyle\" role=\"alert\">\n        <strong><small class=\"small\">Drop Address: </small></strong><br>\n          {{userInfo.dropAddress}}\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div class=\"alert alert-primary alertstyle\" role=\"alert\">\n        <strong><small class=\"small\">Pickup Nodal: </small></strong><br>\n          {{userInfo.pickUpNodalAddress}}\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div class=\"alert alert-primary alertstyle\" role=\"alert\">\n        <strong><small class=\"small\">Drop Nodal: </small></strong><br>\n          {{userInfo.dropNodalAddress}}\n      </div>\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "v+7O":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "ncJE");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "cRhG")).then(m => m.ProfilePageModule)
    },
    {
        path: 'edit-address',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-address-edit-address-module */ "edit-address-edit-address-module").then(__webpack_require__.bind(null, /*! ./edit-address/edit-address.module */ "vvDS")).then(m => m.EditAddressPageModule)
    },
    {
        path: 'admin-helpdesk',
        loadChildren: () => Promise.all(/*! import() | admin-helpdesk-admin-helpdesk-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-helpdesk-admin-helpdesk-module")]).then(__webpack_require__.bind(null, /*! ./admin-helpdesk/admin-helpdesk.module */ "jkdc")).then(m => m.AdminHelpdeskPageModule)
    },
    {
        path: 'tech-support',
        loadChildren: () => Promise.all(/*! import() | tech-support-tech-support-module */[__webpack_require__.e("common"), __webpack_require__.e("tech-support-tech-support-module")]).then(__webpack_require__.bind(null, /*! ./tech-support/tech-support.module */ "ZaUj")).then(m => m.TechSupportPageModule)
    },
    {
        path: 'roaster',
        loadChildren: () => __webpack_require__.e(/*! import() | roaster-roaster-module */ "roaster-roaster-module").then(__webpack_require__.bind(null, /*! ./roaster/roaster.module */ "NXyg")).then(m => m.RoasterPageModule)
    },
    {
        path: 'trip-info',
        loadChildren: () => Promise.all(/*! import() | trip-info-trip-info-module */[__webpack_require__.e("default~tab2-tab2-module~trip-info-trip-info-module"), __webpack_require__.e("trip-info-trip-info-module")]).then(__webpack_require__.bind(null, /*! ./trip-info/trip-info.module */ "xUwp")).then(m => m.TripInfoPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zxxS":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toggle {\n  --background: #000;\n  --background-checked: #7a49a5;\n  --handle-background: #7a49a5;\n  --handle-background-checked: #000;\n}\n\n.label-color {\n  color: #6a64ff;\n}\n\n.alertstyle {\n  width: 100%;\n  margin-top: 1rem;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  font-size: 15px;\n}\n\n.small {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUVBLDRCQUFBO0VBQ0EsaUNBQUE7QUFBRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBR0E7RUFDRSxnQkFBQTtBQUFGIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvZ2dsZSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjN2E0OWE1O1xyXG5cclxuICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjN2E0OWE1O1xyXG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzAwMDtcclxufVxyXG4ubGFiZWwtY29sb3J7XHJcbiAgY29sb3I6IzZhNjRmZjtcclxufVxyXG5cclxuLmFsZXJ0c3R5bGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxufVxyXG5cclxuLnNtYWxse1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map