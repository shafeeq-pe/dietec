(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dietitian-dietitian-module"],{

/***/ "./src/app/layout/dietitian/dietitian-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dietitian/dietitian-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DietitianRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietitianRoutingModule", function() { return DietitianRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dietitian_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dietitian.component */ "./src/app/layout/dietitian/dietitian.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _dietitian_component__WEBPACK_IMPORTED_MODULE_2__["DietitianComponent"]
    },
    {
        path: 'food',
        loadChildren: './dish-preparation/dish-preparation.module#DishPreparationModule'
    },
    {
        path: 'set/:id',
        loadChildren: './set-food/set-food.module#SetFoodModule'
    },
    {
        path: 'patient/:id',
        loadChildren: './patient-view/patient-view.module#PatientViewModule'
    },
    {
        path: 'pre',
        loadChildren: './pre-defined-dish/pre-defined-dish.module#PreDefinedDishModule'
    },
    {
        path: 'ing',
        loadChildren: './food/food.module#FoodModule'
    },
    {
        path: 'chefs',
        loadChildren: './chefs/chefs.module#ChefsModule'
    }
];
var DietitianRoutingModule = /** @class */ (function () {
    function DietitianRoutingModule() {
    }
    DietitianRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DietitianRoutingModule);
    return DietitianRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/dietitian.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/dietitian/dietitian.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-20\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxFlex fxLayoutGap=\"5px\">\r\n  <div fxFlex *ngFor=\"let item of CustomerCallTransactions\">\r\n    <app-stat\r\n      [bgClass]=\"item.TransactionClassName\"\r\n      [icon]=\"item.TransactionIcon\"\r\n      [count]=\"item.Count\"\r\n      [label]=\"item.TransactionStatusName\"\r\n      (click)=\"SetTransactionType(item.TransactionStatusId)\"\r\n    ></app-stat>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"mb-20 mt-40\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n    <mat-form-field class=\"w-100\">\r\n      <input matInput placeholder=\"Name\" [(ngModel)]=\"CustomerName\" />\r\n    </mat-form-field>\r\n  </div>\r\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [15.33]\">\r\n    <mat-form-field class=\"w-100\">\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Start date\" [(ngModel)]=\"StartDate\" />\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [15.33]\">\r\n    <mat-form-field class=\"w-100\">\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"End date\" [(ngModel)]=\"EndDate\" />\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [20.01]\">\r\n    <mat-form-field class=\"w-100\">\r\n      <mat-select placeholder=\"Select chef\" [(ngModel)]=\"ChefID\">\r\n        <mat-option *ngFor=\"let item of Chefs\" [value]=\"item.ChefId\">{{ item.ChefName }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [12]\">\r\n    <div class=\"w-100\">\r\n      <button mat-raised-button color=\"primary\" class=\"w-100 ptb-10\" (click)=\"GetCustomerBasicDetails()\">\r\n        <mat-icon class=\"pr-20\">search</mat-icon>Search\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"mb-20\" flFlex flexLayout=\"row\" flexLayout.lt-md=\"column\">\r\n  <div fxFlex>\r\n    <p *ngIf=\"!(CustomerDetails.length > 0)\">No data found</p>\r\n    <table *ngIf=\"CustomerDetails.length > 0\" mat-table [dataSource]=\"CustomerDetails\" class=\"mat-elevation-z8\">\r\n      <ng-container matColumnDef=\"SiNo\">\r\n        <th mat-header-cell *matHeaderCellDef>Si No.</th>\r\n        <td mat-cell *matCellDef=\"let element; let i = index\">{{ i + 1 }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"PntName\">\r\n        <th mat-header-cell *matHeaderCellDef>Patient Name</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.Name }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"PhoneNumber\">\r\n        <th mat-header-cell *matHeaderCellDef>Phone Number</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.Mobile }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"SubDate\">\r\n        <th mat-header-cell *matHeaderCellDef>Subscribed Date</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.SubscriptionDate }}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Chef\">\r\n        <th mat-header-cell *matHeaderCellDef>Chef</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.ChefName }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Action\">\r\n        <th mat-header-cell *matHeaderCellDef>Action</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <button mat-icon-button color=\"primary\">\r\n            <mat-icon aria-label=\"Example icon-button with a heart icon\" (click)=\"EditCustomer(element.CustomerID)\">edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button color=\"primary\">\r\n            <mat-icon aria-label=\"Example icon-button with a heart icon\" (click)=\"ViewCustomer(element.CustomerID)\">restaurant</mat-icon>\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dietitian/dietitian.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dietitian/dietitian.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-card {\n  text-align: center; }\n\n.mat-card img {\n    border-radius: 5px;\n    margin-top: -25px; }\n\n.mat-table {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.dashborad-table-search {\n  display: flex;\n  flex-direction: row; }\n\n.w-100 {\n  width: 100%; }\n\n.btn-color {\n  background: red; }\n\n.ptb-10 {\n  padding: 5px 0; }\n\n.pr-20 {\n  padding-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2RpZXRpdGlhbi9GOlxcc2hhZmVlcSdzXFxkZWl0dGVjXFxXRUJcXEFETUlOL3NyY1xcYXBwXFxsYXlvdXRcXGRpZXRpdGlhblxcZGlldGl0aWFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRHBCO0lBR0ksa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNFLCtHQUErRyxFQUFBOztBQUdqSDtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2RpZXRpdGlhbi9kaWV0aXRpYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gIH1cclxufVxyXG4ubWF0LXRhYmxlIHtcclxuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5tYi0yMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubXQtNDAge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLmRhc2hib3JhZC10YWJsZS1zZWFyY2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4udy0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idG4tY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxufVxyXG4ucHRiLTEwIHtcclxuICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG4ucHItMjAge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/dietitian/dietitian.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dietitian/dietitian.component.ts ***!
  \*********************************************************/
/*! exports provided: DietitianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietitianComponent", function() { return DietitianComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dietitian_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dietitian.service */ "./src/app/layout/dietitian/dietitian.service.ts");
/* harmony import */ var _crm_crm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crm/crm.service */ "./src/app/layout/crm/crm.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DietitianComponent = /** @class */ (function () {
    function DietitianComponent(service, diet, route, router) {
        this.service = service;
        this.diet = diet;
        this.route = route;
        this.router = router;
        this.CustomerName = "";
        this.CustomerDetails = [];
        this.displayedColumns = ['SiNo', 'PntName', 'PhoneNumber', 'SubDate', 'Chef', 'Action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.CustomerDetails);
        this.ChefID = 0;
        this.TransactionTypeID = 0;
        this.CustomerCallTransactions = [];
        this.Chefs = [];
        this.GetCustomerBasicDetails();
        this.GetCallTransactionCount();
        this.GetChefs();
    }
    DietitianComponent.prototype.ngOnInit = function () { };
    //get customer basic details
    DietitianComponent.prototype.GetCustomerBasicDetails = function () {
        var _this = this;
        var body = {
            TransactionTypeID: this.TransactionTypeID,
            Name: this.CustomerName,
            StartDate: this.StartDate,
            EndDate: this.EndDate,
            ChefID: this.ChefID
        };
        this.service.GetDietCustomerBasicDetails(body).subscribe(function (Response) {
            if (Response.Status == true) {
                _this.CustomerDetails = Response.Data;
            }
            else {
                _this.CustomerDetails = [];
            }
        });
    };
    //get call transaction count
    DietitianComponent.prototype.GetCallTransactionCount = function () {
        var _this = this;
        this.diet.GetCustomerCallStatusCount().subscribe(function (Response) {
            if (Response.Status == true) {
                _this.CustomerCallTransactions = Response.Data;
            }
        });
    };
    //get chefs
    DietitianComponent.prototype.GetChefs = function () {
        var _this = this;
        this.diet.GetChefs().subscribe(function (Response) {
            if (Response.Status == true) {
                _this.Chefs = Response.Data;
            }
        });
    };
    //Edit customer
    DietitianComponent.prototype.EditCustomer = function (CustomerID) {
        if (CustomerID != null && CustomerID > 0) {
            this.route.navigate(['ab/crm/customer/' + CustomerID]);
        }
    };
    //edit customer details
    DietitianComponent.prototype.ViewCustomer = function (CustomerID) {
        if (CustomerID != null && CustomerID > 0) {
            this.route.navigate(['ab/diet/patient/' + CustomerID]);
        }
    };
    DietitianComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dietitian',
            template: __webpack_require__(/*! ./dietitian.component.html */ "./src/app/layout/dietitian/dietitian.component.html"),
            styles: [__webpack_require__(/*! ./dietitian.component.scss */ "./src/app/layout/dietitian/dietitian.component.scss")]
        }),
        __metadata("design:paramtypes", [_dietitian_service__WEBPACK_IMPORTED_MODULE_2__["DietitianService"], _crm_crm_service__WEBPACK_IMPORTED_MODULE_3__["CrmService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DietitianComponent);
    return DietitianComponent;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/dietitian.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dietitian/dietitian.module.ts ***!
  \******************************************************/
/*! exports provided: DietitianModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietitianModule", function() { return DietitianModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _dietitian_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dietitian-routing.module */ "./src/app/layout/dietitian/dietitian-routing.module.ts");
/* harmony import */ var _dietitian_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dietitian.component */ "./src/app/layout/dietitian/dietitian.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DietitianModule = /** @class */ (function () {
    function DietitianModule() {
    }
    DietitianModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _dietitian_routing_module__WEBPACK_IMPORTED_MODULE_7__["DietitianRoutingModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_6__["StatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            declarations: [_dietitian_component__WEBPACK_IMPORTED_MODULE_8__["DietitianComponent"]]
        })
    ], DietitianModule);
    return DietitianModule;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/dietitian.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/dietitian/dietitian.service.ts ***!
  \*******************************************************/
/*! exports provided: DietitianService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietitianService", function() { return DietitianService; });
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




var DietitianService = /** @class */ (function () {
    function DietitianService(util, service, http) {
        this.util = util;
        this.service = service;
        this.http = http;
    }
    // get diet customer details
    DietitianService.prototype.GetDietCustomerBasicDetails = function (body) {
        if (body === void 0) { body = {}; }
        var url = this.util.GetDietCustomerDetails;
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    DietitianService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_1__["CommonVariables"], DietitianService,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DietitianService);
    return DietitianService;
}());



/***/ })

}]);
//# sourceMappingURL=dietitian-dietitian-module.js.map