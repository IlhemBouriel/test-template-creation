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
var tags_service_1 = require('../../services/tags.service');
var TagsComponent = (function () {
    function TagsComponent(tagService) {
        var _this = this;
        this.tagService = tagService;
        this.tagService.getTagFiles()
            .subscribe(function (vars) {
            _this.tagFiles = vars.data;
        });
        this.selectedTagFile = '';
    }
    TagsComponent.prototype.onSelectTagFile = function (newFile) {
        var _this = this;
        if (newFile.length > 0) {
            this.tagService.getTagFileContent(this.selectedTagFile)
                .subscribe(function (vars) {
                _this.contentTagFile = vars.data;
                document.getElementById("textArea").value = _this.contentTagFile;
            });
        }
        else {
            this.contentTagFile = '';
        }
    };
    TagsComponent.prototype.saveTagFile = function () {
        var _this = this;
        var content = document.getElementById("textArea").value;
        this.tagService.editTagFile(this.selectedTagFile, content)
            .subscribe(function (vars) {
            // console.log("object: %O", vars);
            _this.contentTagFile = vars.data;
        });
    };
    TagsComponent.prototype.reloadTagFile = function () {
        //reload file
    };
    TagsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tagFile',
            templateUrl: 'tags.component.html',
            styleUrls: ['tags.component.css'],
        }), 
        __metadata('design:paramtypes', [tags_service_1.TagService])
    ], TagsComponent);
    return TagsComponent;
}());
exports.TagsComponent = TagsComponent;
//# sourceMappingURL=tags.component.js.map