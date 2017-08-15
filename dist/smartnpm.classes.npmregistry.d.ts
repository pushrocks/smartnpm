import { ISearchObject } from './smartnpm.interfaces';
import { NpmPackage } from './smartnpm.classes.npmpackage';
export declare class NpmRegistry {
    private searchDomain;
    search(searchObjectArg: ISearchObject): Promise<NpmPackage[]>;
}
