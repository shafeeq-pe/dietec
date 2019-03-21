(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dish-ingredients-dish-ingredients-module"],{

/***/ "./src/app/customer/dish-ingredients/customer-dish-ingredients.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/customer/dish-ingredients/customer-dish-ingredients.service.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerDishIngredientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDishIngredientsService", function() { return CustomerDishIngredientsService; });
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




var CustomerDishIngredientsService = /** @class */ (function () {
    function CustomerDishIngredientsService(util, http) {
        this.util = util;
        this.http = http;
    }
    // get dish details by dish id
    CustomerDishIngredientsService.prototype.GetDishDetailsByDishId = function (DishId) {
        var url = this.util.GetCustomerDishIngredients + DishId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    CustomerDishIngredientsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_2__["CommonVariables"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerDishIngredientsService);
    return CustomerDishIngredientsService;
}());



/***/ }),

/***/ "./src/app/customer/dish-ingredients/dish-ingredients-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/customer/dish-ingredients/dish-ingredients-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: DishIngredientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishIngredientsRoutingModule", function() { return DishIngredientsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dish_ingredients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dish-ingredients.component */ "./src/app/customer/dish-ingredients/dish-ingredients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _dish_ingredients_component__WEBPACK_IMPORTED_MODULE_2__["DishIngredientsComponent"]
    }
];
var DishIngredientsRoutingModule = /** @class */ (function () {
    function DishIngredientsRoutingModule() {
    }
    DishIngredientsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DishIngredientsRoutingModule);
    return DishIngredientsRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer/dish-ingredients/dish-ingredients.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/customer/dish-ingredients/dish-ingredients.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"RecipeMainFlex\">\r\n  <div class=\"RecipeLeftFlex\">\r\n    <div class=\"RecipeTitleBlock\">\r\n      <div class=\"RecipeTitleBlockImage\">\r\n        <img [src]=\"GetCoverImage()\" />\r\n      </div>\r\n      <div class=\"RecipeTitle\">\r\n        {{DishDetails.Title}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"RecipeIngredients\">\r\n      <h3>Ingredients</h3>\r\n\r\n      <div class=\"IngredientsList\" >\r\n        <p *ngFor=\"let item of DishDetails.Ingredients\">{{item.FoodName}} {{item.Quantity}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"NutritionValues\">\r\n      <h3>Nutrition value (100g)</h3>\r\n      <div class=\"NutritionValueList\" >\r\n        <p *ngFor=\"let item of DishDetails.NutritionValues\"><span>{{item.NutritionName}}</span>{{item.NutritionValue}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- 2 -->\r\n  <div class=\"RecipeCenterFlex\">\r\n    <div class=\"HowTomakeCard\">\r\n      <h3>How to Make</h3>\r\n\r\n      <div class=\"HowTomakeDescription\">\r\n        <p>{{DishDetails.Description}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"RecipeVideosImagesCard\">\r\n      <h3>Videos</h3>\r\n\r\n      <div class=\"RecipeVideoLIst\" *ngFor=\"let item of DishDetails.Videos\">\r\n        <!-- 1 -->\r\n        <div class=\"RecipeVideoThumbs\" (click)=\"OpenMedia(item.FileLocation,2)\">\r\n          <div class=\"VideoThumbsImage\">\r\n            <div class=\"VideoThumbPlayButton\">\r\n              <mat-icon>play_circle_filled</mat-icon>\r\n            </div>\r\n            <img src=\"assets/images/chef.png\" />\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <hr />\r\n      <h3>Images</h3>\r\n      <div class=\"RecipeImagesLIst\">\r\n        <div class=\"RecipeImagesThumbs\"  *ngFor=\"let item of DishDetails.Images\" >\r\n          <div class=\"RecipeImageSrc\"  (click)=\"OpenMedia(item.FileLocation,1)\"   [style.backgroundImage]='GetImageLocation(item.FileLocation)'></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ChefFLex\">\r\n    <mat-card class=\"ChefCard\">\r\n      <div class=\"ChefImage\">\r\n        <div  [style.backgroundImage]='GetImageLocation(DishDetails.ProfilePic)' class=\"ChefImageSrc\" ></div>\r\n      </div>\r\n      <div class=\"ChefDetails\">\r\n        <small>Prepared By </small>\r\n        <strong>{{DishDetails.ChefName}}</strong>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customer/dish-ingredients/dish-ingredients.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/customer/dish-ingredients/dish-ingredients.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".RecipeMainFlex {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%; }\n\nh3 {\n  color: #05353a;\n  font-size: 20px;\n  text-transform: uppercase;\n  margin: 0;\n  padding-bottom: 3%; }\n\nhr {\n  opacity: 0.2;\n  margin-top: 2.5%;\n  margin-bottom: 2.5%; }\n\n.RecipeLeftFlex {\n  display: flex;\n  flex-flow: column wrap;\n  width: 25%; }\n\n.RecipeTitleBlock {\n  width: 100%;\n  padding: 0;\n  box-shadow: rgba(0, 0, 0, 0.3) 1px 4px 8px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  z-index: 15; }\n\n.RecipeTitleBlockImage {\n  z-index: 5;\n  top: 0;\n  display: block;\n  position: relative;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  height: 25vh; }\n\n.RecipeTitleBlockImage:after {\n  z-index: 6;\n  top: 0;\n  content: '';\n  background: #121212;\n  background: linear-gradient(0deg, rgba(47, 76, 64, 0.9) 0%, rgba(47, 76, 64, 0.5) 50%, rgba(47, 76, 64, 0.2) 100%);\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n\n.RecipeTitleBlockImage img {\n  max-width: 100%;\n  width: 100%;\n  display: block;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.RecipeTitle {\n  position: absolute;\n  z-index: 10;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 6% 10px;\n  bottom: 5%;\n  left: 0;\n  color: #fff;\n  font-weight: bold;\n  font-size: 25px;\n  text-transform: uppercase; }\n\n.RecipeIngredients {\n  width: 88%;\n  padding: 6% 6%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  padding-top: calc(6% + 30px);\n  margin-top: -25px;\n  z-index: 10; }\n\n.IngredientsList {\n  margin-top: 10px; }\n\n.IngredientsList p {\n  color: #848484;\n  font-size: 16px;\n  line-height: 16px;\n  margin: 0;\n  padding: 3px 0; }\n\n.NutritionValues {\n  width: 88%;\n  padding: 6% 6%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-top: 20px; }\n\n.NutritionValueList {\n  margin-top: 10px; }\n\n.NutritionValueList p {\n  color: #848484;\n  font-size: 16px;\n  line-height: 16px;\n  margin: 0;\n  padding: 3px 0; }\n\n.NutritionValueList p span {\n  width: 130px;\n  display: inline-block; }\n\n.RecipeCenterFlex {\n  display: flex;\n  flex-flow: column wrap;\n  width: 48%;\n  margin: 0 1.5%; }\n\n.HowTomakeCard {\n  width: 90%;\n  padding: 5% 5%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden; }\n\n.RecipeVideosImagesCard {\n  width: 90%;\n  padding: 5% 5%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-top: 20px; }\n\n.HowTomakeDescription {\n  margin-top: 10px; }\n\n.HowTomakeDescription p {\n  color: #848484;\n  font-size: 16px;\n  line-height: 16px;\n  margin: 0;\n  padding: 4px 0; }\n\n.RecipeVideoLIst {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  margin: 0 auto; }\n\n.RecipeVideoThumbs {\n  width: 32.33%;\n  padding: 0;\n  margin: 0 0 1.5%;\n  margin-right: 1.5%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  overflow: hidden;\n  text-decoration: none;\n  cursor: pointer; }\n\n.RecipeVideoThumbs:nth-child(3n) {\n  margin-right: 0; }\n\n.VideoThumbPlayButton {\n  position: absolute;\n  z-index: 10;\n  color: white;\n  left: 50%;\n  top: 50%;\n  font-size: 40px;\n  margin-top: -20px;\n  margin-left: -20px; }\n\n.VideoThumbPlayButton .mat-icon {\n  font-size: 40px; }\n\n.VideoThumbsImage {\n  position: relative;\n  width: 100%;\n  cursor: pointer; }\n\n.VideoThumbsImage:after {\n  z-index: 6;\n  top: 0;\n  content: '';\n  background: #121212;\n  background: linear-gradient(0deg, rgba(47, 76, 64, 0.9) 0%, rgba(47, 76, 64, 0.5) 50%, rgba(47, 76, 64, 0.2) 100%);\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n\n.VideoThumbsImage img {\n  max-width: 100%;\n  display: block;\n  position: relative; }\n\n.RecipeImagesLIst {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  margin: 0 auto; }\n\n.RecipeImagesThumbs {\n  width: 32.33%;\n  padding: 0;\n  margin: 0 0 1.5%;\n  margin-right: 1.5%;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  overflow: hidden;\n  text-decoration: none;\n  height: 8vmax;\n  cursor: pointer; }\n\n.RecipeImagesThumbs:nth-child(3n) {\n  margin-right: 0; }\n\n.RecipeImagesThumbs .RecipeImageSrc {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.ChefFLex {\n  width: 24%;\n  display: flex;\n  flex-flow: column wrap; }\n\n.ChefCard {\n  width: 100%;\n  padding: 0;\n  margin: 0 0;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;\n  background: #fff;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  height: 13vmax; }\n\n.ChefImage {\n  z-index: 5;\n  top: 0;\n  display: block;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%; }\n\n.ChefImage:after {\n  z-index: 6;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  content: '';\n  background: #121212;\n  background: linear-gradient(0deg, rgba(18, 18, 18, 0.5) 0%, rgba(19, 19, 19, 0.2) 20%, rgba(19, 19, 19, 0) 100%);\n  left: 0; }\n\n.ChefImageSrc {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: top center; }\n\n.ChefDetails {\n  position: absolute;\n  height: 40px;\n  z-index: 10;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 10% 10px;\n  bottom: 15%;\n  left: 0;\n  color: #fff;\n  font-size: 16px; }\n\n.ChefDetails small {\n  display: block;\n  height: auto; }\n\n.ChefDetails strong {\n  color: #fff;\n  font-size: 26px; }\n\n@media (max-width: 600px) {\n  .RecipeMainFlex {\n    margin-top: -15px; }\n  .RecipeCenterFlex, .RecipeLeftFlex, .ChefFLex {\n    margin: 0 auto;\n    width: 100%; }\n  .NutritionValues, .HowTomakeCard, .RecipeVideosImagesCard, .ChefCard {\n    margin-top: 5px; }\n  .ChefCard {\n    height: 25vmax; }\n  .RecipeTitleBlockImage {\n    height: 25vh; }\n  .RecipeImagesThumbs {\n    height: 10vmax; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvZGlzaC1pbmdyZWRpZW50cy9GOlxcc2hhZmVlcSdzXFxkZWl0dGVjXFxXRUJcXEFETUlOL3NyY1xcYXBwXFxjdXN0b21lclxcZGlzaC1pbmdyZWRpZW50c1xcZGlzaC1pbmdyZWRpZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsU0FBUztFQUNULGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVLEVBQUE7O0FBRVo7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFVO0VBQ1YsTUFBTTtFQUNOLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNMLFlBQVksRUFBQTs7QUFJaEI7RUFDRSxVQUFVO0VBQ1YsTUFBTTtFQUNOLFdBQVc7RUFDWCxtQkFBMkI7RUFDM0Isa0hBQWtIO0VBQ2xILE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGtCQUFrQjtFQUVsQixXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsVUFBVTtF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Y29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUmVjaXBlTWFpbkZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDMge1xyXG4gIGNvbG9yOiAjMDUzNTNhO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbmhyIHtcclxuICBvcGFjaXR5OiAwLjI7XHJcbiAgbWFyZ2luLXRvcDogMi41JTtcclxuICBtYXJnaW4tYm90dG9tOiAyLjUlO1xyXG59XHJcblxyXG4uUmVjaXBlTGVmdEZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbi5SZWNpcGVUaXRsZUJsb2NrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAxcHggNHB4IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAxNTtcclxufVxyXG5cclxuLlJlY2lwZVRpdGxlQmxvY2tJbWFnZSB7XHJcbiAgei1pbmRleDogNTtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMjV2aDtcclxuXHJcbiAgLy8gbWF4LWhlaWdodDogMjUwcHg7XHJcbn1cclxuLlJlY2lwZVRpdGxlQmxvY2tJbWFnZTphZnRlciB7XHJcbiAgei1pbmRleDogNjtcclxuICB0b3A6IDA7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE4LCAxOCwgMTgpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDQ3LCA3NiwgNjQsIDAuOSkgMCUsIHJnYmEoNDcsIDc2LCA2NCwgMC41KSA1MCUsIHJnYmEoNDcsIDc2LCA2NCwgMC4yKSAxMDAlKTtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLlJlY2lwZVRpdGxlQmxvY2tJbWFnZSBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLlJlY2lwZVRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMTBweCA2JSAxMHB4O1xyXG4gIGJvdHRvbTogNSU7XHJcbiAgbGVmdDogMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uUmVjaXBlSW5ncmVkaWVudHMge1xyXG4gIHdpZHRoOiA4OCU7XHJcbiAgcGFkZGluZzogNiUgNiU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDFweCAycHggM3B4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiBjYWxjKDYlICsgMzBweCk7XHJcbiAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgLy8gbWFyZ2luLXRvcDogMjBweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4uSW5ncmVkaWVudHNMaXN0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5JbmdyZWRpZW50c0xpc3QgcCB7XHJcbiAgY29sb3I6ICM4NDg0ODQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAzcHggMDtcclxufVxyXG4uTnV0cml0aW9uVmFsdWVzIHtcclxuICB3aWR0aDogODglO1xyXG4gIHBhZGRpbmc6IDYlIDYlO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAxcHggMnB4IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5OdXRyaXRpb25WYWx1ZUxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLk51dHJpdGlvblZhbHVlTGlzdCBwIHtcclxuICBjb2xvcjogIzg0ODQ4NDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDNweCAwO1xyXG59XHJcbi5OdXRyaXRpb25WYWx1ZUxpc3QgcCBzcGFuIHtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uUmVjaXBlQ2VudGVyRmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgbWFyZ2luOiAwIDEuNSU7XHJcbn1cclxuLkhvd1RvbWFrZUNhcmQge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogNSUgNSU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDFweCAycHggM3B4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5SZWNpcGVWaWRlb3NJbWFnZXNDYXJkIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDUlIDUlO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAxcHggMnB4IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5Ib3dUb21ha2VEZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uSG93VG9tYWtlRGVzY3JpcHRpb24gcCB7XHJcbiAgY29sb3I6ICM4NDg0ODQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiA0cHggMDtcclxufVxyXG5cclxuLlJlY2lwZVZpZGVvTElzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uUmVjaXBlVmlkZW9UaHVtYnMge1xyXG4gIHdpZHRoOiAzMi4zMyU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMCAxLjUlO1xyXG4gIG1hcmdpbi1yaWdodDogMS41JTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMXB4IDJweCAzcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLlJlY2lwZVZpZGVvVGh1bWJzOm50aC1jaGlsZCgzbikge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4uVmlkZW9UaHVtYlBsYXlCdXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbn1cclxuLlZpZGVvVGh1bWJQbGF5QnV0dG9uIC5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uVmlkZW9UaHVtYnNJbWFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLlZpZGVvVGh1bWJzSW1hZ2U6YWZ0ZXIge1xyXG4gIHotaW5kZXg6IDY7XHJcbiAgdG9wOiAwO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJhY2tncm91bmQ6IHJnYigxOCwgMTgsIDE4KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg0NywgNzYsIDY0LCAwLjkpIDAlLCByZ2JhKDQ3LCA3NiwgNjQsIDAuNSkgNTAlLCByZ2JhKDQ3LCA3NiwgNjQsIDAuMikgMTAwJSk7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5WaWRlb1RodW1ic0ltYWdlIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLlJlY2lwZUltYWdlc0xJc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uUmVjaXBlSW1hZ2VzVGh1bWJzIHtcclxuICB3aWR0aDogMzIuMzMlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMS41JTtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNSU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDFweCAycHggM3B4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgaGVpZ2h0OiA4dm1heDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLlJlY2lwZUltYWdlc1RodW1iczpudGgtY2hpbGQoM24pIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLlJlY2lwZUltYWdlc1RodW1icyAuUmVjaXBlSW1hZ2VTcmMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxub2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5DaGVmRkxleCB7XHJcbiAgd2lkdGg6IDI0JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbn1cclxuXHJcbi5DaGVmQ2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMXB4IDJweCAzcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAxM3ZtYXg7XHJcbn1cclxuXHJcbi5DaGVmSW1hZ2Uge1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5DaGVmSW1hZ2U6YWZ0ZXIge1xyXG4gIHotaW5kZXg6IDY7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE4LCAxOCwgMTgpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE4LCAxOCwgMTgsIDAuNSkgMCUsIHJnYmEoMTksIDE5LCAxOSwgMC4yKSAyMCUsIHJnYmEoMTksIDE5LCAxOSwgMCkgMTAwJSk7XHJcbiAgbGVmdDogMDtcclxufVxyXG4uQ2hlZkltYWdlU3Jje1xyXG4gd2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjp0b3AgY2VudGVyO1xyXG59XHJcbi5DaGVmRGV0YWlscyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB6LWluZGV4OiAxMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDEwcHggMTAlIDEwcHg7XHJcbiAgYm90dG9tOiAxNSU7XHJcbiAgbGVmdDogMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5DaGVmRGV0YWlscyBzbWFsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uQ2hlZkRldGFpbHMgc3Ryb25nIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCl7XHJcbiAgLlJlY2lwZU1haW5GbGV4IHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG4uUmVjaXBlQ2VudGVyRmxleCwuUmVjaXBlTGVmdEZsZXgsLkNoZWZGTGV4e1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5OdXRyaXRpb25WYWx1ZXMsLkhvd1RvbWFrZUNhcmQsLlJlY2lwZVZpZGVvc0ltYWdlc0NhcmQsLkNoZWZDYXJke1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uQ2hlZkNhcmQge1xyXG4gIGhlaWdodDogMjV2bWF4O1xyXG59XHJcbi5SZWNpcGVUaXRsZUJsb2NrSW1hZ2V7XHJcbiAgaGVpZ2h0OiAyNXZoO1xyXG59XHJcblxyXG4uUmVjaXBlSW1hZ2VzVGh1bWJzIHtcclxuICBoZWlnaHQ6IDEwdm1heDtcclxufVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/customer/dish-ingredients/dish-ingredients.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/customer/dish-ingredients/dish-ingredients.component.ts ***!
  \*************************************************************************/
/*! exports provided: DishIngredientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishIngredientsComponent", function() { return DishIngredientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_dish_ingredients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-dish-ingredients.service */ "./src/app/customer/dish-ingredients/customer-dish-ingredients.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/commmon */ "./src/app/shared/commmon/index.ts");
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






var DishIngredientsComponent = /** @class */ (function () {
    function DishIngredientsComponent(service, route, util, dialog) {
        this.service = service;
        this.route = route;
        this.util = util;
        this.dialog = dialog;
        this.DishID = 0;
        this.DishDetails = {
            Title: '',
            ChefName: '',
            Description: '',
            Images: '',
            Ingredients: '',
            NutritionValues: '',
            Videos: '',
            ProfilePic: ''
        };
        this.GetDishDetails();
    }
    DishIngredientsComponent.prototype.ngOnInit = function () {
    };
    // get dish details by dish id
    DishIngredientsComponent.prototype.GetDishDetails = function () {
        var _this = this;
        this.DishID = parseInt(this.route.snapshot.paramMap.get('id'));
        if (!(isNaN(this.DishID)) && this.DishID !== 0) {
            this.service.GetDishDetailsByDishId(this.DishID).subscribe(function (Response) {
                if (Response.Status === true) {
                    _this.DishDetails = Response.Data;
                }
            });
        }
    };
    // get chef profile pic
    DishIngredientsComponent.prototype.GetImageLocation = function (filename) {
        var FinalLocation = '';
        if (filename == null) {
            FinalLocation = 'url(/assets/images/chef-placeholder.jpg)';
        }
        else {
            FinalLocation = 'url(' + this.util.base_url + filename + ')';
        }
        return FinalLocation;
    };
    // show video
    DishIngredientsComponent.prototype.OpenMedia = function (FileLocation, SourceType) {
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
    // get cover image
    DishIngredientsComponent.prototype.GetCoverImage = function () {
        var FinalUrl = '';
        if (this.DishDetails.Images.length > 0) {
            FinalUrl = this.util.base_url + this.DishDetails.Images[0].FileLocation;
        }
        else {
            FinalUrl = "assets/images/chocolate-tea.jpg";
        }
        return FinalUrl;
    };
    DishIngredientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dish-ingredients',
            template: __webpack_require__(/*! ./dish-ingredients.component.html */ "./src/app/customer/dish-ingredients/dish-ingredients.component.html"),
            styles: [__webpack_require__(/*! ./dish-ingredients.component.scss */ "./src/app/customer/dish-ingredients/dish-ingredients.component.scss")]
        }),
        __metadata("design:paramtypes", [_customer_dish_ingredients_service__WEBPACK_IMPORTED_MODULE_1__["CustomerDishIngredientsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_3__["CommonVariables"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], DishIngredientsComponent);
    return DishIngredientsComponent;
}());



/***/ }),

/***/ "./src/app/customer/dish-ingredients/dish-ingredients.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customer/dish-ingredients/dish-ingredients.module.ts ***!
  \**********************************************************************/
/*! exports provided: DishIngredientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishIngredientsModule", function() { return DishIngredientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dish_ingredients_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dish-ingredients-routing.module */ "./src/app/customer/dish-ingredients/dish-ingredients-routing.module.ts");
/* harmony import */ var _dish_ingredients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dish-ingredients.component */ "./src/app/customer/dish-ingredients/dish-ingredients.component.ts");
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


















var DishIngredientsModule = /** @class */ (function () {
    function DishIngredientsModule() {
    }
    DishIngredientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dish_ingredients_component__WEBPACK_IMPORTED_MODULE_3__["DishIngredientsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dish_ingredients_routing_module__WEBPACK_IMPORTED_MODULE_2__["DishIngredientsRoutingModule"],
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
    ], DishIngredientsModule);
    return DishIngredientsModule;
}());



/***/ })

}]);
//# sourceMappingURL=dish-ingredients-dish-ingredients-module.js.map