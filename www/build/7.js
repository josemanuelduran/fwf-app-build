webpackJsonp([7],{

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsPageModule", function() { return StatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stats_component__ = __webpack_require__(628);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StatsPageModule = /** @class */ (function () {
    function StatsPageModule() {
    }
    StatsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__stats_component__["a" /* StatsPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__stats_component__["a" /* StatsPageComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], StatsPageModule);
    return StatsPageModule;
}());

//# sourceMappingURL=stats.component.module.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatsPageComponent = /** @class */ (function () {
    function StatsPageComponent(statsService, 
        // private translate: TranslateService,
        context, messages) {
        this.statsService = statsService;
        this.context = context;
        this.messages = messages;
        this.playerLogged = this.context.getPlayerLogged();
        this.totalMatchesPlayed = this.context.getMatchesPlayed();
    }
    StatsPageComponent.prototype.ngOnInit = function () {
        // It's necessary when comes here from back button'
        this.loadStats();
    };
    StatsPageComponent.prototype.loadStats = function () {
        var _this = this;
        this.statsService.fetchPlayerStats(this.playerLogged.id)
            .subscribe(function (data) {
            _this.stats = data;
            _this.matchesPlayedByPlayer = _this.stats.matchesPlayedAsBlack + _this.stats.matchesPlayedAsWhite;
            _this.matchesWonByPlayer = _this.stats.matchesWonAsWhite + _this.stats.matchesWonAsBlack;
            _this.matchesLostByPlayer = _this.stats.matchesLostAsWhite + _this.stats.matchesLostAsBlack;
            _this.matchesTiedByPlayer = _this.stats.matchesTiedAsWhite + _this.stats.matchesTiedAsBlack;
        }, function (error) { return _this.messages.showError(error); });
    };
    StatsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-stats',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\pages\stats\stats.component.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <!--Android pushes buttons to the left even if start attribute is present.\n            Check demo: http://ionicframework.com/docs/v2/components/#buttons-in-components-->\n        <!--If placing the menuToggle in a navbar or toolbar, it should be placed as a child of the <ion-navbar> or <ion-toolbar>, and not in the <ion-buttons> element\n        http://ionicframework.com/docs/v2/api/components/menu/MenuToggle/-->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            {{ "STATS_PAGE.TITLE" | translate}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            {{ "STATS_PAGE.MATCHES_PLAYED" | translate}} ({{ totalMatchesPlayed}} {{ "STATS_PAGE.TOTAL_MATCHES_PLAYED" | translate}})\n        </ion-card-header>\n        <ion-list>\n          <ion-item>\n            <ion-icon name="football" item-start></ion-icon>\n            {{ "STATS_PAGE.TOTAL" | translate}}\n                <h4>\n                    {{ matchesPlayedByPlayer }} ({{ ((matchesPlayedByPlayer / totalMatchesPlayed) * 100).toFixed(1) }} %)\n                </h4>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="app-white-shirt" item-start></ion-icon>\n            {{ "STATS_PAGE.WHITE" | translate}}\n                <h4>\n                    {{ stats?.matchesPlayedAsWhite }} ({{ ((stats?.matchesPlayedAsWhite / matchesPlayedByPlayer) * 100).toFixed(1) }} %)\n                </h4>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="app-black-shirt" item-start></ion-icon>\n            {{ "STATS_PAGE.BLACK" | translate}}\n                <h4>\n                    {{ stats?.matchesPlayedAsBlack }} ({{ ((stats?.matchesPlayedAsBlack / matchesPlayedByPlayer) * 100).toFixed(1) }} %)\n                </h4>\n          </ion-item>\n        </ion-list>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            {{ "STATS_PAGE.MATCHES_WON" | translate}}\n        </ion-card-header>\n        <ion-list>\n          <ion-item>\n            <ion-icon name="trophy" item-start></ion-icon>\n            {{ "STATS_PAGE.TOTAL" | translate}}\n                <h4>\n                    {{ matchesWonByPlayer }} ({{ ((matchesWonByPlayer / matchesPlayedByPlayer) * 100).toFixed(1) }} %)\n                </h4>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="app-white-shirt" item-start></ion-icon>\n            {{ "STATS_PAGE.WHITE" | translate}}\n                <h4>\n                    {{ stats?.matchesWonAsWhite }} ({{ ((stats?.matchesWonAsWhite / matchesWonByPlayer) * 100).toFixed(1) }} %)\n                </h4>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="app-black-shirt" item-start></ion-icon>\n            {{ "STATS_PAGE.BLACK" | translate}}\n                <h4>\n                    {{ stats?.matchesWonAsBlack }} ({{ ((stats?.matchesWonAsBlack / matchesWonByPlayer) * 100).toFixed(1) }} %)\n                </h4>\n          </ion-item>\n        </ion-list>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            {{ "STATS_PAGE.MATCHES_LOST" | translate}}\n        </ion-card-header>\n        <ion-list>\n          <ion-item>\n            <ion-icon name="thumbs-down" item-start></ion-icon>\n            {{ "STATS_PAGE.TOTAL" | translate}}\n                <h4>\n                  {{ matchesLostByPlayer }} ({{ ((matchesLostByPlayer / matchesPlayedByPlayer) * 100).toFixed(1) }} %)\n                </h4>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="app-white-shirt" item-start></ion-icon>\n            {{ "STATS_PAGE.WHITE" | translate}}\n                <h4>\n                    {{ stats?.matchesLostAsWhite }} ({{ ((stats?.matchesLostAsWhite / matchesLostByPlayer) * 100).toFixed(1) }} %)\n                </h4>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="app-black-shirt" item-start></ion-icon>\n            {{ "STATS_PAGE.BLACK" | translate}}\n                <h4>\n                    {{ stats?.matchesLostAsBlack }} ({{ ((stats?.matchesLostAsBlack / matchesLostByPlayer) * 100).toFixed(1) }} %)\n                </h4>\n          </ion-item>\n        </ion-list>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            {{ "STATS_PAGE.MATCHES_TIED" | translate}}\n        </ion-card-header>\n        <ion-list>\n          <ion-item>\n            <ion-icon name="app-handshake" class="handshake-icon" item-start></ion-icon>\n            {{ "STATS_PAGE.TOTAL" | translate}}\n                <h4>\n                  {{ matchesTiedByPlayer }} ({{ ((matchesTiedByPlayer / matchesPlayedByPlayer) * 100).toFixed(1) }} %)\n                </h4>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="app-white-shirt" item-start></ion-icon>\n            {{ "STATS_PAGE.WHITE" | translate}}\n                <h4>\n                    {{ stats?.matchesTiedAsWhite }} ({{ ((stats?.matchesTiedAsWhite / matchesTiedByPlayer) * 100).toFixed(1) }} %)\n                </h4>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="app-black-shirt" item-start></ion-icon>\n            {{ "STATS_PAGE.BLACK" | translate}}\n                <h4>\n                    {{ stats?.matchesTiedAsBlack }} ({{ ((stats?.matchesTiedAsBlack / matchesTiedByPlayer) * 100).toFixed(1) }} %)\n                </h4>\n          </ion-item>\n        </ion-list>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n          {{ "STATS_PAGE.GOALS" | translate}}\n        </ion-card-header>\n        <ion-list>\n          <ion-item color="none">\n              <ion-icon name="thumbs-up" item-left></ion-icon>\n              {{ "STATS_PAGE.GOALS_SCORED" | translate}}\n              <h4>\n                  {{ stats?.goalsScored }}\n              </h4>\n          </ion-item>\n          <ion-item color="none">\n              <ion-icon name="thumbs-down" item-left></ion-icon>\n              {{ "STATS_PAGE.GOALS_CONCEDED" | translate}}\n              <h4>\n                  {{ stats?.goalsConceded }}\n              </h4>\n          </ion-item>\n        </ion-list>\n    </ion-card>\n\n  </ion-content>\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\pages\stats\stats.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers__["m" /* StatsService */],
            __WEBPACK_IMPORTED_MODULE_1__providers__["d" /* ContextService */],
            __WEBPACK_IMPORTED_MODULE_1__providers__["i" /* MessagesService */]])
    ], StatsPageComponent);
    return StatsPageComponent;
}());

//# sourceMappingURL=stats.component.js.map

/***/ })

});
//# sourceMappingURL=7.js.map