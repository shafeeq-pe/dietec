(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chefs-chefs-module"],{

/***/ "./src/app/layout/dietitian/chefs/chefs-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/dietitian/chefs/chefs-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ChefsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefsRoutingModule", function() { return ChefsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chefs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chefs.component */ "./src/app/layout/dietitian/chefs/chefs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _chefs_component__WEBPACK_IMPORTED_MODULE_2__["ChefsComponent"]
    }];
var ChefsRoutingModule = /** @class */ (function () {
    function ChefsRoutingModule() {
    }
    ChefsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChefsRoutingModule);
    return ChefsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/chefs/chefs.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/dietitian/chefs/chefs.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Add Chef</h1>\r\n<div fxFlex=\"100%\" fxLayout=\"row wrap\"  fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" >\r\n<div fxFlex=\"calc(50%-20px)\" >\r\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n      <mat-label>Chef Name</mat-label>\r\n      <input matInput placeholder=\"Chef Name\" [(ngModel)]=\"Chef.ChefName\" />\r\n    </mat-form-field>\r\n    \r\n</div>\r\n<div fxFlex=\"calc(50%-20px)\" >\r\n  <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n    <mat-label>Description</mat-label>\r\n    <input matInput placeholder=\"Description\" [(ngModel)]=\"Chef.Description\" />\r\n  </mat-form-field>\r\n</div>\r\n\r\n</div>\r\n\r\n<div fxFlex=\"200px\" fxLayout=\"column wrap\" >\r\n    <div fxFlex fxLayout=\"row wrap\" fxLayoutAlign=\"left left\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n        <div >  <mat-label>Profile Picture</mat-label></div>\r\n        <div > <button mat-raised-button color=\"accent\" class=\"w-100\" (click)=\"fileInput.click()\">Upload</button></div>\r\n    </div>\r\n           \r\n    <div  fxLayout=\"row wrap\" class=\"UploadedImage\"> \r\n        <div fxFlex>\r\n         <input hidden type=\"file\" #fileInput accept=\"image/*\"  (change)=\"handleImageFileInput($event.target.files)\"/>\r\n         <img height=\"150px\" width=\"150px\" *ngIf=\"ImageSource!=null\" [src]=\"ImageSource || 'http://placehold.it/180'\">\r\n       </div>\r\n       </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<p>{{Response}}</p>\r\n\r\n<div fxFlex=\"200px\" fxLayout=\"row wrap\" >\r\n    <div class=\"w-100 mt-40\">\r\n      <button  class=\"w-100 SaveMAinButton\"   mat-raised-button color=\"primary\" (click)=\"SaveChef()\">Save</button>\r\n    </div>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"AllChefs\" class=\"mat-elevation-z8 w-100\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n  \r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element;index as i\"> {{i+1}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.ChefName}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef> Description </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Description}} </td>\r\n    </ng-container>  \r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  "

/***/ }),

/***/ "./src/app/layout/dietitian/chefs/chefs.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/dietitian/chefs/chefs.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".UploadedImage {\n  margin-top: 25px; }\n\n.UploadedImage img {\n  width: 200px;\n  height: 200px;\n  margin-top: 30px; }\n\n.mat-table {\n  margin-top: 25px; }\n\n.SaveMAinButton {\n  margin-top: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2RpZXRpdGlhbi9jaGVmcy9GOlxcc2hhZmVlcSdzXFxkZWl0dGVjXFxXRUJcXEFETUlOL3NyY1xcYXBwXFxsYXlvdXRcXGRpZXRpdGlhblxcY2hlZnNcXGNoZWZzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksZ0JBQ0osRUFBQTs7QUFDQTtFQUNBLFlBQVk7RUFDWixhQUFhO0VBRWIsZ0JBQWdCLEVBQUE7O0FBSWhCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGlldGl0aWFuL2NoZWZzL2NoZWZzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlVwbG9hZGVkSW1hZ2V7XHJcblxyXG5cclxuICAgIG1hcmdpbi10b3A6IDI1cHhcclxufVxyXG4uVXBsb2FkZWRJbWFnZSBpbWd7XHJcbndpZHRoOiAyMDBweDtcclxuaGVpZ2h0OiAyMDBweDtcclxuXHJcbm1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG59XHJcblxyXG4ubWF0LXRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4uU2F2ZU1BaW5CdXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/dietitian/chefs/chefs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/dietitian/chefs/chefs.component.ts ***!
  \***********************************************************/
/*! exports provided: ChefsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefsComponent", function() { return ChefsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/commmon */ "./src/app/shared/commmon/index.ts");
/* harmony import */ var _crm_crm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../crm/crm.service */ "./src/app/layout/crm/crm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChefsComponent = /** @class */ (function () {
    function ChefsComponent(common, util, service) {
        this.common = common;
        this.util = util;
        this.service = service;
        this.Chef = {
            ChefName: '',
            Description: '',
            ProfilePic: ''
        };
        this.AllChefs = [];
        this.ImageSource = null;
        this.Response = '';
        this.displayedColumns = ['position', 'name', 'weight'];
        this.GetChef();
    }
    ChefsComponent.prototype.ngOnInit = function () {
    };
    // upload image files
    ChefsComponent.prototype.handleImageFileInput = function (files) {
        var _this = this;
        if (files.length > 0) {
            var reader_1 = new FileReader();
            reader_1.onload = function (e) { return _this.ImageSource = reader_1.result; };
            reader_1.readAsDataURL(files[0]);
            this.common.DietecMediaUpload(files[0]).subscribe(function (Response) {
                if (Response.Status === true) {
                    if (Response.Status === true) {
                        _this.Chef.ProfilePic = Response.FileName;
                    }
                }
            });
        }
    };
    // save chef
    ChefsComponent.prototype.SaveChef = function () {
        var _this = this;
        if (this.Chef.ChefName == null || this.Chef.ChefName === '') {
            this.Response = 'Name Required';
            return;
        }
        else {
            this.Response = '';
        }
        var url = this.util.SaveChef;
        this.common.Post(url, this.Chef).subscribe(function (Response) {
            if (Response.Status === true) {
                _this.GetChef();
            }
        });
    };
    // get chefs
    ChefsComponent.prototype.GetChef = function () {
        var _this = this;
        this.service.GetChefs().subscribe(function (Response) {
            if (Response.Status === true) {
                _this.AllChefs = Response.Data;
            }
        });
    };
    ChefsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chefs',
            template: __webpack_require__(/*! ./chefs.component.html */ "./src/app/layout/dietitian/chefs/chefs.component.html"),
            styles: [__webpack_require__(/*! ./chefs.component.scss */ "./src/app/layout/dietitian/chefs/chefs.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"], src_app_shared_commmon__WEBPACK_IMPORTED_MODULE_2__["CommonVariables"], _crm_crm_service__WEBPACK_IMPORTED_MODULE_3__["CrmService"]])
    ], ChefsComponent);
    return ChefsComponent;
}());



/***/ }),

/***/ "./src/app/layout/dietitian/chefs/chefs.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/dietitian/chefs/chefs.module.ts ***!
  \********************************************************/
/*! exports provided: ChefsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefsModule", function() { return ChefsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chefs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chefs-routing.module */ "./src/app/layout/dietitian/chefs/chefs-routing.module.ts");
/* harmony import */ var _chefs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chefs.component */ "./src/app/layout/dietitian/chefs/chefs.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChefsModule = /** @class */ (function () {
    function ChefsModule() {
    }
    ChefsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_chefs_component__WEBPACK_IMPORTED_MODULE_3__["ChefsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _chefs_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChefsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ]
        })
    ], ChefsModule);
    return ChefsModule;
}());



/***/ })

}]);
//# sourceMappingURL=chefs-chefs-module.js.map