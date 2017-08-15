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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRucG0uY2xhc3Nlcy5ucG1wYWNrYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRucG0uY2xhc3Nlcy5ucG1wYWNrYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUE4QkUsWUFBYSxjQUFjO1FBN0IzQixTQUFJLEdBQVcsSUFBSSxDQUFBO1FBQ25CLFVBQUssR0FBVyxJQUFJLENBQUE7UUFDcEIsWUFBTyxHQUFXLElBQUksQ0FBQTtRQUN0QixnQkFBVyxHQUFXLElBQUksQ0FBQTtRQUMxQixhQUFRLEdBQWEsSUFBSSxDQUFBO1FBRXpCLFVBQUssR0FLRCxJQUFJLENBQUE7UUFDUixXQUFNLEdBRUYsSUFBSSxDQUFBO1FBQ1IsY0FBUyxHQUVMLElBQUksQ0FBQTtRQUNSLGdCQUFXLEdBQVEsSUFBSSxDQUFBO1FBQ3ZCLFVBQUssR0FPRCxJQUFJLENBQUE7UUFDUixnQkFBVyxHQUFXLElBQUksQ0FBQTtRQUd4QixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2pDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztDQUNGO0FBckNELGdDQXFDQyJ9