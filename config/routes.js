miModulo.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/',{templateUrl:'app/homeTemplate.html',controller:'homeController'})
    
    $routeProvider.when('/multi',{templateUrl:'app/multiplicacionTemplate.html',controller:'multiplicacionController'})
    $routeProvider.when('/suma',{templateUrl:'app/sumaTemplate.html',controller:'sumaController'})

    $routeProvider.when('/post/plist/:rpp/:page',{templateUrl:'app/post/plist.html',controller:'postPlistController'})

    $routeProvider.otherwise({redirectTo:'/'})


}])