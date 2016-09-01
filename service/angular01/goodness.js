var app=angular.module('s7.goo',[])
app.controller('GoodNessController', function ($scope,$routeParams) {
    if($routeParams.id==='1'){
        $('.service .container li a').each(function () {
            $(this).css({
                backgroundColor:'#cccccc',
                color:'white'
            })
        })
        $('.service .tab .container li .goodness').css({
            backgroundColor:'white',
            color:'red'
        })
        $('.service .tab .container li .goodness').on('click', function () {
            $('.service .tab .container li .goodness').css({
                backgroundColor:'white',
                color:'red'
            })
        })
    }

})
