(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-food-module"],{

/***/ "./src/app/layout/dietitian/food/food-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dietitian/food/food-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: FoodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRoutingModule", function() { return FoodRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _food_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food.component */ "./src/app/layout/dietitian/food/food.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _food_component__WEBPACK_IMPORTED_MODULE_2__["FoodComponent"]
    }];
var FoodRoutingModule = /** @class */ (function () {
    function FoodRoutingModule() {
    }
    FoodRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FoodRoutingModule);
    return FoodRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/food/food.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/dietitian/food/food.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Add Food</h1>\r\n<div fxFlex=\"50\" fxLayout=\"column\" fxLayoutAlign=\"left left\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" >\r\n  <div fxFlex=\"100\" >\r\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n      <mat-label>Ingredient</mat-label>\r\n      <input matInput placeholder=\"Add Ingredient\" [(ngModel)]=\"Food.FoodName\" />\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n<div fxFlex=\"50\" fxLayout=\"column wrap\" fxLayoutAlign=\"left left\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" >\r\n    <div fxFlex >\r\n        <div class=\"w-100\">\r\n          \r\n          <mat-checkbox color=\"primary\" class=\"example-margin\" [(ngModel)]=\"Food.ReadyToEat\">Ready To Eat</mat-checkbox>\r\n         \r\n        </div>\r\n    </div>\r\n    <div >\r\n        <div fxFlex=\"150px\" fxLayout=\"column wrap\" fxLayoutAlign=\"left left\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <button mat-raised-button color=\"primary\" class=\"w-100 \" (click)=\"SaveFood()\" aria-label=\"Response\">Save</button>\r\n        </div>\r\n    </div> \r\n  \r\n</div>\r\n\r\n\r\n<!-- <img height=\"150px\" width=\"150px\" *ngIf=\"ImageSource!=null\" [src]=\"ImageSource || 'http://placehold.it/180'\">-->\r\n\r\n<div class=\"w-100 AddedFoods\">\r\n<mat-chip-list #chipList>\r\n    <mat-chip  *ngFor=\"let item of AllFood\">\r\n      <p>{{ item.FoodName }}</p>\r\n    </mat-chip>   \r\n</mat-chip-list>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/dietitian/food/food.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dietitian/food/food.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".AddedFoods {\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #f1f1f1;\n  margin-top: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2RpZXRpdGlhbi9mb29kL0Y6XFxzaGFmZWVxJ3NcXGRlaXR0ZWNcXFdFQlxcQURNSU4vc3JjXFxhcHBcXGxheW91dFxcZGlldGl0aWFuXFxmb29kXFxmb29kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUVqQixzQkFBc0I7RUFDdEIseUJBQXdCO0VBQ3hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2RpZXRpdGlhbi9mb29kL2Zvb2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQWRkZWRGb29kc3tcclxuICAgIHBhZGRpbmc6IDEwcHg7IFxyXG5cclxuYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuYm9yZGVyOjFweCBzb2xpZCAjZjFmMWYxO1xyXG5tYXJnaW4tdG9wOiAyNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/dietitian/food/food.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dietitian/food/food.component.ts ***!
  \*********************************************************/
/*! exports provided: FoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodComponent", function() { return FoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.service */ "./src/app/layout/dietitian/food/food.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodComponent = /** @class */ (function () {
    function FoodComponent(service, snackBar) {
        this.service = service;
        this.snackBar = snackBar;
        this.Food = { FoodName: '', ReadyToEat: false };
        this.displayedColumns = ['position', 'name'];
        this.AllFood = [];
        this.Response = '';
        this.GetFood();
    }
    FoodComponent.prototype.ngOnInit = function () {
    };
    // getFood
    FoodComponent.prototype.GetFood = function () {
        var _this = this;
        this.service.GetFood().subscribe(function (Response) {
            if (Response.Status === true) {
                _this.AllFood = Response.Data;
            }
        });
    };
    // save Food
    FoodComponent.prototype.SaveFood = function () {
        var _this = this;
        if (this.Food.FoodName == null || this.Food.FoodName === '') {
            this.openSnackBar('Name Required');
            return;
        }
        else {
            this.Response = '';
        }
        var body = { 'FoodName': this.Food.FoodName, 'ReadyToEat': (this.Food.ReadyToEat === true ? 1 : 0) };
        this.service.SaveFood(body).subscribe(function (Response) {
            if (Response.Status === true) {
                _this.Food.FoodName = '';
                _this.GetFood();
            }
        });
    };
    FoodComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 2000,
        });
    };
    FoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food',
            template: __webpack_require__(/*! ./food.component.html */ "./src/app/layout/dietitian/food/food.component.html"),
            styles: [__webpack_require__(/*! ./food.component.scss */ "./src/app/layout/dietitian/food/food.component.scss")]
        }),
        __metadata("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], FoodComponent);
    return FoodComponent;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/food/food.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dietitian/food/food.module.ts ***!
  \******************************************************/
/*! exports provided: FoodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodModule", function() { return FoodModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _food_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-routing.module */ "./src/app/layout/dietitian/food/food-routing.module.ts");
/* harmony import */ var _food_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food.component */ "./src/app/layout/dietitian/food/food.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FoodModule = /** @class */ (function () {
    function FoodModule() {
    }
    FoodModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_food_component__WEBPACK_IMPORTED_MODULE_4__["FoodComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _food_routing_module__WEBPACK_IMPORTED_MODULE_3__["FoodRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ]
        })
    ], FoodModule);
    return FoodModule;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/food/food.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/dietitian/food/food.service.ts ***!
  \*******************************************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
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




var FoodService = /** @class */ (function () {
    function FoodService(util, http) {
        this.util = util;
        this.http = http;
    }
    // save food
    FoodService.prototype.SaveFood = function (body) {
        var url = this.util.SaveFood;
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    // get food
    FoodService.prototype.GetFood = function () {
        var url = this.util.GetFoods;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    FoodService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_1__["CommonVariables"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FoodService);
    return FoodService;
}());



/***/ })

}]);
//# sourceMappingURL=food-food-module.js.map