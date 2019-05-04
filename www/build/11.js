webpackJsonp([11],{

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionPageModule", function() { return IntroductionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__introduction_component__ = __webpack_require__(610);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IntroductionPageModule = /** @class */ (function () {
    function IntroductionPageModule() {
    }
    IntroductionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__introduction_component__["a" /* IntroductionPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__introduction_component__["a" /* IntroductionPageComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], IntroductionPageModule);
    return IntroductionPageModule;
}());

//# sourceMappingURL=introduction.component.module.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroductionPageComponent = /** @class */ (function () {
    function IntroductionPageComponent(app, menu, storage) {
        this.app = app;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
        this.image1 = 'assets/img/png/Cup.png';
        this.image2 = 'assets/img/png/Kick.png';
        this.image3 = 'assets/img/png/Goal.png';
        this.image4 = 'assets/img/png/Foul.png';
    }
    IntroductionPageComponent.prototype.startApp = function () {
        var _this = this;
        this.app.getActiveNavs()[0].setRoot('LoginPage').then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    IntroductionPageComponent.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    IntroductionPageComponent.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    IntroductionPageComponent.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    IntroductionPageComponent.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], IntroductionPageComponent.prototype, "slides", void 0);
    IntroductionPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-introduction',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\introduction\introduction.component.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n    <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n        <ion-slide>\n            <img [src]="image1" class="slide-image"/>\n            <h2 class="slide-title">\n                {{\'INTRODUCTION.SLIDE1_1\' | translate}} <b>{{\'APPLICATION_DETAIL.NAME\' | translate}}</b>\n            </h2>\n            <p>\n                {{\'INTRODUCTION.SLIDE1_2\' | translate}} <b>app</b> {{\'INTRODUCTION.SLIDE1_3\' | translate}} \n            </p>\n        </ion-slide>\n\n        <ion-slide>\n            <img [src]="image2" class="slide-image"/>\n            <h2 class="slide-title" >\n                {{\'INTRODUCTION.SLIDE2_1\' | translate}}\n            </h2>\n\n            <p><b>{{\'APPLICATION_DETAIL.NAME\' | translate}}</b> {{\'INTRODUCTION.SLIDE2_2\' | translate}}</p>\n            <p><b>{{\'APPLICATION_DETAIL.NAME\' | translate}}</b> {{\'INTRODUCTION.SLIDE2_3\' | translate}}</p>\n        </ion-slide>\n\n        <ion-slide>\n            <img [src]="image3" class="slide-image"/>\n            <h2 class="slide-title">\n                {{\'INTRODUCTION.SLIDE3_1\' | translate}}\n            </h2>\n            <p>{{\'INTRODUCTION.SLIDE3_2\' | translate}} <b>{{\'INTRODUCTION.SLIDE3_3\' | translate}}</b> {{\'INTRODUCTION.SLIDE3_4\' | translate}}</p>\n        </ion-slide>\n\n        <ion-slide>\n            <img [src]="image4" class="slide-image"/>\n            <h2 class="slide-title">\n                {{\'INTRODUCTION.SLIDE4_1\' | translate}}\n            </h2>\n            <button ion-button icon-end large clear (click)="startApp()">\n                {{\'INTRODUCTION.CONTINUE\' | translate}}\n                <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n        </ion-slide>\n\n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\introduction\introduction.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], IntroductionPageComponent);
    return IntroductionPageComponent;
}());

//# sourceMappingURL=introduction.component.js.map

/***/ })

});
//# sourceMappingURL=11.js.map