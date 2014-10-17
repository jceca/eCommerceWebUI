/**
 * Created by Javier on 16/10/2014.
 */
angular
    .module('guide', [])

    .controller('mainPageCtrl', function($scope) {
        $scope.introTemas = [
            {'id': '0',
             'title': '',
             'summary': ''
            }
        ]
    })