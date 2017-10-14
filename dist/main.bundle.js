webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/component/accordion/accordion.module": [
		"../../../../../src/app/pages/component/accordion/accordion.module.ts",
		"common",
		"accordion.module"
	],
	"./pages/component/alert/alert.module": [
		"../../../../../src/app/pages/component/alert/alert.module.ts",
		"common",
		"alert.module"
	],
	"./pages/component/carousel/carousel.module": [
		"../../../../../src/app/pages/component/carousel/carousel.module.ts",
		"carousel.module"
	],
	"./pages/component/datepicker/datepicker.module": [
		"../../../../../src/app/pages/component/datepicker/datepicker.module.ts",
		"datepicker.module"
	],
	"./pages/component/dropdown-collapse/dropdown-collapse.module": [
		"../../../../../src/app/pages/component/dropdown-collapse/dropdown-collapse.module.ts",
		"dropdown-collapse.module"
	],
	"./pages/component/modal/modal.module": [
		"../../../../../src/app/pages/component/modal/modal.module.ts",
		"modal.module"
	],
	"./pages/component/pagination/pagination.module": [
		"../../../../../src/app/pages/component/pagination/pagination.module.ts",
		"pagination.module"
	],
	"./pages/component/popover-tooltip/popover-tooltip.module": [
		"../../../../../src/app/pages/component/popover-tooltip/popover-tooltip.module.ts",
		"popover-tooltip.module"
	],
	"./pages/component/progressbar/progressbar.module": [
		"../../../../../src/app/pages/component/progressbar/progressbar.module.ts",
		"common",
		"progressbar.module"
	],
	"./pages/component/rating/rating.module": [
		"../../../../../src/app/pages/component/rating/rating.module.ts",
		"rating.module"
	],
	"./pages/component/tabs/tabs.module": [
		"../../../../../src/app/pages/component/tabs/tabs.module.ts",
		"tabs.module"
	],
	"./pages/component/timepicker/timepicker.module": [
		"../../../../../src/app/pages/component/timepicker/timepicker.module.ts",
		"timepicker.module"
	],
	"./pages/component/typehead/typehead.module": [
		"../../../../../src/app/pages/component/typehead/typehead.module.ts",
		"common",
		"typehead.module"
	],
	"./pages/icons/fontawesome/fontawesome.module": [
		"../../../../../src/app/pages/icons/fontawesome/fontawesome.module.ts",
		"fontawesome.module"
	],
	"./pages/icons/material/material.module": [
		"../../../../../src/app/pages/icons/material/material.module.ts",
		"material.module"
	],
	"./pages/icons/simpleline/simpleline.module": [
		"../../../../../src/app/pages/icons/simpleline/simpleline.module.ts",
		"simpleline.module"
	],
	"./pages/starter/starter.module": [
		"../../../../../src/app/pages/starter/starter.module.ts",
		"starter.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hideContent{\n  display: none;\n}\n.loading{\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: fixed;\n  display: block;\n  background-color: white;\n  z-index: 100;\n}\n.loading-image{\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 101;\n}\n.preloader{\n  position: relative;\n  margin: 0 auto;\n  width: 100px;\n}\n.preloader:before{\n    content: '';\n    display: block;\n    padding-top: 100%;\n}\n.circular {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  height: 50px;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  width: 50px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.path {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\n  stroke-linecap: round;\n}\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@-webkit-keyframes color {\n  100%,\n  0% {\n    stroke: #d62d20;\n  }\n  40% {\n    stroke: #0057e7;\n  }\n  66% {\n    stroke: #008744;\n  }\n  80%,\n  90% {\n    stroke: #ffa700;\n  }\n}\n\n@keyframes color {\n  100%,\n  0% {\n    stroke: #d62d20;\n  }\n  40% {\n    stroke: #0057e7;\n  }\n  66% {\n    stroke: #008744;\n  }\n  80%,\n  90% {\n    stroke: #ffa700;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Loading Page -->\n<!-- ============================================================== -->\n<div class=\"\" id=\"loading\" [class.hideContent]=hideLoad>\n  <div class=\"loading text-center\">\n    <!-- <p class=\"loading-image\" style=\"font-size:2em;color: violet\">Loading</p> -->\n    <div class=\"preloader\">\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" /> </svg>\n    </div>\n  </div>\n</div>\n<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<div id=\"main-wrapper\"  [class.hideContent]=hideMain>\n  <!-- ============================================================== -->\n    <!-- Topbar header - style you can find in pages.scss -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Topbar header - style you can find in pages.scss -->\n    <!-- ============================================================== -->\n    <header class=\"topbar\">\n        <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n            <!-- ============================================================== -->\n            <!-- Logo -->\n            <!-- ============================================================== -->\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" href=\"index.html\">\n                    <!-- Logo icon -->\n                    <b>\n                        <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\n                        <!-- Dark Logo icon -->\n                        <img src=\"assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n                        <!-- Light Logo icon -->\n                       <i class=\"mdi mdi-robot light-logo\"></i>\n                    </b>\n                    <!--End Logo icon -->\n                    <!-- Logo text -->\n                    <span class=\"light-logo\">\n                     Proven - Bot</span> </a>\n            </div>\n            <!-- ============================================================== -->\n            <!-- End Logo -->\n            <!-- ============================================================== -->\n            <div class=\"navbar-collapse\">\n                <!-- ============================================================== -->\n                <!-- toggle and nav items -->\n                <!-- ============================================================== -->\n                <ul class=\"navbar-nav mr-auto mt-md-0\">\n                    <!-- This is  -->\n                    <li class=\"nav-item\"> <a class=\"nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"><i class=\"mdi mdi-menu\"></i></a> </li>\n                    <li class=\"nav-item\"> <a class=\"nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"><i class=\"ti-menu\"></i></a> </li>\n\n\n                </ul>\n                <!-- ============================================================== -->\n                <!-- User profile and search -->\n                <!-- ============================================================== -->\n                <ul class=\"navbar-nav my-lg-0\">\n\n\n                    <!-- ============================================================== -->\n                    <!-- Profile -->\n                    <!-- ============================================================== -->\n                    <li class=\"nav-item dropdown\">\n                        <a class=\"nav-link dropdown-toggle text-muted waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"profile-pic\" /></a>\n                        <div class=\"dropdown-menu dropdown-menu-right scale-up\">\n                            <ul class=\"dropdown-user\">\n                                <li>\n                                    <div class=\"dw-user-box\">\n                                        <div class=\"u-img\"><img src=\"assets/images/users/1.jpg\" alt=\"user\"></div>\n                                        <div class=\"u-text\">\n                                            <h4>{{ userName }}</h4>\n                                            <p class=\"text-muted\">chaitanya.thakre@gmail.com</p><a href=\"#\" class=\"btn btn-rounded btn-danger btn-sm\">View Profile</a></div>\n                                    </div>\n                                </li>\n                                <li role=\"separator\" class=\"divider\"></li>\n                                <li><a href=\"#\"><i class=\"ti-user\"></i> My Profile</a></li>\n                                <li><a href=\"#\"><i class=\"ti-wallet\"></i> My Balance</a></li>\n                                <li><a href=\"#\"><i class=\"ti-email\"></i> Inbox</a></li>\n                                <li role=\"separator\" class=\"divider\"></li>\n                                <li><a href=\"#\"><i class=\"ti-settings\"></i> Account Setting</a></li>\n                                <li role=\"separator\" class=\"divider\"></li>\n                                <li><a href=\"#\"><i class=\"fa fa-power-off\"></i> Logout</a></li>\n                            </ul>\n                        </div>\n                    </li>\n\n                </ul>\n            </div>\n        </nav>\n    </header>\n    <!-- ============================================================== -->\n    <!-- End Topbar header -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Left Sidebar - style you can find in sidebar.scss  -->\n    <!-- ============================================================== -->\n    <ma-sidebar></ma-sidebar>\n    <!-- ============================================================== -->\n    <!-- End Left Sidebar - style you can find in sidebar.scss  -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Page wrapper  -->\n    <!-- ============================================================== -->\n    <div class=\"page-wrapper\">\n        <!-- ============================================================== -->\n        <!-- Container fluid  -->\n        <!-- ============================================================== -->\n        <div class=\"container-fluid\">\n            <breadcrumb></breadcrumb>\n          <!-- ============================================================== -->\n            <!-- Start Page Content -->\n            <!-- ============================================================== -->\n            <router-outlet></router-outlet>\n            <!-- ============================================================== -->\n            <!-- End Start Page Content -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- Right sidebar -->\n            <!-- ============================================================== -->\n            <ma-rightsidebar></ma-rightsidebar>\n            <!-- ============================================================== -->\n            <!-- End Right sidebar -->\n            <!-- ============================================================== -->\n        </div>\n        <!-- ============================================================== -->\n        <!-- End Container fluid  -->\n        <!-- ============================================================== -->\n        <!-- ============================================================== -->\n        <!-- footer -->\n        <!-- ============================================================== -->\n        <footer class=\"footer\">\n            © 2017 Proven Bot\n        </footer>\n        <!-- ============================================================== -->\n        <!-- End footer -->\n        <!-- ============================================================== -->\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Page wrapper  -->\n    <!-- ============================================================== -->\n</div>\n<!-- ============================================================== -->\n<!-- login page -->\n<!-- ============================================================== -->\n<div class=\"\" [class.hideContent]=hideLogin>\n  <div class=\"\" style=\"padding: 10% 35% 20% 35%\" >\n    <div class=\"card container\" style=\"height: 300px\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title\" style=\"padding-top: 75px\"><a routerLink=\"\">Login with facebook</a></h3>\n        <!-- <button (click)=\"login()\" class=\"btn btn-lg btn-primary btn-block\">\n          Login\n        </button> -->\n        <button (click)=\"loginWithOptions()\" class=\"btn btn-lg btn-primary btn-block\">\n          Login\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(fb, http, elem) {
        this.fb = fb;
        this.http = http;
        this.elem = elem;
        this.title = 'app';
        this.url = "https://thoughtnextbotapi.herokuapp.com";
        console.log('Initializing Facebook');
        fb.init({
            appId: '119074042122288',
            version: 'v2.10'
        });
    }
    AppComponent.prototype.getLoginStatus = function () {
        var _this = this;
        this.fb.getLoginStatus()
            .then(function (res) {
            console.log(res.status);
            _this.hideLoad = "true";
            if (res.status == "unknown") {
                _this.hideMain = "true";
            }
            else if (res.status == "connected") {
                _this.hideLogin = "true";
                _this.fb.api('/me?fields=id,name,email')
                    .then(function (res) {
                    console.log('Got the users profile', res);
                    _this.userName = res.name;
                    _this.userId = res.id;
                    // this.http.post(this.url + '/users/', {"name":this.userName})
                    //   .subscribe(response => {
                    //     console.log("sending user details",response);
                    //   });
                })
                    .catch(_this.handleError);
            }
        })
            .catch(console.error.bind(console));
    };
    AppComponent.prototype.loginWithOptions = function () {
        var _this = this;
        var loginOptions = {
            enable_profile_selector: true,
            return_scopes: true,
            scope: 'public_profile,pages_show_list,manage_pages,email'
        };
        this.fb.login(loginOptions)
            .then(function (res) {
            console.log('Logged in', res);
            if (res.status == "connected") {
                console.log("hello");
                //this.router.navigate(['/test'])
                _this.hideLogin = "true";
                _this.hideMain = "false";
                //this.router.navigate(['/test'])
                location.reload();
            }
            else {
                _this.hideLogin = "false";
                _this.hideMain = "true";
            }
        })
            .catch(this.handleError);
    };
    AppComponent.prototype.handleError = function (error) {
        console.error('Error processing action', error);
    };
    // removeBtn(){
    //   this.elem.nativeElement.querySelector('#button').style.visibility='hidden'
    // }
    AppComponent.prototype.ngOnInit = function () {
        this.getLoginStatus();
        // this.removeBtn()
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_header_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/shared/header-navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_right_sidebar_rightsidebar_component__ = __webpack_require__("../../../../../src/app/shared/right-sidebar/rightsidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//Facebook imports

var routes = [
    {
        path: '',
        loadChildren: './pages/starter/starter.module#StarterModule'
    }, {
        path: 'dashboard',
        loadChildren: './pages/component/accordion/accordion.module#AccordionModule'
    }, {
        path: 'conversation',
        loadChildren: './pages/component/alert/alert.module#NgAlertModule'
    }, {
        path: 'setting',
        loadChildren: './pages/component/carousel/carousel.module#ButtonsModule'
    }, {
        path: 'datepicker',
        loadChildren: './pages/component/datepicker/datepicker.module#DatepickerModule'
    }, {
        path: 'dropdown',
        loadChildren: './pages/component/dropdown-collapse/dropdown-collapse.module#DropdownModule'
    }, {
        path: 'growth',
        loadChildren: './pages/component/modal/modal.module#ModalModule'
    }, {
        path: 'pagination',
        loadChildren: './pages/component/pagination/pagination.module#paginationModule'
    }, {
        path: 'auto',
        loadChildren: './pages/component/popover-tooltip/popover-tooltip.module#PopoverTooltipModule'
    }, {
        path: 'analytics',
        loadChildren: './pages/component/progressbar/progressbar.module#progressbarModule'
    }, {
        path: 'rating',
        loadChildren: './pages/component/rating/rating.module#RatingModule'
    }, {
        path: 'broadcasting',
        loadChildren: './pages/component/tabs/tabs.module#TabsModule'
    }, {
        path: 'timepicker',
        loadChildren: './pages/component/timepicker/timepicker.module#TimepickerModule'
    }, {
        path: 'typehead',
        loadChildren: './pages/component/typehead/typehead.module#TypeheadModule'
    }, {
        path: 'fontawesome',
        loadChildren: './pages/icons/fontawesome/fontawesome.module#FontawesomeModule'
    }, {
        path: 'simpleline',
        loadChildren: './pages/icons/simpleline/simpleline.module#SimplelineIconModule'
    }, {
        path: 'material',
        loadChildren: './pages/icons/material/material.module#MaterialComponentModule'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_header_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_right_sidebar_rightsidebar_component__["a" /* RightSidebarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_11_ngx_facebook__["a" /* FacebookModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "                \n\n                <div class=\"row page-titles\">\n                    <div class=\"col-md-5 col-8 align-self-center\">\n                        <h3 class=\"text-themecolor m-b-0 m-t-0\">{{pageInfo?.title}}</h3>\n                        <ol class=\"breadcrumb\">\n                            <ng-template ngFor let-url [ngForOf]=\"pageInfo?.urls\" let-last=\"last\">\n\t\t                    \t<li class=\"breadcrumb-item\" *ngIf=\"!last\" [routerLink]=\"url.url\">\n\t\t                    \t\t<a href='javascript:void(0)'>{{url.title}}</a>\n\t\t                    \t</li>\n                                \n\t\t                        <li class=\"breadcrumb-item active\" *ngIf=\"last\">{{url.title}}</li>\n\t\t                    </ng-template>\n                        </ol>\n                    </div>\n                    \n                </div>\n              "

/***/ }),

/***/ "../../../../../src/app/shared/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
            _this.pageInfo = event;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "layout", void 0);
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'breadcrumb',
            template: __webpack_require__("../../../../../src/app/shared/breadcrumb/breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/header-navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Topbar header - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<header class=\"topbar\">\n    <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n        <!-- ============================================================== -->\n        <!-- Logo -->\n        <!-- ============================================================== -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"index.html\">\n                <!-- Logo icon -->\n                <b>\n                    <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\n                    <!-- Dark Logo icon -->\n                    <img src=\"assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n                    <!-- Light Logo icon -->\n                   <i class=\"mdi mdi-robot light-logo\"></i>\n                </b>\n                <!--End Logo icon -->\n                <!-- Logo text -->\n                <span class=\"light-logo\">\n                 Proven - Bot</span> </a>\n        </div>\n        <!-- ============================================================== -->\n        <!-- End Logo --> \n        <!-- ============================================================== -->\n        <div class=\"navbar-collapse\">\n            <!-- ============================================================== -->\n            <!-- toggle and nav items -->\n            <!-- ============================================================== -->\n            <ul class=\"navbar-nav mr-auto mt-md-0\">\n                <!-- This is  -->\n                <li class=\"nav-item\"> <a class=\"nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"><i class=\"mdi mdi-menu\"></i></a> </li>\n                <li class=\"nav-item\"> <a class=\"nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"><i class=\"ti-menu\"></i></a> </li>\n                \n                \n            </ul>\n            <!-- ============================================================== -->\n            <!-- User profile and search -->\n            <!-- ============================================================== -->\n            <ul class=\"navbar-nav my-lg-0\">\n                \n               \n                <!-- ============================================================== -->\n                <!-- Profile -->\n                <!-- ============================================================== -->\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle text-muted waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"profile-pic\" /></a>\n                    <div class=\"dropdown-menu dropdown-menu-right scale-up\">\n                        <ul class=\"dropdown-user\">\n                            <li>\n                                <div class=\"dw-user-box\">\n                                    <div class=\"u-img\"><img src=\"assets/images/users/1.jpg\" alt=\"user\"></div>\n                                    <div class=\"u-text\">\n                                        <h4>Steave Jobs</h4>\n                                        <p class=\"text-muted\">varun@gmail.com</p><a href=\"#\" class=\"btn btn-rounded btn-danger btn-sm\">View Profile</a></div>\n                                </div>\n                            </li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                            <li><a href=\"#\"><i class=\"ti-user\"></i> My Profile</a></li>\n                            <li><a href=\"#\"><i class=\"ti-wallet\"></i> My Balance</a></li>\n                            <li><a href=\"#\"><i class=\"ti-email\"></i> Inbox</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                            <li><a href=\"#\"><i class=\"ti-settings\"></i> Account Setting</a></li>\n                            <li role=\"separator\" class=\"divider\"></li>\n                            <li><a href=\"#\"><i class=\"fa fa-power-off\"></i> Logout</a></li>\n                        </ul>\n                    </div>\n                </li>\n               \n            </ul>\n        </div>\n    </nav>\n</header>\n<!-- ============================================================== -->\n<!-- End Topbar header -->\n<!-- ============================================================== -->\n"

/***/ }),

/***/ "../../../../../src/app/shared/header-navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ma-navigation',
            template: __webpack_require__("../../../../../src/app/shared/header-navigation/navigation.component.html")
        })
    ], NavigationComponent);
    return NavigationComponent;
}());

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/right-sidebar/rightsidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"right-sidebar\">\n                    <div class=\"slimscrollright\">\n                        <div class=\"rpanel-title\"> Service Panel <span><i class=\"ti-close right-side-toggle\"></i></span> </div>\n                        <div class=\"r-panel-body\">\n                            <ul id=\"themecolors\" class=\"m-t-20\">\n                                <li><b>With Light sidebar</b></li>\n                                <li><a href=\"javascript:void(0)\" data-theme=\"default\" class=\"default-theme\">1</a></li>\n                                <li><a href=\"javascript:void(0)\" data-theme=\"green\" class=\"green-theme\">2</a></li>\n                                <li><a href=\"javascript:void(0)\" data-theme=\"red\" class=\"red-theme\">3</a></li>\n                                <li><a href=\"javascript:void(0)\" data-theme=\"blue\" class=\"blue-theme working\">4</a></li>\n                                <li><a href=\"javascript:void(0)\" data-theme=\"purple\" class=\"purple-theme\">5</a></li>\n                                <li><a href=\"javascript:void(0)\" data-theme=\"megna\" class=\"megna-theme\">6</a></li>\n                                <li class=\"d-block m-t-30\"><b>With Dark sidebar</b></li>\n                                <li><a href=\"javascript:void(0)\" data-theme=\"default-dark\" class=\"default-dark-theme\">7</a></li>\n                                <li><a href=\"javascript:void(0)\" data-theme=\"green-dark\" class=\"green-dark-theme\">8</a></li>\n                                <li><a href=\"javascript:void(0)\" data-theme=\"red-dark\" class=\"red-dark-theme\">9</a></li>\n                                <li><a href=\"javascript:void(0)\" data-theme=\"blue-dark\" class=\"blue-dark-theme\">10</a></li>\n                                <li><a href=\"javascript:void(0)\" data-theme=\"purple-dark\" class=\"purple-dark-theme\">11</a></li>\n                                <li><a href=\"javascript:void(0)\" data-theme=\"megna-dark\" class=\"megna-dark-theme \">12</a></li>\n                            </ul>\n                            <ul class=\"m-t-20 chatonline\">\n                                <li><b>Chat option</b></li> \n                                <li>\n                                    <a href=\"javascript:void(0)\"><img src=\"assets/images/users/1.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Varun Dhavan <small class=\"text-success\">online</small></span></a>\n                                </li>\n                                <li>\n                                    <a href=\"javascript:void(0)\"><img src=\"assets/images/users/2.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Genelia Deshmukh <small class=\"text-warning\">Away</small></span></a>\n                                </li>\n                                <li>\n                                    <a href=\"javascript:void(0)\"><img src=\"assets/images/users/3.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Ritesh Deshmukh <small class=\"text-danger\">Busy</small></span></a>\n                                </li>\n                                <li>\n                                    <a href=\"javascript:void(0)\"><img src=\"assets/images/users/4.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Arijit Sinh <small class=\"text-muted\">Offline</small></span></a>\n                                </li>\n                                <li>\n                                    <a href=\"javascript:void(0)\"><img src=\"assets/images/users/5.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Govinda Star <small class=\"text-success\">online</small></span></a>\n                                </li>\n                                <li>\n                                    <a href=\"javascript:void(0)\"><img src=\"assets/images/users/6.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>John Abraham<small class=\"text-success\">online</small></span></a>\n                                </li>\n                                <li>\n                                    <a href=\"javascript:void(0)\"><img src=\"assets/images/users/7.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Hritik Roshan<small class=\"text-success\">online</small></span></a>\n                                </li>\n                                <li>\n                                    <a href=\"javascript:void(0)\"><img src=\"assets/images/users/8.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Pwandeep rajan <small class=\"text-success\">online</small></span></a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>"

/***/ }),

/***/ "../../../../../src/app/shared/right-sidebar/rightsidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightSidebarComponent = (function () {
    function RightSidebarComponent() {
    }
    RightSidebarComponent.prototype.ngOnInit = function () {
    };
    RightSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ma-rightsidebar',
            template: __webpack_require__("../../../../../src/app/shared/right-sidebar/rightsidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RightSidebarComponent);
    return RightSidebarComponent;
}());

//# sourceMappingURL=rightsidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->\n<aside class=\"left-sidebar\">\n    <!-- Sidebar scroll-->\n    <div class=\"scroll-sidebar\">\n        <!-- User profile -->\n        \n        <!-- End User profile text-->\n        <!-- Sidebar navigation-->\n        <nav class=\"sidebar-nav\">\n            <ul id=\"sidebarnav\">\n                <li class=\"nav-small-cap\">Demo Bot</li>\n                <li>\n                    <a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"dashboard\"><i class=\"mdi mdi-gauge\"></i><span class=\"hide-menu\">Dashboard</span></a>\n                </li>\n                <li>\n                    <a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"conversation\" class=\"\" href=\"javascript:void(0)\" aria-expanded=\"false\"><i class=\"ti-themify-favicon-alt\"></i><span class=\"hide-menu\">Conversation</span></a>\n                    <!-- <ul aria-expanded=\"false\" class=\"collapse\">\n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"accordion\">Accordion</a></li>\n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"alert\">Alert</a></li>\n                        \n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"carousel\">Carousel</a></li>\n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"datepicker\">Datepicker</a></li>\n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"dropdown\">Dropdown - Collapse</a></li>\n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"modal\">Modal</a></li>\n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"pagination\">Pagination</a></li>\n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"Popovertooltip\">Popover & Tooltip</a></li>\n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"progressbar\">Progressbar</a></li>\n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"rating\">Ratings</a></li>\n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"tabs\">Tabs</a></li>\n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"timepicker\">Timepicker</a></li>\n                        <li><a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"typehead\">Typehead</a></li>\n                    </ul> -->\n                </li>\n                <li>\n                    <a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"rating\" class=\"\" href=\"javascript:void(0)\" aria-expanded=\"false\"><i class=\"mdi mdi-bullseye\"></i><span class=\"hide-menu\">Builder</span></a>    \n                </li>\n                <li>\n                    <a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"growth\" class=\"\" href=\"javascript:void(0)\" aria-expanded=\"false\"><i class=\"  ti-stats-up\"></i><span class=\"hide-menu\">Growth Tool</span></a>    \n                </li>\n                <li>\n                    <a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"analytics\" class=\"\" href=\"javascript:void(0)\" aria-expanded=\"false\"><i class=\" ti-pie-chart\"></i><span class=\"hide-menu\">Analytics</span></a>    \n                </li>\n                <li>\n                    <a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"broadcasting\" class=\"\" href=\"javascript:void(0)\" aria-expanded=\"false\"><i class=\"ti-volume\"></i><span class=\"hide-menu\">Broadcasting</span></a>    \n                </li>\n                <li>\n                    <a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"pagination\" class=\"\" href=\"javascript:void(0)\" aria-expanded=\"false\"><i class=\"icon-screen-smartphone\"></i><span class=\"hide-menu\">Billing</span></a>    \n                </li>\n                <li>\n                    <a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"auto\" class=\"\" href=\"javascript:void(0)\" aria-expanded=\"false\"><i class=\"icon-note\"></i><span class=\"hide-menu\">Auto Post</span></a>    \n                </li>\n                <li>\n                    <a [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\" routerLink=\"setting\" class=\"\" href=\"javascript:void(0)\" aria-expanded=\"false\"><i class=\"icon-settings\"></i><span class=\"hide-menu\">Setting</span></a>    \n                </li>\n            </ul>\n        </nav>\n        <!-- End Sidebar navigation -->\n    </div>\n    <!-- End Sidebar scroll-->\n   \n</aside>\n<!-- ============================================================== -->\n<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->\n"

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ma-sidebar',
            template: __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.html")
        })
    ], SidebarComponent);
    return SidebarComponent;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map