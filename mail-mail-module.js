(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mail-mail-module"],{

/***/ "./src/app/layout/mail/mail-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/mail/mail-routing.module.ts ***!
  \****************************************************/
/*! exports provided: MailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailRoutingModule", function() { return MailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail.component */ "./src/app/layout/mail/mail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_2__["MailComponent"]
    }];
var MailRoutingModule = /** @class */ (function () {
    function MailRoutingModule() {
    }
    MailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MailRoutingModule);
    return MailRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/mail/mail.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/mail/mail.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  mail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/layout/mail/mail.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/mail/mail.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWlsL21haWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/mail/mail.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/mail/mail.component.ts ***!
  \***********************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
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

var MailComponent = /** @class */ (function () {
    function MailComponent() {
    }
    MailComponent.prototype.ngOnInit = function () {
    };
    MailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mail',
            template: __webpack_require__(/*! ./mail.component.html */ "./src/app/layout/mail/mail.component.html"),
            styles: [__webpack_require__(/*! ./mail.component.scss */ "./src/app/layout/mail/mail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MailComponent);
    return MailComponent;
}());



/***/ }),

/***/ "./src/app/layout/mail/mail.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/mail/mail.module.ts ***!
  \********************************************/
/*! exports provided: MailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-routing.module */ "./src/app/layout/mail/mail-routing.module.ts");
/* harmony import */ var _mail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail.component */ "./src/app/layout/mail/mail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MailModule = /** @class */ (function () {
    function MailModule() {
    }
    MailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_mail_component__WEBPACK_IMPORTED_MODULE_3__["MailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mail_routing_module__WEBPACK_IMPORTED_MODULE_2__["MailRoutingModule"]
            ]
        })
    ], MailModule);
    return MailModule;
}());



/***/ })

}]);
//# sourceMappingURL=mail-mail-module.js.map