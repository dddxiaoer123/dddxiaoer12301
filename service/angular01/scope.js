var culture=angular.module('s7.scope',[])
culture.controller('ScopeController', function ($scope,$routeParams) {
    if($routeParams.id==='2'){
        $('.service .container li a').each(function () {
            $(this).css({
                backgroundColor:'#cccccc',
                color:'white'
            })
        })
        $('.service .tab .container li .scope').css({
            backgroundColor:'white',
            color:'red'
        })
        $('.service .tab .container li .scope').on('click', function () {
            $('.service .tab .container li .scope').css({
                backgroundColor:'white',
                color:'red'
            })
        })
    }



    $('.service .text .container .box .public').stop().hide()
    $('.service .text .container .box .animat1').stop().hide()
    $('.service .text .container .box .animat2').stop().hide()

    $('.service .text .container .box').each(function () {

        var that=this;
        $(that).on('mouseenter', function () {
            //$('.service .text .container .box .animat1').stop().show()
            $(that).children('.bgi1').children('.animat1').stop().show()
            //$('.service .text .container .box .animat2').stop().show()
            $(that).children('.bgi1').children('.animat2').stop().show()
            $(that).children('.bgi1').children('.animat2').stop().animate({opacity:1},0);
            $(that).children('.bgi1').children('.animat1').stop().animate({opacity:1},0)

            $(that).children('.bgi1').children('.animat1').stop().animate({height: 0}, 400)
            $(that).children('.bgi1').children('.bgi2').stop().animate({left: '150%'}, 700)
            $(that).children('.bgi1').children('.bgi3').stop().animate({left: '50%'},  700)
            $(that).children('.bgi1').children('.animat2').stop().animate({top: "200%"}, 400)
            $(that).children('.bgc').stop().animate({top: 0}, 700)
            $(that).children('.public').stop().slideDown()
            $(that).children('h4').stop().css({color: 'white'})
            $(that).children('.bgc-small').stop().animate({top: '55%'}, 700)

        })


        $(that).on('mouseleave', function () {
            $(that).children('.bgi1').children('.bgi2').stop().animate({left: '50%'}, 0)
            $(that).children('.bgi1').children('.bgi3').stop().animate({left: '-150%'}, 0)
            $(that).children('.bgc').stop().animate({top: "100%"}, 100)
            $(that).children('.bgi1').children('.animat2').stop().animate({top: 0,opacity:0}, 400)
            $(that).children('.bgi1').children('.animat1').stop().animate({height: '100%',opacity:0}, 400)


            /* $(that).children('.bgi1').children('.animat2').stop().animate({opacity:0},800);*/
            /* $(that).children('.bgi1').children('.animat1').stop().animate({opacity:0},800)*/
            $(that).children('.public').stop().hide()
            $(that).children('h4').stop().css({color: 'black'})
        })


    })

})
