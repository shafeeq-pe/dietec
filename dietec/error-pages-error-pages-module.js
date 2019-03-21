(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-pages-error-pages-module"],{

/***/ "./src/app/error-pages/access-denied/access-denied.component.html":
/*!************************************************************************!*\
  !*** ./src/app/error-pages/access-denied/access-denied.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  access-denied works!\n</p>\n"

/***/ }),

/***/ "./src/app/error-pages/access-denied/access-denied.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/error-pages/access-denied/access-denied.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2VzL2FjY2Vzcy1kZW5pZWQvYWNjZXNzLWRlbmllZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/error-pages/access-denied/access-denied.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/error-pages/access-denied/access-denied.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
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

var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent() {
    }
    AccessDeniedComponent.prototype.ngOnInit = function () {
    };
    AccessDeniedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-denied',
            template: __webpack_require__(/*! ./access-denied.component.html */ "./src/app/error-pages/access-denied/access-denied.component.html"),
            styles: [__webpack_require__(/*! ./access-denied.component.scss */ "./src/app/error-pages/access-denied/access-denied.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



/***/ }),

/***/ "./src/app/error-pages/error-pages-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/error-pages/error-pages-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ErrorPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPagesRoutingModule", function() { return ErrorPagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/error-pages/not-found/not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/error-pages/server-error/server-error.component.ts");
/* harmony import */ var _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-denied/access-denied.component */ "./src/app/error-pages/access-denied/access-denied.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '404',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    },
    {
        path: '500',
        component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_3__["ServerErrorComponent"]
    },
    {
        path: '401',
        component: _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_4__["AccessDeniedComponent"]
    },
    {
        path: '',
        redirectTo: '404',
        pathMatch: 'full'
    }
];
var ErrorPagesRoutingModule = /** @class */ (function () {
    function ErrorPagesRoutingModule() {
    }
    ErrorPagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ErrorPagesRoutingModule);
    return ErrorPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/error-pages/error-pages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/error-pages/error-pages.module.ts ***!
  \***************************************************/
/*! exports provided: ErrorPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPagesModule", function() { return ErrorPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-pages-routing.module */ "./src/app/error-pages/error-pages-routing.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/error-pages/not-found/not-found.component.ts");
/* harmony import */ var _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./access-denied/access-denied.component */ "./src/app/error-pages/access-denied/access-denied.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/error-pages/server-error/server-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ErrorPagesModule = /** @class */ (function () {
    function ErrorPagesModule() {
    }
    ErrorPagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"], _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_5__["AccessDeniedComponent"], _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__["ServerErrorComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["ErrorPagesRoutingModule"]]
        })
    ], ErrorPagesModule);
    return ErrorPagesModule;
}());



/***/ }),

/***/ "./src/app/error-pages/not-found/not-found.component.html":
/*!****************************************************************!*\
  !*** ./src/app/error-pages/not-found/not-found.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ErrorPage\">\r\n  <div class=\"ErrorPageLeft\">\r\n    <img src=\"https://github.com/abhinanduN/codepen/blob/master/err.png?raw=true\" width=\"360px\" height=\"250px\" />\r\n  </div>\r\n  <div class=\"ErrorPageRight\">\r\n    <h1>404</h1>\r\n    <h4>OOPS. Looks like the page you're looking for no longer exists</h4>\r\n    <p>Don't worry. Since you're valuable to us we will bring you back to safety</p>\r\n    <button mat-raised-button color=\"primary\" class=\"ptb-10\" [routerLink]=\"[ '/' ]\">\r\n      <mat-icon class=\"pr-20\">history</mat-icon>\r\n      Back to home\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/error-pages/not-found/not-found.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/error-pages/not-found/not-found.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ErrorPage {\n  width: 100%;\n  height: 80%;\n  margin: 4% auto;\n  background: #fff;\n  text-align: center;\n  display: flex;\n  align-items: center; }\n\n.ErrorPageRight {\n  width: 100%; }\n\n.ErrorPageLeft {\n  width: 100%; }\n\n.ErrorPage h1 {\n  font-family: 'Noto Sans', sans-serif;\n  font-size: 70pt;\n  margin: 0;\n  color: #4caf50; }\n\n.ErrorPage h4 {\n  color: #607d8b;\n  font-size: 14pt; }\n\n.ErrorPage p {\n  font-size: 14pt;\n  color: #607d8b; }\n\n@media screen and (max-width: 800px) {\n  .ErrorPage {\n    flex-direction: column; }\n  .ErrorPageLeft img {\n    width: 250px;\n    height: auto; }\n  .ErrorPage h4 {\n    margin: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3ItcGFnZXMvbm90LWZvdW5kL0Y6XFxzaGFmZWVxJ3NcXGRlaXR0ZWNcXFdFQlxcQURNSU4vc3JjXFxhcHBcXGVycm9yLXBhZ2VzXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUVoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsU0FBUztFQUNULGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2hCO0VBQ0U7SUFDRSxzQkFBc0IsRUFBQTtFQUV4QjtJQUNFLFlBQVk7SUFDWixZQUFZLEVBQUE7RUFFZDtJQUNFLFNBQVMsRUFBQSxFQUNWIiwiZmlsZSI6InNyYy9hcHAvZXJyb3ItcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5FcnJvclBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIG1hcmdpbjogNCUgYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC8vICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5FcnJvclBhZ2VSaWdodCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLkVycm9yUGFnZUxlZnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5FcnJvclBhZ2UgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDcwcHQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjNGNhZjUwO1xyXG59XHJcbi5FcnJvclBhZ2UgaDQge1xyXG4gIGNvbG9yOiAjNjA3ZDhiO1xyXG4gIGZvbnQtc2l6ZTogMTRwdDtcclxufVxyXG4uRXJyb3JQYWdlIHAge1xyXG4gIGZvbnQtc2l6ZTogMTRwdDtcclxuICBjb2xvcjogIzYwN2Q4YjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuRXJyb3JQYWdlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5FcnJvclBhZ2VMZWZ0IGltZyB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5FcnJvclBhZ2UgaDQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/error-pages/not-found/not-found.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/error-pages/not-found/not-found.component.ts ***!
  \**************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/error-pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/error-pages/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/error-pages/server-error/server-error.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/error-pages/server-error/server-error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  server-error works!\n</p>\n"

/***/ }),

/***/ "./src/app/error-pages/server-error/server-error.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/error-pages/server-error/server-error.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2VzL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/error-pages/server-error/server-error.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/error-pages/server-error/server-error.component.ts ***!
  \********************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
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

var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent() {
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    ServerErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! ./server-error.component.html */ "./src/app/error-pages/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.scss */ "./src/app/error-pages/server-error/server-error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ })

}]);
//# sourceMappingURL=error-pages-error-pages-module.js.map