webpackJsonp([15],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.saveToken = function (token) {
        localStorage.setItem('token', token);
    };
    AuthService.prototype.isAuthenticated = function () {
        // get the token
        var token = this.getToken();
        // return a boolean reflecting
        // whether or not the token is expired
        return Object(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])(null, token);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentsFilterComponent = /** @class */ (function () {
    function PaymentsFilterComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.selectedFilters = {};
        this.years = [];
    }
    PaymentsFilterComponent.prototype.ngOnInit = function () {
        this.setDefaultFilters();
    };
    PaymentsFilterComponent.prototype.setDefaultFilters = function () {
        this.selectedFilters.showPaidPayments = false;
        this.selectedFilters.showNoPaidPayments = true;
        var date = __WEBPACK_IMPORTED_MODULE_2_moment__();
        if (date.month() === 11) {
            this.years.push(date.year() + 1);
        }
        for (var year = date.year(); year >= 2019; year--) {
            this.years.push(year);
        }
    };
    PaymentsFilterComponent.prototype.applyFilter = function () {
        this.viewCtrl.dismiss(this.selectedFilters);
    };
    PaymentsFilterComponent.prototype.clearAll = function () {
        this.setDefaultFilters();
        this.viewCtrl.dismiss(this.selectedFilters);
    };
    PaymentsFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-payments-filter',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\components\payments-filter\payments-filter.component.html"*/'<ion-item>\n\n    <ion-label>\n\n        <ion-icon name="funnel"\n\n                  item-start\n\n                  color="dark">\n\n        </ion-icon>\n\n        {{\'PAYMENTS_FILTER.FILTER\' | translate}}\n\n    </ion-label>\n\n</ion-item>\n\n<ion-item>\n\n    <ion-label>{{\'PAYMENTS_FILTER.SHOW_PAID\' | translate}}</ion-label>\n\n    <ion-toggle\n\n        [(ngModel)]="selectedFilters.showPaidPayments"\n\n        [checked]="selectedFilters.showPaidPayments">\n\n    </ion-toggle>\n\n</ion-item>\n\n<ion-item>\n\n    <ion-label>{{\'PAYMENTS_FILTER.SHOW_NO_PAID\' | translate}}</ion-label>\n\n    <ion-toggle\n\n        [(ngModel)]="selectedFilters.showNoPaidPayments"\n\n        [checked]="selectedFilters.showNoPaidPayments">\n\n    </ion-toggle>\n\n</ion-item>\n\n<ion-item>\n\n    <ion-label>{{\'PAYMENTS_FILTER.YEAR\' | translate}}</ion-label>\n\n    <ion-select [(ngModel)]="selectedFilters.year">\n\n        <ion-option *ngFor="let year of years">\n\n            {{year}}\n\n        </ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n<ion-item class="item-padding">\n\n    <button\n\n            ion-button\n\n            clear\n\n            item-start\n\n            class="reset-button"\n\n            (click)="clearAll()">\n\n        {{\'CLEAR_ALL\' | translate}}\n\n    </button>\n\n    <button\n\n            ion-button\n\n            clear\n\n            item-end\n\n            class="apply-button"\n\n            (click)="applyFilter($event)">\n\n        {{\'APPLY\' | translate}}\n\n    </button>\n\n</ion-item>'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\components\payments-filter\payments-filter.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], PaymentsFilterComponent);
    return PaymentsFilterComponent;
}());

//# sourceMappingURL=payments-filter.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"pages/about/about.component.module": [
		580,
		14
	],
	"pages/call-up/call-up.component.module": [
		577,
		13
	],
	"pages/discards/discards.component.module": [
		578,
		12
	],
	"pages/introduction/introduction.component.module": [
		579,
		11
	],
	"pages/login/login.component.module": [
		581,
		3
	],
	"pages/match/match.component.module": [
		582,
		2
	],
	"pages/matches/matches.component.module": [
		584,
		0
	],
	"pages/my-valuations/my-valuations.component.module": [
		583,
		10
	],
	"pages/payment-management/payment-management.component.module": [
		585,
		1
	],
	"pages/payments/payments.component.module": [
		586,
		9
	],
	"pages/profile/profile.component.module": [
		589,
		8
	],
	"pages/stats/stats.component.module": [
		587,
		7
	],
	"pages/tabs-controller/tabs-controller.module": [
		590,
		6
	],
	"pages/teams/teams.component.module": [
		588,
		5
	],
	"pages/valuations/valuations.component.module": [
		591,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyIndicatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DEFAULT_LOCALIZED_MESSAGE = 'BUSY_INDICATOR.PLEASE_WAIT';
var BusyIndicatorService = /** @class */ (function () {
    function BusyIndicatorService(loadingCtrl, translate) {
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
    }
    BusyIndicatorService.prototype.loadingAnimationStart = function (message) {
        if (!message) {
            message = this.translate.instant(DEFAULT_LOCALIZED_MESSAGE);
        }
        var options = { content: message };
        this.loading = this.loadingCtrl.create(options);
        this.loading.present();
        this.isLoading = true;
    };
    BusyIndicatorService.prototype.loadingAnimationEnd = function () {
        var _this = this;
        if (this.loading) {
            this.loading.dismiss()
                .then(function () { return _this.isLoading = false; })
                .catch(function () { });
        }
    };
    BusyIndicatorService.prototype.isBusyIndicatorVisible = function () {
        return this.isLoading;
    };
    BusyIndicatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], BusyIndicatorService);
    return BusyIndicatorService;
}());

//# sourceMappingURL=busy-indicator.service.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empty_state_empty_state_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_match_add_match_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__overflow_menu_overflow_menu_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teams_maker_teams_maker_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scoreboard_scoreboard_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_profile_edit_profile_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__payments_filter_payments_filter_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__payments_management_payment_management_player_payment_management_player_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__payments_management_add_payments_add_payments_component__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                // A list of supporting modules.
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
            ],
            declarations: [
                // The component, directive and pipe classes that belong to this module.
                __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__empty_state_empty_state_component__["a" /* EmptyStateComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_match_add_match_component__["a" /* AddMatchComponent */],
                __WEBPACK_IMPORTED_MODULE_6__overflow_menu_overflow_menu_component__["a" /* OverflowMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__teams_maker_teams_maker_component__["a" /* TeamsMakerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__scoreboard_scoreboard_component__["a" /* ScoreboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__payments_filter_payments_filter_component__["a" /* PaymentsFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__payments_management_payment_management_player_payment_management_player_component__["a" /* PaymentManagementPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__payments_management_add_payments_add_payments_component__["a" /* AddPaymentsComponent */],
            ],
            entryComponents: [
                // A list of components that are not referenced in a reachable component template.
                __WEBPACK_IMPORTED_MODULE_4__empty_state_empty_state_component__["a" /* EmptyStateComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_match_add_match_component__["a" /* AddMatchComponent */],
                __WEBPACK_IMPORTED_MODULE_6__overflow_menu_overflow_menu_component__["a" /* OverflowMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__teams_maker_teams_maker_component__["a" /* TeamsMakerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__scoreboard_scoreboard_component__["a" /* ScoreboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__payments_filter_payments_filter_component__["a" /* PaymentsFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__payments_management_payment_management_player_payment_management_player_component__["a" /* PaymentManagementPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__payments_management_add_payments_add_payments_component__["a" /* AddPaymentsComponent */]
            ],
            exports: [
                // A list of declarations — component, directive, and pipe classes — that an importing module can use.
                __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__empty_state_empty_state_component__["a" /* EmptyStateComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_match_add_match_component__["a" /* AddMatchComponent */],
                __WEBPACK_IMPORTED_MODULE_7__teams_maker_teams_maker_component__["a" /* TeamsMakerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__payments_filter_payments_filter_component__["a" /* PaymentsFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__payments_management_payment_management_player_payment_management_player_component__["a" /* PaymentManagementPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__payments_management_add_payments_add_payments_component__["a" /* AddPaymentsComponent */]
            ],
            providers: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(47);
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





var AddMatchComponent = /** @class */ (function () {
    function AddMatchComponent(viewCtrl, formBuilder, alertCtrl, translate, matchesService, navParams) {
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.matchesService = matchesService;
        this.navParams = navParams;
    }
    AddMatchComponent.prototype.ngOnInit = function () {
        this.match = this.navParams.get('match');
        if (this.match) {
            this.matchForm = this.formBuilder.group({
                name: [this.match.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                date: [this.match.date, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                numPlayers: [this.match.numPlayers, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                openCallUp: [this.match.openCallUp],
                cancelled: [this.match.cancelled]
            });
        }
        else {
            this.matchForm = this.formBuilder.group({
                name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                date: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                numPlayers: [14, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                openCallUp: [false],
                cancelled: [false]
            });
        }
    };
    AddMatchComponent.prototype.saveMatch = function () {
        var _this = this;
        if (this.match) {
            this.match = __assign({}, this.match, { name: this.matchForm.controls['name'].value, date: this.matchForm.controls['date'].value, numPlayers: this.matchForm.controls['numPlayers'].value, openCallUp: this.matchForm.controls['openCallUp'].value, cancelled: this.matchForm.controls['cancelled'].value });
            this.matchesService.updateMatch(this.match)
                .subscribe(function (data) { return _this.viewCtrl.dismiss(true); }, function (error) { return _this.showError(error); });
        }
        else {
            var match = {
                name: this.matchForm.controls['name'].value,
                date: this.matchForm.controls['date'].value,
                numPlayers: this.matchForm.controls['numPlayers'].value,
                openCallUp: this.matchForm.controls['openCallUp'].value,
                cancelled: false,
                played: false
            };
            this.matchesService.createMatch(match).subscribe(function (data) { return _this.viewCtrl.dismiss(true); }, function (error) { return _this.showError(error); });
        }
    };
    AddMatchComponent.prototype.cancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translate.instant('ADD_MATCH_PAGE.CANCEL'),
            subTitle: this.translate.instant('ADD_MATCH_PAGE.SURE'),
            buttons: [
                {
                    text: this.translate.instant('CANCEL_BUTTON'),
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    role: 'ok',
                    handler: function (data) {
                        _this.viewCtrl.dismiss(false);
                    }
                },
            ]
        });
        alert.present();
    };
    AddMatchComponent.prototype.showError = function (error) {
        var alert = this.alertCtrl.create({
            title: this.translate.instant('ADD_MATCH_PAGE.ERROR'),
            subTitle: error,
            buttons: ['OK']
        });
        alert.present();
    };
    AddMatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-add-match',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\components\add-match\add-match.component.html"*/'<ion-header>\n\n        <ion-navbar color="primary" hideBackButton>\n\n            <ion-buttons left>\n\n                <button ion-button \n\n                        icon-only\n\n                        clear\n\n                        (click)="cancel()">\n\n                    <ion-icon name="close-circle"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n            <ion-title>\n\n                {{ "ADD_MATCH_PAGE.TITLE" | translate}}\n\n            </ion-title>\n\n            <ion-buttons end>\n\n                <button ion-button\n\n                        icon-only\n\n                        clear\n\n                        (click)="saveMatch()"\n\n                        [disabled]="!matchForm.valid">\n\n                    <ion-icon name="checkmark-circle"></ion-icon>\n\n                </button>        \n\n            </ion-buttons>\n\n        </ion-navbar>\n\n    </ion-header>\n\n\n\n<ion-content padding>\n\n    <form [formGroup]="matchForm">\n\n        <ion-item>\n\n            <ion-label floating>{{\'ADD_MATCH_PAGE.NAME\' | translate}}</ion-label>\n\n            <ion-input [formControl]="matchForm.controls[\'name\']" type="text"></ion-input>\n\n            <div *ngIf="!matchForm.controls.name.valid && matchForm.controls.name.dirty" class="validator-error">\n\n                Please enter a name.\n\n            </div>\n\n        </ion-item>\n\n            \n\n        <ion-item>\n\n            <ion-label floating>{{\'ADD_MATCH_PAGE.DATE\' | translate}}</ion-label>\n\n            <ion-datetime [formControl]="matchForm.controls[\'date\']" displayFormat="DD/MM/YYYY"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>{{\'ADD_MATCH_PAGE.NUMPLAYERS\' | translate}}</ion-label>\n\n            <ion-input [formControl]="matchForm.controls[\'numPlayers\']" type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'ADD_MATCH_PAGE.OPEN_CALL_UP\' | translate}}</ion-label>\n\n            <ion-checkbox [formControl]="matchForm.controls[\'openCallUp\']"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="match?.id">\n\n            <ion-label>{{\'ADD_MATCH_PAGE.CANCELLED\' | translate}}</ion-label>\n\n            <ion-checkbox [formControl]="matchForm.controls[\'cancelled\']"></ion-checkbox>\n\n        </ion-item>\n\n    </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\components\add-match\add-match.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["h" /* MatchesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AddMatchComponent);
    return AddMatchComponent;
}());

//# sourceMappingURL=add-match.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverflowMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverflowMenuComponent = /** @class */ (function () {
    function OverflowMenuComponent(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    OverflowMenuComponent.prototype.ngOnInit = function () {
        this.options = this.navParams.get('options');
    };
    OverflowMenuComponent.prototype.optionSelected = function (optionSelected) {
        this.viewCtrl.dismiss(optionSelected);
    };
    OverflowMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-overflow-menu',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\components\overflow-menu\overflow-menu.component.html"*/'\n\n<ion-list>\n\n    <button\n\n            ion-item\n\n            no-lines\n\n            *ngFor="let item of options"\n\n            (click)="optionSelected(item)">\n\n        <ion-icon name="{{item.icon}}"></ion-icon>\n\n        {{item.token | translate}}\n\n    </button>\n\n</ion-list>\n\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\components\overflow-menu\overflow-menu.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], OverflowMenuComponent);
    return OverflowMenuComponent;
}());

//# sourceMappingURL=overflow-menu.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsMakerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeamsMakerComponent = /** @class */ (function () {
    function TeamsMakerComponent(viewCtrl, navParams, alertCtrl, translate, matchesService, messages) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.matchesService = matchesService;
        this.messages = messages;
        this.colorWhite = __WEBPACK_IMPORTED_MODULE_3__models__["e" /* TeamColor */].WHITE;
        this.colorBlack = __WEBPACK_IMPORTED_MODULE_3__models__["e" /* TeamColor */].BLACK;
    }
    TeamsMakerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.match = this.navParams.get('match');
        this.player = this.navParams.get('player');
        this.listPlayers = this.match.callUp.map(function (playerCallUp) {
            var team = _this.match.team1
                && _this.match.team1.players.filter(function (el) { return el.id === playerCallUp.player.id; }).length > 0 ?
                _this.match.team1.color :
                _this.match.team2 && _this.match.team2.players.filter(function (el) { return el.id === playerCallUp.player.id; }).length > 0 ?
                    _this.match.team2.color : undefined;
            return {
                player: playerCallUp.player,
                team: team
            };
        });
        this.numPlayersTeam = this.match.numPlayers / 2;
        this.filterTeams();
    };
    TeamsMakerComponent.prototype.onSelectChange = function (selected, playerId) {
        if (selected === '---') {
            var index = this.listPlayers.findIndex(function (el) { return el.player.id === playerId; });
            this.listPlayers[index].team = undefined;
        }
        this.filterTeams();
    };
    TeamsMakerComponent.prototype.saveTeams = function () {
        var _this = this;
        this.match.team1 = {
            color: __WEBPACK_IMPORTED_MODULE_3__models__["e" /* TeamColor */].WHITE,
            players: this.listPlayersWhite.map(function (el) { return el.player; })
        };
        this.match.team2 = {
            color: __WEBPACK_IMPORTED_MODULE_3__models__["e" /* TeamColor */].BLACK,
            players: this.listPlayersBlack.map(function (el) { return el.player; })
        };
        this.match.mister = {
            name: this.player.alias,
            id: this.player.id,
            fixed: this.player.fixed
        };
        this.matchesService.updateTeams(this.match.id, this.player.id, [this.match.team1, this.match.team2])
            .subscribe(function (data) { return _this.viewCtrl.dismiss(true); }, function (error) { return _this.messages.showError(error); });
    };
    TeamsMakerComponent.prototype.cancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translate.instant('ADD_MATCH_PAGE.CANCEL'),
            subTitle: this.translate.instant('ADD_MATCH_PAGE.SURE'),
            buttons: [
                {
                    text: this.translate.instant('CANCEL_BUTTON'),
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    role: 'ok',
                    handler: function (data) {
                        _this.viewCtrl.dismiss(false);
                    }
                },
            ]
        });
        alert.present();
    };
    TeamsMakerComponent.prototype.filterTeams = function () {
        this.listPlayersWhite = this.listPlayers.filter(function (el) { return el.team === __WEBPACK_IMPORTED_MODULE_3__models__["e" /* TeamColor */].WHITE; });
        this.listPlayersBlack = this.listPlayers.filter(function (el) { return el.team === __WEBPACK_IMPORTED_MODULE_3__models__["e" /* TeamColor */].BLACK; });
    };
    TeamsMakerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-teams-maker',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\components\teams-maker\teams-maker.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">   \n\n        <ion-buttons left>\n\n            <button ion-button \n\n                    icon-only\n\n                    clear\n\n                    (click)="cancel()">\n\n                <ion-icon name="close-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>     \n\n        <ion-title>\n\n            {{match.name}} \n\n            <p class="subtitle">{{"MATCH_PAGE.TEAMS_MAKER" | translate}}</p>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button\n\n                    icon-only\n\n                    clear\n\n                    (click)="saveTeams()">\n\n                <ion-icon name="checkmark-circle"></ion-icon>\n\n            </button>        \n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>                    \n\n                    <ion-list>\n\n                        <ion-list-header>\n\n                            {{\'WHITE\' | translate}}\n\n                        </ion-list-header>\n\n                        <ion-item *ngFor="let whitePlayer of listPlayersWhite; let i = index;">\n\n                            {{i+1}}. {{whitePlayer?.player.name}} <span *ngIf="!whitePlayer?.player.fixed">(s)</span>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ion-list>\n\n                        <ion-list-header>\n\n                            {{\'BLACK\' | translate}}\n\n                        </ion-list-header>\n\n                        <ion-item *ngFor="let blackPlayer of listPlayersBlack; let i = index;">\n\n                                {{i+1}}. {{blackPlayer?.player.name}} <span *ngIf="!blackPlayer?.player.fixed">(s)</span>\n\n                            </ion-item>\n\n                    </ion-list>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-card>  \n\n    <ion-card>        \n\n        <ion-list>\n\n            <ion-item *ngFor="let playerTeam of listPlayers; let i = index;">\n\n                <ion-label>{{i+1}}. {{playerTeam.player.name}} <span *ngIf="!playerTeam.player.fixed">(s)</span></ion-label>\n\n                <ion-select [(ngModel)]="playerTeam.team" (ionChange)="onSelectChange($event, playerTeam.player.id)">\n\n                    <ion-option selected=true>---</ion-option>\n\n                    <ion-option [value]="colorWhite" disabled="{{listPlayersWhite.length === numPlayersTeam}}">{{\'WHITE\' | translate}}</ion-option>\n\n                    <ion-option [value]="colorBlack" disabled="{{listPlayersBlack.length === numPlayersTeam}}">{{\'BLACK\' | translate}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </ion-list>        \n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\components\teams-maker\teams-maker.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["h" /* MatchesService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["i" /* MessagesService */]])
    ], TeamsMakerComponent);
    return TeamsMakerComponent;
}());

//# sourceMappingURL=teams-maker.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentManagementPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__payments_filter_payments_filter_component__ = __webpack_require__(153);
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








var PaymentManagementPlayerComponent = /** @class */ (function () {
    function PaymentManagementPlayerComponent(navParams, paymentService, translate, popoverCtrl, messages, alertCtrl) {
        this.navParams = navParams;
        this.paymentService = paymentService;
        this.translate = translate;
        this.popoverCtrl = popoverCtrl;
        this.messages = messages;
        this.alertCtrl = alertCtrl;
        this.payments = [];
        this.selectedFilters = {};
    }
    PaymentManagementPlayerComponent.prototype.ngOnInit = function () {
        this.player = this.navParams.get('player');
        this.selectedFilters.showPaidPayments = false;
        this.selectedFilters.showNoPaidPayments = true;
        this.filterIconClass = this.getFilterIconClass();
    };
    PaymentManagementPlayerComponent.prototype.ionViewWillEnter = function () {
        // It's necessary when comes here from back button'
        this.loadListPayments();
    };
    PaymentManagementPlayerComponent.prototype.loadListPayments = function (refresher) {
        var _this = this;
        this.paymentService
            .fetchPayments(this.player.id, this.selectedFilters)
            .subscribe(function (data) {
            var payments = data.map(function (payment) {
                var matchDate = payment.matchDate;
                var name = '';
                var monthIndex = 0;
                if (matchDate) {
                    name = matchDate.split('T')[0];
                }
                else {
                    name = _this.translate.instant('MONTHS.' + payment.month) + " - " + payment.year;
                    monthIndex = __WEBPACK_IMPORTED_MODULE_5__models__["c" /* Month */].getIndex(payment.month);
                }
                return __assign({}, payment, { name: name, monthIndex: monthIndex });
            });
            _this.initializeList(payments);
        }, function (err) {
            _this.endAnimations(refresher);
            _this.messages.showError(err);
        }, function () { return _this.endAnimations(refresher); });
    };
    PaymentManagementPlayerComponent.prototype.openFilter = function (clickEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__payments_filter_payments_filter_component__["a" /* PaymentsFilterComponent */], { cssClass: 'popover__filter' });
        popover.onDidDismiss(function (selectedFilters) {
            if (selectedFilters) {
                _this.selectedFilters = selectedFilters;
                _this.loadListPayments();
                _this.filterIconClass = _this.getFilterIconClass();
            }
        });
        popover.present({
            ev: clickEvent
        });
    };
    PaymentManagementPlayerComponent.prototype.createPayment = function () {
        var _this = this;
        var monthNewPayment = __WEBPACK_IMPORTED_MODULE_5__models__["c" /* Month */].getMonth(__WEBPACK_IMPORTED_MODULE_3_moment__().month());
        var year = __WEBPACK_IMPORTED_MODULE_3_moment__().year();
        if (this.payments && this.payments.length) {
            var monthLastPayment = this.payments[0].month;
            if (monthLastPayment === __WEBPACK_IMPORTED_MODULE_5__models__["c" /* Month */].DECEMBER) {
                monthNewPayment = __WEBPACK_IMPORTED_MODULE_5__models__["c" /* Month */].JANUARY;
            }
            else {
                monthNewPayment = __WEBPACK_IMPORTED_MODULE_5__models__["c" /* Month */].getMonth(__WEBPACK_IMPORTED_MODULE_5__models__["c" /* Month */].getIndex(monthLastPayment) + 1);
            }
        }
        var payment = {
            playerId: this.player.id,
            year: year,
            paid: false,
            amount: 15,
            month: monthNewPayment
        };
        this.paymentService.createPayment(payment)
            .subscribe(function (data) { return _this.loadListPayments(); }, function (error) { return _this.messages.showError(error); });
    };
    PaymentManagementPlayerComponent.prototype.paid = function (payment, slidingItem) {
        var _this = this;
        payment.paid = true;
        payment.paymentDate = new Date();
        this.paymentService.updatePayment(payment)
            .subscribe(function (data) { return _this.loadListPayments(); }, function (error) { return _this.messages.showError(error); });
        slidingItem.close();
    };
    PaymentManagementPlayerComponent.prototype.undoPaid = function (payment, slidingItem) {
        var _this = this;
        payment.paid = false;
        delete payment.paymentDate;
        this.paymentService.updatePayment(payment)
            .subscribe(function (data) { return _this.loadListPayments(); }, function (error) { return _this.messages.showError(error); });
        slidingItem.close();
    };
    PaymentManagementPlayerComponent.prototype.totalSwipeAction = function (payment, slidingItem) {
        if (payment.paid) {
            this.undoPaid(payment, slidingItem);
        }
        else {
            this.paid(payment, slidingItem);
        }
    };
    PaymentManagementPlayerComponent.prototype.deletePayment = function (payment, slidingItem) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translate.instant('PAYMENT_MANAGEMENT_PAGE.DELETE_PAYMENT'),
            subTitle: this.translate.instant('PAYMENT_MANAGEMENT_PAGE.DELETE_SURE'),
            buttons: [
                {
                    text: this.translate.instant('CANCEL_BUTTON'),
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    role: 'ok',
                    handler: function (response) {
                        _this.paymentService.deletePayment(payment.id)
                            .subscribe(function (data) {
                            _this.loadListPayments();
                            _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                        }, function (error) { return _this.messages.showError(error); });
                    }
                },
            ]
        });
        alert.present();
        slidingItem.close();
    };
    PaymentManagementPlayerComponent.prototype.endAnimations = function (refresher) {
        if (refresher) {
            refresher.complete();
        }
    };
    PaymentManagementPlayerComponent.prototype.initializeList = function (data) {
        this.payments = __WEBPACK_IMPORTED_MODULE_4_lodash__["orderBy"](data, ['year', 'monthIndex', 'matchDate'], ['desc', 'desc', 'desc']);
    };
    PaymentManagementPlayerComponent.prototype.getFilterIconClass = function () {
        var classIcon;
        if (!this.selectedFilters.showNoPaidPayments || !this.selectedFilters.showPaidPayments || this.selectedFilters.year) {
            classIcon = 'filter__in-use';
        }
        return classIcon;
    };
    PaymentManagementPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-payment-management-player',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\components\payments-management\payment-management-player\payment-management-player.component.html"*/'<ion-header>\n        <ion-navbar color="primary">\n            <!--Android pushes buttons to the left even if start attribute is present.\n                Check demo: http://ionicframework.com/docs/v2/components/#buttons-in-components-->\n            <!--If placing the menuToggle in a navbar or toolbar, it should be placed as a child of the <ion-navbar> or <ion-toolbar>, and not in the <ion-buttons> element\n            http://ionicframework.com/docs/v2/api/components/menu/MenuToggle/-->\n            <button ion-button menuToggle>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n            <ion-title>\n                {{ "PAYMENTS_PAGE.TITLE" | translate}} {{player.alias}}\n            </ion-title>\n            <ion-buttons end>\n                <button ion-button\n                        icon-only\n                        clear\n                        [ngClass]="filterIconClass"\n                        (click)="openFilter($event)">\n                    <ion-icon name="funnel"></ion-icon>\n                </button>\n                <button *ngIf="player.fixed"\n                        ion-button\n                        icon-only\n                        clear\n                        (click)="createPayment()">\n                    <ion-icon name="add"></ion-icon>\n                </button>\n            </ion-buttons>\n        </ion-navbar>\n    </ion-header>\n    <ion-content>\n        <ion-refresher (ionRefresh)="loadListPayments($event)">\n            <ion-refresher-content\n                    pullingIcon="arrow-dropdown"\n                    pullingText="{{\'REFRESHER_COMPONENT.PULL_TO_REFRESH\' | translate}}"\n                    refreshingSpinner="circles">\n            </ion-refresher-content>\n        </ion-refresher>\n\n        <ion-list>\n            <ion-item-sliding #slidingItem *ngFor="let payment of payments">\n                <ion-item text-wrap>\n                    <ion-icon item-left *ngIf="payment.paid" name="thumbs-up"></ion-icon>\n                    <ion-icon item-left *ngIf="!payment.paid" name="thumbs-down"></ion-icon>\n                    <h3 class="payment-name">\n                        {{payment.name}}\n                    </h3>\n                    <h4 *ngIf="payment.paid">\n                        <span id="paymentAmount">\n                            {{payment.amount}} €\n                        </span>\n                    </h4>\n                    <h4 *ngIf="!payment.paid">\n                        <span id="paymentAmount" class="payment-amount-no-paid">\n                            {{payment.amount}} €\n                        </span>\n                    </h4>\n                </ion-item>\n                <ion-item-options side="left">\n                    <button ion-button color="danger"\n                            (click)="deletePayment(payment, slidingItem)">\n                        <ion-icon name="trash"></ion-icon>\n                        {{\'DELETE_BUTTON\' | translate}}\n                    </button>\n                </ion-item-options>\n                <ion-item-options side="right" (ionSwipe)="totalSwipeAction(payment, slidingItem)">\n                    <button ion-button color="primary"\n                            (click)="paid(payment, slidingItem)" *ngIf="!payment.paid">\n                        <ion-icon name="cash"></ion-icon>\n                        {{\'PAID_BUTTON\' | translate}}\n                    </button>\n                    <button ion-button color="secondary"\n                            (click)="undoPaid(payment, slidingItem)" *ngIf="payment.paid">\n                        <ion-icon name="undo"></ion-icon>\n                        {{\'UNDO_BUTTON\' | translate}}\n                    </button>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n        <!--No treatments available to display-->\n        <fwf-empty-state *ngIf="payments?.length === 0">\n            {{\'PAYMENTS_PAGE.NO_FOUND\' | translate}}\n        </fwf-empty-state>\n    </ion-content>\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\components\payments-management\payment-management-player\payment-management-player.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["j" /* PaymentsService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["i" /* MessagesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PaymentManagementPlayerComponent);
    return PaymentManagementPlayerComponent;
}());

//# sourceMappingURL=payment-management-player.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPaymentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_forkJoin__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddPaymentsComponent = /** @class */ (function () {
    function AddPaymentsComponent(viewCtrl, formBuilder, alertCtrl, translate, paymentService, messages, navParams) {
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.paymentService = paymentService;
        this.messages = messages;
        this.navParams = navParams;
    }
    AddPaymentsComponent.prototype.ngOnInit = function () {
        var fakePlayerAll = {
            id: 'fakeIdAll',
            alias: this.translate.instant('ADD_PAYMENTS_PAGE.ALL'),
            fixed: true,
        };
        this.fixedPlayerList = [fakePlayerAll].concat(this.navParams.get('fixedPlayerList'));
        this.paymentForm = this.formBuilder.group({
            date: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            player: [undefined, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    AddPaymentsComponent.prototype.savePayments = function () {
        var _this = this;
        var selectedPlayer = this.paymentForm.controls['player'].value;
        var selectedDate = this.paymentForm.controls['date'].value;
        var year = +selectedDate.split('-')[0];
        var monthNumber = +selectedDate.split('-')[1] - 1;
        if (selectedPlayer !== 'fakeIdAll') {
            var payment = {
                playerId: selectedPlayer,
                year: year,
                paid: false,
                amount: 15,
                month: __WEBPACK_IMPORTED_MODULE_5__models__["c" /* Month */].getMonth(monthNumber)
            };
            this.paymentService.createPayment(payment)
                .subscribe(function (data) { return _this.viewCtrl.dismiss(true); }, function (error) { return _this.messages.showError(error, _this.translate.instant('ADD_PAYMENTS_PAGE.ERROR')); });
        }
        else {
            Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_forkJoin__["forkJoin"])(this.fixedPlayerList.filter(function (player) { return player.id !== 'fakeIdAll'; }).map(function (player) {
                var payment = {
                    playerId: player.id,
                    year: year,
                    paid: false,
                    amount: 15,
                    month: __WEBPACK_IMPORTED_MODULE_5__models__["c" /* Month */].getMonth(monthNumber)
                };
                return _this.paymentService.createPayment(payment);
            })).subscribe(function (data) { return _this.viewCtrl.dismiss(true); }, function (error) { return _this.messages.showError(error, _this.translate.instant('ADD_PAYMENTS_PAGE.ERROR')); });
        }
    };
    AddPaymentsComponent.prototype.cancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translate.instant('ADD_PAYMENTS_PAGE.CANCEL'),
            subTitle: this.translate.instant('ADD_PAYMENTS_PAGE.SURE'),
            buttons: [
                {
                    text: this.translate.instant('CANCEL_BUTTON'),
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    role: 'ok',
                    handler: function (data) {
                        _this.viewCtrl.dismiss(false);
                    }
                },
            ]
        });
        alert.present();
    };
    AddPaymentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-add-payments',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\components\payments-management\add-payments\add-payments.component.html"*/'<ion-header>\n        <ion-navbar color="primary" hideBackButton>\n            <ion-buttons left>\n                <button ion-button\n                        icon-only\n                        clear\n                        (click)="cancel()">\n                    <ion-icon name="close-circle"></ion-icon>\n                </button>\n            </ion-buttons>\n            <ion-title>\n                {{ "ADD_PAYMENTS_PAGE.TITLE" | translate}}\n            </ion-title>\n            <ion-buttons end>\n                <button ion-button\n                        icon-only\n                        clear\n                        (click)="savePayments()"\n                        [disabled]="!paymentForm.valid">\n                    <ion-icon name="checkmark-circle"></ion-icon>\n                </button>\n            </ion-buttons>\n        </ion-navbar>\n    </ion-header>\n\n<ion-content padding>\n    <form [formGroup]="paymentForm">\n        <ion-item>\n            <ion-label floating>{{\'ADD_PAYMENTS_PAGE.DATE\' | translate}}</ion-label>\n            <ion-datetime [formControl]="paymentForm.controls[\'date\']" displayFormat="MMMM/YYYY"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>{{\'ADD_PAYMENTS_PAGE.PLAYER\' | translate}}</ion-label>\n            <ion-select [formControl]="paymentForm.controls[\'player\']">\n              <ion-option *ngFor="let player of fixedPlayerList" [value]="player?.id">\n                  {{ player.alias }}\n              </ion-option>\n          </ion-select>\n            <ion-option ></ion-option>\n        </ion-item>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\components\payments-management\add-payments\add-payments.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["j" /* PaymentsService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["i" /* MessagesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AddPaymentsComponent);
    return AddPaymentsComponent;
}());

//# sourceMappingURL=add-payments.component.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScoreboardComponent = /** @class */ (function () {
    function ScoreboardComponent(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    ScoreboardComponent.prototype.ngOnInit = function () {
        this.scoreBlack = this.navParams.get('scoreBlack');
        this.scoreWhite = this.navParams.get('scoreWhite');
    };
    ScoreboardComponent.prototype.addWhite = function () {
        this.scoreWhite++;
    };
    ScoreboardComponent.prototype.subWhite = function () {
        if (this.scoreWhite > 0) {
            this.scoreWhite--;
        }
    };
    ScoreboardComponent.prototype.addBlack = function () {
        this.scoreBlack++;
    };
    ScoreboardComponent.prototype.subBlack = function () {
        if (this.scoreBlack > 0) {
            this.scoreBlack--;
        }
    };
    ScoreboardComponent.prototype.save = function () {
        this.viewCtrl.dismiss({ actionOk: true, scoreWhite: this.scoreWhite, scoreBlack: this.scoreBlack });
    };
    ScoreboardComponent.prototype.cancel = function () {
        this.viewCtrl.dismiss({ actionOk: false });
    };
    ScoreboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-scoreboard',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\components\scoreboard\scoreboard.component.html"*/'<ion-card>\n\n    <ion-item>        \n\n        <ion-label>{{\'WHITE\' | translate}}</ion-label>\n\n        <ion-icon item-right name="remove-circle" color="primary" (click)="subWhite()">{{scoreWhite}}</ion-icon>\n\n        <!-- <ion-label item-right>  </ion-label> -->\n\n        <ion-icon item-right name="add-circle" color="primary" (click)="addWhite()"></ion-icon>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>{{\'BLACK\' | translate}}</ion-label>\n\n        <ion-icon item-right name="remove-circle" color="primary" (click)="subBlack()">{{scoreBlack}}</ion-icon>\n\n        <!-- <ion-label item-right>  </ion-label> -->\n\n        <ion-icon item-right name="add-circle" color="primary" (click)="addBlack()"></ion-icon>\n\n    </ion-item>\n\n    <ion-buttons>\n\n        <button ion-button (click)="save()">OK</button>\n\n        <button ion-button (click)="cancel()">Cancel</button>\n\n    </ion-buttons>\n\n</ion-card>\n\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\components\scoreboard\scoreboard.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ScoreboardComponent);
    return ScoreboardComponent;
}());

//# sourceMappingURL=scoreboard.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(47);
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





var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(viewCtrl, formBuilder, alertCtrl, translate, navParams, profileService) {
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.navParams = navParams;
        this.profileService = profileService;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.profile = this.navParams.get('profile');
        if (this.profile) {
            this.profileForm = this.formBuilder.group({
                name: [this.profile.fullName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                alias: [this.profile.alias, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                email: [this.profile.email, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
                username: [this.profile.username, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                phone: [this.profile.phoneNumber, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(9), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(9)]]
            });
        }
    };
    EditProfileComponent.prototype.saveProfile = function () {
        var _this = this;
        this.profile = __assign({}, this.profile, { fullName: this.profileForm.controls['name'].value, alias: this.profileForm.controls['alias'].value, email: this.profileForm.controls['email'].value, phoneNumber: this.profileForm.controls['phone'].value, username: this.profileForm.controls['username'].value, user: __assign({}, this.profile.user, { fullName: this.profileForm.controls['name'].value, username: this.profileForm.controls['username'].value }), player: __assign({}, this.profile.player, { alias: this.profileForm.controls['alias'].value, email: this.profileForm.controls['email'].value, phoneNumber: this.profileForm.controls['phone'].value }) });
        this.profileService.updateProfile(this.profile)
            .subscribe(function (response) { return _this.viewCtrl.dismiss(_this.profile); }, function (error) { return _this.showError(error); });
    };
    EditProfileComponent.prototype.cancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translate.instant('EDIT_PROFILE_PAGE.CANCEL'),
            subTitle: this.translate.instant('EDIT_PROFILE_PAGE.SURE'),
            buttons: [
                {
                    text: this.translate.instant('CANCEL_BUTTON'),
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    role: 'ok',
                    handler: function (data) {
                        _this.viewCtrl.dismiss();
                    }
                },
            ]
        });
        alert.present();
    };
    EditProfileComponent.prototype.showError = function (error) {
        var alert = this.alertCtrl.create({
            title: this.translate.instant('EDIT_PROFILE_PAGE.ERROR'),
            subTitle: error,
            buttons: ['OK']
        });
        alert.present();
    };
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-edit-profile',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\components\edit-profile\edit-profile.component.html"*/'<ion-header>\n\n        <ion-navbar color="primary" hideBackButton>\n\n            <ion-buttons left>\n\n                <button ion-button \n\n                        icon-only\n\n                        clear\n\n                        (click)="cancel()">\n\n                    <ion-icon name="close-circle"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n            <ion-title>\n\n                {{ "EDIT_PROFILE_PAGE.TITLE" | translate}}\n\n            </ion-title>\n\n            <ion-buttons end>\n\n                <button ion-button\n\n                        icon-only\n\n                        clear\n\n                        (click)="saveProfile()"\n\n                        [disabled]="!profileForm.valid">\n\n                    <ion-icon name="checkmark-circle"></ion-icon>\n\n                </button>        \n\n            </ion-buttons>\n\n        </ion-navbar>\n\n    </ion-header>\n\n\n\n<ion-content padding>\n\n    <form [formGroup]="profileForm">\n\n        <ion-item>\n\n            <ion-label floating>{{\'EDIT_PROFILE_PAGE.NAME\' | translate}}</ion-label>\n\n            <ion-input [formControl]="profileForm.controls[\'name\']" type="text"></ion-input>\n\n            <div *ngIf="!profileForm.controls.name.valid && profileForm.controls.name.dirty" class="validator-error">\n\n                {{\'EDIT_PROFILE_PAGE.ENTER_NAME\' | translate}}\n\n            </div>\n\n        </ion-item>\n\n            \n\n        <ion-item>\n\n            <ion-label floating>{{\'EDIT_PROFILE_PAGE.ALIAS\' | translate}}</ion-label>\n\n            <ion-input [formControl]="profileForm.controls[\'alias\']" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>{{\'EDIT_PROFILE_PAGE.EMAIL\' | translate}}</ion-label>\n\n            <ion-input [formControl]="profileForm.controls[\'email\']" type="email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>{{\'EDIT_PROFILE_PAGE.PHONE\' | translate}}</ion-label>\n\n            <ion-input [formControl]="profileForm.controls[\'phone\']" type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'EDIT_PROFILE_PAGE.USERNAME\' | translate}}</ion-label>\n\n            <ion-input [formControl]="profileForm.controls[\'username\']" type="text"></ion-input>\n\n        </ion-item>\n\n    </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\components\edit-profile\edit-profile.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["l" /* ProfileService */]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());

//# sourceMappingURL=edit-profile.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(436);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export HttpLoaderFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_components_module__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* FootballWithFriendsAppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* FootballWithFriendsAppComponent */], {}, {
                    links: [
                        { loadChildren: 'pages/call-up/call-up.component.module#CallUpPageModule', name: 'CallUpPage', segment: 'call-up.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/discards/discards.component.module#DiscardsPageModule', name: 'DiscardsPage', segment: 'discards.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/introduction/introduction.component.module#IntroductionPageModule', name: 'IntroductionPage', segment: 'introduction', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/about/about.component.module#StatsPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/login/login.component.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/match/match.component.module#MatchPageModule', name: 'MatchPage', segment: 'match.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/my-valuations/my-valuations.component.module#MyValuationsPageModule', name: 'MyValuationsPage', segment: 'my-valuations.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/matches/matches.component.module#MatchesPageModule', name: 'MatchesPage', segment: 'matches', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/payment-management/payment-management.component.module#PaymentManagementPageModule', name: 'PaymentManagementPage', segment: 'paymentsManagement', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/payments/payments.component.module#PaymentsPageModule', name: 'PaymentsPage', segment: 'payments', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/stats/stats.component.module#StatsPageModule', name: 'StatsPage', segment: 'stats', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/teams/teams.component.module#TeamsPageModule', name: 'TeamsPage', segment: 'teams.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/profile/profile.component.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/tabs-controller/tabs-controller.module#TabsControllerPageModule', name: 'TabsController', segment: 'tabController', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/valuations/valuations.component.module#ValuationsPageModule', name: 'ValuationsPage', segment: 'valuations.component', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_14__components_components_module__["a" /* ComponentsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["f" /* GlobalService */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["d" /* ContextService */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["h" /* MatchesService */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["k" /* PlayersService */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["c" /* BusyIndicatorService */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["i" /* MessagesService */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["o" /* ValuationsService */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["l" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["j" /* PaymentsService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__providers__["m" /* TokenInterceptor */],
                    multi: true,
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__providers__["n" /* UrlInterceptor */],
                    multi: true,
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__providers__["g" /* HeaderInterceptor */],
                    multi: true,
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__providers__["b" /* BusyIndicatorInterceptor */],
                    multi: true,
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__providers__["e" /* ErrorInterceptor */],
                    multi: true,
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matches_matches_service__ = __webpack_require__(472);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__matches_matches_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__(473);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__global_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__ = __webpack_require__(121);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_token_interceptor__ = __webpack_require__(482);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_3__interceptors_token_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interceptors_url_interceptor__ = __webpack_require__(491);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__interceptors_url_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interceptors_header_interceptor__ = __webpack_require__(492);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__interceptors_header_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interceptors_busy_indicator_interceptor__ = __webpack_require__(493);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__interceptors_busy_indicator_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interceptors_error_interceptor__ = __webpack_require__(495);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__interceptors_error_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__context_context_service__ = __webpack_require__(499);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__context_context_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__players_players_service__ = __webpack_require__(501);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_9__players_players_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__busy_indicator_busy_indicator_service__ = __webpack_require__(214);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_10__busy_indicator_busy_indicator_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__messages_messages_service__ = __webpack_require__(502);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_11__messages_messages_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__valuations_valuations_service__ = __webpack_require__(503);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_12__valuations_valuations_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_service__ = __webpack_require__(504);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_13__profile_profile_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__payments_payments_service__ = __webpack_require__(506);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_14__payments_payments_service__["a"]; });















//# sourceMappingURL=index.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MATCH_URL = 'fwf/match';
var MatchesService = /** @class */ (function () {
    function MatchesService(http) {
        this.http = http;
    }
    MatchesService.prototype.getMatch = function (matchId) {
        return this.http.get(MATCH_URL + "/" + matchId);
    };
    MatchesService.prototype.fetchMatches = function () {
        return this.http.get(MATCH_URL);
    };
    MatchesService.prototype.createMatch = function (match) {
        return this.http.post(MATCH_URL, match);
    };
    MatchesService.prototype.updateMatch = function (match) {
        return this.http.put(MATCH_URL, match);
    };
    MatchesService.prototype.deleteMatch = function (matchId) {
        return this.http.delete(MATCH_URL + "/" + matchId);
    };
    MatchesService.prototype.joinPlayerCallUp = function (matchId, player) {
        return this.http.put(MATCH_URL + "/" + matchId + "/player", player);
    };
    MatchesService.prototype.unjoinPlayerCallUp = function (matchId, playerId) {
        return this.http.put(MATCH_URL + "/" + matchId + "/player/" + playerId, {});
    };
    MatchesService.prototype.discardPlayerCallUp = function (matchId, player) {
        return this.http.put(MATCH_URL + "/" + matchId + "/discards", player);
    };
    MatchesService.prototype.exitFromDiscards = function (matchId, playerId) {
        return this.http.put(MATCH_URL + "/" + matchId + "/discards/player/" + playerId, {});
    };
    MatchesService.prototype.updateTeams = function (matchId, playerId, teams) {
        return this.http.put(MATCH_URL + "/" + matchId + "/teams/" + playerId, teams);
    };
    MatchesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MatchesService);
    return MatchesService;
}());

//# sourceMappingURL=matches.service.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalService = /** @class */ (function () {
    function GlobalService(menu) {
        this.menu = menu;
        this.appVersion = 'v1.0';
    }
    GlobalService.prototype.getVersion = function () {
        return this.appVersion;
    };
    GlobalService.prototype.enableSideMenu = function (enable) {
        this.menu.enable(enable);
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], GlobalService);
    return GlobalService;
}());

//# sourceMappingURL=global.service.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__(485);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__user_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_model__ = __webpack_require__(486);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_model__ = __webpack_require__(487);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__match_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_headers_model__ = __webpack_require__(488);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__http_headers_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__option_model__ = __webpack_require__(489);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__option_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_model__ = __webpack_require__(490);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__payment_model__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_auth_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (request.url !== 'login/' && !request.url.includes('assets/i18n')) {
            request = request.clone({
                setHeaders: {
                    Authorization: __WEBPACK_IMPORTED_MODULE_4__models__["b" /* HTTP_HEADERS */].TOKEN_PREFIX + " " + this.auth.getToken()
                }
            });
        }
        return next.handle(request).do(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                var authHeader = evt.headers.get(__WEBPACK_IMPORTED_MODULE_4__models__["b" /* HTTP_HEADERS */].AUTHORIZATION);
                if (authHeader) {
                    _this.auth.saveToken(authHeader.slice((__WEBPACK_IMPORTED_MODULE_4__models__["b" /* HTTP_HEADERS */].TOKEN_PREFIX + ' ').length));
                }
            }
        });
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__authentication_auth_service__["a" /* AuthService */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

//# sourceMappingURL=token.interceptor.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Role; });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PLAYER"] = 1] = "PLAYER";
    Role[Role["TREASURER"] = 2] = "TREASURER";
    Role[Role["COACH"] = 3] = "COACH";
    Role[Role["GUEST"] = 4] = "GUEST";
})(Role || (Role = {}));
//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Position */
var Position;
(function (Position) {
    Position[Position["DEFENDER"] = 0] = "DEFENDER";
    Position[Position["MIDFIELD"] = 1] = "MIDFIELD";
    Position[Position["FORWARD"] = 2] = "FORWARD";
    Position[Position["SWEEPER"] = 3] = "SWEEPER";
    Position[Position["LEFT_BACK"] = 4] = "LEFT_BACK";
    Position[Position["RIGHT_BACK"] = 5] = "RIGHT_BACK";
})(Position || (Position = {}));
//# sourceMappingURL=player.model.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamColor; });
var TeamColor;
(function (TeamColor) {
    TeamColor["WHITE"] = "WHITE";
    TeamColor["BLACK"] = "BLACK";
})(TeamColor || (TeamColor = {}));
//# sourceMappingURL=match.model.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_HEADERS; });
var HTTP_HEADERS = {
    AUTHORIZATION: 'Authorization',
    TOKEN_PREFIX: 'Bearer',
    BASIC_PREFIX: 'Basic',
    CONTENT_TYPE: 'Content-Type',
    DEVICE_UUID: 'X-Device-UUID',
    ACCEPT: 'Accept'
};
//# sourceMappingURL=http-headers.model.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["VIEW_DETAILS"] = 0] = "VIEW_DETAILS";
    Action[Action["DELETE_MATCH"] = 1] = "DELETE_MATCH";
    Action[Action["EDIT_MATCH"] = 2] = "EDIT_MATCH";
    Action[Action["JOIN_CALL_UP"] = 3] = "JOIN_CALL_UP";
    Action[Action["UNJOIN_CALL_UP"] = 4] = "UNJOIN_CALL_UP";
    Action[Action["DISCARD_ME_CALL_UP"] = 5] = "DISCARD_ME_CALL_UP";
    Action[Action["EXIT_FROM_DISCARDS"] = 6] = "EXIT_FROM_DISCARDS";
    Action[Action["EDIT_TEAMS"] = 7] = "EDIT_TEAMS";
    Action[Action["SET_SCOREBOARD"] = 8] = "SET_SCOREBOARD";
    Action[Action["EDIT_CALL_UP"] = 9] = "EDIT_CALL_UP";
    Action[Action["EDIT_DISCARDS"] = 10] = "EDIT_DISCARDS";
    Action[Action["ADD_NEW_PLAYER"] = 11] = "ADD_NEW_PLAYER";
})(Action || (Action = {}));
//# sourceMappingURL=option.model.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Month; });
var Month;
(function (Month) {
    Month["JANUARY"] = "JANUARY";
    Month["FEBRUARY"] = "FEBRUARY";
    Month["MARCH"] = "MARCH";
    Month["APRIL"] = "APRIL";
    Month["MAY"] = "MAY";
    Month["JUNE"] = "JUNE";
    Month["JULY"] = "JULY";
    Month["AUGUST"] = "AUGUST";
    Month["SEPTEMBER"] = "SEPTEMBER";
    Month["OCTOBER"] = "OCTOBER";
    Month["NOVEMBER"] = "NOVEMBER";
    Month["DECEMBER"] = "DECEMBER";
})(Month || (Month = {}));
(function (Month) {
    function getMonth(index) {
        var result = Month.JANUARY;
        switch (index) {
            case 0:
                break;
            case 1:
                result = Month.FEBRUARY;
                break;
            case 2:
                result = Month.MARCH;
                break;
            case 3:
                result = Month.APRIL;
                break;
            case 4:
                result = Month.MAY;
                break;
            case 5:
                result = Month.JUNE;
                break;
            case 6:
                result = Month.JULY;
                break;
            case 7:
                result = Month.AUGUST;
                break;
            case 8:
                result = Month.SEPTEMBER;
                break;
            case 9:
                result = Month.OCTOBER;
                break;
            case 10:
                result = Month.NOVEMBER;
                break;
            case 11:
                result = Month.DECEMBER;
                break;
        }
        return result;
    }
    Month.getMonth = getMonth;
    function getIndex(month) {
        var result = 0;
        switch (month) {
            case Month.JANUARY:
                break;
            case Month.FEBRUARY:
                result = 1;
                break;
            case Month.MARCH:
                result = 2;
                break;
            case Month.APRIL:
                result = 3;
                break;
            case Month.MAY:
                result = 4;
                break;
            case Month.JUNE:
                result = 5;
                break;
            case Month.JULY:
                result = 6;
                break;
            case Month.AUGUST:
                result = 7;
                break;
            case Month.SEPTEMBER:
                result = 8;
                break;
            case Month.OCTOBER:
                result = 9;
                break;
            case Month.NOVEMBER:
                result = 10;
                break;
            case Month.DECEMBER:
                result = 11;
                break;
        }
        return result;
    }
    Month.getIndex = getIndex;
})(Month || (Month = {}));
//# sourceMappingURL=payment.model.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UrlInterceptor = /** @class */ (function () {
    function UrlInterceptor() {
    }
    UrlInterceptor.prototype.intercept = function (request, next) {
        if (!request.url.includes('assets/i18n')) {
            request = request.clone({
                // url: `http://192.168.0.157:8100/${request.url}`
                // url: `http://localhost:8080/${request.url}`
                url: "https://fwf-server.herokuapp.com/" + request.url
            });
        }
        return next.handle(request);
    };
    UrlInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UrlInterceptor);
    return UrlInterceptor;
}());

//# sourceMappingURL=url.interceptor.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderInterceptor = /** @class */ (function () {
    function HeaderInterceptor(auth) {
        this.auth = auth;
    }
    HeaderInterceptor.prototype.intercept = function (request, next) {
        if (request.url !== 'login/' && !request.url.includes('assets/i18n')) {
            if (request.method === 'POST' || request.method === 'PUT') {
                request = request.clone({
                    headers: request.headers.set(__WEBPACK_IMPORTED_MODULE_3__models__["b" /* HTTP_HEADERS */].CONTENT_TYPE, 'application/json')
                });
            }
        }
        request = request.clone({ headers: request.headers.set(__WEBPACK_IMPORTED_MODULE_3__models__["b" /* HTTP_HEADERS */].ACCEPT, 'application/json') });
        return next.handle(request);
    };
    HeaderInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__["a" /* AuthService */]])
    ], HeaderInterceptor);
    return HeaderInterceptor;
}());

//# sourceMappingURL=header.interceptor.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyIndicatorInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__busy_indicator_busy_indicator_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusyIndicatorInterceptor = /** @class */ (function () {
    function BusyIndicatorInterceptor(busyService) {
        this.busyService = busyService;
    }
    BusyIndicatorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (!request.url.includes('assets/') && !this.busyService.isBusyIndicatorVisible()) {
            this.busyService.loadingAnimationStart();
        }
        return next.handle(request)
            .do(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                if (!evt.url.includes('assets/') && _this.busyService.isBusyIndicatorVisible()) {
                    _this.busyService.loadingAnimationEnd();
                }
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                _this.busyService.loadingAnimationEnd();
            }
        })
            .catch(function (errorResponse) {
            _this.busyService.loadingAnimationEnd();
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw__["_throw"])(errorResponse);
        });
    };
    BusyIndicatorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__busy_indicator_busy_indicator_service__["a" /* BusyIndicatorService */]])
    ], BusyIndicatorInterceptor);
    return BusyIndicatorInterceptor;
}());

//# sourceMappingURL=busy-indicator.interceptor.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Intercepts the HTTP responses, and in case that an error/exception is thrown, handles it
 * and extract the relevant information of it.
 */
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(app, translate) {
        this.app = app;
        this.translate = translate;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req)
            .catch(function (errorResponse) {
            var errMsg;
            if (errorResponse instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (errorResponse.status === 401) {
                    _this.app.getRootNav().setRoot('LoginPage');
                    errMsg = _this.translate.instant('EXPIRED_SESSION');
                }
                else if (errorResponse.status === 409) {
                    errMsg = errorResponse.error.message;
                }
                else {
                    var err = errorResponse.message || JSON.stringify(errorResponse.error);
                    errMsg = errorResponse.status + " - " + (errorResponse.statusText || '') + " Details: " + err;
                }
            }
            else {
                errMsg = errorResponse.message ? errorResponse.message : errorResponse.toString();
            }
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__["_throw"])(errMsg);
        });
    };
    ErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

//# sourceMappingURL=error.interceptor.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContextService = /** @class */ (function () {
    function ContextService() {
        this.readyRoles$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    ContextService.prototype.getUserLogged = function () {
        return this.userLogged;
    };
    ContextService.prototype.setUserLogged = function (user) {
        this.userLogged = user;
        this.readyRoles$.next(!Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["p" /* isUndefined */])(this.userLogged));
    };
    ContextService.prototype.getPlayerLogged = function () {
        return this.playerLogged;
    };
    ContextService.prototype.setPlayerLogged = function (player) {
        this.playerLogged = player;
    };
    ContextService.prototype.userLoggedIsAdmin = function () {
        var roleAdmin;
        if (this.userLogged) {
            roleAdmin = this.userLogged.roles.findIndex(function (role) { return role === __WEBPACK_IMPORTED_MODULE_2__models__["d" /* Role */].ADMIN; }) >= 0;
        }
        return roleAdmin;
    };
    ContextService.prototype.userLoggedIsTreasurer = function () {
        var roleTreasurer;
        if (this.userLogged) {
            roleTreasurer = this.userLogged.roles.findIndex(function (role) { return role === __WEBPACK_IMPORTED_MODULE_2__models__["d" /* Role */].TREASURER; }) >= 0;
        }
        return roleTreasurer;
    };
    ContextService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ContextService);
    return ContextService;
}());

//# sourceMappingURL=context.service.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PLAYER_URL = 'fwf/player';
var PlayersService = /** @class */ (function () {
    function PlayersService(http) {
        this.http = http;
    }
    PlayersService.prototype.fetchPlayers = function () {
        return this.http.get(PLAYER_URL);
    };
    PlayersService.prototype.getPlayer = function (playerId) {
        return this.http.get(PLAYER_URL + "/" + playerId);
    };
    PlayersService.prototype.createPlayer = function (player) {
        return this.http.post(PLAYER_URL, player);
    };
    PlayersService.prototype.updatePlayer = function (player) {
        return this.http.put(PLAYER_URL, player);
    };
    PlayersService.prototype.deletePlayer = function (playerId) {
        return this.http.delete(PLAYER_URL + "/" + playerId);
    };
    PlayersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PlayersService);
    return PlayersService;
}());

//# sourceMappingURL=players.service.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ToastType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastType;
(function (ToastType) {
    ToastType[ToastType["Info"] = 1] = "Info";
    ToastType[ToastType["Success"] = 2] = "Success";
    ToastType[ToastType["Warning"] = 3] = "Warning";
    ToastType[ToastType["Error"] = 4] = "Error";
})(ToastType || (ToastType = {}));
var MessagesService = /** @class */ (function () {
    function MessagesService(toastCtrl, translate) {
        this.toastCtrl = toastCtrl;
        this.translate = translate;
    }
    MessagesService.prototype.showInfo = function (message, title) {
        this.show(ToastType.Info, message, title);
    };
    MessagesService.prototype.showSuccess = function (message, title) {
        this.show(ToastType.Success, message, title);
    };
    MessagesService.prototype.showWarning = function (message, title) {
        this.show(ToastType.Warning, message, title);
    };
    MessagesService.prototype.showError = function (message, title) {
        this.show(ToastType.Error, message, title);
    };
    MessagesService.prototype.createMessage = function (message, title) {
        var result = '';
        if (title != null) {
            result += this.translate.instant(title);
        }
        if (title != null && message != null) {
            result += ':\n';
        }
        if (message != null) {
            result += this.translate.instant(message);
        }
        return result;
    };
    MessagesService.prototype.show = function (type, message, title) {
        var toastOptions = {
            dismissOnPageChange: false,
            cssClass: this.getCssClass(type),
            // position: 'bottom'
            showCloseButton: true,
            closeButtonText: this.translate.instant('TOAST.CLOSE')
        };
        if (typeof message === 'string') {
            toastOptions.message = this.createMessage(message, title);
            if (type === ToastType.Info || type === ToastType.Success) {
                toastOptions.duration = 2500;
            }
        }
        else {
            toastOptions.message = this.createMessage(message.text, message.title);
            if (message.autoClose) {
                toastOptions.duration = 2500;
            }
        }
        var toast = this.toastCtrl.create(toastOptions);
        toast.present();
    };
    MessagesService.prototype.getCssClass = function (type) {
        var cssClass = '';
        switch (type) {
            case ToastType.Info:
                cssClass = 'toast-info';
                break;
            case ToastType.Success:
                cssClass = 'toast-success';
                break;
            case ToastType.Warning:
                cssClass = 'toast-warning';
                break;
            case ToastType.Error:
                cssClass = 'toast-error';
                break;
            default:
                cssClass = 'toast-info';
        }
        return cssClass;
    };
    MessagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], MessagesService);
    return MessagesService;
}());

//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MATCH_SCORING_URL = 'fwf/matchScoring';
var MATCH_URL = 'fwf/match';
var ValuationsService = /** @class */ (function () {
    function ValuationsService(http) {
        this.http = http;
    }
    ValuationsService.prototype.fetchMatchScores = function (matchId, playerId) {
        var url = MATCH_SCORING_URL + "?matchId=" + matchId + "&playerId=" + playerId;
        return this.http.get(url);
    };
    ValuationsService.prototype.fetchPlayersScores = function (matchId) {
        var url = MATCH_URL + "/" + matchId + "/scores";
        var result = this.http.get(url);
        return result;
    };
    ValuationsService.prototype.createMatchScore = function (matchScore) {
        return this.http.post(MATCH_SCORING_URL, matchScore);
    };
    ValuationsService.prototype.updateMatchScore = function (matchScore) {
        return this.http.put(MATCH_SCORING_URL, matchScore);
    };
    ValuationsService.prototype.deleteMatchScore = function (matchScoreId) {
        return this.http.delete(MATCH_SCORING_URL + "/" + matchScoreId);
    };
    ValuationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ValuationsService);
    return ValuationsService;
}());

//# sourceMappingURL=valuations.service.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(48);
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





var USER_URL = 'fwf/user';
var PLAYER_URL = 'fwf/player';
var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.updateProfile = function (profile) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin(this.updatePlayer(profile.player), this.updateUser(profile.user));
    };
    ProfileService.prototype.changePassword = function (userId, oldPassword, newPassword) {
        var token = btoa(oldPassword + ':' + newPassword);
        return this.http.put(USER_URL + "/" + userId + "/changePassword", token);
    };
    ProfileService.prototype.updatePlayer = function (player) {
        return this.http.put(PLAYER_URL, player);
    };
    ProfileService.prototype.updateUser = function (user) {
        var userTransformed = __assign({}, user, { roles: user.roles.map(function (rol) { return __WEBPACK_IMPORTED_MODULE_4__models__["d" /* Role */][rol]; }) });
        return this.http.put(USER_URL, userTransformed);
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProfileService);
    return ProfileService;
}());

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PAYMENT_URL = 'fwf/payment';
var PaymentsService = /** @class */ (function () {
    function PaymentsService(http) {
        this.http = http;
    }
    PaymentsService.prototype.fetchPayments = function (playerId, filters) {
        var url = PAYMENT_URL + "?playerId=" + playerId;
        if (filters) {
            if (filters.year) {
                url += "&year=" + filters.year;
            }
            if (filters.showNoPaidPayments && !filters.showPaidPayments) {
                url += '&paid=false';
            }
            else if (!filters.showNoPaidPayments && filters.showPaidPayments) {
                url += '&paid=true';
            }
        }
        return this.http.get(url);
    };
    PaymentsService.prototype.fetchPendingPayments = function () {
        var url = PAYMENT_URL + "?paid=false";
        return this.http.get(url);
    };
    PaymentsService.prototype.getPayment = function (paymentId) {
        return this.http.get(PAYMENT_URL + "/" + paymentId);
    };
    PaymentsService.prototype.createPayment = function (payment) {
        return this.http.post(PAYMENT_URL, payment);
    };
    PaymentsService.prototype.updatePayment = function (payment) {
        return this.http.put(PAYMENT_URL, payment);
    };
    PaymentsService.prototype.deletePayment = function (paymentId) {
        return this.http.delete(PAYMENT_URL + "/" + paymentId);
    };
    PaymentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PaymentsService);
    return PaymentsService;
}());

//# sourceMappingURL=payments.service.js.map

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 216,
	"./af.js": 216,
	"./ar": 217,
	"./ar-dz": 218,
	"./ar-dz.js": 218,
	"./ar-kw": 219,
	"./ar-kw.js": 219,
	"./ar-ly": 220,
	"./ar-ly.js": 220,
	"./ar-ma": 221,
	"./ar-ma.js": 221,
	"./ar-sa": 222,
	"./ar-sa.js": 222,
	"./ar-tn": 223,
	"./ar-tn.js": 223,
	"./ar.js": 217,
	"./az": 224,
	"./az.js": 224,
	"./be": 225,
	"./be.js": 225,
	"./bg": 226,
	"./bg.js": 226,
	"./bm": 227,
	"./bm.js": 227,
	"./bn": 228,
	"./bn.js": 228,
	"./bo": 229,
	"./bo.js": 229,
	"./br": 230,
	"./br.js": 230,
	"./bs": 231,
	"./bs.js": 231,
	"./ca": 232,
	"./ca.js": 232,
	"./cs": 233,
	"./cs.js": 233,
	"./cv": 234,
	"./cv.js": 234,
	"./cy": 235,
	"./cy.js": 235,
	"./da": 236,
	"./da.js": 236,
	"./de": 237,
	"./de-at": 238,
	"./de-at.js": 238,
	"./de-ch": 239,
	"./de-ch.js": 239,
	"./de.js": 237,
	"./dv": 240,
	"./dv.js": 240,
	"./el": 241,
	"./el.js": 241,
	"./en-au": 242,
	"./en-au.js": 242,
	"./en-ca": 243,
	"./en-ca.js": 243,
	"./en-gb": 244,
	"./en-gb.js": 244,
	"./en-ie": 245,
	"./en-ie.js": 245,
	"./en-il": 246,
	"./en-il.js": 246,
	"./en-nz": 247,
	"./en-nz.js": 247,
	"./eo": 248,
	"./eo.js": 248,
	"./es": 249,
	"./es-do": 250,
	"./es-do.js": 250,
	"./es-us": 251,
	"./es-us.js": 251,
	"./es.js": 249,
	"./et": 252,
	"./et.js": 252,
	"./eu": 253,
	"./eu.js": 253,
	"./fa": 254,
	"./fa.js": 254,
	"./fi": 255,
	"./fi.js": 255,
	"./fo": 256,
	"./fo.js": 256,
	"./fr": 257,
	"./fr-ca": 258,
	"./fr-ca.js": 258,
	"./fr-ch": 259,
	"./fr-ch.js": 259,
	"./fr.js": 257,
	"./fy": 260,
	"./fy.js": 260,
	"./gd": 261,
	"./gd.js": 261,
	"./gl": 262,
	"./gl.js": 262,
	"./gom-latn": 263,
	"./gom-latn.js": 263,
	"./gu": 264,
	"./gu.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it.js": 272,
	"./ja": 273,
	"./ja.js": 273,
	"./jv": 274,
	"./jv.js": 274,
	"./ka": 275,
	"./ka.js": 275,
	"./kk": 276,
	"./kk.js": 276,
	"./km": 277,
	"./km.js": 277,
	"./kn": 278,
	"./kn.js": 278,
	"./ko": 279,
	"./ko.js": 279,
	"./ky": 280,
	"./ky.js": 280,
	"./lb": 281,
	"./lb.js": 281,
	"./lo": 282,
	"./lo.js": 282,
	"./lt": 283,
	"./lt.js": 283,
	"./lv": 284,
	"./lv.js": 284,
	"./me": 285,
	"./me.js": 285,
	"./mi": 286,
	"./mi.js": 286,
	"./mk": 287,
	"./mk.js": 287,
	"./ml": 288,
	"./ml.js": 288,
	"./mn": 289,
	"./mn.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 291,
	"./ms-my": 292,
	"./ms-my.js": 292,
	"./ms.js": 291,
	"./mt": 293,
	"./mt.js": 293,
	"./my": 294,
	"./my.js": 294,
	"./nb": 295,
	"./nb.js": 295,
	"./ne": 296,
	"./ne.js": 296,
	"./nl": 297,
	"./nl-be": 298,
	"./nl-be.js": 298,
	"./nl.js": 297,
	"./nn": 299,
	"./nn.js": 299,
	"./pa-in": 300,
	"./pa-in.js": 300,
	"./pl": 301,
	"./pl.js": 301,
	"./pt": 302,
	"./pt-br": 303,
	"./pt-br.js": 303,
	"./pt.js": 302,
	"./ro": 304,
	"./ro.js": 304,
	"./ru": 305,
	"./ru.js": 305,
	"./sd": 306,
	"./sd.js": 306,
	"./se": 307,
	"./se.js": 307,
	"./si": 308,
	"./si.js": 308,
	"./sk": 309,
	"./sk.js": 309,
	"./sl": 310,
	"./sl.js": 310,
	"./sq": 311,
	"./sq.js": 311,
	"./sr": 312,
	"./sr-cyrl": 313,
	"./sr-cyrl.js": 313,
	"./sr.js": 312,
	"./ss": 314,
	"./ss.js": 314,
	"./sv": 315,
	"./sv.js": 315,
	"./sw": 316,
	"./sw.js": 316,
	"./ta": 317,
	"./ta.js": 317,
	"./te": 318,
	"./te.js": 318,
	"./tet": 319,
	"./tet.js": 319,
	"./tg": 320,
	"./tg.js": 320,
	"./th": 321,
	"./th.js": 321,
	"./tl-ph": 322,
	"./tl-ph.js": 322,
	"./tlh": 323,
	"./tlh.js": 323,
	"./tr": 324,
	"./tr.js": 324,
	"./tzl": 325,
	"./tzl.js": 325,
	"./tzm": 326,
	"./tzm-latn": 327,
	"./tzm-latn.js": 327,
	"./tzm.js": 326,
	"./ug-cn": 328,
	"./ug-cn.js": 328,
	"./uk": 329,
	"./uk.js": 329,
	"./ur": 330,
	"./ur.js": 330,
	"./uz": 331,
	"./uz-latn": 332,
	"./uz-latn.js": 332,
	"./uz.js": 331,
	"./vi": 333,
	"./vi.js": 333,
	"./x-pseudo": 334,
	"./x-pseudo.js": 334,
	"./yo": 335,
	"./yo.js": 335,
	"./zh-cn": 336,
	"./zh-cn.js": 336,
	"./zh-hk": 337,
	"./zh-hk.js": 337,
	"./zh-tw": 338,
	"./zh-tw.js": 338
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 507;

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = /** @class */ (function () {
    function MenuComponent(menu, translate, context) {
        this.menu = menu;
        this.translate = translate;
        this.context = context;
        this.itemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.context.readyRoles$.subscribe(function (ready) {
            if (ready) {
                if (_this.context.userLoggedIsAdmin() || _this.context.userLoggedIsTreasurer()) {
                    if (!_this.tiles1.find(function (tile) { return tile.title === 'MENU.PAYMENT_MANAGEMENT'; })) {
                        _this.tiles1.push({
                            title: 'MENU.PAYMENT_MANAGEMENT',
                            target: 'tiles.payment_management',
                            icon: 'cash'
                        });
                    }
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](_this.tiles2, function (tile) {
                        return tile.title === 'MENU.PAYMENT_MANAGEMENT';
                    });
                }
            }
        });
        this.initializeTiles();
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    MenuComponent.prototype.navigateTo = function (target) {
        this.menuItemSelected(target);
    };
    MenuComponent.prototype.getImageSource = function () {
        return this.translate.instant('APPLICATION_DETAIL.IMAGE_SOURCE');
    };
    MenuComponent.prototype.menuItemSelected = function (item) {
        this.itemSelected.emit(item);
        this.menu.close();
    };
    MenuComponent.prototype.initializeTiles = function () {
        this.tiles1 = [
            {
                title: 'MENU.MATCHES',
                target: 'tiles.matches',
                icon: 'football'
            },
            {
                title: 'MENU.PROFILE',
                target: 'tiles.profile',
                icon: 'person'
            },
            {
                title: 'MENU.PAYMENTS',
                target: 'tiles.payments',
                icon: 'cash'
            },
            {
                title: 'MENU.STATS',
                target: 'tiles.stats',
                icon: 'stats'
            }
        ];
        this.tiles2 = [
            {
                title: 'MENU.INTRODUCTION',
                target: 'tiles.introduction',
                icon: 'information-circle'
            },
            {
                title: 'MENU.ABOUT',
                target: 'tiles.about',
                icon: 'ribbon'
            },
            {
                title: 'MENU.LOGOUT',
                target: 'tiles.logout',
                icon: 'log-out'
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], MenuComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MenuComponent.prototype, "itemSelected", void 0);
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-menu',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\components\menu\menu.component.html"*/'<ion-menu [content]="content" swipeEnabled="false">\n\n    <ion-header>\n\n        <ion-card>\n\n            <img [src]="getImageSource()"/>\n\n            <!-- <ion-card-content>\n\n              <ion-card-title>\n\n                {{\'MENU.TITLE\' | translate}}\n\n                </ion-card-title>\n\n              <p>\n\n                Aquí se puede poner algo o no\n\n              </p>\n\n            </ion-card-content> -->\n\n          </ion-card>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n            <button ion-item\n\n                    *ngFor="let tile of tiles1"\n\n                    (click)="navigateTo(tile.target)">\n\n                <ion-icon [name]="tile.icon"></ion-icon>\n\n                {{tile.title | translate}}\n\n            </button>\n\n            <!--Menu divider-->\n\n            <ion-item-divider>\n\n                {{\'MENU.TITLE_DIVIDER\' | translate}}\n\n            </ion-item-divider>\n\n            <button ion-item\n\n                    *ngFor="let tile of tiles2"\n\n                    (click)="navigateTo(tile.target)">\n\n                <ion-icon [name]="tile.icon"></ion-icon>\n\n                {{tile.title | translate}}\n\n            </button>\n\n        </ion-list>\n\n      </ion-content>\n\n    <ion-footer>\n\n        <ion-toolbar class="product-info">\n\n            <ion-title>\n\n                <h2 class="product-name">\n\n                    <span>{{\'APPLICATION_DETAIL.NAME\' | translate}}</span>\n\n                    <span class="version">{{\'APPLICATION_DETAIL.VERSION\' | translate}}</span>\n\n                </h2>\n\n                <h3 class="copyright">\n\n                    {{ "APPLICATION_DETAIL.COPYRIGHT" | translate }}\n\n                </h3>\n\n            </ion-title>\n\n        </ion-toolbar>\n\n    </ion-footer>\n\n</ion-menu>'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\components\menu\menu.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* ContextService */]])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyStateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmptyStateComponent = /** @class */ (function () {
    function EmptyStateComponent() {
    }
    EmptyStateComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmptyStateComponent.prototype, "image", void 0);
    EmptyStateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-empty-state',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\components\empty-state\empty-state.component.html"*/'<ion-card text-center class="secondary-text">\n\n    <img *ngIf="image" [src]="image"/>\n\n    <ion-card-content>\n\n        <ng-content></ng-content>\n\n    </ion-card-content>\n\n</ion-card>\n\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\components\empty-state\empty-state.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EmptyStateComponent);
    return EmptyStateComponent;
}());

//# sourceMappingURL=empty-state.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootballWithFriendsAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_src_locale_es__ = __webpack_require__(538);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpClient } from '@angular/common/http';







// import { User } from './models';
var FootballWithFriendsAppComponent = /** @class */ (function () {
    // private userLogged: User;
    function FootballWithFriendsAppComponent(platform, storage, splashScreen, statusBar, translate) {
        var _this = this;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial').then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = 'LoginPage';
            }
            else {
                _this.rootPage = 'IntroductionPage';
            }
            _this.initializeApp();
            _this.initializeConfig();
            _this.initializeTranslateConfig();
        });
    }
    FootballWithFriendsAppComponent.prototype.ngOnInit = function () {
        this.subscribeToHttpEvents();
        this.subscribeToLoginEvents();
    };
    FootballWithFriendsAppComponent.prototype.subscribeToHttpEvents = function () {
        // this.httpSubscription = this.http.httpEvent$.subscribe(this.handleHttpEvents.bind(this));
    };
    FootballWithFriendsAppComponent.prototype.subscribeToLoginEvents = function () {
        // this.userLogged = user;
    };
    FootballWithFriendsAppComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.httpSubscription.unsubscribe();
        this.authSubscription.unsubscribe();
    };
    FootballWithFriendsAppComponent.prototype.menuItemSelected = function (item) {
        if (item === 'tiles.logout') {
            this.nav.setRoot('LoginPage');
            return;
        }
        else if (item === 'tiles.introduction') {
            this.nav.setRoot('IntroductionPage');
            return;
        }
        else if (item === 'tiles.about') {
            this.nav.setRoot('AboutPage');
            return;
        }
        else if (item === 'tiles.payment_management') {
            this.nav.setRoot('PaymentManagementPage');
            return;
        }
        var index;
        switch (item) {
            case 'tiles.matches':
                index = 0;
                break;
            case 'tiles.profile':
                index = 1;
                break;
            case 'tiles.payments':
                index = 2;
                break;
            case 'tiles.stats':
                index = 3;
                break;
            default:
                index = 0;
                break;
        }
        this.nav.setRoot('TabsController', { indexSelected: index });
    };
    FootballWithFriendsAppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.hideSplashScreen();
        });
    };
    FootballWithFriendsAppComponent.prototype.initializeConfig = function () {
        // this.configService.loadBaseConfig();
    };
    // TODO Move translate configuration to config service
    FootballWithFriendsAppComponent.prototype.initializeTranslateConfig = function () {
        var userLang = navigator.language.split('-')[0];
        userLang = /(en|es)/gi.test(userLang) ? userLang : 'en';
        this.translate.setDefaultLang('en');
        this.translate.use(userLang);
        __WEBPACK_IMPORTED_MODULE_6_moment__["locale"](userLang);
    };
    FootballWithFriendsAppComponent.prototype.hideSplashScreen = function () {
        var _this = this;
        if (this.splashScreen) {
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 100);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], FootballWithFriendsAppComponent.prototype, "nav", void 0);
    FootballWithFriendsAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\app.template.html"*/'<!-- logged out menu -->\n\n<fwf-menu [content]="content" (itemSelected)="menuItemSelected($event)"></fwf-menu>\n\n\n\n<!-- main navigation -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n\n\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], FootballWithFriendsAppComponent);
    return FootballWithFriendsAppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[417]);
//# sourceMappingURL=main.js.map