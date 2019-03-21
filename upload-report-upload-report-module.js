(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-report-upload-report-module"],{

/***/ "./src/app/customer/upload-report/upload-report-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/customer/upload-report/upload-report-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UploadReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadReportRoutingModule", function() { return UploadReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _upload_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-report.component */ "./src/app/customer/upload-report/upload-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _upload_report_component__WEBPACK_IMPORTED_MODULE_2__["UploadReportComponent"]
    }];
var UploadReportRoutingModule = /** @class */ (function () {
    function UploadReportRoutingModule() {
    }
    UploadReportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UploadReportRoutingModule);
    return UploadReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer/upload-report/upload-report.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/upload-report/upload-report.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  upload-report works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/customer/upload-report/upload-report.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/customer/upload-report/upload-report.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3VwbG9hZC1yZXBvcnQvdXBsb2FkLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/customer/upload-report/upload-report.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/upload-report/upload-report.component.ts ***!
  \*******************************************************************/
/*! exports provided: UploadReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadReportComponent", function() { return UploadReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadReportComponent = /** @class */ (function () {
    function UploadReportComponent() {
    }
    UploadReportComponent.prototype.ngOnInit = function () {
    };
    UploadReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-report',
            template: __webpack_require__(/*! ./upload-report.component.html */ "./src/app/customer/upload-report/upload-report.component.html"),
            styles: [__webpack_require__(/*! ./upload-report.component.scss */ "./src/app/customer/upload-report/upload-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadReportComponent);
    return UploadReportComponent;
}());



/***/ }),

/***/ "./src/app/customer/upload-report/upload-report.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer/upload-report/upload-report.module.ts ***!
  \****************************************************************/
/*! exports provided: UploadReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadReportModule", function() { return UploadReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upload_report_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-report-routing.module */ "./src/app/customer/upload-report/upload-report-routing.module.ts");
/* harmony import */ var _upload_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-report.component */ "./src/app/customer/upload-report/upload-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UploadReportModule = /** @class */ (function () {
    function UploadReportModule() {
    }
    UploadReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_upload_report_component__WEBPACK_IMPORTED_MODULE_3__["UploadReportComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _upload_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["UploadReportRoutingModule"]
            ]
        })
    ], UploadReportModule);
    return UploadReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=upload-report-upload-report-module.js.map