webpackJsonp([10],{

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyValuationsPageModule", function() { return MyValuationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_valuations_component__ = __webpack_require__(615);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyValuationsPageModule = /** @class */ (function () {
    function MyValuationsPageModule() {
    }
    MyValuationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__my_valuations_component__["a" /* MyValuationsPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__my_valuations_component__["a" /* MyValuationsPageComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], MyValuationsPageModule);
    return MyValuationsPageModule;
}());

//# sourceMappingURL=my-valuations.component.module.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyValuationsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(51);
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




var MyValuationsPageComponent = /** @class */ (function () {
    function MyValuationsPageComponent(navCtrl, navParams, valuationsService, messages) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valuationsService = valuationsService;
        this.messages = messages;
    }
    MyValuationsPageComponent.prototype.ngOnInit = function () {
        this.match = this.navParams.get('match');
        this.playerConnected = this.navParams.get('player');
        this.loadScores();
        var fechaPartido = __WEBPACK_IMPORTED_MODULE_2_moment__(this.match.date);
        var fechaActual = __WEBPACK_IMPORTED_MODULE_2_moment__();
        this.valuationDisabled = fechaActual.diff(fechaPartido, 'days') > 2;
    };
    MyValuationsPageComponent.prototype.saveScores = function () {
        var _this = this;
        this.matchScore.date = new Date();
        this.matchScore.scores = this.matchScore.scores.map(function (score) {
            var result = score;
            if (isNaN(score.score)) {
                result = __assign({}, score, { score: undefined });
            }
            return result;
        });
        if (this.matchScore.id) {
            this.valuationsService.updateMatchScore(this.matchScore)
                .subscribe(function (data) {
                _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                _this.navCtrl.pop();
            }, function (error) { return _this.messages.showError(error); });
        }
        else {
            this.valuationsService.createMatchScore(this.matchScore)
                .subscribe(function (data) {
                _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                _this.navCtrl.pop();
            }, function (error) { return _this.messages.showError(error); });
        }
    };
    MyValuationsPageComponent.prototype.loadScores = function () {
        var _this = this;
        this.valuationsService.fetchMatchScores(this.match.id, this.playerConnected.id)
            .subscribe(function (data) {
            if (!data) {
                _this.createNewScores();
            }
            else {
                _this.matchScore = data;
            }
        }, function (error) { return _this.messages.showError(error); });
    };
    MyValuationsPageComponent.prototype.createNewScores = function () {
        var _this = this;
        this.matchScore = {
            matchId: this.match.id,
            playerId: this.playerConnected.id,
            scores: []
        };
        this.match.callUp.forEach(function (item) {
            if (item.player.id !== _this.playerConnected.id) {
                var score = {
                    namePlayer: item.player.name,
                    idPlayer: item.player.id
                };
                _this.matchScore.scores.push(score);
            }
        });
    };
    MyValuationsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-my-valuations',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\pages\my-valuations\my-valuations.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">        \n\n        <ion-title>\n\n            {{match.name}}\n\n            <p class="subtitle">{{"MATCH_PAGE.MY_VALUATIONS" | translate}}</p>\n\n        </ion-title>\n\n        <ion-buttons end *ngIf="!valuationDisabled">               \n\n            <button ion-button\n\n                    icon-only\n\n                    clear\n\n                    (click)="saveScores()">\n\n                <ion-icon name="checkmark-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list *ngIf="matchScore">\n\n        <ion-item *ngFor="let item of matchScore.scores; let i = index;">\n\n            <ion-label>{{i+1}}. {{item.namePlayer}}</ion-label>\n\n                <ion-select [(ngModel)]="item.score" [disabled]="valuationDisabled">\n\n                    <ion-option selected=true>---</ion-option>\n\n                    <ion-option \n\n                        *ngFor="let score of [0,1,2,3,4,5,6,7,8,9,10]">\n\n                            {{score}}\n\n                    </ion-option>\n\n                </ion-select>\n\n        </ion-item>\n\n    </ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\pages\my-valuations\my-valuations.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["o" /* ValuationsService */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["i" /* MessagesService */]])
    ], MyValuationsPageComponent);
    return MyValuationsPageComponent;
}());

//# sourceMappingURL=my-valuations.component.js.map

/***/ })

});
//# sourceMappingURL=10.js.map