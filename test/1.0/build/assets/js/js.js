    //$.ajax({
    //    type: 'get',
    //    url: 'http://manage.dejiapp.com/server/login',
    //    async: true,
    //    timeout: 10000,
    //    dataType: 'json',
    //    success: function (data) {
    //        console.log(data)
    //    },
    //    error: function () {
    //        console.log('失败')
    //    }
    //})

    var app = angular.module('test',[])
    app.controller('customersCtrl', function ($scope, $http) {
        $http.get('http://manage.dejiapp.com/server/login').success(function (res) {
            console.log(res)
            $scope.login=res
            console.log($scope.login)
        }).error(function () {
            console.log('angular失败')
        })
    })

