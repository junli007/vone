/**
 * @Name:    context menu
 * @Date:    2015-05-13 12:55:42
 *
 * @User:    Jonas
 * @Version: 0.0.1
 */

define(["components/app"], function(app){
    var isBinded = false;
    var opener;

    app.directive("contextMenu", function ($document, $position) {
        return {
            restrict: "A",
            link: function(scope, elem, attr) {
                var elemId = attr.contextMenu;
                if (!elemId) return;

                var menu = $document.find("#" + elemId);

                elem.click(openMenu);

                function openMenu(evt) {
                    var pos = $position.positionElements(elem, menu, "bottom-left", false);

                    menu.css({
                        top: pos.top + 'px',
                        left: pos.left + 'px',
                        display: 'block'
                    });

                    opener = evt.target;

                    doBind(false);
                }

                function closeMenu(evt) {
                    if (evt.target == opener) {
                        return;
                    }

                    menu.css({
                        display: 'none'
                    });

                    doBind(true);
                }

                function doBind(isUn) {
                    if (!isUn && isBinded) return;
                    $document[isUn ? 'unbind':'bind']('click', closeMenu);
                    isBinded = !isUn;
                }
            }
        }
    });
});