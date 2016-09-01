/**
 * Created by Administrator on 2016/8/6.
 */
$(function () {
    //¹Ì¶¨nav
    $('.header .nav').children('li').each(function () {
        $(this).children('ul').hide();
        $(this).on('mouseenter', function () {
            $(this).children('a').css({color: 'white'})
            $(this).css({backgroundColor: '#f75a53', opacity: 1}).children('ul').stop(true, true).slideDown(200);
        })
        $(this).on('mouseleave', function () {
            $(this).children('a').css({color: 'black'})
            $(this).css({backgroundColor: 'white', opacity: 1}).children('ul').slideUp();
        })
    })


    //sub-nav
    $('.tab .container li a').each(function () {
        var that=$(this);
        $('.tab .container li a').each(function () {
            $(this).css({
                backgroundColor:'#cccccc',
                color:'white'
            })
        })
        $(this).on('click', function () {
            $('.tab .container li a').each(function () {
                $(this).css({
                    backgroundColor:'#cccccc',
                    color:'white'
                })
            })
        })

    })

     //foot部分
    $('.footer .name').on('blur', function () {
        var reg = /^[\u4e00-\u9fa5]{2,}$/
        var value = $(this).val();
        if (reg.test(value)) {
            $('.footer .name-juge').hide();
        }else{
            $('.footer .name-juge').show();
        }
    })


    $('.footer .phone').on('blur', function () {
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        var value = $(this).val();
        if (reg.test(value)) {
            $('.footer .phone-juge').hide();
        }else{
            $('.footer .phone-juge').show();
        }
    })

//no-data
    $('.return').on('click',function(){
        $('.no-data').hide();
    })
    $('.open').on('click',function(){
        $('.no-data').show();
    })
})