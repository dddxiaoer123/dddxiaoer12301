var app=angular.module('s7.know',[])
app.controller('knowledgeController', function ($scope,$routeParams) {
    if($routeParams.id==='3'){
        $('.news .container li a').each(function () {
            $(this).css({
                backgroundColor:'#cccccc',
                color:'white'
            })
        })
        $('.news .tab .container li .knowledge').css({
            backgroundColor:'white',
            color:'red'
        })
        $('.news .tab .container li .knowledge').on('click', function () {
            $('.news .tab .container li .knowledge').css({
                backgroundColor:'white',
                color:'red'
            })
        })


    }

})
