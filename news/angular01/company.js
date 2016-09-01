
var culture=angular.module('s7.com',[])
culture.controller('companyController', function ($scope,$http,$routeParams) {


    $http.get('json/news.json').success(function (data) {
        $scope.data = data[0];
        //console.log(data);
    })
    if($routeParams.id==='1'){
        $('.news .container li a').each(function () {
            $(this).css({
                backgroundColor:'#cccccc',
                color:'white'
            })
        })
        $('.news .tab .container li .company').css({
            backgroundColor:'white',
            color:'red'
        })
        $('.news .tab .container li .company').on('click', function () {
            $('.news .tab .container li .company').css({
                backgroundColor:'white',
                color:'red'
            })
        })
    }


})