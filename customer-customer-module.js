(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./src/app/customer/customer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.component */ "./src/app/customer/customer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"],
        children: [
            {
                path: '',
                loadChildren: './customer-dashboard/customer-dashboard.module#CustomerDashboardModule'
            },
            {
                path: 'diet',
                loadChildren: './customer-diet-view/customer-diet-view.module#CustomerDietViewModule'
            },
            {
                path: 'recipe/:id',
                loadChildren: './dish-ingredients/dish-ingredients.module#DishIngredientsModule'
            },
            {
                path: 'chef',
                loadChildren: './chef/chef.module#ChefModule'
            },
            {
                path: 'mails',
                loadChildren: './mails/mails.module#MailsModule'
            },
            {
                path: 'report',
                loadChildren: './upload-report/upload-report.module#UploadReportModule'
            }
        ]
    }
];
var CustomerRoutingModule = /** @class */ (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-top-nav></app-user-top-nav>\r\n<app-user-side-bar></app-user-side-bar>\r\n<div class=\"main-container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/customer/customer.component.scss":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  left: 100px;\n  background: #e8e8e8;\n  position: relative;\n  width: calc(100% - 140px);\n  min-height: calc(100% - 105px); }\n\n* {\n  font-family: 'Roboto', sans-serif; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    left: 0;\n    background: #e8e8e8;\n    position: relative;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 5px;\n    top: 56px;\n    min-height: calc(100% - 56px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvRjpcXHNoYWZlZXEnc1xcZGVpdHRlY1xcV0VCXFxBRE1JTi9zcmNcXGFwcFxcY3VzdG9tZXJcXGN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDhCQUE4QixFQUFBOztBQUloQztFQUNFLGlDQUFpQyxFQUFBOztBQUVuQztFQUVHO0lBQ0MsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osU0FBUztJQUNULDZCQUE2QixFQUFBLEVBQzlCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIGxlZnQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDBweCk7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gMTA1cHgpO1xyXG5cclxufVxyXG5cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXtcclxuXHJcbiAgIC5tYWluLWNvbnRhaW5lcntcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
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

var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/customer/customer-routing.module.ts");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _layout_components_user_top_nav_user_top_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/components/user-top-nav/user-top-nav.component */ "./src/app/layout/components/user-top-nav/user-top-nav.component.ts");
/* harmony import */ var _layout_components_user_side_bar_user_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/components/user-side-bar/user-side-bar.component */ "./src/app/layout/components/user-side-bar/user-side-bar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _view_media_view_media_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-media/view-media.component */ "./src/app/customer/view-media/view-media.component.ts");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var videogular2_ima_ads__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! videogular2/ima-ads */ "./node_modules/videogular2/ima-ads.js");
/* harmony import */ var videogular2_ima_ads__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(videogular2_ima_ads__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"], _layout_components_user_top_nav_user_top_nav_component__WEBPACK_IMPORTED_MODULE_4__["UserTopNavComponent"], _layout_components_user_side_bar_user_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["UserSideBarComponent"], _view_media_view_media_component__WEBPACK_IMPORTED_MODULE_8__["ViewMediaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                videogular2_core__WEBPACK_IMPORTED_MODULE_9__["VgCoreModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_10__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_11__["VgOverlayPlayModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_12__["VgBufferingModule"],
                videogular2_ima_ads__WEBPACK_IMPORTED_MODULE_13__["VgImaAdsModule"]
            ],
            entryComponents: [_view_media_view_media_component__WEBPACK_IMPORTED_MODULE_8__["ViewMediaComponent"]]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/layout/components/user-side-bar/user-side-bar.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/user-side-bar/user-side-bar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\" class=\"unicorn-light-theme\">\r\n  <mat-nav-list routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <a mat-list-item  [routerLink]=\"['/cs']\">\r\n      <mat-icon class=\"sidenav-icon\">dashboard</mat-icon> {{ 'Dashboard' | translate }}\r\n    </a>\r\n    <a mat-list-item [routerLink]=\"['/cs/diet']\">\r\n      <mat-icon class=\"sidenav-icon\">fastfood</mat-icon> {{ 'Meal Plan' | translate }}\r\n    </a>\r\n  </mat-nav-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/components/user-side-bar/user-side-bar.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/user-side-bar/user-side-bar.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar {\n  width: 100px;\n  position: fixed;\n  top: 56px;\n  bottom: 0;\n  background-image: linear-gradient(0deg, #00879d, #0099a2, #00aa9c, #00b98c, #4dc775);\n  box-shadow: rgba(26, 124, 58, 0.2) 1px 8px 15px;\n  z-index: 999;\n  -ms-overflow-y: auto;\n  overflow-y: auto; }\n  #sidebar .mat-nav-list {\n    width: 100%;\n    color: #fff;\n    text-align: center; }\n  #sidebar .mat-nav-list a {\n      display: block; }\n  #sidebar .mat-nav-list a .mat-icon {\n        margin-right: 0px;\n        font-size: 30px;\n        margin-bottom: 8px; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu .submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto;\n  margin: 0; }\n  .nested-menu .expand.submenu li a {\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  #sidebar {\n    left: -250px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvdXNlci1zaWRlLWJhci9GOlxcc2hhZmVlcSdzXFxkZWl0dGVjXFxXRUJcXEFETUlOL3NyY1xcYXBwXFxsYXlvdXRcXGNvbXBvbmVudHNcXHVzZXItc2lkZS1iYXJcXHVzZXItc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1Qsb0ZBQW9GO0VBQ3BGLCtDQUErQztFQUMvQyxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQixFQUFBO0VBVGxCO0lBV0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQWJ0QjtNQXFCTSxjQUFjLEVBQUE7RUFyQnBCO1FBaUJRLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysa0JBQWtCLEVBQUE7RUFNMUI7RUFFSSxxQkFBcUIsRUFBQTtFQUZ6QjtFQUtJLGFBQWE7RUFDYixTQUFTLEVBQUE7RUFOYjtFQVVNLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFNBQVMsRUFBQTtFQWJmO0lBZ0JVLGFBQWE7SUFDYixjQUFjLEVBQUE7RUFNeEI7RUFDRTtJQUNFLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvdXNlci1zaWRlLWJhci91c2VyLXNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGViYXIge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1NnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwODc5ZCwgIzAwOTlhMiwgIzAwYWE5YywgIzAwYjk4YywgIzRkYzc3NSk7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgyNiwgMTI0LCA1OCwgMC4yKSAxcHggOHB4IDE1cHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIC1tcy1vdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgLm1hdC1uYXYtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGEge1xyXG4gICAgICAubWF0LWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5uZXN0ZWQtbWVudSB7XHJcbiAgLm5lc3RlZCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gIC5zdWJtZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gICYgLmV4cGFuZCB7XHJcbiAgICAmLnN1Ym1lbnUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbGkge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICNzaWRlYmFyIHtcclxuICAgIGxlZnQ6IC0yNTBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/components/user-side-bar/user-side-bar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/components/user-side-bar/user-side-bar.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSideBarComponent", function() { return UserSideBarComponent; });
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

var UserSideBarComponent = /** @class */ (function () {
    function UserSideBarComponent() {
    }
    UserSideBarComponent.prototype.ngOnInit = function () {
        this.showMenu = '';
    };
    UserSideBarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    UserSideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-side-bar',
            template: __webpack_require__(/*! ./user-side-bar.component.html */ "./src/app/layout/components/user-side-bar/user-side-bar.component.html"),
            styles: [__webpack_require__(/*! ./user-side-bar.component.scss */ "./src/app/layout/components/user-side-bar/user-side-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserSideBarComponent);
    return UserSideBarComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/user-top-nav/user-top-nav.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/layout/components/user-top-nav/user-top-nav.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"white\" class=\"fix-nav\">\n  <button type=\"button\" mat-icon-button class=\"visible-md\" (click)=\"toggleSidebar()\">\n    <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n  </button>\n  <div class=\"nav-brand\">\n    <img src=\"assets/images/logo.png\" />\n  </div>\n\n  <span class=\"nav-spacer\"></span>\n  <!-- <a\n      href=\"https://github.com/start-javascript/sb-admin-material/archive/master.zip\"\n      class=\"hidden-sm\"\n      mat-raised-button\n      style=\"margin-right: 10px\"\n    >\n      <mat-icon>cloud_download</mat-icon> {{ 'Download Now' | translate }}\n    </a> -->\n  <!-- <button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"language\">\n    <mat-icon>language</mat-icon>\n  </button>\n  <mat-menu #language=\"matMenu\">\n    <button mat-menu-item (click)=\"changeLang('en')\">\n      <span>{{ 'English' | translate }}</span>\n    </button>\n    <button mat-menu-item (click)=\"changeLang('fr')\">\n      <span>{{ 'French' | translate }}</span>\n    </button>\n    <button mat-menu-item (click)=\"changeLang('ur')\">\n      <span>{{ 'Urdu' | translate }}s</span>\n    </button>\n  </mat-menu>\n  <button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"profile\">\n    <mat-icon>account_circle</mat-icon>\n  </button>\n  <mat-menu #profile=\"matMenu\">\n    <button mat-menu-item>\n      <mat-icon>person</mat-icon>\n      <span>{{ 'Profile' | translate }}</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>inbox</mat-icon>\n      <span>{{ 'Inbox' | translate }}</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>settings</mat-icon>\n      <span>{{ 'Settings' | translate }}</span>\n    </button>\n  </mat-menu> -->\n<div class=\"MailAndUploadTop\">\n  <mat-card class=\"MailTopLink\" matRipple [routerLink]=\"[ '/cs/mails' ]\">\n    <mat-card-content>\n      <button mat-icon-button  class=\"GradientIconButton\" >\n        <mat-icon aria-label=\"Scroll  to Fill more\">mail</mat-icon>\n       \n      </button>\n      <p>Mail</p>\n    </mat-card-content>\n  </mat-card>\n  <mat-card class=\"ReportLink\" matRipple [routerLink]=\"[ '/cs/report' ]\">\n    <mat-card-content>\n      <button mat-icon-button  class=\"GradientIconButton\" >\n        <mat-icon aria-label=\"Scroll  to Fill more\">cloud_upload</mat-icon>\n       \n      </button>\n      <p>Upload Report</p>\n    </mat-card-content>\n  </mat-card>\n</div>\n  <button mat-icon-button (click)=\"onLoggedout()\">\n    <mat-icon>exit_to_app</mat-icon>\n  </button>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/layout/components/user-top-nav/user-top-nav.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layout/components/user-top-nav/user-top-nav.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000; }\n\n.nav-brand {\n  width: 215px;\n  text-align: center; }\n\n.nav-brand img {\n  width: 120px;\n  margin-top: 6px;\n  text-align: center; }\n\n.topnav-icon {\n  text-decoration: none;\n  display: flex;\n  color: #fff; }\n\n.mat-toolbar-single-row {\n  background: #fff;\n  border-bottom: 2px solid rgba(99, 99, 99, 0.12); }\n\n.nav-spacer {\n  flex: 1 1 auto; }\n\n.visible-md {\n  display: none; }\n\n.visible-sm {\n  display: none; }\n\n.MailAndUploadTop {\n  display: flex;\n  flex-flow: row wrap;\n  width: 320px; }\n\n.GradientIconButton {\n  background: #4dc775;\n  background: linear-gradient(135deg, #4dc775 0%, #00879d 100%);\n  color: #fff; }\n\n.MailTopLink {\n  box-shadow: rgba(26, 124, 58, 0.2) 1px 8px 15px;\n  width: 110px;\n  box-sizing: border-box;\n  margin: 0;\n  margin: auto 10px auto 0;\n  display: block;\n  border-radius: 50px;\n  padding: 0;\n  height: 50px;\n  background: #4dc775;\n  background: linear-gradient(135deg, #4dc775 0%, #00879d 100%);\n  overflow: hidden; }\n\n.MailTopLink .mat-card-content {\n  display: flex;\n  flex-flow: row wrap;\n  box-sizing: border-box;\n  padding: 5px;\n  overflow: hidden; }\n\n.MailTopLink p {\n  font-size: 16px;\n  font-weight: bold;\n  margin: auto 0;\n  margin-left: 10px;\n  color: #fff; }\n\n.ReportLink {\n  box-shadow: rgba(26, 124, 58, 0.2) 1px 8px 15px;\n  background: #4dc775;\n  background: linear-gradient(135deg, #4dc775 0%, #00879d 100%);\n  width: 180px;\n  box-sizing: border-box;\n  margin: 0;\n  margin: auto 10px auto 0;\n  display: block;\n  border-radius: 50px;\n  padding: 0;\n  height: 50px;\n  overflow: hidden;\n  outline: none !important; }\n\n.ReportLink .mat-card-content {\n  display: flex;\n  flex-flow: row wrap;\n  box-sizing: border-box;\n  padding: 5px;\n  overflow: hidden; }\n\n.ReportLink p {\n  font-size: 16px;\n  font-weight: bold;\n  margin: auto 0;\n  margin-left: 10px;\n  color: #fff; }\n\n@media screen and (max-width: 992px) {\n  .visible-md {\n    display: block; } }\n\n@media screen and (max-width: 768px) {\n  .visible-sm {\n    display: block; }\n  .nav-brand {\n    width: 120px; } }\n\n@media screen and (max-width: 768px) {\n  .nav-brand img {\n    width: 100px;\n    margin-top: 10px; }\n  .MailAndUploadTop {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvdXNlci10b3AtbmF2L0Y6XFxzaGFmZWVxJ3NcXGRlaXR0ZWNcXFdFQlxcQURNSU4vc3JjXFxhcHBcXGxheW91dFxcY29tcG9uZW50c1xcdXNlci10b3AtbmF2XFx1c2VyLXRvcC1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtDQUErQyxFQUFBOztBQUdqRDtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxhQUFhLEVBQUE7O0FBS2Y7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFJZDtFQUNFLG1CQUE2QjtFQUM3Qiw2REFBd0Y7RUFDeEYsV0FBVyxFQUFBOztBQUliO0VBRUUsK0NBQStDO0VBQy9DLFlBQVc7RUFDWCxzQkFBdUI7RUFDdkIsU0FBUztFQUNULHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQTZCO0VBQzdCLDZEQUF3RjtFQUN4RixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBSWxCO0VBRUUsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFJYjtFQUVFLCtDQUErQztFQUMvQyxtQkFBNkI7RUFDN0IsNkRBQXdGO0VBQ3hGLFlBQWE7RUFDYixzQkFBdUI7RUFDdkIsU0FBUztFQUNULHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFFRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUtiO0VBQ0U7SUFDRSxjQUFjLEVBQUEsRUFDZjs7QUFFSDtFQUNFO0lBQ0UsY0FBYyxFQUFBO0VBRWhCO0lBQ0UsWUFBWSxFQUFBLEVBQ2I7O0FBRUg7RUFJRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTtFQUdwQjtJQUNFLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvdXNlci10b3AtbmF2L3VzZXItdG9wLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG4ubmF2LWJyYW5kIHtcclxuICB3aWR0aDogMjE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4ubmF2LWJyYW5kIGltZyB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRvcG5hdi1pY29uIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSg5OSwgOTksIDk5LCAwLjEyKTtcclxufVxyXG5cclxuLm5hdi1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4udmlzaWJsZS1tZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udmlzaWJsZS1zbSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLy8gVE9wIExJTktTXHJcblxyXG4uTWFpbEFuZFVwbG9hZFRvcHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG59XHJcbi8vY29tbW9uXHJcblxyXG4uR3JhZGllbnRJY29uQnV0dG9ue1xyXG4gIGJhY2tncm91bmQ6IHJnYig3NywgMTk5LCAxMTcpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNzcsIDE5OSwgMTE3LCAxKSAwJSwgcmdiYSgwLCAxMzUsIDE1NywgMSkgMTAwJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbn1cclxuLy8gQ09NTU9OXHJcbi5NYWlsVG9wTGlua3tcclxuXHJcbiAgYm94LXNoYWRvdzogcmdiYSgyNiwgMTI0LCA1OCwgMC4yKSAxcHggOHB4IDE1cHg7XHJcbiAgd2lkdGg6MTEwcHg7XHJcbiAgYm94LXNpemluZzogIGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbjogYXV0byAxMHB4IGF1dG8gMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYig3NywgMTk5LCAxMTcpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNzcsIDE5OSwgMTE3LCAxKSAwJSwgcmdiYSgwLCAxMzUsIDE1NywgMSkgMTAwJSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxufVxyXG4uTWFpbFRvcExpbmsgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG4uTWFpbFRvcExpbmsgcHtcclxuXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjphdXRvIDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4uUmVwb3J0TGlua3tcclxuXHJcbiAgYm94LXNoYWRvdzogcmdiYSgyNiwgMTI0LCA1OCwgMC4yKSAxcHggOHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDc3LCAxOTksIDExNyk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg3NywgMTk5LCAxMTcsIDEpIDAlLCByZ2JhKDAsIDEzNSwgMTU3LCAxKSAxMDAlKTtcclxuICB3aWR0aDogMTgwcHggO1xyXG4gIGJveC1zaXppbmc6ICBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW46IGF1dG8gMTBweCBhdXRvIDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBcclxufVxyXG4uUmVwb3J0TGluayAubWF0LWNhcmQtY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLlJlcG9ydExpbmsgcHtcclxuXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjphdXRvIDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAudmlzaWJsZS1tZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudmlzaWJsZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLm5hdi1icmFuZCB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhpZGRlbi1zbSB7XHJcbiAgICAvLyBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubmF2LWJyYW5kIGltZ3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgIFxyXG59XHJcbi5NYWlsQW5kVXBsb2FkVG9we1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/components/user-top-nav/user-top-nav.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/components/user-top-nav/user-top-nav.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserTopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTopNavComponent", function() { return UserTopNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserTopNavComponent = /** @class */ (function () {
    function UserTopNavComponent(router, translate) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && window.innerWidth <= 992 && _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    UserTopNavComponent.prototype.ngOnInit = function () {
        this.pushRightClass = 'push-right';
    };
    UserTopNavComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    UserTopNavComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    UserTopNavComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
        this.router.navigate(['/login']);
    };
    UserTopNavComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    UserTopNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-top-nav',
            template: __webpack_require__(/*! ./user-top-nav.component.html */ "./src/app/layout/components/user-top-nav/user-top-nav.component.html"),
            styles: [__webpack_require__(/*! ./user-top-nav.component.scss */ "./src/app/layout/components/user-top-nav/user-top-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], UserTopNavComponent);
    return UserTopNavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map