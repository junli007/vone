/**
 * @Name:    main.js
 * @Date:    2015/1/30
 *
 * @User:    Edward
 * @Version: 1.0.0
 */

require.config({

    paths: {
        'jquery': 'dep/jquery/jquery.min',
        'angular': 'dep/base',
        'angularAMD': 'dep/angular-amd/angular-amd',
        'angular-block-ui': 'dep/angular-block-ui/angular-block-ui.min',
        'angular-bootstrap-nav-tree': 'dep/angular-bootstrap-nav-tree/abn_tree_directive.min',
        'angular-file-upload': 'dep/angular-file-upload/angular_file_upload.min',
        'angular-ui-select': 'dep/angular-ui-select/select.min',
        'angular-xeditable': 'dep/angular-xeditable/xeditable.min',
        'angular-translate': 'dep/angular-translate/angular-translate.min',
        'ngDialog': 'dep/ngDialog/ngDialog',
        'ngGrid': 'dep/ng-grid/ng-grid.debug',
        'underscore': 'dep/underscore/underscore-min',
        'flow': 'dep/ng-flow/ng-flow-standalone.min',
        'app': 'components/app',
        'bootstrap': 'components/bootstrap',
        'chosen': "dep/chosen/chosen.jquery.min",
        'angular-chosen': "dep/chosen/angular-chosen-localytics/chosen"
    },

    shim: {
        'jquery': {exports: '$'},
        'angular': {exports: 'angular'},
        'angularAMD': {deps: ['angular']},
        'angular-block-ui': {deps: ['angular']},
        'angular-bootstrap-nav-tree': {deps: ['angular']},
        'angular-file-upload': {deps: ['angular']},
        'angular-ui-select': {deps: ['angular']},
        'angular-xeditable': {deps: ['angular']},
        'angular-translate': {deps: ['angular']},
        'ngDialog': {deps: ['angular']},
        'ngGrid': {deps: ['angular']},
        'flow': {deps: ['angular']},
        'underscore': {deps: ['angular']},
        'bootstrap': {deps: ['jquery', 'angular', 'angular-chosen']},
        'chosen':{deps:['jquery']},
        'angular-chosen':{deps:['chosen', 'angular']}
    },

    deps: ['bootstrap']
});