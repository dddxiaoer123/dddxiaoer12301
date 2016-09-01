var app=angular.module('s7.dis',[])
app.controller('discribleController', function ($scope,$routeParams) {
    if($routeParams.id==='1'){
        $('.about-us .container li a').each(function () {
            $(this).css({
                backgroundColor:'#cccccc',
                color:'white'
            })
        })
        $('.about-us .tab .container li .discrible').css({
            backgroundColor:'white',
            color:'red'
        })
        $('.about-us .tab .container li .discrible').on('click', function () {
            $('.about-us .tab .container li .discrible').css({
                backgroundColor:'white',
                color:'red'
            })
        })
    }
})
