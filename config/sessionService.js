miModulo.factory('sessionService', ['$q', 'promesasService', '$location',
    function ($q, promesasService, $location) {
        return {
            anyPromise: function () {
                var deferred = $q.defer();
                deferred.resolve();
                return deferred;
            },
            authPromise: function () {
                var deferred = $q.defer();
                promesasService.ajaxCheck()
                    .then(function (response) {
                        if (response.data.status == 200) {
                            deferred.resolve();
                        } else {
                            deferred.reject();
                            if (nextUrl != '/' && nextUrl != '/home' && nextUrl != '/login') {
                                $location.path("/login");
                            }
                        }
                    }, function (error) {
                        deferred.reject();
                    }).catch(function () {
                        deferred.reject();
                    });
                return deferred;
            },
            setNextURL: function (value) {
                nextUrl = value;
            }
        }
    }])