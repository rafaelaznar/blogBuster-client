miModulo.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}])