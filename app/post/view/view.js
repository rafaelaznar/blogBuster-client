var miControlador = miModulo.controller(
    "postViewController",
    ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        

        $scope.volver = function(){
            window.history.back();
        };

        $http({
            method: 'POST',
            url: `http://localhost:8081/blogbuster/json?ob=post&op=get&id=${$routeParams.id}`
        }).then(function(response){
            const respuesta = response.data.response;
            $scope.titulo = respuesta.titulo;
            $scope.cuerpo = respuesta.cuerpo;
            $scope.etiquetas = respuesta.etiquetas;
            $scope.fecha = respuesta.fecha;
        }, function(){

        });
    }]
);