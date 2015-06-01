/**
 * @User: Jonas
 * @Date: 2015-04-27 10:19:34
 * @Version: 0.0.2
 */

define(function () {
    return angular.module("voyage.toolkit.enterClick", [])

        .directive("enterClick", function () {
            return {
                restrict: "A",
                link: function (scope, elem, attr) {
                    elem.keyup(function (e) {
                        if (e.keyCode == 13) {
                            angular.element(attr.enterClick).click();
                        }
                    });
                }
            };
        });
});