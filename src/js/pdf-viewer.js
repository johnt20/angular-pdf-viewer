angular.module('pdf')
    .directive('pdfViewer', [
        '$window',
        '$log',
        'pdfDelegate',
        function ($window, $log, pdfDelegate) {
            return {
                restrict: 'E',
                template: '<pdf-viewer-toolbar ng-if="showToolbar" delegate-handle="{{id}}" page-count="pageCount"></pdf-viewer-toolbar>    <div class="free dragscroll"><canvas></canvas> </div><pdf-viewer-toolbar ng-if="showToolbar" ng-hide="hideToolbarBottom" delegate-handle="{{id}}" page-count="pageCount"></pdf-viewer-toolbar>',
                scope: true,
                controller: 'PdfCtrl',
                link: function (scope, element, attrs) {
                    scope.id = attrs.delegateHandle;
                    scope.showToolbar = scope.$eval(attrs.showToolbar) || false;
                    scope.hideToolbarBottom = scope.$eval(attrs.hideToolbarBottom) || false;
                    dragscroll.reset();
                }
            };
        }]);
