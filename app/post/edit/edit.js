var miControlador = miModulo.controller(
    "postEditController",
    ['$scope', '$http', '$routeParams', '$window', function ($scope, $http, $routeParams, $window) {
        $scope.id = $routeParams.id;
        $scope.controller = "postEditController";
        $scope.fallo = false;
        $scope.hecho = false;
        $http({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8081/blogbuster/json?ob=post&op=get&id=" + $scope.id
        }).then(function (response) {
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
                    if (response.data.status == 500) {
                        $scope.fallo = true;
                    } else {
                        $scope.fallo = false;
                    }
                    $scope.hecho = true;
                }, function (error) {
                    $scope.hecho = true;
                    $scope.fallo = true;
                });
            $scope.volver = function () {
                window.history.back();
            };
            /*
            $http({
                method: "POST",
                data: "data={\"id\": " + $scope.id + ", \"titulo\": \"" + $scope.titulo + "\", \"cuerpo\": \"" + $scope.cuerpo + "\", \"etiquetas\": \"" + $scope.etiquetas + "\", \"fecha\": \"" + $scope.fecha + "\"}",
                withCredentials: true,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: "http://localhost:8081/blogbuster/json?ob=post&op=update"
            }).then(function (response) {
                $window.location.href = "/blogbuster/#!/post/plist/10/1";
            });
            */
        }
    }]
)