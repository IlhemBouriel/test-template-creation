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
        this.testCases = [{}];
        console.log('PlanComponent created');
        this.testCaseNum = 1;
        this.currentTestCase = 0;
        this.template = '';
        var steps = [
            {
                'dn': '',
                'ed': ''
            }];
        this.testCases = [{
                'name': '',
                'description': '',
                'stepNum': 1,
                'steps': steps
            }];
    }
    PlanTestComponent.prototype.removeTestCase = function () {
        this.testCaseNum--;
        this.testCases.splice(this.currentTestCase, 1);
        if (this.currentTestCase == 0) {
            this.currentTestCase++;
        }
        else {
            this.currentTestCase--;
        }
    };
    PlanTestComponent.prototype.getNextStep = function (testCase) {
        this.testCases[this.currentTestCase].stepNum++;
        this.testCases[this.currentTestCase].steps.push({
            'dn': "",
            'ed': "",
        });
        if (this.testCases[this.currentTestCase].stepNum == 8) {
            this.nextTestCase();
        }
    };
    PlanTestComponent.prototype.RemoveStep = function (index) {
        this.testCases[this.currentTestCase].steps.splice(index, 1);
        this.testCases[this.currentTestCase].stepNum--;
    };
    PlanTestComponent.prototype.validateTemplate = function () {
        this.testCaseNum = 11;
        /* for (let step of this.steps)
         {
           this.template = this.template + 'Step'+step.num+'\t'+step.dn+'\t'+step.ed+'\n';
         }*/
    };
    PlanTestComponent.prototype.nextTestCase = function () {
        if (this.currentTestCase + 1 == this.testCases.length) {
            this.testCaseNum++;
            var steps = [
                {
                    'num': 1,
                    'dn': '',
                    'ed': ''
                }];
            this.testCases.push({
                'name': '',
                'description': '',
                'stepNum': 1,
                'steps': steps
            });
        }
        this.currentTestCase++;
    };
    PlanTestComponent.prototype.previousTestCase = function () {
        this.currentTestCase = 0;
        if (this.testCaseNum == 11) {
            this.testCaseNum = this.testCases.length;
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