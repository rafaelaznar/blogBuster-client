var anyPromise = function (sessionService) {
    return sessionService.anyPromise();
}

var authPromise = function (sessionService) {
    return sessionService.authPromise();
}

miModulo.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/homeTemplate.html',
            controller: 'homeController',
            resolve: { auth: anyPromise }
        })
        $routeProvider.when('/post/plist/:rpp/:page', {
            templateUrl: 'app/post/plist/plist.html',
            controller: 'postPlistController',
            resolve: { auth: authPromise }
        })
        $routeProvider.when('/post/remove/:id', {
            templateUrl: 'app/post/remove/remove.html',
            controller: 'postRemoveController',
            resolve: { auth: authPromise }
        })
        $routeProvider.when('/post/view/:id', {
            templateUrl: 'app/post/view/view.html',
            controller: 'postViewController',
            resolve: { auth: anyPromise }
        })
        $routeProvider.when('/post/edit/:id', {
            templateUrl: 'app/post/edit/edit.html',
            controller: 'postEditController',
            resolve: { auth: authPromise }
        })
        $routeProvider.when('/post/new', {
            templateUrl: 'app/post/new/new.html',
            controller: 'postNewController',
            resolve: { auth: authPromise }
        })
        $routeProvider.when('/home/:rpp/:page', {
            templateUrl: 'app/homeTemplate.html',
            controller: 'homeController',
            resolve: { auth: anyPromise }
        })
        $routeProvider.when('/login', {
            templateUrl: 'app/usuario/login/login.html',
            controller: 'usuarioLoginController',
            css: 'app/usuario/login/login.css',
            resolve: { auth: anyPromise }
        });
        $routeProvider.when('/logout', {
            templateUrl: 'app/usuario/logout/logout.html',
            controller: 'usuarioLogoutController',
            resolve: { auth: authPromise }
        });
        $routeProvider.otherwise({ redirectTo: '/' })

    }])