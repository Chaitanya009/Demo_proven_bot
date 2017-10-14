webpackJsonp(["popover-tooltip.module"],{

/***/ "../../../../../src/app/pages/component/popover-tooltip/popover-tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card t-50\">\r\n            <div class=\"card-body\">\r\n                <img src=\"../assets/images/users/you.png\" alt=\"\" class=\"align-right\"/>\r\n                <h3 class=\"card-title\">Proven Bot</h3>\r\n                <h5 class=\"card-subtitle\">1,250 subscribers</h5>\r\n                <div class=\"button-box\">\r\n                    <h6>\r\n                        Schedule content to automatically post at optimal times so your social presence stays active, even when you’re not.\r\n                    </h6>\r\n                </div>\r\n  \t\t\t</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/component/popover-tooltip/popover-tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdPopTooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPopTooltip = (function () {
    function NgbdPopTooltip() {
        this.name = 'World';
    }
    NgbdPopTooltip = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngbd-pagination',
            template: __webpack_require__("../../../../../src/app/pages/component/popover-tooltip/popover-tooltip.component.html")
        })
    ], NgbdPopTooltip);
    return NgbdPopTooltip;
}());

//# sourceMappingURL=popover-tooltip.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/component/popover-tooltip/popover-tooltip.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverTooltipModule", function() { return PopoverTooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_tooltip_component__ = __webpack_require__("../../../../../src/app/pages/component/popover-tooltip/popover-tooltip.component.ts");
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
            title: 'Auto Post'
        },
        component: __WEBPACK_IMPORTED_MODULE_4__popover_tooltip_component__["a" /* NgbdPopTooltip */]
    }];
var PopoverTooltipModule = (function () {
    function PopoverTooltipModule() {
    }
    PopoverTooltipModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__popover_tooltip_component__["a" /* NgbdPopTooltip */]]
        })
    ], PopoverTooltipModule);
    return PopoverTooltipModule;
}());

//# sourceMappingURL=popover-tooltip.module.js.map

/***/ })

});
//# sourceMappingURL=popover-tooltip.module.chunk.js.map