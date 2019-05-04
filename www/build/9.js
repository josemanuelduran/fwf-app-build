webpackJsonp([9],{

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payments_component__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(51);
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
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__providers__["j" /* PaymentsService */]
            ]
        })
    ], PaymentsPageModule);
    return PaymentsPageModule;
}());

//# sourceMappingURL=payments.component.module.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_payments_filter_payments_filter_component__ = __webpack_require__(152);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function PaymentsPageComponent(paymentService, translate, popoverCtrl, context, messages) {
        this.paymentService = paymentService;
        this.translate = translate;
        this.popoverCtrl = popoverCtrl;
        this.context = context;
        this.messages = messages;
        this.payments = [];
        this.selectedFilters = {};
        this.playerLogged = this.context.getPlayerLogged();
    }
    PaymentsPageComponent.prototype.ionViewWillEnter = function () {
        // It's necessary when comes here from back button'
        this.loadListPayments();
    };
    PaymentsPageComponent.prototype.ngOnInit = function () {
        this.selectedFilters.showPaidPayments = false;
        this.selectedFilters.showNoPaidPayments = true;
    };
    PaymentsPageComponent.prototype.loadListPayments = function (refresher) {
        var _this = this;
        this.paymentService
            .fetchPayments(this.playerLogged.id, this.selectedFilters)
            .subscribe(function (data) {
            var payments = data.map(function (payment) {
                var matchDate = payment.matchDate;
                var name = '';
                var monthIndex = 0;
                if (matchDate) {
                    name = matchDate.split('T')[0];
                }
                else {
                    name = _this.translate.instant('MONTHS.' + payment.month) + " - " + payment.year;
                    var month = payment.month.toLowerCase();
                    month = month.charAt(0).toUpperCase() + month.slice(1);
                    monthIndex = __WEBPACK_IMPORTED_MODULE_3_moment__["months"]().indexOf(month);
                }
                return __assign({}, payment, { name: name, monthIndex: monthIndex });
            });
            _this.initializeList(payments);
        }, function (err) {
            _this.endAnimations(refresher);
            _this.messages.showError(err);
        }, function () { return _this.endAnimations(refresher); });
    };
    PaymentsPageComponent.prototype.openFilter = function (clickEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_payments_filter_payments_filter_component__["a" /* PaymentsFilterComponent */], { cssClass: 'popover__filter' });
        popover.onDidDismiss(function (selectedFilters) {
            if (selectedFilters) {
                _this.selectedFilters = selectedFilters;
                _this.loadListPayments();
                _this.filterIconClass = _this.getFilterIconClass(selectedFilters);
            }
        });
        popover.present({
            ev: clickEvent
        });
    };
    PaymentsPageComponent.prototype.endAnimations = function (refresher) {
        if (refresher) {
            refresher.complete();
        }
    };
    PaymentsPageComponent.prototype.initializeList = function (data) {
        this.payments = __WEBPACK_IMPORTED_MODULE_4_lodash__["orderBy"](data, ['year', 'monthIndex', 'matchDate'], ['desc', 'desc', 'desc']);
    };
    PaymentsPageComponent.prototype.getFilterIconClass = function (selectedFilters) {
        var classIcon;
        if (!selectedFilters.showNoPaidPayments || !selectedFilters.showPaidPayments || selectedFilters.year) {
            classIcon = 'filter__in-use';
        }
        return classIcon;
    };
    PaymentsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-payments',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\payments\payments.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <!--Android pushes buttons to the left even if start attribute is present.\n\n            Check demo: http://ionicframework.com/docs/v2/components/#buttons-in-components-->\n\n        <!--If placing the menuToggle in a navbar or toolbar, it should be placed as a child of the <ion-navbar> or <ion-toolbar>, and not in the <ion-buttons> element\n\n        http://ionicframework.com/docs/v2/api/components/menu/MenuToggle/-->\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            {{ "PAYMENTS_PAGE.TITLE" | translate}}\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button\n\n                    icon-only\n\n                    clear\n\n                    [ngClass]="filterIconClass"\n\n                    (click)="openFilter($event)">\n\n                <ion-icon name="funnel"></ion-icon>\n\n            </button>        \n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="loadListPayments($event)">\n\n        <ion-refresher-content\n\n                pullingIcon="arrow-dropdown"\n\n                pullingText="{{\'REFRESHER_COMPONENT.PULL_TO_REFRESH\' | translate}}"\n\n                refreshingSpinner="circles">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <ion-list>\n\n        <ion-item text-wrap *ngFor="let payment of payments">\n\n            <ion-icon item-left *ngIf="payment.paid" name="thumbs-up"></ion-icon>\n\n            <ion-icon item-left *ngIf="!payment.paid" name="thumbs-down"></ion-icon>\n\n            <h3 class="payment-nmme">\n\n                {{payment.name}}\n\n            </h3>\n\n            <h4 *ngIf="payment.paid">\n\n                <span id="paymentAmount">\n\n                    {{payment.amount}} €\n\n                </span>\n\n            </h4>\n\n            <h4 *ngIf="!payment.paid">\n\n                <span id="paymentAmount" class="payment-amount-no-paid">\n\n                    {{payment.amount}} €\n\n                </span>\n\n            </h4>\n\n        </ion-item>\n\n    </ion-list>\n\n    <!--No treatments available to display-->\n\n    <fwf-empty-state *ngIf="filteredPayments?.length === 0">\n\n        {{\'PAYMENTS_PAGE.NO_FOUND\' | translate}}\n\n    </fwf-empty-state>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\payments\payments.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers__["j" /* PaymentsService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* ContextService */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["i" /* MessagesService */]])
    ], PaymentsPageComponent);
    return PaymentsPageComponent;
}());

//# sourceMappingURL=payments.component.js.map

/***/ })

});
//# sourceMappingURL=9.js.map