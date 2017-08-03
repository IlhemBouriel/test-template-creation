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
var PlanTestComponent = (function () {
    function PlanTestComponent(testService) {
        this.testService = testService;
        this.steps = [{}];
        console.log('PlanComponent created');
        this.stepNum = 1;
        this.testCase = '';
        this.description = '';
        this.template = '';
        this.steps = [
            {
                'num': 1,
                'dn': '',
                'ed': ''
            }];
    }
    PlanTestComponent.prototype.getNextStep = function () {
        this.stepNum++;
        this.steps.push({
            'num': this.stepNum,
            'dn': "",
            'ed': "",
        });
    };
    PlanTestComponent.prototype.RemoveStep = function () {
        this.stepNum--;
        this.steps.splice(this.steps.length - 1, 1);
    };
    PlanTestComponent.prototype.validateTemplate = function () {
        this.stepNum = 8;
        for (var _i = 0, _a = this.steps; _i < _a.length; _i++) {
            var step = _a[_i];
            this.template = this.template + 'Step' + step.num + '\t' + step.dn + '\t' + step.ed + '\n';
        }
    };
    PlanTestComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'plan',
            templateUrl: 'plan.component.html'
        }), 
        __metadata('design:paramtypes', [test_service_1.TestService])
    ], PlanTestComponent);
    return PlanTestComponent;
}());
exports.PlanTestComponent = PlanTestComponent;
//# sourceMappingURL=plan.component.js.map