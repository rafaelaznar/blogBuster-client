var miControlador = miModulo.controller(
    "postEditController",
    ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.hecho = false;
        $scope.fallido = false;
        $scope.editar = function () {
            const datos = {
                id: $routeParams.id,
                titulo: $scope.titulo,
                cuerpo: $scope.cuerpo,
                etiquetas: $scope.etiquetas
            }
            $http({
                method: 'POST',
                data: datos,
                url: `http://localhost:8081/blogbuster/json?ob=post&op=update`
            }).then(function (response) {
                if (response.data.status == 500) {
                    $scope.fallido = true;
                }
                $scope.hecho = true;
            }, function () {
                $scope.fallido = true;
                $scope.hecho = true;
            });
        };

        $scope.volver = function () {
            window.history.back();
        };

        $scope.reset = function() {
            $http({
                method: 'POST',
                url: `http://localhost:8081/blogbuster/json?ob=post&op=get&id=${$routeParams.id}`
            }).then(function (response) {
                const respuesta = response.data.response;
                $scope.titulo = respuesta.titulo;
                $scope.cuerpo = respuesta.cuerpo;
                $scope.etiquetas = respuesta.etiquetas;
                $scope.fecha = respuesta.fecha;
            }, function () {

            });
        }

        $scope.reset();
    }]
);