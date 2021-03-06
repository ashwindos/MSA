// File: chapter3/controllerSpec.js
describe('Controller: TeamController', function() {
    // Instantiate a new version of my module before each test
    beforeEach(module('myApp'));
    var ctrl;
    var scope
        // Before each unit test, instantiate a new instance
        // of the controller
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        ctrl = $controller('TeamController', { $scope: scope });
    }));

    it('should have teams available on load', function() {
        expect(scope.teams).not.toBe(null);
    });


});