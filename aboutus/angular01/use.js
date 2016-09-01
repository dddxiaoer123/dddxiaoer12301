var app=angular.module('s7.use',[])
app.controller('useController', function ($scope,$routeParams) {
    if($routeParams.id==='3'){
        $('.about-us .container li a').each(function () {
            $(this).css({
                backgroundColor:'#cccccc',
                color:'white'
            })
        })
        $('.about-us .tab .container li .recruitment').css({
            backgroundColor:'white',
            color:'red'
        })
        $('.about-us .tab .container li .recruitment').on('click', function () {
            $('.about-us .tab .container li .recruitment').css({
                backgroundColor:'white',
                color:'red'
            })
        })
    }
})
