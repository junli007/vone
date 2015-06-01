/**
 * @Name:    alertService.js
 * @Date:    2015/1/30
 *
 * @User:    Edward
 * @Version: 1.0.0
 */

define (function (require) {

    var mainApp = require ('components/app');

    mainApp.constant ("alertType", {
        "validation_error": "danger",
        "error": "danger",
        "success": "success",
        "warning": "warning"
    });

    // define alertService to use alert message on view.
    mainApp.service ('alertService', ['$rootScope', 'alertType',
        function ($rootScope, alertType) {

            var _ = require ("underscore");
            $rootScope.alerts = [];
            //$rootScope.messageBox = "";

            $rootScope.closeAlert = function(index) {
                $rootScope.alerts.splice(index, 1);
            };

            // clear all message.
            this.clearMessage = function () {
                $rootScope.alerts = [];
                //$rootScope.messageBox = "";
            };

            /**
             * set validate error info.
             * @param scope
             * @param validationErrors
             * @constructor
             */
            this.SetValidationErrors = function (scope, validationErrors) {
                $rootScope.alerts = [];
                for (var i = 0; i < validationErrors.length; i++) {
                    var property = validationErrors[i].field + "InputError";
                    var message = "";
                    scope[property] = true;
                    // TODO 还无法国际化field
                    message = validationErrors[i].field + ':' + validationErrors[i].message;
                    //message.push ();
                    $rootScope.alerts.push ({'type': alertType.validation_error, 'msg': message});
                }
                //var messageBox = formatMessage (message);
            };

            /**
             * set the error info.
             * @param message
             * @constructor
             */
            this.RenderErrorMessage = function (message) {
                var message = formatMessage (message);
                $rootScope.alerts = [];
                //$rootScope.messageBox = messageBox;
                $rootScope.alerts.push ({'type': alertType.error, 'msg': message});
            };

            /**
             * set the warning info.
             * @param message
             * @constructor
             */
            this.RenderWarningMessage = function (message) {
                var message = formatMessage (message);
                $rootScope.alerts = [];
                $rootScope.alerts.push ({'type': alertType.warning, 'msg': message});
            };

            /**
             * set the success info.
             * @param message
             * @constructor
             */
            this.RenderSuccessMessage = function (message) {
                var message = formatMessage (message);
                $rootScope.alerts = [];
                $rootScope.alerts.push ({'type': alertType.success, 'msg': message});
            };

            /**
             * edit the message.
             * @param message
             * @returns {string}
             */
            function formatMessage (message) {
                var messageBox = "";

                if (_.isArray (message)) {
                    for (var i = 0; i < message.length; i++) {
                        messageBox = messageBox + message[i] + "<br/>";
                    }
                }
                else {
                    messageBox = message;
                }
                return messageBox;
            }
        }]);
});