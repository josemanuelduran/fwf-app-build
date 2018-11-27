webpackJsonp([5],{

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsControllerPageModule", function() { return TabsControllerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsControllerPageModule = /** @class */ (function () {
    function TabsControllerPageModule() {
    }
    TabsControllerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_controller__["a" /* TabsControllerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs_controller__["a" /* TabsControllerComponent */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], TabsControllerPageModule);
    return TabsControllerPageModule;
}());

//# sourceMappingURL=tabs-controller.module.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { IonicPage, NavController, NavParams } from 'ionic-angular';



var TabsControllerComponent = /** @class */ (function () {
    function TabsControllerComponent(
        // public navCtrl: NavController,
        navParams, global, translate) {
        this.navParams = navParams;
        this.global = global;
        this.translate = translate;
        this.tab1Root = 'MatchesPage';
        this.tab2Root = 'ProfilePage';
        this.tab3Root = 'PaymentsPage';
        this.tab4Root = 'StatsPage';
    }
    TabsControllerComponent.prototype.ionViewDidEnter = function () {
        this.tabs.select(this.navParams.get('indexSelected'), undefined, undefined);
        this.global.enableSideMenu(true);
    };
    TabsControllerComponent.prototype.ngOnInit = function () {
        this.translateTitles();
    };
    TabsControllerComponent.prototype.translateTitles = function () {
        this.tab1Title = this.translate.instant('TABS.TAB1');
        this.tab2Title = this.translate.instant('TABS.TAB2');
        this.tab3Title = this.translate.instant('TABS.TAB3');
        this.tab4Title = this.translate.instant('TABS.TAB4');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tabs'),
        __metadata("design:type", Object)
    ], TabsControllerComponent.prototype, "tabs", void 0);
    TabsControllerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-tabs-controller',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\tabs-controller\tabs-controller.html"*/'<ion-tabs #tabs>\n    <ion-tab [root]="tab1Root" tabTitle="{{tab1Title}}" tabIcon="football"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="{{tab2Title}}" tabIcon="person"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="{{tab3Title}}" tabIcon="cash"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="{{tab4Title}}" tabIcon="stats"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\tabs-controller\tabs-controller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["f" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], TabsControllerComponent);
    return TabsControllerComponent;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ })

});
//# sourceMappingURL=5.js.map