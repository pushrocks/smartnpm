export interface ISearchObject {
    name?: string;
    author?: string;
    maintainer?: string;
    scope?: string;
    keywords?: string[];
    deprecated?: boolean;
    unstable?: boolean;
    insecure?: boolean;
    boostExact?: boolean;
    scoreEffect?: number;
    qualityWeight?: number;
    popularityWeight?: number;
    maintenanceWeight?: number;
}
