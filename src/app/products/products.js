angular.module('zlAngularBoilerplate.products', [
  'ngRoute'
])

.config(function config($routeProvider) {
  $routeProvider.when('/products', {
        controller: 'ProductsController',
        templateUrl: 'products/products.tpl.html',
        navigationEntry: 'products'
  });
})

.controller('ProductsController', function ProductsController($scope) {})

;