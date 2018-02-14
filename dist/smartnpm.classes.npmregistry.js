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
            let body;
            try {
                let response = (yield plugins.smartrequest.get(this.searchDomain + searchString, {}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRucG0uY2xhc3Nlcy5ucG1yZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0bnBtLmNsYXNzZXMubnBtcmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUs3QyxVQUFVO0FBQ1YsK0VBQTBEO0FBRTFEO0lBQUE7UUFDVSxpQkFBWSxHQUFHLGtDQUFrQyxDQUFBO0lBeUUzRCxDQUFDO0lBeEVPLE1BQU0sQ0FBRSxlQUE4Qjs7WUFDMUMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFBO1lBQ3JCLElBQUksaUJBQWlCLEdBQUcsQ0FBQyxZQUFvQixFQUFFLEVBQUU7Z0JBQy9DLFlBQVksR0FBRyxHQUFHLFlBQVksSUFBSSxZQUFZLEVBQUUsQ0FBQTtZQUNsRCxDQUFDLENBQUE7WUFFRCxPQUFPO1lBQ1AsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUMsWUFBWSxHQUFHLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQUMsQ0FBQztZQUV0RSxXQUFXO1lBQ1gsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQUMsaUJBQWlCLENBQUMsVUFBVSxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtZQUFDLENBQUM7WUFDckYsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsaUJBQWlCLENBQUMsY0FBYyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtZQUFDLENBQUM7WUFDakcsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQUMsaUJBQWlCLENBQUMsU0FBUyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUFDLENBQUM7WUFFbEYsU0FBUztZQUNULEVBQUUsQ0FBQyxDQUFD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