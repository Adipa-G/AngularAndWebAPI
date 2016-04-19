///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var Constants_1 = require('./common/services/Constants');
var LogService_1 = require('./common/services/LogService');
var ErrorService_1 = require('./common/services/ErrorService');
var StorageService_1 = require('./common/services/StorageService');
var AuthService_1 = require('./common/services/AuthService');
var HttpClient_1 = require('./common/services/HttpClient');
var app_1 = require('./app');
browser_1.bootstrap(app_1.AppComponent, [
    http_1.HTTP_BINDINGS,
    http_1.HTTP_PROVIDERS,
    Constants_1.Constants,
    LogService_1.LogService,
    ErrorService_1.ErrorService,
    StorageService_1.StorageService,
    AuthService_1.AuthService,
    HttpClient_1.HttpClient
]);
//# sourceMappingURL=boot.js.map