/**
 * This is the main application module
 */
angular.module('zlAngularBoilerplate', [
    'zlAngularBoilerplate.home',
    'zlAngularBoilerplate.products',
    'zlAngularBoilerplate.aboutus',
    'templates-app',
    'templates-common'
])

.config(function config($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
    $locationProvider
      .html5Mode(false)
      .hashPrefix('!');
})

.controller('SiteController', function($scope, $route) {
    $scope.routes = $route;
    $scope.$on('$routeChangeSuccess', function(event, current, previous) {
        $scope.currentPage = current.navigationEntry;
    });
});