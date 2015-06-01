/**
 * @User: Jonas
 * @Date: 2015-3-31 14:39:26
 * @Version: 0.0.4
 */

define(function () {
    angular.module("voyage.toolkit.dialogs", [])

        .factory("vAlert", [
            "ngDialog",
            function (ngDialog) {
                return function (content, title) {
                    return $dialogs(true, content, title || "<i class=\"fa fa-exclamation-triangle\"></i> Alert", ngDialog);
                };
            }
        ])

        .factory("vConfirm", [
            "ngDialog",
            function (ngDialog) {
                return function (content, title) {
                    return $dialogs(false, content, title || "<i class=\"fa fa-exclamation-triangle\"></i> Confirm", ngDialog);
                };
            }
        ])

        .directive("vConfirm", [
            "$parse",
            "vConfirm", function ($parse, confirm) {
                return {
                    restrict: "A",
                    link: function ($scope, ele, attr) {
                        var callKey = "yes";
                        ele.click(function () {
                            confirm(attr["vConfirm"]).then(function () {
                                if (ele.data(callKey)) $scope.$eval(ele.data(callKey));
                            });
                        });
                    }
                };
            }]);

    function $dialogs(isAlert, content, title, ngDialog) {

        return ngDialog.openConfirm({
            template: "components/directives/dialogs/dialogs.tpl.html",
            controller: ["$scope", function (scope) {
                scope.isAlert = isAlert;
                scope.content = content;
                scope.title = title;
            }]
        });

    }
});