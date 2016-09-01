var culture=angular.module('s7.cul',[])
culture.controller('cultureControoler', function ($scope,$routeParams) {
    if($routeParams.id==='2'){
        $('.about-us .container li a').each(function () {
            $(this).css({
                backgroundColor:'#cccccc',
                color:'white'
            })
        })
        $('.about-us .tab .container li .culture').css({
            backgroundColor:'white',
            color:'red'
        })
        $('.about-us .tab .container li .culture').on('click', function () {
            $('.about-us .tab .container li .culture').css({
                backgroundColor:'white',
                color:'red'
            })
        })
    }
})
