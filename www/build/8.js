webpackJsonp([8],{

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payments_component__ = __webpack_require__(613);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaymentsPageModule = /** @class */ (function () {
    function PaymentsPageModule() {
    }
    PaymentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__payments_component__["a" /* PaymentsPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__payments_component__["a" /* PaymentsPageComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], PaymentsPageModule);
    return PaymentsPageModule;
}());

//# sourceMappingURL=payments.component.module.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPageComponent; });
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


var PaymentsPageComponent = /** @class */ (function () {
    function PaymentsPageComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentsPageComponent.prototype.ngOnInit = function () {
    };
    PaymentsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-payments',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\payments\payments.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <!--Android pushes buttons to the left even if start attribute is present.\n\n            Check demo: http://ionicframework.com/docs/v2/components/#buttons-in-components-->\n\n        <!--If placing the menuToggle in a navbar or toolbar, it should be placed as a child of the <ion-navbar> or <ion-toolbar>, and not in the <ion-buttons> element\n\n        http://ionicframework.com/docs/v2/api/components/menu/MenuToggle/-->\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            {{ "PAYMENTS_PAGE.TITLE" | translate}}\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button\n\n                    icon-only\n\n                    clear\n\n                    (click)="openSearchBox()">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>        \n\n            <button ion-button\n\n                    icon-only\n\n                    clear\n\n                    *ngIf="hasAddPermission"\n\n                    (click)="addPayment()">\n\n                <ion-icon name="add"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n    <img src="assets/img/png/under-construction.png"/>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\payments\payments.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PaymentsPageComponent);
    return PaymentsPageComponent;
}());

//# sourceMappingURL=payments.component.js.map

/***/ })

});
//# sourceMappingURL=8.js.map