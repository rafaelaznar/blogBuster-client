var miControlador = miModulo.controller(
    "sumaController",
    ['$scope', '$http', 'miServicio01', function ($scope, $http, myService) {
        $scope.resultado=null;
        $scope.suma=function(){
            $scope.resultado=myService.suma($scope.op1,$scope.op2);
        }
    }]
)
