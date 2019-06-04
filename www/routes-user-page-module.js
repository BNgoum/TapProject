(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-user-page-module"],{

/***/ "./src/app/components/header/header.css":
/*!**********************************************!*\
  !*** ./src/app/components/header/header.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1.875rem;\n  padding: 1.5rem;\n  margin-bottom: 1rem;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);\n}\n\nheader h1 {\n  text-align: center;\n  font-weight: bold;\n  color: #000;\n  text-transform: uppercase;\n  margin: 0;\n  font-family: 'CutTheCrap', 'Arial', sans-serif;\n  font-size: 40px;\n}\n\nheader p {\n  margin: 0 0 2rem;\n  font-size: .875rem;\n}\n\nheader h1 span {\n  font-size: 44px;\n  color: #5e3a94;\n  font-family: 'CutTheCrap', 'Arial', sans-serif;\n}\n\nheader nav ul {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  list-style: none;\n}\n\nheader nav ul li {\n  margin-right: 1rem;\n}\n\nheader nav ul li button,\nheader nav ul li a {\n  display: block;\n  padding: 8px 14px;\n  width: 7.5rem;\n  height: 2.125rem;\n  text-transform: uppercase;\n  color: #fff;\n  border-radius: 4px;\n  background-color: #5e3a94;\n  font-size: .75rem;\n  text-align: center;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiw0Q0FBNEM7Q0FDN0M7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLCtDQUErQztFQUMvQyxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwrQ0FBK0M7Q0FDaEQ7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEuODc1cmVtO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmhlYWRlciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0VGhlQ3JhcCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaGVhZGVyIHAge1xuICBtYXJnaW46IDAgMCAycmVtO1xuICBmb250LXNpemU6IC44NzVyZW07XG59XG5cbmhlYWRlciBoMSBzcGFuIHtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBjb2xvcjogIzVlM2E5NDtcbiAgZm9udC1mYW1pbHk6ICdDdXRUaGVDcmFwJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcbn1cblxuaGVhZGVyIG5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5oZWFkZXIgbmF2IHVsIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG5oZWFkZXIgbmF2IHVsIGxpIGJ1dHRvbixcbmhlYWRlciBuYXYgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgd2lkdGg6IDcuNXJlbTtcbiAgaGVpZ2h0OiAyLjEyNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlM2E5NDtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/user-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/user-page/router.ts");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");
/* harmony import */ var _components_headerUser_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/headerUser/module */ "./src/app/components/headerUser/module.ts");

/*
Imports
*/
// Angular


// Inner



//
/*
Definition
*/
var Module = /** @class */ (function () {
    //
    /*
    Export
    */
    function Module() {
    }
    Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _router__WEBPACK_IMPORTED_MODULE_3__["Routing"],
                _components_headerUser_module__WEBPACK_IMPORTED_MODULE_5__["HeaderUserModule"]
            ]
        })
        //
        /*
        Export
        */
    ], Module);
    return Module;
}());

;
//


/***/ }),

/***/ "./src/app/routes/user-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _user_page_component__WEBPACK_IMPORTED_MODULE_1__["UserPageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main class=\"user-page\">\n    <button (click)=\"onTapButton()\" id=\"button-tap\">\n      <img src=\"{{ isTaped ? '../../../assets/img/tapOn.png' : '../../../assets/img/tapOff.png' }}\" class=\"img-btn-push\" />\n    </button>\n    <span class=\"numberTap\">{{ numberTap }}</span>\n\n    <div class=\"wrapperJauge\">\n      <span class=\"jaugeTimer\" [class.isStarted]=\"isStarted\"></span>\n    </div>\n</main>\n"

/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.ts ***!
  \*********************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");
/* harmony import */ var _services_game_game_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/game/game-service.service */ "./src/app/services/game/game-service.service.ts");

/*
Imports & definition
*/
// Imports


// Inner


// Definition
var UserPageComponent = /** @class */ (function () {
    /*
    Config.
    */
    // Module injection
    function UserPageComponent(AuthService, GameService, router) {
        this.AuthService = AuthService;
        this.GameService = GameService;
        this.router = router;
        this.numberTap = 0;
    }
    ;
    //
    /*
    Methods
    */
    UserPageComponent.prototype.startGame = function () {
        var _this = this;
        this.isStarted = true;
        var timer = setTimeout(function () {
            if (_this.isStarted) {
                _this.endGame();
                _this.isStarted = false;
                clearTimeout(timer);
            }
        }, 10000);
    };
    UserPageComponent.prototype.onTapButton = function () {
        this.numberTap++;
        if (this.numberTap > 0) {
            this.startGame();
        }
    };
    UserPageComponent.prototype.endGame = function () {
        this.GameService.saveScore(this.numberTap);
        this.router.navigate(['/scores']);
    };
    ;
    /*
    Hooks
    */
    UserPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.querySelector('#button-tap').addEventListener("mousedown", function () {
            _this.isTaped = true;
        });
        document.querySelector('#button-tap').addEventListener("mouseup", function () {
            _this.isTaped = false;
        });
    };
    ;
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/routes/user-page/user-page.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_game_game_service_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]],
            styles: [__webpack_require__(/*! ./user-page.css */ "./src/app/routes/user-page/user-page.css")]
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_game_game_service_service__WEBPACK_IMPORTED_MODULE_4__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserPageComponent);
    return UserPageComponent;
}());

//


/***/ }),

/***/ "./src/app/routes/user-page/user-page.css":
/*!************************************************!*\
  !*** ./src/app/routes/user-page/user-page.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.user-page .numberTap {\n  font-size: 4.5rem;\n  margin: 1rem 0;\n  font-family: 'CutTheCrap', Arial, Helvetica, sans-serif;\n}\n\n.user-page button .img-btn-push {\n  width: 250px;\n}\n\n.user-page .wrapperJauge {\n  display: block;\n  width: 80%;\n  height: 30px;\n  background-color: rgb(223, 223, 223);\n  border-radius: 15px;\n}\n\n.user-page .wrapperJauge .jaugeTimer {\n  display: block;\n  width: 0%;\n  height: 100%;\n  background-color: rgb(77, 77, 77);\n  border-radius: 15px;\n}\n\n.user-page .wrapper-jauge .isStarted {\n  -webkit-animation: fillUp 10s linear forwards;\n          animation: fillUp 10s linear forwards;\n}\n\n@-webkit-keyframes fillUp {\n  from { \n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes fillUp {\n  from { \n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3VzZXItcGFnZS91c2VyLXBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3REFBd0Q7Q0FDekQ7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLDhDQUFzQztVQUF0QyxzQ0FBc0M7Q0FDdkM7O0FBRUQ7RUFDRTtJQUNFLFVBQVU7R0FDWDtFQUNEO0lBQ0UsWUFBWTtHQUNiO0NBQ0Y7O0FBUEQ7RUFDRTtJQUNFLFVBQVU7R0FDWDtFQUNEO0lBQ0UsWUFBWTtHQUNiO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvdXNlci1wYWdlL3VzZXItcGFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51c2VyLXBhZ2UgLm51bWJlclRhcCB7XG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbiAgZm9udC1mYW1pbHk6ICdDdXRUaGVDcmFwJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnVzZXItcGFnZSBidXR0b24gLmltZy1idG4tcHVzaCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnVzZXItcGFnZSAud3JhcHBlckphdWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4udXNlci1wYWdlIC53cmFwcGVySmF1Z2UgLmphdWdlVGltZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDc3KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnVzZXItcGFnZSAud3JhcHBlci1qYXVnZSAuaXNTdGFydGVkIHtcbiAgYW5pbWF0aW9uOiBmaWxsVXAgMTBzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBmaWxsVXAge1xuICBmcm9tIHsgXG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"

/***/ })

}]);
//# sourceMappingURL=routes-user-page-module.js.map