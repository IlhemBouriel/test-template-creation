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
var plan_service_1 = require('../../services/plan.service');
var PlanTestComponent = (function () {
    function PlanTestComponent(planService) {
        this.planService = planService;
        this.testCases = [{}];
        console.log('PlanComponent created');
        this.contentTestPlan = '';
        this.message = '';
        this.testCaseNum = 1;
        this.currentTestCase = 0;
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
        this.load = __dirname + '/../src/images/loading.gif';
        this.done = __dirname + '/../src/images/spin.gif';
        this.finalTask = __dirname + '/../src/images/check-animation.gif';
        this.fullPath = '';
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
        if (this.evol != null && this.testCases[this.currentTestCase].steps[0].ed != "" && this.testCases[this.currentTestCase].steps[0].dn != "" && this.testCases[this.currentTestCase].name != "") {
            this.testCaseNum = 11;
            this.contentTestPlan = '';
            var sum = 0;
            for (var _i = 0, _a = this.testCases; _i < _a.length; _i++) {
                var testCase = _a[_i];
                this.contentTestPlan = this.contentTestPlan + "TestPlan:\t" + this.evol + "\n#####################################################################################################################\nTestCase:\t" + testCase.name + "\n Description:\t" + testCase.description + "\n";
                for (var _b = 0, _c = testCase.steps; _b < _c.length; _b++) {
                    var step = _c[_b];
                    sum = testCase.steps.indexOf(step) + 1;
                    this.contentTestPlan = this.contentTestPlan + "\t\tStep" + sum + "\t\t" + step.dn + "\t\t" + step.ed + "\n";
                }
                this.contentTestPlan = this.contentTestPlan + "#####################################################################################################################\n";
            }
        }
    };
    PlanTestComponent.prototype.nextTestCase = function () {
        if (this.testCaseNum == 9) {
            this.validateTemplate();
        }
        else {
            if (this.evol != null && this.testCases[this.currentTestCase].steps[0].ed != "" && this.testCases[this.currentTestCase].steps[0].dn != "" && this.testCases[this.currentTestCase].name != "") {
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
            }
        }
    };
    PlanTestComponent.prototype.previousTestCase = function () {
        if (this.testCaseNum == 11) {
            this.currentTestCase = this.testCases.length - 1;
            this.testCaseNum = this.testCases.length;
            console.log("go to " + this.testCases.length);
            console.log('nombre = ' + this.testCaseNum);
        }
        else {
            this.currentTestCase--;
            console.log('nombre = ' + this.testCaseNum);
        }
    };
    PlanTestComponent.prototype.pushFileToRep = function () {
        var _this = this;
        this.fullPath = this.load;
        this.message = 'Saving is in progress';
        this.openModal();
        var content = "'" + this.contentTestPlan + "'";
        content = content.replace(/\n/g, '\r');
        this.planService.saveTestPlan(this.evol, content)
            .subscribe(function (res) {
            _this.message = 'TestPlan file saved successfully';
            _this.fullPath = _this.done;
            setTimeout(function () {
                _this.closeModal();
            }, 1800);
        });
    };
    PlanTestComponent.prototype.sendAndSaveTestPlan = function () {
        var _this = this;
        this.fullPath = this.load;
        this.message = 'sending is in progress';
        this.openModal();
        var content = this.contentTestPlan;
        content = content.replace(/\n/g, '\r');
        this.planService.sendEmailAndSave(this.evol, content)
            .subscribe(function (res) {
            _this.res = res.data;
            _this.message = 'email was sent successfully';
            _this.fullPath = _this.done;
            //setTimeout(this.closeModal(), 100000000000);
            setTimeout(function () {
                _this.closeModal();
            }, 1500);
            _this.pushFileToRep();
        });
    };
    PlanTestComponent.prototype.openModal = function () {
        var modal = document.getElementById('myModal');
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
    };
    PlanTestComponent.prototype.closeModal = function () {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    };
    PlanTestComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'plan',
            templateUrl: 'plan.component.html',
            styleUrls: ['plan.component.css'],
        }), 
        __metadata('design:paramtypes', [plan_service_1.PlanService])
    ], PlanTestComponent);
    return PlanTestComponent;
}());
exports.PlanTestComponent = PlanTestComponent;
//# sourceMappingURL=plan.component.js.map