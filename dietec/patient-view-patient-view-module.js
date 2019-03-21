(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-view-patient-view-module"],{

/***/ "./src/app/layout/dietitian/patient-view/patient-view-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dietitian/patient-view/patient-view-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: PatientViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientViewRoutingModule", function() { return PatientViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patient_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient-view.component */ "./src/app/layout/dietitian/patient-view/patient-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _patient_view_component__WEBPACK_IMPORTED_MODULE_2__["PatientViewComponent"]
    }
];
var PatientViewRoutingModule = /** @class */ (function () {
    function PatientViewRoutingModule() {
    }
    PatientViewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PatientViewRoutingModule);
    return PatientViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/patient-view/patient-view.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/dietitian/patient-view/patient-view.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"PatientDetailMain\">\r\n  <mat-tab-group backgroundColor=\"warn\" dynamicHeight animationDuration=\"1000ms\">\r\n    <mat-tab label=\"Patient Details\">\r\n      <mat-card class=\"TabsContents\">\r\n        <div class=\"PatientProfileTop mb-20\">\r\n          <div class=\"PatientPicture\">\r\n            <img src=\"assets/images/patient-1.png\" />\r\n          </div>\r\n          <div class=\"PatientNameDetails\">\r\n            <h2>{{CustomerDetails.Name}}</h2>\r\n            <div class=\"GenderAgeFlex\">\r\n              <div class=\"Gender\">{{CustomerDetails.Gender}}</div>\r\n              <div class=\"Age\">{{CustomerDetails.Age}} years old</div>\r\n            </div>\r\n            <!-- <p>\r\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna\r\n              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos\r\n            </p> -->\r\n          </div>\r\n          <div class=\"ChefAndDiet\">\r\n            <div>\r\n              <h6>Chef Name</h6>\r\n              <h3>{{CustomerDetails.ChefName}}</h3>\r\n            </div>\r\n            <div class=\"dietType\">\r\n              <h6>Diet Type</h6>\r\n              <h3>{{CustomerDetails.FoodDietTypeName}}</h3>\r\n              <button class=\"SetDietBtn\" (click)=\"SetDiet()\" mat-raised-button color=\"primary\">Set Diet</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"CategoryTitle\">\r\n          <h2>Physical Measurements</h2>\r\n        </div>\r\n        <div class=\"PatientCategoryDetails mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n          <div fxFlex=\"25\">\r\n            <h6>Height</h6>\r\n            <h3>{{CustomerDetails.Height}} CM</h3>\r\n          </div>\r\n          <!-- 2 -->\r\n          <div fxFlex=\"25\">\r\n            <h6>Weight</h6>\r\n            <h3>{{CustomerDetails.Weight}} KG</h3>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div fxFlex=\"25\">\r\n            <h6>Waist</h6>\r\n            <h3>{{CustomerDetails.Waist}} CM</h3>\r\n          </div>\r\n          <div fxFlex=\"25\">\r\n            <h6>Automatic BMI</h6>\r\n            <h3>{{(CustomerDetails.Weight/((CustomerDetails.Height/100)*(CustomerDetails.Height/100))).toFixed(2)}}</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"CategoryTitle\">\r\n          <h2>Physical Workouts</h2>\r\n        </div>\r\n        <div class=\"PatientCategoryDetails\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n          <div fxFlex=\"100\">\r\n            <h3>{{CustomerDetails.WorkOutType}} ({{CustomerDetails.Frequency}} hr)</h3>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Call History\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Status</mat-label>\r\n              <mat-select placeholder=\"Select chef\">\r\n                <mat-option>Test </mat-option>\r\n                <mat-option>Test 2</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          \r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Filter by Date </mat-label>\r\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Placeholder\" />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n        </div> -->\r\n\r\n        <div class=\"mat-elevation-z1\">\r\n          <table mat-table [dataSource]=\"CallHistory\">           \r\n            <ng-container matColumnDef=\"date\">\r\n              <th mat-header-cell *matHeaderCellDef>Date</th>\r\n              <td mat-cell *matCellDef=\"let element\">{{ element.TransactionDate }}</td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"status\">\r\n              <th mat-header-cell *matHeaderCellDef>Status</th>\r\n              <td mat-cell *matCellDef=\"let element\">{{ element.TransactionStatusName }}</td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n          </table>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Diet History\">\r\n      <mat-card class=\"TabsContents\">\r\n        <div class=\"mat-elevation-z1\">\r\n          <table mat-table [dataSource]=\"FilterDishes()\">\r\n            <!--- Note that these columns can be defined in any order.\r\n            The actual rendered columns are set as a property on the row definition\" -->\r\n            \r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef>Date</th>\r\n            <td mat-cell *matCellDef=\"let element\">{{ element.DietDate }}</td>\r\n            </ng-container>\r\n            \r\n            <!-- Weight Column -->\r\n            <ng-container matColumnDef=\"MealType\">\r\n            <th mat-header-cell *matHeaderCellDef>Meal Type</th>\r\n            <td mat-cell *matCellDef=\"let element\">{{ element.MealTypeName }}</td>\r\n            </ng-container>\r\n            \r\n            <!-- Symbol Column -->\r\n            <ng-container matColumnDef=\"FoodGroup\">\r\n            <th mat-header-cell *matHeaderCellDef>Food</th>\r\n            <td mat-cell *matCellDef=\"let element\">{{ element.Title }}</td>\r\n            </ng-container>\r\n            \r\n            <!-- <ng-container matColumnDef=\"Action\">\r\n            <th mat-header-cell *matHeaderCellDef>Action</th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <button (click)=\"SetDiet()\" mat-mini-fab color=\"primary\">\r\n                <mat-icon (click)=\"SetDiet()\">edit</mat-icon></button>\r\n            </td>\r\n            </ng-container>             -->\r\n            <tr mat-header-row *matHeaderRowDef=\"DietHistColoumn\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: DietHistColoumn\"></tr>\r\n            </table>\r\n          </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/layout/dietitian/patient-view/patient-view.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/dietitian/patient-view/patient-view.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.PatientDetailMain {\n  padding: 0;\n  border-radius: 8px;\n  overflow: hidden; }\n\n.TabsContents {\n  box-shadow: none;\n  padding: 1.8vmax 1.5vmax 1vmax; }\n\n.mr-20 {\n  padding-right: 20px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.example-chip-list {\n  width: 100%; }\n\n.TabsContents {\n  box-shadow: none;\n  padding: 1.8vmax 1.5vmax 1vmax; }\n\n.mr-20 {\n  padding-right: 20px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.example-chip-list {\n  width: 100%; }\n\n.PatientProfileTop {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  padding: 1% 0 1.2%;\n  border-bottom: 5px #f1f1f1 solid;\n  position: relative; }\n\n.PatientPicture {\n  overflow: hidden;\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  border: 5px #f1f1f1 solid; }\n\n.PatientPicture img {\n  width: 100%;\n  max-width: 100%; }\n\n.PatientNameDetails {\n  padding-left: 25px;\n  max-width: calc(100% - 490px);\n  display: block; }\n\n.PatientNameDetails h2 {\n  font-size: 26px;\n  line-height: 26px;\n  padding: 0 0 10px;\n  margin: 0; }\n\n.PatientNameDetails p {\n  font-size: 17px;\n  line-height: 22px;\n  padding: 10px 0;\n  margin: 0;\n  max-width: 490px;\n  color: #999999; }\n\n.GenderAgeFlex {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row; }\n\n.Gender {\n  display: block;\n  font-size: 18px;\n  padding-right: 15px;\n  line-height: 18px; }\n\n.Age {\n  display: block;\n  font-size: 18px;\n  line-height: 18px;\n  border-left: 3px #333333 solid;\n  padding-left: 15px; }\n\n.ChefAndDiet {\n  width: 200px;\n  float: right;\n  display: block;\n  align-self: right;\n  width: 288px;\n  position: absolute;\n  right: 20px;\n  bottom: 25%;\n  padding-left: 45px;\n  border-left: 3px solid #999999; }\n\n.ChefAndDiet h6 {\n  display: block;\n  font-size: 16px;\n  line-height: 16px;\n  margin: 0;\n  padding: 0 0 10px;\n  color: #999999;\n  font-weight: normal; }\n\n.ChefAndDiet h3 {\n  display: block;\n  font-size: 18px;\n  line-height: 16px;\n  margin: 0;\n  padding: 0; }\n\n.dietType {\n  margin-top: 25px; }\n\n.SetDietBtn {\n  margin-top: 10px;\n  border-radius: 50px;\n  width: 100px; }\n\n.PatientCategoryDetails {\n  width: 100%;\n  padding-bottom: 25px; }\n\n.PatientCategoryDetails h6 {\n  display: block;\n  font-size: 16px;\n  line-height: 16px;\n  margin: 0;\n  padding: 0 0 10px;\n  color: #999999;\n  font-weight: normal; }\n\n.PatientCategoryDetails h3 {\n  display: block;\n  font-size: 18px;\n  line-height: 16px;\n  margin: 0;\n  padding: 0; }\n\n.CategoryTitle {\n  background: #eaecec;\n  color: #607d8b;\n  padding: 10px 20px;\n  text-align: left;\n  position: relative;\n  border-radius: 5px;\n  margin-bottom: 20px; }\n\n.CategoryTitle h2 {\n  margin: 0;\n  font-size: 18px; }\n\n.mat-mini-fab {\n  width: 30px;\n  height: 30px; }\n\n.material-icons {\n  height: 16px;\n  width: 16px;\n  font-size: 16px;\n  line-height: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2RpZXRpdGlhbi9wYXRpZW50LXZpZXcvRjpcXHNoYWZlZXEnc1xcZGVpdHRlY1xcV0VCXFxBRE1JTi9zcmNcXGFwcFxcbGF5b3V0XFxkaWV0aXRpYW5cXHBhdGllbnQtdmlld1xccGF0aWVudC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsU0FBUyxFQUFBOztBQUVYO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsU0FBUztFQUNULGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFFWjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kaWV0aXRpYW4vcGF0aWVudC12aWV3L3BhdGllbnQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLlBhdGllbnREZXRhaWxNYWluIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uVGFic0NvbnRlbnRzIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHBhZGRpbmc6IDEuOHZtYXggMS41dm1heCAxdm1heDtcclxufVxyXG4ubXItMjAge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLm10LTQwIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5leGFtcGxlLWNoaXAtbGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLlRhYnNDb250ZW50cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwYWRkaW5nOiAxLjh2bWF4IDEuNXZtYXggMXZtYXg7XHJcbn1cclxuLm1yLTIwIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5tdC00MCB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uUGF0aWVudFByb2ZpbGVUb3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZzogMSUgMCAxLjIlO1xyXG4gIGJvcmRlci1ib3R0b206IDVweCAjZjFmMWYxIHNvbGlkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uUGF0aWVudFBpY3R1cmUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNzVweDtcclxuICBib3JkZXI6IDVweCAjZjFmMWYxIHNvbGlkO1xyXG59XHJcbi5QYXRpZW50UGljdHVyZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uUGF0aWVudE5hbWVEZXRhaWxzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA0OTBweCk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLlBhdGllbnROYW1lRGV0YWlscyBoMiB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uUGF0aWVudE5hbWVEZXRhaWxzIHAge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1heC13aWR0aDogNDkwcHg7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbn1cclxuLkdlbmRlckFnZUZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5HZW5kZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uQWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCAjMzMzMzMzIHNvbGlkO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLkNoZWZBbmREaWV0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGFsaWduLXNlbGY6IHJpZ2h0O1xyXG4gIHdpZHRoOiAyODhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgYm90dG9tOiAyNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzk5OTk5OTtcclxufVxyXG5cclxuLkNoZWZBbmREaWV0IGg2IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLkNoZWZBbmREaWV0IGgzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmRpZXRUeXBlIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi5TZXREaWV0QnRuIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uUGF0aWVudENhdGVnb3J5RGV0YWlscyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuLlBhdGllbnRDYXRlZ29yeURldGFpbHMgaDYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAwIDEwcHg7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLlBhdGllbnRDYXRlZ29yeURldGFpbHMgaDMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLkNhdGVnb3J5VGl0bGUge1xyXG4gIGJhY2tncm91bmQ6ICNlYWVjZWM7XHJcbiAgY29sb3I6ICM2MDdkOGI7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5DYXRlZ29yeVRpdGxlIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5tYXQtbWluaS1mYWIge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTZweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDhweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/dietitian/patient-view/patient-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/dietitian/patient-view/patient-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: PatientViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientViewComponent", function() { return PatientViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _set_food_set_food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../set-food/set-food.service */ "./src/app/layout/dietitian/set-food/set-food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientViewComponent = /** @class */ (function () {
    function PatientViewComponent(router, service, route) {
        this.router = router;
        this.service = service;
        this.route = route;
        this.displayedColumns = ['date', 'status'];
        this.CallHistory = [];
        this.DietHistColoumn = ['date', 'MealType', 'FoodGroup'];
        this.Dishes = [];
        this.CustomerDetails = {
            Age: 0,
            CallHistory: "",
            ChefName: "",
            Dishes: "",
            FoodDietTypeName: "",
            Frequency: 0,
            Gender: "",
            Height: "",
            Name: "",
            ReadingDate: "",
            Waist: "",
            Weight: "",
            WorkOutType: ""
        };
        this.CustomerID = parseInt(this.router.snapshot.paramMap.get('id'));
        if (this.CustomerID != null && this.CustomerID > 0) {
            this.GetDietCustomerDetails(this.CustomerID);
        }
    }
    PatientViewComponent.prototype.ngOnInit = function () { };
    //get customer details
    PatientViewComponent.prototype.GetDietCustomerDetails = function (CustomerID) {
        var _this = this;
        this.service.GetCustomerDataForDietitian(CustomerID).subscribe(function (Response) {
            if (Response.Status == true) {
                _this.CustomerDetails = Response.Data;
                _this.CallHistory = _this.CustomerDetails.CallHistory;
                _this.Dishes = _this.CustomerDetails.Dishes;
            }
        });
    };
    //filter Dishes
    PatientViewComponent.prototype.FilterDishes = function () {
        var FilteredDishes = [];
        if (this.Dishes.length > 0) {
            this.Dishes.forEach(function (element) {
                var FoodName = "";
                element.forEach(function (element) {
                    FoodName = FoodName + "," + element.Title;
                });
                FoodName = FoodName.substring(1, FoodName.length);
                FilteredDishes.push({
                    'Title': FoodName,
                    'DietDate': element[0].DietDate,
                    'MealTypeName': element[0].MealTypeName
                });
            });
        }
        return FilteredDishes;
    };
    //set diet for a customer
    PatientViewComponent.prototype.SetDiet = function () {
        if (this.CustomerID != null && this.CustomerID > 0) {
            this.route.navigate(['/ab/diet/set/' + this.CustomerID]);
        }
    };
    PatientViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-view',
            template: __webpack_require__(/*! ./patient-view.component.html */ "./src/app/layout/dietitian/patient-view/patient-view.component.html"),
            styles: [__webpack_require__(/*! ./patient-view.component.scss */ "./src/app/layout/dietitian/patient-view/patient-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _set_food_set_food_service__WEBPACK_IMPORTED_MODULE_2__["SetFoodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PatientViewComponent);
    return PatientViewComponent;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/patient-view/patient-view.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dietitian/patient-view/patient-view.module.ts ***!
  \**********************************************************************/
/*! exports provided: PatientViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientViewModule", function() { return PatientViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _patient_view_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patient-view-routing.module */ "./src/app/layout/dietitian/patient-view/patient-view-routing.module.ts");
/* harmony import */ var _patient_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patient-view.component */ "./src/app/layout/dietitian/patient-view/patient-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PatientViewModule = /** @class */ (function () {
    function PatientViewModule() {
    }
    PatientViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_patient_view_component__WEBPACK_IMPORTED_MODULE_12__["PatientViewComponent"]],
            imports: [
                _patient_view_routing_module__WEBPACK_IMPORTED_MODULE_11__["PatientViewRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_8__["StatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ]
        })
    ], PatientViewModule);
    return PatientViewModule;
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
//# sourceMappingURL=patient-view-patient-view-module.js.map