(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-20\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxFlex fxLayoutGap=\"5px\">\n  <div fxFlex>\n    <app-stat [bgClass]=\"'BgGreen1'\" [icon]=\"'sentiment_satisfied_alt'\" [count]=\"13\" [label]=\"'New Customers'\"></app-stat>\n  </div>\n  <div fxFlex>\n    <app-stat [bgClass]=\"'BgGreen2'\" [icon]=\"'warning'\" [count]=\"12\" [label]=\"'New Replys!'\"></app-stat>\n  </div>\n  <div fxFlex>\n    <app-stat [bgClass]=\"'BgGreen3'\" [icon]=\"'view_agenda'\" [count]=\"124\" [label]=\"'Full Data'\"></app-stat>\n  </div>\n  <div fxFlex>\n    <app-stat [bgClass]=\"'BgGreen4'\" [icon]=\"'call'\" [count]=\"13\" [label]=\"'Call Again'\"></app-stat>\n  </div>\n  <div fxFlex>\n    <app-stat [bgClass]=\"'BgGreen5'\" [icon]=\"'call_missed_outgoing'\" [count]=\"13\" [label]=\"'Renew Calls'\"></app-stat>\n  </div>\n  <div fxFlex>\n    <app-stat [bgClass]=\"'BgGreen6'\" [icon]=\"'list_alt'\" [count]=\"12\" [label]=\"'All'\"></app-stat>\n  </div>\n</div>\n\n<div class=\"mb-20 mt-40\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\n    <mat-form-field class=\"w-100\">\n      <input matInput placeholder=\"Name\" />\n    </mat-form-field>\n  </div>\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [15.33]\">\n    <mat-form-field class=\"w-100\">\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Start date\" />\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n  </div>\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [15.33]\">\n    <mat-form-field class=\"w-100\">\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"End date\" />\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n  </div>\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [20.01]\">\n    <mat-form-field class=\"w-100\">\n      <mat-select placeholder=\"Select chef\">\n        <mat-option>murshid </mat-option>\n        <mat-option> Rashid</mat-option>\n        <mat-option>hamras </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [12]\">\n    <div class=\"w-100\">\n      <button mat-raised-button color=\"primary\" class=\"w-100 ptb-10\"><mat-icon class=\"pr-20\">search</mat-icon>Search</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"mb-20\" flFlex flexLayout=\"row\" flexLayout.lt-md=\"column\">\n  <div fxFlex>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n      <ng-container matColumnDef=\"SiNo\">\n        <th mat-header-cell *matHeaderCellDef>Si No.</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.SiNo }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"PntName\">\n        <th mat-header-cell *matHeaderCellDef>Patient Name</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.PntName }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"PhoneNumber\">\n        <th mat-header-cell *matHeaderCellDef>Phone Number</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.PhoneNumber }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"RegDate\">\n        <th mat-header-cell *matHeaderCellDef>Register Date</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.RegDate }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"SubDate\">\n        <th mat-header-cell *matHeaderCellDef>Subscribed Date</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.SubDate }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"LastAction\">\n        <th mat-header-cell *matHeaderCellDef>Last Action</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.LastAction }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Chef\">\n        <th mat-header-cell *matHeaderCellDef>Chef</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.Chef }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"Action\">\n        <th mat-header-cell *matHeaderCellDef>Action</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.Action }}</td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-card {\n  text-align: center; }\n\n.mat-card img {\n    border-radius: 5px;\n    margin-top: -25px; }\n\n.mat-table {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.dashborad-table-search {\n  display: flex;\n  flex-direction: row; }\n\n.w-100 {\n  width: 100%; }\n\n.btn-color {\n  background: red; }\n\n.ptb-10 {\n  padding: 5px 0; }\n\n.pr-20 {\n  padding-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9GOlxcc2hhZmVlcSdzXFxkZWl0dGVjXFxXRUJcXEFETUlOL3NyY1xcYXBwXFxsYXlvdXRcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRHBCO0lBR0ksa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNFLCtHQUErRyxFQUFBOztBQUdqSDtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgfVxufVxuLm1hdC10YWJsZSB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1iLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tdC00MCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4uZGFzaGJvcmFkLXRhYmxlLXNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4udy0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5idG4tY29sb3Ige1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG4ucHRiLTEwIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4ucHItMjAge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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


var ELEMENT_DATA = [
    {
        SiNo: 1,
        PntName: 'HydrogenHydrogenHydrogenHydrogenHydrogen',
        PhoneNumber: 45,
        RegDate: 'H',
        SubDate: 'H',
        LastAction: 'H',
        Chef: 'H',
        Action: 'H'
    },
    {
        SiNo: 1,
        PntName: 'Murshid',
        PhoneNumber: 1234454894,
        RegDate: 'Feb  24 2018',
        SubDate: 'Feb  24 2018',
        LastAction: 'H',
        Chef: 'H',
        Action: 'H'
    },
    {
        SiNo: 1,
        PntName: 'Hamras',
        PhoneNumber: 5646546556,
        RegDate: 'Feb  24 2018',
        SubDate: 'Feb  24 2018',
        LastAction: 'H',
        Chef: 'H',
        Action: 'H'
    },
    {
        SiNo: 1,
        PntName: 'Rishad',
        PhoneNumber: 4544554454,
        RegDate: 'Feb  24 2018',
        SubDate: 'Feb  24 2018',
        LastAction: 'H',
        Chef: 'H',
        Action: 'H'
    },
    {
        SiNo: 1,
        PntName: 'Fayis',
        PhoneNumber: 44545454544,
        RegDate: 'Feb  24 2018',
        SubDate: 'Feb  24 2018',
        LastAction: 'H',
        Chef: 'H',
        Action: 'H'
    },
    {
        SiNo: 1,
        PntName: 'Irshad',
        PhoneNumber: 778788474554,
        RegDate: 'Feb  24 2018',
        SubDate: 'Feb  24 2018',
        LastAction: 'H',
        Chef: 'H',
        Action: 'H'
    },
    {
        SiNo: 1,
        PntName: 'Hadeeja',
        PhoneNumber: 4445472245,
        RegDate: 'Feb  24 2018',
        SubDate: 'Feb  24 2018',
        LastAction: 'H',
        Chef: 'H',
        Action: 'H'
    },
    {
        SiNo: 1,
        PntName: 'Ayisha',
        PhoneNumber: 454545454541,
        RegDate: 'Feb  24 2018',
        SubDate: 'Feb  24 2018',
        LastAction: 'H',
        Chef: 'H',
        Action: 'H'
    },
    {
        SiNo: 1,
        PntName: 'John',
        PhoneNumber: 4545478787,
        RegDate: 'Feb  24 2018',
        SubDate: 'Feb  24 2018',
        LastAction: 'Feb  24 2018',
        Chef: 'H',
        Action: 'H'
    },
    {
        SiNo: 1,
        PntName: 'Ali Akbar',
        PhoneNumber: 565655545454,
        RegDate: 'Aug 05 2018',
        SubDate: 'Aug  24 2018',
        LastAction: 'N/A',
        Chef: 'Ashif',
        Action: 'H'
    },
    {
        SiNo: 1,
        PntName: 'Mahmood',
        PhoneNumber: 1544454547224,
        RegDate: 'Feb  24 2018',
        SubDate: 'Feb  24 2018',
        LastAction: 'H',
        Chef: 'Arshad',
        Action: 'H'
    },
    {
        SiNo: 1,
        PntName: 'Arshad',
        PhoneNumber: 4656565654545,
        RegDate: 'Feb  24 2018',
        SubDate: 'Feb  24 2018',
        LastAction: 'N/A',
        Chef: 'Feb  24 2018',
        Action: 'H'
    },
    { SiNo: 1, PntName: 'Salman', PhoneNumber: 465656565695, RegDate: 'Feb  24 2018', SubDate: 'H', LastAction: 'H', Chef: 'H', Action: 'H' }
];
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.displayedColumns = ['SiNo', 'PntName', 'PhoneNumber', 'RegDate', 'SubDate', 'LastAction', 'Chef', 'Action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.places = [];
        this.places = [
            {
                imgSrc: 'assets/images/card-1.jpg',
                place: 'Cozy 5 Stars Apartment',
                description: 
                // tslint:disable-next-line:max-line-length
                'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
                charge: '$899/night',
                location: 'Barcelona, Spain'
            },
            {
                imgSrc: 'assets/images/card-2.jpg',
                place: 'Office Studio',
                description: 
                // tslint:disable-next-line:max-line-length
                'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
                charge: '$1,119/night',
                location: 'London, UK'
            },
            {
                imgSrc: 'assets/images/card-3.jpg',
                place: 'Beautiful Castle',
                description: 
                // tslint:disable-next-line:max-line-length
                'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
                charge: '$459/night',
                location: 'Milan, Italy'
            }
        ];
    }
    DashboardComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
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
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map