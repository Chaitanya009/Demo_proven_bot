webpackJsonp(["carousel.module"],{

/***/ "../../../../../src/app/pages/component/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 col-xlg-5\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row m-06\">\r\n          <div class=\"col-md-2\">\r\n            <h4 class=\"card-title m-06\">Getting Started</h4>\r\n          </div>\r\n          <div class=\"col-md-5\">\r\n            <div class=\"\">\r\n              <textarea class=\"form-control\" rows=\"3\" placeholder=\"The best bot in the world\"></textarea>\r\n            </div>\r\n            <button type=\"button\" class=\"btn waves-effect waves-light btn-outline-secondary align-right\">Save</button> <a href=\"\" class=\"align-right m-r-15\">See how it looks</a>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <h6 class=\"card-subtitle m-06\">This text is shown to users before they start an interaction with your bot</h6>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <hr>\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <h4 class=\"card-title m-06\">Disable bot for this page</h4>\r\n          </div>\r\n          <div class=\"col-md-4 m-t-5\">\r\n           \t<button type=\"button\" class=\"btn waves-effect waves-light btn-outline-danger\">Disable Bot</button>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/component/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdCarouselBasic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdCarouselBasic = (function () {
    function NgbdCarouselBasic(config) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }
    NgbdCarouselBasic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngbd-buttons-radio',
            template: __webpack_require__("../../../../../src/app/pages/component/carousel/carousel.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselConfig */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselConfig */]) === "function" && _a || Object])
    ], NgbdCarouselBasic);
    return NgbdCarouselBasic;
    var _a;
}());

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/component/carousel/carousel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_component__ = __webpack_require__("../../../../../src/app/pages/component/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        data: {
            title: 'Setting'
        },
        component: __WEBPACK_IMPORTED_MODULE_4__carousel_component__["a" /* NgbdCarouselBasic */]
    }];
var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    ButtonsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__carousel_component__["a" /* NgbdCarouselBasic */]]
        })
    ], ButtonsModule);
    return ButtonsModule;
}());

//# sourceMappingURL=carousel.module.js.map

/***/ })

});
//# sourceMappingURL=carousel.module.chunk.js.map