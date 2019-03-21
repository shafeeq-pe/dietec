(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n  <div class=\"content\">\r\n    <!-- <h1 class=\"app-name\">Sb Admin Material</h1> -->\r\n    <form class=\"login-form\" fxFlex>\r\n      <div class=\"text-center\">\r\n        <h2 class=\"app-name\"><img src=\"assets/images/logo.png\" /></h2>\r\n      </div>\r\n      <div fxFlex fxlayout=\"row\" fxlayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n          <mat-form-field class=\"w-100\">\r\n            <input matInput placeholder=\"Email\" [(ngModel)]=\"UserName\" name=\"username\" />\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n          <mat-form-field class=\"w-100\">\r\n            <input matInput type=\"password\" [(ngModel)]=\"PassWord\" name=\"password\" placeholder=\"Password\" />\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"100%\" fxLayout=\"row\" fxLayout.lt-md=\"row\" style=\"margin: 20px 0 30px 0\">\r\n        <div fxFlex=\"90px\">\r\n          <!-- <mat-checkbox color=\"primary\">Remember Me</mat-checkbox> -->\r\n          <a [routerLink]=\"[ '/signup' ]\">New User?</a>\r\n        </div>\r\n        <div fxFlex=\"150px\" fxLayoutAlign=\"end\">\r\n          <a href=\"javascript:void(0)\">Forget Password</a>\r\n        </div>\r\n      </div>\r\n      <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n        <div fxFlexFill>\r\n          <button  mat-raised-button color=\"accent\" class=\"w-100 LoginBtn\" (click)=\"onLogin()\">Login</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #d2d2d2; }\n\n.login-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: relative; }\n\n.login-page .content {\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 95%;\n    max-width: 500px; }\n\n.login-page .content .app-name {\n      margin-top: 0px;\n      padding-bottom: 10px;\n      font-size: 32px; }\n\n.login-page .content .login-form {\n      padding: 40px;\n      background: #fff;\n      width: 100%;\n      box-shadow: 0 0 10px #ddd; }\n\n.login-page .content .login-form input:-webkit-autofill {\n        box-shadow: 0 0 0 30px white inset; }\n\n.login-page:after {\n    content: '';\n    background: #fff;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 50%;\n    right: 0; }\n\n.login-page:before {\n    content: '';\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1fbed0+0,61c419+99 */\n    background: #1fbed0;\n    /* Old browsers */\n    /* FF3.6-15 */\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(135deg, #1fbed0 0%, #61c419 99%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1fbed0', endColorstr='#61c419',GradientType=1 );\n    /* IE6-9 fallback on horizontal gradient */\n    position: absolute;\n    top: 50%;\n    left: 0;\n    bottom: 0;\n    right: 0; }\n\n.text-center {\n  text-align: center; }\n\n.w-100 {\n  width: 100%; }\n\n.LoginBtn {\n  padding: 5px;\n  font-size: 17px;\n  border-radius: 73px; }\n\n@media screen and (max-width: 912px) {\n  .login-form {\n    padding: 20px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRjpcXHNoYWZlZXEnc1xcZGVpdHRlY1xcV0VCXFxBRE1JTi9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFMcEI7SUFPSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGdCQUFnQixFQUFBOztBQVpwQjtNQWNNLGVBQWU7TUFDZixvQkFBb0I7TUFDcEIsZUFBZSxFQUFBOztBQWhCckI7TUFtQk0sYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gseUJBQXlCLEVBQUE7O0FBdEIvQjtRQXdCTSxrQ0FBa0MsRUFBQTs7QUF4QnhDO0lBOEJJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFFBQVEsRUFBQTs7QUFwQ1o7SUF1Q0ksV0FBVztJQUNYLCtHQUFBO0lBQ0EsbUJBQW1CO0lBQUUsaUJBQUE7SUFDOEMsYUFBQTtJQUNHLDRCQUFBO0lBQ3RFLDREQUE0RDtJQUFFLHFEQUFBO0lBQzlELG1IQUFtSDtJQUFFLDBDQUFBO0lBQ3JILGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFBYSxZQUFZO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHbkI7RUFDRTtJQUNGLHdCQUF5QixFQUFBLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmF7XG4gIGNvbG9yOiAjZDJkMmQyO1xufVxuXG4ubG9naW4tcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmNvbnRlbnQge1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAuYXBwLW5hbWUge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgfVxuICAgIC5sb2dpbi1mb3JtIHtcbiAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZGRkO1xuICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzMHB4IHdoaXRlIGluc2V0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogNTAlO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICAvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jMWZiZWQwKzAsNjFjNDE5Kzk5ICovXG4gICAgYmFja2dyb3VuZDogIzFmYmVkMDsgLyogT2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMWZiZWQwIDAlLCAjNjFjNDE5IDk5JSk7IC8qIEZGMy42LTE1ICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMWZiZWQwIDAlLCAjNjFjNDE5IDk5JSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFmYmVkMCAwJSwgIzYxYzQxOSA5OSUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFmYmVkMCcsIGVuZENvbG9yc3RyPScjNjFjNDE5JyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udy0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5Mb2dpbkJ0bnsgICBwYWRkaW5nOiA1cHg7XG5mb250LXNpemU6IDE3cHg7XG5ib3JkZXItcmFkaXVzOiA3M3B4O1xufVxuXG5AbWVkaWEgc2NyZWVuICBhbmQgKG1heC13aWR0aDo5MTJweCl7XG4gIC5sb2dpbi1mb3JtIHtcbnBhZGRpbmc6IDIwcHggIWltcG9ydGFudCA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _shared_commmon_dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/commmon/dialogue/dialogue.component */ "./src/app/shared/commmon/dialogue/dialogue.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_commmon_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/commmon/dialogue/dialogue.service */ "./src/app/shared/commmon/dialogue/dialogue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service, dialog, popup) {
        this.router = router;
        this.service = service;
        this.dialog = dialog;
        this.popup = popup;
        this.UserName = '';
        this.PassWord = '';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLogin = function () {
        var body = {
            UserName: this.UserName,
            PassWord: this.PassWord
        };
        this.openDialog();
        this.popup.SetData({ Message: 'Hang on', Status: '', Route: '' });
        window.localStorage.setItem('isLoggedin', 'true');
        if (this.UserName === 'admin') {
            this.router.navigate(['/ab/diet']);
        }
        if (this.UserName === 'customer') {
            this.router.navigate(['/cs']);
        }
    };
    // open dialogue
    LoginComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_shared_commmon_dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_3__["DialogueComponent"], {
            width: '250px',
            disableClose: true
        });
        // fires when dialogue closed
        dialogRef.afterClosed().subscribe(function (result) {
            //
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _shared_commmon_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_5__["DialogueService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map