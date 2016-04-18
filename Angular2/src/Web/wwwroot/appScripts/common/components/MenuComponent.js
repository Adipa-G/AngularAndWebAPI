var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var AuthService_1 = require("../services/AuthService");
var StorageService_1 = require('../services/StorageService');
var MenuComponent = (function () {
    function MenuComponent(authService, storageService) {
        var _this = this;
        this.authService = authService;
        this.storageService = storageService;
        authService.authChanged$.subscribe(function (auth) { return _this.onAuthChanged(auth); });
        this.currentAuth = authService.getCurrentAuth();
    }
    MenuComponent.prototype.onAuthChanged = function (auth) {
        this.currentAuth = auth;
    };
    MenuComponent.prototype.logOut = function () {
        this.storageService.setLocalStorage('authorizationData', {});
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'common-menu',
            viewProviders: [AuthService_1.AuthService],
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: './templates/common/components/MenuComponent.html'
        }), 
        __metadata('design:paramtypes', [AuthService_1.AuthService, StorageService_1.StorageService])
    ], MenuComponent);
    return MenuComponent;
})();
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=MenuComponent.js.map