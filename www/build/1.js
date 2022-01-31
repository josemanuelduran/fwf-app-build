webpackJsonp([1],{

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentManagementPageModule", function() { return PaymentManagementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_moment__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_management_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_payment_management_players_payment_management_players_component__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_payment_management_pending_payment_management_pending_component__ = __webpack_require__(623);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PaymentManagementPageModule = /** @class */ (function () {
    function PaymentManagementPageModule() {
    }
    PaymentManagementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__payment_management_component__["a" /* PaymentManagementPageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_payment_management_players_payment_management_players_component__["a" /* PaymentManagementPlayersComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_payment_management_pending_payment_management_pending_component__["a" /* PaymentManagementPendingComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__payment_management_component__["a" /* PaymentManagementPageComponent */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular2_moment__["MomentModule"],
            ],
            providers: [],
            entryComponents: []
        })
    ], PaymentManagementPageModule);
    return PaymentManagementPageModule;
}());

//# sourceMappingURL=payment-management.component.module.js.map

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
var AddPipe = /** @class */ (function () {
    function AddPipe() {
    }
    AddPipe.prototype.transform = function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return moment(value).add(amount, unit);
    };
    AddPipe = __decorate([
        core_1.Pipe({ name: 'amAdd' })
    ], AddPipe);
    return AddPipe;
}());
exports.AddPipe = AddPipe;
//# sourceMappingURL=add.pipe.js.map

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var CalendarPipe = /** @class */ (function () {
    function CalendarPipe(cdRef, ngZone) {
        var _this = this;
        this.cdRef = cdRef;
        this.ngZone = ngZone;
        // using a single static timer for all instances of this pipe for performance reasons
        CalendarPipe_1.initTimer(ngZone);
        CalendarPipe_1.refs++;
        // values such as Today will need to be replaced with Yesterday after midnight,
        // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
        this.midnightSub = CalendarPipe_1.midnight.subscribe(function () {
            _this.ngZone.run(function () { return _this.cdRef.markForCheck(); });
        });
    }
    CalendarPipe_1 = CalendarPipe;
    CalendarPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var formats = null;
        var referenceTime = null;
        for (var i = 0, len = args.length; i < len; i++) {
            if (args[i] !== null) {
                if (typeof args[i] === 'object' && !moment.isMoment(args[i])) {
                    formats = args[i];
                }
                else {
                    referenceTime = momentConstructor(args[i]);
                }
            }
        }
        return momentConstructor(value).calendar(referenceTime, formats);
    };
    CalendarPipe.prototype.ngOnDestroy = function () {
        if (CalendarPipe_1.refs > 0) {
            CalendarPipe_1.refs--;
        }
        if (CalendarPipe_1.refs === 0) {
            CalendarPipe_1.removeTimer();
        }
        this.midnightSub.unsubscribe();
    };
    CalendarPipe.initTimer = function (ngZone) {
        // initialize the timer
        if (!CalendarPipe_1.midnight) {
            CalendarPipe_1.midnight = new core_1.EventEmitter();
            if (typeof window !== 'undefined') {
                var timeToUpdate_1 = CalendarPipe_1._getMillisecondsUntilUpdate();
                CalendarPipe_1.timer = ngZone.runOutsideAngular(function () {
                    return window.setTimeout(function () {
                        // emit the current date
                        CalendarPipe_1.midnight.emit(new Date());
                        // refresh the timer
                        CalendarPipe_1.removeTimer();
                        CalendarPipe_1.initTimer(ngZone);
                    }, timeToUpdate_1);
                });
            }
        }
    };
    CalendarPipe.removeTimer = function () {
        if (CalendarPipe_1.timer) {
            window.clearTimeout(CalendarPipe_1.timer);
            CalendarPipe_1.timer = null;
            CalendarPipe_1.midnight = null;
        }
    };
    CalendarPipe._getMillisecondsUntilUpdate = function () {
        var now = momentConstructor();
        var tomorrow = momentConstructor().startOf('day').add(1, 'days');
        var timeToMidnight = tomorrow.valueOf() - now.valueOf();
        return timeToMidnight + 1000; // 1 second after midnight
    };
    /**
     * @private Internal reference counter, so we can clean up when no instances are in use
     * @type {number}
     */
    CalendarPipe.refs = 0;
    CalendarPipe = CalendarPipe_1 = __decorate([
        core_1.Pipe({ name: 'amCalendar', pure: false }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.NgZone])
    ], CalendarPipe);
    return CalendarPipe;
    var CalendarPipe_1;
}());
exports.CalendarPipe = CalendarPipe;
//# sourceMappingURL=calendar.pipe.js.map

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value)
            return '';
        return momentConstructor(value).format(args[0]);
    };
    DateFormatPipe = __decorate([
        core_1.Pipe({ name: 'amDateFormat' })
    ], DateFormatPipe);
    return DateFormatPipe;
}());
exports.DateFormatPipe = DateFormatPipe;
//# sourceMappingURL=date-format.pipe.js.map

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var DifferencePipe = /** @class */ (function () {
    function DifferencePipe() {
    }
    DifferencePipe.prototype.transform = function (value, otherValue, unit, precision) {
        var date = momentConstructor(value);
        var date2 = (otherValue !== null) ? momentConstructor(otherValue) : momentConstructor();
        return date.diff(date2, unit, precision);
    };
    DifferencePipe = __decorate([
        core_1.Pipe({ name: 'amDifference' })
    ], DifferencePipe);
    return DifferencePipe;
}());
exports.DifferencePipe = DifferencePipe;
//# sourceMappingURL=difference.pipe.js.map

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
var DurationPipe = /** @class */ (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof args === 'undefined' || args.length !== 1) {
            throw new Error('DurationPipe: missing required time unit argument');
        }
        return moment.duration(value, args[0]).humanize();
    };
    DurationPipe = __decorate([
        core_1.Pipe({ name: 'amDuration' })
    ], DurationPipe);
    return DurationPipe;
}());
exports.DurationPipe = DurationPipe;
//# sourceMappingURL=duration.pipe.js.map

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
var FromUnixPipe = /** @class */ (function () {
    function FromUnixPipe() {
    }
    FromUnixPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof value === 'string') {
            value = +value;
        }
        return moment.unix(value);
    };
    FromUnixPipe = __decorate([
        core_1.Pipe({ name: 'amFromUnix' })
    ], FromUnixPipe);
    return FromUnixPipe;
}());
exports.FromUnixPipe = FromUnixPipe;
//# sourceMappingURL=from-unix.pipe.js.map

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var ParsePipe = /** @class */ (function () {
    function ParsePipe() {
    }
    ParsePipe.prototype.transform = function (value, format) {
        return moment(value, format);
    };
    ParsePipe = __decorate([
        core_1.Pipe({ name: 'amParse' })
    ], ParsePipe);
    return ParsePipe;
}());
exports.ParsePipe = ParsePipe;
//# sourceMappingURL=parse.pipe.js.map

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
var SubtractPipe = /** @class */ (function () {
    function SubtractPipe() {
    }
    SubtractPipe.prototype.transform = function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return moment(value).subtract(amount, unit);
    };
    SubtractPipe = __decorate([
        core_1.Pipe({ name: 'amSubtract' })
    ], SubtractPipe);
    return SubtractPipe;
}());
exports.SubtractPipe = SubtractPipe;
//# sourceMappingURL=subtract.pipe.js.map

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var TimeAgoPipe = /** @class */ (function () {
    function TimeAgoPipe(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
    }
    TimeAgoPipe.prototype.transform = function (value, omitSuffix) {
        if (this.hasChanged(value, omitSuffix)) {
            this.lastTime = this.getTime(value);
            this.lastValue = value;
            this.lastOmitSuffix = omitSuffix;
            this.removeTimer();
            this.createTimer();
            this.lastText = momentConstructor(value).from(momentConstructor(), omitSuffix);
        }
        else {
            this.createTimer();
        }
        return this.lastText;
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    TimeAgoPipe.prototype.createTimer = function () {
        var _this = this;
        if (this.currentTimer) {
            return;
        }
        var momentInstance = momentConstructor(this.lastValue);
        var timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
        this.currentTimer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.lastText = momentConstructor(_this.lastValue).from(momentConstructor(), _this.lastOmitSuffix);
                    _this.currentTimer = null;
                    _this.ngZone.run(function () { return _this.cdRef.markForCheck(); });
                }, timeToUpdate);
            }
        });
    };
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.currentTimer) {
            window.clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    };
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (momentInstance) {
        var howOld = Math.abs(momentConstructor().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        }
        else if (howOld < 60) {
            return 30;
        }
        else if (howOld < 180) {
            return 300;
        }
        else {
            return 3600;
        }
    };
    TimeAgoPipe.prototype.hasChanged = function (value, omitSuffix) {
        return this.getTime(value) !== this.lastTime || omitSuffix !== this.lastOmitSuffix;
    };
    TimeAgoPipe.prototype.getTime = function (value) {
        if (moment.isDate(value)) {
            return value.getTime();
        }
        else if (moment.isMoment(value)) {
            return value.valueOf();
        }
        else {
            return momentConstructor(value).valueOf();
        }
    };
    TimeAgoPipe = __decorate([
        core_1.Pipe({ name: 'amTimeAgo', pure: false }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.NgZone])
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());
exports.TimeAgoPipe = TimeAgoPipe;
//# sourceMappingURL=time-ago.pipe.js.map

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var UtcPipe = /** @class */ (function () {
    function UtcPipe() {
    }
    UtcPipe.prototype.transform = function (value) {
        return moment(value).utc();
    };
    UtcPipe = __decorate([
        core_1.Pipe({ name: 'amUtc' })
    ], UtcPipe);
    return UtcPipe;
}());
exports.UtcPipe = UtcPipe;
//# sourceMappingURL=utc.pipe.js.map

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
var FromUtcPipe = /** @class */ (function () {
    function FromUtcPipe() {
    }
    FromUtcPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return moment.utc(value);
    };
    FromUtcPipe = __decorate([
        core_1.Pipe({ name: 'amFromUtc' })
    ], FromUtcPipe);
    return FromUtcPipe;
}());
exports.FromUtcPipe = FromUtcPipe;
//# sourceMappingURL=from-utc.pipe.js.map

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var LocalTimePipe = /** @class */ (function () {
    function LocalTimePipe() {
    }
    LocalTimePipe.prototype.transform = function (value) {
        return moment(value).local();
    };
    LocalTimePipe = __decorate([
        core_1.Pipe({ name: 'amLocal' })
    ], LocalTimePipe);
    return LocalTimePipe;
}());
exports.LocalTimePipe = LocalTimePipe;
//# sourceMappingURL=local.pipe.js.map

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var moment = __webpack_require__(1);
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var LocalePipe = /** @class */ (function () {
    function LocalePipe() {
    }
    LocalePipe.prototype.transform = function (value, locale) {
        return moment(value).locale(locale);
    };
    LocalePipe = __decorate([
        core_1.Pipe({ name: 'amLocale' })
    ], LocalePipe);
    return LocalePipe;
}());
exports.LocalePipe = LocalePipe;
//# sourceMappingURL=locale.pipe.js.map

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var add_pipe_1 = __webpack_require__(591);
exports.AddPipe = add_pipe_1.AddPipe;
var calendar_pipe_1 = __webpack_require__(592);
exports.CalendarPipe = calendar_pipe_1.CalendarPipe;
var date_format_pipe_1 = __webpack_require__(593);
exports.DateFormatPipe = date_format_pipe_1.DateFormatPipe;
var difference_pipe_1 = __webpack_require__(594);
exports.DifferencePipe = difference_pipe_1.DifferencePipe;
var duration_pipe_1 = __webpack_require__(595);
exports.DurationPipe = duration_pipe_1.DurationPipe;
var from_unix_pipe_1 = __webpack_require__(596);
exports.FromUnixPipe = from_unix_pipe_1.FromUnixPipe;
var parse_pipe_1 = __webpack_require__(597);
exports.ParsePipe = parse_pipe_1.ParsePipe;
var moment_module_1 = __webpack_require__(605);
exports.MomentModule = moment_module_1.MomentModule;
var subtract_pipe_1 = __webpack_require__(598);
exports.SubtractPipe = subtract_pipe_1.SubtractPipe;
var time_ago_pipe_1 = __webpack_require__(599);
exports.TimeAgoPipe = time_ago_pipe_1.TimeAgoPipe;
var utc_pipe_1 = __webpack_require__(600);
exports.UtcPipe = utc_pipe_1.UtcPipe;
var from_utc_pipe_1 = __webpack_require__(601);
exports.FromUtcPipe = from_utc_pipe_1.FromUtcPipe;
var local_pipe_1 = __webpack_require__(602);
exports.LocalTimePipe = local_pipe_1.LocalTimePipe;
var locale_pipe_1 = __webpack_require__(603);
exports.LocalePipe = locale_pipe_1.LocalePipe;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var add_pipe_1 = __webpack_require__(591);
var calendar_pipe_1 = __webpack_require__(592);
var date_format_pipe_1 = __webpack_require__(593);
var difference_pipe_1 = __webpack_require__(594);
var duration_pipe_1 = __webpack_require__(595);
var from_unix_pipe_1 = __webpack_require__(596);
var parse_pipe_1 = __webpack_require__(597);
var subtract_pipe_1 = __webpack_require__(598);
var time_ago_pipe_1 = __webpack_require__(599);
var utc_pipe_1 = __webpack_require__(600);
var from_utc_pipe_1 = __webpack_require__(601);
var local_pipe_1 = __webpack_require__(602);
var locale_pipe_1 = __webpack_require__(603);
var ANGULAR_MOMENT_PIPES = [
    add_pipe_1.AddPipe,
    calendar_pipe_1.CalendarPipe,
    date_format_pipe_1.DateFormatPipe,
    difference_pipe_1.DifferencePipe,
    duration_pipe_1.DurationPipe,
    from_unix_pipe_1.FromUnixPipe,
    parse_pipe_1.ParsePipe,
    subtract_pipe_1.SubtractPipe,
    time_ago_pipe_1.TimeAgoPipe,
    utc_pipe_1.UtcPipe,
    from_utc_pipe_1.FromUtcPipe,
    local_pipe_1.LocalTimePipe,
    locale_pipe_1.LocalePipe
];
var MomentModule = /** @class */ (function () {
    function MomentModule() {
    }
    MomentModule = __decorate([
        core_1.NgModule({
            declarations: ANGULAR_MOMENT_PIPES,
            exports: ANGULAR_MOMENT_PIPES
        })
    ], MomentModule);
    return MomentModule;
}());
exports.MomentModule = MomentModule;
//# sourceMappingURL=moment.module.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_match_add_match_component__ = __webpack_require__(410);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_match_add_match_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overflow_menu_overflow_menu_component__ = __webpack_require__(411);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__overflow_menu_overflow_menu_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teams_maker_teams_maker_component__ = __webpack_require__(412);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__teams_maker_teams_maker_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payments_management_payment_management_player_payment_management_player_component__ = __webpack_require__(413);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__payments_management_payment_management_player_payment_management_player_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payments_filter_payments_filter_component__ = __webpack_require__(152);
/* unused harmony namespace reexport */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentManagementPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentManagementPageComponent = /** @class */ (function () {
    function PaymentManagementPageComponent(context) {
        this.context = context;
        this.hasPermission = false;
        this.selectedOption = 'players';
    }
    PaymentManagementPageComponent.prototype.ngOnInit = function () {
        this.hasPermission = this.context.userLoggedIsAdmin() || this.context.userLoggedIsTreasurer();
    };
    PaymentManagementPageComponent.prototype.onSelectionChanged = function (selectedOption) {
        this.selectedOption = selectedOption;
    };
    PaymentManagementPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-payment-management',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\pages\payment-management\payment-management.component.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <!--Android pushes buttons to the left even if start attribute is present.\n            Check demo: http://ionicframework.com/docs/v2/components/#buttons-in-components-->\n        <!--If placing the menuToggle in a navbar or toolbar, it should be placed as a child of the <ion-navbar> or <ion-toolbar>, and not in the <ion-buttons> element\n        http://ionicframework.com/docs/v2/api/components/menu/MenuToggle/-->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            {{ \'PAYMENT_MANAGEMENT_PAGE.TITLE\' | translate}}\n        </ion-title>\n    </ion-navbar>\n    <ion-toolbar no-padding class="filter-container" color="primary">\n        <ion-segment name="selectedOption" [ngModel]="selectedOption" (ionChange)="onSelectionChanged($event.value)" color="primary">\n            <ion-segment-button value="players">\n                {{"PAYMENT_MANAGEMENT_PAGE.PLAYERS_TAB" | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="payments">\n                {{"PAYMENT_MANAGEMENT_PAGE.PAYMENTS_TAB" | translate}}\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ng-container [ngSwitch]="selectedOption">\n        <div *ngSwitchCase="\'players\'">\n            <fwf-payment-management-players></fwf-payment-management-players>\n        </div>\n        <div *ngSwitchCase="\'payments\'" class="card-section">\n            <fwf-payment-management-pending></fwf-payment-management-pending>\n        </div>\n    </ng-container>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\pages\payment-management\payment-management.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers__["d" /* ContextService */]])
    ], PaymentManagementPageComponent);
    return PaymentManagementPageComponent;
}());

//# sourceMappingURL=payment-management.component.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentManagementPlayersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(606);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentManagementPlayersComponent = /** @class */ (function () {
    function PaymentManagementPlayersComponent(navCtrl, 
        // private translate: TranslateService,
        playersService, messages) {
        this.navCtrl = navCtrl;
        this.playersService = playersService;
        this.messages = messages;
    }
    PaymentManagementPlayersComponent.prototype.ngOnInit = function () {
        this.loadListPlayers();
    };
    PaymentManagementPlayersComponent.prototype.loadListPlayers = function () {
        var _this = this;
        this.playersService.fetchPlayers()
            .subscribe(function (players) {
            _this.fixedPlayers = players.filter(function (player) { return player.fixed; });
            _this.noFixedPlayers = players.filter(function (player) { return !player.fixed; });
        }, function (error) { return _this.messages.showError(error); });
    };
    PaymentManagementPlayersComponent.prototype.playerSelected = function (playerSelected) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__components__["c" /* PaymentManagementPlayerComponent */], { player: playerSelected });
    };
    PaymentManagementPlayersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-payment-management-players',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\pages\payment-management\components\payment-management-players\payment-management-players.component.html"*/'<ion-list list-grouped>\n    <ion-list-header>\n        {{\'PAYMENT_MANAGEMENT_PAGE.FIXED_HEADER\' | translate}}\n    </ion-list-header>\n    <ion-item\n            detail-push\n            *ngFor="let player of fixedPlayers"\n            (click)="playerSelected(player)"\n            text-wrap>\n        <h3 class="payment-nmme">\n            {{player.alias}}\n        </h3>\n    </ion-item>\n</ion-list>\n<ion-list list-grouped>\n    <ion-list-header>\n        {{\'PAYMENT_MANAGEMENT_PAGE.NO_FIXED_HEADER\' | translate}}\n    </ion-list-header>\n    <ion-item\n            detail-push\n            *ngFor="let player of noFixedPlayers"\n            (click)="playerSelected(player)"\n            text-wrap>\n        <h3 class="payment-name">\n            {{player.alias}}\n        </h3>\n    </ion-item>\n</ion-list>\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\pages\payment-management\components\payment-management-players\payment-management-players.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers__["k" /* PlayersService */],
            __WEBPACK_IMPORTED_MODULE_1__providers__["i" /* MessagesService */]])
    ], PaymentManagementPlayersComponent);
    return PaymentManagementPlayersComponent;
}());

//# sourceMappingURL=payment-management-players.component.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentManagementPendingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(51);
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






var PaymentManagementPendingComponent = /** @class */ (function () {
    function PaymentManagementPendingComponent(playersService, paymentService, translate, messages, alertCtrl) {
        this.playersService = playersService;
        this.paymentService = paymentService;
        this.translate = translate;
        this.messages = messages;
        this.alertCtrl = alertCtrl;
    }
    PaymentManagementPendingComponent.prototype.ngOnInit = function () {
        this.loadListPlayers();
    };
    PaymentManagementPendingComponent.prototype.loadListPlayers = function () {
        var _this = this;
        this.playersService.fetchPlayers()
            .subscribe(function (players) {
            _this.playersList = players;
            _this.loadListPayments();
        }, function (error) { return _this.messages.showError(error); });
    };
    PaymentManagementPendingComponent.prototype.loadListPayments = function () {
        var _this = this;
        this.paymentService
            .fetchPendingPayments()
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
            _this.initializeList(__WEBPACK_IMPORTED_MODULE_3_lodash__["orderBy"](payments, ['year', 'monthIndex', 'matchDate'], ['desc', 'desc', 'desc']));
        }, function (err) {
            _this.messages.showError(err);
        });
    };
    PaymentManagementPendingComponent.prototype.paid = function (payment, slidingItem) {
        var _this = this;
        payment.paid = true;
        payment.paymentDate = new Date();
        this.paymentService.updatePayment(payment)
            .subscribe(function (data) { return _this.loadListPayments(); }, function (error) { return _this.messages.showError(error); });
        slidingItem.close();
    };
    PaymentManagementPendingComponent.prototype.deletePayment = function (payment, slidingItem) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translate.instant('PAYMENT_MANAGEMENT_PAGE.DELETE_PAYMENT'),
            subTitle: this.translate.instant('PAYMENT_MANAGEMENT_PAGE.DELETE_SURE'),
            buttons: [
                {
                    text: this.translate.instant('CANCEL_BUTTON'),
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    role: 'ok',
                    handler: function (response) {
                        _this.paymentService.deletePayment(payment.id)
                            .subscribe(function (data) {
                            _this.loadListPayments();
                            _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                        }, function (error) { return _this.messages.showError(error); });
                    }
                },
            ]
        });
        alert.present();
        slidingItem.close();
    };
    PaymentManagementPendingComponent.prototype.initializeList = function (payments) {
        var _this = this;
        var playersPendingPayments = payments.map(function (payment) {
            var player = _this.playersList.find(function (el) { return el.id === payment.playerId; });
            return {
                player: player,
                payment: payment,
            };
        });
        this.fixedPlayersPayments = playersPendingPayments.filter(function (el) { return el.player.fixed; });
        this.noFixedPlayersPayments = playersPendingPayments.filter(function (el) { return !el.player.fixed; });
    };
    PaymentManagementPendingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-payment-management-pending',template:/*ion-inline-start:"C:\FWF\football-with-friends-client\src\app\pages\payment-management\components\payment-management-pending\payment-management-pending.component.html"*/'<ion-list list-grouped>\n    <ion-list-header>\n        {{\'PAYMENT_MANAGEMENT_PAGE.FIXED_HEADER\' | translate}}\n    </ion-list-header>\n    <ion-item-sliding #slidingItem *ngFor="let playerPayment of fixedPlayersPayments">\n        <ion-item text-wrap>\n            <ion-icon item-left name="thumbs-down"></ion-icon>\n            <h2>\n                {{playerPayment.player.alias}}\n            </h2>\n            <h3>\n                {{playerPayment.payment.name}}\n            </h3>\n            <h4>\n                <span id="paymentAmount" class="payment-amount-no-paid">\n                    {{playerPayment.payment.amount}} €\n                </span>\n            </h4>\n        </ion-item>\n        <ion-item-options side="left">\n            <button ion-button color="danger"\n                    (click)="deletePayment(playerPayment.payment, slidingItem)">\n                <ion-icon name="trash"></ion-icon>\n                {{\'DELETE_BUTTON\' | translate}}\n            </button>\n        </ion-item-options>\n        <ion-item-options side="right" (ionSwipe)="paid(playerPayment.payment, slidingItem)">\n            <button ion-button color="primary"\n                    (click)="paid(playerPayment.payment, slidingItem)">\n                <ion-icon name="cash"></ion-icon>\n                {{\'PAID_BUTTON\' | translate}}\n            </button>\n        </ion-item-options>\n    </ion-item-sliding>\n</ion-list>\n<ion-list list-grouped>\n    <ion-list-header>\n        {{\'PAYMENT_MANAGEMENT_PAGE.NO_FIXED_HEADER\' | translate}}\n    </ion-list-header>\n    <ion-item-sliding #slidingItem *ngFor="let playerPayment of noFixedPlayersPayments">\n        <ion-item text-wrap>\n            <ion-icon item-left name="thumbs-down"></ion-icon>\n            <h2>\n                {{playerPayment.player.alias}}\n            </h2>\n            <h3>\n                {{playerPayment.payment.name}}\n            </h3>\n            <h4>\n                <span id="paymentAmount" class="payment-amount-no-paid">\n                    {{playerPayment.payment.amount}} €\n                </span>\n            </h4>\n        </ion-item>\n        <ion-item-options side="left">\n            <button ion-button color="danger"\n                    (click)="deletePayment(playerPayment.payment, slidingItem)">\n                <ion-icon name="trash"></ion-icon>\n                {{\'DELETE_BUTTON\' | translate}}\n            </button>\n        </ion-item-options>\n        <ion-item-options side="right" (ionSwipe)="paid(playerPayment.payment, slidingItem)">\n            <button ion-button color="primary"\n                    (click)="paid(playerPayment.payment, slidingItem)">\n                <ion-icon name="cash"></ion-icon>\n                {{\'PAID_BUTTON\' | translate}}\n            </button>\n        </ion-item-options>\n    </ion-item-sliding>\n</ion-list>\n'/*ion-inline-end:"C:\FWF\football-with-friends-client\src\app\pages\payment-management\components\payment-management-pending\payment-management-pending.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers__["k" /* PlayersService */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["j" /* PaymentsService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["i" /* MessagesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PaymentManagementPendingComponent);
    return PaymentManagementPendingComponent;
}());

//# sourceMappingURL=payment-management-pending.component.js.map

/***/ })

});
//# sourceMappingURL=1.js.map