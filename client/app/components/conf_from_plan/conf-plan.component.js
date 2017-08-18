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
var plan_conf_service_1 = require("../../services/plan-conf.service");
var ConfPlanComponent = (function () {
    function ConfPlanComponent(planConfService) {
        this.planConfService = planConfService;
        this.filesToUpload = [];
        this.content = [{}];
        this.uploadStatus = 'empty';
        this.content = null;
    }
    ConfPlanComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append("uploads[]", files[0], files[0]['name']);
        this.planConfService.uploadTestPlan(formData)
            .subscribe(function (res) {
            _this.res = res;
            _this.uploadStatus = 'done';
            _this.getUploadedFileContent(files[0]['name']);
        });
    };
    ConfPlanComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        this.content = '';
        this.uploadStatus = "empty";
    };
    ConfPlanComponent.prototype.remove = function () {
        this.filesToUpload = [];
        this.uploadStatus = "empty";
        this.content = null;
    };
    ConfPlanComponent.prototype.getUploadedFileContent = function (fileName) {
        var _this = this;
        this.planConfService.getFileContent(fileName)
            .subscribe(function (res) {
            console.log("object: %O", res.data);
            if (res.data) {
                console.log("object: %O", res.data);
                _this.content = res.data;
            }
            else {
                _this.content = null;
            }
        });
    };
    ConfPlanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'conf-plan',
            templateUrl: 'conf-plan.component.html',
            styleUrls: ['conf-plan.component.css']
        }),
        __metadata("design:paramtypes", [plan_conf_service_1.PlanConfService])
    ], ConfPlanComponent);
    return ConfPlanComponent;
}());
exports.ConfPlanComponent = ConfPlanComponent;
//# sourceMappingURL=conf-plan.component.js.map