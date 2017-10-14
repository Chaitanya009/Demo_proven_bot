webpackJsonp(["alert.module"],{

/***/ "../../../../../src/app/pages/component/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"card nav-card\">\r\n      <div class=\"card-body nav-shadow\">\r\n           <div class=\"row\">\r\n           <div class=\"col-md-12 text-center p-20\">\r\n            <div class=\"btn-group\" data-toggle=\"buttons\">\r\n              <label class=\"btn btn-primary active active-btn\">\r\n                <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> Active\r\n              </label>\r\n              <label class=\"btn btn-primary active-btn\">\r\n                <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Inactive\r\n              </label>\r\n            </div>\r\n            </div>\r\n            </div>\r\n            <h4 class=\"card-title m-t-20\">Recent Messages</h4>\r\n            <div class=\"message-box\">\r\n              <div class=\"message-widget\">\r\n                <!-- Message -->\r\n                <a href=\"/conversation\">\r\n                  <div class=\"user-img\"> <img src=\"../assets/images/users/1.jpg\" alt=\"\" class=\"img-circle\"> <span class=\"profile-status online pull-right\"></span> </div>\r\n                  <div class=\"mail-contnet\">\r\n                    <h5>Matt Damon</h5> <span class=\"mail-desc\">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.</span> <span class=\"time\">9:30 AM</span> </div>\r\n                </a>\r\n                <!-- Message -->\r\n                <a href=\"/conversation\">\r\n                  <div class=\"user-img\"> <img src=\"../assets/images/users/2.jpg\" alt=\"\" class=\"img-circle\"> <span class=\"profile-status busy pull-right\"></span> </div>\r\n                  <div class=\"mail-contnet\">\r\n                    <h5>Sonu Nigam</h5> <span class=\"mail-desc\">I've sung a song! See you at</span> <span class=\"time\">9:10 AM</span> </div>\r\n                </a>\r\n                <!-- Message -->\r\n                <a href=\"/conversation\">\r\n                  <div class=\"user-img\"> <span class=\"round\">A</span> <span class=\"profile-status away pull-right\"></span> </div>\r\n                  <div class=\"mail-contnet\">\r\n                    <h5>Arijit Sinh</h5> <span class=\"mail-desc\">Simply dummy text of the printing and typesetting industry.</span> <span class=\"time\">9:08 AM</span> </div>\r\n                </a>\r\n                <!-- Message -->\r\n                <a href=\"/conversation\">\r\n                  <div class=\"user-img\"> <img src=\"../assets/images/users/4.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status offline pull-right\"></span> </div>\r\n                  <div class=\"mail-contnet\">\r\n                    <h5>Pavan kumar</h5> <span class=\"mail-desc\">Just see the my admin!</span> <span class=\"time\">9:02 AM</span> </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-7 convo-left xs-hidden\">   \r\n      <div class=\"card-body\">\r\n        <h3 class=\"card-title\">Conversation</h3>\r\n        <div class=\"chat-box\">\r\n          <ul class=\"chat-list\">\r\n            <li>\r\n              <div class=\"chat-img\"><img src=\"../assets/images/users/1.jpg\" alt=\"user\" /></div>\r\n              <div class=\"chat-content\">\r\n                <h5>Matt Damon</h5>\r\n                <div class=\"box bg-light-info\">Hi assist..</div>\r\n              </div>\r\n              <div class=\"chat-time\">10:56 am</div>\r\n            </li>\r\n            <li class=\"odd\">\r\n              <div class=\"chat-content\">\r\n                <div class=\"box bg-light-inverse\">Hi, Welcome to Proven, A new way to discover and use services right inside messaging. Have you used Proven on diffirent messaging platform. </div>\r\n                <div class=\"chat-img\"><img src=\"../assets/images/users/bot.png\" alt=\"\" /></div>\r\n                <br/>\r\n              </div>\r\n              <div class=\"chat-time\">10:58 am</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"chat-img\"><img src=\"../assets/images/users/1.jpg\" alt=\"\" /></div>\r\n              <div class=\"chat-content\">\r\n                <h5>Matt Damon</h5>\r\n                <div class=\"box bg-light-info\">No</div>\r\n              </div>\r\n              <div class=\"chat-time\">10:58 am</div>\r\n            </li>\r\n            <li class=\"odd\">\r\n              <div class=\"chat-content\">\r\n                <div class=\"box bg-light-inverse\">Before we start, what's your first name ? </div>\r\n                <div class=\"chat-img\"><img src=\"../assets/images/users/bot.png\" alt=\"\" /></div>\r\n                <br/>\r\n              </div>\r\n              <div class=\"chat-time\">10:58 am</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"chat-img\"><img src=\"../assets/images/users/1.jpg\" alt=\"\" /></div>\r\n              <div class=\"chat-content\">\r\n                <h5>Matt Damon</h5>\r\n                <div class=\"box bg-light-info\">James</div>\r\n              </div>\r\n              <div class=\"chat-time\">10:58 am</div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    \r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/component/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdAlertBasic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdAlertBasic = (function () {
    function NgbdAlertBasic() {
        // this is for the Closeable Alert
        this.alerts = [];
        // End the Closeable Alert
        ///This is for the self closing alert
        this._success = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.staticAlertClosed = false;
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NgbdAlertBasic.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    NgbdAlertBasic.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) { return Object.assign({}, alert); });
    };
    NgbdAlertBasic.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.debounceTime(5000).subscribe(function () { return _this.successMessage = null; });
    };
    NgbdAlertBasic.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdAlertBasic.prototype, "alerts", void 0);
    NgbdAlertBasic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '',
            template: __webpack_require__("../../../../../src/app/pages/component/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NgbdAlertBasic);
    return NgbdAlertBasic;
}());

//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/component/alert/alert.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAlertModule", function() { return NgAlertModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_component__ = __webpack_require__("../../../../../src/app/pages/component/alert/alert.component.ts");
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
            title: 'Conversation',
        },
        component: __WEBPACK_IMPORTED_MODULE_4__alert_component__["a" /* NgbdAlertBasic */]
    }];
var NgAlertModule = (function () {
    function NgAlertModule() {
    }
    NgAlertModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__alert_component__["a" /* NgbdAlertBasic */]]
        })
    ], NgAlertModule);
    return NgAlertModule;
}());

//# sourceMappingURL=alert.module.js.map

/***/ })

});
//# sourceMappingURL=alert.module.chunk.js.map