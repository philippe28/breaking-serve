(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseURL = 'https://breakingbadapi.com/api/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    ApiService.prototype.getCharacters = function () {
        return this.http.get(this.baseURL + "characters/")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getHeroes', [])));
    };
    ApiService.prototype.getCharactersSearch = function (name) {
        // /api/characters?name=Walter+White
        var url = this.baseURL + "characters?name=" + name;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getHero id=" + name)));
    };
    // /api/episodes
    ApiService.prototype.getepisodes = function () {
        return this.http.get(this.baseURL + "episodes/")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getHeroes', [])));
    };
    ApiService.prototype.postMensagem = function (form) {
        return this.http.post('https://frontendtestesamba.free.beeceptor.com/breaking-bad/suggestions', form, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addHero')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _episodes_episodes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./episodes/episodes.component */ "./src/app/episodes/episodes.component.ts");
/* harmony import */ var _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suggestion/suggestion.component */ "./src/app/suggestion/suggestion.component.ts");






// const routes: Routes = [];
var routes = [
    { path: '', redirectTo: '/personagens', pathMatch: 'full' },
    { path: 'personagens', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'episodios', component: _episodes_episodes_component__WEBPACK_IMPORTED_MODULE_4__["EpisodesComponent"] },
    { path: 'sugestao', component: _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_5__["SuggestionComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BoaWxpcHBlL2VzdHVkby9hbmd1bGFyL3NpdGUvc2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYm9keXtcbiAgICBtYXJnaW46IDBweDtcblxufSJdfQ== */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'site';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _filter_characters_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-characters.pipe */ "./src/app/filter-characters.pipe.ts");
/* harmony import */ var _episodes_episodes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./episodes/episodes.component */ "./src/app/episodes/episodes.component.ts");
/* harmony import */ var _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./suggestion/suggestion.component */ "./src/app/suggestion/suggestion.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _filter_characters_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterCharactersPipe"],
                _episodes_episodes_component__WEBPACK_IMPORTED_MODULE_9__["EpisodesComponent"],
                _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_10__["SuggestionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/episodes/episodes.component.html":
/*!**************************************************!*\
  !*** ./src/app/episodes/episodes.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-episodes\">\n  <div class=\"header\">\n    <div>\n      <img src=\"./assets/img/breaking-bad-vector-logo.svg\" alt=\"\">\n    </div>\n\n    <div class=\"tabs\">\n      <div>\n        <h4>\n            <a href=\"/personagens\" >Personagens</a> \n          </h4>\n      </div>\n      <div>\n        <h4>\n            <a href=\"/sugestao\" >Sugestão</a> \n          </h4>\n      </div>\n    </div>\n\n\n  </div>\n\n\n\n\n  <div class=\"card-list\">\n\n    <!-- <div class=\"card\" *ngFor=\"let character of characters | async as characters; let i = index;\" [ngStyle]=\"{'background-image':'url(' + character.img + ')'}\"> -->\n\n\n    <div class=\"card\" *ngFor=\"let episode of episodes \">\n      <div class=\"description\">\n        <div class=\"title\">\n          <h2>{{episode.title}}</h2>\n        </div>\n        <div class=\"sub-title\">\n          <div><h4> Temporada : {{episode.season}}</h4></div>\n          <div><h5>Episodio :{{episode.episode}}</h5></div>\n          </div>\n \n      </div>\n\n      <div class=\"description\">\n          <div class=\"title\">\n            <h2>Data de Estreia:</h2>\n            <h2 class=\"date\">{{episode.air_date}}</h2>\n          </div>\n\n   \n        </div>\n        <div class=\"characters\">\n            <div class=\"title\" *ngFor=\"let item of episode.characters\">\n              \n              <p> <a href=\"/personagens?character={{item}}\" >{{item}}</a> </p>\n            </div>\n  \n     \n          </div>\n\n\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/episodes/episodes.component.scss":
/*!**************************************************!*\
  !*** ./src/app/episodes/episodes.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-episodes {\n  background: #060707;\n  color: white;\n  padding: 0px 10%; }\n  .app-episodes a {\n    color: white;\n    text-decoration: none;\n    /* no underline */ }\n  .app-episodes .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 9; }\n  .app-episodes .header img {\n      max-width: 100px; }\n  .app-episodes .header .tabs {\n      display: flex; }\n  .app-episodes .header .tabs div {\n        margin: 0px 10px; }\n  .app-episodes .header input {\n      background: transparent;\n      border: none;\n      border-bottom: solid #a0a0a0 1px;\n      color: white;\n      outline: none; }\n  .app-episodes .filter {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .app-episodes .filter .filter-buttons {\n      display: flex;\n      justify-content: space-around; }\n  .app-episodes .filter .filter-buttons div {\n        padding: 4px;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  .app-episodes .filter .filter-buttons div button {\n          background: transparent;\n          color: white;\n          border-style: solid;\n          height: 35px;\n          width: 80px;\n          outline: none;\n          color: white;\n          border-color: white; }\n  .app-episodes .filter .filter-buttons div button:hover {\n            transform: scale(1.05);\n            cursor: pointer;\n            color: black;\n            background-color: white; }\n  .app-episodes .filter .filter-buttons div button.alive {\n            border-color: green;\n            color: green; }\n  .app-episodes .filter .filter-buttons div button.alive:hover {\n              transform: scale(1.05);\n              cursor: pointer;\n              border-color: green;\n              color: white;\n              background-color: green; }\n  .app-episodes .filter .filter-buttons div button.deceased {\n            color: #a9c722;\n            border-color: #a9c722; }\n  .app-episodes .filter .filter-buttons div button.deceased:hover {\n              transform: scale(1.05);\n              cursor: pointer;\n              border-color: #a9c722;\n              color: white;\n              background-color: #a9c722; }\n  .app-episodes .filter .filter-buttons div button.filter-button-all {\n            color: white;\n            border-color: white; }\n  .app-episodes .filter .filter-buttons div button.filter-button-all:hover {\n              transform: scale(1.05);\n              cursor: pointer;\n              color: black;\n              background-color: white; }\n  .app-episodes .card-list {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    align-content: space-between; }\n  .app-episodes .card-list .card {\n      width: 100%;\n      height: 150px;\n      background: #060707;\n      border-bottom: solid 1px #cecbcb;\n      background-repeat: no-repeat;\n      background-size: cover;\n      display: flex;\n      justify-content: inherit;\n      padding: 15px;\n      align-items: baseline; }\n  .app-episodes .card-list .card:hover {\n        transform: scale(1.015);\n        cursor: pointer;\n        border-top: solid 1px #cecbcb; }\n  .app-episodes .card-list .card .description {\n        width: 25%; }\n  .app-episodes .card-list .card .characters {\n        display: flex;\n        /* max-width: 30%; */\n        flex-direction: column;\n        flex-wrap: wrap;\n        justify-content: end;\n        height: 70%;\n        width: 50%; }\n  .app-episodes .card-list .card .characters .title p {\n          margin: 0.5em; }\n  .app-episodes .card-list .card:first-child:hover {\n      transform: scale(1.015);\n      cursor: pointer;\n      border-top: none; }\n  @media screen and (max-width: 600px) {\n  .app-episodes {\n    padding: 0px 2%; }\n    .app-episodes .header {\n      position: fixed;\n      /* margin-bottom: 50px; */\n      top: 0;\n      background: #060707;\n      width: 100%; }\n    .app-episodes .card-list {\n      margin-top: 100px; }\n      .app-episodes .card-list .description {\n        width: 30% !important; }\n    .app-episodes h2 {\n      font-size: 1em;\n      margin: 0px; }\n    .app-episodes h4 {\n      font-size: 0.7em;\n      margin: 0; }\n    .app-episodes h5 {\n      font-size: 0.7em;\n      margin: 0; }\n    .app-episodes p {\n      margin: 0.1em !important; }\n    .app-episodes .characters {\n      height: auto !important;\n      width: auto !important; }\n    .app-episodes .date {\n      font-size: 0.7em !important; }\n    .app-episodes .card {\n      height: auto !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BoaWxpcHBlL2VzdHVkby9hbmd1bGFyL3NpdGUvc2l0ZS9zcmMvYXBwL2VwaXNvZGVzL2VwaXNvZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQXdCO0VBQ3hCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUhwQjtJQVNNLFlBQVk7SUFDWixxQkFBcUI7SUFBRSxpQkFBQSxFQUFrQjtFQVYvQztJQWFJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBRW5CLFVBQVUsRUFBQTtFQWpCZDtNQW9CUSxnQkFBZ0IsRUFBQTtFQXBCeEI7TUF1QkksYUFBYSxFQUFBO0VBdkJqQjtRQXlCUSxnQkFBZ0IsRUFBQTtFQXpCeEI7TUE2QlEsdUJBQXVCO01BQ3ZCLFlBQVk7TUFDWixnQ0FBMkM7TUFDM0MsWUFBWTtNQUNaLGFBQWEsRUFBQTtFQWpDckI7SUF5Q0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUIsRUFBQTtFQTNDdkI7TUE4Q1EsYUFBYTtNQUNiLDZCQUE2QixFQUFBO0VBL0NyQztRQWlEWSxZQUFXO1FBQ1gsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUIsRUFBQTtFQXBEL0I7VUFzRGdCLHVCQUF1QjtVQUN2QixZQUFZO1VBRVosbUJBQW1CO1VBQ25CLFlBQVk7VUFDWixXQUFXO1VBQ1gsYUFBYTtVQUViLFlBQVk7VUFDWixtQkFBbUIsRUFBQTtFQS9EbkM7WUFrRW9CLHNCQUFzQjtZQUN0QixlQUFlO1lBRWYsWUFBWTtZQUNaLHVCQUF1QixFQUFBO0VBdEUzQztZQTBFb0IsbUJBQW1CO1lBQ25CLFlBQVksRUFBQTtFQTNFaEM7Y0ErRXdCLHNCQUFzQjtjQUN0QixlQUFlO2NBQ2YsbUJBQW1CO2NBQ25CLFlBQVk7Y0FDWix1QkFDSixFQUFBO0VBcEZwQjtZQXdGb0IsY0FBd0I7WUFDeEIscUJBQStCLEVBQUE7RUF6Rm5EO2NBNEZ3QixzQkFBc0I7Y0FDdEIsZUFBZTtjQUNmLHFCQUErQjtjQUMvQixZQUFZO2NBQ1oseUJBQW1DLEVBQUE7RUFoRzNEO1lBcUdvQixZQUFZO1lBQ1osbUJBQW1CLEVBQUE7RUF0R3ZDO2NBeUd3QixzQkFBc0I7Y0FDdEIsZUFBZTtjQUVmLFlBQVk7Y0FDWix1QkFBdUIsRUFBQTtFQTdHL0M7SUF5SEksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDRCQUE0QixFQUFBO0VBN0hoQztNQStIUSxXQUFXO01BQ1gsYUFBYTtNQUViLG1CQUFtQjtNQUVuQixnQ0FBZ0M7TUFDaEMsNEJBQTRCO01BQzVCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2Isd0JBQXdCO01BQ3hCLGFBQWE7TUFDYixxQkFBcUIsRUFBQTtFQTFJN0I7UUE2SVksdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZiw2QkFBNkIsRUFBQTtFQS9JekM7UUFtSlEsVUFBVSxFQUFBO0VBbkpsQjtRQXdKSSxhQUFhO1FBQ2Isb0JBQUE7UUFDQSxzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixXQUFXO1FBQ1gsVUFBVSxFQUFBO0VBOUpkO1VBaUtZLGFBQWEsRUFBQTtFQWpLekI7TUE4S1EsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQVl4QjtFQUNJO0lBa0JJLGVBQWUsRUFBQTtJQWxCbkI7TUFHUSxlQUFlO01BQ2YseUJBQUE7TUFDQSxNQUFNO01BQ04sbUJBQW1CO01BQ25CLFdBQVcsRUFBQTtJQVBuQjtNQVdRLGlCQUFpQixFQUFBO01BWHpCO1FBYVEscUJBQW9CLEVBQUE7SUFiNUI7TUFxQlEsY0FBYztNQUNkLFdBQVcsRUFBQTtJQXRCbkI7TUEwQlEsZ0JBQWdCO01BQ2hCLFNBQVMsRUFBQTtJQTNCakI7TUErQlEsZ0JBQWdCO01BQ2hCLFNBQVMsRUFBQTtJQWhDakI7TUFvQ1Esd0JBQXdCLEVBQUE7SUFwQ2hDO01Bd0NRLHVCQUFzQjtNQUN0QixzQkFBcUIsRUFBQTtJQXpDN0I7TUE0Q1EsMkJBQTBCLEVBQUE7SUE1Q2xDO01BK0NRLHVCQUFzQixFQUFBLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZXBpc29kZXMvZXBpc29kZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWVwaXNvZGVze1xuICAgIGJhY2tncm91bmQ6IHJnYig2LCA3LCA3KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDEwJTtcbiAgICAvLyBoZWlnaHQ6IDEwMHZoO1xuXG4gICBcblxuICAgIGEge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBubyB1bmRlcmxpbmUgKi9cbiAgICB9XG4uaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgei1pbmRleDogOTtcblxuICAgIGltZ3tcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICB9XG4udGFic3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpdntcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICB9XG59XG4gICAgaW5wdXR7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHJnYigxNjAsIDE2MCwgMTYwKSAxcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgJjpmb2N1c3tcbiAgICAgICAgICAgIC8vYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZmlsdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZmlsdGVyLWJ1dHRvbnN7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBwYWRkaW5nOjRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1jb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5hbGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuZGVjZWFzZWR7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTY5LCAxOTksIDM0KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMTY5LCAxOTksIDM0KTtcblxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDE2OSwgMTk5LCAzNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY5LCAxOTksIDM0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuZmlsdGVyLWJ1dHRvbi1hbGx7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXJkLWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAuY2FyZHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNjA3MDc7XG4gICAgICAgIC8vIGJvcmRlcjogc29saWQgMnB4ICMzMzY0Mjg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2VjYmNiO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQ7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblxuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxNSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2NlY2JjYjtcbiAgICAgICAgfVxuXG4uZGVzY3JpcHRpb257XG4gICAgICAgIHdpZHRoOiAyNSU7XG59XG5cblxuLmNoYXJhY3RlcnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBtYXgtd2lkdGg6IDMwJTsgKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIC50aXRsZXtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDAuNWVtO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG4gICAgXG59XG5cbi5jYXJkOmZpcnN0LWNoaWxke1xuICAgICY6aG92ZXJ7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMTUpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgfVxufVxuXG59XG5cblxuXG5cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5hcHAtZXBpc29kZXMge1xuXG4gICAgICAgIC5oZWFkZXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiA1MHB4OyAqL1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA2MDcwNztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtbGlzdHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xuICAgICAgICAgICAgd2lkdGg6IDMwJSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHBhZGRpbmc6IDBweCAyJTtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg1IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMC4xZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFyYWN0ZXJze1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuZGF0ZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW0haW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJke1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/episodes/episodes.component.ts":
/*!************************************************!*\
  !*** ./src/app/episodes/episodes.component.ts ***!
  \************************************************/
/*! exports provided: EpisodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesComponent", function() { return EpisodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EpisodesComponent = /** @class */ (function () {
    function EpisodesComponent(apiService, route) {
        this.apiService = apiService;
        this.route = route;
    }
    EpisodesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getepisodes().
            subscribe(function (episodes) {
            _this.episodes = episodes;
            //  this.charactersMap(characters)
        });
    };
    EpisodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-episodes',
            template: __webpack_require__(/*! ./episodes.component.html */ "./src/app/episodes/episodes.component.html"),
            styles: [__webpack_require__(/*! ./episodes.component.scss */ "./src/app/episodes/episodes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EpisodesComponent);
    return EpisodesComponent;
}());



/***/ }),

/***/ "./src/app/filter-characters.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/filter-characters.pipe.ts ***!
  \*******************************************/
/*! exports provided: FilterCharactersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCharactersPipe", function() { return FilterCharactersPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterCharactersPipe = /** @class */ (function () {
    function FilterCharactersPipe() {
    }
    FilterCharactersPipe.prototype.transform = function (items, field, value) {
        console.log(items);
        console.log(field);
        console.log(value);
        if ((value.button == "" && value.search == '') || !value || value.length == 0)
            return items;
        return items.filter(function (item) {
            return (item.statusClassCss == value.button || value.button == "") && item.name.toLowerCase().includes(value.search.toLowerCase());
        });
        return items;
    };
    FilterCharactersPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterCharacters'
        })
    ], FilterCharactersPipe);
    return FilterCharactersPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-home\">\n  <div class=\"header\">\n    <div>\n      <img src=\"./assets/img/breaking-bad-vector-logo.svg\" alt=\"\">\n    </div>\n    <div class=\"menu\">\n    <div class=\"tabs\">\n        <div>\n            <h4>\n                <a href=\"/sugestao\" >Sugestão</a> \n              </h4>\n          </div>\n          <div>\n            <h4>\n                <a href=\"/episodios\" >Episodios</a> \n              </h4>\n          </div>\n    </div>\n\n    <div>\n      <input type=\"text\" [(ngModel)]=\"filterStatus.search\" placeholder=\"Pesquise os personagens\" (input)=\"onSearch($event.target.value)\">\n    </div>\n  </div>\n  </div>\n  <div class=\"filter\">\n\n    <div>\n      <h2>Personagens</h2>\n    </div>\n\n    <div class=\"filter-buttons\">\n      <div><span>Filtre por:</span></div>\n      <div *ngFor=\"let filterButton of filterButtons\">\n        <button [ngClass]=\"filterButton.statusClassCss\" (click)=\"filterClick(filterButton.statusClassCss)\">\n          <span>{{filterButton.title}}</span>\n        </button>\n      </div>\n    </div>\n\n\n\n  </div>\n\n  <h2 *ngIf='filterStatus.search'>Você pesquisou por \"{{filterStatus.search}}\"</h2>\n\n  <div class=\"card-list\">\n\n    <!-- <div class=\"card\" *ngFor=\"let character of characters | async as characters; let i = index;\" [ngStyle]=\"{'background-image':'url(' + character.img + ')'}\"> -->\n\n\n    <div class=\"card\" *ngFor=\"let character of characters | filterCharacters:characters:filterStatus; let i = index;\"\n      [ngStyle]=\"{'background-image':'url(' + character.img + ')'}\">\n\n\n      <div class=\"card-information\">\n        <div class=\"card-header\">\n          <div class=\"card-tag\" [ngClass]=\"character.statusClassCss\">\n            <div> <span>{{character.statusTranslations}}</span></div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"card-name\">\n            <span> {{character.name}}</span>\n          </div>\n          <div class=\"card-birth\">\n            <span> {{character.birthday}}</span>\n          </div>\n\n          <div class=\"card-resume\">\n\n            <span *ngFor=\"let item of character.occupation;let j = index;\">\n\n              {{j === 0 ? item : ', '+item}}\n            </span>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-home {\n  background: #060707;\n  color: white;\n  padding: 0px 10%; }\n  .app-home a {\n    color: white;\n    text-decoration: none;\n    /* no underline */ }\n  .app-home .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .app-home .header img {\n      max-width: 100px; }\n  .app-home .header .tabs {\n      display: flex; }\n  .app-home .header .tabs div {\n        margin: 0px 10px; }\n  .app-home .header input {\n      background: transparent;\n      border: none;\n      border-bottom: solid #a0a0a0 1px;\n      color: white;\n      outline: none; }\n  .app-home .filter {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .app-home .filter .filter-buttons {\n      display: flex;\n      justify-content: space-around; }\n  .app-home .filter .filter-buttons div {\n        padding: 4px;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  .app-home .filter .filter-buttons div button {\n          background: transparent;\n          color: white;\n          border-style: solid;\n          height: 35px;\n          width: 80px;\n          outline: none;\n          color: white;\n          border-color: white; }\n  .app-home .filter .filter-buttons div button:hover {\n            transform: scale(1.05);\n            cursor: pointer;\n            color: black;\n            background-color: white; }\n  .app-home .filter .filter-buttons div button.alive {\n            border-color: green;\n            color: green; }\n  .app-home .filter .filter-buttons div button.alive:hover {\n              transform: scale(1.05);\n              cursor: pointer;\n              border-color: green;\n              color: white;\n              background-color: green; }\n  .app-home .filter .filter-buttons div button.deceased {\n            color: #a9c722;\n            border-color: #a9c722; }\n  .app-home .filter .filter-buttons div button.deceased:hover {\n              transform: scale(1.05);\n              cursor: pointer;\n              border-color: #a9c722;\n              color: white;\n              background-color: #a9c722; }\n  .app-home .filter .filter-buttons div button.filter-button-all {\n            color: white;\n            border-color: white; }\n  .app-home .filter .filter-buttons div button.filter-button-all:hover {\n              transform: scale(1.05);\n              cursor: pointer;\n              color: black;\n              background-color: white; }\n  .app-home .card-list {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    align-content: space-between; }\n  .app-home .card-list .card {\n      width: 300px;\n      height: 400px;\n      margin-bottom: 50px;\n      background: #cccaca;\n      background-repeat: no-repeat;\n      background-size: cover; }\n  .app-home .card-list .card:hover {\n        transform: scale(1.05);\n        cursor: pointer; }\n  .app-home .card-list .card .card-information {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        /* align-content: flex-end; */\n        flex-direction: column;\n        justify-content: space-between; }\n  .app-home .card-list .card .card-information .card-footer {\n          padding: 10px 10px;\n          background: rgba(31, 28, 28, 0.54);\n          height: 80px;\n          display: flex;\n          flex-direction: column;\n          justify-content: space-evenly; }\n  .app-home .card-list .card .card-tag {\n        width: 95px;\n        height: 35px;\n        float: right;\n        margin-top: 2%;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  .app-home .card-list .card .card-tag.alive {\n          background: green; }\n  .app-home .card-list .card .card-tag.deceased {\n          background: red; }\n  @media screen and (max-width: 600px) {\n  .app-home .header {\n    position: fixed;\n    /* margin-bottom: 50px; */\n    top: 0;\n    background: #060707;\n    width: 100%;\n    z-index: 9; }\n  .app-home .filter {\n    margin-top: 100px;\n    flex-direction: column; }\n    .app-home .filter .filter-buttons {\n      margin-bottom: 20px; }\n    .app-home .filter .filter-buttons > div > span {\n      display: none; }\n  .app-home .card:hover {\n    transform: scale(1) !important;\n    cursor: none; }\n  .app-home .tabs div {\n    margin: 0px 10px 0px 0px !important; }\n  .app-home .menu {\n    display: flex;\n    flex-direction: column;\n    width: 70%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BoaWxpcHBlL2VzdHVkby9hbmd1bGFyL3NpdGUvc2l0ZS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUF3QjtFQUN4QixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFIcEI7SUFNUSxZQUFZO0lBQ1oscUJBQXFCO0lBQUUsaUJBQUEsRUFBa0I7RUFQakQ7SUFVSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQixFQUFBO0VBWnZCO01BZ0JRLGdCQUFnQixFQUFBO0VBaEJ4QjtNQW1CSSxhQUFhLEVBQUE7RUFuQmpCO1FBcUJRLGdCQUFnQixFQUFBO0VBckJ4QjtNQXlCUSx1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLGdDQUEyQztNQUMzQyxZQUFZO01BQ1osYUFBYSxFQUFBO0VBN0JyQjtJQXFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQixFQUFBO0VBdkN2QjtNQTBDUSxhQUFhO01BQ2IsNkJBQTZCLEVBQUE7RUEzQ3JDO1FBNkNZLFlBQVc7UUFDWCxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQixFQUFBO0VBaEQvQjtVQWtEZ0IsdUJBQXVCO1VBQ3ZCLFlBQVk7VUFFWixtQkFBbUI7VUFDbkIsWUFBWTtVQUNaLFdBQVc7VUFDWCxhQUFhO1VBRWIsWUFBWTtVQUNaLG1CQUFtQixFQUFBO0VBM0RuQztZQThEb0Isc0JBQXNCO1lBQ3RCLGVBQWU7WUFFZixZQUFZO1lBQ1osdUJBQXVCLEVBQUE7RUFsRTNDO1lBc0VvQixtQkFBbUI7WUFDbkIsWUFBWSxFQUFBO0VBdkVoQztjQTJFd0Isc0JBQXNCO2NBQ3RCLGVBQWU7Y0FDZixtQkFBbUI7Y0FDbkIsWUFBWTtjQUNaLHVCQUNKLEVBQUE7RUFoRnBCO1lBb0ZvQixjQUF3QjtZQUN4QixxQkFBK0IsRUFBQTtFQXJGbkQ7Y0F3RndCLHNCQUFzQjtjQUN0QixlQUFlO2NBQ2YscUJBQStCO2NBQy9CLFlBQVk7Y0FDWix5QkFBbUMsRUFBQTtFQTVGM0Q7WUFpR29CLFlBQVk7WUFDWixtQkFBbUIsRUFBQTtFQWxHdkM7Y0FxR3dCLHNCQUFzQjtjQUN0QixlQUFlO2NBRWYsWUFBWTtjQUNaLHVCQUF1QixFQUFBO0VBekcvQztJQXFISSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNEJBQTRCLEVBQUE7RUF6SGhDO01BMkhRLFlBQVk7TUFDWixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLG1CQUE2QjtNQUc3Qiw0QkFBNEI7TUFDNUIsc0JBQXNCLEVBQUE7RUFsSTlCO1FBcUlZLHNCQUFzQjtRQUN0QixlQUFlLEVBQUE7RUF0STNCO1FBNklZLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLDZCQUFBO1FBQ0Esc0JBQXNCO1FBQ3RCLDhCQUE4QixFQUFBO0VBbEoxQztVQW9KSSxrQkFBa0I7VUFDbEIsa0NBQWtDO1VBQ2xDLFlBQVk7VUFDWixhQUFhO1VBQ2Isc0JBQXNCO1VBQ3RCLDZCQUE2QixFQUFBO0VBekpqQztRQStKWSxXQUFXO1FBQ1gsWUFBWTtRQUdaLFlBQVk7UUFDWixjQUFjO1FBQ2QsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUIsRUFBQTtFQXZLL0I7VUEwS2dCLGlCQUFpQixFQUFBO0VBMUtqQztVQThLZ0IsZUFBZSxFQUFBO0VBVy9CO0VBQ0k7SUFHUSxlQUFlO0lBQ2YseUJBQUE7SUFDQSxNQUFNO0lBQ04sbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUFSbEI7SUFXUSxpQkFBaUI7SUFDakIsc0JBQXNCLEVBQUE7SUFaOUI7TUFjWSxtQkFBbUIsRUFBQTtJQWQvQjtNQWtCWSxhQUFZLEVBQUE7RUFsQnhCO0lBdUJRLDhCQUE2QjtJQUM3QixZQUFZLEVBQUE7RUF4QnBCO0lBNEJRLG1DQUFrQyxFQUFBO0VBNUIxQztJQStCUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVUsRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1ob21le1xuICAgIGJhY2tncm91bmQ6IHJnYig2LCA3LCA3KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDEwJTtcbiAgICAvLyBoZWlnaHQ6IDEwMHZoO1xuICAgIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogbm8gdW5kZXJsaW5lICovXG4gICAgICB9XG4uaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG5cbiAgICBpbWd7XG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgfVxuLnRhYnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXZ7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgfVxufVxuICAgIGlucHV0e1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCByZ2IoMTYwLCAxNjAsIDE2MCkgMXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICY6Zm9jdXN7XG4gICAgICAgICAgICAvL2JvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpbHRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmZpbHRlci1idXR0b25ze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgcGFkZGluZzo0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuYWxpdmV7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcblxuXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLmRlY2Vhc2Vke1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDE2OSwgMTk5LCAzNCk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDE2OSwgMTk5LCAzNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYigxNjksIDE5OSwgMzQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgMTk5LCAzNCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLmZpbHRlci1idXR0b24tYWxse1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZC1saXN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmNhcmR7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2IoMjA0LCAyMDIsIDIwMik7XG4gICAgICAgIC8vIHdpZHRoOiAzMCU7XG4gICAgICAgIC8vIG1hcmdpbjogMTBweCAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgICY6bm90KDpob3Zlcil7XG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHNjYWxlKDIuMDUpOyAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtaW5mb3JtYXRpb257XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAvKiBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDsgKi9cbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4uY2FyZC1mb290ZXJ7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDI4LCAyOCwgMC41NCk7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtdGFne1xuICAgICAgICAgICAgd2lkdGg6IDk1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiByZWQ7XG5cbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgJi5hbGl2ZXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5kZWNlYXNlZHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuYXBwLWhvbWV7XG5cbiAgICAgICAgLmhlYWRlcntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDUwcHg7ICovXG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDYwNzA3O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICB9XG4gICAgICAgIC5maWx0ZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLmZpbHRlci1idXR0b25ze1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5maWx0ZXItYnV0dG9ucyA+ZGl2ID5zcGFue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkOmhvdmVye1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGFicyBkaXZ7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHghaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5tZW51e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiService, route) {
        this.apiService = apiService;
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterStatus = {
            button: "",
            search: '',
        };
        this.queryParams = this.route.queryParams
            .subscribe(function (params) {
            if (params.character) {
                _this.filterStatus.search = params.character;
                _this.apiService.getCharactersSearch(params.character).
                    subscribe(function (characters) {
                    console.log('entrou');
                    _this.charactersMap(characters);
                });
            }
            else {
                _this.apiService.getCharacters().
                    subscribe(function (characters) {
                    _this.charactersMap(characters);
                });
            }
            console.log(params); // {order: "popular"}
            return params;
        });
        this.filterButtons = [
            {
                title: 'Vivo',
                statusClassCss: 'alive'
            },
            {
                title: 'Falecido',
                statusClassCss: 'deceased'
            },
            {
                title: 'Todos',
                statusClassCss: ''
            }
        ];
        //this.characters = this.apiService.getCharacters()
        console.log(this.characters);
    };
    HomeComponent.prototype.filterClick = function (e) {
        var _this = this;
        console.log(e);
        if (this.characters.length <= 1) {
            this.apiService.getCharacters().
                subscribe(function (characters) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.charactersMap(characters)];
                        case 1:
                            _a.sent();
                            this.filterStatus = {
                                button: e,
                                search: ''
                            };
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            this.filterStatus = {
                button: e,
                search: ''
            };
        }
    };
    HomeComponent.prototype.onSearch = function (e) {
        var _this = this;
        console.log(e);
        if (this.filterStatus.search == '' || this.characters.lenght <= 1) {
            this.apiService.getCharacters().
                subscribe(function (characters) {
                _this.charactersMap(characters);
            });
        }
        else {
            this.filterStatus = {
                button: '',
                search: e
            };
        }
    };
    HomeComponent.prototype.charactersMap = function (characters) {
        this.characters = characters.map(function (item) {
            switch (item.status) {
                case 'Alive':
                    item.statusTranslations = 'Vivo';
                    item.statusClassCss = 'alive';
                    break;
                case 'Deceased':
                    item.statusTranslations = 'Falecido';
                    item.statusClassCss = 'deceased';
                    break;
                default:
                    item.statusTranslations = 'Falecido';
                    item.statusClassCss = 'deceased';
                    break;
            }
            item.occupation = item.occupation.filter(function (i) { return i.toLowerCase() != 'unknown'; });
            item.birthday = item.birthday.toLowerCase() != 'unknown' ? item.birthday : '';
            return item;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/suggestion/suggestion.component.html":
/*!******************************************************!*\
  !*** ./src/app/suggestion/suggestion.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-suggestion\">\n    <div class=\"header\">\n      <div>\n        <img src=\"./assets/img/breaking-bad-vector-logo.svg\" alt=\"\">\n      </div>\n  \n      <div class=\"tabs\">\n          <div>\n              <h4>\n                  <a href=\"/sugestao\" >Sugestão</a> \n                </h4>\n            </div>\n            <div>\n              <h4>\n                  <a href=\"/episodios\" >Episodios</a> \n                </h4>\n            </div>\n\n      </div>\n  \n\n    </div>\n  \n  \n    <h2 *ngIf='filterStatus.search'>Você pesquisou por \"{{filterStatus.search}}\"</h2>\n  \n    <div class=\"box\" >\n  \n      <!-- <div class=\"card\" *ngFor=\"let character of characters | async as characters; let i = index;\" [ngStyle]=\"{'background-image':'url(' + character.img + ')'}\"> -->\n  <div class=\"box-form\">\n    <h2 class=\"toast\" [ngClass]=\"toast\">Enviado com Sucesso</h2>\n          <form [formGroup]=\"profileForm\">\n            <div>\n              <div>\n                  <div><span>Seu Nome:</span></div>\n                  <div>\n                <input type=\"text\" formControlName=\"author\">\n              </div>\n              </div>\n            <br>\n              <div>\n                <div><span>Mensagem:</span></div>\n                <div>\n                <textarea type=\"text\" formControlName=\"message\"></textarea>\n              </div>\n              </div>\n            </div>\n            <div>\n                <button (click)=\"submitSugestion()\" >Enviar</button>\n              \n            </div>\n            </form>\n\n    </div>\n\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/suggestion/suggestion.component.scss":
/*!******************************************************!*\
  !*** ./src/app/suggestion/suggestion.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-suggestion {\n  background: #060707;\n  color: white;\n  padding: 0px 10%; }\n  .app-suggestion .box {\n    height: 100vh;\n    margin-top: 5%;\n    display: flex;\n    justify-content: center; }\n  .app-suggestion input {\n    background: transparent;\n    border: none;\n    border-bottom: solid #a0a0a0 1px;\n    color: white;\n    outline: none;\n    min-width: 40%; }\n  .app-suggestion textarea {\n    background: transparent;\n    border: none;\n    border: solid #a0a0a0 1px;\n    color: white;\n    outline: none;\n    min-width: 40%;\n    min-height: 20vh;\n    margin: 0px;\n    width: 618px;\n    height: 252px;\n    width: 100%; }\n  .app-suggestion a {\n    color: white;\n    text-decoration: none;\n    /* no underline */ }\n  .app-suggestion .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .app-suggestion .header img {\n      max-width: 100px; }\n  .app-suggestion .header .tabs {\n      display: flex; }\n  .app-suggestion .header .tabs div {\n        margin: 0px 10px; }\n  .app-suggestion .header input {\n      background: transparent;\n      border: none;\n      border-bottom: solid #a0a0a0 1px;\n      color: white;\n      outline: none; }\n  .app-suggestion .filter {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .app-suggestion .toast {\n    text-align: center;\n    color: #ffffff;\n    background: #336429;\n    padding: 13px;\n    opacity: 1;\n    transition: opacity .5s linear; }\n  .app-suggestion .toast.hide {\n      opacity: 0;\n      pointer-events: none; }\n  .app-suggestion button {\n    background: transparent;\n    color: white;\n    border-style: solid;\n    height: 35px;\n    width: 100%;\n    outline: none;\n    color: white;\n    border-color: white;\n    margin: 21px 0px; }\n  .app-suggestion button:hover {\n      cursor: pointer;\n      color: black;\n      background-color: white; }\n  .app-suggestion button textarea {\n      height: 250px !important;\n      width: 250px !important;\n      padding: 0; }\n  .app-suggestion button .toast {\n      width: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BoaWxpcHBlL2VzdHVkby9hbmd1bGFyL3NpdGUvc2l0ZS9zcmMvYXBwL3N1Z2dlc3Rpb24vc3VnZ2VzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUF3QjtFQUN4QixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFIcEI7SUFNUSxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUIsRUFBQTtFQVQvQjtJQWFRLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0NBQTJDO0lBQzNDLFlBQVk7SUFDWixhQUFhO0lBRWpCLGNBQWMsRUFBQTtFQW5CbEI7SUEwQlEsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5QkFBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVcsRUFBQTtFQXBDbkI7SUF3Q00sWUFBWTtJQUNaLHFCQUFxQjtJQUFFLGlCQUFBLEVBQWtCO0VBekMvQztJQTRDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQixFQUFBO0VBOUN2QjtNQWtEUSxnQkFBZ0IsRUFBQTtFQWxEeEI7TUFxREksYUFBYSxFQUFBO0VBckRqQjtRQXVEUSxnQkFBZ0IsRUFBQTtFQXZEeEI7TUEyRFEsdUJBQXVCO01BQ3ZCLFlBQVk7TUFDWixnQ0FBMkM7TUFDM0MsWUFBWTtNQUNaLGFBQWEsRUFBQTtFQS9EckI7SUF1RUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUIsRUFBQTtFQXpFdkI7SUE4RUksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7SUFDViw4QkFBOEIsRUFBQTtFQW5GbEM7TUF5RlEsVUFBVTtNQUVWLG9CQUFvQixFQUFBO0VBM0Y1QjtJQStGSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBO0VBdkdwQjtNQTJHUSxlQUFlO01BRWYsWUFBWTtNQUNaLHVCQUF1QixFQUFBO0VBOUcvQjtNQWlISSx3QkFBdUI7TUFDdkIsdUJBQXNCO01BQ3RCLFVBQVUsRUFBQTtFQW5IZDtNQXNIUSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdWdnZXN0aW9uL3N1Z2dlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXN1Z2dlc3Rpb257XG4gICAgYmFja2dyb3VuZDogcmdiKDYsIDcsIDcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMTAlO1xuICAgIC8vIGhlaWdodDogMTAwdmg7XG4gICAgLmJveHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICAgIH1cbiAgICBpbnB1dHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgcmdiKDE2MCwgMTYwLCAxNjApIDFweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgbWluLXdpZHRoOiA0MCU7XG4gICAgICAgICY6Zm9jdXN7XG4gICAgICAgICAgICAvL2JvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRleHRhcmVhe1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXI6IHNvbGlkIHJnYigxNjAsIDE2MCwgMTYwKSAxcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgbWluLXdpZHRoOiA0MCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwdmg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB3aWR0aDogNjE4cHg7XG4gICAgICAgIGhlaWdodDogMjUycHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBubyB1bmRlcmxpbmUgKi9cbiAgICB9XG4uaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG5cbiAgICBpbWd7XG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgfVxuLnRhYnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXZ7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgfVxufVxuICAgIGlucHV0e1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCByZ2IoMTYwLCAxNjAsIDE2MCkgMXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICY6Zm9jdXN7XG4gICAgICAgICAgICAvL2JvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpbHRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cbn1cbi50b2FzdHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDogIzMzNjQyOTtcbiAgICBwYWRkaW5nOiAxM3B4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgbGluZWFyO1xuICAgIC8vIG9wYWNpdHk6IDA7XG4gICAgXG5cbiAgICAmLmhpZGV7XG4gICAgICAgIFxuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMjFweCAwcHg7XG5cbiAgICAmOmhvdmVye1xuICAgICAgICAvLyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIFxuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICB0ZXh0YXJlYXtcbiAgICBoZWlnaHQ6IDI1MHB4IWltcG9ydGFudDtcbiAgICB3aWR0aDogMjUwcHghaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC50b2FzdHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgIH1cblxuXG59XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/suggestion/suggestion.component.ts":
/*!****************************************************!*\
  !*** ./src/app/suggestion/suggestion.component.ts ***!
  \****************************************************/
/*! exports provided: SuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionComponent", function() { return SuggestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SuggestionComponent = /** @class */ (function () {
    function SuggestionComponent(apiService, route) {
        this.apiService = apiService;
        this.route = route;
        this.toast = 'hide';
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    SuggestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterStatus = {
            button: "",
            search: '',
        };
        this.queryParams = this.route.queryParams
            .subscribe(function (params) {
            if (params.character) {
                _this.filterStatus.search = params.character;
                _this.apiService.getCharactersSearch(params.character).
                    subscribe(function (episodes) {
                    console.log('entrou');
                    _this.episodes = episodes;
                    //  this.charactersMap(characters)
                });
            }
            else {
                _this.apiService.getepisodes().
                    subscribe(function (episodes) {
                    _this.episodes = episodes;
                    //  this.charactersMap(characters)
                });
            }
            console.log(params); // {order: "popular"}
            return params;
        });
        this.filterButtons = [
            {
                title: 'Vivo',
                statusClassCss: 'alive'
            },
            {
                title: 'Falecido',
                statusClassCss: 'deceased'
            },
            {
                title: 'Todos',
                statusClassCss: ''
            }
        ];
        //this.characters = this.apiService.getCharacters()
        console.log(this.episodes);
    };
    SuggestionComponent.prototype.filterClick = function (e) {
        var _this = this;
        console.log(e);
        if (this.episodes.length <= 1) {
            this.apiService.getCharacters().
                subscribe(function (characters) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.charactersMap(characters)];
                        case 1:
                            _a.sent();
                            this.filterStatus = {
                                button: e,
                                search: ''
                            };
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            this.filterStatus = {
                button: e,
                search: ''
            };
        }
    };
    SuggestionComponent.prototype.onSearch = function (e) {
        var _this = this;
        console.log(e);
        if (this.filterStatus.search == '' || this.episodes.lenght <= 1) {
            this.apiService.getCharacters().
                subscribe(function (characters) {
                _this.charactersMap(characters);
            });
        }
        else {
            this.filterStatus = {
                button: '',
                search: e
            };
        }
    };
    SuggestionComponent.prototype.charactersMap = function (episodes) {
        this.episodes = episodes.map(function (item) {
            switch (item.status) {
                case 'Alive':
                    item.statusTranslations = 'Vivo';
                    item.statusClassCss = 'alive';
                    break;
                case 'Deceased':
                    item.statusTranslations = 'Falecido';
                    item.statusClassCss = 'deceased';
                    break;
                default:
                    item.statusTranslations = 'Falecido';
                    item.statusClassCss = 'deceased';
                    break;
            }
            item.occupation = item.occupation.filter(function (i) { return i.toLowerCase() != 'unknown'; });
            item.birthday = item.birthday.toLowerCase() != 'unknown' ? item.birthday : '';
            return item;
        });
    };
    SuggestionComponent.prototype.submitSugestion = function () {
        var _this = this;
        var formObj = this.profileForm.getRawValue(); // {name: '', description: ''}
        var serializedForm = JSON.stringify(formObj);
        console.log(serializedForm);
        this.apiService.postMensagem(serializedForm).
            subscribe(function (response) {
            _this.toast = '';
            //  this.charactersMap(characters)
        });
    };
    SuggestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suggestion',
            template: __webpack_require__(/*! ./suggestion.component.html */ "./src/app/suggestion/suggestion.component.html"),
            styles: [__webpack_require__(/*! ./suggestion.component.scss */ "./src/app/suggestion/suggestion.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SuggestionComponent);
    return SuggestionComponent;
}());



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
    production: false
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

module.exports = __webpack_require__(/*! /home/philippe/estudo/angular/site/site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map