webpackJsonp([3],{

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_form_login_form_component__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(609);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_form_login_form_component__["a" /* LoginFormComponent */],
            ],
            entryComponents: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginPageComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.component.module.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (username, password) {
        var _a = this.requestParametersForLogin(username, password), url = _a.url, headers = _a.headers;
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.requestParametersForLogin = function (username, password) {
        var url = 'login/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]((_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_2__models__["b" /* HTTP_HEADERS */].AUTHORIZATION] = __WEBPACK_IMPORTED_MODULE_2__models__["b" /* HTTP_HEADERS */].BASIC_PREFIX + ' ' + btoa(username + ':' + password),
            _a[__WEBPACK_IMPORTED_MODULE_2__models__["b" /* HTTP_HEADERS */].CONTENT_TYPE] = 'application/x-www-form-urlencoded',
            _a));
        return { url: url, headers: headers };
        var _a;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(609);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(global, loginService, app, context, playersService, messages) {
        this.global = global;
        this.loginService = loginService;
        this.app = app;
        this.context = context;
        this.playersService = playersService;
        this.messages = messages;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.global.enableSideMenu(false);
    };
    LoginPageComponent.prototype.ionViewDidLoad = function () { };
    LoginPageComponent.prototype.onSubmit = function ($event) {
        var _this = this;
        this.loginService.login($event.username, $event.password)
            .subscribe(function (user) {
            user = __assign({}, user, { roles: user.roles.map(function (rol) { return __WEBPACK_IMPORTED_MODULE_2__models__["d" /* Role */][rol]; }), active: true });
            _this.context.setUserLogged(user);
            if (user.playerId) {
                _this.playersService.getPlayer(user.playerId)
                    .subscribe(function (player) {
                    _this.context.setPlayerLogged(player);
                    _this.app.getActiveNav().setRoot('TabsController');
                }, function (error) { return _this.messages.showError('LOGIN.ERROR_LOGIN_MSG', 'LOGIN.ERROR_LOGIN_TITLE'); });
            }
        }, function (err) { return _this.messages.showError('LOGIN.ERROR_LOGIN_MSG', 'LOGIN.ERROR_LOGIN_TITLE'); });
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-login',template:/*ion-inline-start:"C:\FWF\fwf-client\src\app\pages\login\login.component.html"*/'<ion-content class="login">\n\n    <!-- App/module name -->\n\n    <h1 class="app-name">\n\n        {{ "APPLICATION_DETAIL.NAME" | translate }}\n\n    </h1>\n\n    <!-- Login form -->\n\n    <fwf-login-form (submitted)="onSubmit($event)"></fwf-login-form>\n\n</ion-content>\n\n\n\n<ion-footer padding-horizontal>\n\n    <!-- <img class="logo" src="assets/img/"> -->\n\n    <h3 class="copyright">\n\n        {{ "APPLICATION_DETAIL.COPYRIGHT" | translate }}\n\n    </h3>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\FWF\fwf-client\src\app\pages\login\login.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers__["f" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* ContextService */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["k" /* PlayersService */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["i" /* MessagesService */]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.wasSubmitted = false;
    }
    Object.defineProperty(LoginFormComponent.prototype, "canLogin", {
        /**
         * Enable login button for submission.
         * @returns {boolean} Indicator if form is ready for submission.
         */
        get: function () {
            return (!this.wasSubmitted && this.loginForm.invalid && !this.loginForm.touched)
                || (!this.loginForm.invalid && this.loginForm.touched);
        },
        enumerable: true,
        configurable: true
    });
    LoginFormComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    };
    LoginFormComponent.prototype.submit = function () {
        if (this.loginForm.valid) {
            this.submitted.emit(this.loginForm.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "submitted", void 0);
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-login-form',template:/*ion-inline-start:"C:\FWF\fwf-client\src\app\pages\login\login-form\login-form.component.html"*/'<form id="loginForm" [formGroup]="loginForm" (ngSubmit)="submit()" novalidate>\n\n\n\n    <!-- username -->\n\n    <ion-item>\n\n        <ion-input\n\n            id="username"\n\n            name="username"\n\n            formControlName="username"\n\n            placeholder="{{ \'LOGIN.USERNAME\' | translate }}"\n\n            required>\n\n        </ion-input>\n\n    </ion-item>\n\n    <!-- <fwf-control-messages\n\n        [submitted]="wasSubmitted"\n\n        [control]="loginForm.controls[\'username\']"\n\n        [waitTouch]="false">\n\n    </fwf-control-messages> -->\n\n\n\n    <!-- password -->\n\n    <ion-item>\n\n        <ion-input\n\n            id="password"\n\n            name="password"\n\n            type="password"\n\n            formControlName="password"\n\n            placeholder="{{ \'LOGIN.PASSWORD\' | translate }}"\n\n            required>\n\n        </ion-input>\n\n    </ion-item>\n\n    <!-- <fwf-control-messages\n\n        [submitted]="wasSubmitted"\n\n        [control]="loginForm.controls[\'password\']"\n\n        [waitTouch]="false">\n\n    </fwf-control-messages> -->\n\n\n\n    <!-- Submit button -->\n\n    <button ion-button\n\n            block\n\n            type="submit"\n\n            [disabled]="!canLogin">\n\n        {{ \'LOGIN.LOGIN\' | translate }}\n\n    </button>\n\n\n\n</form>\n\n'/*ion-inline-end:"C:\FWF\fwf-client\src\app\pages\login\login-form\login-form.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());

//# sourceMappingURL=login-form.component.js.map

/***/ })

});
//# sourceMappingURL=3.js.map