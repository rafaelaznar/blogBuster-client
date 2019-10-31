miModulo.config(['$routeProvider', 
    function ($routeProvider) {
/*
        var anyPromise = function () {
            var deferred = $q.defer();
            deferred.resolve();
            return deferred;
        }
        var authPromise = function () {
            var deferred = $q.defer();
            deferred.resolve();
            return deferred;

            var deferred = $q.defer();
            promesasService.ajaxCheck()
                .then(function (response) {
                    if (response.data.status == 200) {
                        deferred.resolve();
                    } else {
                        deferred.reject();
                    }
                }, function (error) {
                    deferred.reject();
                });
            return deferred;
           
        }
 */
        $routeProvider.when('/', {
            templateUrl: 'app/homeTemplate.html',
            controller: 'homeController'
            //, resolve: { auth: anyPromise }
        })

        $routeProvider.when('/post/plist/:rpp/:page', {
            templateUrl: 'app/post/plist/plist.html',
            controller: 'postPlistController'
            //, resolve: { auth: authPromise }
        })
        $routeProvider.when('/post/remove/:id', {
            templateUrl: 'app/post/remove/remove.html',
            controller: 'postRemoveController'
        })
        $routeProvider.when('/post/view/:id', {
            templateUrl: 'app/post/view/view.html',
            controller: 'postViewController'
        })
        $routeProvider.when('/post/edit/:id', {
            templateUrl: 'app/post/edit/edit.html',
            controller: 'postEditController'
        })
        $routeProvider.when('/post/new', {
            templateUrl: 'app/post/new/new.html',
            controller: 'postNewController'
        })
        $routeProvider.when('/home/:rpp/:page', {
            templateUrl: 'app/homeTemplate.html',
            controller: 'homeController'
        })
        $routeProvider.when('/login', {
            templateUrl: 'app/usuario/login/login.html',
            controller: 'usuarioLoginController',
            css: 'app/usuario/login/login.css'
        });
        $routeProvider.when('/logout', {
            templateUrl: 'app/usuario/logout/logout.html',
            controller: 'usuarioLogoutController'
        });
        $routeProvider.otherwise({ redirectTo: '/' })

    }])