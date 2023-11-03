import { ValidationStatusTreeComponent } from './validation-status-tree.component';

export * from './validation-status-tree.component';

// https://angular.io/guide/standalone-components#standalone-components-for-library-authors
// "As an alternative to publishing a NgModule, library authors might want to export an array of cooperating directives"
export const VALIDATION_STATUS_TREE_DIRECTIVES = [ValidationStatusTreeComponent] as const;
