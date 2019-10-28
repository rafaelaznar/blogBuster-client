miModulo.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/',{templateUrl:'app/homeTemplate.html',controller:'homeController'})
    $routeProvider.when('/post/plist/:rpp/:page',{templateUrl:'app/post/plist/plist.html',controller:'postPlistController'})
    $routeProvider.when('/post/remove/:id',{templateUrl:'app/post/remove/remove.html',controller:'postRemoveController'})
    $routeProvider.when('/post/view/:id',{templateUrl:'app/post/view/view.html',controller:'postViewController'})
    $routeProvider.when('/post/edit/:id',{templateUrl:'app/post/edit/edit.html',controller:'postEditController'})
    $routeProvider.when('/post/new',{templateUrl:'app/post/new/new.html',controller:'postNewController'})    
    $routeProvider.when('/home/:rpp/:page',{templateUrl:'app/homeTemplate.html',controller:'homeController'})
    $routeProvider.otherwise({redirectTo:'/'})

}])