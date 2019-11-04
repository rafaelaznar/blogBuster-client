miModulo.controller(
    "usuarioLogoutController",
    ['$scope', '$http', '$location', 'promesasService', 'auth',
        function ($scope, $http, $location, promesasService, auth) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            if ($scope.authStatus != 200) {
                $location.path('/login');
            }
            //--
            $scope.controller = "postLogoutController";
            //--
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            promesasService.ajaxLogout()
                .then(function (response) {
                    if (response.data.status != 200) {
                        $scope.fallo = true;
                        $scope.falloMensaje = "Error al cerrar la sesión";
                    } else {
                        $scope.fallo = false;
                        $scope.authStatus = 500;
                        $scope.authUsername = "No active session";
                    }
                    $scope.hecho = true;
                }, function (error) {
                    $scope.hecho = true;
                    $scope.fallo = true;
                    $scope.falloMensaje = "Error al cerrar la sesión";
                });
            //--
            $scope.cerrar = function () {
                $location.path('/home');
            };
        }
    ])