/**
 * @Name:    ajaxService.js
 * @Date:    2015/2/3
 *
 * @User:    Edward
 * @Version: 1.0.0
 */

define (function (require) {

    var mainApp = require ("components/app");
    require ("components/services/alert.service");

    // define ajaxService for getting json data from server.
    mainApp.service ("ajaxService", ["$q", "$http", "blockUI", "alertService",
        function ($q, $http, blockUI, alertService) {

            var _ = require ("underscore");
            var PROJECT_NAME = "/VoyageOne";

            /**
             * get the server"s response by ajax.
             * @param data
             * @param url
             * @param scope
             * @constructor
             */
            this.ajaxPost = function (data, url, scope) {
                blockUI.start ();
                var defer = $q.defer ();

                var url = PROJECT_NAME + url;
                $http.post (url, data)
                    .success (function (response) {
                    blockUI.stop ();
                    var responseData = {};
                    responseData.data = response.resultInfo;
                    responseData.next = response.forward;
                    defer.resolve (responseData);
                })
                    .error (function (response, status) {
                    blockUI.stop ();
                    if (_.isEqual (status, 900)) {
                        alertService.SetValidationErrors (scope, response.formValidateList);
                        defer.reject (response.formValidateList);
                    }
                    //alertService.RenderErrorMessage(response.message);
                    defer.reject (response);
                });
                return defer.promise;
            };

            /**
             * get the server"s response by id.
             * @param id
             * @param url
             * @returns {promise.promise|jQuery.promise|d.promise|promise|r.promise|jQuery.ready.promise|*}
             * @constructor
             */
            this.ajaxPostByIdWithoutValidate = function (id, url) {
                var params = {"id": id};
                return this.ajaxPost (params, url, null);
            };

            /**
             * get the server"s reponse without data and scope.
             * @param url
             */
            this.ajaxPostOnlyByUrl = function (url) {
                return this.ajaxPost (null, url, null);
            };

            /**
             * get the server"s response without data by ajax.
             * @param url
             * @param scope
             * @constructor
             */
            this.ajaxPostWithValidate = function (url, scope) {
                return this.ajaxPost (null, url, scope);
            };

            /**
             * get the server"s response without scope by ajax.
             * @param data
             * @param url
             * @constructor
             */
            this.ajaxPostWithData = function (data, url) {
                return this.ajaxPost (data, url, null);
            };
        }]);
});