var app=angular.module('s7.reg',[])
app.controller('RegisterController', function ($scope) {
    //�û���
    login($('.login .container .box li:eq(0) input'), /^\w{3,20}$/, 0,'name')
    //����
    //login($('.login .container .box li:eq(1) input'), /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, 1,'email')
    //����
    login($('.login .container .box li:eq(1) input'), /^[a-zA-Z]\w{5,17}$/,1,'password')
    //ȷ������
    login($('.login .container .box li:eq(2) input'), /^[a-zA-Z]\w{5,17}$/,2,'repass')
    //�ж����������Ƿ�һ��
    $('.login .container .box li:eq(2) input').on('blur', function () {
        if($('.login .container .box li:eq(2) input').val()!==$('.login .container .box li:eq(1) input').val()){
            $('.login .container .box li:eq(2) .same').show()
            $('.login .container .box li:eq(2) .right').hide()
            $('.login .container .box li:eq(1) .right').hide()

        }else{
            $('.login .container .box li:eq(2) .same').hide()
        }
    })
    //��֤��
    var num1=(parseInt(Math.random()*10)).toString();
    var num2=(parseInt(Math.random()*10)).toString();
    var num3=(parseInt(Math.random()*10)).toString();
    var num4=(parseInt(Math.random()*10)).toString();

    var text=num1+num2+num3+num4;
    console.log($('.login .container .box li:eq(3) .box'));
    $('.login .container .box li:eq(3) .box').html(text);
    $('.login .container .box li:eq(3) input').on('blur', function () {
        var value=$('.login .container .box li:eq(3) input').val().toString()
        if(text===value){
            $('.login .container .box li:eq(3) .right1').show()
            $('.login .container .box li:eq(3) .error1').hide()
        }else{
            $('.login .container .box li:eq(3) .right1').hide()
            $('.login .container .box li:eq(3) .error1').show()
        }
    })

    $('.login .container .box li:eq(3) input').on('focus', function () {
        $('.login .container .box li:eq(3) .error1').hide()
    })





    //��װ����
    function login(ele, regex, index,cla) {
        ele.on('blur', function () {
            if (regex.test($('.login .container li:eq(' + index + ') .'+cla+'').val())) {
                $('.login .container li:eq(' + index + ') .right').show()
                $('.login .container li:eq(' + index + ') .error').hide()
            } else {
                $('.login .container li:eq(' + index + ') .error').show()
                $('.login .container li:eq(' + index + ') .right').hide()
            }
        })
        ele.on('focus', function () {
            $('.login .container li:eq(' + index + ') .error').hide()
        })
    }
})
