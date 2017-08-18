"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HighlightSearch = (function () {
    function HighlightSearch() {
    }
    HighlightSearch.prototype.transform = function (value, args) {
        if (args != null) {
            var endLength = args.length;
            var startIndex = 0;
            var index = void 0;
            while (index = value.toLowerCase().indexOf(args.toLowerCase(), startIndex) > -1) {
                var matchingString = value.substr(index, endLength);
                value.replace(matchingString, "<mark>" + matchingString + "</mark>");
                startIndex = index + endLength;
            }
            return value;
        }
    };
    HighlightSearch = __decorate([
        core_1.Pipe({
            name: 'highligh'
        })
    ], HighlightSearch);
    return HighlightSearch;
}());
exports.HighlightSearch = HighlightSearch;
//# sourceMappingURL=high-filter.js.map