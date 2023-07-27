import { BasicPreComponent } from './basic-pre.component';

export * from './basic-pre.component';

// https://angular.io/guide/standalone-components#standalone-components-for-library-authors
// "As an alternative to publishing a NgModule, library authors might want to export an array of cooperating directives"
export const BASIC_PRE_DIRECTIVES = [BasicPreComponent] as const;
