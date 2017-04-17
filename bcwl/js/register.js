/* Created by Administrator on 2017/2/24.*/
/*/注册 /*/
$(function(){
    //标题运动
    var oBox=$('.banner-box');
    var oI=$('.banner-box>p>i');
    var oB=$('.banner-box>p>b');
    oBox.animate({'top':'0'},{complete:function(){
        oI.animate({'opacity':'1','left':'120px'})
        oB.animate({'opacity':'1','right':'120px'})
    }});
    //3种申请方式//===================================
    var aBtn=$('.box>input');
    var aDiv=$('.box>div');
    aBtn.click(function(){
        aBtn.removeClass('on');
        $(this).addClass('on');
        aDiv.removeClass('on');
        aDiv.eq($(this).index()).addClass('on');
    });

    //===================================
    //正则判断- 手机注册
    var aInp=$('#div1>form>ul>li>input');
    var aB=$('#div1>form>ol>li>b');
    var aSpan=$('#div1>form>ol>li>span');
    aInp[0].onfocus=function(){
        aB[0].style.backgroundPosition = '-90px -28px';
        aSpan[0].innerHTML = '请输入您的手机号码';
    };
    aInp[0].onblur=function() {
        var str=aInp[0].value;
        var reg=/^1[3578]{1}[0-9]{9}$/g;
        if(!reg.test(str)){
            aB[0].style.backgroundPosition = '-90px -14px';
            aSpan[0].innerHTML = '请输入正确的手机号码';
        }else{
            aB[0].style.backgroundPosition = '-90px 0';
            aSpan[0].innerHTML = ' ';
        }
        if(!str){
            aB[0].style.backgroundPosition = '-90px -14px';
            aSpan[0].innerHTML = '不能为空';
        }
    };



    //==========邮箱注册=======================



    var aInp2=$('#div2>form>ul>li>input');
    var aB2=$('#div2>form>ol>li>b');
    var aSpan2=$('#div2>form>ol>li>span');
    //邮箱
    aInp2[0].onfocus=function(){
        aB2[0].style.backgroundPosition='-90px -28px';
        aSpan2[0].innerHTML='请填写您常用的邮箱';
    };
    aInp2[0].onblur=function(){
        var str=aInp2[0].value;
        var reg=/^\w+@[0-9a-z]+\.[0-9a-z]{2,}$/g;
        if(!reg.test(str)){
            aB2[0].style.backgroundPosition='-90px -14px';
            aSpan2[0].innerHTML='邮箱格式不正确';
        }else{
            aB2[0].style.backgroundPosition='-90px 0';
            aSpan2[0].innerHTML=' ';
        }
        if(!str){
            aB2[0].style.backgroundPosition='-90px -14px';
            aSpan2[0].innerHTML='不能为空';
        }
    };
    //密码
    aInp2[1].onfocus=function(){
        aB2[1].style.backgroundPosition='-90px -28px';
        aSpan2[1].innerHTML='请填写6到16为的数字或字母';
    };
    aInp2[1].onblur=function(){
        var str=aInp2[1].value;
        var reg=/^\w{6,16}$/g;
        if(!reg.test(str)){
            aB2[1].style.backgroundPosition='-90px -14px';
            aSpan2[1].innerHTML='请填写6到16为的数字或字母';
        }else{
            aB2[1].style.backgroundPosition='-90px 0';
            aSpan2[1].innerHTML=' ';
        }
        if(!str){
            aB2[1].style.backgroundPosition='-90px -14px';
            aSpan2[1].innerHTML='不能为空';
        }
    };
    //确认密码
    aInp2[2].onfocus=function(){
        aB2[2].style.backgroundPosition='-90px -28px';
        aSpan2[2].innerHTML='请再次确认密码';
    };
    aInp2[2].onblur=function(){
        var str=aInp2[2].value;
        if(str!=aInp2[1].value){
            aB2[2].style.backgroundPosition='-90px -14px';
            aSpan2[2].innerHTML='两次输入的密码不一致';
        }else{
            aB2[2].style.backgroundPosition='-90px 0';
            aSpan2[2].innerHTML=' ';
        }
        if(!str){
            aB2[2].style.backgroundPosition='-90px -14px';
            aSpan2[2].innerHTML='不能为空';
        }
    };
    //手机号
    aInp2[3].onfocus=function(){
        var str=aInp2[3].value;
        aB2[3].style.backgroundPosition='-90px -28px';
        aSpan2[3].innerHTML='请填写您常用手机号码';
    };
    aInp2[3].onblur=function(){
        var str=aInp2[3].value;
        var reg=/^1[3578]{1}[0-9]{9}$/g;
        if(!reg.test(str)){
            aB2[3].style.backgroundPosition = '-90px -14px';
            aSpan2[3].innerHTML = '请输入正确的手机号码';
        }else{
            aB2[3].style.backgroundPosition = '-90px 0';
            aSpan2[3].innerHTML = ' ';
        }
        if(!str){
            aB2[3].style.backgroundPosition = '-90px -14px';
            aSpan2[3].innerHTML = '不能为空';
        }
    };
    //身份证
    aInp2[4].onfocus=function(){
        aB2[4].style.backgroundPosition='-90px -28px';
        aSpan2[4].innerHTML='请填写您本人的18位身份证号码';
    };
    aInp2[4].onblur=function(){
        var str=aInp2[4].value;
        var reg=/^\d{17}[0-9xX]{1}$/g;
        if(!reg.test(str)){
            aB2[4].style.backgroundPosition='-90px -14px';
            aSpan2[4].innerHTML='身份证号码错误';
        }else{
            aB2[4].style.backgroundPosition='-90px 0';
            aSpan2[4].innerHTML=' ';
        }
        if(!str){
            aB2[4].style.backgroundPosition='-90px -14px';
            aSpan2[4].innerHTML='不能为空';
        }
    };
    //验证码
    aInp2[5].onfocus=function(){
        aB2[5].style.backgroundPosition='-90px -28px';
        aSpan2[5].innerHTML='请输入验证码';
    };
    aInp2[5].onblur=function(){
        var str=aInp2[5].value;
        var reg=/^[nN]{1}[aA]{1}[iI]{1}9$/g;
        if(!reg.test(str)){
            aB2[5].style.backgroundPosition='-90px -14px';
            aSpan2[5].innerHTML='验证码输入错误';
        }else{
            aB2[5].style.backgroundPosition='-90px 0';
            aSpan2[5].innerHTML=' ';
        }
        if(!str){
            aB2[5].style.backgroundPosition='-90px -14px';
            aSpan2[5].innerHTML='不能为空';
        }
    };


    //==========个性注册======================


    var aInp3=$('#div3>form>ul>li>input');
    var aB3=$('#div3>form>ol>li>b');
    var aSpan3=$('#div3>form>ol>li>span');
    //账号
    aInp3[0].onfocus=function(){
        aB3[0].style.backgroundPosition='-90px -28px';
        aSpan3[0].innerHTML='首个大写，4-20位子母河数字组合';
    };
    aInp3[0].onblur=function(){
        var str=aInp3[0].value;
        var reg=/^[A-Z]{1}\w{3,20}$/g;
        if(!reg.test(str)){
            aB3[0].style.backgroundPosition='-90px -14px';
            aSpan3[0].innerHTML='账号名格式错误';
        }else{
            aB3[0].style.backgroundPosition='-90px 0';
            aSpan3[0].innerHTML=' ';
        }
        if(!str){
            aB3[0].style.backgroundPosition='-90px -14px';
            aSpan3[0].innerHTML='账号名不能为空';
        }
    };
    //密码
    aInp3[1].onfocus=function(){
        aB3[1].style.backgroundPosition='-90px -28px';
        aSpan3[1].innerHTML='请填写6到16为的数字或字母';
    };
    aInp3[1].onblur=function(){
        var str=aInp3[1].value;
        var reg=/^\w{6,16}$/g;
        if(!reg.test(str)){
            aB3[1].style.backgroundPosition='-90px -14px';
            aSpan3[1].innerHTML='请填写6到16为的数字或字母';
        }else{
            aB3[1].style.backgroundPosition='-90px 0';
            aSpan3[1].innerHTML=' ';
        }
        if(!str){
            aB3[1].style.backgroundPosition='-90px -14px';
            aSpan3[1].innerHTML='不能为空';
        }
    };
    //确认密码
    aInp3[2].onfocus=function(){
        aB3[2].style.backgroundPosition='-90px -28px';
        aSpan3[2].innerHTML='请再次确认密码';
    };
    aInp3[2].onblur=function(){
        var str=aInp3[2].value;
        if(str!=aInp3[1].value){
            aB3[2].style.backgroundPosition='-90px -14px';
            aSpan3[2].innerHTML='两次输入的密码不一致';
        }else{
            aB3[2].style.backgroundPosition='-90px 0';
            aSpan3[2].innerHTML=' ';
        }
        if(!str){
            aB3[2].style.backgroundPosition='-90px -14px';
            aSpan3[2].innerHTML='不能为空';
        }
    };
    //手机号
    aInp3[3].onfocus=function(){
        var str=aInp2[3].value;
        aB3[3].style.backgroundPosition='-90px -28px';
        aSpan3[3].innerHTML='请填写您常用手机号码';
    };
    aInp3[3].onblur=function(){
        var str=aInp3[3].value;
        var reg=/^1[3578]{1}[0-9]{9}$/g;
        if(!reg.test(str)){
            aB3[3].style.backgroundPosition = '-90px -14px';
            aSpan3[3].innerHTML = '请输入正确的手机号码';
        }else{
            aB3[3].style.backgroundPosition = '-90px 0';
            aSpan3[3].innerHTML = ' ';
        }
        if(!str){
            aB3[3].style.backgroundPosition = '-90px -14px';
            aSpan3[3].innerHTML = '不能为空';
        }
    };
    //身份证
    aInp3[4].onfocus=function(){
        aB3[4].style.backgroundPosition='-90px -28px';
        aSpan3[4].innerHTML='请填写您本人的18位身份证号码';
    };
    aInp3[4].onblur=function(){
        var str=aInp3[4].value;
        var reg=/^\d{17}[0-9xX]{1}$/g;
        if(!reg.test(str)){
            aB3[4].style.backgroundPosition='-90px -14px';
            aSpan3[4].innerHTML='身份证号码错误';
        }else{
            aB3[4].style.backgroundPosition='-90px 0';
            aSpan3[4].innerHTML=' ';
        }
        if(!str){
            aB3[4].style.backgroundPosition='-90px -14px';
            aSpan3[4].innerHTML='不能为空';
        }
    };
    //验证码
    aInp3[5].onfocus=function(){
        aB3[5].style.backgroundPosition='-90px -28px';
        aSpan3[5].innerHTML='请输入验证码';
    };
    aInp3[5].onblur=function(){
        var str=aInp3[5].value;
        var reg=/^[nN]{1}[aA]{1}[iI]{1}9$/g;
        if(!reg.test(str)){
            aB3[5].style.backgroundPosition='-90px -14px';
            aSpan3[5].innerHTML='验证码输入错误';
        }else{
            aB3[5].style.backgroundPosition='-90px 0';
            aSpan3[5].innerHTML=' ';
        }
        if(!str){
            aB3[5].style.backgroundPosition='-90px -14px';
            aSpan3[5].innerHTML='不能为空';
        }
    };
});














