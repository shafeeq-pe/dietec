(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chef-chef-module"],{

/***/ "./src/app/customer/chef/chef-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/customer/chef/chef-routing.module.ts ***!
  \******************************************************/
/*! exports provided: ChefRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefRoutingModule", function() { return ChefRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chef_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chef.component */ "./src/app/customer/chef/chef.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{ path: '', component: _chef_component__WEBPACK_IMPORTED_MODULE_2__["ChefComponent"] }];
var ChefRoutingModule = /** @class */ (function () {
    function ChefRoutingModule() {
    }
    ChefRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChefRoutingModule);
    return ChefRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer/chef/chef.component.html":
/*!***************************************************!*\
  !*** ./src/app/customer/chef/chef.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chefPageTitle\">\r\n  <h1>Select Chef</h1>\r\n  <button mat-stroked-button color=\"primary\" [routerLink]=\"[ '/cs']\">Skip</button>\r\n</div>\r\n<div class=\"ChefList\">\r\n  <div class=\"ChefCard\" *ngFor=\"let item of Chefs\">\r\n    <div class=\"ChefProfileImage\" [style.backgroundImage]='\"url(assets/images/\"+item.ProfilePic+\")\"'></div>\r\n    <div class=\"ChefProfileDetails\">\r\n      <h3>{{item.ChefName}}</h3>\r\n      <p>{{item.Description}}</p>\r\n      <button [ngClass]=\"btnstyle\" color=\"primary\" class=\"ChefSubscribeButton\" >Select</button>\r\n    </div>\r\n  </div>  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customer/chef/chef.component.scss":
/*!***************************************************!*\
  !*** ./src/app/customer/chef/chef.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chefPageTitle {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin-bottom: 24px; }\n\n.chefPageTitle button {\n  height: 35px;\n  margin: auto 0; }\n\n.chefPageTitle h1 {\n  font-size: 35px;\n  color: #05353a;\n  text-transform: uppercase;\n  width: auto; }\n\n.ChefList {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap; }\n\n.ChefCard {\n  width: calc(25% - 15px);\n  display: block;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px;\n  border-radius: 10px;\n  overflow: hidden;\n  margin: 0 20px 20px 0; }\n\n.ChefCard:nth-child(4n) {\n  margin: 0 0px 20px 0; }\n\n.ChefProfileImage {\n  width: 150px;\n  height: 150px;\n  display: block;\n  border-radius: 50%;\n  margin: 35px auto 10px;\n  background-size: cover;\n  background-position: center; }\n\n.ChefProfileDetails {\n  width: 100%;\n  text-align: center;\n  padding: 10px 10px;\n  box-sizing: border-box; }\n\n.ChefProfileDetails h3 {\n  font-weight: bold;\n  color: #333;\n  font-size: 25px;\n  line-height: 25px;\n  padding: 0;\n  margin: 0; }\n\n.ChefProfileDetails p {\n  color: #999;\n  font-size: 17px;\n  max-width: 300px;\n  line-height: 22px;\n  padding: 0;\n  margin: 0 auto;\n  padding-top: 25px; }\n\n.ChefSubscribeButton {\n  width: 100px;\n  border-radius: 50px;\n  margin: 20px auto 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY2hlZi9GOlxcc2hhZmVlcSdzXFxkZWl0dGVjXFxXRUJcXEFETUlOL3NyY1xcYXBwXFxjdXN0b21lclxcY2hlZlxcY2hlZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBRTlCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFFekIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFFWDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jaGVmL2NoZWYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlZlBhZ2VUaXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvLyBhbGlnbi1pdGVtczogc3BhY2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG4uY2hlZlBhZ2VUaXRsZSBidXR0b24ge1xyXG4gIGhlaWdodDogMzVweDtcclxuICBtYXJnaW46IGF1dG8gMDtcclxufVxyXG5cclxuLmNoZWZQYWdlVGl0bGUgaDEge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBjb2xvcjogIzA1MzUzYTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLkNoZWZMaXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbn1cclxuLkNoZWZDYXJkIHtcclxuICB3aWR0aDogY2FsYygyNSUgLSAxNXB4KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxufVxyXG4uQ2hlZkNhcmQ6bnRoLWNoaWxkKDRuKSB7XHJcbiAgbWFyZ2luOiAwIDBweCAyMHB4IDA7XHJcbn1cclxuLkNoZWZQcm9maWxlSW1hZ2Uge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDM1cHggYXV0byAxMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5DaGVmUHJvZmlsZURldGFpbHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uQ2hlZlByb2ZpbGVEZXRhaWxzIGgzIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLkNoZWZQcm9maWxlRGV0YWlscyBwIHtcclxuICBjb2xvcjogIzk5OTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG59XHJcbi5DaGVmU3Vic2NyaWJlQnV0dG9uIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBtYXJnaW46IDIwcHggYXV0byAzNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/customer/chef/chef.component.ts":
/*!*************************************************!*\
  !*** ./src/app/customer/chef/chef.component.ts ***!
  \*************************************************/
/*! exports provided: ChefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefComponent", function() { return ChefComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_layout_crm_crm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layout/crm/crm.service */ "./src/app/layout/crm/crm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChefComponent = /** @class */ (function () {
    function ChefComponent(crmservice) {
        this.crmservice = crmservice;
        this.currentIndex = 1;
        this.speed = 5000;
        this.infinite = true;
        this.direction = 'right';
        this.directionToggle = true;
        this.autoplay = true;
        this.Chefs = [];
        this.btnstyle = 'mat-stroked-button mat-primary';
        this.avatars = '1234567891234'.split('').map(function (x, i) {
            var num = i;
            // const num = Math.floor(Math.random() * 1000);
            return {
                url: "https://picsum.photos/600/400/?" + num,
                title: "" + num
            };
        });
        this.breakpoint = [
            {
                width: 500,
                number: 1
            },
            {
                width: 800,
                number: 2
            },
            {
                width: 1024,
                number: 4
            }
        ];
        this.GetAllChefs();
    }
    ChefComponent.prototype.ngOnInit = function () { };
    ChefComponent.prototype.switchIndex = function ($event) {
        console.log($event);
    };
    // get chefs
    ChefComponent.prototype.GetAllChefs = function () {
        var _this = this;
        this.crmservice.GetChefs().subscribe(function (Response) {
            if (Response.Status === true) {
                _this.Chefs = Response.Data;
            }
        });
    };
    ChefComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chef',
            template: __webpack_require__(/*! ./chef.component.html */ "./src/app/customer/chef/chef.component.html"),
            styles: [__webpack_require__(/*! ./chef.component.scss */ "./src/app/customer/chef/chef.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_layout_crm_crm_service__WEBPACK_IMPORTED_MODULE_1__["CrmService"]])
    ], ChefComponent);
    return ChefComponent;
}());



/***/ }),

/***/ "./src/app/customer/chef/chef.module.ts":
/*!**********************************************!*\
  !*** ./src/app/customer/chef/chef.module.ts ***!
  \**********************************************/
/*! exports provided: ChefModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefModule", function() { return ChefModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chef_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chef-routing.module */ "./src/app/customer/chef/chef-routing.module.ts");
/* harmony import */ var _chef_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chef.component */ "./src/app/customer/chef/chef.component.ts");
/* harmony import */ var ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-hm-carousel */ "./node_modules/ngx-hm-carousel/fesm5/ngx-hm-carousel.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChefModule = /** @class */ (function () {
    function ChefModule() {
    }
    ChefModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_chef_component__WEBPACK_IMPORTED_MODULE_3__["ChefComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chef_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChefRoutingModule"], ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_4__["NgxHmCarouselModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]]
        })
    ], ChefModule);
    return ChefModule;
}());



/***/ })

}]);
//# sourceMappingURL=chef-chef-module.js.map