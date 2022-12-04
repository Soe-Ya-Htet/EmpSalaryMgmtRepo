(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-light\">\n    <div class=\"container-fluid\">\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n        <div class=\"navbar-nav\">\n            <a class=\"nav-link nav-text\" routerLink=\"/upload\" routerLinkActive=\"active\">\n                Upload CSV\n            </a>\n            <a class=\"nav-link nav-text\" routerLink=\"/search\" routerLinkActive=\"active\">\n                Search Employee\n            </a>\n        </div>\n      </div>\n    </div>\n  </nav>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <router-outlet>\n\n            </router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/csv-upload/csv-upload.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/csv-upload/csv-upload.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n       <div class=\"row\">\n              <p class=\"upload-info\" *ngIf=\"isInfo\">\n                     {{message}}\n              </p>\n              <p class=\"upload-ok\" *ngIf=\"isOk\">\n                     {{message}}\n              </p>\n              <p class=\"upload-fail\" *ngIf=\"isError\">\n                     {{message}}\n              </p>\n       </div>\n       \n       <input type=\"file\" class=\"file-input\"\n       (change)=\"onFileSelected($event)\" accept=\".csv\" #fileInput>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee-search/employee-search.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee-search/employee-search.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    \n    <div class=\"container error\">\n        <div class=\"list-group\" *ngIf=\"isError\">\n            <ul>\n                <li>Please filled in all Search Criteria to search.</li>\n                <li>Please make sure Maximum Salary and Minimum Salary fields are Number or Decimal values.</li>\n                <li>Please make sure whether Offset and Limit fields are Number values.</li>\n            </ul>\n        </div>\n    </div>\n  \n    <div class=\"container\">\n        <div class=\"row inDiv\">\n          <div class=\"col-2 searchWord\">\n            Minimum Salary :\n          </div>\n          <div class=\"col-2\">\n            <input type=\"text\" class=\"form-control\" name=\"minSalary\" [(ngModel)]=\"minSalary\">\n          </div>\n          <div class=\"col-2 searchWord\">\n            Maximum Salary :\n          </div>\n          <div class=\"col-2\">\n            <input type=\"text\" class=\"form-control\" name=\"maxSalary\" [(ngModel)]=\"maxSalary\">\n          </div>\n        </div>\n  \n        <div class=\"row inDiv\">\n            <div class=\"col-2 searchWord\">\n              Offset :\n            </div>\n            <div class=\"col-2\">\n              <input type=\"text\" class=\"form-control\" name=\"offset\" [(ngModel)]=\"offset\">\n            </div>\n            <div class=\"col-2 searchWord\">\n              Limit :\n            </div>\n            <div class=\"col-2\">\n                <input type=\"text\" class=\"form-control\" name=\"limit\" [(ngModel)]=\"limit\">\n            </div>\n          </div>\n  \n          <div class=\"row inDiv\">\n            <div class=\"col-2 searchWord\">\n              Sort By :\n            </div>\n            <div class=\"col-2\">\n                <select class=\"form-control\" name=\"sort\" [(ngModel)]=\"sort\">\n                    <option>id</option>\n                    <option>login</option>\n                    <option>name</option>\n                    <option>salary</option>\n                </select>\n            </div>\n            <div class=\"col-2 searchWord\">\n              Order :\n            </div>\n            <div class=\"col-2\">\n                <select class=\"form-control\" name=\"order\" [(ngModel)]=\"order\">\n                    <option value=\"+\">Ascending</option>\n                    <option value=\"-\">Descending</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"row inDiv\">\n            <div class=\"col-2\">\n            </div>\n            <div class=\"col-2\">\n            </div>\n            <div class=\"col-2\">\n            </div>\n            <div class=\"col-2\">\n            </div>\n            <div class=\"col-2\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"searchEmpByCriteria()\">Search</button>\n            </div>\n          </div>\n      </div>\n    <div class=\"container-fluid\"></div>\n    <div class=\"container\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Id</th>\n                    <th scope=\"col\">Login</th>\n                    <th scope=\"col\">Name</th>\n                    <th scope=\"col\">Salary</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let emp of employees\">\n                    <td>{{emp.id}}</td>\n                    <td>{{emp.login}}</td>\n                    <td>{{emp.name}}</td>\n                    <td>{{emp.salary}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n  </div>\n\n"

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
/* harmony import */ var _csv_upload_csv_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./csv-upload/csv-upload.component */ "./src/app/csv-upload/csv-upload.component.ts");
/* harmony import */ var _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-search/employee-search.component */ "./src/app/employee-search/employee-search.component.ts");





var routes = [
    { path: "", redirectTo: "search", pathMatch: "full" },
    { path: "search", component: _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeSearchComponent"] },
    { path: "upload", component: _csv_upload_csv_upload_component__WEBPACK_IMPORTED_MODULE_3__["CsvUploadComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-text{\n    font-size: larger;\n}\n\n.container-fluid {\n    padding: 10px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXRleHR7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmc6IDEwcHhcbn0iXX0= */"

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
        this.title = 'EmpSalaryMgmtWeb';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-search/employee-search.component */ "./src/app/employee-search/employee-search.component.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _csv_upload_csv_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./csv-upload/csv-upload.component */ "./src/app/csv-upload/csv-upload.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeSearchComponent"],
                _csv_upload_csv_upload_component__WEBPACK_IMPORTED_MODULE_9__["CsvUploadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/csv-upload/csv-upload.component.css":
/*!*****************************************************!*\
  !*** ./src/app/csv-upload/csv-upload.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    padding: 20px;\n}\n\n.upload-info{\n    color: #2C6EFD;\n    font-size: larger;\n}\n\n.upload-ok{\n    color: green;\n    font-size: larger;\n}\n\n.upload-fail{\n    color: red;\n    font-size: larger;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3N2LXVwbG9hZC9jc3YtdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY3N2LXVwbG9hZC9jc3YtdXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udXBsb2FkLWluZm97XG4gICAgY29sb3I6ICMyQzZFRkQ7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi51cGxvYWQtb2t7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4udXBsb2FkLWZhaWx7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/csv-upload/csv-upload.component.ts":
/*!****************************************************!*\
  !*** ./src/app/csv-upload/csv-upload.component.ts ***!
  \****************************************************/
/*! exports provided: CsvUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvUploadComponent", function() { return CsvUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");



var CsvUploadComponent = /** @class */ (function () {
    function CsvUploadComponent(service) {
        this.service = service;
    }
    CsvUploadComponent.prototype.ngOnInit = function () {
        this.message = 'Please upload csv file.';
        this.isError = false;
        this.isOk = false;
        this.isInfo = true;
    };
    CsvUploadComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            var formData = new FormData();
            formData.append("file", file);
            var resp = this.service.upload(formData);
            resp.subscribe(function (data) {
                _this.isOk = true;
                _this.isError = false;
                _this.isInfo = false;
                _this.message = JSON.parse(data.body).message;
                _this.InputVar.nativeElement.value = "";
            }, function (exception) {
                _this.isOk = false;
                _this.isError = true;
                _this.isInfo = false;
                _this.message = JSON.parse(exception.error).message;
                _this.InputVar.nativeElement.value = "";
            });
        }
    };
    CsvUploadComponent.ctorParameters = function () { return [
        { type: _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileInput", { static: false })
    ], CsvUploadComponent.prototype, "InputVar", void 0);
    CsvUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-csv-upload',
            template: __webpack_require__(/*! raw-loader!./csv-upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/csv-upload/csv-upload.component.html"),
            styles: [__webpack_require__(/*! ./csv-upload.component.css */ "./src/app/csv-upload/csv-upload.component.css")]
        })
    ], CsvUploadComponent);
    return CsvUploadComponent;
}());



/***/ }),

/***/ "./src/app/employee-search/employee-search.component.css":
/*!***************************************************************!*\
  !*** ./src/app/employee-search/employee-search.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-bottom: 50px;\n}\n\n.error {\n    margin-top: 30;\n    color: red;\n}\n\ndiv.searchWord {\n    text-align: right;\n    margin-right: 5px;\n}\n\ndiv.inDiv {\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtc2VhcmNoL2VtcGxveWVlLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1zZWFyY2gvZW1wbG95ZWUtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uZXJyb3Ige1xuICAgIG1hcmdpbi10b3A6IDMwO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbmRpdi5zZWFyY2hXb3JkIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuZGl2LmluRGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/employee-search/employee-search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee-search/employee-search.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSearchComponent", function() { return EmployeeSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");



var EmployeeSearchComponent = /** @class */ (function () {
    function EmployeeSearchComponent(service) {
        this.service = service;
        this.isError = false;
    }
    EmployeeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resp = this.service.getEmployees(0, Number.MAX_VALUE, 0, 30, '+id');
        resp.subscribe(function (data) { return _this.employees = data; });
    };
    EmployeeSearchComponent.prototype.searchEmpByCriteria = function () {
        var _this = this;
        if (this.minSalary == undefined || this.maxSalary == undefined || this.offset == undefined
            || this.limit == undefined || this.sort == undefined || this.order == undefined) {
            this.isError = true;
        }
        else if (isNaN(Number(this.minSalary)) || isNaN(Number(this.maxSalary)) || isNaN(Number(this.offset)) || isNaN(Number(this.limit))) {
            this.isError = true;
        }
        else {
            this.isError = false;
            var resp = this.service.getEmployees(this.minSalary, this.maxSalary, this.offset, this.limit, this.order + this.sort);
            resp.subscribe(function (data) { return _this.employees = data; });
            this.minSalary = undefined;
            this.maxSalary = undefined;
            this.offset = undefined;
            this.limit = undefined;
            this.sort = undefined;
            this.order = undefined;
        }
    };
    EmployeeSearchComponent.ctorParameters = function () { return [
        { type: _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }
    ]; };
    EmployeeSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-search',
            template: __webpack_require__(/*! raw-loader!./employee-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee-search/employee-search.component.html"),
            styles: [__webpack_require__(/*! ./employee-search.component.css */ "./src/app/employee-search/employee-search.component.css")]
        })
    ], EmployeeSearchComponent);
    return EmployeeSearchComponent;
}());



/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8081/employee";
    }
    EmployeeService.prototype.getEmployees = function (minSalary, maxSalary, offset, limit, sort) {
        var url = this.baseUrl + "/users";
        var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append("minSalary", minSalary).append("maxSalary", maxSalary).append("offset", offset)
            .append("limit", limit).append("sort", sort);
        return this.http.get(url, { params: queryParams });
    };
    EmployeeService.prototype.upload = function (formData) {
        var url = this.baseUrl + "/upload";
        return this.http.post(url, formData, { responseType: 'text', observe: 'response' });
    };
    EmployeeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], EmployeeService);
    return EmployeeService;
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

module.exports = __webpack_require__(/*! /Users/soeyahtet/Desktop/Home Folder/Documents/11 2020 Jobs/Toppan/EmployeeSalaryManagement/EmpSalaryMgmtRepo/EmpSalaryMgmtWeb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map