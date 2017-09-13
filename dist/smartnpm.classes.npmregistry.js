"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartnpm.plugins");
// classes
const smartnpm_classes_npmpackage_1 = require("./smartnpm.classes.npmpackage");
class NpmRegistry {
    constructor() {
        this.searchDomain = 'https://api.npms.io/v2/search?q=';
    }
    search(searchObjectArg) {
        return __awaiter(this, void 0, void 0, function* () {
            let searchString = '';
            let addToSearchString = (addStringArg) => {
                searchString = `${searchString}+${addStringArg}`;
            };
            // name
            if (searchObjectArg.name) {
                searchString = `${searchObjectArg.name}`;
            }
            // metadata
            if (searchObjectArg.author) {
                addToSearchString(`author:${searchObjectArg.author}`);
            }
            if (searchObjectArg.maintainer) {
                addToSearchString(`maintainer:${searchObjectArg.maintainer}`);
            }
            if (searchObjectArg.scope) {
                addToSearchString(`scope:${searchObjectArg.scope}`);
            }
            // status
            if (searchObjectArg.deprecated) {
                if (searchObjectArg.deprecated === true) {
                    addToSearchString(`is:deprecated`);
                }
                else {
                    addToSearchString(`not:deprecated`);
                }
            }
            if (searchObjectArg.unstable) {
                if (searchObjectArg.unstable === true) {
                    addToSearchString(`is:unstable`);
                }
                else {
                    addToSearchString(`not:unstable`);
                }
            }
            if (searchObjectArg.insecure) {
                if (searchObjectArg.insecure === true) {
                    addToSearchString(`is:insecure`);
                }
                else {
                    addToSearchString(`not:insecure`);
                }
            }
            // search behaviour
            if (searchObjectArg.boostExact) {
                addToSearchString(`boost-exact:${searchObjectArg.boostExact}`);
            }
            if (searchObjectArg.scoreEffect) {
                addToSearchString(`score-effect:${searchObjectArg.scoreEffect}`);
            }
            // analytics
            if (searchObjectArg.qualityWeight) {
                addToSearchString(`author:${searchObjectArg.qualityWeight}`);
            }
            if (searchObjectArg.popularityWeight) {
                addToSearchString(`author:${searchObjectArg.popularityWeight}`);
            }
            if (searchObjectArg.maintenanceWeight) {
                addToSearchString(`author:${searchObjectArg.maintenanceWeight}`);
            }
            plugins.beautylog.log(`Search on npm for ${plugins.beautycolor.coloredString(searchString, 'pink')}`);
            let response = (yield plugins.smartrequest.get(this.searchDomain + searchString, {}));
            let body = response.body;
            // lets create the response
            let packageArray = [];
            if (typeof body === 'string') {
                return packageArray;
            }
            for (let packageArg of body.results) {
                let localPackage = new smartnpm_classes_npmpackage_1.NpmPackage(packageArg.package);
                packageArray.push(localPackage);
            }
            return packageArray;
        });
    }
}
exports.NpmRegistry = NpmRegistry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRucG0uY2xhc3Nlcy5ucG1yZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0bnBtLmNsYXNzZXMubnBtcmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUs3QyxVQUFVO0FBQ1YsK0VBQTBEO0FBRTFEO0lBQUE7UUFDVSxpQkFBWSxHQUFHLGtDQUFrQyxDQUFBO0lBZ0UzRCxDQUFDO0lBL0RPLE1BQU0sQ0FBRSxlQUE4Qjs7WUFDMUMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFBO1lBQ3JCLElBQUksaUJBQWlCLEdBQUcsQ0FBQyxZQUFvQjtnQkFDM0MsWUFBWSxHQUFHLEdBQUcsWUFBWSxJQUFJLFlBQVksRUFBRSxDQUFBO1lBQ2xELENBQUMsQ0FBQTtZQUVELE9BQU87WUFDUCxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFBQyxZQUFZLEdBQUcsR0FBRyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUE7WUFBQyxDQUFDO1lBRXRFLFdBQVc7WUFDWCxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFBQyxpQkFBaUIsQ0FBQyxVQUFVLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1lBQUMsQ0FBQztZQUNyRixFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFBQyxpQkFBaUIsQ0FBQyxjQUFjLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO1lBQUMsQ0FBQztZQUNqRyxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFBQyxpQkFBaUIsQ0FBQyxTQUFTLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBQUMsQ0FBQztZQUVsRixTQUFTO1lBQ1QsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFD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