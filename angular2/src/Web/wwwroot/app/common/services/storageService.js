System.register(["@angular/core", "./LogService"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, LogService_1, StorageService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LogService_1_1) {
                LogService_1 = LogService_1_1;
            }
        ],
        execute: function () {
            StorageService = (function () {
                function StorageService(logService) {
                    this.logService = logService;
                }
                StorageService.prototype.getCookie = function (name) {
                    var value = "; " + document.cookie;
                    var parts = value.split("; " + name + "=");
                    if (parts.length === 2) {
                        return parts.pop().split(";").shift();
                    }
                    return null;
                };
                StorageService.prototype.getLocalStorage = function (key) {
                    var text = localStorage.getItem(key);
                    var data;
                    try {
                        data = JSON.parse(text);
                    }
                    catch (error) {
                        this.logService.log("LocalStorageService::readObject: can't convert string from local storage" +
                            " to object using JSON.parse(). Error: " + error);
                        data = null;
                    }
                    return data;
                };
                StorageService.prototype.setLocalStorage = function (key, value) {
                    localStorage.setItem(key, JSON.stringify(value));
                };
                return StorageService;
            }());
            StorageService = __decorate([
                core_1.Injectable(),
                __param(0, core_1.Inject(LogService_1.LogService)),
                __metadata("design:paramtypes", [LogService_1.LogService])
            ], StorageService);
            exports_1("StorageService", StorageService);
        }
    };
});

//# sourceMappingURL=storageService.js.map
