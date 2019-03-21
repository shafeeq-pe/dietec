(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-details-customer-details-module"],{

/***/ "./src/app/layout/crm/customer-details/customer-details-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/crm/customer-details/customer-details-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsRoutingModule", function() { return CustomerDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-details.component */ "./src/app/layout/crm/customer-details/customer-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _customer_details_component__WEBPACK_IMPORTED_MODULE_2__["CustomerDetailsComponent"]
    }
];
var CustomerDetailsRoutingModule = /** @class */ (function () {
    function CustomerDetailsRoutingModule() {
    }
    CustomerDetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomerDetailsRoutingModule);
    return CustomerDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/crm/customer-details/customer-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/crm/customer-details/customer-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-20\"><h1 class=\"mat-card-title\">Patient Details</h1></div>\r\n<mat-card class=\"PatientDetailMain\">\r\n  <mat-tab-group backgroundColor=\"warn\" dynamicHeight animationDuration=\"1000ms\">\r\n    <mat-tab label=\"Basic Details\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- ROW 1 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>First Name</mat-label>\r\n              <input matInput placeholder=\"First Name\" [(ngModel)]=\"CustomerBasicDetailsCustomer.FirstName\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Last Name</mat-label>\r\n              <input matInput placeholder=\"Last Name\" [(ngModel)]=\"CustomerBasicDetailsCustomer.LastName\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <!-- <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Registration ID</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div> -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Civil ID</mat-label>\r\n              <input matInput placeholder=\"Civil ID\" [(ngModel)]=\"CustomerBasicDetailsCustomer.CivilId\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <!-- ROW 2 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Subscribed Chef</mat-label>\r\n              <mat-select [(ngModel)]=\"CustomerBasicDetailsCustomer.ChefId\">\r\n                <mat-option *ngFor=\"let item of Chef\" [value]=\"item.ChefId\">{{ item.ChefName }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Job Title</mat-label>\r\n              <input matInput placeholder=\"Job Title\" [(ngModel)]=\"CustomerBasicDetailsCustomer.JobTitle\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Gender</mat-label>\r\n              <mat-select placeholder=\"Select Gender\" [(ngModel)]=\"CustomerBasicDetailsCustomer.GenderId\">\r\n                <mat-option *ngFor=\"let item of Gender\" [value]=\"item.GenderId\">{{ item.GenderName }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Nationality</mat-label>\r\n              <mat-select placeholder=\"Select Nationality\">\r\n                <mat-option *ngFor=\"let item of Country\" value=\"item.countryId\">{{item.countryName}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Birth Date </mat-label>\r\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"mm/dd/yyyy\" [(ngModel)]=\"CustomerBasicDetailsCustomer.BirthDate\" />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Marital Status</mat-label>\r\n              <mat-select [(ngModel)]=\"CustomerBasicDetailsCustomer.MaritalStatusId\">\r\n                <mat-option *ngFor=\"let item of MaritalStatus\" [value]=\"item.MaritalStatusId\">\r\n                  {{ item.MaritalStatusName }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Email</mat-label>\r\n              <input email matInput placeholder=\"Email\" [(ngModel)]=\"Customer.EmailAddress\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 4 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Mobile</mat-label>\r\n              <input matInput placeholder=\"Phone\" [(ngModel)]=\"Customer.MobileNo\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"40\">\r\n          <!-- 1 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [24]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100 mr-20\">\r\n              <mat-label>Phone No</mat-label>\r\n              <input class=\"w-100\" matInput placeholder=\"Mobile Number\" [(ngModel)]=\"CustomerBasicDetailsCustomer.AlternatePhone\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Allergies\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- <mat-card-subtitle>Allergies</mat-card-subtitle> -->\r\n        <mat-form-field appearance=\"outline\" class=\"w-100 mr-20\">\r\n          <mat-label>Add Allergies</mat-label>\r\n          <input class=\"w-100\" matInput placeholder=\"Allergies\" [(ngModel)]=\"CustomerPhysicalsCustomer.CommonAllergies\" />\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\" class=\"w-100 mr-20\">\r\n          <mat-label>Food Allergies</mat-label>\r\n          <input class=\"w-100\" matInput placeholder=\"Food Allergies\" [(ngModel)]=\"CustomerPhysicalsCustomer.FoodBasedAllergies\" />\r\n        </mat-form-field>\r\n      </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Physical Measurements\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- ROW 1 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Height (CM) </mat-label>\r\n              <input matInput placeholder=\"Height\" [(ngModel)]=\"CustomerHealthMeasuresCustomer.Height\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Weight(KG) </mat-label>\r\n              <input matInput placeholder=\"Weight\" [(ngModel)]=\"CustomerHealthMeasuresCustomer.Weight\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Waist(CM)</mat-label>\r\n              <input matInput placeholder=\"Waist\" [(ngModel)]=\"CustomerHealthMeasuresCustomer.Waist\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 4 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Automatic BMI</mat-label>\r\n              <input\r\n                matInput\r\n                placeholder=\"Placeholder\"\r\n                readonly=\"true\"\r\n                [value]=\"\r\n                  (\r\n                    CustomerHealthMeasuresCustomer.Weight /\r\n                    ((CustomerHealthMeasuresCustomer.Height / 100) * (CustomerHealthMeasuresCustomer.Height / 100))\r\n                  ).toFixed(2)\r\n                \"\r\n              />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Clinical  History\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- ROW 1 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Current diseases/disorders </mat-label>\r\n              <textarea matInput placeholder=\"Current Disease\" [(ngModel)]=\"CustomerPhysicalsCustomer.CurrentDisease\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Family members diseases</mat-label>\r\n              <textarea\r\n                matInput\r\n                placeholder=\"Family members diseases\"\r\n                [(ngModel)]=\"CustomerPhysicalsCustomer.FamilyMemberDiseases\"\r\n              ></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label> Current Medicines</mat-label>\r\n              <textarea matInput placeholder=\"Current Medicines\" [(ngModel)]=\"CustomerPhysicalsCustomer.CurrentMedicines\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Food Interests\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- ROW 1 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Interested food items </mat-label>\r\n              <mat-chip-list #chipList>\r\n                <mat-chip\r\n                  *ngFor=\"let fruit of InterestedFood\"\r\n                  [selectable]=\"selectable\"\r\n                  [removable]=\"removable\"\r\n                  (removed)=\"removeInt(fruit)\"\r\n                >\r\n                  {{ fruit.FoodName }}\r\n                  <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                </mat-chip>\r\n                <input\r\n                  placeholder=\"Enter food item\"\r\n                  #IntFoodInput\r\n                  [formControl]=\"foodCtrl\"\r\n                  [matAutocomplete]=\"auto\"\r\n                  [matChipInputFor]=\"chipList\"\r\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                />\r\n              </mat-chip-list>\r\n              <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"InterstFoodselected($event)\">\r\n                <mat-option *ngFor=\"let item of (filteredFoods | async)\" [value]=\"item\">\r\n                  {{ item.FoodName }}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Not interested food items </mat-label>\r\n              <mat-chip-list #chipList>\r\n                <mat-chip\r\n                  *ngFor=\"let fruit of NotInterestedFood\"\r\n                  [selectable]=\"selectable\"\r\n                  [removable]=\"removable\"\r\n                  (removed)=\"removeNotInt(fruit)\"\r\n                >\r\n                  {{ fruit.FoodName }}\r\n                  <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                </mat-chip>\r\n                <input\r\n                  placeholder=\"Enter food item\"\r\n                  #NotIntFoodInput\r\n                  [formControl]=\"foodCtrl\"\r\n                  [matAutocomplete]=\"auto\"\r\n                  [matChipInputFor]=\"chipList\"\r\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                />\r\n              </mat-chip-list>\r\n              <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"NotInterstFoodselected($event)\">\r\n                <mat-option *ngFor=\"let item of (filteredFoods | async)\" [value]=\"item\">\r\n                  {{ item.FoodName }}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Type of Diet</mat-label>\r\n              <mat-select placeholder=\"Type of Diet\" [(ngModel)]=\"CustomerBasicDetailsCustomer.FoodDietTypeId\">\r\n                <mat-option *ngFor=\"let item of FoodDietType\" [value]=\"item.FoodDietTypeId\">{{ item.FoodDietTypeName }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Workout Status\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- ROW 1 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Type of workout</mat-label>\r\n              <input matInput placeholder=\"Type of workout\" [(ngModel)]=\"CustomerPhysicalsCustomer.WorkOutType\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Work hours / day </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [(ngModel)]=\"CustomerPhysicalsCustomer.Frequency\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 4 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Exercises</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [(ngModel)]=\"CustomerPhysicalsCustomer.Excercises\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Communication Details\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- ROW 1 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <!-- <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-card-subtitle>Type of work </mat-card-subtitle>\r\n            <mat-radio-group appearance=\"outline\" class=\"w-100 mt-40 \">\r\n              <mat-radio-button value=\"1\" class=\"mr-20\">House</mat-radio-button>\r\n              <mat-radio-button value=\"2\">Flat</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div> -->\r\n        </div>\r\n\r\n        <!-- ROW 2 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>House </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [(ngModel)]=\"CustomerCommunicationsCustomer.HouseName\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Avenue </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [(ngModel)]=\"CustomerCommunicationsCustomer.AvenueName\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Street</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [(ngModel)]=\"CustomerCommunicationsCustomer.StreetName\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 4 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Block</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [(ngModel)]=\"CustomerCommunicationsCustomer.BlockName\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- ROW 2 -->\r\n        <div class=\" \" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [24]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Country</mat-label>\r\n              <mat-select [(ngModel)]=\"CustomerCommunicationsCustomer.CountryId\" (selectionChange)=\"changeCountry($event.value)\">\r\n                <mat-option *ngFor=\"let item of Country\" [value]=\"item.CountryId\">\r\n                  {{ item.CountryName }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [24]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>State </mat-label>\r\n              <mat-select [(ngModel)]=\"CustomerCommunicationsCustomer.StateId\">\r\n                <mat-option *ngFor=\"let item of States\" [value]=\"item.StateId\">\r\n                  {{ item.StateName }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Call History\">\r\n      <mat-card class=\"TabsContents\">\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Date</mat-label>\r\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Placeholder\" [(ngModel)]=\"TransactionDate\" />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Transaction</mat-label>\r\n            <mat-select placeholder=\"Select Transaction\" [(ngModel)]=\"TransactionStatusID\" (selectionChange)=\"UpdateTransaction()\">\r\n              <mat-option *ngFor=\"let item of CallStatus\" value=\"{{ item.TransactionStatusId }}\">{{\r\n                item.TransactionStatusName\r\n              }}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <table class=\"w-100 mat-elevation-z1\" mat-table [dataSource]=\"CustomerCallHistoryCustomer\" >\r\n            <ng-container matColumnDef=\"TransactionStatusName\">\r\n                <mat-header-cell *matHeaderCellDef>Transaction Status </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.TransactionStatusName}} </mat-cell>\r\n              </ng-container>\r\n               <ng-container matColumnDef=\"TransactionDate\">\r\n                <mat-header-cell *matHeaderCellDef>Transaction Date </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.TransactionDate}} </mat-cell>\r\n              </ng-container> \r\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </table>\r\n      </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Account Details\">\r\n      <mat-card class=\"TabsContents\">\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>UserName</mat-label>\r\n              <input matInput placeholder=\"Username\" [(ngModel)]=\"Customer.UserName\" (change)=\"CheckUserNameAvailability()\" />\r\n            </mat-form-field>\r\n            <p>{{ UserNameAvailability }}</p>\r\n          </div>\r\n          <!-- 2 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Password</mat-label>\r\n              <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"Customer.PassWord\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>\r\n<div [fxFlex]=\"i\" *ngFor=\"let i of [12]\">\r\n  <div class=\"w-100 mt-40\">\r\n    <button mat-raised-button class=\"SaveBtnLg w-100\" (click)=\"SaveCustomerData()\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/crm/customer-details/customer-details.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/crm/customer-details/customer-details.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".PatientDetailMain {\n  padding: 0;\n  border-radius: 8px;\n  overflow: hidden; }\n\n.TabsContents {\n  box-shadow: none;\n  padding: 1.8vmax 1.5vmax 1vmax; }\n\n.mr-20 {\n  padding-right: 20px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.example-chip-list {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NybS9jdXN0b21lci1kZXRhaWxzL0Y6XFxzaGFmZWVxJ3NcXGRlaXR0ZWNcXFdFQlxcQURNSU4vc3JjXFxhcHBcXGxheW91dFxcY3JtXFxjdXN0b21lci1kZXRhaWxzXFxjdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NybS9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUGF0aWVudERldGFpbE1haW4ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5UYWJzQ29udGVudHMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcGFkZGluZzogMS44dm1heCAxLjV2bWF4IDF2bWF4O1xyXG59XHJcbi5tci0yMCB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4ubXQtNDAge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLmV4YW1wbGUtY2hpcC1saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/crm/customer-details/customer-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/crm/customer-details/customer-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-details.service */ "./src/app/layout/crm/customer-details/customer-details.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _dietitian_dish_preparation_dish_preparation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dietitian/dish-preparation/dish-preparation.service */ "./src/app/layout/dietitian/dish-preparation/dish-preparation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_commmon_dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/commmon/dialogue/dialogue.component */ "./src/app/shared/commmon/dialogue/dialogue.component.ts");
/* harmony import */ var _shared_commmon_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/commmon/dialogue/dialogue.service */ "./src/app/shared/commmon/dialogue/dialogue.service.ts");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CustomerDetailsComponent = /** @class */ (function () {
    // constructor
    function CustomerDetailsComponent(service, food, route, dialog, popup, common) {
        var _this = this;
        this.service = service;
        this.food = food;
        this.route = route;
        this.dialog = dialog;
        this.popup = popup;
        this.common = common;
        // variables
        this.UserID = 0;
        this.CallStatus = [];
        this.States = [];
        this.InterstedFoodCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.NotInterestedFoodCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.InterestedFood = [];
        this.NotInterestedFood = [];
        this.TransactionDate = new Date;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.UserNameAvailability = '';
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.CustomerBasicDetailsCustomer = {
            AlternatePhone: '',
            BirthDate: '',
            ChefId: '',
            CivilId: '',
            CustomerBasicDetailId: '',
            CustomerId: '',
            FirstName: '',
            FoodDietTypeId: '',
            GenderId: '',
            JobTitle: '',
            LastName: '',
            LastUpdate: '',
            MaritalStatus: '',
            MaritalStatusId: '',
            RegistrationDate: '',
            TransactionStatusId: '',
            UserId: ''
        };
        this.CustomerCallHistoryCustomer = [];
        this.CustomerCommunicationsCustomer = [];
        this.CustomerFoodInterestsCustomer = [];
        this.CustomerHealthMeasuresCustomer = {
            Height: 0,
            Weight: 0
        };
        this.Customer = {
            CustomerBasicDetailsCustomer: this.CustomerBasicDetailsCustomer,
            CustomerCallHistoryCustomer: [],
            CustomerCommunicationsCustomer: [],
            CustomerFoodInterestsCustomer: [],
            CustomerHealthMeasuresCustomer: [],
            CustomerPhysicalsCustomer: [],
            MobileNo: '',
            UserId: 0,
            UserName: '',
            PassWord: '',
            UserTypeId: 0,
            IsLocked: 0
        };
        this.CustomerPhysicalsCustomer = {
            CommonAllergies: '',
            FoodBasedAllergies: '',
            CurrentDisease: '',
            FamilyMemberDiseases: '',
            CurrentMedicines: '',
            WorkOutType: '',
            Frequency: '',
            Excercises: '',
            CustomerId: 0,
            CustomerPhysicalId: 0,
            LastUpdate: '',
            Customer: '',
            User: '',
            UserId: 0
        };
        this.foodCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.foods = [];
        this.Allfoods = [];
        this.SaveStatus = 0;
        this.displayedColumns = ['TransactionStatusName', 'TransactionDate'];
        this.GetCustomerDropDown();
        this.UserID = parseInt(this.route.snapshot.paramMap.get('id'));
        if (this.UserID > 0 && this.UserID != null) {
            this.GetCustomerDetailsForCRM();
        }
        this.filteredFoods = this.foodCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (fruit) { return fruit ? _this._filter(fruit) : _this.Allfoods.slice(); }));
        this.GetAllFood();
    }
    // remove item from interested food items
    CustomerDetailsComponent.prototype.removeInt = function (fruit) {
        var index = this.InterestedFood.indexOf(fruit);
        if (index >= 0) {
            this.InterestedFood.splice(index, 1);
            var MainIndex = this.CustomerFoodInterestsCustomer.indexOf(fruit);
            if (MainIndex >= 0) {
                this.CustomerFoodInterestsCustomer.splice(MainIndex, 1);
            }
        }
    };
    // remove item from not interested food items
    CustomerDetailsComponent.prototype.removeNotInt = function (fruit) {
        var index = this.NotInterestedFood.indexOf(fruit);
        if (index >= 0) {
            this.NotInterestedFood.splice(index, 1);
            var MainIndex = this.CustomerFoodInterestsCustomer.indexOf(fruit);
            if (MainIndex >= 0) {
                this.CustomerFoodInterestsCustomer.splice(MainIndex, 1);
            }
        }
    };
    // fire when an item selected in interested food
    CustomerDetailsComponent.prototype.InterstFoodselected = function (event) {
        var _this = this;
        this.InterestedFood.forEach(function (element, index) {
            if (element.FoodName === event.option.value.FoodName) {
                _this.InterestedFood.splice(index, 1);
            }
        });
        this.InterestedFood.push(event.option.value);
        this.InterestedFood.forEach(function (element, index) {
            _this.CustomerFoodInterestsCustomer.push({ FoodId: element.FoodId, FoodName: element.FoodName, InterestId: 0 });
        });
        this.IntFoodInput.nativeElement.value = '';
        this.foodCtrl.setValue(null);
    };
    // fire when an item selected in not interested food
    CustomerDetailsComponent.prototype.NotInterstFoodselected = function (event) {
        var _this = this;
        this.NotInterestedFood.forEach(function (element, index) {
            if (element.FoodName === event.option.value.FoodName) {
                _this.NotInterestedFood.splice(index, 1);
            }
        });
        this.NotInterestedFood.push(event.option.value);
        this.NotInterestedFood.forEach(function (element, index) {
            _this.CustomerFoodInterestsCustomer.push({ FoodId: element.FoodId, FoodName: element.FoodName, InterestId: 0 });
        });
        this.NotIntFoodInput.nativeElement.value = '';
        this.NotInterestedFoodCtl.setValue(null);
    };
    // food filter
    CustomerDetailsComponent.prototype._filter = function (value) {
        var filterValue = value;
        return this.Allfoods.filter(function (food) { return food.FoodName.toLowerCase().indexOf(filterValue) === 0; });
    };
    // food display function for autocomplete
    CustomerDetailsComponent.prototype.IngredientdisplayFn = function (food) {
        return food ? food.FoodName : undefined;
    };
    // get dropdown for customer form
    CustomerDetailsComponent.prototype.GetCustomerDropDown = function () {
        var _this = this;
        this.service.GetCustomerDetailsDropdowns().subscribe(function (Response) {
            _this.DropDowndata = Response.data;
            var source = _this.DropDowndata;
            _this.CallStatus = source.CallStatus;
            _this.Country = source.Country;
            _this.FoodDietType = source.FoodDietType;
            _this.Gender = source.Gender;
            _this.MaritalStatus = source.MaritalStatus;
            _this.Chef = source.Chef;
            _this.Country.forEach(function (element) {
                var StatesIn = element.States;
                StatesIn.forEach(function (element) {
                    _this.States.push(element);
                });
            });
        });
    };
    // get all foods
    CustomerDetailsComponent.prototype.GetAllFood = function () {
        var _this = this;
        this.food.GetAllIngredients().subscribe(function (Response) {
            _this.Allfoods = Response;
        });
    };
    // get states according to country
    CustomerDetailsComponent.prototype.changeCountry = function (countryId) {
        this.States = this.Country.find(function (con) { return con.CountryId === countryId; }).States;
    };
    // check username availability
    CustomerDetailsComponent.prototype.CheckUserNameAvailability = function () {
        var _this = this;
        var UserName = this.Customer.UserName;
        this.UserNameAvailability = 'Please wait';
        this.common.CheckUserNameAvailability(UserName, this.UserID).subscribe(function (Response) {
            if (Response.Status === true) {
                _this.UserNameAvailability = 'UserNameAvailable';
                _this.SaveStatus = 0;
            }
            else {
                _this.UserNameAvailability = 'UserNameNotAvailable';
                _this.SaveStatus = 1;
            }
        });
    };
    // get customer details
    CustomerDetailsComponent.prototype.GetCustomerDetailsForCRM = function () {
        var _this = this;
        this.service.GetCustomerDetailsForCRM(this.UserID).subscribe(function (Response) {
            _this.Customer.UserId = Response.UserId;
            _this.Customer.MobileNo = Response.MobileNo;
            _this.Customer.UserName = Response.UserName;
            _this.Customer.IsLocked = Response.IsLocked;
            _this.Customer.UserTypeId = Response.UserTypeId;
            if (Response.CustomerBasicDetailsCustomer.length > 0) {
                _this.CustomerBasicDetailsCustomer = Response.CustomerBasicDetailsCustomer[0];
            }
            if (Response.CustomerHealthMeasuresCustomer.length > 0) {
                _this.CustomerHealthMeasuresCustomer = Response.CustomerHealthMeasuresCustomer[0];
            }
            if (Response.CustomerPhysicalsCustomer.length > 0) {
                _this.CustomerPhysicalsCustomer = Response.CustomerPhysicalsCustomer[0];
            }
            if (Response.CustomerCommunicationsCustomer.length > 0) {
                _this.CustomerCommunicationsCustomer = Response.CustomerCommunicationsCustomer[0];
            }
            _this.CustomerFoodInterestsCustomer = Response.CustomerFoodInterestsCustomer;
            _this.CustomerCallHistoryCustomer = Response.CustomerCallHistoryCustomer;
            _this.CustomerFoodInterestsCustomer.forEach(function (element) {
                if (element.InterestId === 1) {
                    _this.InterestedFood.push(element);
                }
                else {
                    _this.NotInterestedFood.push(element);
                }
            });
        });
    };
    // on init
    CustomerDetailsComponent.prototype.ngOnInit = function () { };
    // update transaction
    CustomerDetailsComponent.prototype.UpdateTransaction = function () {
        var _this = this;
        var TransactionStatusName;
        this.CallStatus.forEach(function (element) {
            if (element.TransactionStatusId === _this.TransactionStatusID) {
                TransactionStatusName = element.TransactionStatusName;
                return;
            }
        });
        this.CustomerCallHistoryCustomer.forEach(function (element, index) {
            if (_this.CustomerCallHistoryCustomer[index].CustomerCallHistoryId === 0) {
                _this.CustomerCallHistoryCustomer.splice(index, 1);
            }
        });
        this.CustomerCallHistoryCustomer.push({
            CustomerCallHistoryId: 0,
            TransactionDate: this.TransactionDate,
            TransactionStatusId: this.TransactionStatusID,
            TransactionStatusName: TransactionStatusName
        });
        this.CustomerBasicDetailsCustomer.TransactionStatusId = this.TransactionStatusID;
    };
    // save button click
    CustomerDetailsComponent.prototype.SaveCustomerData = function () {
        var _this = this;
        console.log(this.Customer);
        return;
        this.CheckUserNameAvailability();
        if (this.SaveStatus === 0) {
            this.openDialog();
            this.popup.SetData({ Message: 'Hang on', Status: '', Route: '' });
            this.service.SaveUserDetails(this.Customer).subscribe(function (Response) {
                if (Response.Status === true) {
                    _this.popup.SetData({ Message: 'Data Saved Successfully', Status: 'auto', Route: '' });
                }
            });
        }
    };
    // open dialogue
    CustomerDetailsComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_shared_commmon_dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_8__["DialogueComponent"], {
            width: '250px',
            disableClose: true
        });
        // fires when dialogue closed
        dialogRef.afterClosed().subscribe(function (result) {
            //
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('IntFoodInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CustomerDetailsComponent.prototype, "IntFoodInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('NotIntFoodInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CustomerDetailsComponent.prototype, "NotIntFoodInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"])
    ], CustomerDetailsComponent.prototype, "matAutocomplete", void 0);
    CustomerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/layout/crm/customer-details/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.scss */ "./src/app/layout/crm/customer-details/customer-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_customer_details_service__WEBPACK_IMPORTED_MODULE_1__["CustomerDetailsService"], _dietitian_dish_preparation_dish_preparation_service__WEBPACK_IMPORTED_MODULE_6__["DishPreparationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _shared_commmon_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_9__["DialogueService"],
            src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/crm/customer-details/customer-details.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/crm/customer-details/customer-details.module.ts ***!
  \************************************************************************/
/*! exports provided: CustomerDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsModule", function() { return CustomerDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_details_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-details-routing.module */ "./src/app/layout/crm/customer-details/customer-details-routing.module.ts");
/* harmony import */ var _customer_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-details.component */ "./src/app/layout/crm/customer-details/customer-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CustomerDetailsModule = /** @class */ (function () {
    function CustomerDetailsModule() {
    }
    CustomerDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_customer_details_component__WEBPACK_IMPORTED_MODULE_3__["CustomerDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _customer_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerDetailsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                src_app_shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_5__["StatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            entryComponents: []
        })
    ], CustomerDetailsModule);
    return CustomerDetailsModule;
}());



/***/ }),

/***/ "./src/app/layout/crm/customer-details/customer-details.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/crm/customer-details/customer-details.service.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsService", function() { return CustomerDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/commmon */ "./src/app/shared/commmon/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerDetailsService = /** @class */ (function () {
    function CustomerDetailsService(util, http) {
        this.util = util;
        this.http = http;
    }
    //get all dropdowns for customer form
    CustomerDetailsService.prototype.GetCustomerDetailsDropdowns = function () {
        var url = this.util.base_url + this.util.GetCustomerDropdowns;
        return this.http.get(url).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    //get Customer details for crm
    CustomerDetailsService.prototype.GetCustomerDetailsForCRM = function (CustomerID) {
        var url = this.util.GetCustomerDetailsForCRM + CustomerID;
        return this.http.get(url).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.Data;
        }));
    };
    //save user details
    CustomerDetailsService.prototype.SaveUserDetails = function (data) {
        var url = this.util.SaveUser;
        var body = data;
        return this.http.post(url, body).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    CustomerDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_1__["CommonVariables"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomerDetailsService);
    return CustomerDetailsService;
}());



/***/ })

}]);
//# sourceMappingURL=customer-details-customer-details-module.js.map