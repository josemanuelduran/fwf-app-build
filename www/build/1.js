webpackJsonp([1],{

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPageModule", function() { return MatchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_moment__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_component__ = __webpack_require__(606);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MatchPageModule = /** @class */ (function () {
    function MatchPageModule() {
    }
    MatchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__match_component__["a" /* MatchPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__match_component__["a" /* MatchPageComponent */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular2_moment__["MomentModule"],
            ],
        })
    ], MatchPageModule);
    return MatchPageModule;
}());

//# sourceMappingURL=match.component.module.js.map

/***/ }),

/***/ 583:
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

/***/ 584:
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

/***/ 585:
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

/***/ 586:
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

/***/ 587:
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

/***/ 588:
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

/***/ 589:
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

/***/ 590:
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

/***/ 592:
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

/***/ 594:
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

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var add_pipe_1 = __webpack_require__(583);
exports.AddPipe = add_pipe_1.AddPipe;
var calendar_pipe_1 = __webpack_require__(584);
exports.CalendarPipe = calendar_pipe_1.CalendarPipe;
var date_format_pipe_1 = __webpack_require__(585);
exports.DateFormatPipe = date_format_pipe_1.DateFormatPipe;
var difference_pipe_1 = __webpack_require__(586);
exports.DifferencePipe = difference_pipe_1.DifferencePipe;
var duration_pipe_1 = __webpack_require__(587);
exports.DurationPipe = duration_pipe_1.DurationPipe;
var from_unix_pipe_1 = __webpack_require__(588);
exports.FromUnixPipe = from_unix_pipe_1.FromUnixPipe;
var parse_pipe_1 = __webpack_require__(589);
exports.ParsePipe = parse_pipe_1.ParsePipe;
var moment_module_1 = __webpack_require__(597);
exports.MomentModule = moment_module_1.MomentModule;
var subtract_pipe_1 = __webpack_require__(590);
exports.SubtractPipe = subtract_pipe_1.SubtractPipe;
var time_ago_pipe_1 = __webpack_require__(591);
exports.TimeAgoPipe = time_ago_pipe_1.TimeAgoPipe;
var utc_pipe_1 = __webpack_require__(592);
exports.UtcPipe = utc_pipe_1.UtcPipe;
var from_utc_pipe_1 = __webpack_require__(593);
exports.FromUtcPipe = from_utc_pipe_1.FromUtcPipe;
var local_pipe_1 = __webpack_require__(594);
exports.LocalTimePipe = local_pipe_1.LocalTimePipe;
var locale_pipe_1 = __webpack_require__(595);
exports.LocalePipe = locale_pipe_1.LocalePipe;
//# sourceMappingURL=index.js.map

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
var add_pipe_1 = __webpack_require__(583);
var calendar_pipe_1 = __webpack_require__(584);
var date_format_pipe_1 = __webpack_require__(585);
var difference_pipe_1 = __webpack_require__(586);
var duration_pipe_1 = __webpack_require__(587);
var from_unix_pipe_1 = __webpack_require__(588);
var parse_pipe_1 = __webpack_require__(589);
var subtract_pipe_1 = __webpack_require__(590);
var time_ago_pipe_1 = __webpack_require__(591);
var utc_pipe_1 = __webpack_require__(592);
var from_utc_pipe_1 = __webpack_require__(593);
var local_pipe_1 = __webpack_require__(594);
var locale_pipe_1 = __webpack_require__(595);
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

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_match_add_match_component__ = __webpack_require__(405);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_match_add_match_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overflow_menu_overflow_menu_component__ = __webpack_require__(406);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__overflow_menu_overflow_menu_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teams_maker_teams_maker_component__ = __webpack_require__(407);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__teams_maker_teams_maker_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_scoreboard_scoreboard_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_util__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AVAILABLE_OPTIONS = [
    {
        action: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EDIT_TEAMS,
        roles: [__WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].ADMIN, __WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].COACH],
        token: 'MATCH_PAGE.ACTION.EDIT_TEAMS',
        icon: 'build'
    },
    {
        action: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EDIT_MATCH,
        roles: [__WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].ADMIN],
        token: 'MATCH_PAGE.ACTION.EDIT_MATCH',
        icon: 'create'
    },
    {
        action: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].DELETE_MATCH,
        roles: [__WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].ADMIN],
        token: 'MATCH_PAGE.ACTION.DELETE_MATCH',
        icon: 'trash'
    },
    {
        action: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].SET_SCOREBOARD,
        roles: [__WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].ADMIN],
        token: 'MATCH_PAGE.ACTION.SCOREBOARD',
        icon: 'football'
    },
    {
        action: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].JOIN_CALL_UP,
        roles: [__WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].PLAYER],
        token: 'MATCH_PAGE.ACTION.JOIN_CALL_UP',
        icon: 'thumbs-up'
    },
    {
        action: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].UNJOIN_CALL_UP,
        roles: [__WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].PLAYER],
        token: 'MATCH_PAGE.ACTION.UNJOIN_CALL_UP',
        icon: 'thumbs-down'
    },
    {
        action: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].DISCARD_ME_CALL_UP,
        roles: [__WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].PLAYER],
        token: 'MATCH_PAGE.ACTION.DISCARD_ME_CALL_UP',
        icon: 'remove-circle'
    },
    {
        action: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EXIT_FROM_DISCARDS,
        roles: [__WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].PLAYER],
        token: 'MATCH_PAGE.ACTION.EXIT_FROM_DISCARDS',
        icon: 'checkmark-circle'
    },
    {
        action: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EDIT_CALL_UP,
        roles: [__WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].ADMIN],
        token: 'MATCH_PAGE.ACTION.EDIT_CALL_UP',
        icon: 'people'
    },
    {
        action: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EDIT_DISCARDS,
        roles: [__WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].ADMIN],
        token: 'MATCH_PAGE.ACTION.EDIT_DISCARDS',
        icon: 'close-circle'
    },
    {
        action: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].ADD_EXTRA_PLAYER,
        roles: [__WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].ADMIN],
        token: 'MATCH_PAGE.ACTION.ADD_EXTRA_PLAYER',
        icon: 'add'
    },
    {
        action: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].REMOVE_EXTRA_PLAYER,
        roles: [__WEBPACK_IMPORTED_MODULE_3__models__["c" /* Role */].ADMIN],
        token: 'MATCH_PAGE.ACTION.REMOVE_EXTRA_PLAYER',
        icon: 'remove'
    }
];
var MatchPageComponent = /** @class */ (function () {
    function MatchPageComponent(navCtrl, navParams, popoverCtrl, modalCtrl, alertCtrl, translate, matchesService, playerService, context, messages) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.matchesService = matchesService;
        this.playerService = playerService;
        this.context = context;
        this.messages = messages;
    }
    MatchPageComponent.prototype.ngOnInit = function () {
        this.match = this.navParams.get('matchSelected');
        this.user = this.navParams.get('user');
        this.player = this.navParams.get('player');
        this.setJoinedPlayer();
        this.setDiscardedPlayer();
        this.setMenuDisable();
        this.setMatchPlayed();
    };
    MatchPageComponent.prototype.showOptions = function (clickEvent) {
        var _this = this;
        var actionsPopover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components__["b" /* OverflowMenuComponent */], { options: this.getOptionsAllowed() });
        actionsPopover.onDidDismiss(function (data) {
            if (data) {
                switch (data.action) {
                    case __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EDIT_TEAMS:
                        _this.editTeams();
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EDIT_MATCH:
                        _this.editMatch();
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].DELETE_MATCH:
                        _this.deleteMatch();
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].JOIN_CALL_UP:
                        _this.joinCallUp();
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].UNJOIN_CALL_UP:
                        _this.unjoinCallUp();
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].DISCARD_ME_CALL_UP:
                        _this.discardMeCallUp();
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EXIT_FROM_DISCARDS:
                        _this.exitFromDiscards();
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].SET_SCOREBOARD:
                        _this.setScoreBoard();
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EDIT_CALL_UP:
                        _this.editCallUp();
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EDIT_DISCARDS:
                        _this.editDiscards();
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].ADD_EXTRA_PLAYER:
                        _this.addExtraPlayer();
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].REMOVE_EXTRA_PLAYER:
                        _this.removeExtraPlayer();
                        break;
                }
            }
        });
        actionsPopover.present({
            ev: clickEvent
        });
    };
    MatchPageComponent.prototype.goToCallUp = function () {
        this.navCtrl.push('CallUpPage', { match: this.match, reserves: false });
    };
    MatchPageComponent.prototype.goToTeams = function () {
        this.navCtrl.push('TeamsPage', { match: this.match });
    };
    MatchPageComponent.prototype.goToDiscards = function () {
        this.navCtrl.push('DiscardsPage', { match: this.match });
    };
    MatchPageComponent.prototype.goToReserves = function () {
        this.navCtrl.push('CallUpPage', { match: this.match, reserves: true });
    };
    MatchPageComponent.prototype.goToValuations = function () {
        this.navCtrl.push('ValuationsPage', { match: this.match, player: this.player });
    };
    MatchPageComponent.prototype.getOptionsAllowed = function () {
        var _this = this;
        var result = AVAILABLE_OPTIONS
            .filter(function (action) {
            var arrayResult = action.roles.filter(function (rol) { return _this.user.roles.indexOf(rol) > -1; });
            return arrayResult.length > 0;
        });
        if (this.match.openCallUp) {
            if (this.joinedPlayer) {
                var actions = [__WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].JOIN_CALL_UP, __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].DISCARD_ME_CALL_UP, __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EXIT_FROM_DISCARDS];
                result = this.removeOptions(result, actions);
            }
            else {
                var actions = [__WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].UNJOIN_CALL_UP];
                if (this.discardedPlayer) {
                    actions.push(__WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].JOIN_CALL_UP, __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].DISCARD_ME_CALL_UP);
                }
                else {
                    actions.push(__WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EXIT_FROM_DISCARDS);
                }
                result = this.removeOptions(result, actions);
            }
        }
        else {
            var actions = [__WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].JOIN_CALL_UP, __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].UNJOIN_CALL_UP, __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].DISCARD_ME_CALL_UP, __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Action */].EXIT_FROM_DISCARDS];
            result = this.removeOptions(result, actions);
        }
        return result;
    };
    MatchPageComponent.prototype.removeOptions = function (options, actions) {
        actions.forEach(function (action) { return options.splice(options.findIndex(function (option) { return option.action === action; }), 1); });
        return options;
    };
    MatchPageComponent.prototype.editTeams = function () {
        var _this = this;
        if (this.match.callUp.length < this.match.numPlayers) {
            this.messages.showInfo('MATCH_PAGE.CALL_UP_INCOMPLETED');
        }
        else {
            var dialog = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components__["c" /* TeamsMakerComponent */], { match: this.match, player: this.player }, { enableBackdropDismiss: false });
            dialog.onDidDismiss(function (result) {
                if (result.actionOk) {
                    _this.matchesService.updateTeams(_this.match.id, result.teams)
                        .subscribe(function (data) {
                        _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                        _this.reloadMatch();
                    }, function (error) { return _this.messages.showError(error); });
                }
            });
            dialog.present();
        }
    };
    MatchPageComponent.prototype.deleteMatch = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translate.instant('MATCHES_PAGE.DELETE_MATCH'),
            subTitle: this.translate.instant('MATCHES_PAGE.DELETE_SURE'),
            buttons: [
                {
                    text: this.translate.instant('CANCEL_BUTTON'),
                    role: 'cancel',
                },
                {
                    text: 'OK',
                    role: 'ok',
                    handler: function (response) {
                        _this.matchesService.deleteMatch(_this.match.id)
                            .subscribe(function (data) {
                            _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                            _this.navCtrl.pop();
                        }, function (error) { return _this.messages.showError(error); });
                    }
                },
            ]
        });
        alert.present();
    };
    MatchPageComponent.prototype.editMatch = function () {
        var _this = this;
        var dialog = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components__["a" /* AddMatchComponent */], { match: this.match }, { enableBackdropDismiss: false });
        dialog.onDidDismiss(function (actionOk) {
            if (actionOk) {
                _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                _this.reloadMatch();
            }
        });
        dialog.present();
    };
    MatchPageComponent.prototype.joinCallUp = function () {
        var _this = this;
        this.matchesService.joinPlayerCallUp(this.match.id, this.player)
            .subscribe(function (data) {
            _this.joinedPlayer = true;
            _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
            _this.reloadMatch();
        }, function (error) { return _this.messages.showError(error); });
    };
    MatchPageComponent.prototype.unjoinCallUp = function () {
        var _this = this;
        this.matchesService.unjoinPlayerCallUp(this.match.id, this.player.id)
            .subscribe(function (data) {
            _this.joinedPlayer = false;
            _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
            _this.reloadMatch();
        }, function (error) { return _this.messages.showError(error); });
    };
    MatchPageComponent.prototype.discardMeCallUp = function () {
        var _this = this;
        var playerDiscard = {
            player: {
                id: this.player.id,
                fixed: this.player.fixed,
                name: this.player.alias
            },
            dateDiscard: new Date()
        };
        this.matchesService.discardPlayerCallUp(this.match.id, playerDiscard)
            .subscribe(function (data) {
            _this.discardedPlayer = true;
            _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
            _this.reloadMatch();
        }, function (error) { return _this.messages.showError(error); });
    };
    MatchPageComponent.prototype.exitFromDiscards = function () {
        var _this = this;
        this.matchesService.exitFromDiscards(this.match.id, this.player.id)
            .subscribe(function (data) {
            _this.discardedPlayer = false;
            _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
            _this.reloadMatch();
        }, function (error) { return _this.messages.showError(error); });
    };
    MatchPageComponent.prototype.setScoreBoard = function () {
        var _this = this;
        var actionsPopover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_scoreboard_scoreboard_component__["a" /* ScoreboardComponent */], {
            scoreWhite: this.match.team1.goals || 0,
            scoreBlack: this.match.team2.goals || 0
        });
        actionsPopover.onDidDismiss(function (data) {
            if (data && data.actionOk) {
                _this.match.team1.goals = data.scoreWhite;
                _this.match.team2.goals = data.scoreBlack;
                _this.matchesService.updateMatch(_this.match)
                    .subscribe(function (ok) {
                    _this.reloadMatch();
                    _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                }, function (error) { return _this.messages.showError(error); });
            }
        });
        actionsPopover.present();
    };
    MatchPageComponent.prototype.setJoinedPlayer = function () {
        var _this = this;
        var callUp = this.match.callUp;
        if (callUp) {
            this.joinedPlayer = callUp.findIndex(function (el) { return el.player.id === _this.player.id; }) >= 0;
        }
        else {
            this.joinedPlayer = false;
        }
    };
    MatchPageComponent.prototype.setDiscardedPlayer = function () {
        var _this = this;
        var discards = this.match.discards;
        if (discards) {
            this.discardedPlayer = discards.findIndex(function (el) { return el.player.id === _this.player.id; }) >= 0;
        }
        else {
            this.discardedPlayer = false;
        }
    };
    MatchPageComponent.prototype.setMenuDisable = function () {
        this.menuDisable = !(this.match.openCallUp || this.context.userLoggedIsAdmin());
    };
    MatchPageComponent.prototype.setMatchPlayed = function () {
        this.matchPlayed =
            this.match.team1 && !Object(__WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_util__["p" /* isUndefined */])(this.match.team1.goals)
                && this.match.team2 && !Object(__WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_util__["p" /* isUndefined */])(this.match.team2.goals);
    };
    MatchPageComponent.prototype.editCallUp = function () {
        var _this = this;
        this.playerService.fetchPlayers()
            .subscribe(function (players) { return _this.showListPlayersCallUp(players); }, function (error) { return _this.messages.showError(error); });
    };
    MatchPageComponent.prototype.editDiscards = function () {
        var _this = this;
        this.playerService.fetchPlayers()
            .subscribe(function (players) { return _this.showListPlayersDiscards(players); }, function (error) { return _this.messages.showError(error); });
    };
    MatchPageComponent.prototype.addExtraPlayer = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: this.translate.instant('MATCH_PAGE.ACTION.ADD_EXTRA_PLAYER'),
            inputs: [
                {
                    name: 'name',
                    placeholder: this.translate.instant('MATCH_PAGE.NAME_NEW_PLAYER')
                },
            ],
            buttons: [
                {
                    text: this.translate.instant('CANCEL_BUTTON')
                },
                {
                    text: this.translate.instant('OK_BUTTON'),
                    handler: function (data) {
                        var extraPlayer = {
                            id: "extraPlayer" + (_this.getNumExtraPlayers() + 1),
                            alias: data.name,
                            fixed: false
                        };
                        _this.matchesService.joinPlayerCallUp(_this.match.id, extraPlayer)
                            .subscribe(function (ok) {
                            _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                            _this.reloadMatch();
                        }, function (error) { return _this.messages.showError(error); });
                    }
                }
            ]
        });
        prompt.present();
    };
    MatchPageComponent.prototype.removeExtraPlayer = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: this.translate.instant('MATCH_PAGE.ACTION.ADD_EXTRA_PLAYER'),
            inputs: [
                {
                    name: 'name',
                    placeholder: this.translate.instant('MATCH_PAGE.NAME_NEW_PLAYER')
                },
            ],
            buttons: [
                {
                    text: this.translate.instant('CANCEL_BUTTON')
                },
                {
                    text: this.translate.instant('OK_BUTTON'),
                    handler: function (data) {
                        var extraPlayer = _this.match.callUp.find(function (el) { return el.player.id.startsWith('extraPlayer') && el.player.name === data.name; });
                        _this.matchesService.unjoinPlayerCallUp(_this.match.id, extraPlayer.player.id)
                            .subscribe(function (ok) {
                            _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                            _this.reloadMatch();
                        }, function (error) { return _this.messages.showError(error); });
                    }
                }
            ]
        });
        prompt.present();
    };
    MatchPageComponent.prototype.getNumExtraPlayers = function () {
        return this.match.callUp ?
            this.match.callUp.filter(function (el) { return el.player.id.startsWith('extraPlayer'); }).length
            : 0;
    };
    MatchPageComponent.prototype.showListPlayersCallUp = function (players) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle(this.translate.instant('MATCH_PAGE.ADD_PLAYER'));
        players.forEach(function (player) {
            var checked = _this.match.callUp && _this.match.callUp.findIndex(function (el) { return el.player.id === player.id; }) >= 0;
            alert.addInput({
                type: 'checkbox',
                label: player.alias,
                value: player.id,
                checked: checked
            });
        });
        alert.addButton(this.translate.instant('CANCEL_BUTTON'));
        alert.addButton({
            text: this.translate.instant('OK_BUTTON'),
            handler: function (selecteds) {
                _this.includePlayersCallUp(players, selecteds);
                _this.excludePlayersCallUp(players, selecteds);
            }
        });
        alert.present();
    };
    MatchPageComponent.prototype.showListPlayersDiscards = function (players) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle(this.translate.instant('MATCH_PAGE.DISCARD_PLAYER'));
        players.forEach(function (player) {
            var checked = _this.match.discards && _this.match.discards.findIndex(function (el) { return el.player.id === player.id; }) >= 0;
            alert.addInput({
                type: 'checkbox',
                label: player.alias,
                value: player.id,
                checked: checked
            });
        });
        alert.addButton(this.translate.instant('CANCEL_BUTTON'));
        alert.addButton({
            text: this.translate.instant('OK_BUTTON'),
            handler: function (selecteds) {
                _this.includePlayersDiscards(players, selecteds);
                _this.excludePlayersDiscards(players, selecteds);
            }
        });
        alert.present();
    };
    MatchPageComponent.prototype.includePlayersCallUp = function (players, playersId) {
        var _this = this;
        var playersSelected = players.filter(function (player) {
            var isPlayerSelected = playersId.findIndex(function (el) { return el === player.id; }) >= 0;
            var isPlayerCallUp = _this.match.callUp && _this.match.callUp.findIndex(function (el) { return el.player.id === player.id; }) >= 0;
            return !isPlayerCallUp && isPlayerSelected;
        });
        playersSelected.forEach(function (player, index) {
            _this.matchesService.joinPlayerCallUp(_this.match.id, player)
                .subscribe(function (data) {
                if (index === playersSelected.length - 1) {
                    _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                    _this.reloadMatch();
                }
            }, function (error) { return _this.messages.showError(error); });
        });
    };
    MatchPageComponent.prototype.excludePlayersCallUp = function (players, playersId) {
        var _this = this;
        var playersNoSelected = players.filter(function (player) {
            var isPlayerNoSelected = playersId.findIndex(function (el) { return el === player.id; }) < 0;
            var isPlayerCallUp = _this.match.callUp && _this.match.callUp.findIndex(function (el) { return el.player.id === player.id; }) >= 0;
            return isPlayerCallUp && isPlayerNoSelected;
        });
        playersNoSelected.forEach(function (player, index) {
            _this.matchesService.unjoinPlayerCallUp(_this.match.id, player.id)
                .subscribe(function (data) {
                if (index === playersNoSelected.length - 1) {
                    _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                    _this.reloadMatch();
                }
            }, function (error) { return _this.messages.showError(error); });
        });
    };
    MatchPageComponent.prototype.includePlayersDiscards = function (players, playersId) {
        var _this = this;
        var playersSelected = players.filter(function (player) {
            var isPlayerSelected = playersId.findIndex(function (el) { return el === player.id; }) >= 0;
            var isPlayerDiscarded = _this.match.discards && _this.match.discards.findIndex(function (el) { return el.player.id === player.id; }) >= 0;
            return !isPlayerDiscarded && isPlayerSelected;
        });
        playersSelected.forEach(function (player, index) {
            var playerDiscarded = {
                player: {
                    id: player.id,
                    fixed: player.fixed,
                    name: player.alias
                },
                dateDiscard: new Date()
            };
            _this.matchesService.discardPlayerCallUp(_this.match.id, playerDiscarded)
                .subscribe(function (data) {
                if (index === playersSelected.length - 1) {
                    _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                    _this.reloadMatch();
                }
            }, function (error) { return _this.messages.showError(error); });
        });
    };
    MatchPageComponent.prototype.excludePlayersDiscards = function (players, playersId) {
        var _this = this;
        var playersNoSelected = players.filter(function (player) {
            var isPlayerNoSelected = playersId.findIndex(function (el) { return el === player.id; }) < 0;
            var isPlayerDiscarded = _this.match.discards && _this.match.discards.findIndex(function (el) { return el.player.id === player.id; }) >= 0;
            return isPlayerDiscarded && isPlayerNoSelected;
        });
        playersNoSelected.forEach(function (player, index) {
            _this.matchesService.exitFromDiscards(_this.match.id, player.id)
                .subscribe(function (data) {
                if (index === playersNoSelected.length - 1) {
                    _this.messages.showSuccess('ACTION_OK', 'CONFIRMATION');
                    _this.reloadMatch();
                }
            }, function (error) { return _this.messages.showError(error); });
        });
    };
    MatchPageComponent.prototype.reloadMatch = function () {
        var _this = this;
        this.matchesService.getMatch(this.match.id)
            .subscribe(function (match) { return _this.match = match; }, function (error) { return _this.messages.showError(error); });
    };
    MatchPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-match',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\match\match.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">        \n\n        <ion-title>\n\n            {{match.name }}\n\n        </ion-title>\n\n        <ion-buttons end>               \n\n            <button ion-button\n\n                    icon-only\n\n                    clear\n\n                    [disabled]="menuDisable"\n\n                    (click)="showOptions($event)">\n\n                <ion-icon name="more"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            {{"MATCH_PAGE.DATA_HEADER" | translate}}\n\n        </ion-card-header>      \n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-icon name="calendar" item-start></ion-icon>\n\n                {{match.date | amDateFormat: \'DD-MM-YYYY\'}}\n\n            </ion-item>                    \n\n            <ion-item color="none" on-click="goToCallUp()">\n\n                <ion-icon name="people" item-left></ion-icon>\n\n                {{ "MATCH_PAGE.CALL_UP" | translate}}  ({{match.callUp?.length || 0}}/{{match.numPlayers}})\n\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item color="none" on-click="goToTeams()">\n\n                <ion-icon name="shirt" item-left></ion-icon>\n\n                {{ "MATCH_PAGE.TEAMS" | translate}}\n\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item color="none">\n\n                <ion-icon name="football" item-left></ion-icon>\n\n                {{ "MATCH_PAGE.SCOREBOARD" | translate}}\n\n                <h4 class="scoreboard">\n\n                    <span *ngIf="matchPlayed; else elseBlock ">\n\n                        {{\'WHITE\' | translate}}: {{match.team1.goals}} - {{\'BLACK\' | translate}}: {{match.team2.goals}}\n\n                    </span>\n\n                    <ng-template #elseBlock>\n\n                        {{"MATCH_PAGE.NOT_PLAYED" | translate}}\n\n                    </ng-template>\n\n                </h4>\n\n            </ion-item>     \n\n            <ion-item color="none" *ngIf="match.mister">\n\n                <ion-icon name="build" item-left></ion-icon>\n\n                {{ "MATCH_PAGE.MISTER" | translate}}: {{match.mister.name}}\n\n            </ion-item>\n\n            <ion-item color="none" on-click="goToDiscards()">\n\n                <ion-icon name="thumbs-down" item-left></ion-icon>\n\n                {{ "MATCH_PAGE.DISCARDS" | translate}}  ({{match.discards?.length || 0}})\n\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item color="none" on-click="goToReserves()">\n\n                <ion-icon name="cut" item-left></ion-icon>\n\n                {{ "MATCH_PAGE.RESERVES" | translate}}  ({{match.reserves?.length || 0}})\n\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item *ngIf="matchPlayed" color="none" on-click="goToValuations()">\n\n                <ion-icon name="stats" item-left></ion-icon>\n\n                {{ "MATCH_PAGE.VALUATIONS" | translate}}\n\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n\n            </ion-item> \n\n        </ion-list>\n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\match\match.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["h" /* MatchesService */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["j" /* PlayersService */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* ContextService */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["i" /* MessagesService */]])
    ], MatchPageComponent);
    return MatchPageComponent;
}());

//# sourceMappingURL=match.component.js.map

/***/ })

});
//# sourceMappingURL=1.js.map