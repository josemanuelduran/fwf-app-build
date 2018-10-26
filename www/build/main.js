webpackJsonp([12],{

/***/ 120:
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

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"pages/call-up/call-up.component.module": [
		566,
		11
	],
	"pages/discards/discards.component.module": [
		567,
		10
	],
	"pages/introduction/introduction.component.module": [
		568,
		9
	],
	"pages/login/login.component.module": [
		569,
		2
	],
	"pages/match/match.component.module": [
		570,
		1
	],
	"pages/matches/matches.component.module": [
		571,
		0
	],
	"pages/payments/payments.component.module": [
		574,
		8
	],
	"pages/profile/profile.component.module": [
		572,
		7
	],
	"pages/stats/stats.component.module": [
		573,
		6
	],
	"pages/tabs-controller/tabs-controller.module": [
		575,
		5
	],
	"pages/teams/teams.component.module": [
		577,
		4
	],
	"pages/valuations/valuations.component.module": [
		576,
		3
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
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyIndicatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(45);
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

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(92);
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
                cancelled: false
            };
            this.matchesService.createMatch(match).subscribe(function (data) { return _this.viewCtrl.dismiss(true); }, function (error) { return _this.showError(error); });
        }
    };
    AddMatchComponent.prototype.cancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translate.instant('ADDMATCHPAGE.CANCEL'),
            subTitle: this.translate.instant('ADDMATCHPAGE.SURE'),
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
            title: this.translate.instant('ADDMATCHPAGE.ERROR'),
            subTitle: error,
            buttons: ['OK']
        });
        alert.present();
    };
    AddMatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-add-match',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\components\add-match\add-match.component.html"*/'<ion-header>\n\n        <ion-navbar color="primary" hideBackButton>\n\n            <ion-buttons left>\n\n                <button ion-button \n\n                        icon-only\n\n                        clear\n\n                        (click)="cancel()">\n\n                    <ion-icon name="close-circle"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n            <ion-title>\n\n                {{ "ADDMATCHPAGE.TITLE" | translate}}\n\n            </ion-title>\n\n            <ion-buttons end>\n\n                <button ion-button\n\n                        icon-only\n\n                        clear\n\n                        (click)="saveMatch()"\n\n                        [disabled]="!matchForm.valid">\n\n                    <ion-icon name="checkmark-circle"></ion-icon>\n\n                </button>        \n\n            </ion-buttons>\n\n        </ion-navbar>\n\n    </ion-header>\n\n\n\n<ion-content padding>\n\n    <form [formGroup]="matchForm">\n\n        <ion-item>\n\n            <ion-label floating>{{\'ADDMATCHPAGE.NAME\' | translate}}</ion-label>\n\n            <ion-input [formControl]="matchForm.controls[\'name\']" type="text"></ion-input>\n\n            <div *ngIf="!matchForm.controls.name.valid && matchForm.controls.name.dirty" class="validator-error">\n\n                Please enter a name.\n\n            </div>\n\n        </ion-item>\n\n            \n\n        <ion-item>\n\n            <ion-label floating>{{\'ADDMATCHPAGE.DATE\' | translate}}</ion-label>\n\n            <ion-datetime [formControl]="matchForm.controls[\'date\']" displayFormat="DD/MM/YYYY"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>{{\'ADDMATCHPAGE.NUMPLAYERS\' | translate}}</ion-label>\n\n            <ion-input [formControl]="matchForm.controls[\'numPlayers\']" type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'ADDMATCHPAGE.OPEN_CALL_UP\' | translate}}</ion-label>\n\n            <ion-checkbox [formControl]="matchForm.controls[\'openCallUp\']"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="match?.id">\n\n            <ion-label>{{\'ADDMATCHPAGE.CANCELLED\' | translate}}</ion-label>\n\n            <ion-checkbox [formControl]="matchForm.controls[\'cancelled\']"></ion-checkbox>\n\n        </ion-item>\n\n    </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\components\add-match\add-match.component.html"*/
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

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverflowMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
            selector: 'fwf-overflow-menu',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\components\overflow-menu\overflow-menu.component.html"*/'\n<ion-list>\n    <button\n            ion-item\n            no-lines\n            *ngFor="let item of options"\n            (click)="optionSelected(item)">\n        <ion-icon name="{{item.icon}}"></ion-icon>\n        {{item.token | translate}}\n    </button>\n</ion-list>\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\components\overflow-menu\overflow-menu.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], OverflowMenuComponent);
    return OverflowMenuComponent;
}());

//# sourceMappingURL=overflow-menu.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsMakerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(92);
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
    }
    TeamsMakerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.match = this.navParams.get('match');
        this.player = this.navParams.get('player');
        this.listPlayers = this.match.callUp.map(function (playerCallUp) {
            var team = _this.match.team1 && _this.match.team1.players.filter(function (el) { return el.id === playerCallUp.player.id; }).length > 0 ?
                0 :
                _this.match.team2 && _this.match.team2.players.filter(function (el) { return el.id === playerCallUp.player.id; }).length > 0 ?
                    1 :
                    undefined;
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
            color: __WEBPACK_IMPORTED_MODULE_3__models__["d" /* TeamColor */].WHITE,
            players: this.listPlayersWhite.map(function (el) { return el.player; })
        };
        this.match.team2 = {
            color: __WEBPACK_IMPORTED_MODULE_3__models__["d" /* TeamColor */].BLACK,
            players: this.listPlayersBlack.map(function (el) { return el.player; })
        };
        this.match.mister = {
            name: this.player.alias,
            id: this.player.id,
            fixed: this.player.fixed
        };
        this.matchesService.updateMatch(this.match)
            .subscribe(function (data) { return _this.viewCtrl.dismiss(true); }, function (error) { return _this.messages.showError(error); });
    };
    TeamsMakerComponent.prototype.cancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translate.instant('ADDMATCHPAGE.CANCEL'),
            subTitle: this.translate.instant('ADDMATCHPAGE.SURE'),
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
        this.listPlayersWhite = this.listPlayers.filter(function (el) { return el.team === __WEBPACK_IMPORTED_MODULE_3__models__["d" /* TeamColor */].WHITE; });
        this.listPlayersBlack = this.listPlayers.filter(function (el) { return el.team === __WEBPACK_IMPORTED_MODULE_3__models__["d" /* TeamColor */].BLACK; });
    };
    TeamsMakerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-teams-maker',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\components\teams-maker\teams-maker.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">   \n\n        <ion-buttons left>\n\n            <button ion-button \n\n                    icon-only\n\n                    clear\n\n                    (click)="cancel()">\n\n                <ion-icon name="close-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>     \n\n        <ion-title>\n\n            {{match.name}} {{"MATCHPAGE.TEAMS_MAKER" | translate}}\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button\n\n                    icon-only\n\n                    clear\n\n                    (click)="saveTeams()">\n\n                <ion-icon name="checkmark-circle"></ion-icon>\n\n            </button>        \n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>                    \n\n                    <ion-list>\n\n                        <ion-list-header>\n\n                            {{\'WHITE\' | translate}}\n\n                        </ion-list-header>\n\n                        <ion-item *ngFor="let whitePlayer of listPlayersWhite; let i = index;">\n\n                            {{i+1}}. {{whitePlayer?.player.name}} <span *ngIf="!whitePlayer?.player.fixed">(s)</span>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ion-list>\n\n                        <ion-list-header>\n\n                            {{\'BLACK\' | translate}}\n\n                        </ion-list-header>\n\n                        <ion-item *ngFor="let blackPlayer of listPlayersBlack; let i = index;">\n\n                                {{i+1}}. {{blackPlayer?.player.name}} <span *ngIf="!blackPlayer?.player.fixed">(s)</span>\n\n                            </ion-item>\n\n                    </ion-list>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-card>  \n\n    <ion-card>        \n\n        <ion-list>\n\n            <ion-item *ngFor="let playerTeam of listPlayers; let i = index;">\n\n                <ion-label>{{i+1}}. {{playerTeam.player.name}} <span *ngIf="!playerTeam.player.fixed">(s)</span></ion-label>\n\n                <ion-select [(ngModel)]="playerTeam.team" (ionChange)="onSelectChange($event, playerTeam.player.id)">\n\n                    <ion-option selected=true>---</ion-option>\n\n                    <ion-option [value]=0 disabled="{{listPlayersWhite.length === numPlayersTeam}}">{{\'WHITE\' | translate}}</ion-option>\n\n                    <ion-option [value]=1 disabled="{{listPlayersBlack.length === numPlayersTeam}}">{{\'BLACK\' | translate}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </ion-list>        \n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\components\teams-maker\teams-maker.component.html"*/
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

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empty_state_empty_state_component__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_match_add_match_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__overflow_menu_overflow_menu_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teams_maker_teams_maker_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scoreboard_scoreboard_component__ = __webpack_require__(409);
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
            ],
            entryComponents: [
                //     // A list of components that are not referenced in a reachable component template.
                //     MenuComponent,
                __WEBPACK_IMPORTED_MODULE_4__empty_state_empty_state_component__["a" /* EmptyStateComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_match_add_match_component__["a" /* AddMatchComponent */],
                __WEBPACK_IMPORTED_MODULE_6__overflow_menu_overflow_menu_component__["a" /* OverflowMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__teams_maker_teams_maker_component__["a" /* TeamsMakerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__scoreboard_scoreboard_component__["a" /* ScoreboardComponent */],
            ],
            exports: [
                // A list of declarations — component, directive, and pipe classes — that an importing module can use.
                __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__empty_state_empty_state_component__["a" /* EmptyStateComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_match_add_match_component__["a" /* AddMatchComponent */],
                __WEBPACK_IMPORTED_MODULE_7__teams_maker_teams_maker_component__["a" /* TeamsMakerComponent */],
            ],
            providers: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
            selector: 'fwf-scoreboard',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\components\scoreboard\scoreboard.component.html"*/'<ion-card>\n    <ion-item>        \n        <ion-label>{{\'WHITE\' | translate}}</ion-label>\n        <ion-icon item-right name="remove-circle" color="primary" (click)="subWhite()">{{scoreWhite}}</ion-icon>\n        <!-- <ion-label item-right>  </ion-label> -->\n        <ion-icon item-right name="add-circle" color="primary" (click)="addWhite()"></ion-icon>\n    </ion-item>\n    <ion-item>\n        <ion-label>{{\'BLACK\' | translate}}</ion-label>\n        <ion-icon item-right name="remove-circle" color="primary" (click)="subBlack()">{{scoreBlack}}</ion-icon>\n        <!-- <ion-label item-right>  </ion-label> -->\n        <ion-icon item-right name="add-circle" color="primary" (click)="addBlack()"></ion-icon>\n    </ion-item>\n    <ion-buttons>\n        <button ion-button (click)="save()">OK</button>\n        <button ion-button (click)="cancel()">Cancel</button>\n    </ion-buttons>\n</ion-card>\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\components\scoreboard\scoreboard.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ScoreboardComponent);
    return ScoreboardComponent;
}());

//# sourceMappingURL=scoreboard.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(430);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export HttpLoaderFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_components_module__ = __webpack_require__(407);
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
                        { loadChildren: 'pages/discards/discards.component.module#CallUpPageModule', name: 'DiscardsPage', segment: 'discards.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/introduction/introduction.component.module#IntroductionPageModule', name: 'IntroductionPage', segment: 'introduction', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/login/login.component.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/match/match.component.module#MatchPageModule', name: 'MatchPage', segment: 'match.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/matches/matches.component.module#MatchesPageModule', name: 'MatchesPage', segment: 'matches', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/profile/profile.component.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/stats/stats.component.module#StatsPageModule', name: 'StatsPage', segment: 'stats', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/payments/payments.component.module#PaymentsPageModule', name: 'PaymentsPage', segment: 'payments', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/tabs-controller/tabs-controller.module#TabsControllerPageModule', name: 'TabsController', segment: 'tabController', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/valuations/valuations.component.module#CallUpPageModule', name: 'ValuationsPage', segment: 'valuations.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'pages/teams/teams.component.module#TeamsPageModule', name: 'TeamsPage', segment: 'teams.component', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_13__providers__["j" /* PlayersService */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["c" /* BusyIndicatorService */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["i" /* MessagesService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__providers__["k" /* TokenInterceptor */],
                    multi: true,
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__providers__["l" /* UrlInterceptor */],
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

/***/ 467:
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

/***/ 468:
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

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamColor; });
var TeamColor;
(function (TeamColor) {
    TeamColor[TeamColor["WHITE"] = 0] = "WHITE";
    TeamColor[TeamColor["BLACK"] = 1] = "BLACK";
})(TeamColor || (TeamColor = {}));
//# sourceMappingURL=match.model.js.map

/***/ }),

/***/ 470:
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

/***/ 471:
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
    Action[Action["ADD_EXTRA_PLAYER"] = 11] = "ADD_EXTRA_PLAYER";
    Action[Action["REMOVE_EXTRA_PLAYER"] = 12] = "REMOVE_EXTRA_PLAYER";
})(Action || (Action = {}));
//# sourceMappingURL=option.model.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
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
    MatchesService.prototype.updateTeams = function (matchId, teams) {
        return this.http.put(MATCH_URL + "/" + matchId + "/teams", teams);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_auth_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(76);
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
                // url: `http://localhost:8100/${request.url}`
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

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(76);
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

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyIndicatorInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__busy_indicator_busy_indicator_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw__ = __webpack_require__(122);
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

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Intercepts the HTTP responses, and in case that an error/exception is thrown, handles it
 * and extract the relevant information of it.
 */
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req)
            .catch(function (errorResponse) {
            var errMsg;
            if (errorResponse instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                var err = errorResponse.message || JSON.stringify(errorResponse.error);
                errMsg = errorResponse.status + " - " + (errorResponse.statusText || '') + " Details: " + err;
            }
            else {
                errMsg = errorResponse.message ? errorResponse.message : errorResponse.toString();
            }
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw__["_throw"])(errMsg);
        });
    };
    ErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

//# sourceMappingURL=error.interceptor.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(76);
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
    }
    ContextService.prototype.getUserLogged = function () {
        return this.userLogged;
    };
    ContextService.prototype.setUserLogged = function (user) {
        this.userLogged = user;
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
            roleAdmin = this.userLogged.roles.findIndex(function (role) { return role === __WEBPACK_IMPORTED_MODULE_1__models__["c" /* Role */].ADMIN; }) >= 0;
        }
        return roleAdmin;
    };
    ContextService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ContextService);
    return ContextService;
}());

//# sourceMappingURL=context.service.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
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

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ToastType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(45);
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

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 211,
	"./af.js": 211,
	"./ar": 212,
	"./ar-dz": 213,
	"./ar-dz.js": 213,
	"./ar-kw": 214,
	"./ar-kw.js": 214,
	"./ar-ly": 215,
	"./ar-ly.js": 215,
	"./ar-ma": 216,
	"./ar-ma.js": 216,
	"./ar-sa": 217,
	"./ar-sa.js": 217,
	"./ar-tn": 218,
	"./ar-tn.js": 218,
	"./ar.js": 212,
	"./az": 219,
	"./az.js": 219,
	"./be": 220,
	"./be.js": 220,
	"./bg": 221,
	"./bg.js": 221,
	"./bm": 222,
	"./bm.js": 222,
	"./bn": 223,
	"./bn.js": 223,
	"./bo": 224,
	"./bo.js": 224,
	"./br": 225,
	"./br.js": 225,
	"./bs": 226,
	"./bs.js": 226,
	"./ca": 227,
	"./ca.js": 227,
	"./cs": 228,
	"./cs.js": 228,
	"./cv": 229,
	"./cv.js": 229,
	"./cy": 230,
	"./cy.js": 230,
	"./da": 231,
	"./da.js": 231,
	"./de": 232,
	"./de-at": 233,
	"./de-at.js": 233,
	"./de-ch": 234,
	"./de-ch.js": 234,
	"./de.js": 232,
	"./dv": 235,
	"./dv.js": 235,
	"./el": 236,
	"./el.js": 236,
	"./en-au": 237,
	"./en-au.js": 237,
	"./en-ca": 238,
	"./en-ca.js": 238,
	"./en-gb": 239,
	"./en-gb.js": 239,
	"./en-ie": 240,
	"./en-ie.js": 240,
	"./en-il": 241,
	"./en-il.js": 241,
	"./en-nz": 242,
	"./en-nz.js": 242,
	"./eo": 243,
	"./eo.js": 243,
	"./es": 244,
	"./es-do": 245,
	"./es-do.js": 245,
	"./es-us": 246,
	"./es-us.js": 246,
	"./es.js": 244,
	"./et": 247,
	"./et.js": 247,
	"./eu": 248,
	"./eu.js": 248,
	"./fa": 249,
	"./fa.js": 249,
	"./fi": 250,
	"./fi.js": 250,
	"./fo": 251,
	"./fo.js": 251,
	"./fr": 252,
	"./fr-ca": 253,
	"./fr-ca.js": 253,
	"./fr-ch": 254,
	"./fr-ch.js": 254,
	"./fr.js": 252,
	"./fy": 255,
	"./fy.js": 255,
	"./gd": 256,
	"./gd.js": 256,
	"./gl": 257,
	"./gl.js": 257,
	"./gom-latn": 258,
	"./gom-latn.js": 258,
	"./gu": 259,
	"./gu.js": 259,
	"./he": 260,
	"./he.js": 260,
	"./hi": 261,
	"./hi.js": 261,
	"./hr": 262,
	"./hr.js": 262,
	"./hu": 263,
	"./hu.js": 263,
	"./hy-am": 264,
	"./hy-am.js": 264,
	"./id": 265,
	"./id.js": 265,
	"./is": 266,
	"./is.js": 266,
	"./it": 267,
	"./it.js": 267,
	"./ja": 268,
	"./ja.js": 268,
	"./jv": 269,
	"./jv.js": 269,
	"./ka": 270,
	"./ka.js": 270,
	"./kk": 271,
	"./kk.js": 271,
	"./km": 272,
	"./km.js": 272,
	"./kn": 273,
	"./kn.js": 273,
	"./ko": 274,
	"./ko.js": 274,
	"./ky": 275,
	"./ky.js": 275,
	"./lb": 276,
	"./lb.js": 276,
	"./lo": 277,
	"./lo.js": 277,
	"./lt": 278,
	"./lt.js": 278,
	"./lv": 279,
	"./lv.js": 279,
	"./me": 280,
	"./me.js": 280,
	"./mi": 281,
	"./mi.js": 281,
	"./mk": 282,
	"./mk.js": 282,
	"./ml": 283,
	"./ml.js": 283,
	"./mn": 284,
	"./mn.js": 284,
	"./mr": 285,
	"./mr.js": 285,
	"./ms": 286,
	"./ms-my": 287,
	"./ms-my.js": 287,
	"./ms.js": 286,
	"./mt": 288,
	"./mt.js": 288,
	"./my": 289,
	"./my.js": 289,
	"./nb": 290,
	"./nb.js": 290,
	"./ne": 291,
	"./ne.js": 291,
	"./nl": 292,
	"./nl-be": 293,
	"./nl-be.js": 293,
	"./nl.js": 292,
	"./nn": 294,
	"./nn.js": 294,
	"./pa-in": 295,
	"./pa-in.js": 295,
	"./pl": 296,
	"./pl.js": 296,
	"./pt": 297,
	"./pt-br": 298,
	"./pt-br.js": 298,
	"./pt.js": 297,
	"./ro": 299,
	"./ro.js": 299,
	"./ru": 300,
	"./ru.js": 300,
	"./sd": 301,
	"./sd.js": 301,
	"./se": 302,
	"./se.js": 302,
	"./si": 303,
	"./si.js": 303,
	"./sk": 304,
	"./sk.js": 304,
	"./sl": 305,
	"./sl.js": 305,
	"./sq": 306,
	"./sq.js": 306,
	"./sr": 307,
	"./sr-cyrl": 308,
	"./sr-cyrl.js": 308,
	"./sr.js": 307,
	"./ss": 309,
	"./ss.js": 309,
	"./sv": 310,
	"./sv.js": 310,
	"./sw": 311,
	"./sw.js": 311,
	"./ta": 312,
	"./ta.js": 312,
	"./te": 313,
	"./te.js": 313,
	"./tet": 314,
	"./tet.js": 314,
	"./tg": 315,
	"./tg.js": 315,
	"./th": 316,
	"./th.js": 316,
	"./tl-ph": 317,
	"./tl-ph.js": 317,
	"./tlh": 318,
	"./tlh.js": 318,
	"./tr": 319,
	"./tr.js": 319,
	"./tzl": 320,
	"./tzl.js": 320,
	"./tzm": 321,
	"./tzm-latn": 322,
	"./tzm-latn.js": 322,
	"./tzm.js": 321,
	"./ug-cn": 323,
	"./ug-cn.js": 323,
	"./uk": 324,
	"./uk.js": 324,
	"./ur": 325,
	"./ur.js": 325,
	"./uz": 326,
	"./uz-latn": 327,
	"./uz-latn.js": 327,
	"./uz.js": 326,
	"./vi": 328,
	"./vi.js": 328,
	"./x-pseudo": 329,
	"./x-pseudo.js": 329,
	"./yo": 330,
	"./yo.js": 330,
	"./zh-cn": 331,
	"./zh-cn.js": 331,
	"./zh-hk": 332,
	"./zh-hk.js": 332,
	"./zh-tw": 333,
	"./zh-tw.js": 333
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
webpackContext.id = 496;

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
    function MenuComponent(menu) {
        this.menu = menu;
        this.itemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.initializeTiles();
    };
    MenuComponent.prototype.navigateTo = function (target) {
        this.menuItemSelected(target);
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
                title: 'MENU.SETTINGS',
                target: 'tiles.settings',
                icon: 'settings'
            },
            {
                title: 'MENU.LOCATION',
                target: 'tiles.location',
                icon: 'pin'
            },
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
            },
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
            selector: 'fwf-menu',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\components\menu\menu.component.html"*/'<ion-menu [content]="content" swipeEnabled="false">\n    <ion-header>\n        <ion-card>\n            <img src="assets/img/png/FWF-logo.PNG"/>\n            <!-- <ion-card-content>\n              <ion-card-title>\n                {{\'MENU.TITLE\' | translate}}\n                </ion-card-title>\n              <p>\n                Aquí se puede poner algo o no\n              </p>\n            </ion-card-content> -->\n          </ion-card>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item\n                    *ngFor="let tile of tiles1"\n                    (click)="navigateTo(tile.target)">\n                <ion-icon [name]="tile.icon"></ion-icon>\n                {{tile.title | translate}}\n            </button>\n            <!--Menu divider-->\n            <ion-item-divider>\n                {{\'MENU.TITLE_DIVIDER\' | translate}}\n            </ion-item-divider>\n            <button ion-item\n                    *ngFor="let tile of tiles2"\n                    (click)="navigateTo(tile.target)">\n                <ion-icon [name]="tile.icon"></ion-icon>\n                {{tile.title | translate}}\n            </button>\n        </ion-list>\n      </ion-content>\n    <ion-footer>\n        <ion-toolbar class="product-info">\n            <ion-title>\n                <h2 class="product-name">\n                    <span>{{\'APPLICATION_DETAIL.NAME\' | translate}}</span>\n                    <span class="version">{{\'APPLICATION_DETAIL.VERSION\' | translate}}</span>\n                </h2>\n                <h3 class="copyright">\n                    {{ "APPLICATION_DETAIL.COPYRIGHT" | translate }}\n                </h3>\n            </ion-title>\n        </ion-toolbar>\n    </ion-footer>\n</ion-menu>'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\components\menu\menu.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 498:
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
            selector: 'fwf-empty-state',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\components\empty-state\empty-state.component.html"*/'<ion-card text-center class="secondary-text">\n    <img *ngIf="image" [src]="image"/>\n    <ion-card-content>\n        <ng-content></ng-content>\n    </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\components\empty-state\empty-state.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EmptyStateComponent);
    return EmptyStateComponent;
}());

//# sourceMappingURL=empty-state.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootballWithFriendsAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_src_locale_es__ = __webpack_require__(527);
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
            case 'tiles.introduction':
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\app.template.html"*/'<!-- logged out menu -->\n<fwf-menu [content]="content" (itemSelected)="menuItemSelected($event)"></fwf-menu>\n\n<!-- main navigation -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\app.template.html"*/
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

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__(467);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__user_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_model__ = __webpack_require__(468);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_model__ = __webpack_require__(469);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__match_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_headers_model__ = __webpack_require__(470);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__http_headers_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__option_model__ = __webpack_require__(471);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__option_model__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matches_matches_service__ = __webpack_require__(472);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__matches_matches_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__(473);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__global_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__ = __webpack_require__(120);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_token_interceptor__ = __webpack_require__(482);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__interceptors_token_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interceptors_url_interceptor__ = __webpack_require__(485);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__interceptors_url_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interceptors_header_interceptor__ = __webpack_require__(486);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__interceptors_header_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interceptors_busy_indicator_interceptor__ = __webpack_require__(487);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__interceptors_busy_indicator_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interceptors_error_interceptor__ = __webpack_require__(489);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__interceptors_error_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__context_context_service__ = __webpack_require__(493);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__context_context_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__players_players_service__ = __webpack_require__(494);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__players_players_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__busy_indicator_busy_indicator_service__ = __webpack_require__(210);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_10__busy_indicator_busy_indicator_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__messages_messages_service__ = __webpack_require__(495);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_11__messages_messages_service__["a"]; });












//# sourceMappingURL=index.js.map

/***/ })

},[410]);
//# sourceMappingURL=main.js.map