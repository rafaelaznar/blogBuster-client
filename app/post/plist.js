var miControlador = miModulo.controller(
    "postPlistController",
    ['$scope', '$http', 'miServicio01', '$routeParams', function ($scope, $http, myService, $routeParams) {
        $scope.paginaActual = $routeParams.page;
        $scope.rppActual = $routeParams.rpp;

        $http({
            method: 'GET',
            url: 'http://localhost:8081/blogbuster/json?ob=post&op=getpage&rpp=' + $routeParams.rpp + '&page=' + $routeParams.page
        }).then(function (response) {
            $scope.status = response.data.status;
            $scope.pagina = response.data.response;
        }, function () {
        })

        $http({
            method: 'GET',
            url: 'http://localhost:8081/blogbuster/json?ob=post&op=getcount'
        }).then(function (response) {
            $scope.status = response.data.status;
            $scope.numRegistros = response.data.response;
            $scope.numPaginas = Math.ceil($scope.numRegistros / $routeParams.rpp);
            paginacion();
        }, function () {
        })

        paginacion = function () {
            $scope.botonera = [];
            for (i = 1; i <= $scope.numPaginas; i++) {
                if (i == 1) {
                    $scope.botonera.push(i);
                }


                if (i == $scope.paginaActual && i-1> 1) {
                    // $scope.botonera.push(0);
                    $scope.botonera.push(i-1);
                }

                if (i == $scope.paginaActual && i != 1) {
                    $scope.botonera.push(i);
                }
                if (i == $scope.paginaActual && i+1< $scope.numPaginas) {
                    $scope.botonera.push(i+1);
                    // $scope.botonera.push(0);
                }

                if (i == $scope.numPaginas && i != 1 && i != $scope.paginaActual) {
                    $scope.botonera.push(i);
                }
            }
        }




    }]
)