(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./routes/home-page/module": [
		"./src/app/routes/home-page/module.ts",
		"default~routes-home-page-module~routes-identity-validation-module~routes-reset-password-page-module",
		"common",
		"routes-home-page-module"
	],
	"./routes/identity-validation/module": [
		"./src/app/routes/identity-validation/module.ts",
		"default~routes-home-page-module~routes-identity-validation-module~routes-reset-password-page-module",
		"common",
		"routes-identity-validation-module"
	],
	"./routes/reset-password-page/module": [
		"./src/app/routes/reset-password-page/module.ts",
		"default~routes-home-page-module~routes-identity-validation-module~routes-reset-password-page-module",
		"common",
		"routes-reset-password-page-module"
	],
	"./routes/score-page/module": [
		"./src/app/routes/score-page/module.ts",
		"common",
		"routes-score-page-module"
	],
	"./routes/user-page/module": [
		"./src/app/routes/user-page/module.ts",
		"common",
		"routes-user-page-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
Imports
*/

//
/*
Definition
*/
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ANGclient';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n        <router-outlet></router-outlet>\n    ",
        })
        //
        /*
        Export
        */
    ], AppComponent);
    return AppComponent;
}());

//


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");

/*
Imports
*/
// Angular




// Inner components



// Inner modules
/*
Definition
*/
var AppModule = /** @class */ (function () {
    //
    /*
    Export
    */
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_7__["MainRouter"], { onSameUrlNavigation: 'reload' }),
            ],
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
        //
        /*
        Export
        */
    ], AppModule);
    return AppModule;
}());

//


/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: MainRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRouter", function() { return MainRouter; });
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _auth_home_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.home.guard */ "./src/app/auth.home.guard.ts");
// Import AuthGuuard to define route accessibility


//
/*
Export
*/
var MainRouter = [
    {
        path: '',
        loadChildren: './routes/home-page/module#Module',
        canActivate: [_auth_home_guard__WEBPACK_IMPORTED_MODULE_1__["AuthHomeGuard"]] // Prevent for connected user
    },
    {
        path: 'identity-validation',
        loadChildren: './routes/identity-validation/module#Module'
    },
    {
        path: 'reset-password',
        loadChildren: './routes/reset-password-page/module#Module',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] // Accessible for connected user
    },
    {
        path: 'me',
        loadChildren: './routes/user-page/module#Module',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] // Accessible for connected user
    },
    {
        path: 'scores',
        loadChildren: './routes/score-page/module#Module',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] // Accessible for connected user
    }
];
//


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");

/*
Imports & definition
https://gist.github.com/DWS-paris/65df1566222cd9819e3050e96af6f0c6
*/
// Imports



// Definition
var AuthGuard = /** @class */ (function () {
    /*
    Properties
    */
    function AuthGuard(AuthService, Router) {
        this.AuthService = AuthService;
        this.Router = Router;
    }
    //
    /**
     * AuthGurad Strategy: thee canActivate is used in 'app.router'
     * @param next : informations about the route component => https://bit.ly/2VT2Us1
     * @param state : the state of the router => https://bit.ly/2Uo3zjO
     */
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Use Auth service to check user indentity from the servere
            _this.AuthService.getUserId()
                .then(function (apiResponse) { return resolve(true); })
                .catch(function (apiResponse) { return _this.Router.navigateByUrl('/'); });
        });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());

//


/***/ }),

/***/ "./src/app/auth.home.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth.home.guard.ts ***!
  \************************************/
/*! exports provided: AuthHomeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHomeGuard", function() { return AuthHomeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");

/*
Imports & definition
https://gist.github.com/DWS-paris/65df1566222cd9819e3050e96af6f0c6
*/
// Imports



// Definition
var AuthHomeGuard = /** @class */ (function () {
    /*
    Properties
    */
    function AuthHomeGuard(AuthService, Router) {
        this.AuthService = AuthService;
        this.Router = Router;
    }
    //
    /**
     * AuthHomeGuard Strategy: thee canActivate is used in 'app.router'
     * @param next : informations about the route component => https://bit.ly/2VT2Us1
     * @param state : the state of the router => https://bit.ly/2Uo3zjO
     */
    AuthHomeGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Use Auth service to check user indentity from the servere
            _this.AuthService.getUserId()
                .then(function (apiResponse) { return _this.Router.navigateByUrl('/me'); })
                .catch(function (apiResponse) { return resolve(true); });
        });
    };
    AuthHomeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthHomeGuard);
    return AuthHomeGuard;
}());

//


/***/ }),

/***/ "./src/app/services/auth/auth-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/auth/auth-service.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");


/*
Imports
*/


// import 'rxjs/add/operator/toPromise';

//
/*
Definition
*/
var AuthService = /** @class */ (function () {
    // Inject module(s) in the service
    function AuthService(HttpClient, router) {
        this.HttpClient = HttpClient;
        this.router = router;
    }
    ;
    // Function to register a user
    AuthService.prototype.register = function (userData) {
        // Set header
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // POST '/auth/register'
        return this.HttpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/auth/register", userData, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    // Function to register a user
    AuthService.prototype.identityValidation = function (_id, password) {
        // Set header
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        var userData = {
            _id: _id,
            password: password
        };
        // POST '/auth/register'
        return this.HttpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/auth/identity-validation", userData, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    // Function to connect a user
    AuthService.prototype.login = function (userData) {
        // Set header
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // POST '/auth/login'
        return this.HttpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/auth/login", userData, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    // Function to reset password
    AuthService.prototype.restPassword = function (password, newPassword) {
        // Set header
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // POST '/auth/login'
        return this.HttpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/auth/password", { password: password, newPassword: newPassword }, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    AuthService.prototype.logout = function () {
        var _this = this;
        // GET '/auth/logout'
        this.HttpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/auth/logout")
            .toPromise().then(function (data) {
            if (data)
                _this.router.navigate(['/']);
        }).catch(this.handleError);
        ;
    };
    ;
    // Function to get user identity from server
    AuthService.prototype.getUserId = function () {
        // POST '/auth/login'
        return this.HttpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/auth")
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    // Get the API response
    AuthService.prototype.getData = function (res) {
        return res || {};
    };
    ;
    // Get the API error
    AuthService.prototype.handleError = function (err) {
        return Promise.reject(err.error);
    };
    ;
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());

;
//


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:4123/api",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bngoum/Documents/ECV DIGITAL/M2/Vince/StackMean/ANGclient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map