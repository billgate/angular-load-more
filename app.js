// declaring our app
angular.module('app', [])
// app controller
.directive('loadMore', function() {
	return {
		template: "<div class='col-md-6 col-md-offset-3'><button class='btn btn-sm btn-block btn-primary' ng-click='loadMore()' id='loadButton'>LOAD MORE</button></div>",
		link: function(scope) {
			// scope defining the numbers of results to show
			scope.listLimit = 3;
			// scope receving the load more click and calling the function to show more results
			scope.loadMore = function() {
				// adds 3 more to listLimit
				scope.listLimit += 3;
				// check to see if the list array is bigger then listLimit, and if so hide the load more button
				if (scope.list.length < scope.listLimit) {
					angular.element(loadButton).fadeOut();
				}
			}
		}
	}
})
.controller('MainCtrl', function($scope) {
	// our list scope
	$scope.list = [{position : '1'},{position : '2'},{position : '3'},{position : '4'},{position : '5'},{position : '6'},{position : '7'},{position : '8'},{position : '9'},{position : '10'},{position : '11'},{position : '13'},{position : '14'},{position : '15'},{position : '16'},{position : '17'},{position : '18'},{position : '19'},{position : '20'},{position : '21'}]
})
