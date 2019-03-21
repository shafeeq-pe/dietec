(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~chef-chef-module~customer-dashboard-customer-dashboard-module"],{

/***/ "./node_modules/ngx-hm-carousel/fesm5/ngx-hm-carousel.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-hm-carousel/fesm5/ngx-hm-carousel.js ***!
  \***************************************************************/
/*! exports provided: NgxHmCarouselDynamicDirective, NgxHmCarouselComponent, NgxHmCarouselModule, resizeObservable, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxHmCarouselDynamicDirective", function() { return NgxHmCarouselDynamicDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxHmCarouselComponent", function() { return NgxHmCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxHmCarouselModule", function() { return NgxHmCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeObservable", function() { return resizeObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxHmCarouselItemDirective; });
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxHmCarouselDynamicDirective = /** @class */ (function () {
    function NgxHmCarouselDynamicDirective(_view, _template) {
        this._view = _view;
        this._template = _template;
        this.compelete = false;
        this._view.clear();
    }
    Object.defineProperty(NgxHmCarouselDynamicDirective.prototype, "currentI", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!this.compelete) {
                /** @type {?} */
                var nextI = value + 1;
                /** @type {?} */
                var prevI = value - 1;
                if (this.index === 0 ||
                    this.index === this.length - 1 ||
                    this.index === nextI ||
                    this.index === prevI ||
                    this.index === value) {
                    this._view.createEmbeddedView(this._template);
                    this.compelete = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxHmCarouselDynamicDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgxHmCarouselDynamicDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[ngxHmCarouselDynamic]'
                },] }
    ];
    /** @nocollapse */
    NgxHmCarouselDynamicDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
    ]; };
    NgxHmCarouselDynamicDirective.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['ngxHmCarouselDynamic',] }],
        length: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['ngxHmCarouselDynamicLength',] }],
        currentI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['ngxHmCarouselDynamicIndex',] }]
    };
    return NgxHmCarouselDynamicDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxHmCarouselItemDirective = /** @class */ (function () {
    function NgxHmCarouselItemDirective() {
    }
    NgxHmCarouselItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[ngx-hm-carousel-item]'
                },] }
    ];
    /** @nocollapse */
    NgxHmCarouselItemDirective.ctorParameters = function () { return []; };
    return NgxHmCarouselItemDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An observable creator for element resize.
 * @param {?} elm the watch element.
 * @param {?} cb when resize complete, call back function.
 * @param {?=} time resize emit time, default is 200
 * @return {?}
 */
function resizeObservable(elm, cb, time) {
    if (time === void 0) { time = 200; }
    /** @type {?} */
    var elmObserve$;
    return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
        elmObserve$ = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"](function (entries, obs) {
            observer.next(elmObserve$);
        });
        elmObserve$.observe(elm);
    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(time), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
        cb();
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
        elmObserve$.unobserve(elm);
        elmObserve$.disconnect();
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// if the pane is paned .15, switch to the next pane.
/** @type {?} */
var PANBOUNDARY = 0.15;
var NgxHmCarouselComponent = /** @class */ (function () {
    function NgxHmCarouselComponent(platformId, _document, _renderer, _zone, _cd) {
        var _this = this;
        this.platformId = platformId;
        this._document = _document;
        this._renderer = _renderer;
        this._zone = _zone;
        this._cd = _cd;
        this.aniTime = 400;
        this.aniClass = 'transition';
        this.aniClassAuto = this.aniClass;
        // this default autoplay animation is same as aniClass
        this.align = 'center';
        this.notDrag = false;
        this.mourseEnable = false;
        this.delay = 8000;
        this.direction = 'right';
        this.scrollNum = 1;
        this.isDragMany = false;
        this.breakpoint = [];
        // using for check mouse or touchend
        this.leaveObs$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this._document, 'mouseup'), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this._document, 'touchend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (e) {
            _this.grabbing = false;
            e.stopPropagation();
            e.preventDefault();
        }));
        this.isFromAuto = true;
        this.isAutoNum = false;
        this.mouseOnContainer = false;
        this.alignDistance = 0;
        this.elmWidth = 0;
        this.infiniteElmRefs = [];
        this.restart = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.speedChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](5000);
        this.stopEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._porgressWidth = 0;
        this._currentIndex = 0;
        this._showNum = 1;
        this._autoplay = false;
        this._infinite = false;
        this._tmpInfinite = false;
        this._grabbing = false;
        this.panCount = 0;
        this._disableDrag = false;
        // this variable use for check the init value is write with ngModel,
        // when init first, not set with animation
        this.hasInitWriteValue = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NgxHmCarouselComponent.prototype, "disableDrag", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disableDrag;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.rootElm) {
                if (this._disableDrag !== value) {
                    if (value) {
                        this.destoryHammer();
                    }
                    else {
                        this.hammer = this.bindHammer();
                    }
                }
            }
            this._disableDrag = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "infinite", {
        get: /**
         * @return {?}
         */
        function () { return this._infinite; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._infinite = value;
            this.infiniteElmRefs.forEach(function (ref) {
                _this.addStyle(ref.rootNodes[0], {
                    visibility: _this.runLoop ? 'visible' : 'hidden'
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "speed", {
        get: /**
         * @return {?}
         */
        function () { return this.speedChange.value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._zone.runOutsideAngular(function () {
                _this.speedChange.next(value);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "showNum", {
        get: /**
         * @return {?}
         */
        function () { return this._showNum; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === 'auto') {
                this.isAutoNum = true;
            }
            else {
                this._showNum = +value;
                if (this.rootElm) {
                    this.setViewWidth();
                    this.reSetAlignDistance();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "autoplay", {
        get: /**
         * @return {?}
         */
        function () { return this._autoplay; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
                if (this.elms) {
                    this.progressWidth = 0;
                    if (value) {
                        this._zone.runOutsideAngular(function () {
                            _this.doNextSub$ = _this.doNext.subscribe();
                        });
                    }
                    else {
                        if (this.doNextSub$) {
                            this.doNextSub$.unsubscribe();
                        }
                    }
                }
            }
            this._autoplay = value;
            // if set autoplay, then the infinite is true
            if (value) {
                this._tmpInfinite = this.infinite;
                this.infinite = true;
            }
            else {
                this.infinite = this._tmpInfinite;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "currentIndex", {
        get: /**
         * @return {?}
         */
        function () { return this._currentIndex; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            // if now index if not equale to save index, do someting
            if (this.currentIndex !== value) {
                // if the value is not contain with the boundary not handler
                if (!this.runLoop && !(0 <= value && value <= this.itemElms.length - 1)) {
                    return;
                }
                this._currentIndex = value;
                if (this.elms) {
                    if (this.autoplay && !this.isFromAuto) {
                        this._zone.runOutsideAngular(function () {
                            _this.stopEvent.next();
                            _this.callRestart();
                        });
                    }
                    this.drawView(this.currentIndex, this.hasInitWriteValue);
                    if (this.isDragMany) {
                        this.hasInitWriteValue = true;
                    }
                }
                if (0 <= this.currentIndex && this.currentIndex <= this.itemElms.length - 1) {
                    this._zone.run(function () {
                        _this.onChange(_this.currentIndex);
                        _this._cd.detectChanges();
                    });
                }
            }
            this.isFromAuto = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "progressWidth", {
        get: /**
         * @return {?}
         */
        function () { return this._porgressWidth; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.progressElm !== undefined && this.autoplay) {
                this._porgressWidth = value;
                this._renderer.setStyle(((/** @type {?} */ (this.progressContainerElm.nativeElement))).children[0], 'width', this.progressWidth + "%");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "grabbing", {
        get: /**
         * @return {?}
         */
        function () { return this._grabbing; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (this._grabbing !== value) {
                // console.log(value);
                this._zone.run(function () {
                    _this._grabbing = value;
                    if (value) {
                        _this._renderer.addClass(_this.containerElm, 'grabbing');
                    }
                    else {
                        _this.panCount = 0;
                        _this.callRestart();
                        _this._renderer.removeClass(_this.containerElm, 'grabbing');
                    }
                    _this._cd.detectChanges();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "left", {
        set: /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
                this._renderer.setStyle(this.containerElm, 'transform', "translateX(" + value + "px)");
            }
            else {
                this._renderer.setStyle(this.containerElm, 'transform', "translateX(" + value + "%)");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "maxRightIndex", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var addIndex = 0;
            switch (this.align) {
                case 'left':
                    addIndex = 0;
                    break;
                case 'center':
                    addIndex = (/** @type {?} */ (this.showNum)) - 1;
                    break;
                case 'right':
                    addIndex = (/** @type {?} */ (this.showNum)) - 1;
                    break;
            }
            return ((this.itemElms.length - 1) - this._showNum + 1) + addIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "runLoop", {
        get: /**
         * @private
         * @return {?}
         */
        function () { return this.autoplay || this.infinite; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "lengthOne", {
        get: /**
         * @private
         * @return {?}
         */
        function () { return this.itemElms.length === 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "rootElmWidth", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId) ? this.rootElm.getBoundingClientRect().width : 100);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxHmCarouselComponent.prototype, "containerElmWidth", {
        set: /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setStyle(this.containerElm, 'width', value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.rootElm = this.container.nativeElement;
        this.containerElm = (/** @type {?} */ (this.rootElm.children[0]));
        this.init();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(this.bindClick(), 
        // when item changed, remove old hammer binding, and reset width
        this.itemElms.changes.pipe(
        // detectChanges to change view dots
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            if (_this.currentIndex > _this.itemElms.length - 1) {
                // i can't pass the changedetection check, only the way to using timeout. :(
                setTimeout(function () {
                    _this.currentIndex = _this.itemElms.length - 1;
                }, 0);
            }
            _this.destroy();
            _this.removeInfiniteElm();
            _this.init();
            _this.progressWidth = 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this._cd.detectChanges(); })), resizeObservable(this.rootElm, function () { return _this.containerResize(); })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe();
    };
    /**
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy();
        this.destroy$.next();
        this.destroy$.unsubscribe();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value || value === 0) {
            this.currentIndex = value;
            this.hasInitWriteValue = true;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        this.initVariable();
        this.setViewWidth(true);
        this.reSetAlignDistance();
        if (!this.disableDrag) {
            this.hammer = this.bindHammer();
        }
        this.drawView(this.currentIndex, false);
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId) && this.runLoop) {
            this.addInfiniteElm();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.destroy = /**
     * @private
     * @return {?}
     */
    function () {
        this.destoryHammer();
        if (this.autoplay) {
            this.doNextSub$.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.destoryHammer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.hammer) {
            this.hammer.destroy();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.addInfiniteElm = /**
     * @private
     * @return {?}
     */
    function () {
        for (var i = 1; i <= this.showNum; i++) {
            /** @type {?} */
            var elm = this.infiniteContainer.createEmbeddedView(this.contentContent, {
                $implicit: this.data[this.itemElms.length - i],
                index: this.itemElms.length - i
            });
            this.addStyle(elm.rootNodes[0], {
                position: 'absolute',
                // boxShadow: `0 0 0 5000px rgba(200, 75, 75, 0.5) inset`,
                transform: "translateX(-" + 100 * i + "%)",
                visibility: this.runLoop ? 'visible' : 'hidden'
            });
            this.setStyle(elm.rootNodes[0], 'width', this.elmWidth);
            /** @type {?} */
            var elm2 = this.infiniteContainer.createEmbeddedView(this.contentContent, {
                $implicit: this.data[i - 1],
                index: i - 1
            });
            this.addStyle(elm2.rootNodes[0], {
                // boxShadow: `0 0 0 5000px rgba(200, 75, 75, 0.5) inset`,
                position: 'absolute',
                right: 0,
                top: 0,
                transform: "translateX(" + 100 * i + "%)",
                visibility: this.runLoop ? 'visible' : 'hidden'
            });
            this.setStyle(elm2.rootNodes[0], 'width', this.elmWidth);
            elm.detectChanges();
            elm2.detectChanges();
            this.infiniteElmRefs.push(elm);
            this.infiniteElmRefs.push(elm2);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.removeInfiniteElm = /**
     * @private
     * @return {?}
     */
    function () {
        this.infiniteElmRefs.forEach(function (a) {
            a.detach();
            a.destroy();
        });
        if (this.infiniteContainer) {
            this.infiniteContainer.clear();
        }
        this.infiniteElmRefs = [];
    };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.containerResize = /**
     * @private
     * @return {?}
     */
    function () {
        this.setViewWidth();
        this.reSetAlignDistance();
        // 因為不能滑了，所以要回到第一個，以確保全部都有顯示
        if (this.align !== 'center' && this.showNum >= this.elms.length) {
            this.currentIndex = 0;
        }
        this.drawView(this.currentIndex, false);
    };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.initVariable = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            _this.elms = _this.itemElms.toArray().map(function (x) { return x.nativeElement; });
            /** @type {?} */
            var startEvent = _this.restart.asObservable();
            /** @type {?} */
            var stopEvent = _this.stopEvent.asObservable();
            if (_this.mourseEnable) {
                startEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(startEvent, Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(_this.containerElm, 'mouseleave').pipe(
                // when leave, we should reverse grabbing state to set the mouseOn state,
                // because when the grabbing, the mask will on, and it will occur leave again
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function () { return !_this.grabbing; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.mouseOnContainer = false; })));
                stopEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(stopEvent, Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(_this.containerElm, 'mouseover').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.mouseOnContainer = true; })));
            }
            _this.doNext = startEvent.pipe(
            // not using debounceTime, it will stop mourseover event detect, will cause mourse-enable error
            // debounceTime(this.delay),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this.speedChange; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(_this.delay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this.runProgress(20); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
                    _this.isFromAuto = true;
                    // console.log('next');
                    if (_this.direction === 'left') {
                        _this.currentIndex -= _this.scrollNum;
                    }
                    else {
                        _this.currentIndex += _this.scrollNum;
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(stopEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.progressWidth = 0; }))));
            }));
            if (_this.autoplay) {
                _this.doNextSub$ = _this.doNext.subscribe();
            }
        });
    };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.reSetAlignDistance = /**
     * @private
     * @return {?}
     */
    function () {
        switch (this.align) {
            case 'center':
                this.alignDistance = (this.rootElmWidth - this.elmWidth) / 2;
                break;
            case 'left':
                this.alignDistance = 0;
                break;
            case 'right':
                this.alignDistance = this.rootElmWidth - this.elmWidth;
                break;
        }
    };
    /**
     * @private
     * @param {?=} isInit
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.setViewWidth = /**
     * @private
     * @param {?=} isInit
     * @return {?}
     */
    function (isInit) {
        var _this = this;
        if (this.isAutoNum) {
            this._showNum = this.getAutoNum();
        }
        this._renderer.addClass(this.containerElm, 'grab');
        if (isInit) {
            // remain one elm height
            this._renderer.addClass(this.containerElm, 'ngx-hm-carousel-display-npwrap');
        }
        this.elmWidth = this.rootElmWidth / this._showNum;
        this._renderer.removeClass(this.containerElm, 'ngx-hm-carousel-display-npwrap');
        this.containerElmWidth = this.elmWidth * this.elms.length;
        this._renderer.setStyle(this.containerElm, 'position', 'relative');
        this.infiniteElmRefs.forEach(function (ref) {
            _this.setStyle(ref.rootNodes[0], 'width', _this.elmWidth);
        });
        this.elms.forEach(function (elm) {
            _this.setStyle(elm, 'width', _this.elmWidth);
        });
    };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.bindHammer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            return null;
        }
        return this._zone.runOutsideAngular(function () {
            /** @type {?} */
            var hm = new Hammer(_this.containerElm);
            hm.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
            hm.on('panleft panright panend pancancel', function (e) {
                // console.log(e.type);
                if (_this.lengthOne) {
                    return;
                }
                _this.removeContainerTransition();
                if (_this.autoplay) {
                    _this._zone.runOutsideAngular(function () { _this.stopEvent.next(); });
                }
                switch (e.type) {
                    case 'panleft':
                    case 'panright':
                        _this.panCount++;
                        // only when panmove more than two times, set move
                        if (_this.panCount < 2) {
                            return;
                        }
                        _this.grabbing = true;
                        // When show-num is bigger than length, stop hammer
                        if (_this.align !== 'center' && _this.showNum >= _this.elms.length) {
                            _this.hammer.stop(true);
                            return;
                        }
                        // Slow down at the first and last pane.
                        if (!_this.runLoop && _this.outOfBound(e.type)) {
                            e.deltaX *= 0.2;
                        }
                        if (!_this.notDrag) {
                            _this.left = -_this.currentIndex * _this.elmWidth + _this.alignDistance + e.deltaX;
                        }
                        // // if not dragmany, when bigger than half
                        if (!_this.isDragMany) {
                            if (Math.abs(e.deltaX) > _this.elmWidth * 0.5) {
                                if (e.deltaX > 0) {
                                    _this.currentIndex -= _this.scrollNum;
                                }
                                else {
                                    _this.currentIndex += _this.scrollNum;
                                }
                                _this.hammer.stop(true);
                                return;
                            }
                        }
                        break;
                    case 'pancancel':
                        _this.drawView(_this.currentIndex);
                        break;
                    case 'panend':
                        if (Math.abs(e.deltaX) > _this.elmWidth * PANBOUNDARY) {
                            /** @type {?} */
                            var moveNum = _this.isDragMany ?
                                Math.ceil(Math.abs(e.deltaX) / _this.elmWidth) : _this.scrollNum;
                            /** @type {?} */
                            var prevIndex = _this.currentIndex - moveNum;
                            /** @type {?} */
                            var nextIndex = _this.currentIndex + moveNum;
                            // if right
                            if (e.deltaX > 0) {
                                if (!_this.runLoop && prevIndex < 0) {
                                    prevIndex = 0;
                                    _this.drawView(0);
                                }
                                _this.currentIndex = prevIndex;
                                // left
                            }
                            else {
                                if (!_this.runLoop && nextIndex > _this.maxRightIndex) {
                                    nextIndex = _this.maxRightIndex;
                                    _this.drawView(nextIndex);
                                }
                                _this.currentIndex = nextIndex;
                            }
                            break;
                        }
                        _this.drawView(_this.currentIndex);
                        break;
                }
            });
            return hm;
        });
    };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.bindClick = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.btnNext && this.btnPrev) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.btnNext.nativeElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.currentIndex++; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.btnPrev.nativeElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.currentIndex--; })));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.callRestart = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // if that is autoplay
        // if that mouse is not on container( only mouse-enable is true, the state maybe true)
        // if now is grabbing, skip this restart, using grabbing change restart
        if (this.autoplay && !this.mouseOnContainer && !this.grabbing) {
            this._zone.runOutsideAngular(function () {
                _this.restart.next(null);
            });
        }
    };
    /**
     * @private
     * @param {?} index
     * @param {?=} isAnimation
     * @param {?=} isFromAuto
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.drawView = /**
     * @private
     * @param {?} index
     * @param {?=} isAnimation
     * @param {?=} isFromAuto
     * @return {?}
     */
    function (index, isAnimation, isFromAuto) {
        if (isAnimation === void 0) { isAnimation = true; }
        if (isFromAuto === void 0) { isFromAuto = this.isFromAuto; }
        // move element only on length is more than 1
        if (this.elms.length > 1) {
            this.removeContainerTransition();
            this.left = -((index * this.elmWidth) - this.alignDistance);
            if (isAnimation) {
                if (isFromAuto) {
                    this._renderer.addClass(this.containerElm, this.aniClassAuto);
                }
                else {
                    this._renderer.addClass(this.containerElm, this.aniClass);
                }
                // if infinite move to next index with timeout
                this.infiniteHandler(index);
            }
        }
        else {
            this.left = this.alignDistance;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.removeContainerTransition = /**
     * @private
     * @return {?}
     */
    function () {
        this._renderer.removeClass(this.containerElm, this.aniClass);
        this._renderer.removeClass(this.containerElm, this.aniClassAuto);
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.infiniteHandler = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        if (this.runLoop) {
            /** @type {?} */
            var state_1 = 0;
            state_1 = (index < 0) ? -1 : state_1;
            state_1 = (index > (this.itemElms.length - 1)) ? 1 : state_1;
            // index = index % this._showNum;
            if (state_1 !== 0) {
                switch (state_1) {
                    case -1:
                        this._currentIndex = (this.itemElms.length + index) % this.itemElms.length;
                        break;
                    case 1:
                        this._currentIndex = index % this.itemElms.length;
                        break;
                }
                /** @type {?} */
                var isFromAuto_1 = this.isFromAuto;
                if (this.saveTimeOut) {
                    this.saveTimeOut.unsubscribe();
                }
                this.saveTimeOut = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(this.aniTime).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
                    // if it is any loop carousel, the next event need wait the timeout complete
                    if (_this.aniTime === _this.speed) {
                        _this.removeContainerTransition();
                        _this.left = -((_this._currentIndex - state_1) * _this.elmWidth) + _this.alignDistance;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(50).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
                            _this.drawView(_this.currentIndex, _this.hasInitWriteValue, isFromAuto_1);
                        }));
                    }
                    else {
                        _this.drawView(_this.currentIndex, false);
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.stopEvent)).subscribe();
            }
        }
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.outOfBound = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        switch (type) {
            case 'panleft':
                return this.currentIndex >= this.maxRightIndex;
            case 'panright':
                return this.currentIndex <= 0;
        }
    };
    /**
     * @private
     * @param {?} betweenTime
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.runProgress = /**
     * @private
     * @param {?} betweenTime
     * @return {?}
     */
    function (betweenTime) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            /** @type {?} */
            var howTimes = _this.speed / betweenTime;
            /** @type {?} */
            var everyIncrease = 100 / _this.speed * betweenTime;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(betweenTime).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (t) {
                _this.progressWidth = (t % howTimes) * everyIncrease;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(Math.round(howTimes), 0));
        });
    };
    /**
     * @private
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.getAutoNum = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var curr_width = this.rootElmWidth;
        // check user has had set breakpoint
        if (this.breakpoint.length > 0) {
            // get the last bigget point
            /** @type {?} */
            var now = this.breakpoint.find(function (b) {
                return b.width >= curr_width;
            });
            // if find value, it is current width
            if (now) {
                return now.number;
            }
            return this.breakpoint[this.breakpoint.length - 1].number;
        }
        // system init show number
        /** @type {?} */
        var initNum = 3;
        // 610
        if (curr_width > 300) {
            return Math.floor(initNum + (curr_width / 200));
        }
        return initNum;
    };
    /**
     * @private
     * @param {?} elm
     * @param {?} style
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.addStyle = /**
     * @private
     * @param {?} elm
     * @param {?} style
     * @return {?}
     */
    function (elm, style) {
        var _this = this;
        if (style) {
            Object.keys(style).forEach(function (key) {
                /** @type {?} */
                var value = style[key];
                _this._renderer.setStyle(elm, key, value);
            });
        }
    };
    /**
     * @private
     * @param {?} elm
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    NgxHmCarouselComponent.prototype.setStyle = /**
     * @private
     * @param {?} elm
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    function (elm, style, value) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this._renderer.setStyle(elm, style, value + "px");
        }
        else {
            this._renderer.setStyle(elm, style, value + "%");
        }
    };
    NgxHmCarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ngx-hm-carousel',
                    template: "<div #containerElm class=\"carousel\">\n  <!-- main content -->\n  <ng-content select=\"[ngx-hm-carousel-container]\"></ng-content>\n  <!-- left -->\n  <div #prev *ngIf=\"contentPrev\"\n    class=\"direction left\">\n    <ng-container *ngTemplateOutlet=\"contentPrev\"></ng-container>\n  </div>\n  <!--  right -->\n  <div #next *ngIf=\"contentNext\"\n    class=\"direction right\">\n    <ng-container *ngTemplateOutlet=\"contentNext\"></ng-container>\n  </div>\n  <!-- indicators -->\n  <ul class=\"indicators\" *ngIf=\"dotElm\">\n    <li\n      *ngFor=\"let dot of itemElms; let i = index;\"\n      (click)=\"currentIndex = i\">\n      <ng-container\n        *ngTemplateOutlet=\"dotElm, context: {\n          $implicit: {\n            index : i,\n            currentIndex : currentIndex\n          }\n        }\">\n      </ng-container>\n    </li>\n  </ul>\n  <!-- progress -->\n  <div *ngIf=\"progressElm && autoplay\" #progress>\n    <ng-container\n      *ngTemplateOutlet=\"progressElm\">\n    </ng-container>\n  </div>\n\n  <div class=\"mask\" *ngIf=\"grabbing\">\n    <ng-container *ngIf=\"leaveObs$ | async\"></ng-container>\n  </div>\n</div>\n",
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return NgxHmCarouselComponent; }),
                            multi: true
                        }],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                    styles: [":host{display:block;height:100%}.ngx-hm-carousel-display-npwrap{display:flex!important;flex-wrap:nowrap!important;flex-direction:row!important;overflow:hidden!important}.carousel{overflow:hidden;position:relative;width:100%;height:100%}.carousel ul.indicators{list-style:none;bottom:1rem;left:0;margin:0;padding:0;position:absolute;text-align:center;width:100%}.carousel ul.indicators li{cursor:pointer;display:inline-block;position:relative;padding:.5rem}.carousel .direction{position:absolute;height:100%;cursor:pointer;display:flex;align-items:center;justify-content:center;top:0}.carousel .direction.left{left:0}.carousel .direction.right{position:absolute;right:0}.grab{cursor:-webkit-grab;cursor:grab}.grabbing{cursor:-webkit-grabbing;cursor:grabbing}.mask{position:absolute;left:0;top:0;right:0;bottom:0}"]
                }] }
    ];
    /** @nocollapse */
    NgxHmCarouselComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
    ]; };
    NgxHmCarouselComponent.propDecorators = {
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['containerElm',] }],
        btnPrev: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['prev',] }],
        btnNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['next',] }],
        progressContainerElm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['progress',] }],
        itemElms: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [NgxHmCarouselItemDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },] }],
        contentPrev: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: ['carouselPrev',] }],
        contentNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: ['carouselNext',] }],
        dotElm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: ['carouselDot',] }],
        progressElm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: ['carouselProgress',] }],
        infiniteContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: ['infiniteContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },] }],
        contentContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: ['carouselContent',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        aniTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        aniClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        aniClassAuto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        notDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['not-follow-pan',] }],
        mourseEnable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['mourse-enable',] }],
        delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['between-delay',] }],
        direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['autoplay-direction',] }],
        scrollNum: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['scroll-num',] }],
        isDragMany: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['drag-many',] }],
        breakpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disableDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['disable-drag',] }],
        infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['infinite',] }],
        speed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['autoplay-speed',] }],
        showNum: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['show-num',] }],
        autoplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['autoplay',] }]
    };
    return NgxHmCarouselComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxHmCarouselModule = /** @class */ (function () {
    function NgxHmCarouselModule() {
    }
    NgxHmCarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    ],
                    declarations: [
                        NgxHmCarouselComponent,
                        NgxHmCarouselDynamicDirective,
                        NgxHmCarouselItemDirective
                    ],
                    exports: [
                        NgxHmCarouselComponent,
                        NgxHmCarouselDynamicDirective,
                        NgxHmCarouselItemDirective
                    ]
                },] }
    ];
    return NgxHmCarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-hm-carousel.js.map

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ })

}]);
//# sourceMappingURL=default~chef-chef-module~customer-dashboard-customer-dashboard-module.js.map