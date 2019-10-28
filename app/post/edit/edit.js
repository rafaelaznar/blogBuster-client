var miControlador = miModulo.controller(
    "postEditController",
    ['$scope', '$http', '$routeParams', '$window', function ($scope, $http, $routeParams, $window) {
        $scope.id = $routeParams.id;

        $http({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8081/blogbuster/json?ob=post&op=get&id=" + $scope.id
        }).then(function (response) {
            $scope.titulo = response.data.response.titulo;
            $scope.cuerpo = response.data.response.cuerpo;
            $scope.etiquetas = response.data.response.etiquetas;
            $scope.fecha = response.data.response.fecha;
        });

        $scope.modificar = function () {
            $http({
                method: "POST",
                data: "data={\"id\": " + $scope.id + ", \"titulo\": \"" + $scope.titulo + "\", \"cuerpo\": \"" + $scope.cuerpo + "\", \"etiquetas\": \"" + $scope.etiquetas + "\", \"fecha\": \"" + $scope.fecha + "\"}",
                withCredentials: true,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: "http://localhost:8081/blogbuster/json?ob=post&op=update"
            }).then(function (response) {
                $window.location.href = "/blogbuster/#!/post/plist/10/1";
            });
        }
    }]
)