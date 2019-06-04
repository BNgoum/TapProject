(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@font-face {\n  font-family: \"Coolvetica\";\n  src: url('coolvetica.ttf') format(\"truetype\");\n}\n\n@font-face {\n    font-family: \"CutTheCrap\";\n    src: url('CutTheCrap.ttf') format(\"truetype\");\n  }\n\n/*\nReset\n*/\n\n:root{\n        --max-width: 48rem;\n        --max-marge: 6rem;\n        --med-marge: 3rem;\n        --min-marge: 1.5rem;\n        --dark-color: black;\n        --med-color: grey;\n        --light-color: white;\n        --error-color: red;\n        --success-color: green;\n    }\n\n*{\n        margin: 0;\n        padding: 0;\n        -ms-box-sizing: border-box;\n        -o-box-sizing: border-box;\n        box-sizing: border-box;\n\n        font-family: 'Coolvetica', 'Arial', sans-serif;\n    }\n\napp-home-page, app-form-response{\n        display: block;\n    }\n\nhtml{\n        font-size: 16px;\n        font-family: sans-serif;\n        font-weight: normal;\n        line-height: 1.5;\n        padding: 1rem;\n    }\n\nbody{\n        margin: auto;\n        max-width: 48rem;\n    }\n\na{\n        text-decoration: none;\n        color: inherit;\n    }\n\nform{\n        margin-bottom: var(--max-marge);\n    }\n\ninput:not([type=\"checkbox\"]), input:not([type=\"radio\"]), label, [type=\"submit\"]{\n        display: block;\n        width: 100%;\n        background: transparent;\n    }\n\nlabel{\n        font-size: 1.1rem;\n        font-weight: 900;\n        text-transform: uppercase;\n    }\n\ninput{\n        font-size: 1rem;\n        padding: 1rem;\n        border: none;\n        border-bottom: .1rem solid var(--med-color);\n        margin-bottom: var(--med-marge);\n    }\n\nbutton{\n        border: none;\n        background: transparent;\n    }\n\n[type=\"submit\"]{\n        text-transform: uppercase;\n        font-weight: 900;\n        padding: 1rem;\n        border: .1rem solid var(--med-color);\n        font-size: .875rem;\n        border-radius: 25px;\n        max-width: 15rem;\n        margin: auto;\n\n        transition: all .3s;\n        -webkit-transition: all .3s;\n        -moz-transition: all .3s;\n        -ms-transition: all .3s;\n        -o-transition: all .3s;\n    }\n\n[type=\"submit\"][disabled]{\n        opacity: .5;\n    }\n\n[type=\"submit\"]:not([disabled]):hover{\n        color: var(--light-color);\n        background-color: var(--dark-color);\n        border-color: var(--dark-color);\n    }\n\n/**/\n\n/*\nCommon\n*/\n\n.maxWidth{\n        max-width: var(--max-width);\n        margin-left: auto;\n        margin-right: auto;\n        padding-left: var(--med-marge);\n        padding-right: var(--med-marge);\n    }\n\n.flexBox{\n        display: -moz-flex;\n        display: -ms-flex;\n        display: -o-flex;\n        display: flex;\n    }\n\n.spaceBetween{\n        -moz-justify-content: space-between;\n        -ms-justify-content: space-between;\n        -o-justify-content: space-between;\n        justify-content: space-between;\n    }\n\n.columnDirection {\n        -moz-flex-direction: column;\n        flex-direction: column;\n    }\n\n/**/\n\n* {\n  box-sizing: border-box;\n}\n\n/*\nComponents\n*/\n\n/* app-home-page */\n\n/* app-home-page article{\n        width: calc(50% - var(--med-marge));\n    } */\n\n/* app-form-response */\n\napp-form-response{\n        border: .1rem solid var(--med-color);\n        padding: var(--min-marge);\n        position: relative;\n    }\n\napp-form-response.error{\n        border-color: var(--error-color);\n    }\n\napp-form-response.success{\n        border-color: var(--success-color);\n    }\n\napp-form-response button{\n        font-size: 2rem;\n        padding: .5rem;\n        position: absolute;\n        top: 0;\n        right: 0;\n    }\n\n/**/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLDhDQUE2RDtDQUM5RDs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQiw4Q0FBNkQ7R0FDOUQ7O0FBRUg7O0VBRUU7O0FBQ0U7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLHVCQUF1QjtLQUMxQjs7QUFFRDtRQUNJLFVBQVU7UUFDVixXQUFXO1FBSVgsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQix1QkFBdUI7O1FBRXZCLCtDQUErQztLQUNsRDs7QUFFRDtRQUNJLGVBQWU7S0FDbEI7O0FBRUQ7UUFDSSxnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsY0FBYztLQUNqQjs7QUFFRDtRQUNJLGFBQWE7UUFDYixpQkFBaUI7S0FDcEI7O0FBRUQ7UUFDSSxzQkFBc0I7UUFDdEIsZUFBZTtLQUNsQjs7QUFFRDtRQUNJLGdDQUFnQztLQUNuQzs7QUFFRDtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osd0JBQXdCO0tBQzNCOztBQUVEO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQiwwQkFBMEI7S0FDN0I7O0FBRUQ7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGFBQWE7UUFDYiw0Q0FBNEM7UUFDNUMsZ0NBQWdDO0tBQ25DOztBQUVEO1FBQ0ksYUFBYTtRQUNiLHdCQUF3QjtLQUMzQjs7QUFFRDtRQUNJLDBCQUEwQjtRQUMxQixpQkFBaUI7UUFDakIsY0FBYztRQUNkLHFDQUFxQztRQUNyQyxtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixhQUFhOztRQUViLG9CQUFvQjtRQUNwQiw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4Qix1QkFBdUI7S0FDMUI7O0FBRUQ7UUFDSSxZQUFZO0tBQ2Y7O0FBRUQ7UUFDSSwwQkFBMEI7UUFDMUIsb0NBQW9DO1FBQ3BDLGdDQUFnQztLQUNuQzs7QUFDTCxJQUFJOztBQUVKOztFQUVFOztBQUNFO1FBQ0ksNEJBQTRCO1FBQzVCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsK0JBQStCO1FBQy9CLGdDQUFnQztLQUNuQzs7QUFFRDtRQUVJLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGNBQWM7S0FDakI7O0FBRUQ7UUFFSSxvQ0FBb0M7UUFDcEMsbUNBQW1DO1FBQ25DLGtDQUFrQztRQUNsQywrQkFBK0I7S0FDbEM7O0FBRUQ7UUFDSSw0QkFBNEI7UUFFNUIsdUJBQXVCO0tBQzFCOztBQUNMLElBQUk7O0FBR0o7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBR0Q7O0VBRUU7O0FBQ0UsbUJBQW1COztBQUNuQjs7UUFFSTs7QUFFSix1QkFBdUI7O0FBQ3ZCO1FBQ0kscUNBQXFDO1FBQ3JDLDBCQUEwQjtRQUMxQixtQkFBbUI7S0FDdEI7O0FBRUQ7UUFDSSxpQ0FBaUM7S0FDcEM7O0FBRUQ7UUFDSSxtQ0FBbUM7S0FDdEM7O0FBRUQ7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixPQUFPO1FBQ1AsU0FBUztLQUNaOztBQUNMLElBQUkiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYVwiO1xuICBzcmM6IHVybChcIi4vYXNzZXRzL2ZvbnRzL2Nvb2x2ZXRpY2EudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJDdXRUaGVDcmFwXCI7XG4gICAgc3JjOiB1cmwoXCIuL2Fzc2V0cy9mb250cy9DdXRUaGVDcmFwLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgfVxuXG4vKlxuUmVzZXRcbiovXG4gICAgOnJvb3R7XG4gICAgICAgIC0tbWF4LXdpZHRoOiA0OHJlbTtcbiAgICAgICAgLS1tYXgtbWFyZ2U6IDZyZW07XG4gICAgICAgIC0tbWVkLW1hcmdlOiAzcmVtO1xuICAgICAgICAtLW1pbi1tYXJnZTogMS41cmVtO1xuICAgICAgICAtLWRhcmstY29sb3I6IGJsYWNrO1xuICAgICAgICAtLW1lZC1jb2xvcjogZ3JleTtcbiAgICAgICAgLS1saWdodC1jb2xvcjogd2hpdGU7XG4gICAgICAgIC0tZXJyb3ItY29sb3I6IHJlZDtcbiAgICAgICAgLS1zdWNjZXNzLWNvbG9yOiBncmVlbjtcbiAgICB9XG5cbiAgICAqe1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgfVxuXG4gICAgYXBwLWhvbWUtcGFnZSwgYXBwLWZvcm0tcmVzcG9uc2V7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGh0bWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuXG4gICAgYm9keXtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDQ4cmVtO1xuICAgIH1cblxuICAgIGF7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgZm9ybXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWF4LW1hcmdlKTtcbiAgICB9XG5cbiAgICBpbnB1dDpub3QoW3R5cGU9XCJjaGVja2JveFwiXSksIGlucHV0Om5vdChbdHlwZT1cInJhZGlvXCJdKSwgbGFiZWwsIFt0eXBlPVwic3VibWl0XCJde1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGxhYmVse1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICBpbnB1dHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IC4xcmVtIHNvbGlkIHZhcigtLW1lZC1jb2xvcik7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLW1lZC1tYXJnZSk7XG4gICAgfVxuXG4gICAgYnV0dG9ue1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIFt0eXBlPVwic3VibWl0XCJde1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHZhcigtLW1lZC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICB9XG5cbiAgICBbdHlwZT1cInN1Ym1pdFwiXVtkaXNhYmxlZF17XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgIH1cblxuICAgIFt0eXBlPVwic3VibWl0XCJdOm5vdChbZGlzYWJsZWRdKTpob3ZlcntcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG4gICAgfVxuLyoqL1xuXG4vKlxuQ29tbW9uXG4qL1xuICAgIC5tYXhXaWR0aHtcbiAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLW1lZC1tYXJnZSk7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW1lZC1tYXJnZSk7XG4gICAgfVxuXG4gICAgLmZsZXhCb3h7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW8tZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuc3BhY2VCZXR3ZWVue1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC1vLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5jb2x1bW5EaXJlY3Rpb24ge1xuICAgICAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4vKiovXG5cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuLypcbkNvbXBvbmVudHNcbiovXG4gICAgLyogYXBwLWhvbWUtcGFnZSAqL1xuICAgIC8qIGFwcC1ob21lLXBhZ2UgYXJ0aWNsZXtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gdmFyKC0tbWVkLW1hcmdlKSk7XG4gICAgfSAqL1xuXG4gICAgLyogYXBwLWZvcm0tcmVzcG9uc2UgKi9cbiAgICBhcHAtZm9ybS1yZXNwb25zZXtcbiAgICAgICAgYm9yZGVyOiAuMXJlbSBzb2xpZCB2YXIoLS1tZWQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1taW4tbWFyZ2UpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgYXBwLWZvcm0tcmVzcG9uc2UuZXJyb3J7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xuICAgIH1cblxuICAgIGFwcC1mb3JtLXJlc3BvbnNlLnN1Y2Nlc3N7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XG4gICAgfVxuXG4gICAgYXBwLWZvcm0tcmVzcG9uc2UgYnV0dG9ue1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuLyoqL1xuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bngoum/Documents/ECV DIGITAL/M2/Vince/StackMean/ANGclient/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map