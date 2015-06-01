/**
 * @Name:    angular-bootstrap.js
 * @Date:    2015/1/30
 *
 * @User:    Edward
 * @Version: 1.0.0
 */

define (function (require) {

    // require the js file for bootstrap the mainApp.
    var angularAMD = require ('angularAMD');
    var mainApp = require ('components/app');

    // define the $httpProvider.
    mainApp.config (['$httpProvider',
        function ($httpProvider) {

            require ('components/services/interceptor.factory');

            // add a interceptor to deal with the request/response info.
            $httpProvider.interceptors.push ('interceptorFactory');
        }]);

    require ('modules/app/app.route');

    // require the route file for core.
    require ('modules/core/core.route');
    // require the route file for oms.
//    require ('modules/oms/oms.route');

    //引入需要在app启动的时候加载的ctl
    require ('modules/app/common/index.ctl');
    require ('modules/app/common/common.ctl');
    require ('modules/app/common/error.ctl');

    //引入需要在app启动的时候加载的directive
    require ("components/directives/notify.directive");
    require ("components/directives/dropdownAppendToBody.directive");
    require ("components/directives/contextMenu.directive");
    
    require ("components/directives/panel-tools.directive");
    require ("components/directives/table.directive");
    require ("components/directives/image.directive");
    require ("components/directives/popNewWin.directive");

    // add a listener to check when the location.path has been changed,
    // the login user have access to this page or not.
    require ('modules/app/services/user.service');
    mainApp.run (['$rootScope', '$location', 'userService',
        function ($rootScope, $location, userService) {

            $rootScope.$on ('$routeChangeStart',
                function (evt) {

                    // when the user has been login,and selected company,
                    // then check the user has the pagePermission
                    if (!userService.hasPagePermission ($location.path ())) {

                        // don't route to new page.
                        evt.preventDefault ();
                    }
                });

            $rootScope.$on ('$routeChangeSuccess',
                function () {

                    // set current page's navigationInfo.
                    userService.setCurrentNavigationInfo ();

                    // when the location has been changed ,then change the navigation info.
                    $rootScope.$broadcast ('setNavigation');
                })
        }]);

    // start the angular.
    angularAMD.bootstrap (mainApp);
});