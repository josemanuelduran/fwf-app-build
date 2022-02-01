webpackJsonp([9],{

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payments_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(47);
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

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_payments_filter_payments_filter_component__ = __webpack_require__(153);
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
                    monthIndex = __WEBPACK_IMPORTED_MODULE_4__models__["c" /* Month */].getIndex(payment.month);
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
        this.payments = __WEBPACK_IMPORTED_MODULE_3_lodash__["orderBy"](data, ['year', 'monthIndex', 'matchDate'], ['desc', 'desc', 'desc']);
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
            selector: 'fwf-page-payments',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\pages\payments\payments.component.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <!--Android pushes buttons to the left even if start attribute is present.\n            Check demo: http://ionicframework.com/docs/v2/components/#buttons-in-components-->\n        <!--If placing the menuToggle in a navbar or toolbar, it should be placed as a child of the <ion-navbar> or <ion-toolbar>, and not in the <ion-buttons> element\n        http://ionicframework.com/docs/v2/api/components/menu/MenuToggle/-->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            {{ "PAYMENTS_PAGE.TITLE" | translate}}\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button\n                    icon-only\n                    clear\n                    [ngClass]="filterIconClass"\n                    (click)="openFilter($event)">\n                <ion-icon name="funnel"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher (ionRefresh)="loadListPayments($event)">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="{{\'REFRESHER_COMPONENT.PULL_TO_REFRESH\' | translate}}"\n                refreshingSpinner="circles">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list>\n        <ion-item text-wrap *ngFor="let payment of payments">\n            <ion-icon item-left *ngIf="payment.paid" name="thumbs-up"></ion-icon>\n            <ion-icon item-left *ngIf="!payment.paid" name="thumbs-down"></ion-icon>\n            <h3 class="payment-nmme">\n                {{payment.name}}\n            </h3>\n            <h4 *ngIf="payment.paid">\n                <span id="paymentAmount">\n                    {{payment.amount}} €\n                </span>\n            </h4>\n            <h4 *ngIf="!payment.paid">\n                <span id="paymentAmount" class="payment-amount-no-paid">\n                    {{payment.amount}} €\n                </span>\n            </h4>\n        </ion-item>\n    </ion-list>\n    <!--No treatments available to display-->\n    <fwf-empty-state *ngIf="payments?.length === 0">\n        {{\'PAYMENTS_PAGE.NO_FOUND\' | translate}}\n    </fwf-empty-state>\n</ion-content>\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\pages\payments\payments.component.html"*/
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