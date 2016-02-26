# angular-load-more
Load more directive for ng-repeat.
## instructions

### step 1: the view
```
<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Load more</title>
	<!-- bootstrap -->
	<link rel="stylesheet" href="http://bootswatch.com/flatly/bootstrap.min.css">
	<!-- jquery -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"></script>
	<!-- angular -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
    <!-- app -->
    <script src="app.js"></script>
    <style type="text/css">
    	.content {
    		background-color:  #90CAF9;
            color: #212121;
            font-weight: bold;
            font-size: 5em;
            border: 5px solid white;
            text-align: center;
            padding: 75px;
    	}
    </style>
</head>
<body>
</body>
</html>
```

### step 2: the app
```
angular.module('app', []);
```

### step 3: the controller
```
app.controller('MainCtrl', function($scope) {
	// our list for the ng-repeat
	$scope.list = [{position : '1'},{position : '2'},{position : '3'},{position : '4'},{position : '5'},{position : '6'},{position : '7'},{position : '8'},{position : '9'},{position : '10'},{position : '11'},{position : '13'},{position : '14'},{position : '15'},{position : '16'},{position : '17'},{position : '18'},{position : '19'},{position : '20'},{position : '21'}]
})
```

### step 4: the directive
```
app.directive('loadMore', function() {
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
```

### step 5: add the controller and the ng-repeat to the view
```
<body ng-controller="MainCtrl">
    <!-- ng repeat using limitTo filter to limit the results with our scope called listLimit -->
	  <div ng-repeat="l in list | limitTo: listLimit" class="col-md-4 content">{{l.position}}</div>
    <div class="clearfix"></div>
    <hr />
</body>
```

### step 6: add the load more directive into the view
```
    <!-- ng repeat using limitTo filter to limit the results with our scope called listLimit -->
	  <div ng-repeat="l in list | limitTo: listLimit" class="col-md-4 content">{{l.position}}</div>
    <div class="clearfix"></div>
    <hr />
    <!-- the load more directive -->
    <load-more></load-more>
```
