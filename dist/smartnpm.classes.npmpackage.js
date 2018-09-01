"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NpmPackage {
    constructor(descriptionArg) {
        this.name = null;
        this.scope = null;
        this.version = null;
        this.description = null;
        this.keywords = null;
        this.links = null;
        this.author = null;
        this.publisher = null;
        this.maintainers = null;
        this.score = null;
        this.searchScore = null;
        for (let key in descriptionArg) {
            if (this[key] === null) {
                this[key] = descriptionArg[key];
            }
        }
    }
}
exports.NpmPackage = NpmPackage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRucG0uY2xhc3Nlcy5ucG1wYWNrYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRucG0uY2xhc3Nlcy5ucG1wYWNrYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBYSxVQUFVO0lBOEJyQixZQUFhLGNBQWM7UUE3QjNCLFNBQUksR0FBVyxJQUFJLENBQUE7UUFDbkIsVUFBSyxHQUFXLElBQUksQ0FBQTtRQUNwQixZQUFPLEdBQVcsSUFBSSxDQUFBO1FBQ3RCLGdCQUFXLEdBQVcsSUFBSSxDQUFBO1FBQzFCLGFBQVEsR0FBYSxJQUFJLENBQUE7UUFFekIsVUFBSyxHQUtELElBQUksQ0FBQTtRQUNSLFdBQU0sR0FFRixJQUFJLENBQUE7UUFDUixjQUFTLEdBRUwsSUFBSSxDQUFBO1FBQ1IsZ0JBQVcsR0FBUSxJQUFJLENBQUE7UUFDdkIsVUFBSyxHQU9ELElBQUksQ0FBQTtRQUNSLGdCQUFXLEdBQVcsSUFBSSxDQUFBO1FBR3hCLEtBQUssSUFBSSxHQUFHLElBQUksY0FBYyxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUNoQztTQUNGO0lBQ0gsQ0FBQztDQUNGO0FBckNELGdDQXFDQyJ9