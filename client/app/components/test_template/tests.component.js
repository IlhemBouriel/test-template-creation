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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var test_service_1 = require("../../services/test.service");
var TestsComponent = (function () {
    function TestsComponent(testService) {
        this.testService = testService;
        console.log('TestComponent created');
        this.stepNum = 1;
        this.templateString = '';
        this.message = '';
        this.load = __dirname + '/../src/images/loading.gif';
        this.done = __dirname + '/../src/images/spin.gif';
        this.finalTask = __dirname + '/../src/images/check-animation.gif';
        this.fullPath = '';
    }
    TestsComponent.prototype.buildTemplate = function (step) {
        if (this.stepNum == 1) {
            this.templateFile = step.doc + '.conf';
        }
        this.stepNum++;
        this.templateString = step.content;
    };
    TestsComponent.prototype.createTemplateFile = function (step) {
        var _this = this;
        this.fullPath = this.load;
        this.message = 'Saving File is in progress';
        this.openModal();
        if (this.stepNum == 1) {
            this.templateFile = step.doc + '.conf';
        }
        this.templateString = step.content;
        var content = this.templateString;
        content = content.replace(/\n/g, '\r');
        this.testService.createTemplate(this.templateFile, content)
            .subscribe(function (res) {
            _this.res = res;
            _this.message = 'ConfFile saved successfully';
            _this.fullPath = _this.done;
            setTimeout(function () {
                _this.closeModal();
            }, 1800);
        });
    };
    TestsComponent.prototype.lauchTestScript = function (template) {
        var _this = this;
        if (this.stepNum == 1) {
            this.templateFile = step.doc + '.conf';
        }
        this.templateString = template.content;
        var content = "'" + this.templateString + "'";
        content = content.replace(/\n/g, '\r');
        this.testService.launchTemplateTest(this.templateFile, content)
            .subscribe(function (res) {
            _this.res = res.data;
        });
    };
    TestsComponent.prototype.validateSteps = function (step) {
        if (this.stepNum == 1) {
            this.templateFile = step.doc + '.conf';
        }
        this.templateString = step.content;
        this.stepNum = 8;
        this.templateString = step.content;
    };
    TestsComponent.prototype.openModal = function () {
        var modal = document.getElementById('myModalConf');
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
    };
    TestsComponent.prototype.closeModal = function () {
        var modal = document.getElementById('myModalConf');
        modal.style.display = "none";
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TestsComponent.prototype, "definedSteps", void 0);
    TestsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tests',
            templateUrl: 'tests.component.html'
        }),
        __metadata("design:paramtypes", [test_service_1.TestService])
    ], TestsComponent);
    return TestsComponent;
}());
exports.TestsComponent = TestsComponent;
//# sourceMappingURL=tests.component.js.map