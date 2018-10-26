webpackJsonp([3],{

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUpPageModule", function() { return CallUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__valuations_component__ = __webpack_require__(616);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CallUpPageModule = /** @class */ (function () {
    function CallUpPageModule() {
    }
    CallUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__valuations_component__["a" /* ValuationsPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__valuations_component__["a" /* ValuationsPageComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], CallUpPageModule);
    return CallUpPageModule;
}());

//# sourceMappingURL=valuations.component.module.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuationsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValuationsPageComponent = /** @class */ (function () {
    function ValuationsPageComponent(navCtrl, navParams, valuationsService, messages) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valuationsService = valuationsService;
        this.messages = messages;
    }
    ValuationsPageComponent.prototype.ngOnInit = function () {
        this.match = this.navParams.get('match');
        this.playerConnected = this.navParams.get('player');
        this.loadScores();
    };
    ValuationsPageComponent.prototype.saveScores = function () {
        var _this = this;
        this.matchScore.date = new Date();
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
    ValuationsPageComponent.prototype.loadScores = function () {
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
    ValuationsPageComponent.prototype.createNewScores = function () {
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
    ValuationsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-valuations',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\valuations\valuations.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">        \n\n        <ion-title>\n\n            {{match.name}} {{"MATCH_PAGE.VALUATIONS" | translate}}\n\n        </ion-title>\n\n        <ion-buttons end>               \n\n            <button ion-button\n\n                    icon-only\n\n                    clear\n\n                    (click)="saveScores()">\n\n                <ion-icon name="checkmark-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list *ngIf="matchScore">\n\n        <ion-item *ngFor="let item of matchScore.scores; let i = index;">\n\n            <ion-label>{{i+1}}. {{item.namePlayer}}</ion-label>\n\n                <ion-select \n\n                        [(ngModel)]="item.score">\n\n                    <ion-option selected=true>---</ion-option>\n\n                    <ion-option \n\n                        *ngFor="let score of [0,1,2,3,4,5,6,7,8,9,10]">\n\n                            {{score}}\n\n                    </ion-option>\n\n                </ion-select>\n\n        </ion-item>\n\n    </ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\valuations\valuations.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["n" /* ValuationsService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["i" /* MessagesService */]])
    ], ValuationsPageComponent);
    return ValuationsPageComponent;
}());

//# sourceMappingURL=valuations.component.js.map

/***/ })

});
//# sourceMappingURL=3.js.map