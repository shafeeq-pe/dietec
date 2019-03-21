(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-diet-view-customer-diet-view-module"],{

/***/ "./src/app/customer/customer-diet-view/customer-diet-view-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/customer/customer-diet-view/customer-diet-view-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerDietViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDietViewRoutingModule", function() { return CustomerDietViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_diet_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-diet-view.component */ "./src/app/customer/customer-diet-view/customer-diet-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _customer_diet_view_component__WEBPACK_IMPORTED_MODULE_2__["CustomerDietViewComponent"]
    }
];
var CustomerDietViewRoutingModule = /** @class */ (function () {
    function CustomerDietViewRoutingModule() {
    }
    CustomerDietViewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomerDietViewRoutingModule);
    return CustomerDietViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer/customer-diet-view/customer-diet-view.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/customer/customer-diet-view/customer-diet-view.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"DietViewPage\">\r\n  <div class=\"mb-20 TitleAndSwitch\">\r\n    <h1 class=\"mat-card-title\">MEALS PLAN</h1>\r\n    <div class=\"DateSwitchTop\">\r\n      <div class=\"MealDate\">{{DietDates.length>0?DietDates[index]:\"\"}}</div>\r\n      <div class=\"PrevNextButtons\">\r\n        <button [disabled]=\"index<1\" mat-mini-fab (click)=\"AddIndex(-1)\"><mat-icon>chevron_left</mat-icon></button>\r\n        <button [disabled]=\"index==(DietDates.length-1)\" mat-mini-fab (click)=\"AddIndex(1)\"><mat-icon>chevron_right</mat-icon></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card class=\"DietViewPageInner unicorn-light-theme\" >\r\n    <mat-tab-group backgroundColor=\"warn\" dynamicHeight>\r\n      <mat-tab *ngFor=\"let item of MealTypes\">\r\n        <ng-template mat-tab-label>\r\n          <span class={{item.MealIcon}}>{{item.MealTypeName}} </span>\r\n        </ng-template>\r\n        <mat-card class=\"TabsContents\" *ngIf=\"!(FilterDishItems(item.MealTypeId).length<1)\" >\r\n          <h3>FOOD ITEMS</h3>\r\n          <div class=\"FoodItems\">\r\n            <p *ngFor=\"let j of FilterDishItems(item.MealTypeId);last as p\"><span>{{j.Dishes}}<span [hidden]=\"p\" class=\"orseparator\">OR</span></span> </p>\r\n          </div>\r\n\r\n          <h3>RECIPES</h3>\r\n\r\n          <div class=\"RecipesFlex\">\r\n            <!-- 1 -->\r\n            <div class=\"RecipeBlock\" *ngFor=\"let item of FilterDishWithRecipe(item.MealTypeId)\" [routerLink]=\"[ '/cs/recipe/', item.DishId ]\" >\r\n              <div class=\"RecipeImage\" >\r\n                <div class=\"RecipeImageSrc\" [style.backgroundImage]=\"GetImageLocation(item.Images.length>0?item.Images[0].FileLocation:null)\"></div>\r\n              </div>\r\n              <div class=\"RecipeDetails\">\r\n                {{item.Title}}\r\n              </div>\r\n            </div>\r\n            <!-- 4 -->\r\n          </div>\r\n          <hr />\r\n          <h3>Videos</h3>\r\n          <div class=\"VideoThumbFlex\">\r\n            <!-- 1 -->\r\n            <div class=\"VideoThumbs\" *ngFor=\"let item of FilterDishVideos(item.MealTypeId)\">\r\n              <div class=\"VideoThumbsImage\" (click)=\"OpenMedia(item.FileLocation,2)\">\r\n                <div class=\"VideoThumbPlayButton\">\r\n                  <mat-icon>play_circle_filled</mat-icon>\r\n                </div>\r\n                <img src=\"assets/images/chef-placeholder.jpg\" />\r\n              </div>\r\n              <!-- <div class=\"VideoThumbsDetails\">\r\n                {{item.FileLocation}}\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customer/customer-diet-view/customer-diet-view.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/customer/customer-diet-view/customer-diet-view.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".DietViewPage {\n  width: 100%;\n  position: relative;\n  margin-bottom: 2%; }\n\n.TitleAndSwitch {\n  position: relative;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n\n.TitleAndSwitch .mat-card-title {\n  width: 250px;\n  display: block;\n  height: 30px;\n  font-weight: bold; }\n\n.DateSwitchTop {\n  width: 280px;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  padding: 0px 20px;\n  border-radius: 50px;\n  display: flex;\n  flex-flow: row wrap; }\n\n.MealDate {\n  color: #606060;\n  font-size: 22px;\n  font-weight: bold;\n  border-right: 1px solid #f1f1f1;\n  padding: 15px 10px;\n  padding-right: 10px;\n  width: 150px;\n  text-align: center; }\n\n.PrevNextButtons {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  padding: 10px;\n  width: 85px;\n  padding: 10px 0;\n  margin-left: 20px; }\n\n.DietViewPageInner {\n  padding: 0;\n  border-radius: 8px;\n  overflow: hidden; }\n\n.mat-card-title {\n  color: #05353a;\n  font-size: 35px;\n  text-transform: uppercase; }\n\n.TabsContents {\n  box-shadow: none;\n  padding: 1.8vmax 1.5vmax 1vmax; }\n\n.TabsContents h3 {\n  color: #05353a;\n  font-size: 25px;\n  text-transform: uppercase; }\n\n.TabsContents hr {\n  opacity: 0.2;\n  margin-top: 2%;\n  margin-bottom: 2%; }\n\n.mr-20 {\n  padding-right: 20px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.example-chip-list {\n  width: 100%; }\n\n.FoodItems {\n  width: 96%;\n  padding: 15px 2%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  border: 1px solid #f1f1f1;\n  border-radius: 15px;\n  display: flex;\n  flex-flow: wrap row; }\n\n.FoodItems p {\n  color: #606060;\n  font-size: 20px;\n  margin: 5px 0; }\n\n.FoodItems p .orseparator {\n  border: 2px solid #4dc775;\n  border-radius: 10px;\n  padding: 0 10px;\n  color: #4dc775;\n  font-size: 16px;\n  margin: 0px 5px; }\n\n.RecipesFlex {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  margin: 0 auto; }\n\n.RecipeBlock {\n  width: 19.2%;\n  padding: 0;\n  margin: 0 0 1%;\n  margin-right: 1%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  height: 10vmax;\n  cursor: pointer;\n  text-decoration: none; }\n\n.RecipeBlock:nth-child(5n) {\n  margin-right: 0; }\n\n.RecipeImage {\n  z-index: 5;\n  top: 0;\n  display: block;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  left: 0; }\n\n.RecipeImage:after {\n  z-index: 6;\n  top: 0;\n  content: '';\n  background: #121212;\n  background: linear-gradient(0deg, rgba(47, 76, 64, 0.9) 0%, rgba(47, 76, 64, 0.5) 50%, rgba(47, 76, 64, 0.2) 100%);\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n\n.RecipeImage .RecipeImageSrc {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-size: cover;\n  background-position: center; }\n\n.RecipeDetails {\n  position: absolute;\n  height: 40px;\n  z-index: 10;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 10% 10px;\n  bottom: 5%;\n  left: 0;\n  color: #fff;\n  font-size: 17px; }\n\n.VideoThumbFlex {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  margin: 0 auto; }\n\n.VideoThumbs {\n  width: 19.2%;\n  padding: 0;\n  margin: 0 0 1%;\n  margin-right: 1%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  text-decoration: none; }\n\n.VideoThumbPlayButton {\n  position: absolute;\n  z-index: 10;\n  color: white;\n  left: 50%;\n  top: 50%;\n  font-size: 40px;\n  margin-top: -20px;\n  margin-left: -20px; }\n\n.VideoThumbPlayButton .mat-icon {\n  font-size: 40px; }\n\n.VideoThumbs:nth-child(5n) {\n  margin-right: 0; }\n\n.VideoThumbsImage {\n  position: relative;\n  width: 100%;\n  cursor: pointer; }\n\n.VideoThumbsImage:after {\n  z-index: 6;\n  top: 0;\n  content: '';\n  background: #121212;\n  background: linear-gradient(0deg, rgba(47, 76, 64, 0.9) 0%, rgba(47, 76, 64, 0.5) 50%, rgba(47, 76, 64, 0.2) 100%);\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n\n.VideoThumbsImage img {\n  max-width: 100%;\n  display: block;\n  position: relative; }\n\n.VideoThumbsDetails {\n  position: relative;\n  color: #fff;\n  padding: 15px 5%;\n  background: #8bc34a;\n  width: 90%;\n  font-size: 17px; }\n\n.MediaDialogBox {\n  width: 100%;\n  max-width: 850px;\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  margin: 0;\n  position: relative; }\n\n@media (max-width: 600px) {\n  .TitleAndSwitch .mat-card-title {\n    width: 100px;\n    display: block;\n    height: 0;\n    font-weight: bold;\n    font-size: 16px; }\n  .DateSwitchTop {\n    width: 195px;\n    padding: 0 5px; }\n  .MealDate {\n    font-size: 15px;\n    padding: 14px 10px;\n    padding-right: 7px;\n    width: 90px;\n    text-align: right; }\n  .PrevNextButtons {\n    padding: 10px;\n    width: 81px;\n    padding: 2px 0;\n    margin-left: 5px; }\n  .FoodItems {\n    width: 90%;\n    padding: 10px 5%; }\n  .TabsContents h3 {\n    font-size: 18px;\n    padding-bottom: 0;\n    margin-bottom: 6px; }\n  .RecipeBlock {\n    width: 49%;\n    height: 15vmax; }\n  .VideoThumbs {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItZGlldC12aWV3L0Y6XFxzaGFmZWVxJ3NcXGRlaXR0ZWNcXFdFQlxcQURNSU4vc3JjXFxhcHBcXGN1c3RvbWVyXFxjdXN0b21lci1kaWV0LXZpZXdcXGN1c3RvbWVyLWRpZXQtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGdC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LGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFFckI7SUFFRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLFVBQVU7SUFDVixnQkFBZ0IsRUFBQTtFQUVoQjtJQUVFLGVBQWU7SUFFZixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7RUFFdEI7SUFDQSxVQUFVO0lBQ1YsY0FBYyxFQUFBO0VBR2Q7SUFDRSxXQUFXLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWRpZXQtdmlldy9jdXN0b21lci1kaWV0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRGlldFZpZXdQYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuLlRpdGxlQW5kU3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLlRpdGxlQW5kU3dpdGNoIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uRGF0ZVN3aXRjaFRvcCB7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAxcHggMnB4IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG59XHJcbi5NZWFsRGF0ZSB7XHJcbiAgY29sb3I6ICM2MDYwNjA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLlByZXZOZXh0QnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiA4NXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLkRpZXRWaWV3UGFnZUlubmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgY29sb3I6ICMwNTM1M2E7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLlRhYnNDb250ZW50cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwYWRkaW5nOiAxLjh2bWF4IDEuNXZtYXggMXZtYXg7XHJcbn1cclxuLlRhYnNDb250ZW50cyBoMyB7XHJcbiAgY29sb3I6ICMwNTM1M2E7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5UYWJzQ29udGVudHMgaHIge1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuLm1yLTIwIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5tdC00MCB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5Gb29kSXRlbXMge1xyXG4gIHdpZHRoOiA5NiU7XHJcbiAgcGFkZGluZzogMTVweCAyJTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMXB4IDJweCAzcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiB3cmFwIHJvdztcclxufVxyXG4uRm9vZEl0ZW1zIHAge1xyXG4gIGNvbG9yOiAjNjA2MDYwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW46IDVweCAwO1xyXG59XHJcbi5Gb29kSXRlbXMgcCAub3JzZXBhcmF0b3Ige1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0ZGM3NzU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgY29sb3I6ICM0ZGM3NzU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogMHB4IDVweDtcclxufVxyXG4uUmVjaXBlc0ZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLlJlY2lwZUJsb2NrIHtcclxuICB3aWR0aDogMTkuMiU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMCAxJTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAxcHggMnB4IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDEwdm1heDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5SZWNpcGVCbG9jazpudGgtY2hpbGQoNW4pIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5SZWNpcGVJbWFnZSB7XHJcbiAgei1pbmRleDogNTtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxufVxyXG4uUmVjaXBlSW1hZ2U6YWZ0ZXIge1xyXG4gIHotaW5kZXg6IDY7XHJcbiAgdG9wOiAwO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJhY2tncm91bmQ6IHJnYigxOCwgMTgsIDE4KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg0NywgNzYsIDY0LCAwLjkpIDAlLCByZ2JhKDQ3LCA3NiwgNjQsIDAuNSkgNTAlLCByZ2JhKDQ3LCA3NiwgNjQsIDAuMikgMTAwJSk7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5SZWNpcGVJbWFnZSAuUmVjaXBlSW1hZ2VTcmMge1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IDA7XHJcbnRvcDowO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG59XHJcbi5SZWNpcGVEZXRhaWxzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMTBweCAxMCUgMTBweDtcclxuICBib3R0b206IDUlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uVmlkZW9UaHVtYkZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uVmlkZW9UaHVtYnMge1xyXG4gIHdpZHRoOiAxOS4yJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMCAwIDElO1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDFweCAycHggM3B4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uVmlkZW9UaHVtYlBsYXlCdXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbn1cclxuLlZpZGVvVGh1bWJQbGF5QnV0dG9uIC5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5WaWRlb1RodW1iczpudGgtY2hpbGQoNW4pIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLlZpZGVvVGh1bWJzSW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5WaWRlb1RodW1ic0ltYWdlOmFmdGVyIHtcclxuICB6LWluZGV4OiA2O1xyXG4gIHRvcDogMDtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTgsIDE4LCAxOCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNDcsIDc2LCA2NCwgMC45KSAwJSwgcmdiYSg0NywgNzYsIDY0LCAwLjUpIDUwJSwgcmdiYSg0NywgNzYsIDY0LCAwLjIpIDEwMCUpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uVmlkZW9UaHVtYnNJbWFnZSBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLlZpZGVvVGh1bWJzRGV0YWlscyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE1cHggNSU7XHJcbiAgYmFja2dyb3VuZDogIzhiYzM0YTtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uTWVkaWFEaWFsb2dCb3h7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXgtd2lkdGg6IDg1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gIFxyXG4gIC5UaXRsZUFuZFN3aXRjaCAubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uRGF0ZVN3aXRjaFRvcHtcclxuICB3aWR0aDogMTk1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuXHJcbi5NZWFsRGF0ZSB7XHJcblxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTRweCAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uUHJldk5leHRCdXR0b25zIHtcclxuXHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogODFweDtcclxuICBwYWRkaW5nOiAycHggMDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5Gb29kSXRlbXMge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMTBweCA1JTt9XHJcblxyXG4gIC5UYWJzQ29udGVudHMgaDN7XHJcblxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcbi5SZWNpcGVCbG9ja3tcclxud2lkdGg6IDQ5JTtcclxuaGVpZ2h0OiAxNXZtYXg7XHJcbn1cclxuXHJcbi5WaWRlb1RodW1ic3tcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/customer/customer-diet-view/customer-diet-view.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/customer/customer-diet-view/customer-diet-view.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomerDietViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDietViewComponent", function() { return CustomerDietViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/commmon */ "./src/app/shared/commmon/index.ts");
/* harmony import */ var _customer_diet_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-diet-view.service */ "./src/app/customer/customer-diet-view/customer-diet-view.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_media_view_media_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-media/view-media.component */ "./src/app/customer/view-media/view-media.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerDietViewComponent = /** @class */ (function () {
    function CustomerDietViewComponent(service, router, dialog, util) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.util = util;
        this.index = 0;
        this.DishData = [];
        this.DietDates = [];
        this.MealTypes = [];
        this.DishVideos = [];
        this.GetCustomerDietData();
    }
    CustomerDietViewComponent.prototype.ngOnInit = function () {
    };
    // add the index
    CustomerDietViewComponent.prototype.AddIndex = function (value) {
        this.index = this.index + value;
        localStorage.setItem("LastUsedIndex", this.index.toString());
    };
    // get customer dish data
    CustomerDietViewComponent.prototype.GetCustomerDietData = function () {
        var _this = this;
        this.service.GetCustomerDietData().subscribe(function (Response) {
            if (Response.Status === true) {
                var data = Response.Data;
                _this.GenerateDates(data.Food);
                _this.Dishes = data.Food;
                _this.MealTypes = data.MealTypes;
            }
        });
        var index = parseInt(localStorage.getItem("LastUsedIndex"));
        if (this.DietDates.length <= index && index) {
            this.index = index;
        }
    };
    // generate diet dates
    CustomerDietViewComponent.prototype.GenerateDates = function (DishData) {
        var _this = this;
        DishData.forEach(function (element) {
            _this.DietDates.push(element.Date);
        });
        this.DietDates = this.DietDates.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
    };
    // filter dish items
    CustomerDietViewComponent.prototype.FilterDishItems = function (MealTypeID) {
        var _this = this;
        var Dishes = [];
        this.Dishes.forEach(function (element) {
            if (element.Date === _this.DietDates[_this.index]) {
                Dishes.push(element.Dishes);
            }
        });
        var FinalArray = [];
        Dishes.forEach(function (element) {
            var Foods = '';
            element.forEach(function (element) {
                if (element.MealTypeId === MealTypeID) {
                    Foods = Foods + ',' + element.Quantity + ' ' + element.Title;
                }
            });
            if (Foods.length > 0) {
                Foods = Foods.substring(1, Foods.length);
            }
            if (Foods.length > 0) {
                FinalArray.push({ Dishes: Foods });
            }
        });
        return FinalArray;
    };
    // filter dish which have recipe
    CustomerDietViewComponent.prototype.FilterDishWithRecipe = function (MealTypeID) {
        var _this = this;
        var Dishes = [];
        this.Dishes.forEach(function (element) {
            if (element.Date === _this.DietDates[_this.index]) {
                Dishes.push(element.Dishes);
            }
        });
        var FinalArray = [];
        Dishes.forEach(function (element) {
            var Foods = '';
            element.forEach(function (element) {
                if (element.MealTypeId === MealTypeID && element.Ingredients > 0) {
                    FinalArray.push(element);
                }
            });
        });
        return FinalArray;
    };
    // show ingredients
    CustomerDietViewComponent.prototype.ShowIngredients = function (DishId) {
        this.router.navigate(['/cs/recipe/' + DishId]);
    };
    // filterDishVideos
    CustomerDietViewComponent.prototype.FilterDishVideos = function (MealTypeID) {
        var _this = this;
        var Dishes = [];
        this.Dishes.forEach(function (element) {
            if (element.Date === _this.DietDates[_this.index]) {
                Dishes.push(element.Dishes);
            }
        });
        var FinalArray = [];
        Dishes.forEach(function (element) {
            var Foods = '';
            element.forEach(function (element) {
                if (element.MealTypeId === MealTypeID && element.DishVideos.length > 0) {
                    FinalArray.push(element.DishVideos[0]);
                }
            });
        });
        return FinalArray;
    };
    // show video
    CustomerDietViewComponent.prototype.OpenMedia = function (FileLocation, SourceType) {
        var FinalUrl = this.util.base_url + FileLocation;
        var dialogRef = this.dialog.open(_view_media_view_media_component__WEBPACK_IMPORTED_MODULE_4__["ViewMediaComponent"], {
            panelClass: 'MediaDialogBox',
            disableClose: true,
            data: { 'MediaSource': FinalUrl, 'MediaType': SourceType }
        });
        // fires when dialogue closed
        dialogRef.afterClosed().subscribe(function (result) {
            //
        });
    };
    // get chef profile pic
    CustomerDietViewComponent.prototype.GetImageLocation = function (filename) {
        var FinalLocation = '';
        if (filename == null) {
            FinalLocation = 'url(/assets/images/recipe-placeholder.jpg)';
        }
        else {
            FinalLocation = 'url(' + this.util.base_url + filename + ')';
        }
        return FinalLocation;
    };
    CustomerDietViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-diet-view',
            template: __webpack_require__(/*! ./customer-diet-view.component.html */ "./src/app/customer/customer-diet-view/customer-diet-view.component.html"),
            styles: [__webpack_require__(/*! ./customer-diet-view.component.scss */ "./src/app/customer/customer-diet-view/customer-diet-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_customer_diet_view_service__WEBPACK_IMPORTED_MODULE_2__["CustomerDietViewService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_1__["CommonVariables"]])
    ], CustomerDietViewComponent);
    return CustomerDietViewComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-diet-view/customer-diet-view.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customer/customer-diet-view/customer-diet-view.module.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerDietViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDietViewModule", function() { return CustomerDietViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_diet_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-diet-view-routing.module */ "./src/app/customer/customer-diet-view/customer-diet-view-routing.module.ts");
/* harmony import */ var _customer_diet_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-diet-view.component */ "./src/app/customer/customer-diet-view/customer-diet-view.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var videogular2_ima_ads__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! videogular2/ima-ads */ "./node_modules/videogular2/ima-ads.js");
/* harmony import */ var videogular2_ima_ads__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(videogular2_ima_ads__WEBPACK_IMPORTED_MODULE_17__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var CustomerDietViewModule = /** @class */ (function () {
    function CustomerDietViewModule() {
    }
    CustomerDietViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_customer_diet_view_component__WEBPACK_IMPORTED_MODULE_3__["CustomerDietViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _customer_diet_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerDietViewRoutingModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_10__["StatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                videogular2_core__WEBPACK_IMPORTED_MODULE_13__["VgCoreModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_14__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_15__["VgOverlayPlayModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_16__["VgBufferingModule"],
                videogular2_ima_ads__WEBPACK_IMPORTED_MODULE_17__["VgImaAdsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ]
        })
    ], CustomerDietViewModule);
    return CustomerDietViewModule;
}());



/***/ }),

/***/ "./src/app/customer/customer-diet-view/customer-diet-view.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/customer/customer-diet-view/customer-diet-view.service.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerDietViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDietViewService", function() { return CustomerDietViewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/commmon */ "./src/app/shared/commmon/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var CustomerDietViewService = /** @class */ (function () {
    function CustomerDietViewService(util, http) {
        this.util = util;
        this.http = http;
    }
    // get customer diet data
    CustomerDietViewService.prototype.GetCustomerDietData = function () {
        var url = this.util.GetCustomerDishData;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    CustomerDietViewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_1__["CommonVariables"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomerDietViewService);
    return CustomerDietViewService;
}());



/***/ })

}]);
//# sourceMappingURL=customer-diet-view-customer-diet-view-module.js.map