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
var core_1 = require('@angular/core');
var test_service_1 = require('../../services/test.service');
var TestsComponent = (function () {
    function TestsComponent(testService) {
        var _this = this;
        this.testService = testService;
        this.filterargs = { name: '' };
        this.filterargs_val = '';
        this.qtd = {};
        this.testService.getDefVars()
            .subscribe(function (vars) {
            _this.defVars = vars.data;
        });
        this.testService.getUnDefVars()
            .subscribe(function (vars) {
            _this.undefVars = vars.data;
        });
        this.testService.getOneDefVar('url')
            .subscribe(function (vars) {
            _this.urlValues = vars.data[0].values;
        });
        this.testService.getOneDefVar('sn')
            .subscribe(function (vars) {
            _this.snValues = vars.data[0].values;
        });
        this.testService.getOneDefVar('dn')
            .subscribe(function (vars) {
            _this.dnValues = vars.data[0].values;
        });
        this.testService.getOneDefVar('ed')
            .subscribe(function (vars) {
            _this.edValues = vars.data[0].values;
        });
        this.testService.getOneDefVar('path')
            .subscribe(function (vars) {
            _this.pathValues = vars.data[0].values;
        });
        this.testService.getOneDefVar('host')
            .subscribe(function (vars) {
            _this.hostValues = vars.data[0].values;
        });
        this.choices = [{ id: 'choice1', 'name': '', 'var': null, 'is_edit': true }];
        this.toShow = '';
    }
    TestsComponent.prototype.addNewChoice = function () {
        var newItemNo = this.choices.length + 1;
        this.choices.push({ 'id': 'choice' + newItemNo, 'name': '', 'var': null, 'is_edit': true });
    };
    TestsComponent.prototype.removeChoice = function () {
        //remove from qtd (to implement)
        var lastItem = this.choices.length - 1;
        this.choices.splice(lastItem);
    };
    TestsComponent.prototype.changeStatus = function (choice) {
        choice.is_edit = false;
        this.testService.getOneDefVar(choice.name)
            .subscribe(function (vars) {
            console.log(vars.data.length);
            if (vars.data.length == 1) {
                console.log("object: %O", vars.data);
                choice.var = vars.data;
            }
            else {
                choice.var = null;
            }
        });
    };
    TestsComponent.prototype.createTemplate = function () {
        var _this = this;
        this.testService.createTemplate()
            .subscribe(function (res) {
            _this.res = res;
        });
    };
    TestsComponent.prototype.addToSHow = function (key, value) {
        this.toShow = this.toShow + key + ": " + value + "\n";
    };
    TestsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tests',
            templateUrl: 'tests.component.html',
        }), 
        __metadata('design:paramtypes', [test_service_1.TestService])
    ], TestsComponent);
    return TestsComponent;
}());
exports.TestsComponent = TestsComponent;
//# sourceMappingURL=tests.component.js.map