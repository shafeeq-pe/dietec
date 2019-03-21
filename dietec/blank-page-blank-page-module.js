(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blank-page-blank-page-module"],{

/***/ "./src/app/layout/blank-page/blank-page-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BlankPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageRoutingModule", function() { return BlankPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blank_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-page.component */ "./src/app/layout/blank-page/blank-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _blank_page_component__WEBPACK_IMPORTED_MODULE_2__["BlankPageComponent"]
    }
];
var BlankPageRoutingModule = /** @class */ (function () {
    function BlankPageRoutingModule() {
    }
    BlankPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BlankPageRoutingModule);
    return BlankPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-20\"><h1 class=\"mat-card-title\">Patient Details</h1></div>\r\n<mat-card class=\"PatientDetailMain\">\r\n  <mat-tab-group backgroundColor=\"warn\" dynamicHeight animationDuration=\"1000ms\">\r\n    <mat-tab label=\"Basic Details\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- ROW 1 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>First Name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Last Name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Registration ID</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Civil ID</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <!-- ROW 2 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Subscribed Chef</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Job Title</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Gender</mat-label>\r\n              <mat-select placeholder=\"Select chef\">\r\n                <mat-option>Male </mat-option>\r\n                <mat-option> Female</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Nationality</mat-label>\r\n              <mat-select placeholder=\"Select chef\">\r\n                <mat-option>Kuwait </mat-option>\r\n                <mat-option> UAE</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Birth Date </mat-label>\r\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Placeholder\" />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Marital Status</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Email</mat-label>\r\n              <input email matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 4 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Phone</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"40\">\r\n          <!-- 1 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [24]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100 mr-20\">\r\n              <mat-label>Mobile No.</mat-label>\r\n              <input class=\"w-100\" matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Allergies\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- <mat-card-subtitle>Allergies</mat-card-subtitle> -->\r\n        <mat-form-field appearance=\"outline\" class=\"w-100 mr-20\">\r\n          <mat-label>Add Allergies</mat-label>\r\n          <mat-chip-list #chipList>\r\n            <mat-chip *ngFor=\"let allergies of allergies\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(allergies)\">\r\n              {{ allergies.name }}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input\r\n              placeholder=\"Add More allergies...\"\r\n              [matChipInputFor]=\"chipList\"\r\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n              [matChipInputAddOnBlur]=\"addOnBlur\"\r\n              (matChipInputTokenEnd)=\"add($event)\"\r\n            />\r\n          </mat-chip-list>\r\n        </mat-form-field>\r\n      </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Physical Measurements\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- ROW 1 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Height (CM) </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Weight(KG) </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Waist(CM)</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 4 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Automatic BMI</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Clinical  History\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- ROW 1 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Current diseases/disorders </mat-label>\r\n              <textarea matInput placeholder=\"placeholder\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Family members diseases</mat-label>\r\n              <textarea matInput placeholder=\"placeholder\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label> Current Medicines</mat-label>\r\n              <textarea matInput placeholder=\"placeholder\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Food Interests\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- ROW 1 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Interested food items </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Not Interested </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [33.33]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Type of Diet</mat-label>\r\n              <mat-select placeholder=\"Select chef\">\r\n                <mat-option>Kuwait </mat-option>\r\n                <mat-option> UAE</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Work Status\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- ROW 1 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Type of work </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Work hours / day </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Frequency </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 4 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Exercises</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Communication Details\">\r\n      <mat-card class=\"TabsContents\">\r\n        <!-- ROW 1 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <!-- <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-card-subtitle>Type of work </mat-card-subtitle>\r\n            <mat-radio-group appearance=\"outline\" class=\"w-100 mt-40 \">\r\n              <mat-radio-button value=\"1\" class=\"mr-20\">House</mat-radio-button>\r\n              <mat-radio-button value=\"2\">Flat</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div> -->\r\n        </div>\r\n\r\n        <!-- ROW 2 -->\r\n        <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>House </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Avenue </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 3 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Street</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 4 -->\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Block</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- ROW 2 -->\r\n        <div class=\" \" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n          <!-- 1 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [24]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>State </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- 2 -->\r\n\r\n          <div [fxFlex]=\"i\" *ngFor=\"let i of [24]\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Country </mat-label>\r\n              <input matInput placeholder=\"Placeholder\" />\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Call History\">\r\n        <mat-card class=\"TabsContents\">\r\n       \r\n    \r\n            <!-- ROW  1-->\r\n            <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n              <!-- 1 -->\r\n    \r\n              <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                  <mat-label>House </mat-label>\r\n                  <input matInput placeholder=\"Placeholder\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <!-- 2 -->\r\n    \r\n              <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                  <mat-label>Avenue </mat-label>\r\n                  <input matInput placeholder=\"Placeholder\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <!-- 3 -->\r\n              <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                  <mat-label>Street</mat-label>\r\n                  <input matInput placeholder=\"Placeholder\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <!-- 4 -->\r\n              <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                  <mat-label>Block</mat-label>\r\n                  <input matInput placeholder=\"Placeholder\" />\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n    \r\n          \r\n          </mat-card>\r\n    </mat-tab>\r\n    <mat-tab label=\"Account Details\">\r\n        <mat-card class=\"TabsContents\">\r\n       \r\n    \r\n            <!-- ROW  1-->\r\n            <div class=\"\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n              <!-- 1 -->\r\n    \r\n              <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                  <mat-label>House </mat-label>\r\n                  <input matInput placeholder=\"Placeholder\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <!-- 2 -->\r\n    \r\n              <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                  <mat-label>Avenue </mat-label>\r\n                  <input matInput placeholder=\"Placeholder\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <!-- 3 -->\r\n              <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                  <mat-label>Street</mat-label>\r\n                  <input matInput placeholder=\"Placeholder\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <!-- 4 -->\r\n              <div [fxFlex]=\"i\" *ngFor=\"let i of [25]\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                  <mat-label>Block</mat-label>\r\n                  <input matInput placeholder=\"Placeholder\" />\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n    \r\n          \r\n          </mat-card>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>\r\n<div [fxFlex]=\"i\" *ngFor=\"let i of [12]\">\r\n  <div class=\"w-100 mt-40 mb-40\">\r\n    <button mat-raised-button class=\"SaveBtnLg w-100\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".PatientDetailMain {\n  padding: 0;\n  border-radius: 8px;\n  overflow: hidden; }\n\n.TabsContents {\n  box-shadow: none;\n  padding: 1.8vmax 1.5vmax 1vmax; }\n\n.mr-20 {\n  padding-right: 20px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.example-chip-list {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2JsYW5rLXBhZ2UvRjpcXHNoYWZlZXEnc1xcZGVpdHRlY1xcV0VCXFxBRE1JTi9zcmNcXGFwcFxcbGF5b3V0XFxibGFuay1wYWdlXFxibGFuay1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2JsYW5rLXBhZ2UvYmxhbmstcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5QYXRpZW50RGV0YWlsTWFpbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLlRhYnNDb250ZW50cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwYWRkaW5nOiAxLjh2bWF4IDEuNXZtYXggMXZtYXg7XHJcbn1cclxuLm1yLTIwIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5tdC00MCB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page.component.ts ***!
  \***********************************************************/
/*! exports provided: BlankPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function() { return BlankPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlankPageComponent = /** @class */ (function () {
    function BlankPageComponent() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.allergies = [];
    }
    BlankPageComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our Allergies
        if ((value || '').trim()) {
            this.allergies.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    BlankPageComponent.prototype.remove = function (allergies) {
        var index = this.allergies.indexOf(allergies);
        if (index >= 0) {
            this.allergies.splice(index, 1);
        }
    };
    BlankPageComponent.prototype.ngOnInit = function () { };
    BlankPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank-page',
            template: __webpack_require__(/*! ./blank-page.component.html */ "./src/app/layout/blank-page/blank-page.component.html"),
            styles: [__webpack_require__(/*! ./blank-page.component.scss */ "./src/app/layout/blank-page/blank-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankPageComponent);
    return BlankPageComponent;
}());



/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page.module.ts ***!
  \********************************************************/
/*! exports provided: BlankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageModule", function() { return BlankPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blank-page-routing.module */ "./src/app/layout/blank-page/blank-page-routing.module.ts");
/* harmony import */ var _blank_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blank-page.component */ "./src/app/layout/blank-page/blank-page.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var BlankPageModule = /** @class */ (function () {
    function BlankPageModule() {
    }
    BlankPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_10__["BlankPageRoutingModule"],
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
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            declarations: [_blank_page_component__WEBPACK_IMPORTED_MODULE_11__["BlankPageComponent"]]
        })
    ], BlankPageModule);
    return BlankPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=blank-page-blank-page-module.js.map