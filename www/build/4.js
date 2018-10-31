webpackJsonp([4],{

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPageModule", function() { return TeamsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teams_component__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TeamsPageModule = /** @class */ (function () {
    function TeamsPageModule() {
    }
    TeamsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__teams_component__["a" /* TeamsPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__teams_component__["a" /* TeamsPageComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], TeamsPageModule);
    return TeamsPageModule;
}());

//# sourceMappingURL=teams.component.module.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamsPageComponent = /** @class */ (function () {
    function TeamsPageComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeamsPageComponent.prototype.ngOnInit = function () {
        this.match = this.navParams.get('match');
    };
    TeamsPageComponent.prototype.showOptions = function () {
    };
    TeamsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-teams',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\teams\teams.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">        \n\n        <ion-title>\n\n            {{match.name}} {{"MATCH_PAGE.TEAMS" | translate}}\n\n        </ion-title>\n\n        <ion-buttons end>               \n\n            <button ion-button\n\n                    icon-only\n\n                    clear\n\n                    (click)="showOptions()">\n\n                <ion-icon name="more"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-card *ngIf="match.team1 && match.team2; else elesBlock">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>                    \n\n                    <ion-list>\n\n                        <ion-list-header>\n\n                            {{match.team1.color | translate}}\n\n                        </ion-list-header>\n\n                        <ion-item *ngFor="let player of match.team1.players; let i = index;">\n\n                            {{i+1}}. {{player.name}} <span *ngIf="!player.fixed">(s)</span>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ion-list>\n\n                        <ion-list-header>\n\n                            {{match.team2.color | translate}}\n\n                        </ion-list-header>\n\n                        <ion-item *ngFor="let player of match.team2.players; let i = index;">\n\n                            {{i+1}}. {{player.name}} <span *ngIf="!player.fixed">(s)</span>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-card>  \n\n    <ng-template #elseBlock>\n\n        <fwf-empty-state>\n\n            {{\'TEAMSPAGE.NO_TEAMS\' | translate}}\n\n        </fwf-empty-state>\n\n    </ng-template>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\teams\teams.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TeamsPageComponent);
    return TeamsPageComponent;
}());

//# sourceMappingURL=teams.component.js.map

/***/ })

});
//# sourceMappingURL=4.js.map