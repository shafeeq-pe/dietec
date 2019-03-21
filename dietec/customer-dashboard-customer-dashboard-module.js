(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-dashboard-customer-dashboard-module"],{

/***/ "./src/app/customer/customer-dashboard/customer-dashboard-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/customer/customer-dashboard/customer-dashboard-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDashboardRoutingModule", function() { return CustomerDashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-dashboard.component */ "./src/app/customer/customer-dashboard/customer-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _customer_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["CustomerDashboardComponent"]
    }
];
var CustomerDashboardRoutingModule = /** @class */ (function () {
    function CustomerDashboardRoutingModule() {
    }
    CustomerDashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomerDashboardRoutingModule);
    return CustomerDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer/customer-dashboard/customer-dashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/customer/customer-dashboard/customer-dashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"UserDashBoardTop\">\r\n  <mat-card class=\"ActivityCard\">\r\n    <div class=\"ActivityIConAndCount\">\r\n      <div class=\"ActivityICon\">\r\n        <img src=\"assets/images/activity-icon.png\" />\r\n      </div>\r\n      <div class=\"ActivityCount\">\r\n        6894\r\n        <small> Steps Walked</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"ActivityResult\">\r\n      <small>Calories Burned </small>\r\n      <strong>150 Kcal</strong>\r\n    </div>\r\n  </mat-card>\r\n  <!-- 2 -->\r\n  <mat-card class=\"ChefCard\">\r\n    <div class=\"ChefImage\">\r\n      <img src={{GetImageLocation(Chef.ProfilePic)}} />\r\n    </div>\r\n    <div class=\"ChefDetails\">\r\n      <small>Your Chef </small>\r\n      <strong>{{ (Chef==null?'':Chef.ChefName) }}</strong>\r\n      <button mat-button class=\"BtnChefSelect\" *ngIf=\"Chef==null\" [routerLink]=\"[ '/cs/chef' ]\">Select Chef</button>\r\n    </div>\r\n  </mat-card>\r\n\r\n  <!-- 3 -->\r\n  <!-- 4 -->\r\n\r\n  <mat-card class=\"TodayMealCard\"  >\r\n    <ngx-hm-carousel\r\n      #carousel\r\n      [(ngModel)]=\"index\"\r\n      [autoplay-speed]=\"speed\"\r\n      [autoplay]=\"autoplay\"\r\n      [autoplay-direction]=\"direction\"\r\n      [infinite]=\"infinite\"\r\n      [between-delay]=\"2000\"\r\n      [mourse-enable]=\"true\"\r\n      [data]=\"avatars\"\r\n      [aniTime]=\"300\"\r\n      class=\"carousel c-accent\"\r\n    >\r\n\r\n\r\n      <section ngx-hm-carousel-container class=\"content\">\r\n        <article class=\"item cursor-pointer TodayMealCardItem\" ngx-hm-carousel-item *ngFor=\"let item of Meals\">\r\n          <div class=\"img MealImage\" [style.backgroundImage]='FilterCarousalImages(item.Image)' [routerLink]=\"[ '/cs/diet' ]\" matRipple>\r\n            <div class=\"MealDetails\" >\r\n              <strong>{{item.MealTypeName}}</strong>\r\n              <small>{{ item.Title }} </small>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <ng-template #infiniteContainer></ng-template>\r\n      </section>\r\n\r\n      <ng-template #carouselContent let-item let-i=\"index\">\r\n        <article class=\"item cursor-pointer\">\r\n          <div class=\"img\" [style.backgroundImage]=\"'url(/assets/images/logo.png)'\"></div>\r\n        </article>\r\n      </ng-template>\r\n\r\n      <ng-template #carouselPrev>\r\n        <div class=\"click-area\">\r\n          <i class=\"material-icons\">keyboard_arrow_left</i>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template #carouselNext>\r\n        <div class=\"click-area\">\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template #carouselDot let-model>\r\n        <div class=\"ball bg-accent\" [class.visible]=\"model.index === model.currentIndex\"></div>\r\n      </ng-template>\r\n    </ngx-hm-carousel>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"GoalCard\">\r\n    <div class=\"GoalGraph\">\r\n      <canvas\r\n        baseChart\r\n        width=\"300\"\r\n        height=\"200\"\r\n        [datasets]=\"lineChartData\"\r\n        [labels]=\"lineChartLabels\"\r\n        [options]=\"lineChartOptions\"\r\n        [colors]=\"lineChartColors\"\r\n        [legend]=\"lineChartLegend\"\r\n        [chartType]=\"lineChartType\"\r\n      ></canvas>\r\n    </div>\r\n    <div class=\"GoalTarget\">\r\n      <small>Your Target </small>\r\n      <strong>70 KG</strong>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n<div class=\"UserDashBoardBottom\">\r\n  <mat-card class=\"VideoPlayerCard\">\r\n    <div class=\"VideoPlayerCardTop\">\r\n      <mat-card-title>\r\n        VIDEO OF THE DAY\r\n      </mat-card-title>\r\n\r\n      <div class=\"VideoPageLink\">\r\n        <!-- <button mat-stroked-button>View All</button> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"VideoPlayer\">\r\n  <vg-player>\r\n    <vg-overlay-play></vg-overlay-play>\r\n    <vg-buffering></vg-buffering>\r\n\r\n\r\n\r\n    <vg-controls>\r\n        <vg-play-pause></vg-play-pause>\r\n\r\n\r\n        <vg-mute></vg-mute>\r\n        <vg-volume></vg-volume>\r\n\r\n        <vg-fullscreen></vg-fullscreen>\r\n    </vg-controls>\r\n\r\n    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" crossorigin poster=\"assets/images/recipe-placeholder.jpg\">\r\n        <source src=\"https://service.dietec.net/Upload/kw_br.mp4\" type=\"video/mp4\">\r\n    </video>\r\n</vg-player>\r\n    </div>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"AdviceCard\">\r\n    <mat-card-title>ADVICE OF THE DAY</mat-card-title>\r\n    <mat-card-content>\r\n      <p>\r\n        Using smaller plates can help you eat smaller portions. By using smaller plates and bowls,\r\n        you may be able to gradually get used to eating smaller portions without going hungry.\r\n        It takes about 20 minutes for the stomach to tell the brain it's full,so eat slowly and stop eating\r\n        before you feel full.\r\n      </p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <mat-card class=\"MailCard\" matRipple [routerLink]=\"[ '/cs/mails' ]\">\r\n    <mat-card-content>\r\n      <button mat-icon-button  class=\"GradientIconButton\" >\r\n        <mat-icon aria-label=\"Scroll  to Fill more\">mail</mat-icon>\r\n       \r\n      </button>\r\n      <p>Mail</p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <mat-card class=\"UploadReportCard\" matRipple [routerLink]=\"[ '/cs/report' ]\">\r\n    <mat-card-content>\r\n      <button mat-icon-button  class=\"GradientIconButton\" >\r\n        <mat-icon aria-label=\"Scroll  to Fill more\">cloud_upload</mat-icon>\r\n       \r\n      </button>\r\n      <p>Upload Report</p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"HealthCalcCard\">\r\n    <mat-card-title>Live Healthy</mat-card-title>\r\n    <button mat-icon-button   class=\"ScrollBottom\" (click)=\"ScrollToBottom('BtnSubmit')\">\r\n      <mat-icon aria-label=\"Scroll  to Fill more\">keyboard_arrow_down</mat-icon>\r\n    </button>\r\n\r\n    <mat-card-subtitle>let us know about your latest health status</mat-card-subtitle>\r\n    <mat-card-content>\r\n      <div class=\"HealthInputs unicorn-light-theme\">\r\n        <div class=\"InputGroupRow\" fxFlex fxLayout=\"row wrap\"  fxLayoutGap=\"10px\">\r\n          <!-- 1 -->\r\n          <div fxFlex=\"calc(50% - 10px)\">\r\n            <mat-form-field class=\"w-100 \">\r\n              <mat-label>Height</mat-label>\r\n              <input matInput placeholder=\"Height\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 1 -->\r\n          <div fxFlex=\"50\">\r\n            <mat-form-field class=\"w-100\">\r\n              <mat-label>Weight</mat-label>\r\n              <input matInput placeholder=\"Weight\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"InputGroupRow\" fxFlex fxLayout=\"row wrap\"  fxLayoutGap=\"10px\">\r\n          <!-- 1 -->\r\n          <div fxFlex=\"calc(50% - 10px)\">\r\n            <mat-form-field class=\"w-100\">\r\n              <mat-label>Weight</mat-label>\r\n              <input matInput placeholder=\"Weight\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 1 -->\r\n          <div fxFlex=\"50\">\r\n            <mat-form-field class=\"w-100\">\r\n              <mat-label>Cholesterol</mat-label>\r\n              <input matInput placeholder=\"Cholesterol\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"InputGroupRow\" fxFlex fxLayout=\"row wrap\"  fxLayoutGap=\"10px\">\r\n          <!-- 1 -->\r\n          <div fxFlex=\"calc(50% - 10px)\">\r\n            <mat-form-field class=\"w-100\">\r\n              <mat-label>Sugar Level</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 1 -->\r\n          <div fxFlex=\"50\">\r\n            <mat-form-field class=\"w-100\">\r\n              <mat-label>Temprature</mat-label>\r\n\r\n              <input matInput placeholder=\"Temprature\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button mat-flat-button class=\"HealthSubmitButton\" id=\"BtnSubmit\">Submit</button>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customer/customer-dashboard/customer-dashboard.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/customer/customer-dashboard/customer-dashboard.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".UserDashBoardTop {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  margin: 0 auto; }\n\n.ActivityCard {\n  width: 20%;\n  padding: 2% 2%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 8px; }\n\n.ActivityIConAndCount {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  margin: 0 auto;\n  vertical-align: middle; }\n\n.ActivityICon {\n  width: 30%;\n  vertical-align: middle; }\n\n.ActivityICon img {\n  width: 100%;\n  max-width: 100%; }\n\n.ActivityCount {\n  font-size: 40px;\n  color: #05353a;\n  font-weight: bolder;\n  letter-spacing: 0;\n  padding-left: 5%;\n  width: 65%;\n  vertical-align: middle;\n  margin: auto; }\n\n.ActivityCount small {\n  font-size: 16px;\n  color: #05353a;\n  font-weight: lighter;\n  display: block;\n  padding-left: 5px; }\n\n.ActivityResult {\n  width: 100%;\n  display: block;\n  border-radius: 50px;\n  background-image: linear-gradient(to right, #00879d, #0099a2, #00aa9c, #00b98c, #4dc775);\n  box-shadow: rgba(26, 124, 58, 0.2) 1px 8px 15px;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px 0;\n  margin-top: 20px; }\n\n.ActivityResult small {\n  font-size: 16px;\n  display: inline-block;\n  vertical-align: middle;\n  padding-right: 5px; }\n\n.ActivityResult strong {\n  font-size: 28px;\n  display: inline-block;\n  vertical-align: middle; }\n\n.ChefCard {\n  width: 25%;\n  padding: 0;\n  margin: 0 1%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden; }\n\n.ChefImage {\n  z-index: 5;\n  top: 0;\n  display: block;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%; }\n\n.ChefImage:after {\n  z-index: 6;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  content: '';\n  background: #121212;\n  background: linear-gradient(0deg, rgba(18, 18, 18, 0.5) 0%, rgba(19, 19, 19, 0.2) 20%, rgba(19, 19, 19, 0) 100%);\n  left: 0; }\n\n.ChefImage img {\n  min-width: 100%;\n  display: block;\n  position: absolute;\n  min-height: 100%;\n  max-height: none;\n  top: 0; }\n\n.BtnChefSelect {\n  width: 100px;\n  display: block;\n  border-radius: 50px;\n  background-image: linear-gradient(to right, #00879d, #0099a2, #00aa9c, #00b98c, #4dc775);\n  box-shadow: rgba(26, 124, 58, 0.2) 1px 8px 15px;\n  color: #ffffff;\n  text-align: center;\n  padding: 7px;\n  margin-top: 5px;\n  font-size: 15px;\n  line-height: 15px; }\n\n.ChefDetails {\n  position: absolute;\n  height: 40px;\n  z-index: 10;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 10% 10px;\n  bottom: 17%;\n  left: 0;\n  color: #fff;\n  font-size: 16px; }\n\n.ChefDetails small {\n  display: block;\n  height: auto; }\n\n.ChefDetails strong {\n  color: #fff;\n  font-size: 26px; }\n\n.TodayMealCard {\n  width: 22%;\n  padding: 0;\n  margin-right: 1%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 10px;\n  overflow: hidden; }\n\n.TodayMealCardItem {\n  display: inline-block;\n  position: relative;\n  height: 100%;\n  width: 100%; }\n\n.MealImage {\n  z-index: 5;\n  top: 0;\n  display: block;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center; }\n\n.MealImage:after {\n  z-index: 6;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  content: '';\n  background: #004c55;\n  background: linear-gradient(0deg, #004c55 0%, rgba(0, 76, 85, 0) 100%);\n  left: 0; }\n\n.MealDetails {\n  position: absolute;\n  height: 60px;\n  z-index: 10;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 0% 10px;\n  bottom: calc(20% + 30px);\n  left: 0;\n  color: #fff;\n  text-align: center;\n  font-size: 16px;\n  cursor: pointer; }\n\n.MealDetails small {\n  display: block;\n  height: auto;\n  font-size: 18px; }\n\n.MealDetails strong {\n  color: #fff;\n  font-size: 30px; }\n\n.carousel .content {\n  display: flex;\n  height: 100%; }\n\n.carousel .ball {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid white;\n  opacity: 0.5;\n  margin-bottom: 0; }\n\n.carousel .ball.visible {\n    opacity: 1; }\n\n.carousel .click-area {\n  width: 50px;\n  text-align: center; }\n\n.carousel .click-area i {\n    font-size: 3em;\n    color: #fff; }\n\n.GoalCard {\n  width: 24%;\n  padding: 1% 1%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: flex;\n  flex-flow: row wrap;\n  border-radius: 8px; }\n\n.GoalGraph {\n  width: 70%; }\n\n.GoalTarget {\n  width: 30%;\n  background-image: linear-gradient(to right, #00879d, #0099a2, #00aa9c, #00b98c, #4dc775);\n  box-shadow: rgba(26, 124, 58, 0.2) 1px 8px 15px;\n  color: #fff;\n  margin: auto auto;\n  display: inline-block;\n  vertical-align: top;\n  border-radius: 10px;\n  text-align: center;\n  padding: 10px 0;\n  margin-top: 8%;\n  height: 35px; }\n\n.GoalTarget small {\n  display: block; }\n\n.UserDashBoardBottom {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  margin: 20px auto 0; }\n\n.VideoPlayerCard {\n  width: 42%;\n  padding: 2% 2%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: block;\n  border-radius: 10px; }\n\n.VideoPlayerCardTop {\n  position: relative;\n  margin-bottom: 25px;\n  color: #05353a; }\n\n.VideoPlayerCardTop .mat-card-title {\n  font-size: 26px;\n  font-weight: bold;\n  color: #05353a; }\n\n.VideoPageLink {\n  position: absolute;\n  top: 0;\n  right: 0; }\n\n.VideoPlayer {\n  width: 100%;\n  max-width: 100%;\n  display: block; }\n\nvideo {\n  width: 100%;\n  height: 100%; }\n\n.AdviceCard {\n  width: 22%;\n  background: url('advice-bg.jpg') #fff;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  padding: 2% 2%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  margin-left: 1%;\n  border-radius: 10px;\n  color: #05353a; }\n\n.AdviceCard .mat-card-title {\n  margin-bottom: 25px;\n  font-size: 26px;\n  font-weight: bold;\n  color: #05353a; }\n\n.AdviceCard p {\n  font-size: 18px;\n  line-height: 24px;\n  max-height: 370px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: justify;\n  font-size: #606060; }\n\n.HealthCalcCard {\n  background: #4dc775;\n  background: linear-gradient(135deg, #4dc775 0%, #00879d 100%);\n  box-shadow: rgba(26, 124, 58, 0.2) 1px 8px 15px;\n  width: 22%;\n  padding: 2% 2%;\n  margin-left: 1%;\n  border-radius: 10px;\n  color: #fff !important; }\n\n.HealthCalcCard .mat-card-title {\n  margin-bottom: 5px;\n  font-size: 29px;\n  font-weight: bold;\n  margin-bottom: 25px;\n  color: #fff;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.HealthCalcCard .mat-card-subtitle {\n  color: #fff;\n  opacity: 0.7;\n  font-size: 18px;\n  font-weight: lighter; }\n\n.HealthInputs {\n  vertical-align: middle;\n  margin: auto;\n  font-size: 18px; }\n\n.HealthInputs {\n  vertical-align: middle;\n  margin: auto;\n  color: #fff !important; }\n\n.InputGroupRow {\n  margin-bottom: 0px; }\n\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: #fff !important; }\n\n.HealthSubmitButton {\n  background: #ffef00;\n  background: linear-gradient(90deg, rgba(255, 239, 0, 0.471026) 0%, rgba(0, 135, 157, 0.448617) 100%);\n  width: 100%;\n  position: absolute;\n  z-index: 99;\n  left: 0;\n  padding: 5% 0;\n  bottom: 0;\n  color: #fff;\n  font-size: 22px;\n  border-radius: 0; }\n\n.aniT {\n  transition: all 1s linear; }\n\n.transition {\n  transition: all 0.3s ease-in-out !important; }\n\n.ScrollBottom {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  border: 1px solid #4dc775;\n  display: none; }\n\n.MailCard, .UploadReportCard {\n  display: none; }\n\n@media screen and (max-width: 600px) {\n  .ActivityCard {\n    width: 49%;\n    box-sizing: border-box;\n    margin: 0;\n    margin: 0 1% 2% 0; }\n  .ChefCard {\n    width: 49%;\n    margin: 0;\n    margin: 0 0 2% 1%; }\n  .ActivityCount {\n    font-size: 21px; }\n  .ActivityResult {\n    font-size: 14px;\n    line-height: 14px;\n    padding: 6px 0;\n    margin-top: 2px; }\n  .ActivityResult strong {\n    font-size: 17px; }\n  .ActivityResult small {\n    font-size: 13px; }\n  .TodayMealCard {\n    width: 49%;\n    box-sizing: border-box;\n    margin: 0;\n    margin: 0 1% 2% 0; }\n  .MealDetails strong {\n    font-size: 20px; }\n  .MealDetails small {\n    font-size: 16px; }\n  .carousel .click-area i {\n    margin-top: 0px !important;\n    font-size: 20px; }\n  .MealDetails {\n    bottom: 0; }\n  .GoalCard {\n    width: 49%;\n    margin: 0;\n    margin: 0 0 2% 1%;\n    box-sizing: border-box;\n    padding: 0; }\n  .GoalGraph {\n    width: 100%;\n    display: none;\n    font-size: 10px; }\n  .GoalCard canvas {\n    height: 50px !important; }\n  .GoalTarget {\n    padding: 15px 0;\n    width: 100%;\n    margin-top: 0; }\n  .UserDashBoardBottom {\n    margin-top: 0; }\n  .VideoPlayerCard {\n    width: 49%;\n    box-sizing: border-box;\n    margin: 0;\n    margin: 0 1% 2% 0; }\n  .vg-controls {\n    display: none; }\n  .AdviceCard {\n    width: 49%;\n    box-sizing: border-box;\n    margin: 0;\n    margin: 0 0 2% 1%; }\n  .VideoPlayerCardTop .mat-card-title {\n    font-size: 15px;\n    text-align: center;\n    padding-top: 0px; }\n  .AdviceCard .mat-card-title {\n    font-size: 15px;\n    text-align: center;\n    padding-top: 0px;\n    margin-bottom: 8px; }\n  .AdviceCard p {\n    max-height: 60px;\n    font-size: 12px;\n    line-height: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .GradientIconButton {\n    background: #4dc775;\n    background: linear-gradient(135deg, #4dc775 0%, #00879d 100%);\n    color: #fff; }\n  .MailCard {\n    box-shadow: rgba(26, 124, 58, 0.2) 1px 8px 15px;\n    width: 49%;\n    box-sizing: border-box;\n    margin: 0;\n    margin: 0 1% 2% 0;\n    display: block;\n    border-radius: 8px;\n    padding: 0;\n    height: 60px;\n    overflow: hidden; }\n  .MailCard .mat-card-content {\n    display: flex;\n    flex-flow: row wrap;\n    box-sizing: border-box;\n    padding: 10px;\n    overflow: hidden; }\n  .MailCard p {\n    font-size: 16px;\n    font-weight: bold;\n    margin: auto 0;\n    margin-left: 10px;\n    color: #05353a; }\n  .UploadReportCard {\n    box-shadow: rgba(26, 124, 58, 0.2) 1px 8px 15px;\n    width: 49%;\n    box-sizing: border-box;\n    margin: 0;\n    margin: 0 0 2% 1%;\n    display: block;\n    border-radius: 8px;\n    padding: 0;\n    height: 60px;\n    overflow: hidden;\n    outline: none !important; }\n  .UploadReportCard .mat-card-content {\n    display: flex;\n    flex-flow: row wrap;\n    box-sizing: border-box;\n    padding: 10px;\n    overflow: hidden; }\n  .UploadReportCard p {\n    font-size: 16px;\n    font-weight: bold;\n    margin: auto 0;\n    margin-left: 10px;\n    color: #05353a; }\n  .VideoPlayerCardTop {\n    margin-bottom: 0; }\n  .HealthCalcCard {\n    padding: 5% 5%;\n    width: 100%;\n    margin: 0 auto; }\n  .HealthCalcCard .mat-card-title {\n    margin-bottom: 20px;\n    font-size: 28px;\n    padding-top: 10px; }\n  .HealthCalcCard .mat-card-subtitle {\n    margin-bottom: 0;\n    font-size: 17px; }\n  .HealthInputs {\n    margin-bottom: 55px; }\n  .HealthSubmitButton {\n    padding: 2% 0; }\n  .ScrollBottom {\n    display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItZGFzaGJvYXJkL0Y6XFxzaGFmZWVxJ3NcXGRlaXR0ZWNcXFdFQlxcQURNSU4vc3JjXFxhcHBcXGN1c3RvbWVyXFxjdXN0b21lci1kYXNoYm9hcmRcXGN1c3RvbWVyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGNBQWM7RUFDZCxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHdGQUF3RjtFQUN4RiwrQ0FBK0M7RUFDL0MsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWiww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QWdCLEVBQUE7RUFHbEI7SUFFRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWE7SUFDYixpQkFBaUI7SUFDakIsY0FBYyxFQUFBO0VBSWhCO0lBQ0UsZ0JBQWdCLEVBQUE7RUFHbEI7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWMsRUFBQTtFQUVoQjtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFFbkI7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0VBRWpCO0lBQ0UsbUJBQ0YsRUFBQTtFQUNBO0lBQ0UsYUFBYSxFQUFBO0VBRWY7SUFDRSxjQUFjLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWRhc2hib2FyZC9jdXN0b21lci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVXNlckRhc2hCb2FyZFRvcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5BY3Rpdml0eUNhcmQge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgcGFkZGluZzogMiUgMiU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDFweCAycHggM3B4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4uQWN0aXZpdHlJQ29uQW5kQ291bnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5BY3Rpdml0eUlDb24ge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uQWN0aXZpdHlJQ29uIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5BY3Rpdml0eUNvdW50IHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6ICMwNTM1M2E7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5BY3Rpdml0eUNvdW50IHNtYWxsIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMwNTM1M2E7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLkFjdGl2aXR5UmVzdWx0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwODc5ZCwgIzAwOTlhMiwgIzAwYWE5YywgIzAwYjk4YywgIzRkYzc3NSk7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgyNiwgMTI0LCA1OCwgMC4yKSAxcHggOHB4IDE1cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5BY3Rpdml0eVJlc3VsdCBzbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4uQWN0aXZpdHlSZXN1bHQgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLkNoZWZDYXJkIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwIDElO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAxcHggMnB4IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLkNoZWZJbWFnZSB7XHJcbiAgei1pbmRleDogNTtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLkNoZWZJbWFnZTphZnRlciB7XHJcbiAgei1pbmRleDogNjtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE4LCAxOCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTgsIDE4LCAxOCwgMC41KSAwJSwgcmdiYSgxOSwgMTksIDE5LCAwLjIpIDIwJSwgcmdiYSgxOSwgMTksIDE5LCAwKSAxMDAlKTtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5DaGVmSW1hZ2UgaW1nIHtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogbm9uZTtcclxuICB0b3A6IDA7XHJcbn1cclxuLkJ0bkNoZWZTZWxlY3R7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA4NzlkLCAjMDA5OWEyLCAjMDBhYTljLCAjMDBiOThjLCAjNGRjNzc1KTtcclxuICBib3gtc2hhZG93OiByZ2JhKDI2LCAxMjQsIDU4LCAwLjIpIDFweCA4cHggMTVweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzo3cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICBcclxufVxyXG4uQ2hlZkRldGFpbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxMHB4IDEwJSAxMHB4O1xyXG4gIGJvdHRvbTogMTclO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uQ2hlZkRldGFpbHMgc21hbGwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLkNoZWZEZXRhaWxzIHN0cm9uZyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4uVG9kYXlNZWFsQ2FyZCB7XHJcbiAgd2lkdGg6IDIyJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDFweCAycHggM3B4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uVG9kYXlNZWFsQ2FyZEl0ZW0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uTWVhbEltYWdlIHtcclxuICB6LWluZGV4OiA1O1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4uTWVhbEltYWdlOmFmdGVyIHtcclxuICB6LWluZGV4OiA2O1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCA3NiwgODUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDc2LCA4NSwgMSkgMCUsIHJnYmEoMCwgNzYsIDg1LCAwKSAxMDAlKTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uTWVhbERldGFpbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxMHB4IDAlIDEwcHg7XHJcbiAgYm90dG9tOiBjYWxjKDIwJSArIDMwcHgpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5NZWFsRGV0YWlscyBzbWFsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLk1lYWxEZXRhaWxzIHN0cm9uZyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYmFsbCB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAmLnZpc2libGUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNsaWNrLWFyZWEge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5Hb2FsQ2FyZCB7XHJcbiAgd2lkdGg6IDI0JTtcclxuICBwYWRkaW5nOiAxJSAxJTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMXB4IDJweCAzcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5Hb2FsR3JhcGgge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuLkdvYWxUYXJnZXQge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA4NzlkLCAjMDA5OWEyLCAjMDBhYTljLCAjMDBiOThjLCAjNGRjNzc1KTtcclxuICBib3gtc2hhZG93OiByZ2JhKDI2LCAxMjQsIDU4LCAwLjIpIDFweCA4cHggMTVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IGF1dG8gYXV0bztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgbWFyZ2luLXRvcDogOCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4uR29hbFRhcmdldCBzbWFsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5Vc2VyRGFzaEJvYXJkQm90dG9tIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcclxufVxyXG4uVmlkZW9QbGF5ZXJDYXJkIHtcclxuICB3aWR0aDogNDIlO1xyXG4gIHBhZGRpbmc6IDIlIDIlO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAxcHggMnB4IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLlZpZGVvUGxheWVyQ2FyZFRvcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgY29sb3I6ICMwNTM1M2E7XHJcbn1cclxuLlZpZGVvUGxheWVyQ2FyZFRvcCAubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzA1MzUzYTtcclxufVxyXG5cclxuLlZpZGVvUGFnZUxpbmsge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5WaWRlb1BsYXllciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbnZpZGVvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLkFkdmljZUNhcmQge1xyXG4gIHdpZHRoOiAyMiU7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWR2aWNlLWJnLmpwZykgI2ZmZjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgcGFkZGluZzogMiUgMiU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDFweCAycHggM3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiAjMDUzNTNhO1xyXG59XHJcbi5BZHZpY2VDYXJkIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMwNTM1M2E7XHJcbn1cclxuLkFkdmljZUNhcmQgcCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1heC1oZWlnaHQ6IDM3MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LXNpemU6ICM2MDYwNjA7XHJcbn1cclxuLkhlYWx0aENhbGNDYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNzcsIDE5OSwgMTE3KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDc3LCAxOTksIDExNywgMSkgMCUsIHJnYmEoMCwgMTM1LCAxNTcsIDEpIDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMjYsIDEyNCwgNTgsIDAuMikgMXB4IDhweCAxNXB4O1xyXG4gIHdpZHRoOiAyMiU7XHJcbiAgcGFkZGluZzogMiUgMiU7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uSGVhbHRoQ2FsY0NhcmQgLm1hdC1jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uSGVhbHRoQ2FsY0NhcmQgLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcbi5IZWFsdGhJbnB1dHMge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uSGVhbHRoSW5wdXRzIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5JbnB1dEdyb3VwUm93IHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uSGVhbHRoU3VibWl0QnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMzksIDApO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDIzOSwgMCwgMC40NzEwMjU5MTAzNjQxNDU2NSkgMCUsIHJnYmEoMCwgMTM1LCAxNTcsIDAuNDQ4NjE2OTQ2Nzc4NzExNDUpIDEwMCUpO1xyXG4gIC8vIGJveC1zaGFkb3c6IHJnYmEoMjYsIDEyNCwgNTgsIDAuMikgMXB4IC04cHggMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nOiA1JSAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmFuaVQge1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBsaW5lYXI7XHJcbn1cclxuXHJcbi50cmFuc2l0aW9uIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG59XHJcbi5TY3JvbGxCb3R0b217XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig3NywgMTk5LCAxMTcpO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiAgLk1haWxDYXJkICwgLlVwbG9hZFJlcG9ydENhcmR7XHJcbmRpc3BsYXk6IG5vbmU7fVxyXG4vLyBSU1BPTlNJVkUgQ1NTIEhFUkVcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAuQWN0aXZpdHlDYXJkIHtcclxuICAgIHdpZHRoOiA0OSUgO1xyXG4gICAgYm94LXNpemluZzogIGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW46IDAgMSUgMiUgMDtcclxufVxyXG4uQ2hlZkNhcmQge1xyXG4gIHdpZHRoOiA0OSU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbjogMCAwIDIlIDElO1xyXG59XHJcbi5BY3Rpdml0eUNvdW50IHtcclxuICBmb250LXNpemU6IDIxcHg7fVxyXG4gIC5BY3Rpdml0eVJlc3VsdHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgfVxyXG4gIC5BY3Rpdml0eVJlc3VsdCBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O31cclxuICAgIC5BY3Rpdml0eVJlc3VsdCBzbWFsbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDt9XHJcbiAgICAgIFxyXG4gICAgICAuVG9kYXlNZWFsQ2FyZCB7XHJcbiAgICB3aWR0aDogNDklIDtcclxuICAgIGJveC1zaXppbmc6ICBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luOiAwIDElIDIlIDA7XHJcbn1cclxuXHJcbi5NZWFsRGV0YWlscyBzdHJvbmd7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5NZWFsRGV0YWlscyBzbWFsbHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNhcm91c2VsIC5jbGljay1hcmVhIGl7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgXHJcbiB9XHJcbiAuTWVhbERldGFpbHN7XHJcbmJvdHRvbTogMDtcclxuIH1cclxuXHJcbi5Hb2FsQ2FyZCB7XHJcbiAgd2lkdGg6IDQ5JTtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luOiAwIDAgMiUgMSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuLkdvYWxHcmFwaHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uR29hbENhcmQgY2FudmFze1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5Hb2FsVGFyZ2V0e1xyXG5wYWRkaW5nOiAxNXB4IDA7XHJcbndpZHRoOiAxMDAlO1xyXG5tYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5cclxuLlVzZXJEYXNoQm9hcmRCb3R0b217XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4uVmlkZW9QbGF5ZXJDYXJke1xyXG4gIHdpZHRoOiA0OSUgO1xyXG4gICAgYm94LXNpemluZzogIGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW46IDAgMSUgMiUgMDtcclxufVxyXG4udmctY29udHJvbHN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uQWR2aWNlQ2FyZHtcclxuICB3aWR0aDogNDklIDtcclxuICAgIGJveC1zaXppbmc6ICBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMiUgMSU7XHJcbn1cclxuLlZpZGVvUGxheWVyQ2FyZFRvcCAubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG4uQWR2aWNlQ2FyZCAubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuLkFkdmljZUNhcmQgcHtcclxuICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIFxyXG59XHJcbi8vIENPTU1PTlxyXG5cclxuXHJcblxyXG4uR3JhZGllbnRJY29uQnV0dG9ue1xyXG4gIGJhY2tncm91bmQ6IHJnYig3NywgMTk5LCAxMTcpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNzcsIDE5OSwgMTE3LCAxKSAwJSwgcmdiYSgwLCAxMzUsIDE1NywgMSkgMTAwJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbn1cclxuLy8gQ09NTU9OXHJcbi5NYWlsQ2FyZHtcclxuXHJcbiAgYm94LXNoYWRvdzogcmdiYSgyNiwgMTI0LCA1OCwgMC4yKSAxcHggOHB4IDE1cHg7XHJcbiAgd2lkdGg6IDQ5JSA7XHJcbiAgYm94LXNpemluZzogIGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbjogMCAxJSAyJSAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG4gIFxyXG59XHJcbi5NYWlsQ2FyZCAubWF0LWNhcmQtY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5NYWlsQ2FyZCBwe1xyXG5cclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOmF1dG8gMDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBjb2xvcjogIzA1MzUzYTtcclxufVxyXG5cclxuXHJcbi5VcGxvYWRSZXBvcnRDYXJke1xyXG5cclxuICBib3gtc2hhZG93OiByZ2JhKDI2LCAxMjQsIDU4LCAwLjIpIDFweCA4cHggMTVweDtcclxuICB3aWR0aDogNDklIDtcclxuICBib3gtc2l6aW5nOiAgYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luOiAwIDAgMiUgMSU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIFxyXG59XHJcbi5VcGxvYWRSZXBvcnRDYXJkIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLlVwbG9hZFJlcG9ydENhcmQgcHtcclxuXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjphdXRvIDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6ICMwNTM1M2E7XHJcbn1cclxuXHJcblxyXG4uVmlkZW9QbGF5ZXJDYXJkVG9we1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5IZWFsdGhDYWxjQ2FyZHtcclxuICBwYWRkaW5nOiA1JSA1JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uSGVhbHRoQ2FsY0NhcmQgLm1hdC1jYXJkLXRpdGxle1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5IZWFsdGhDYWxjQ2FyZCAubWF0LWNhcmQtc3VidGl0bGV7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLkhlYWx0aElucHV0c3tcclxuICBtYXJnaW4tYm90dG9tOiA1NXB4XHJcbn1cclxuLkhlYWx0aFN1Ym1pdEJ1dHRvbntcclxuICBwYWRkaW5nOiAyJSAwO1xyXG59XHJcbi5TY3JvbGxCb3R0b217XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/customer/customer-dashboard/customer-dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/customer/customer-dashboard/customer-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDashboardComponent", function() { return CustomerDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-dashboard.service */ "./src/app/customer/customer-dashboard/customer-dashboard.service.ts");
/* harmony import */ var src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/commmon */ "./src/app/shared/commmon/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerDashboardComponent = /** @class */ (function () {
    function CustomerDashboardComponent(service, util) {
        this.service = service;
        this.util = util;
        this.Chef = { ChefName: '', ProfilePic: '' };
        this.Meals = [];
        this.DashBoardData = {
            Chef: {},
            Food: []
        };
        this.follow = true;
        this.enablePan = true;
        this.index = 0;
        this.speed = 3000;
        this.infinite = true;
        this.direction = 'right';
        this.directionToggle = true;
        this.autoplay = true;
        this.avatars = [
            { url: '/assets/images/meal.png', title: 'Breakfast' },
            { url: 'https://images-gmi-pmc.edge-generalmills.com/4e0cedae-87fe-4fa1-a066-f332402eab4d.jpg', title: 'Lunch' },
            { url: 'https://s.hswstatic.com/gif/classic-snacks-pictures-1a-622x415.jpg', title: 'Snacks' },
            { url: 'https://i.ndtvimg.com/i/2016-07/tofu-rice-625_625x350_71467969111.jpg', title: 'Dinner' }
        ];
        // lineChart
        this.lineChartData = [{ data: [80, 81, 82, 79, 78, 77, 75], label: 'Weight' }];
        this.lineChartLabels = [
            '20 DEC 2018',
            '05 JAN 2019',
            '18 JAN 2019',
            '24 JAN 2019',
            '01 FEB 2019',
            '18 FEB 2019',
            '26 FEB 2019'
        ];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                // Green
                backgroundColor: 'rgba(231,255,176,0.5)',
                borderColor: 'rgba(169,224,202,1)',
                pointBackgroundColor: 'rgba(169,224,202,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(169,224,202,.5)'
            }
        ];
        this.GetCustomerDashboardData();
    }
    CustomerDashboardComponent.prototype.openGallery = function ($event) {
        console.log($event);
    };
    CustomerDashboardComponent.prototype.switchIndex = function ($event) {
        console.log($event);
    };
    CustomerDashboardComponent.prototype.ngOnInit = function () {
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    };
    // get customer Dashboard data
    CustomerDashboardComponent.prototype.GetCustomerDashboardData = function () {
        var _this = this;
        this.service.GetCustomerDashboardData().subscribe(function (Response) {
            if (Response.Status === true) {
                _this.DashBoardData = Response.Data;
                _this.Chef = _this.DashBoardData.Chef;
                _this.Meals = _this.DashBoardData.Food;
            }
        });
    };
    // get chef profile pic
    CustomerDashboardComponent.prototype.GetImageLocation = function (filename) {
        var FinalLocation = '';
        if (filename == null) {
            FinalLocation = '/assets/images/chef-placeholder.png';
        }
        else {
            FinalLocation = this.util.base_url + filename;
        }
        return FinalLocation;
    };
    // get dish images
    CustomerDashboardComponent.prototype.FilterCarousalImages = function (filename) {
        var FinalLocation = '';
        if (filename == null) {
            FinalLocation = 'url(/assets/images/recipe-placeholder.jpg)';
        }
        else {
            FinalLocation = 'url(' + this.util.base_url + filename + ')';
        }
        return FinalLocation;
    };
    // LIVE HEALTHY
    CustomerDashboardComponent.prototype.ScrollToBottom = function (elemId) {
        var element = document.getElementById(elemId);
        element.scrollIntoView({ behavior: 'smooth' });
    };
    CustomerDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-dashboard',
            template: __webpack_require__(/*! ./customer-dashboard.component.html */ "./src/app/customer/customer-dashboard/customer-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./customer-dashboard.component.scss */ "./src/app/customer/customer-dashboard/customer-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_customer_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["CustomerDashboardService"], src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_2__["CommonVariables"]])
    ], CustomerDashboardComponent);
    return CustomerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-dashboard/customer-dashboard.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customer/customer-dashboard/customer-dashboard.module.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDashboardModule", function() { return CustomerDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _customer_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-dashboard-routing.module */ "./src/app/customer/customer-dashboard/customer-dashboard-routing.module.ts");
/* harmony import */ var _customer_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-dashboard.component */ "./src/app/customer/customer-dashboard/customer-dashboard.component.ts");
/* harmony import */ var ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-hm-carousel */ "./node_modules/ngx-hm-carousel/fesm5/ngx-hm-carousel.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var CustomerDashboardModule = /** @class */ (function () {
    function CustomerDashboardModule() {
    }
    CustomerDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _customer_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["CustomerDashboardRoutingModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_8__["NgxHmCarouselModule"],
                _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_17__["StatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                videogular2_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_3__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_4__["VgOverlayPlayModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_5__["VgBufferingModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ]
        })
    ], CustomerDashboardModule);
    return CustomerDashboardModule;
}());



/***/ }),

/***/ "./src/app/customer/customer-dashboard/customer-dashboard.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/customer/customer-dashboard/customer-dashboard.service.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDashboardService", function() { return CustomerDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/commmon */ "./src/app/shared/commmon/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerDashboardService = /** @class */ (function () {
    function CustomerDashboardService(http, util) {
        this.http = http;
        this.util = util;
    }
    // get customer dashboard
    CustomerDashboardService.prototype.GetCustomerDashboardData = function () {
        var url = this.util.GetCustomerDashboardData;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    CustomerDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_2__["CommonVariables"]])
    ], CustomerDashboardService);
    return CustomerDashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=customer-dashboard-customer-dashboard-module.js.map