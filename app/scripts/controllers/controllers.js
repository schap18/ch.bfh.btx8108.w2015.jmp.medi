/**
 * Created by JsMac on 11/6/15.
 */
/**
 * Created by jd on 02.11.15.
 */

angular.module('starter.controllers', [])
angular.module('starter.controllers', ['starter.services'])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      /*// Simulate a login delay. Remove this and replace with your login
       // code if using a login system
       $timeout(function() {
       $scope.closeLogin();
       }, 1000);*/
    };
  })

  .controller('SessionsCtrl', function($scope, Session) {
    $scope.sessions = Session.query();
  })

  .controller('SessionCtrl', function($scope, $stateParams, Session) {
    $scope.session = Session.get({sessionId: $stateParams.sessionId});
  })

  .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    //Funktion für den Login. Bei korrekter Eingabe der Email und des Passwortes, wird die Seite "Browse" geöffnet.

    $scope.login = function() {
      LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
        $state.go('app.browse');
      }).error(function(data) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });

    }
  })

  .controller('PopupCtrl', function($scope, $timeout, $q, $ionicPopup) {

    $scope.showAlert = function() {
      $ionicPopup.alert({
        title: 'Passwort vergessen',

        template: '<input type="text" placeholder="E-Mail" ng-model="data.username">',

        buttons: [{
          text: '<b>Zurücksetzen</b>',
          type: 'button-positive',

          onTap: function(e) {

            var alertPopup = $ionicPopup.alert({
              title: 'Danke!',
              template: 'Das Passwort wurde Ihnen per E-Mail zugesendet.'
            });
          }
        }],

      }).then(function(res) {
        console.log('Test Alert Box');
      });
    };

  });
