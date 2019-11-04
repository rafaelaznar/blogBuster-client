var miControlador = miModulo.controller(
    "homeController",
    ['$scope', '$http', 'auth',
        function ($scope, $http, auth) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;

            $scope.controller = "homeController";
        }
    ]
)