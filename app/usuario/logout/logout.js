miModulo.controller(
    "usuarioLogoutController",
    ['$scope', '$http', '$location', 'promesasService',
    function ($scope, $http, $location, promesasService) {
        $scope.controller = "postEditController";
        $scope.fallo = false;
        $scope.hecho = false;
        $scope.falloMensaje = "";


    }])