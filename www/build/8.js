webpackJsonp([8],{

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_component__ = __webpack_require__(621);
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

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_edit_profile_edit_profile_component__ = __webpack_require__(415);
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
    function ProfilePageComponent(navCtrl, navParams, translate, context, modalCtrl, messages, alertCtrl, profileService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.context = context;
        this.modalCtrl = modalCtrl;
        this.messages = messages;
        this.alertCtrl = alertCtrl;
        this.profileService = profileService;
        this.loadProfile();
    }
    ProfilePageComponent.prototype.ionViewDidLoad = function () {
    };
    ProfilePageComponent.prototype.editProfile = function () {
        var _this = this;
        var dialog = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_edit_profile_edit_profile_component__["a" /* EditProfileComponent */], { profile: this.profile }, { enableBackdropDismiss: false });
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
    ProfilePageComponent.prototype.changePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translate.instant('PROFILE_PAGE.CHANGE_PASSWORD'),
            inputs: [
                {
                    name: 'currentPassword',
                    placeholder: this.translate.instant('PROFILE_PAGE.CURRENT_PASSWORD'),
                    type: 'password'
                },
                {
                    name: 'newPassword1',
                    placeholder: this.translate.instant('PROFILE_PAGE.NEW_PASSWORD'),
                    type: 'password'
                },
                {
                    name: 'newPassword2',
                    placeholder: this.translate.instant('PROFILE_PAGE.REPIT_PASSWORD'),
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: this.translate.instant('CANCEL_BUTTON'),
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: this.translate.instant('SAVE_BUTTON'),
                    handler: function (data) {
                        if (data.newPassword1 === data.newPassword2) {
                            _this.profileService.changePassword(_this.context.getUserLogged().id, data.currentPassword, data.newPassword1)
                                .subscribe(function (res) { return _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION'); }, function (error) { return _this.messages.showError(error, 'PROFILE_PAGE.ERROR_CHANGE_PASSWORD'); });
                        }
                        else {
                            _this.messages.showError('PROFILE_PAGE.BAD_NEW_PASSWORD_EXPLANATION', 'PROFILE_PAGE.BAD_NEW_PASSWORD');
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-profile',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\profile\profile.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <!--Android pushes buttons to the left even if start attribute is present.\n\n            Check demo: http://ionicframework.com/docs/v2/components/#buttons-in-components-->\n\n        <!--If placing the menuToggle in a navbar or toolbar, it should be placed as a child of the <ion-navbar> or <ion-toolbar>, and not in the <ion-buttons> element\n\n        http://ionicframework.com/docs/v2/api/components/menu/MenuToggle/-->\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            {{ "PROFILE_PAGE.TITLE" | translate}}\n\n        </ion-title>\n\n        <ion-buttons end>               \n\n            <button ion-button\n\n                    icon-only\n\n                    clear\n\n                    (click)="editProfile()">\n\n                <ion-icon name="create"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <!-- <ion-card> -->\n\n        <ion-card-header>\n\n            {{"PROFILE_PAGE.DATA_HEADER" | translate}}\n\n        </ion-card-header>      \n\n        <ion-list>         \n\n            <ion-item color="none">\n\n                <ion-icon name="person" item-left></ion-icon>\n\n                {{ "PROFILE_PAGE.NAME" | translate}}\n\n                <h4>\n\n                    {{profile.fullName}}\n\n                </h4>\n\n            </ion-item>\n\n            <ion-item color="none">\n\n                <ion-icon name="shirt" item-left></ion-icon>\n\n                {{ "PROFILE_PAGE.ALIAS" | translate}}\n\n                <h4>\n\n                    {{profile.alias}}\n\n                </h4>\n\n            </ion-item>\n\n            <ion-item color="none">\n\n                <ion-icon name="mail" item-left></ion-icon>\n\n                {{ "PROFILE_PAGE.EMAIL" | translate}}\n\n                <h4>\n\n                    <span *ngIf="profile.email; else elseBlock">\n\n                        {{profile.email}}\n\n                    </span>\n\n                    <ng-template #elseBlock>\n\n                        {{ "NOT_AVAILABLE" | translate}}\n\n                    </ng-template>\n\n                </h4>\n\n            </ion-item>     \n\n            <ion-item color="none">\n\n                <ion-icon name="call" item-left></ion-icon>\n\n                {{ "PROFILE_PAGE.PHONE" | translate}}\n\n                <h4>\n\n                    <span *ngIf="profile.phoneNumber; else elseBlock1">\n\n                        {{profile.phoneNumber}}\n\n                    </span>\n\n                    <ng-template #elseBlock1>\n\n                        {{ "NOT_AVAILABLE" | translate}}\n\n                    </ng-template>\n\n                </h4>\n\n            </ion-item>\n\n            <ion-item color="none">\n\n                <ion-icon name="cash" item-left></ion-icon>\n\n                {{ "PROFILE_PAGE.STATUS" | translate}}\n\n                <h4>\n\n                    <span *ngIf="profile.fixed; else elseBlock2">\n\n                        {{ "PROFILE_PAGE.FIXED" | translate}}\n\n                    </span>\n\n                    <ng-template #elseBlock2>\n\n                        {{ "PROFILE_PAGE.NO_FIXED" | translate}}\n\n                    </ng-template>\n\n                </h4>\n\n            </ion-item>\n\n            <ion-item color="none">\n\n                <ion-icon name="key" item-left></ion-icon>\n\n                {{ "PROFILE_PAGE.USERNAME" | translate}}\n\n                <h4>\n\n                    {{profile.username}}\n\n                </h4>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button full (click)="changePassword()">{{ "PROFILE_PAGE.CHANGE_PASSWORD" | translate}}</button>\n\n      <!-- </ion-card> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\profile\profile.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* ContextService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["i" /* MessagesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["l" /* ProfileService */]])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());

//# sourceMappingURL=profile.component.js.map

/***/ })

});
//# sourceMappingURL=8.js.map