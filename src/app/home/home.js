angular.module('zlAngularBoilerplate.home', [
  'ngRoute'
])

.config(function config($routeProvider) {
  $routeProvider.when('/home', {
        controller: 'HomeController',
        templateUrl: 'home/home.tpl.html',
        navigationEntry: 'home'
  });
})

.controller('HomeController', function HomeController($scope) {})

;