miModulo.run(
    function ($rootScope, $location, sessionService) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if (next.$$route) {
                sessionService.setNextURL(next.$$route.originalPath);
            }
        });
    });