var miControlador = miModulo.controller(
    "postRemoveController",
    ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.hecho = false;
        $scope.fallido = false;
        $scope.eliminar = function(){
            $http({
                method: 'POST',
                url: `http://localhost:8081/blogbuster/json?ob=post&op=remove&id=${$routeParams.id}`
            }).then(function(response){
                if(response.data.status == 500){
                    $scope.fallido = true;
                }
                $scope.hecho = true;
            }, function(){
                $scope.fallido = true;
                $scope.hecho = true;
            });
        };

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