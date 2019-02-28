angular.module('pdf')
    .directive('pdfViewerToolbar', [
        'pdfDelegate',
        function (pdfDelegate) {
            return {
                restrict: 'E',
                template:
                    '<div class="clearfix mb2 white bg-blue">' +
                    '<div class="panel-head">' +
                    '<a title="Back" href=""' +
                    'ng-click="prev()"' +
                    'class="button py2 m0 button-nav-dark">  <i class="fa fa-backward"></i>' +
                    '</a>' +
                    '<a  title="Next" href=""' +
                    'ng-click="next()"' +
                    'class="button py2 m0 button-nav-dark">  <i class="fa fa-forward"></i>' +
                    '</a>' +
                    '<a  title="Zoom In" href=""' +
                    'ng-click="zoomIn()"' +
                    'class="button py2 m0 button-nav-dark"> <i class="fa fa-search-plus"></i>' +
                    '</a>' +
                    '<a title="Zoom Out" href=""' +
                    'ng-click="zoomOut()"' +
                    'class="button py2 m0 button-nav-dark"><i class="fa fa-search-minus"></i>' +
                    '</a>' +
                    '<a title="Rotate left" href=""' +
                    'ng-click="rotate()"' +
                    'class="button py2 m0 button-nav-dark"><i class="icon-flipped fa fa-undo"></i>' +
                    '</a>' +
                    '<span class="px1 button-nav-dark">Page</span> ' +
                    '<input type="number" style="width: 63px; padding-left: 10px !important;" class="field-dark" ' +
                    'min="1" max="{{pageCount}}" steep="1" ng-model="currentPage" ng-change="goToPage()" ' +
                    'style="width: 10%"> ' +
                    '<span class="px1 button-nav-dark">/ {{pageCount}}</span> ' +
                    '</div>' +
                    '</div>',
                scope: { pageCount: '=' },
                link: function (scope, element, attrs) {
                    var id = attrs.delegateHandle;
                    scope.currentPage = 1;

                    scope.prev = function () {
                        pdfDelegate
                            .$getByHandle(id)
                            .prev();
                        updateCurrentPage();
                    };
                    scope.next = function () {
                        pdfDelegate
                            .$getByHandle(id)
                            .next();
                        updateCurrentPage();
                    };
                    scope.zoomIn = function () {
                        pdfDelegate
                            .$getByHandle(id)
                            .zoomIn();
                    };
                    scope.zoomOut = function () {
                        pdfDelegate
                            .$getByHandle(id)
                            .zoomOut();
                    };
                    scope.rotate = function () {
                        pdfDelegate
                            .$getByHandle(id)
                            .rotate();
                    };
                    scope.goToPage = function () {
                        pdfDelegate
                            .$getByHandle(id)
                            .goToPage(scope.currentPage);
                    };

                    var updateCurrentPage = function () {
                        scope.currentPage = pdfDelegate
                            .$getByHandle(id)
                            .getCurrentPage();
                    };
                }
            };
        }]);
