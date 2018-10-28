webpackJsonp([12],{

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsPageModule", function() { return StatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_component__ = __webpack_require__(600);
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
                __WEBPACK_IMPORTED_MODULE_3__about_component__["a" /* AboutPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__about_component__["a" /* AboutPageComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], StatsPageModule);
    return StatsPageModule;
}());

//# sourceMappingURL=about.component.module.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(32);
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




var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent(navCtrl, navParams, global, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.translate = translate;
        this.imageSource = 'assets/img/png/FWF-logo.PNG';
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        this.imageSource = this.translate.instant('APPLICATION_DETAIL.IMAGE_SOURCE');
    };
    AboutPageComponent.prototype.ionViewDidLoad = function () {
        this.global.enableSideMenu(true);
    };
    AboutPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-about',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\about\about.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            {{"ABOUT_PAGE.TITLE" | translate}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card>\n\n        <img [src]="imageSource"/>\n\n        <ion-card-content>\n\n            <ion-card-title>\n\n                {{"APPLICATION_DETAIL.NAME" | translate}}\n\n            </ion-card-title>\n\n            <ion-list>\n\n                <ion-list-header>\n\n                    {{"ABOUT_PAGE.VERSION" | translate}}\n\n                </ion-list-header>\n\n                <ion-item>\n\n                    <ion-icon name="bookmark" item-start></ion-icon>\n\n                    {{"APPLICATION_DETAIL.VERSION" | translate}}\n\n                </ion-item>\n\n            </ion-list>\n\n            <ion-list>\n\n                <ion-list-header>\n\n                    {{"ABOUT_PAGE.AUTHOR" | translate}}\n\n                </ion-list-header>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/img/jpg/author.jpg">\n\n                    </ion-avatar>\n\n                    {{"APPLICATION_DETAIL.AUTHOR" | translate}}\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-card-content>\n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\about\about.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["f" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], AboutPageComponent);
    return AboutPageComponent;
}());

//# sourceMappingURL=about.component.js.map

/***/ })

});
//# sourceMappingURL=12.js.map