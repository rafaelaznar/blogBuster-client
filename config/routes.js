miModulo.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/home',{templateUrl:'app/homeTemplate.html',controller:'homeController'});
    $routeProvider.when('/plist',{templateUrl:'app/post/plist/plistTemplate.html',controller:'plistController'});
    $routeProvider.otherwise({redirectTo:'/home'});


}])