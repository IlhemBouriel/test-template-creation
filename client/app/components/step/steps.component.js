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
var StepsComponent = (function () {
    function StepsComponent(testService) {
        var _this = this;
        this.testService = testService;
        this.onValidateStep = new core_1.EventEmitter();
        this.onValidateTemplate = new core_1.EventEmitter();
        this.onlaunchTest = new core_1.EventEmitter();
        this.onvalidateSteps = new core_1.EventEmitter();
        this.filterargs = { name: '' };
        this.filterargs_val = '';
        this.qtd = {};
        this.testService.getDefVars()
            .subscribe(function (vars) {
            _this.defVars = vars.data;
        });
        this.testService.getOneDefVar('url')
            .subscribe(function (vars) {
            _this.urlValues = vars.data[0].values;
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
        this.qtd['sn'] = "Step 1";
        this.choices = [{ id: 'choice1', 'name': '', 'var': null, 'is_edit': true }];
        this.toShow = '';
        this.displayPostArea = 'none';
    }
    StepsComponent.prototype.addNewChoice = function () {
        var newItemNo = this.choices.length + 1;
        this.choices.push({ 'id': 'choice' + newItemNo, 'name': '', 'var': null, 'is_edit': true });
    };
    StepsComponent.prototype.removeChoice = function () {
        //remove from qtd (to implement)
        var lastItem = this.choices.length - 1;
        this.choices.splice(lastItem);
        this.addToSHow();
    };
    StepsComponent.prototype.changeStatus = function (choice) {
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
    StepsComponent.prototype.createTemplate = function () {
        var content = document.getElementById("textArea").value;
        var res = {
            "content": content
        };
        this.onValidateTemplate.emit(res);
    };
    StepsComponent.prototype.getNextStep = function (doc) {
        var content = document.getElementById("textArea").value;
        var res = {
            "doc": doc,
            "content": content
        };
        this.onValidateStep.emit(res);
    };
    StepsComponent.prototype.addToSHow = function () {
        this.toShow = '';
        for (var i = 0; i < this.choices.length; i++) {
            this.toShow = this.toShow + " " + this.choices[i].name + ": " + this.qtd[this.choices[i].name] + "\n";
        }
        if (this.displayPostArea == "") {
            this.toShow = this.toShow + "\n" + this.qtd['body'];
        }
    };
    StepsComponent.prototype.selectedOption = function () {
        if (this.qtd['type'] == "POST") {
            this.displayPostArea = "";
        }
        else {
            this.displayPostArea = 'none';
        }
    };
    StepsComponent.prototype.showBodyContent = function () {
        this.toShow = this.toShow + "\n" + this.qtd['body'];
    };
    StepsComponent.prototype.createResult = function () {
        if (this.qtd['ed'] != null && this.qtd['ed'] != '') {
            var index = this.qtd['ed'].indexOf("+");
            this.qtd['result'] = this.qtd['ed'].substring(0, index);
            ;
        }
    };
    StepsComponent.prototype.launchTest = function () {
        var content = document.getElementById("textArea").value;
        var res = {
            "content": content
        };
        this.onlaunchTest.emit(res);
    };
    StepsComponent.prototype.validateTemplate = function () {
        var content = document.getElementById("textArea").value;
        var res = {
            "content": content
        };
        this.onvalidateSteps.emit(res);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StepsComponent.prototype, "numStep", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], StepsComponent.prototype, "template", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], StepsComponent.prototype, "onValidateStep", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], StepsComponent.prototype, "onValidateTemplate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], StepsComponent.prototype, "onlaunchTest", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], StepsComponent.prototype, "onvalidateSteps", void 0);
    StepsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'step',
            templateUrl: 'steps.component.html',
            styleUrls: ['steps.component.css'],
        }), 
        __metadata('design:paramtypes', [test_service_1.TestService])
    ], StepsComponent);
    return StepsComponent;
}());
exports.StepsComponent = StepsComponent;
//# sourceMappingURL=steps.component.js.map