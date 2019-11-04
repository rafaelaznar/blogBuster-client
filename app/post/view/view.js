var miControlador = miModulo.controller(
    "postViewController",
    ['$scope', '$http', '$routeParams', 'auth', 'promesasService',

        function ($scope, $http, $routeParams, auth, promesasService) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            //--
            $scope.controller = "postViewController";
            //--
            $scope.id = $routeParams.id;
            //--
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            promesasService.ajaxGet('post', $scope.id).then(function (response) {
                $scope.id = response.data.message.id;
                $scope.titulo = response.data.message.titulo;
                $scope.cuerpo = response.data.message.cuerpo;
                $scope.etiquetas = response.data.message.etiquetas;
                $scope.fecha = response.data.message.fecha;
            }, function () {
                $scope.fallo = true;
                $scope.falloMensaje = "No se ha podido acceder a los datos del servidor";
            });
            //--
            $scope.volver = function () {
                window.history.back();
            };

        }
    ]
);