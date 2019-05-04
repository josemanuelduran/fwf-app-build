webpackJsonp([4],{

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuationsPageModule", function() { return ValuationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__valuations_component__ = __webpack_require__(627);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ValuationsPageModule = /** @class */ (function () {
    function ValuationsPageModule() {
    }
    ValuationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__valuations_component__["a" /* ValuationsPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__valuations_component__["a" /* ValuationsPageComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], ValuationsPageModule);
    return ValuationsPageModule;
}());

//# sourceMappingURL=valuations.component.module.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuationsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(51);
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
        this.loadScores();
    };
    ValuationsPageComponent.prototype.loadScores = function () {
        var _this = this;
        this.valuationsService.fetchPlayersScores(this.match.id)
            .subscribe(function (data) {
            if (!data) {
                _this.createNewScores();
            }
            else {
                _this.scores = data.map(function (item) {
                    return {
                        namePlayer: item.player.name,
                        idPlayer: item.player.id,
                        score: (item.totalScore / item.numVotes)
                    };
                });
                _this.scores.sort(function (a, b) {
                    if (a.score > b.score) {
                        return -1;
                    }
                    else if (a.score < b.score) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            }
        }, function (error) { return _this.messages.showError(error); });
    };
    ValuationsPageComponent.prototype.createNewScores = function () {
        var _this = this;
        this.scores = [];
        this.match.callUp.forEach(function (item) {
            var score = {
                namePlayer: item.player.name,
                idPlayer: item.player.id
            };
            _this.scores.push(score);
        });
    };
    ValuationsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-valuations',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\valuations\valuations.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">        \n\n        <ion-title>\n\n            {{match.name}}\n\n            <p class="subtitle">{{"MATCH_PAGE.VALUATIONS" | translate}}</p>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list *ngIf="scores">\n\n        <ion-item *ngFor="let item of scores; let i = index;">\n\n            <ion-label>{{i+1}}. {{item.namePlayer}}</ion-label>\n\n            <ion-label>{{item.score.toFixed(2)}}</ion-label>\n\n        </ion-item>\n\n    </ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\valuations\valuations.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["o" /* ValuationsService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["i" /* MessagesService */]])
    ], ValuationsPageComponent);
    return ValuationsPageComponent;
}());

//# sourceMappingURL=valuations.component.js.map

/***/ })

});
//# sourceMappingURL=4.js.map