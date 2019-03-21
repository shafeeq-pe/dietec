(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["set-food-set-food-module"],{

/***/ "./src/app/layout/dietitian/set-food/set-food-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dietitian/set-food/set-food-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SetFoodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFoodRoutingModule", function() { return SetFoodRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _set_food_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-food.component */ "./src/app/layout/dietitian/set-food/set-food.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _set_food_component__WEBPACK_IMPORTED_MODULE_2__["SetFoodComponent"]
    }
];
var SetFoodRoutingModule = /** @class */ (function () {
    function SetFoodRoutingModule() {
    }
    SetFoodRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SetFoodRoutingModule);
    return SetFoodRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/set-food/set-food.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/dietitian/set-food/set-food.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-20\"><h1 class=\"mat-card-title\">Patient Details</h1></div>\r\n<mat-card class=\"mb-20\">\r\n  <div class=\"PatientProfileTop mb-20\">\r\n    <div class=\"PatientPicture\">\r\n      <img src=\"assets/images/patient-1.png\" />\r\n    </div>\r\n    <div class=\"PatientNameDetails\">\r\n      <h2>{{ CustomerDetails.Name }}</h2>\r\n      <div class=\"GenderAgeFlex\">\r\n        <div class=\"Gender\">{{ CustomerDetails.Gender }}</div>\r\n        <div class=\"Age\">{{ CustomerDetails.Age }} years old</div>\r\n      </div>\r\n      <p>\r\n        <!-- this part needs a description about the patient by dietitian -->\r\n      </p>\r\n    </div>\r\n    <div class=\"PatientChef\">\r\n      <h6>Chef Name</h6>\r\n      <h3>{{ CustomerDetails.ChefName }}</h3>\r\n    </div>\r\n  </div>\r\n  <!-- START -->\r\n  <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n    <!-- 1 -->\r\n    <div fxFlex=\"25\">\r\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n        <mat-label>Choose a date </mat-label>\r\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Placeholder\" [(ngModel)]=\"DietDate\" />\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n    <!-- <p>\r\n      <span  *ngFor=\"let item of GetSelectedDietDates();last as p\"\r\n      (click)=\"ChangeDate(item)\">{{item}}<span [hidden]=\"p\">,</span></span>\r\n    </p> -->\r\n  </div>\r\n  <div *ngFor=\"let item of MealTypes; index as i\">\r\n    <div class=\"MealsTypeTitle\">\r\n      <h4>{{ item.MealTypeName }}</h4>\r\n      <button class=\"PreDefinedBtn\" mat-raised-button color=\"primary\" (click)=\"openBottomSheet(item.MealTypeId)\">\r\n        SELECT PRE-DEFINED MEALS\r\n      </button>\r\n    </div>\r\n    <div class=\"AddFootItemSection\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n      <!-- 1 -->\r\n      <div fxFlex=\"65\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Type food Items </mat-label>\r\n          <input\r\n            type=\"text\"\r\n            placeholder=\"Pick one\"\r\n            aria-label=\"Number\"\r\n            matInput\r\n            (click)=\"$event.target.value = ''\"\r\n            [matAutocomplete]=\"auto\"\r\n            [(ngModel)]=\"MealTypes[i].DishID\"\r\n            (input)=\"onSearchChange($event.target.value)\"\r\n          />\r\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" [displayWith]=\"DisplayFood\" autoActiveFirstOption>\r\n            <mat-option *ngFor=\"let option of FilteredFood\" [value]=\"option\">\r\n              {{ option.Title }}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n\r\n        <div *ngFor=\"let j of FilterTempDishes(item.MealTypeId); index as k\">\r\n          <div class=\"FirstAddedDataFlex\">\r\n            <p class=\"FirstAddedItem\">{{ j.DishName }}</p>\r\n            <p class=\"FirstAddedQnty\">{{ j.Quantity }}</p>\r\n            <p class=\"FirstAddedDelete\"><mat-icon (click)=\"RemoveTempDishes(j.DishId,DietDate)\">delete</mat-icon></p>\r\n          </div>\r\n        </div>\r\n        <button\r\n          class=\"Alternativebutton\"\r\n          mat-raised-button\r\n          color=\"accent\"\r\n          *ngIf=\"FilterTempDishes(item.MealTypeId).length > 0\"\r\n          (click)=\"AddAlternatives(item.MealTypeId)\"\r\n        >\r\n          Add Alternative\r\n        </button>\r\n        <div *ngFor=\"let l of FilterFinalDishes(item.MealTypeId); index as m\">\r\n          <!-- <h3>{{ l.DietDate }}</h3> -->\r\n          <div class=\"FoodGroupAdded\">\r\n            <div class=\"VeticalAlign\" *ngFor=\"let n of l.CustomerdietDetails; last as p\">\r\n              <span class=\"AddedItemAndQntyFlex\">\r\n                <span class=\"ItemAdded\">\r\n                  {{ n.DishName }}\r\n                </span>\r\n                <span class=\"QntyAdded\"> ({{ n.Quantity }})</span>\r\n              </span>\r\n              <span class=\"FoodItemSeparator\" [hidden]=\"p\">,</span>\r\n            </div>\r\n            <div mat-raised class=\"AddedItemDelete\" (click)=\"DeleteFinalDish(l.Id)\">\r\n              <mat-icon>delete</mat-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Quantity</mat-label>\r\n          <input matInput (click)=\"$event.target.select()\" placeholder=\"Quantity\" type=\"number\" [(ngModel)]=\"MealTypes[i].Quantity\" />\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"15\">\r\n        <button class=\"w-100 AddBtn\" mat-raised-button color=\"accent\" (click)=\"AddDish(i)\">ADD</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div fxFlex=\"15\">\r\n    <button class=\"w-100 AddBtn\" mat-raised-button color=\"accent\" (click)=\"SaveDiet()\">Save</button>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/layout/dietitian/set-food/set-food.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/dietitian/set-food/set-food.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".TabsContents {\n  box-shadow: none;\n  padding: 1.8vmax 1.5vmax 1vmax; }\n\n.mr-20 {\n  padding-right: 20px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.example-chip-list {\n  width: 100%; }\n\n.PatientProfileTop {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  padding: 1% 0 1.2%;\n  border-bottom: 5px #f1f1f1 solid;\n  position: relative; }\n\n.PatientPicture {\n  overflow: hidden;\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  border: 5px #f1f1f1 solid; }\n\n.PatientPicture img {\n  width: 100%;\n  max-width: 100%; }\n\n.PatientNameDetails {\n  padding-left: 25px;\n  max-width: calc(100% - 490px);\n  display: block; }\n\n.PatientNameDetails h2 {\n  font-size: 26px;\n  line-height: 26px;\n  padding: 0 0 10px;\n  margin: 0; }\n\n.PatientNameDetails p {\n  font-size: 17px;\n  line-height: 22px;\n  padding: 10px 0;\n  margin: 0;\n  max-width: 490px;\n  color: #999999; }\n\n.GenderAgeFlex {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row; }\n\n.Gender {\n  display: block;\n  font-size: 18px;\n  padding-right: 15px;\n  line-height: 18px; }\n\n.Age {\n  display: block;\n  font-size: 18px;\n  line-height: 18px;\n  border-left: 3px #333333 solid;\n  padding-left: 15px; }\n\n.PatientChef {\n  width: 200px;\n  float: right;\n  display: block;\n  align-self: right;\n  width: 288px;\n  position: absolute;\n  right: 20px;\n  bottom: 45%; }\n\n.PatientChef h6 {\n  display: block;\n  font-size: 16px;\n  line-height: 16px;\n  margin: 0;\n  padding: 0 0 10px;\n  color: #999999;\n  font-weight: normal; }\n\n.PatientChef h3 {\n  display: block;\n  font-size: 18px;\n  line-height: 16px;\n  margin: 0;\n  padding: 0; }\n\n.MealsTypeTitle {\n  background: #eaecec;\n  color: #607d8b;\n  padding: 15px 20px;\n  text-align: left;\n  position: relative;\n  margin-bottom: 20px; }\n\n.MealsTypeTitle h4 {\n  margin: 0;\n  font-size: 20px; }\n\n.PreDefinedBtn {\n  position: absolute;\n  right: 12px;\n  top: 8px; }\n\n.AddFootItemSection {\n  max-width: 1000px;\n  margin: 0 0; }\n\n.AddBtn {\n  padding: 10px 0;\n  margin-top: 5px; }\n\n.FirstAddedDataFlex {\n  width: 100%;\n  display: flex;\n  box-sizing: border-box;\n  border: 1px solid #e9ebd8;\n  background: #e9ebd8;\n  padding: 5px 5px;\n  flex-flow: row wrap;\n  margin-bottom: 2px; }\n\n.FirstAddedItem {\n  font-size: 18px;\n  display: block;\n  width: calc(100% - 80px);\n  margin: auto 0;\n  line-height: 18px;\n  padding: 0;\n  text-transform: capitalize;\n  padding-top: 3px; }\n\n.FirstAddedQnty {\n  font-size: 18px;\n  width: 40px;\n  display: block;\n  line-height: 18px;\n  padding: 0;\n  text-align: left;\n  margin: auto 0;\n  padding-top: 3px; }\n\n.FirstAddedDelete {\n  font-size: 18px;\n  width: 30px;\n  display: block;\n  line-height: 18px;\n  padding: 0;\n  text-align: center;\n  margin: auto 0;\n  cursor: pointer;\n  border-radius: 20px;\n  height: 30px;\n  color: white;\n  background: #ff6363;\n  box-sizing: border-box;\n  padding-top: 3px; }\n\n.Alternativebutton {\n  margin: 10px 0; }\n\n.FoodGroupAdded {\n  display: flex;\n  border: 1px solid #cddc39;\n  background: #f6f9e0;\n  padding: 10px;\n  margin-bottom: 5px;\n  width: auto;\n  padding-right: 60px;\n  position: relative; }\n\n.AddedItemAndQntyFlex {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 18px; }\n\n.ItemAdded {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 18px;\n  text-transform: capitalize; }\n\n.QntyAdded {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 18px; }\n\n.FoodItemSeparator {\n  padding: 0 5px; }\n\n.AddedItemDelete {\n  display: inline-block;\n  margin: 0 10px;\n  line-height: 24px;\n  background: #ff6363;\n  font-size: 16px;\n  border-radius: 50px;\n  width: 30px;\n  color: #fff;\n  text-align: center;\n  height: 30px;\n  box-sizing: border-box;\n  padding-top: 3px;\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  top: 4px; }\n\n.VeticalAlign {\n  line-height: 18px;\n  font-size: 18px;\n  margin: 0;\n  padding: 0;\n  vertical-align: middle;\n  display: inline-block;\n  height: 18px;\n  margin: auto 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2RpZXRpdGlhbi9zZXQtZm9vZC9GOlxcc2hhZmVlcSdzXFxkZWl0dGVjXFxXRUJcXEFETUlOL3NyY1xcYXBwXFxsYXlvdXRcXGRpZXRpdGlhblxcc2V0LWZvb2RcXHNldC1mb29kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsU0FBUyxFQUFBOztBQUVYO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsU0FBUztFQUNULGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBRVo7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRLEVBQUE7O0FBRVY7RUFDRSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsMEJBQTBCO0VBRTFCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUVqQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtFQUVWLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVEsRUFBQTs7QUFHVjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGlldGl0aWFuL3NldC1mb29kL3NldC1mb29kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlRhYnNDb250ZW50cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwYWRkaW5nOiAxLjh2bWF4IDEuNXZtYXggMXZtYXg7XHJcbn1cclxuLm1yLTIwIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5tdC00MCB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uUGF0aWVudFByb2ZpbGVUb3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZzogMSUgMCAxLjIlO1xyXG4gIGJvcmRlci1ib3R0b206IDVweCAjZjFmMWYxIHNvbGlkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uUGF0aWVudFBpY3R1cmUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNzVweDtcclxuICBib3JkZXI6IDVweCAjZjFmMWYxIHNvbGlkO1xyXG59XHJcbi5QYXRpZW50UGljdHVyZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uUGF0aWVudE5hbWVEZXRhaWxzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA0OTBweCk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLlBhdGllbnROYW1lRGV0YWlscyBoMiB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uUGF0aWVudE5hbWVEZXRhaWxzIHAge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1heC13aWR0aDogNDkwcHg7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbn1cclxuLkdlbmRlckFnZUZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5HZW5kZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uQWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCAjMzMzMzMzIHNvbGlkO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLlBhdGllbnRDaGVmIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGFsaWduLXNlbGY6IHJpZ2h0O1xyXG4gIHdpZHRoOiAyODhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgYm90dG9tOiA0NSU7XHJcbn1cclxuXHJcbi5QYXRpZW50Q2hlZiBoNiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwIDAgMTBweDtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5QYXRpZW50Q2hlZiBoMyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5NZWFsc1R5cGVUaXRsZSB7XHJcbiAgYmFja2dyb3VuZDogI2VhZWNlYztcclxuICBjb2xvcjogIzYwN2Q4YjtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uTWVhbHNUeXBlVGl0bGUgaDQge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLlByZURlZmluZWRCdG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTJweDtcclxuICB0b3A6IDhweDtcclxufVxyXG4uQWRkRm9vdEl0ZW1TZWN0aW9uIHtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IDAgMDtcclxufVxyXG4uQWRkQnRuIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uRmlyc3RBZGRlZERhdGFGbGV4IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWJkODtcclxuICBiYWNrZ3JvdW5kOiAjZTllYmQ4O1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuLkZpcnN0QWRkZWRJdGVtIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgLy8gdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG59XHJcbi5GaXJzdEFkZGVkUW50eSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIC8vIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG4gIHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuLkZpcnN0QWRkZWREZWxldGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIC8vIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogI2ZmNjM2MztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuLkFsdGVybmF0aXZlYnV0dG9uIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG4uRm9vZEdyb3VwQWRkZWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkZGMzOTtcclxuICBiYWNrZ3JvdW5kOiAjZjZmOWUwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5BZGRlZEl0ZW1BbmRRbnR5RmxleCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLkl0ZW1BZGRlZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uUW50eUFkZGVkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uRm9vZEl0ZW1TZXBhcmF0b3Ige1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcbi5BZGRlZEl0ZW1EZWxldGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDAgMTBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmY2MzYzO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5WZXRpY2FsQWxpZ24ge1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/dietitian/set-food/set-food.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/dietitian/set-food/set-food.component.ts ***!
  \*****************************************************************/
/*! exports provided: SetFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFoodComponent", function() { return SetFoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _set_food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-food.service */ "./src/app/layout/dietitian/set-food/set-food.service.ts");
/* harmony import */ var src_app_shared_commmon_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/commmon/dialogue/dialogue.service */ "./src/app/shared/commmon/dialogue/dialogue.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pre_defined_dish_pre_defined_dish_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pre-defined-dish/pre-defined-dish.component */ "./src/app/layout/dietitian/pre-defined-dish/pre-defined-dish.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SetFoodComponent = /** @class */ (function () {
    // constructor
    function SetFoodComponent(route, service, dialog, bottomSheet) {
        this.route = route;
        this.service = service;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
        this.DietDate = new Date();
        this.CustomerDetails = {
            Name: '',
            Gender: '',
            Age: 0,
            ChefName: '',
            FoodDietTypeName: '',
            Height: 0,
            Weight: 0,
            Waist: 0,
            WorkOutType: '',
            Frequency: 0
        };
        this.Foods = [];
        this.FilteredFood = [];
        this.MealTypes = [];
        this.DishID = 0;
        this.Dishes = [];
        this.FinalFoods = [];
        this.CustomerID = parseInt(this.route.snapshot.paramMap.get('id'));
        if (this.CustomerID != null && this.CustomerID > 0) {
            this.GetDietCustomerDetails(this.CustomerID);
        }
        this.GetAllMealTypes();
        this.GetAllReadyToEatFood();
    }
    // get selected dates
    SetFoodComponent.prototype.GetSelectedDietDates = function () {
        var AllDates = [];
        this.FinalFoods.forEach(function (element) {
            AllDates.push(element.DietDate);
        });
        this.Dishes.forEach(function (element) {
            AllDates.push(element.Date);
        });
        var unique = AllDates.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
        return unique;
    };
    // get formatted date
    SetFoodComponent.prototype.GetFormattedDate = function () {
        return this.DietDate.getMonth() + 1 + '/' + this.DietDate.getDate() + '/' + this.DietDate.getFullYear();
    };
    //change date to selecteddate
    SetFoodComponent.prototype.ChangeDate = function (SelectedDate) {
        this.DietDate = new Date(SelectedDate);
    };
    // get customer details
    SetFoodComponent.prototype.GetDietCustomerDetails = function (CustomerID) {
        var _this = this;
        this.service.GetCustomerDataForDietitian(CustomerID).subscribe(function (Response) {
            if (Response.Status === true) {
                _this.CustomerDetails = Response.Data;
            }
        });
    };
    // get all ready to eat food items
    SetFoodComponent.prototype.GetAllReadyToEatFood = function () {
        var _this = this;
        this.service.GetAllReadyToFoods().subscribe(function (Response) {
            if (Response.Status === true) {
                _this.Foods = Response.Data;
            }
        });
    };
    // get all meal types
    SetFoodComponent.prototype.GetAllMealTypes = function () {
        var _this = this;
        this.service.GetAllMealTypes().subscribe(function (Response) {
            if (Response.Status === true) {
                _this.MealTypes = Response.Data;
            }
        });
    };
    // display food name in autocomplete
    SetFoodComponent.prototype.DisplayFood = function (food) {
        return food ? food.Title : undefined;
    };
    // Add Dish
    SetFoodComponent.prototype.AddDish = function (index) {
        var _this = this;
        var DishID = this.MealTypes[index].DishID.DishId;
        var MealTypeID = this.MealTypes[index].MealTypeId;
        var Quantity = this.MealTypes[index].Quantity;
        var DishName = this.MealTypes[index].DishID.Title;
        var SelectedDate = this.GetFormattedDate();
        if (DishName === '' || Quantity < 0 || Quantity == null || DishID === undefined || DishID == null || SelectedDate === undefined) {
            return;
        }
        this.Dishes.forEach(function (element, index) {
            if (element.MealTypeID === MealTypeID && element.DishId === DishID && element.Date === SelectedDate) {
                _this.Dishes.splice(index, 1);
            }
        });
        this.Dishes.push({
            MealTypeID: MealTypeID,
            DishId: DishID,
            DishName: DishName,
            Quantity: Quantity,
            Date: SelectedDate
        });
        // this.MealTypes[index].MealTypeId=0;
        // this.MealTypes[index].DishID.DishId=0;
        // this.MealTypes[index].DishID.Title="";
        // this.MealTypes[index].Quantity=0;
    };
    // filter dish to display
    SetFoodComponent.prototype.FilterTempDishes = function (MealTypeID) {
        var SelectedDate = this.GetFormattedDate();
        return this.Dishes.filter(function (x) { return x.MealTypeID === MealTypeID && x.Date === SelectedDate; });
    };
    // filter final Dishes
    SetFoodComponent.prototype.FilterFinalDishes = function (MealTypeID) {
        var SelectedDate = this.GetFormattedDate();
        return this.FinalFoods.filter(function (x) { return x.MealTypeId === MealTypeID && x.DietDate === SelectedDate; });
    };
    // remove dish from temporary dish
    SetFoodComponent.prototype.RemoveTempDishes = function (DishID) {
        var _this = this;
        var SelectedDate = this.GetFormattedDate();
        this.Dishes.forEach(function (element, index) {
            if (element.DishId === DishID && element.Date == SelectedDate) {
                _this.Dishes.splice(index, 1);
            }
        });
    };
    // add alternative group
    SetFoodComponent.prototype.AddAlternatives = function (MealTypeId) {
        var Dishes = [];
        var Deletes = [];
        var SelectedDate = this.GetFormattedDate();
        this.Dishes.forEach(function (element, index) {
            if (element.Date === SelectedDate && element.MealTypeID === MealTypeId) {
                Dishes.push({
                    DishName: element.DishName,
                    DishId: element.DishId,
                    Quantity: element.Quantity,
                    MealTypeId: MealTypeId
                });
            }
        });
        this.Dishes = this.Dishes.filter(function (element) {
            return !(element.Date === SelectedDate && element.MealTypeID === MealTypeId);
        });
        if (Dishes.length > 0) {
            var id = this.FinalFoods.length;
            this.FinalFoods.push({
                Id: id++,
                DietDate: SelectedDate,
                MealTypeId: MealTypeId,
                CustomerId: this.CustomerID,
                CustomerdietDetails: Dishes
            });
        }
    };
    // save diet
    SetFoodComponent.prototype.SaveDiet = function () {
        var _this = this;
        if (this.Dishes.length > 0) {
            this.MealTypes.forEach(function (element) {
                _this.AddAlternatives(element.MealTypeId);
            });
        }
        this.service.SaveCustomerDiet(this.FinalFoods).subscribe(function (Response) {
            if (Response.Status === true) {
                _this.dialog.SetData({
                    Message: 'Data saved successfully',
                    Route: '/ab/diet',
                    Status: ''
                });
            }
            else {
                _this.dialog.SetData({
                    Message: 'Something went wrong',
                    Route: '/ab/diet',
                    Status: ''
                });
            }
        });
    };
    // delete final dish
    SetFoodComponent.prototype.DeleteFinalDish = function (ID) {
        var _this = this;
        this.FinalFoods.forEach(function (element, index) {
            if (element.Id === ID) {
                _this.FinalFoods.splice(index, 1);
            }
        });
    };
    // filter foods
    SetFoodComponent.prototype.onSearchChange = function (searchValue) {
        this.FilteredFood = [];
        this.FilteredFood = this.Foods.filter(function (x) { return x.Title.toLowerCase().includes(searchValue.toLowerCase()); });
    };
    // open dish bottom sheet
    SetFoodComponent.prototype.openBottomSheet = function (MealTypeID) {
        var _this = this;
        this.MealTypes.forEach(function (element) {
            if (element.MealTypeId === MealTypeID) {
                var BottomSheetRef = _this.bottomSheet.open(_pre_defined_dish_pre_defined_dish_component__WEBPACK_IMPORTED_MODULE_5__["PreDefinedDishComponent"], {
                    data: { MealTypeID: MealTypeID, MealTypeName: element.MealTypeName }
                });
                BottomSheetRef.afterDismissed().subscribe(function (Response) {
                    if (Response) {
                        _this.AddPredefinedDish(Response);
                    }
                });
            }
        });
    };
    // add predefined dish
    SetFoodComponent.prototype.AddPredefinedDish = function (Response) {
        var _this = this;
        var SelectedDate = this.GetFormattedDate();
        this.Dishes.forEach(function (element, index) {
            if (element.MealTypeID === Response.MealTypeID && element.DishId === Response.DishID && element.Date === SelectedDate) {
                _this.Dishes.splice(index, 1);
            }
        });
        this.Dishes.push({
            MealTypeID: Response.MealTypeID,
            DishId: Response.DishID,
            DishName: Response.Title,
            Quantity: 1,
            Date: SelectedDate
        });
    };
    SetFoodComponent.prototype.ngOnInit = function () { };
    SetFoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-set-food',
            template: __webpack_require__(/*! ./set-food.component.html */ "./src/app/layout/dietitian/set-food/set-food.component.html"),
            styles: [__webpack_require__(/*! ./set-food.component.scss */ "./src/app/layout/dietitian/set-food/set-food.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _set_food_service__WEBPACK_IMPORTED_MODULE_2__["SetFoodService"],
            src_app_shared_commmon_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_3__["DialogueService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]])
    ], SetFoodComponent);
    return SetFoodComponent;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/set-food/set-food.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dietitian/set-food/set-food.module.ts ***!
  \**************************************************************/
/*! exports provided: SetFoodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFoodModule", function() { return SetFoodModule; });
/* harmony import */ var _set_food_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-food-routing.module */ "./src/app/layout/dietitian/set-food/set-food-routing.module.ts");
/* harmony import */ var _set_food_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-food.component */ "./src/app/layout/dietitian/set-food/set-food.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pre_defined_dish_pre_defined_dish_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pre-defined-dish/pre-defined-dish.component */ "./src/app/layout/dietitian/pre-defined-dish/pre-defined-dish.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var SetFoodModule = /** @class */ (function () {
    function SetFoodModule() {
    }
    SetFoodModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _set_food_routing_module__WEBPACK_IMPORTED_MODULE_0__["SetFoodRoutingModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_10__["StatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            declarations: [_set_food_component__WEBPACK_IMPORTED_MODULE_1__["SetFoodComponent"], _pre_defined_dish_pre_defined_dish_component__WEBPACK_IMPORTED_MODULE_14__["PreDefinedDishComponent"]],
            entryComponents: [_pre_defined_dish_pre_defined_dish_component__WEBPACK_IMPORTED_MODULE_14__["PreDefinedDishComponent"]]
        })
    ], SetFoodModule);
    return SetFoodModule;
}());



/***/ })

}]);
//# sourceMappingURL=set-food-set-food-module.js.map