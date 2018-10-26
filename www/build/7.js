webpackJsonp([7],{

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_component__ = __webpack_require__(612);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__profile_component__["a" /* ProfilePageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__profile_component__["a" /* ProfilePageComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.component.module.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_edit_profile_edit_profile_component__ = __webpack_require__(411);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent(navCtrl, navParams, 
        // private translate: TranslateService,
        context, modalCtrl, messages) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.context = context;
        this.modalCtrl = modalCtrl;
        this.messages = messages;
        this.loadProfile();
    }
    ProfilePageComponent.prototype.ionViewDidLoad = function () {
    };
    ProfilePageComponent.prototype.editProfile = function () {
        var _this = this;
        var dialog = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_edit_profile_edit_profile_component__["a" /* EditProfileComponent */], { profile: this.profile }, { enableBackdropDismiss: false });
        dialog.onDidDismiss(function (newProfile) {
            if (newProfile) {
                _this.context.setPlayerLogged(newProfile.player);
                _this.context.setUserLogged(newProfile.user);
                _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                _this.loadProfile();
            }
        });
        dialog.present();
    };
    ProfilePageComponent.prototype.loadProfile = function () {
        var userLogged = this.context.getUserLogged();
        var playerLogged = this.context.getPlayerLogged();
        this.profile = {
            player: playerLogged,
            user: userLogged,
            fullName: userLogged.fullName,
            alias: playerLogged.alias,
            email: playerLogged.email,
            phoneNumber: playerLogged.phoneNumber,
            fixed: playerLogged.fixed,
            username: userLogged.username
        };
    };
    ProfilePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-profile',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\profile\profile.component.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <!--Android pushes buttons to the left even if start attribute is present.\n            Check demo: http://ionicframework.com/docs/v2/components/#buttons-in-components-->\n        <!--If placing the menuToggle in a navbar or toolbar, it should be placed as a child of the <ion-navbar> or <ion-toolbar>, and not in the <ion-buttons> element\n        http://ionicframework.com/docs/v2/api/components/menu/MenuToggle/-->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            {{ "PROFILE_PAGE.TITLE" | translate}}\n        </ion-title>\n        <ion-buttons end>               \n            <button ion-button\n                    icon-only\n                    clear\n                    (click)="editProfile()">\n                <ion-icon name="create"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <!-- <ion-card> -->\n        <ion-card-header>\n            {{"PROFILE_PAGE.DATA_HEADER" | translate}}\n        </ion-card-header>      \n        <ion-list>         \n            <ion-item color="none">\n                <ion-icon name="person" item-left></ion-icon>\n                {{ "PROFILE_PAGE.NAME" | translate}}\n                <h4>\n                    {{profile.fullName}}\n                </h4>\n            </ion-item>\n            <ion-item color="none">\n                <ion-icon name="shirt" item-left></ion-icon>\n                {{ "PROFILE_PAGE.ALIAS" | translate}}\n                <h4>\n                    {{profile.alias}}\n                </h4>\n            </ion-item>\n            <ion-item color="none">\n                <ion-icon name="mail" item-left></ion-icon>\n                {{ "PROFILE_PAGE.EMAIL" | translate}}\n                <h4>\n                    <span *ngIf="profile.email; else elseBlock">\n                        {{profile.email}}\n                    </span>\n                    <ng-template #elseBlock>\n                        {{ "NOT_AVAILABLE" | translate}}\n                    </ng-template>\n                </h4>\n            </ion-item>     \n            <ion-item color="none">\n                <ion-icon name="call" item-left></ion-icon>\n                {{ "PROFILE_PAGE.PHONE" | translate}}\n                <h4>\n                    <span *ngIf="profile.phoneNumber; else elseBlock1">\n                        {{profile.phoneNumber}}\n                    </span>\n                    <ng-template #elseBlock1>\n                        {{ "NOT_AVAILABLE" | translate}}\n                    </ng-template>\n                </h4>\n            </ion-item>\n            <ion-item color="none">\n                <ion-icon name="cash" item-left></ion-icon>\n                {{ "PROFILE_PAGE.STATUS" | translate}}\n                <h4>\n                    <span *ngIf="profile.fixed; else elseBlock2">\n                        {{ "PROFILE_PAGE.FIXED" | translate}}\n                    </span>\n                    <ng-template #elseBlock2>\n                        {{ "PROFILE_PAGE.NO_FIXED" | translate}}\n                    </ng-template>\n                </h4>\n            </ion-item>\n            <ion-item color="none">\n                <ion-icon name="key" item-left></ion-icon>\n                {{ "PROFILE_PAGE.USERNAME" | translate}}\n                <h4>\n                    {{profile.username}}\n                </h4>\n            </ion-item>\n        </ion-list>\n        <button ion-button full (click)="changePassword()">{{ "PROFILE_PAGE.CHANGE_PASSWORD" | translate}}</button>\n      <!-- </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\profile\profile.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* ContextService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["i" /* MessagesService */]])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());

//# sourceMappingURL=profile.component.js.map

/***/ })

});
//# sourceMappingURL=7.js.map