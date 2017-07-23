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
        this.choices = [{ id: 'choice1', 'name': '', 'var': this.defVar, 'is_edit': true }];
    }
    TestsComponent.prototype.addNewChoice = function () {
        var newItemNo = this.choices.length + 1;
        this.choices.push({ 'id': 'choice' + newItemNo, 'name': '', 'var': null, 'is_edit': true });
    };
    TestsComponent.prototype.removeChoice = function () {
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