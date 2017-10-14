webpackJsonp(["progressbar.module"],{

/***/ "../../../../../src/app/pages/component/progressbar/progressbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h3 class=\"card-title\">User Activity</h3>\r\n        <div>\r\n          <canvas baseChart height=\"220\" [data]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [chartType]=\"lineChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\">\r\n    <!-- Card -->\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Popular User Inputs</h4>\r\n        <ul class=\"feeds\">\r\n          <li style=\"list-style:none\"><strong>Phrase</strong><span class=\"text-muted\"><strong>Rate</strong></span></li>\r\n          <li>\r\n            Hi <span class=\"text-muted\">267</span></li>\r\n          <li>\r\n            Do I need on ?<span class=\"text-muted\">81</span></li>\r\n          <li>\r\n            How can I get one?<span class=\"text-muted\">73</span></li>\r\n          <li>\r\n            How are you?<span class=\"text-muted\">60</span></li>\r\n          <li>\r\n            Can a chat bot make me money? <span class=\"text-muted\">27</span></li>\r\n          <li>\r\n            Can a chat bot discuss football? <span class=\"text-muted\">23</span></li>\r\n          <li>\r\n            Do you like cheese?<span class=\"text-muted\">30</span></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Popular Button</h4>\r\n        <table class=\"table browser m-t-30 no-border\">\r\n          <tbody>\r\n            <th>Button</th>\r\n            <th class=\"text-right\">Rate</th>\r\n            <tr>\r\n              <td>Get Started</td>\r\n              <td align=\"right\"><span class=\"label label-light-info\">2,345,834</span></td>\r\n            </tr>\r\n            <tr>\r\n              <td>Show Menu</td>\r\n              <td align=\"right\"><span class=\"label label-light-success\">34,653</span></td>\r\n            </tr>\r\n            <tr>\r\n              <td>Contact Manager</td>\r\n              <td align=\"right\"><span class=\"label label-light-primary\">745</span></td>\r\n            </tr>\r\n            <tr>\r\n              <td>More Detail</td>\r\n              <td align=\"right\"><span class=\"label label-light-warning\">79</span></td>\r\n            </tr>\r\n            <tr>\r\n              <td>Build</td>\r\n              <td align=\"right\"><span class=\"label label-light-megna\">102</span></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/component/progressbar/progressbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdpregressbarBasic; });
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


var NgbdpregressbarBasic = (function () {
    function NgbdpregressbarBasic(config) {
        // lineChart
        this.lineChartData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90],
            [82, 36, 51, 45, 12, 29, 60]
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.pieChartType = 'pie';
        // customize default values of progress bars used by this component tree
        config.max = 1000;
        config.striped = true;
        config.animated = true;
        config.type = 'success';
    }
    NgbdpregressbarBasic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngbd-pagination',
            template: __webpack_require__("../../../../../src/app/pages/component/progressbar/progressbar.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbProgressbarConfig */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbProgressbarConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbProgressbarConfig */]) === "function" && _a || Object])
    ], NgbdpregressbarBasic);
    return NgbdpregressbarBasic;
    var _a;
}());

//# sourceMappingURL=progressbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/component/progressbar/progressbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressbarModule", function() { return progressbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progressbar_component__ = __webpack_require__("../../../../../src/app/pages/component/progressbar/progressbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: '',
        data: {
            title: 'Analytics'
        },
        component: __WEBPACK_IMPORTED_MODULE_4__progressbar_component__["a" /* NgbdpregressbarBasic */]
    }];
var progressbarModule = (function () {
    function progressbarModule() {
    }
    progressbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__progressbar_component__["a" /* NgbdpregressbarBasic */]]
        })
    ], progressbarModule);
    return progressbarModule;
}());

//# sourceMappingURL=progressbar.module.js.map

/***/ })

});
//# sourceMappingURL=progressbar.module.chunk.js.map