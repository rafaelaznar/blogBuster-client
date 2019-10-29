var miControlador = miModulo.controller(
    "postEditController",
    ['$scope', '$http', '$routeParams', '$window', 'promesasService',
        function ($scope, $http, $routeParams, $window, promesasService) {
            $scope.id = $routeParams.id;
            $scope.controller = "postEditController";
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";

            promesasService.ajaxGet('post', $scope.id)
                .then(function (response) {
                    $scope.id = response.data.response.id;
                    $scope.titulo = response.data.response.titulo;
                    $scope.cuerpo = response.data.response.cuerpo;
                    $scope.etiquetas = response.data.response.etiquetas;
                    $scope.fecha = response.data.response.fecha;
                }, function (error) {
                    $scope.fallo = true;
                });

            $scope.modificar = function () {
                const datos = {
                    id: $routeParams.id,
                    titulo: $scope.titulo,
                    cuerpo: $scope.cuerpo,
                    etiquetas: $scope.etiquetas,
                    fecha: $scope.fecha
                }
                var jsonToSend = {
                    data: JSON.stringify(datos)
                };
                $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
                $http.get('http://localhost:8081/blogbuster/json?ob=post&op=update', {
                    params: jsonToSend
                })
                    .then(function (response) {
                        if (response.data.status != 200) {
                            $scope.fallo = true;
                            $scope.falloMensaje = response.data.response;
                        } else {
                            $scope.fallo = false;
                        }
                        $scope.hecho = true;
                    }, function (error) {
                        $scope.hecho = true;
                        $scope.fallo = true;
                    });
            }
            $scope.volver = function () {
                window.history.back();
            };
        }]

)