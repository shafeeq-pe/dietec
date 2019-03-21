(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crm-crm-module"],{

/***/ "./src/app/layout/crm/crm-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/crm/crm-routing.module.ts ***!
  \**************************************************/
/*! exports provided: CrmRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmRoutingModule", function() { return CrmRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crm.component */ "./src/app/layout/crm/crm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _crm_component__WEBPACK_IMPORTED_MODULE_2__["CrmComponent"]
    },
    {
        path: 'customer/:id',
        loadChildren: './customer-details/customer-details.module#CustomerDetailsModule'
    },
    {
        path: 'customer',
        redirectTo: ''
    }
];
var CrmRoutingModule = /** @class */ (function () {
    function CrmRoutingModule() {
    }
    CrmRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CrmRoutingModule);
    return CrmRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/crm/crm.component.html":
/*!***********************************************!*\
  !*** ./src/app/layout/crm/crm.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-20\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxFlex fxLayoutGap=\"5px\">\r\n  <div fxFlex *ngFor=\"let item of CustomerCallTransactions\">\r\n    <app-stat\r\n      [bgClass]=\"item.TransactionClassName\"\r\n      [icon]=\"item.TransactionIcon\"\r\n      [count]=\"item.Count\"\r\n      [label]=\"item.TransactionStatusName\"\r\n      (click)=\"SetTransactionType(item.TransactionStatusId)\"\r\n    ></app-stat>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"mb-20 mt-40\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n    <mat-form-field class=\"w-100\">\r\n      <input matInput placeholder=\"Name\" [(ngModel)]=\"CustomerName\" />\r\n    </mat-form-field>\r\n  </div>\r\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [15.33]\">\r\n    <mat-form-field class=\"w-100\">\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Start date\" [(ngModel)]=\"StartDate\" />\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [15.33]\">\r\n    <mat-form-field class=\"w-100\">\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"End date\" [(ngModel)]=\"EndDate\" />\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [20.01]\">\r\n    <mat-form-field class=\"w-100\">\r\n      <mat-select placeholder=\"Select chef\" [(ngModel)]=\"ChefID\">\r\n        <mat-option *ngFor=\"let item of Chefs\" [value]=\"item.ChefId\">{{ item.ChefName }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <div [fxFlex]=\"i\" *ngFor=\"let i of [12]\">\r\n    <div class=\"w-100\">\r\n      <button mat-raised-button color=\"primary\" class=\"w-100 ptb-10\" (click)=\"GetCustomerBasicDetails()\">\r\n        <mat-icon class=\"pr-20\">search</mat-icon>Search\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"mb-20\" flFlex flexLayout=\"row\" flexLayout.lt-md=\"column\">\r\n  <div fxFlex>\r\n    <p *ngIf=\"!(CustomerDetails.length > 0)\">No data found</p>\r\n    <table *ngIf=\"CustomerDetails.length > 0\" mat-table [dataSource]=\"CustomerDetails\" class=\"mat-elevation-z8\">\r\n      <ng-container matColumnDef=\"SiNo\">\r\n        <th mat-header-cell *matHeaderCellDef>Si No.</th>\r\n        <td mat-cell *matCellDef=\"let element; let i = index\">{{ i + 1 }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"PntName\">\r\n        <th mat-header-cell *matHeaderCellDef>Patient Name</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.Name }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"PhoneNumber\">\r\n        <th mat-header-cell *matHeaderCellDef>Phone Number</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.Mobile }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"RegDate\">\r\n        <th mat-header-cell *matHeaderCellDef>Register Date</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.RegistrationDate }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"SubDate\">\r\n        <th mat-header-cell *matHeaderCellDef>Subscribed Date</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.SubscriptionDate }}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"LastAction\">\r\n        <th mat-header-cell *matHeaderCellDef>Last Action</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.LastAction }}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Chef\">\r\n        <th mat-header-cell *matHeaderCellDef>Chef</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.ChefName }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Action\">\r\n        <th mat-header-cell *matHeaderCellDef>Action</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <button mat-icon-button color=\"primary\">\r\n            <mat-icon aria-label=\"Example icon-button with a heart icon\" (click)=\"EditCustomer(element.CustomerID)\">edit</mat-icon>\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/crm/crm.component.scss":
/*!***********************************************!*\
  !*** ./src/app/layout/crm/crm.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-header-text {\n  margin: 0 0 !important; }\n\n.PatientDetailMain {\n  padding: 0;\n  border-radius: 8px;\n  overflow: hidden; }\n\ntable {\n  width: 100%; }\n\n.mat-card {\n  text-align: center; }\n\n.mat-card img {\n    border-radius: 5px;\n    margin-top: -25px; }\n\n.mat-table {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.dashborad-table-search {\n  display: flex;\n  flex-direction: row; }\n\n.w-100 {\n  width: 100%; }\n\n.btn-color {\n  background: red; }\n\n.ptb-10 {\n  padding: 5px 0; }\n\n.pr-20 {\n  padding-right: 20px; }\n\n.TabsContents {\n  box-shadow: none;\n  padding: 1.8vmax 1.5vmax 1vmax; }\n\n.mr-20 {\n  padding-right: 20px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.example-chip-list {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NybS9GOlxcc2hhZmVlcSdzXFxkZWl0dGVjXFxXRUJcXEFETUlOL3NyY1xcYXBwXFxsYXlvdXRcXGNybVxcY3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7SUFHSSxrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0UsK0dBQStHLEVBQUE7O0FBR2pIO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jcm0vY3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICBtYXJnaW46IDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uUGF0aWVudERldGFpbE1haW4ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICB9XHJcbn1cclxuLm1hdC10YWJsZSB7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4ubWItMjAge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLm10LTQwIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5kYXNoYm9yYWQtdGFibGUtc2VhcmNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLnctMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnRuLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuLnB0Yi0xMCB7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuLnByLTIwIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uVGFic0NvbnRlbnRzIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHBhZGRpbmc6IDEuOHZtYXggMS41dm1heCAxdm1heDtcclxufVxyXG4ubXItMjAge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLm10LTQwIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5leGFtcGxlLWNoaXAtbGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/crm/crm.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/crm/crm.component.ts ***!
  \*********************************************/
/*! exports provided: CrmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmComponent", function() { return CrmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _crm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crm.service */ "./src/app/layout/crm/crm.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_commmon_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/commmon/dialogue/dialogue.service */ "./src/app/shared/commmon/dialogue/dialogue.service.ts");
/* harmony import */ var src_app_shared_commmon_dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/commmon/dialogue/dialogue.component */ "./src/app/shared/commmon/dialogue/dialogue.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CrmComponent = /** @class */ (function () {
    function CrmComponent(service, route, dialog, popup) {
        this.service = service;
        this.route = route;
        this.dialog = dialog;
        this.popup = popup;
        this.CustomerCallTransactions = [];
        this.Chefs = [];
        this.CustomerName = "";
        this.CustomerDetails = [];
        this.displayedColumns = ['SiNo', 'PntName', 'PhoneNumber', 'RegDate', 'SubDate', 'LastAction', 'Chef', 'Action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.CustomerDetails);
        this.places = [];
        this.ChefID = 0;
        this.TransactionTypeID = 0;
        this.GetCallTransactionCount();
        this.GetChefs();
        this.GetCustomerBasicDetails();
    }
    CrmComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CrmComponent.prototype.ngOnInit = function () { };
    //get call transaction count
    CrmComponent.prototype.GetCallTransactionCount = function () {
        var _this = this;
        this.service.GetCustomerCallStatusCount().subscribe(function (Response) {
            if (Response.Status == true) {
                _this.CustomerCallTransactions = Response.Data;
            }
        });
    };
    //get chefs
    CrmComponent.prototype.GetChefs = function () {
        var _this = this;
        this.service.GetChefs().subscribe(function (Response) {
            if (Response.Status == true) {
                _this.Chefs = Response.Data;
            }
        });
    };
    // get customer basic details
    CrmComponent.prototype.GetCustomerBasicDetails = function () {
        var _this = this;
        var body = {
            TransactionTypeID: this.TransactionTypeID,
            Name: this.CustomerName,
            StartDate: this.StartDate,
            EndDate: this.EndDate,
            ChefID: this.ChefID
        };
        this.service.GetCustomerBasicDetails(body).subscribe(function (Response) {
            if (Response.Status === true) {
                _this.CustomerDetails = Response.Data;
            }
            else {
                _this.CustomerDetails = [];
            }
        });
    };
    // Edit customer
    CrmComponent.prototype.EditCustomer = function (CustomerID) {
        if (CustomerID != null && CustomerID > 0) {
            this.popup.SetData({ Message: 'Please wait..', Route: '', Status: '' });
            this.openDialog();
            this.route.navigate(['ab/crm/customer/' + CustomerID]);
        }
    };
    // set transaction Type id
    CrmComponent.prototype.SetTransactionType = function (TransactionTypeID) {
        if (TransactionTypeID === 0) {
            this.ChefID = 0;
        }
        this.TransactionTypeID = TransactionTypeID;
        this.GetCustomerBasicDetails();
    };
    // open dialogue
    CrmComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(src_app_shared_commmon_dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_5__["DialogueComponent"], {
            width: '250px',
            disableClose: true
        });
        // fires when dialogue closed
        dialogRef.afterClosed().subscribe(function (result) {
            //
        });
    };
    CrmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crm',
            template: __webpack_require__(/*! ./crm.component.html */ "./src/app/layout/crm/crm.component.html"),
            styles: [__webpack_require__(/*! ./crm.component.scss */ "./src/app/layout/crm/crm.component.scss")]
        }),
        __metadata("design:paramtypes", [_crm_service__WEBPACK_IMPORTED_MODULE_2__["CrmService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], src_app_shared_commmon_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_4__["DialogueService"]])
    ], CrmComponent);
    return CrmComponent;
}());



/***/ }),

/***/ "./src/app/layout/crm/crm.module.ts":
/*!******************************************!*\
  !*** ./src/app/layout/crm/crm.module.ts ***!
  \******************************************/
/*! exports provided: CrmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmModule", function() { return CrmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _crm_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crm-routing.module */ "./src/app/layout/crm/crm-routing.module.ts");
/* harmony import */ var _crm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crm.component */ "./src/app/layout/crm/crm.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CrmModule = /** @class */ (function () {
    function CrmModule() {
    }
    CrmModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_crm_component__WEBPACK_IMPORTED_MODULE_3__["CrmComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _crm_routing_module__WEBPACK_IMPORTED_MODULE_2__["CrmRoutingModule"],
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            entryComponents: []
        })
    ], CrmModule);
    return CrmModule;
}());



/***/ })

}]);
//# sourceMappingURL=crm-crm-module.js.map