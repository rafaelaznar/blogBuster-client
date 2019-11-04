miModulo.controller(
    "usuarioLoginController",
    ['$scope', '$http', '$location', 'promesasService',
        function ($scope, $http, $location, promesasService) {
            $scope.controller = "postEditController";
            //--
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            $scope.login = function () {
                promesasService.ajaxLogin($scope.username, $scope.password)
                    .then(function (response) {
                        if (response.data.status != 200) {
                            $scope.fallo = true;
                            $scope.falloMensaje = response.data.message;
                        } else {
                            $scope.fallo = false;
                            $location.path('/home');
                        }
                        $scope.hecho = true;
                    }, function (error) {
                        $scope.hecho = true;
                        $scope.fallo = true;
                        $scope.falloMensaje = error.message + " " + error.stack;
                    });
            }
            $scope.volver = function () {
                $scope.fallo = false;
                $scope.hecho = false;
                $scope.falloMensaje = "";
            }

        }
    ])