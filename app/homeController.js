var miControlador = miModulo.controller(
    "homeController",
    ['$scope', '$http', 'auth', '$location', '$routeParams',
        function ($scope, $http, auth, $location, $routeParams) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;

            $scope.controller = "homeController";

            if (!$routeParams.page) {
                $scope.paginaActual = 1;
            } else {
                $scope.paginaActual = parseInt($routeParams.page);
            }
            if (!$routeParams.rpp) {
                $scope.rppActual = 10;
            } else {
                $scope.rppActual = parseInt($routeParams.rpp);
            }
            $scope.controller = "postHomeController";

            $http({
                method: 'GET',
                url: 'http://localhost:8081/blogbuster/json?ob=post&op=getpage&rpp=' + $scope.rppActual + '&page=' + $scope.paginaActual
            }).then(function (response) {
                $scope.status = response.data.status;
                $scope.pagina = response.data.message;
            }, function () {})

            $http({
                method: 'GET',
                url: 'http://localhost:8081/blogbuster/json?ob=post&op=getcount'
            }).then(function (response) {
                $scope.status = response.data.status;
                $scope.numRegistros = response.data.message;
                $scope.numPaginas = Math.ceil($scope.numRegistros / $scope.rppActual);
                $scope.calcPage = [];
                paginacion(2);
            }, function () {})

            function paginacion(vecindad) {
                vecindad++;
                $scope.botonera = [];
                for (i = 1; i <= $scope.numPaginas; i++) {
                    if (i == 1) {
                        $scope.botonera.push(i);
                    } else if (i > ($scope.paginaActual - vecindad) && i < ($scope.paginaActual + vecindad)) {
                        $scope.botonera.push(i);
                    } else if (i == $scope.numPaginas) {
                        $scope.botonera.push(i);
                    } else if (i == ($scope.paginaActual - vecindad) || i == ($scope.paginaActual + vecindad)) {
                        $scope.botonera.push('...');
                    }
                }
            }




        }
    ]
)