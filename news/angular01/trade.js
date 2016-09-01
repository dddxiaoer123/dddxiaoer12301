var app=angular.module('s7.dis',[])
app.controller('discribleController', function ($scope,$routeParams) {
    if($routeParams.id==='2'){
        $('.news .container li a').each(function () {
            $(this).css({
                backgroundColor:'#cccccc',
                color:'white'
            })
        })
        $('.news .tab .container li .trade').css({
            backgroundColor:'white',
            color:'red'
        })
        $('.news .tab .container li .trade').on('click', function () {
            $('.news .tab .container li .trade').css({
                backgroundColor:'white',
                color:'red'
            })
        })
    }
})
