(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~customer-customer-module~customer-diet-view-customer-diet-view-module~dish-ingredients-dish-~96725519"],{

/***/ "./node_modules/videogular2/ima-ads.js":
/*!*********************************************!*\
  !*** ./node_modules/videogular2/ima-ads.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/ima-ads/ima-ads */ "./node_modules/videogular2/src/ima-ads/ima-ads.js"));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hLWFkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYS1hZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL3NyYy9pbWEtYWRzL2ltYS1hZHMnO1xuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/ima-ads/ima-ads.js":
/*!*********************************************************!*\
  !*** ./node_modules/videogular2/src/ima-ads/ima-ads.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var vg_ima_ads_1 = __webpack_require__(/*! ./vg-ima-ads */ "./node_modules/videogular2/src/ima-ads/vg-ima-ads.js");
var VgImaAdsModule = /** @class */ (function () {
    function VgImaAdsModule() {
    }
    VgImaAdsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_ima_ads_1.VgImaAds
                    ],
                    exports: [
                        vg_ima_ads_1.VgImaAds
                    ]
                },] },
    ];
    return VgImaAdsModule;
}());
exports.VgImaAdsModule = VgImaAdsModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hLWFkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYS1hZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEM7QUFDOUMsMENBQStDO0FBRS9DLDJDQUFzQztBQUV0QztJQUFBO0lBUzZCLENBQUM7O2dCQVQ3QixlQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtvQkFDekIsWUFBWSxFQUFFO3dCQUNWLHFCQUFRO3FCQUNYO29CQUNELE9BQU8sRUFBRTt3QkFDTCxxQkFBUTtxQkFDWDtpQkFDSjs7SUFDNEIscUJBQUM7Q0FBQSxBQVQ5QixJQVM4QjtBQUFqQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7VmdJbWFBZHN9IGZyb20gJy4vdmctaW1hLWFkcyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVmdJbWFBZHNcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVmdJbWFBZHNcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFZnSW1hQWRzTW9kdWxlIHt9XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/ima-ads/vg-ima-ads.js":
/*!************************************************************!*\
  !*** ./node_modules/videogular2/src/ima-ads/vg-ima-ads.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_events_1 = __webpack_require__(/*! ../core/events/vg-events */ "./node_modules/videogular2/src/core/events/vg-events.js");
var vg_fullscreen_api_1 = __webpack_require__(/*! ../core/services/vg-fullscreen-api */ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js");
var VgImaAds = /** @class */ (function () {
    function VgImaAds(ref, API, fsAPI) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.onAdStart = new core_1.EventEmitter();
        this.onAdStop = new core_1.EventEmitter();
        this.onSkipAd = new core_1.EventEmitter();
        this.isFullscreen = false;
        this.subscriptions = [];
        this.displayState = 'none';
        this.elem = ref.nativeElement;
        this.onContentEnded = this.onContentEnded.bind(this);
    }
    VgImaAds.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgImaAds.prototype.onPlayerReady = function () {
        if (typeof google === "undefined") {
            this.onMissingGoogleImaLoader();
            return;
        }
        this.target = this.API.getMediaById(this.vgFor);
        this.initializations();
        this.subscriptions.push(this.target.subscriptions.ended.subscribe(this.onContentEnded.bind(this)));
        this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onUpdateState.bind(this)));
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.ima.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), false);
        this.ima.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), false);
        this.loadAds();
    };
    VgImaAds.prototype.initializations = function () {
        var _this = this;
        this.ima = new Ima(this.elem);
        if (this.vgSkipButton) {
            this.skipButton = document.querySelector(this.vgSkipButton);
            this.skipButton.style.display = 'none';
            this.skipButton.addEventListener('click', this.onClickSkip.bind(this));
            this.elem.insertBefore(this.skipButton, this.elem.firstChild);
        }
        window.addEventListener('resize', function () {
            var w = _this.API.videogularElement.offsetWidth;
            var h = _this.API.videogularElement.offsetHeight;
            if (_this.ima.adsManager) {
                if (_this.isFullscreen) {
                    _this.ima.adsManager.resize(w, h, google.ima.ViewMode.FULLSCREEN);
                }
                else {
                    _this.ima.adsManager.resize(w, h, google.ima.ViewMode.NORMAL);
                }
            }
        });
    };
    VgImaAds.prototype.loadAds = function () {
        var _this = this;
        if (this.vgCompanion) {
            googletag.cmd.push(function () {
                var adUnitPath = '/' + _this.vgNetwork + '/' + _this.vgUnitPath;
                var slot = googletag.defineSlot(adUnitPath, _this.vgCompanionSize, _this.vgCompanion);
                if (slot) {
                    slot.addService(googletag.companionAds());
                    slot.addService(googletag.pubads());
                    googletag
                        .companionAds()
                        .setRefreshUnfilledSlots(true);
                    googletag
                        .pubads()
                        .enableVideoAds();
                    googletag.enableServices();
                }
            });
        }
    };
    VgImaAds.prototype.onUpdateState = function (event) {
        switch (event.type) {
            case vg_events_1.VgEvents.VG_PLAY:
                if (!this.ima.adsLoaded) {
                    this.API.pause();
                    this.ima.adDisplayContainer.initialize();
                    this.requestAds(this.vgAdTagUrl);
                    this.ima.adsLoaded = true;
                }
                break;
        }
    };
    VgImaAds.prototype.requestAds = function (adTagUrl) {
        // Show only to get computed style in pixels
        this.show();
        var adsRequest = new google.ima.AdsRequest();
        var computedStyle = window.getComputedStyle(this.elem);
        adsRequest.adTagUrl = adTagUrl;
        adsRequest.linearAdSlotWidth = parseInt(computedStyle.width, 10);
        adsRequest.linearAdSlotHeight = parseInt(computedStyle.height, 10);
        adsRequest.nonLinearAdSlotWidth = parseInt(computedStyle.width, 10);
        adsRequest.nonLinearAdSlotHeight = parseInt(computedStyle.height, 10);
        this.ima.adsLoader.requestAds(adsRequest);
    };
    VgImaAds.prototype.onAdsManagerLoaded = function (evt) {
        this.show();
        this.ima.adsManager = evt.getAdsManager(this.target);
        this.processAdsManager(this.ima.adsManager);
    };
    VgImaAds.prototype.processAdsManager = function (adsManager) {
        var w = this.API.videogularElement.offsetWidth;
        var h = this.API.videogularElement.offsetHeight;
        // Attach the pause/resume events.
        this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested.bind(this), false);
        this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested.bind(this), false);
        this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, this.onSkippableStateChanged.bind(this), false);
        this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, this.onAllAdsComplete.bind(this), false);
        this.ima.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this.onAdComplete.bind(this), false);
        this.ima.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), false);
        this.ima.adsManager.init(w, h, google.ima.ViewMode.NORMAL);
        this.ima.adsManager.start();
    };
    VgImaAds.prototype.onSkippableStateChanged = function () {
        var isSkippable = this.ima.adsManager.getAdSkippableState();
        if (isSkippable) {
            this.skipButton.style.display = 'block';
        }
        else {
            this.skipButton.style.display = 'none';
        }
    };
    VgImaAds.prototype.onClickSkip = function () {
        this.ima.adsManager.skip();
        this.onSkipAd.emit(true);
    };
    VgImaAds.prototype.onContentPauseRequested = function () {
        this.show();
        this.API.pause();
        this.onAdStop.emit(true);
    };
    VgImaAds.prototype.onContentResumeRequested = function () {
        this.API.play();
        this.onAdStart.emit(true);
        this.hide();
    };
    VgImaAds.prototype.onAdError = function (evt) {
        if (this.ima.adsManager) {
            this.ima.adsManager.destroy();
        }
        this.hide();
        this.API.play();
        this.onAdStop.emit(true);
    };
    VgImaAds.prototype.onAllAdsComplete = function () {
        this.hide();
        // The last ad was a post-roll
        if (this.ima.adsManager.getCuePoints().join().indexOf('-1') >= 0) {
            this.API.pause(); // it was stop() in Videogular v1
            this.onAdStop.emit(true);
        }
    };
    VgImaAds.prototype.onAdComplete = function () {
        // TODO: Update view with current ad count
        this.ima.currentAd++;
        this.onAdStop.emit(true);
    };
    VgImaAds.prototype.show = function () {
        window.dispatchEvent(new CustomEvent(vg_events_1.VgEvents.VG_START_ADS));
        this.displayState = 'block';
    };
    VgImaAds.prototype.hide = function () {
        window.dispatchEvent(new CustomEvent(vg_events_1.VgEvents.VG_END_ADS));
        this.displayState = 'none';
    };
    VgImaAds.prototype.onContentEnded = function () {
        this.ima.adsLoader.contentComplete();
        this.onAdStop.emit(true);
    };
    VgImaAds.prototype.onChangeFullscreen = function (fsState) {
        if (!this.fsAPI.nativeFullscreen) {
            this.isFullscreen = fsState;
        }
    };
    VgImaAds.prototype.onMissingGoogleImaLoader = function () {
        this.hide();
        this.API.play();
    };
    VgImaAds.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgImaAds.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-ima-ads',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"vg-ima-ads\"></div>",
                    styles: ["\n        vg-ima-ads {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            z-index: 300;\n        }\n        vg-ima-ads .vg-ima-ads {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            pointer-events: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgImaAds.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI },
        { type: vg_fullscreen_api_1.VgFullscreenAPI }
    ]; };
    VgImaAds.propDecorators = {
        vgFor: [{ type: core_1.Input }],
        vgNetwork: [{ type: core_1.Input }],
        vgUnitPath: [{ type: core_1.Input }],
        vgCompanion: [{ type: core_1.Input }],
        vgCompanionSize: [{ type: core_1.Input }],
        vgAdTagUrl: [{ type: core_1.Input }],
        vgSkipButton: [{ type: core_1.Input }],
        onAdStart: [{ type: core_1.Output }],
        onAdStop: [{ type: core_1.Output }],
        onSkipAd: [{ type: core_1.Output }],
        displayState: [{ type: core_1.HostBinding, args: ['style.display',] }]
    };
    return VgImaAds;
}());
exports.VgImaAds = VgImaAds;
var Ima = /** @class */ (function () {
    function Ima(imaAdsElement) {
        this.adDisplayContainer = new google.ima.AdDisplayContainer(imaAdsElement);
        this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer);
        this.adsManager = null;
        this.adsLoaded = false;
        this.currentAd = 0;
    }
    return Ima;
}());
exports.Ima = Ima;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctaW1hLWFkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWltYS1hZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBc0k7QUFFdEksa0RBQWdEO0FBQ2hELHNEQUFvRDtBQUNwRCx3RUFBcUU7QUFHckU7SUEwQ0ksa0JBQVksR0FBZSxFQUFTLEdBQVUsRUFBUyxLQUFzQjtRQUF6QyxRQUFHLEdBQUgsR0FBRyxDQUFPO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFkbkUsY0FBUyxHQUEwQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN0RCxhQUFRLEdBQTBCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3JELGFBQVEsR0FBMEIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFLL0QsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFHOUIsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRUwsaUJBQVksR0FBVyxNQUFNLENBQUM7UUFHeEQsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7UUFDN0YsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ks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UyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0wsVUFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksa0JBQUciLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9Jy4vZ29vZ2xlLmltYS50cycvPlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElQbGF5YWJsZSB9IGZyb20gJy4uL2NvcmUvdmctbWVkaWEvaS1wbGF5YWJsZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFZnRXZlbnRzIH0gZnJvbSAnLi4vY29yZS9ldmVudHMvdmctZXZlbnRzJztcbmltcG9ydCB7IFZnRnVsbHNjcmVlbkFQSSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdmctZnVsbHNjcmVlbi1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctaW1hLWFkcycsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ2Zy1pbWEtYWRzXCI+PC9kaXY+YCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy1pbWEtYWRzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgei1pbmRleDogMzAwO1xuICAgICAgICB9XG4gICAgICAgIHZnLWltYS1hZHMgLnZnLWltYS1hZHMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ0ltYUFkcyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZnTmV0d29yazogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZnVW5pdFBhdGg6IHN0cmluZztcbiAgICBASW5wdXQoKSB2Z0NvbXBhbmlvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZnQ29tcGFuaW9uU2l6ZTogQXJyYXk8TnVtYmVyPjtcbiAgICBASW5wdXQoKSB2Z0FkVGFnVXJsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdmdTa2lwQnV0dG9uOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgb25BZFN0YXJ0OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uQWRTdG9wOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uU2tpcEFkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IElQbGF5YWJsZTtcbiAgICBpbWE6IEltYTtcbiAgICBpc0Z1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBza2lwQnV0dG9uOiBIVE1MRWxlbWVudDtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5U3RhdGU6IHN0cmluZyA9ICdub25lJztcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEksIHB1YmxpYyBmc0FQSTogVmdGdWxsc2NyZWVuQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLm9uQ29udGVudEVuZGVkID0gdGhpcy5vbkNvbnRlbnRFbmRlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnb29nbGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMub25NaXNzaW5nR29vZ2xlSW1hTG9hZGVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemF0aW9ucygpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGFyZ2V0LnN1YnNjcmlwdGlvbnMuZW5kZWQuc3Vic2NyaWJlKHRoaXMub25Db250ZW50RW5kZWQuYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnRhcmdldC5zdWJzY3JpcHRpb25zLnBsYXkuc3Vic2NyaWJlKHRoaXMub25VcGRhdGVTdGF0ZS5iaW5kKHRoaXMpKSk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5mc0FQSS5vbkNoYW5nZUZ1bGxzY3JlZW4uc3Vic2NyaWJlKHRoaXMub25DaGFuZ2VGdWxsc2NyZWVuLmJpbmQodGhpcykpKTtcblxuICAgICAgICB0aGlzLmltYS5hZHNMb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGdvb2dsZS5pbWEuQWRzTWFuYWdlckxvYWRlZEV2ZW50LlR5cGUuQURTX01BTkFHRVJfTE9BREVELFxuICAgICAgICAgICAgdGhpcy5vbkFkc01hbmFnZXJMb2FkZWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaW1hLmFkc0xvYWRlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZ29vZ2xlLmltYS5BZEVycm9yRXZlbnQuVHlwZS5BRF9FUlJPUixcbiAgICAgICAgICAgIHRoaXMub25BZEVycm9yLmJpbmQodGhpcyksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubG9hZEFkcygpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemF0aW9ucygpIHtcbiAgICAgICAgdGhpcy5pbWEgPSBuZXcgSW1hKHRoaXMuZWxlbSk7XG5cbiAgICAgICAgaWYgKHRoaXMudmdTa2lwQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLnNraXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudmdTa2lwQnV0dG9uKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5za2lwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrU2tpcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbS5pbnNlcnRCZWZvcmUodGhpcy5za2lwQnV0dG9uLCB0aGlzLmVsZW0uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdyA9IHRoaXMuQVBJLnZpZGVvZ3VsYXJFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgY29uc3QgaCA9IHRoaXMuQVBJLnZpZGVvZ3VsYXJFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hLmFkc01hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWEuYWRzTWFuYWdlci5yZXNpemUodywgaCwgZ29vZ2xlLmltYS5WaWV3TW9kZS5GVUxMU0NSRUVOKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hLmFkc01hbmFnZXIucmVzaXplKHcsIGgsIGdvb2dsZS5pbWEuVmlld01vZGUuTk9STUFMKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRBZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnZnQ29tcGFuaW9uKSB7XG4gICAgICAgICAgICBnb29nbGV0YWcuY21kLnB1c2goXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZFVuaXRQYXRoOiBzdHJpbmcgPSAnLycgKyB0aGlzLnZnTmV0d29yayArICcvJyArIHRoaXMudmdVbml0UGF0aDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xvdDogZ29vZ2xldGFnLlNsb3QgPSBnb29nbGV0YWcuZGVmaW5lU2xvdChhZFVuaXRQYXRoLCB0aGlzLnZnQ29tcGFuaW9uU2l6ZSwgdGhpcy52Z0NvbXBhbmlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3QuYWRkU2VydmljZShnb29nbGV0YWcuY29tcGFuaW9uQWRzKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC5hZGRTZXJ2aWNlKGdvb2dsZXRhZy5wdWJhZHMoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZXRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb21wYW5pb25BZHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRSZWZyZXNoVW5maWxsZWRTbG90cyh0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZ29vZ2xldGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnB1YmFkcygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuYWJsZVZpZGVvQWRzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZXRhZy5lbmFibGVTZXJ2aWNlcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVXBkYXRlU3RhdGUoZXZlbnQ6IGFueSkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVmdFdmVudHMuVkdfUExBWTpcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaW1hLmFkc0xvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkFQSS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYS5hZERpc3BsYXlDb250YWluZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RBZHModGhpcy52Z0FkVGFnVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWEuYWRzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0QWRzKGFkVGFnVXJsOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gU2hvdyBvbmx5IHRvIGdldCBjb21wdXRlZCBzdHlsZSBpbiBwaXhlbHNcbiAgICAgICAgdGhpcy5zaG93KCk7XG5cbiAgICAgICAgY29uc3QgYWRzUmVxdWVzdCA9IG5ldyBnb29nbGUuaW1hLkFkc1JlcXVlc3QoKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbSk7XG4gICAgICAgIGFkc1JlcXVlc3QuYWRUYWdVcmwgPSBhZFRhZ1VybDtcblxuICAgICAgICBhZHNSZXF1ZXN0LmxpbmVhckFkU2xvdFdpZHRoID0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS53aWR0aCwgMTApO1xuICAgICAgICBhZHNSZXF1ZXN0LmxpbmVhckFkU2xvdEhlaWdodCA9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUuaGVpZ2h0LCAxMCk7XG4gICAgICAgIGFkc1JlcXVlc3Qubm9uTGluZWFyQWRTbG90V2lkdGggPSBwYXJzZUludChjb21wdXRlZFN0eWxlLndpZHRoLCAxMCk7XG4gICAgICAgIGFkc1JlcXVlc3Qubm9uTGluZWFyQWRTbG90SGVpZ2h0ID0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5oZWlnaHQsIDEwKTtcblxuICAgICAgICB0aGlzLmltYS5hZHNMb2FkZXIucmVxdWVzdEFkcyhhZHNSZXF1ZXN0KTtcbiAgICB9XG5cbiAgICBvbkFkc01hbmFnZXJMb2FkZWQoZXZ0OiBnb29nbGUuaW1hLkFkc01hbmFnZXJMb2FkZWRFdmVudCkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgdGhpcy5pbWEuYWRzTWFuYWdlciA9IGV2dC5nZXRBZHNNYW5hZ2VyKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgdGhpcy5wcm9jZXNzQWRzTWFuYWdlcih0aGlzLmltYS5hZHNNYW5hZ2VyKTtcbiAgICB9XG5cbiAgICBwcm9jZXNzQWRzTWFuYWdlcihhZHNNYW5hZ2VyOiBnb29nbGUuaW1hLkFkc01hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgdyA9IHRoaXMuQVBJLnZpZGVvZ3VsYXJFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBoID0gdGhpcy5BUEkudmlkZW9ndWxhckVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8vIEF0dGFjaCB0aGUgcGF1c2UvcmVzdW1lIGV2ZW50cy5cbiAgICAgICAgdGhpcy5pbWEuYWRzTWFuYWdlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZ29vZ2xlLmltYS5BZEV2ZW50LlR5cGUuQ09OVEVOVF9QQVVTRV9SRVFVRVNURUQsXG4gICAgICAgICAgICB0aGlzLm9uQ29udGVudFBhdXNlUmVxdWVzdGVkLmJpbmQodGhpcyksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmltYS5hZHNNYW5hZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBnb29nbGUuaW1hLkFkRXZlbnQuVHlwZS5DT05URU5UX1JFU1VNRV9SRVFVRVNURUQsXG4gICAgICAgICAgICB0aGlzLm9uQ29udGVudFJlc3VtZVJlcXVlc3RlZC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5pbWEuYWRzTWFuYWdlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZ29vZ2xlLmltYS5BZEV2ZW50LlR5cGUuU0tJUFBBQkxFX1NUQVRFX0NIQU5HRUQsXG4gICAgICAgICAgICB0aGlzLm9uU2tpcHBhYmxlU3RhdGVDaGFuZ2VkLmJpbmQodGhpcyksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmltYS5hZHNNYW5hZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBnb29nbGUuaW1hLkFkRXZlbnQuVHlwZS5BTExfQURTX0NPTVBMRVRFRCxcbiAgICAgICAgICAgIHRoaXMub25BbGxBZHNDb21wbGV0ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5pbWEuYWRzTWFuYWdlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZ29vZ2xlLmltYS5BZEV2ZW50LlR5cGUuQ09NUExFVEUsXG4gICAgICAgICAgICB0aGlzLm9uQWRDb21wbGV0ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5pbWEuYWRzTWFuYWdlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZ29vZ2xlLmltYS5BZEVycm9yRXZlbnQuVHlwZS5BRF9FUlJPUixcbiAgICAgICAgICAgIHRoaXMub25BZEVycm9yLmJpbmQodGhpcyksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuaW1hLmFkc01hbmFnZXIuaW5pdCh3LCBoLCBnb29nbGUuaW1hLlZpZXdNb2RlLk5PUk1BTCk7XG4gICAgICAgIHRoaXMuaW1hLmFkc01hbmFnZXIuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBvblNraXBwYWJsZVN0YXRlQ2hhbmdlZCgpIHtcbiAgICAgICAgY29uc3QgaXNTa2lwcGFibGUgPSB0aGlzLmltYS5hZHNNYW5hZ2VyLmdldEFkU2tpcHBhYmxlU3RhdGUoKTtcblxuICAgICAgICBpZiAoaXNTa2lwcGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja1NraXAoKSB7XG4gICAgICAgIHRoaXMuaW1hLmFkc01hbmFnZXIuc2tpcCgpO1xuICAgICAgICB0aGlzLm9uU2tpcEFkLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgb25Db250ZW50UGF1c2VSZXF1ZXN0ZWQoKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB0aGlzLkFQSS5wYXVzZSgpO1xuICAgICAgICB0aGlzLm9uQWRTdG9wLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgb25Db250ZW50UmVzdW1lUmVxdWVzdGVkKCkge1xuICAgICAgICB0aGlzLkFQSS5wbGF5KCk7XG4gICAgICAgIHRoaXMub25BZFN0YXJ0LmVtaXQodHJ1ZSk7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIG9uQWRFcnJvcihldnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hLmFkc01hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hLmFkc01hbmFnZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB0aGlzLkFQSS5wbGF5KCk7XG4gICAgICAgIHRoaXMub25BZFN0b3AuZW1pdCh0cnVlKTtcbiAgICB9XG5cbiAgICBvbkFsbEFkc0NvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgLy8gVGhlIGxhc3QgYWQgd2FzIGEgcG9zdC1yb2xsXG4gICAgICAgIGlmICh0aGlzLmltYS5hZHNNYW5hZ2VyLmdldEN1ZVBvaW50cygpLmpvaW4oKS5pbmRleE9mKCctMScpID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuQVBJLnBhdXNlKCk7IC8vIGl0IHdhcyBzdG9wKCkgaW4gVmlkZW9ndWxhciB2MVxuICAgICAgICAgICAgdGhpcy5vbkFkU3RvcC5lbWl0KHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZENvbXBsZXRlKCkge1xuICAgICAgICAvLyBUT0RPOiBVcGRhdGUgdmlldyB3aXRoIGN1cnJlbnQgYWQgY291bnRcbiAgICAgICAgdGhpcy5pbWEuY3VycmVudEFkKys7XG4gICAgICAgIHRoaXMub25BZFN0b3AuZW1pdCh0cnVlKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoVmdFdmVudHMuVkdfU1RBUlRfQURTKSk7XG4gICAgICAgIHRoaXMuZGlzcGxheVN0YXRlID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoVmdFdmVudHMuVkdfRU5EX0FEUykpO1xuICAgICAgICB0aGlzLmRpc3BsYXlTdGF0ZSA9ICdub25lJztcbiAgICB9XG5cbiAgICBvbkNvbnRlbnRFbmRlZCgpIHtcbiAgICAgICAgdGhpcy5pbWEuYWRzTG9hZGVyLmNvbnRlbnRDb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLm9uQWRTdG9wLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VGdWxsc2NyZWVuKGZzU3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmZzQVBJLm5hdGl2ZUZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gZnNTdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25NaXNzaW5nR29vZ2xlSW1hTG9hZGVyKCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgdGhpcy5BUEkucGxheSgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJbWEge1xuICAgIGFkRGlzcGxheUNvbnRhaW5lcjogZ29vZ2xlLmltYS5BZERpc3BsYXlDb250YWluZXI7XG4gICAgYWRzTG9hZGVyOiBnb29nbGUuaW1hLkFkc0xvYWRlcjtcbiAgICBhZHNNYW5hZ2VyOiBnb29nbGUuaW1hLkFkc01hbmFnZXI7XG4gICAgYWRzTG9hZGVkOiBib29sZWFuO1xuICAgIGN1cnJlbnRBZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaW1hQWRzRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5hZERpc3BsYXlDb250YWluZXIgPSBuZXcgZ29vZ2xlLmltYS5BZERpc3BsYXlDb250YWluZXIoaW1hQWRzRWxlbWVudCk7XG4gICAgICAgIHRoaXMuYWRzTG9hZGVyID0gbmV3IGdvb2dsZS5pbWEuQWRzTG9hZGVyKHRoaXMuYWREaXNwbGF5Q29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmFkc01hbmFnZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmFkc0xvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRBZCA9IDA7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./src/app/customer/view-media/view-media.component.html":
/*!***************************************************************!*\
  !*** ./src/app/customer/view-media/view-media.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"MediaCard\">\r\n\r\n  <button class=\"CloseDialogueBtn\" mat-mini-fab  (click)=\"onNoClick()\"><mat-icon>close</mat-icon></button>\r\n  <div class=\"VideoPlayer\" [hidden]=\"HideVideo\">\r\n    <vg-player>\r\n      <video #media [vgMedia]=\"media\" id=\"singleVideo\" preload=\"auto\" autoplay=\"true\" controls>\r\n        <source [src]=\"VideoSource\" type=\"video/mp4\" />\r\n      </video>\r\n    </vg-player>\r\n  </div>\r\n  <div class=\"ImageViewer\" [hidden]=\"HideImage\">\r\n    <img [src]=\"ImageSource||'https://via.placeholder.com/150'\"/>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/customer/view-media/view-media.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/customer/view-media/view-media.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".MediaCard {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0;\n  box-shadow: none;\n  background: transparent;\n  margin: 0; }\n\n.CloseDialogueBtn {\n  z-index: 9;\n  margin: 0;\n  padding: 0;\n  background: rgba(0, 0, 0, 0.14);\n  color: #fff;\n  position: absolute;\n  top: 5px;\n  right: 5px; }\n\n.ImageViewer img {\n  max-width: 100%;\n  max-height: 90vh;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvdmlldy1tZWRpYS9GOlxcc2hhZmVlcSdzXFxkZWl0dGVjXFxXRUJcXEFETUlOL3NyY1xcYXBwXFxjdXN0b21lclxcdmlldy1tZWRpYVxcdmlldy1tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsU0FBUyxFQUFBOztBQUdiO0VBQ0ksVUFBVTtFQUNWLFNBQVE7RUFDUixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBTztFQUNQLFVBQVUsRUFBQTs7QUFFYjtFQUNHLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvdmlldy1tZWRpYS92aWV3LW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk1lZGlhQ2FyZHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbn1cclxuLkNsb3NlRGlhbG9ndWVCdG57XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAuSW1hZ2VWaWV3ZXIgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogOTB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/customer/view-media/view-media.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/customer/view-media/view-media.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMediaComponent", function() { return ViewMediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ViewMediaComponent = /** @class */ (function () {
    function ViewMediaComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.HideVideo = true;
        this.HideImage = true;
        this.ImageSource = '';
        this.VideoSource = '';
        if (data.MediaType === 1) {
            this.HideImage = false;
            this.HideVideo = true;
            this.ImageSource = data.MediaSource;
        }
        else {
            this.HideImage = true;
            this.HideVideo = false;
            this.VideoSource = data.MediaSource;
        }
    }
    ViewMediaComponent.prototype.ngOnInit = function () {
    };
    ViewMediaComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ViewMediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-media',
            template: __webpack_require__(/*! ./view-media.component.html */ "./src/app/customer/view-media/view-media.component.html"),
            styles: [__webpack_require__(/*! ./view-media.component.scss */ "./src/app/customer/view-media/view-media.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ViewMediaComponent);
    return ViewMediaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~customer-customer-module~customer-diet-view-customer-diet-view-module~dish-ingredients-dish-~96725519.js.map