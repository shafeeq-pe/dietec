(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mails-mails-module"],{

/***/ "./src/app/customer/mails/mails-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/customer/mails/mails-routing.module.ts ***!
  \********************************************************/
/*! exports provided: MailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailsRoutingModule", function() { return MailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mails.component */ "./src/app/customer/mails/mails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _mails_component__WEBPACK_IMPORTED_MODULE_2__["MailsComponent"]
    }];
var MailsRoutingModule = /** @class */ (function () {
    function MailsRoutingModule() {
    }
    MailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MailsRoutingModule);
    return MailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer/mails/mails.component.html":
/*!*****************************************************!*\
  !*** ./src/app/customer/mails/mails.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  mails works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/customer/mails/mails.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/customer/mails/mails.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL21haWxzL21haWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer/mails/mails.component.ts":
/*!***************************************************!*\
  !*** ./src/app/customer/mails/mails.component.ts ***!
  \***************************************************/
/*! exports provided: MailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailsComponent", function() { return MailsComponent; });
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

var MailsComponent = /** @class */ (function () {
    function MailsComponent() {
    }
    MailsComponent.prototype.ngOnInit = function () {
    };
    MailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mails',
            template: __webpack_require__(/*! ./mails.component.html */ "./src/app/customer/mails/mails.component.html"),
            styles: [__webpack_require__(/*! ./mails.component.scss */ "./src/app/customer/mails/mails.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MailsComponent);
    return MailsComponent;
}());



/***/ }),

/***/ "./src/app/customer/mails/mails.module.ts":
/*!************************************************!*\
  !*** ./src/app/customer/mails/mails.module.ts ***!
  \************************************************/
/*! exports provided: MailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailsModule", function() { return MailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mails_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mails-routing.module */ "./src/app/customer/mails/mails-routing.module.ts");
/* harmony import */ var _mails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mails.component */ "./src/app/customer/mails/mails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MailsModule = /** @class */ (function () {
    function MailsModule() {
    }
    MailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_mails_component__WEBPACK_IMPORTED_MODULE_3__["MailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mails_routing_module__WEBPACK_IMPORTED_MODULE_2__["MailsRoutingModule"]
            ]
        })
    ], MailsModule);
    return MailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=mails-mails-module.js.map