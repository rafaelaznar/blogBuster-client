var miControlador = miModulo.controller(
    "postPlistController",
    ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.paginaActual = parseInt($routeParams.page);
        $scope.rppActual = parseInt($routeParams.rpp);
        $scope.rppS = [10,50,100];


        $http({
            method: 'POST',
            url: 'http://localhost:8081/blogbuster/json?ob=post&op=getpage&rpp=' + $routeParams.rpp + '&page=' + $routeParams.page
        }).then(function (response) {
            $scope.status = response.data.status;
            $scope.pagina = response.data.response;
        }, function () {
        })

        $http({
            method: 'POST',
            url: 'http://localhost:8081/blogbuster/json?ob=post&op=getcount'
        }).then(function (response) {
            $scope.status = response.data.status;
            $scope.numRegistros = response.data.response;
            $scope.numPaginas = Math.ceil($scope.numRegistros / $routeParams.rpp);
            $scope.calcPage = [];
            for (const p of $scope.rppS) {
                const res = $scope.paginaActual/$scope.numPaginas;
                const next = Math.ceil($scope.numRegistros / p);
                $scope.calcPage.push(Math.round(res * next));
            }
            paginacion(2);
        }, function () {
        })

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
                } else if (i == ($scope.paginaActual - vecindad) || i == ($scope.paginaActual + vecindad)){
                    $scope.botonera.push('...');
                }
            }
        }




    }]
)