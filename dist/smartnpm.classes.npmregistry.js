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
            plugins.smartlog.defaultLogger.info(`Search on npm for ${plugins.consolecolor.coloredString(searchString, 'pink')}`);
            let body;
            try {
                let response = (yield plugins.smartrequest.getJson(this.searchDomain + searchString, {}));
                body = response.body;
            }
            catch (_a) {
                // we do nothing
            }
            // lets create the packageArray
            let packageArray = [];
            // if request failed just return it empty
            if (!body || typeof body === 'string') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRucG0uY2xhc3Nlcy5ucG1yZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0bnBtLmNsYXNzZXMubnBtcmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUs3QyxVQUFVO0FBQ1YsK0VBQTBEO0FBRTFELE1BQWEsV0FBVztJQUF4QjtRQUNVLGlCQUFZLEdBQUcsa0NBQWtDLENBQUE7SUF5RTNELENBQUM7SUF4RU8sTUFBTSxDQUFFLGVBQThCOztZQUMxQyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUE7WUFDckIsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLFlBQW9CLEVBQUUsRUFBRTtnQkFDL0MsWUFBWSxHQUFHLEdBQUcsWUFBWSxJQUFJLFlBQVksRUFBRSxDQUFBO1lBQ2xELENBQUMsQ0FBQTtZQUVELE9BQU87WUFDUCxJQUFJLGVBQWUsQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsWUFBWSxHQUFHLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFBO2FBQUU7WUFFdEUsV0FBVztZQUNYLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxpQkFBaUIsQ0FBQyxVQUFVLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO2FBQUU7WUFDckYsSUFBSSxlQUFlLENBQUMsVUFBVSxFQUFFO2dCQUFFLGlCQUFpQixDQUFDLGNBQWMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUE7YUFBRTtZQUNqRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLEVBQUU7Z0JBQUUsaUJBQWlCLENBQUMsU0FBUyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTthQUFFO1lBRWxGLFNBQVM7WUFDVCxJQUFJLGVBQWUsQ0FBQyxVQUFVLEVBQUU7Z0JBQzlCLElBQUksZUFBZSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7b0JBQ3ZDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFBO2lC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