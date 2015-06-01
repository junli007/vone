/**
 * @Name:    interceptorFactory.js
 * @Date:    2015/2/15
 *
 * @User:    Edward
 * @Version: 1.0.0
 */

define (function (require) {

    var mainApp = require ('components/app');
    require ('components/services/cookie.service');
    require ('components/services/permission.service');
    require ('components/services/alert.service');
    require ('components/services/message.service');
    require ('modules/app/services/user.service');

    // define a factory on mainApp for save the permissions of login user.
    mainApp.factory ('interceptorFactory', ['$q', '$location', 'userService', 'cookieService', 'permissionService', 'alertService', 'messageType', 'messageService', 'commonRoute',
        function ($q, $location, userService, cookieService, permissionService, alertService, messageType, messageService, commonRoute) {

            var _ = require ('underscore');
            var commonUtil = require ('components/util/commonUtil');

            return {
                /**
                 * set the token/sellanguage/selCompany info to header.
                 * @param config
                 * @returns {*}
                 */
                request: function (config) {
                    //if (userService.isLogin) {
                    config.headers['voyageone.user.token'] = cookieService.getToken ();
                    config.headers['voyageone.user.lang'] = cookieService.getSelLanguage ();
                    config.headers['voyageone.user.company'] = cookieService.getSelCompany ();
                    //}
                    return config;
                },
                /**
                 * get the response and operate the response info by the messageType
                 * @param response
                 * @returns {r.promise|promise|qFactory.Deferred.promise|x.ready.promise|fd.g.promise}
                 */
                response: function (response) {
                    var defer = $q.defer ();
                    if (checkMessageType (response))
                        defer.resolve (response);
                    else
                        defer.reject (response);
                    return defer.promise;
                },
                requestError: function (config) {
                    return config;
                },
                responseError: function (response) {
                    // TODO
                    //alertService.RenderErrorMessage(response.message);
                    sessionStorage.clear();
                    userService.init ();
                    cookieService.init ();
                    //commonUtil.goToErrorPage ();
                    $location.path(commonRoute.common_error_index.hash);
                }
            };

            /**
             * check messageType.
             * @param response
             * @returns {*}
             */
            function checkMessageType (response) {
                var messageTypeId = response.data.messageType;
                var message = messageService.formatMessage (response.data.messageCode, response.data.message);
                var result = true;

                // clear all message.
                alertService.clearMessage ();

                // set the token to cookie when the token is not empty.
                if (!_.isEmpty (response.data.token))
                    cookieService.setToken (response.data.token);

                switch (messageTypeId) {
                    case messageType.messageType_0:
                        if (!_.isEmpty (message))
                            alertService.RenderSuccessMessage (message);
                        permissionService.setPermissions (response.data.permissions);
                        result = true;
                        break;
                    case messageType.messageType_1:
                        response.status = 900;
                        result = false;
                        break;
                    case messageType.messageType_2:
                        alertService.RenderErrorMessage (message);
                        result = false;
                        break;
                    case messageType.messageType_3:
                        cookieService.removeAll ();
                        commonUtil.goToLoginPage ();
                        result = false;
                        break;
                    case messageType.messageType_4:
                        // TODO
                        result = false;
                        break;
                    case messageType.messageType_5:
                        cookieService.removeAll ();
                        //commonUtil.goToErrorPage ();
                        $location.path(commonRoute.common_error_index.hash);
                        result = false;
                        break;
                    case messageType.messageType_6:
                        alertService.RenderWarningMessage (message);
                        result = true;
                        break;
                    default:
                        break;
                }

                return result;
            }
        }]);
});