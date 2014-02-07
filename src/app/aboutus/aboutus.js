angular.module('zlAngularBoilerplate.aboutus', [
  'ngRoute'
])

.config(function config($routeProvider) {
  $routeProvider.when('/aboutus', {
        controller: 'AboutusController',
        templateUrl: 'aboutus/aboutus.tpl.html',
        navigationEntry: 'aboutus'
  });
})
.controller('AboutusController', function AboutusController($scope) {})

;