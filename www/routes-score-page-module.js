(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-score-page-module"],{

/***/ "./src/app/components/header/header.css":
/*!**********************************************!*\
  !*** ./src/app/components/header/header.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1.875rem;\n  padding: 1.5rem;\n  margin-bottom: 1rem;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);\n}\n\nheader h1 {\n  text-align: center;\n  font-weight: bold;\n  color: #000;\n  text-transform: uppercase;\n  margin: 0;\n  font-family: 'CutTheCrap', 'Arial', sans-serif;\n  font-size: 40px;\n}\n\nheader p {\n  margin: 0 0 2rem;\n  font-size: .875rem;\n}\n\nheader h1 span {\n  font-size: 44px;\n  color: #5e3a94;\n  font-family: 'CutTheCrap', 'Arial', sans-serif;\n}\n\nheader nav ul {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  list-style: none;\n}\n\nheader nav ul li {\n  margin-right: 1rem;\n}\n\nheader nav ul li button,\nheader nav ul li a {\n  display: block;\n  padding: 8px 14px;\n  width: 7.5rem;\n  height: 2.125rem;\n  text-transform: uppercase;\n  color: #fff;\n  border-radius: 4px;\n  background-color: #5e3a94;\n  font-size: .75rem;\n  text-align: center;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiw0Q0FBNEM7Q0FDN0M7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLCtDQUErQztFQUMvQyxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwrQ0FBK0M7Q0FDaEQ7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEuODc1cmVtO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmhlYWRlciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0VGhlQ3JhcCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaGVhZGVyIHAge1xuICBtYXJnaW46IDAgMCAycmVtO1xuICBmb250LXNpemU6IC44NzVyZW07XG59XG5cbmhlYWRlciBoMSBzcGFuIHtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBjb2xvcjogIzVlM2E5NDtcbiAgZm9udC1mYW1pbHk6ICdDdXRUaGVDcmFwJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcbn1cblxuaGVhZGVyIG5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5oZWFkZXIgbmF2IHVsIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG5oZWFkZXIgbmF2IHVsIGxpIGJ1dHRvbixcbmhlYWRlciBuYXYgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgd2lkdGg6IDcuNXJlbTtcbiAgaGVpZ2h0OiAyLjEyNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlM2E5NDtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/headerScore/headerScore.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/headerScore/headerScore.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Score table</h1>\n  <p>Here is the list of score</p>\n  <nav>\n    <ul>\n      <li><a [routerLink]=\"'/me'\">Play</a></li>\n      <li><button (click)=\"logout()\">Logout</button></li>\n    </ul>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/components/headerScore/headerScore.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/headerScore/headerScore.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderScoreComponent", function() { return HeaderScoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");



var HeaderScoreComponent = /** @class */ (function () {
    function HeaderScoreComponent(AuthService) {
        this.AuthService = AuthService;
    }
    HeaderScoreComponent.prototype.logout = function () {
        this.AuthService.logout();
    };
    HeaderScoreComponent.prototype.ngOnInit = function () {
    };
    HeaderScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./headerScore.component.html */ "./src/app/components/headerScore/headerScore.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
            styles: [__webpack_require__(/*! ../header/header.css */ "./src/app/components/header/header.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderScoreComponent);
    return HeaderScoreComponent;
}());



/***/ }),

/***/ "./src/app/components/headerScore/module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/headerScore/module.ts ***!
  \**************************************************/
/*! exports provided: HeaderScoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderScoreModule", function() { return HeaderScoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _headerScore_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./headerScore.component */ "./src/app/components/headerScore/headerScore.component.ts");

/*
Imports
*/
// Angular




// Inner

//
/*
Definition & export
*/
var HeaderScoreModule = /** @class */ (function () {
    function HeaderScoreModule() {
    }
    HeaderScoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_headerScore_component__WEBPACK_IMPORTED_MODULE_5__["HeaderScoreComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            exports: [_headerScore_component__WEBPACK_IMPORTED_MODULE_5__["HeaderScoreComponent"]]
        })
    ], HeaderScoreModule);
    return HeaderScoreModule;
}());

;
//


/***/ }),

/***/ "./src/app/routes/score-page/module.ts":
/*!*********************************************!*\
  !*** ./src/app/routes/score-page/module.ts ***!
  \*********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/score-page/router.ts");
/* harmony import */ var _score_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score-page.component */ "./src/app/routes/score-page/score-page.component.ts");
/* harmony import */ var _components_headerScore_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/headerScore/module */ "./src/app/components/headerScore/module.ts");

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
            declarations: [_score_page_component__WEBPACK_IMPORTED_MODULE_4__["ScorePageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _router__WEBPACK_IMPORTED_MODULE_3__["Routing"],
                _components_headerScore_module__WEBPACK_IMPORTED_MODULE_5__["HeaderScoreModule"]
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

/***/ "./src/app/routes/score-page/router.ts":
/*!*********************************************!*\
  !*** ./src/app/routes/score-page/router.ts ***!
  \*********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _score_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score-page.component */ "./src/app/routes/score-page/score-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _score_page_component__WEBPACK_IMPORTED_MODULE_1__["ScorePageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ }),

/***/ "./src/app/routes/score-page/score-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/routes/score-page/score-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <div class=\"score-page\">\n    <p *ngIf=\"listScore && listScore.length === 0; else elseBlock\">Aucun score enregistré</p>\n    <div>{{ value }}</div>\n\n    <ng-template #elseBlock>\n      <ul>\n        <li *ngFor=\"let score of listScore\">\n          <span class=\"points\">\n            {{ score.point }}\n          </span>\n          <div class=\"block-right\">\n            <span>{{ score.username }}</span>\n            <span class=\"separator\">/</span>\n            <span>{{ score.date }}</span>\n          </div>\n        </li>\n      </ul>\n    </ng-template>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/routes/score-page/score-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/score-page/score-page.component.ts ***!
  \***********************************************************/
/*! exports provided: ScorePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorePageComponent", function() { return ScorePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_game_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game/game-service.service */ "./src/app/services/game/game-service.service.ts");

/*
Imports & definition
*/
// Imports

// Inner

var formatDate = function (date) { return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " - " + date.getHours() + "h" + date.getMinutes() + "m" + date.getSeconds() + "s"; };
var mappingScore = function (scores) { return scores.map(function (_a) {
    var score = _a.score, player = _a.player, updated_at = _a.updated_at;
    return ({
        username: player.username,
        point: score,
        date: formatDate(new Date(updated_at))
    });
}); };
// Definition
var ScorePageComponent = /** @class */ (function () {
    /*
    Config.
    */
    // Module injection
    function ScorePageComponent(GameService) {
        this.GameService = GameService;
    }
    ;
    //
    /*
    Methods
    */
    /*
    Hooks
    */
    ScorePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GameService.getListScore().then(function (_a) {
            var data = _a.data;
            _this.listScore = mappingScore(data.scores);
        });
    };
    ;
    ScorePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-score-page',
            template: __webpack_require__(/*! ./score-page.component.html */ "./src/app/routes/score-page/score-page.component.html"),
            providers: [_services_game_game_service_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]],
            styles: [__webpack_require__(/*! ./score-page.css */ "./src/app/routes/score-page/score-page.css")]
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_game_game_service_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], ScorePageComponent);
    return ScorePageComponent;
}());

//


/***/ }),

/***/ "./src/app/routes/score-page/score-page.css":
/*!**************************************************!*\
  !*** ./src/app/routes/score-page/score-page.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.score-page ul {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n}\n\n.score-page li {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px solid rgb(233, 233, 233);\n  padding: 1rem 1.5rem;\n}\n\n.score-page li .points {\n  font-weight: bold;\n  color: grey;\n  font-size: 18px;\n}\n\n.score-page li .block-right {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.score-page li .block-right .separator {\n  display: block;\n  margin: 0 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQiw0Q0FBNEM7RUFDNUMscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvc2NvcmUtcGFnZS9zY29yZS1wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNjb3JlLXBhZ2UgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc2NvcmUtcGFnZSBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG59XG5cbi5zY29yZS1wYWdlIGxpIC5wb2ludHMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5zY29yZS1wYWdlIGxpIC5ibG9jay1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zY29yZS1wYWdlIGxpIC5ibG9jay1yaWdodCAuc2VwYXJhdG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCA4cHg7XG59XG4iXX0= */"

/***/ })

}]);
//# sourceMappingURL=routes-score-page-module.js.map