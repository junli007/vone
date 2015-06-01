/**
 * @Name:    message.service.js
 * @Date:    2015/4/29
 *
 * @User:    Edward
 * @Version: 1.0.0
 */

define (function (require) {

    var mainApp = require ('components/app');
    require ("components/services/alert.service");
    require ("components/services/cookie.service");
    require ("components/services/language.service");

    mainApp.constant ("messageType", {
        // success.
        "messageType_0": 0,
        // validation error.
        "messageType_1": 1,
        // business exception error.
        "messageType_2": 2,
        // session error.
        "messageType_3": 3,
        // token error.
        "messageType_4": 4,
        // system exception error.
        "messageType_5": 5,
        // business warning.
        "messageType_6": 6
    });

    mainApp.constant ("messageKeys", {

        ID_200002: 'ID_200002',
        ID_200003: 'ID_200003',
        ID_200004: 'ID_200004',
        ID_200005: 'ID_200005',
        ID_200006: 'ID_200006',
        ID_000001: 'ID_000001',
        ID_000002: 'ID_000002',
        ID_000003: 'ID_000003',
        ID_000004: 'ID_000004'
        //return require ("components/messages/message.key");
    });

    mainApp.service ("messageService", ["languageType", "alertService", "cookieService",
        function (languageType, alertService, cookieService) {

            var _ = require ("underscore");
            var messageEn = require ("components/messages/message.en");
            var messageZh = require ("components/messages/message.zh");
            var messageJoiner = ": ";
            var defaultMessage = "";

            this.formatMessage = function (key, value) {
                var message = "";
                if (_.isEmpty (key))
                    message = value;
                else if (_.isEmpty (value))
                    message = defaultMessage;
                else
                    message = key + messageJoiner + value;

                return message;
            };

            this.getMessage = function (key, language) {

                var _ = require ("underscore");
                var message = "";

                switch (language) {
                    case languageType.en:
                        message = _.property (key) (messageEn);
                        break;
                    case languageType.zh:
                        message = _.property (key) (messageZh);
                        break;
                    default :
                        message = _.property (key) (messageEn);
                        break;
                }

                return this.formatMessage (key, message);
            };

            this.getMessageByKey = function (key) {

                var _ = require ("underscore");
                var message = "";

                if (!_.isEmpty(key)) {
                    message = this.getMessage (key, cookieService.getSelLanguage ());
                }

                return message;
            };

            this.alertMessage = function (key) {
                var message = this.getMessage (key, cookieService.getSelLanguage ());
                alertService.RenderWarningMessage (message);
            }
        }]);
});