(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pre-defined-dish-pre-defined-dish-module~set-food-set-food-module"],{

/***/ "./src/app/layout/dietitian/pre-defined-dish/pre-defined-dish.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/dietitian/pre-defined-dish/pre-defined-dish.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"PatientDetailMain\">\r\n  <div class=\"preDefHead\">\r\n    <mat-card-title>\r\n      Pre-defined Meals\r\n    </mat-card-title>\r\n    <hr />\r\n  </div>\r\n  <mat-card-subtitle>\r\n    {{MealTypeName}}\r\n  </mat-card-subtitle>\r\n\r\n  <div class=\"w-100 PreDefinedDishesList \">\r\n    <div class=\"DishItem\" *ngFor=\"let item of Dishes\">\r\n      <div class=\"PreDefinedImage\"><img [src]=\"GetDishImage(item.Images)\" (error)=\"img.src = 'assets/images/dish-1.jpg'\" #img></div>\r\n      <div class=\"PreDefinedDetails\" (click)=\"AddDish(item.DishId,item.Title)\">\r\n        <h3>{{item.Title}}</h3>\r\n        <p><small>Prepared by</small>{{item.ChefName==null?'Unavailable':item.ChefName}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dietitian/pre-defined-dish/pre-defined-dish.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/dietitian/pre-defined-dish/pre-defined-dish.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preDefHead {\n  padding: 20px inherit 10px; }\n\n.mat-card-title {\n  padding-bottom: 10px; }\n\nhr {\n  opacity: 0.5; }\n\n.mat-card-subtitle {\n  padding: 0px inherit;\n  font-size: 20px;\n  margin: 0; }\n\n.PreDefinedDishesList {\n  width: calc(100% - 30px);\n  position: relative;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n  text-align: left;\n  box-sizing: content-box;\n  background: #f1f1f1;\n  margin: 15px auto;\n  padding: 10px 15px 25px;\n  border-radius: 8px; }\n\n.DishItem {\n  width: calc(33% - 10px);\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 8px 15px;\n  background: rgba(255, 255, 255, 0.97);\n  margin-top: 10px;\n  font-weight: bold;\n  text-align: center;\n  display: block;\n  overflow: hidden;\n  border-radius: 8px;\n  display: flex;\n  flex-flow: row wrap;\n  position: relative;\n  justify-content: space-between; }\n\n.PreDefinedImage {\n  width: 30%;\n  border-radius: 8px;\n  overflow: hidden; }\n\n.PreDefinedImage img {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  outline: none; }\n\n.PreDefinedDetails {\n  width: calc(100% - 35%);\n  padding-left: 5%;\n  text-align: left;\n  padding-top: 15px;\n  cursor: pointer; }\n\n.PreDefinedDetails h3 {\n  font-size: 17px;\n  padding-bottom: 0;\n  margin: 0; }\n\n.PreDefinedDetails p {\n  font-size: 16px;\n  padding-top: 12px;\n  margin: 0;\n  font-weight: lighter;\n  max-height: 80px;\n  color: #999; }\n\n.PreDefinedDetails p small {\n  color: #999;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2RpZXRpdGlhbi9wcmUtZGVmaW5lZC1kaXNoL0Y6XFxzaGFmZWVxJ3NcXGRlaXR0ZWNcXFdFQlxcQURNSU4vc3JjXFxhcHBcXGxheW91dFxcZGlldGl0aWFuXFxwcmUtZGVmaW5lZC1kaXNoXFxwcmUtZGVmaW5lZC1kaXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBRXRCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixTQUFTLEVBQUE7O0FBRVg7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJDQUEyQztFQUMzQyxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsOEJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhLEVBQUE7O0FBRWY7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsU0FBUyxFQUFBOztBQUdYO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXO0VBQ1gsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2RpZXRpdGlhbi9wcmUtZGVmaW5lZC1kaXNoL3ByZS1kZWZpbmVkLWRpc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJlRGVmSGVhZCB7XHJcbiAgcGFkZGluZzogMjBweCBpbmhlcml0IDEwcHg7XHJcbn1cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5ociB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgcGFkZGluZzogMHB4IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uUHJlRGVmaW5lZERpc2hlc0xpc3Qge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxuICBwYWRkaW5nOiAxMHB4IDE1cHggMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5EaXNoSXRlbSB7XHJcbiAgd2lkdGg6IGNhbGMoMzMlIC0gMTBweCk7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDFweCA4cHggMTVweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTcpO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5QcmVEZWZpbmVkSW1hZ2Uge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLlByZURlZmluZWRJbWFnZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5QcmVEZWZpbmVkRGV0YWlscyB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1JSk7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uUHJlRGVmaW5lZERldGFpbHMgaDMge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5QcmVEZWZpbmVkRGV0YWlscyBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5QcmVEZWZpbmVkRGV0YWlscyBwIHNtYWxsIHtcclxuICBjb2xvcjogIzk5OTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/dietitian/pre-defined-dish/pre-defined-dish.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/dietitian/pre-defined-dish/pre-defined-dish.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PreDefinedDishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreDefinedDishComponent", function() { return PreDefinedDishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _set_food_set_food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../set-food/set-food.service */ "./src/app/layout/dietitian/set-food/set-food.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/commmon */ "./src/app/shared/commmon/index.ts");
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




var PreDefinedDishComponent = /** @class */ (function () {
    function PreDefinedDishComponent(service, data, bottomSheetRef, util) {
        this.service = service;
        this.data = data;
        this.bottomSheetRef = bottomSheetRef;
        this.util = util;
        this.Dishes = [];
        this.MealTypeName = '';
        this.MealTypeID = 0;
        this.MealTypeName = data.MealTypeName;
        this.MealTypeID = data.MealTypeID;
        this.GetDishByMealType(data.MealTypeID);
    }
    // GET DISHES
    PreDefinedDishComponent.prototype.GetDishByMealType = function (MealTypeID) {
        var _this = this;
        this.service.GetPredefinedDishes(MealTypeID).subscribe(function (Response) {
            if (Response.Status === true) {
                _this.Dishes = Response.Data;
            }
        });
    };
    // Add dish
    PreDefinedDishComponent.prototype.AddDish = function (DishID, Title) {
        this.bottomSheetRef.dismiss({ 'MealTypeID': this.MealTypeID, 'DishID': DishID, 'Title': Title });
    };
    // get images
    PreDefinedDishComponent.prototype.GetDishImage = function (Images) {
        var FinalUrl = '';
        if (Images.length > 0) {
            FinalUrl = this.util.base_url + Images[0].FileLocation;
        }
        else {
            FinalUrl = 'assets/images/dish-1.jpg';
        }
        return FinalUrl;
    };
    PreDefinedDishComponent.prototype.ngOnInit = function () {
    };
    PreDefinedDishComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pre-defined-dish',
            template: __webpack_require__(/*! ./pre-defined-dish.component.html */ "./src/app/layout/dietitian/pre-defined-dish/pre-defined-dish.component.html"),
            styles: [__webpack_require__(/*! ./pre-defined-dish.component.scss */ "./src/app/layout/dietitian/pre-defined-dish/pre-defined-dish.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"])),
        __metadata("design:paramtypes", [_set_food_set_food_service__WEBPACK_IMPORTED_MODULE_1__["SetFoodService"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"], src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_3__["CommonVariables"]])
    ], PreDefinedDishComponent);
    return PreDefinedDishComponent;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/set-food/set-food.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/dietitian/set-food/set-food.service.ts ***!
  \***************************************************************/
/*! exports provided: SetFoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFoodService", function() { return SetFoodService; });
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




var SetFoodService = /** @class */ (function () {
    function SetFoodService(util, http) {
        this.util = util;
        this.http = http;
    }
    //get customer data for dietitian
    SetFoodService.prototype.GetCustomerDataForDietitian = function (CustomerID) {
        var url = this.util.GetCustomerDetailsForDietitian + CustomerID;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    //get all ready to eat food items
    SetFoodService.prototype.GetAllReadyToFoods = function () {
        var url = this.util.GetAllReadyToEatableFoods;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    //get all meal types
    SetFoodService.prototype.GetAllMealTypes = function () {
        var url = this.util.GetMealTypes;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    //save customer diet
    SetFoodService.prototype.SaveCustomerDiet = function (body) {
        var url = this.util.SaveCustomerDiet;
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    //get predefined food
    SetFoodService.prototype.GetPredefinedDishes = function (MealTypeID) {
        var url = this.util.GetDishByMealType + MealTypeID;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    SetFoodService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_1__["CommonVariables"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SetFoodService);
    return SetFoodService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pre-defined-dish-pre-defined-dish-module~set-food-set-food-module.js.map