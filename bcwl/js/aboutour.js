$(function(){
    var aLi=$('.header>ul>li');
    var aI=$('.solid');
    var aA=$('.header>ul>li>a');
    $.each(aLi,function(i){
        aLi.mouseover(function(i){
            aI.eq(2).css({'width':'100%'});
            aI.eq($(this).index()) .stop().animate({'width':'100%'})
            aA.eq($(this).index()).addClass('active');
        });
        aLi.mouseout(function(i){
            aI.eq($(this).index()) .stop().animate({'width':'0'});
            aA.eq($(this).index()).removeClass('active');
            aA.eq(2).addClass('active');
        });
    });
    var aBtn=$('.i-head3>li');
    var aBox=$('.content>li');
    var aImg=$('.img>li');
    $.each(aBtn,function(i){
        aBtn.eq($(this).index()).click(function(i){
            aImg.animate({'opacity':'0','top':'-810px'});
            aBox.removeClass('in');
            aImg.eq($(this).index()).animate({'opacity':'1','top':'-160px'});
            aBox.eq($(this).index()).addClass('in');
        });
    });
    var aP=$('.b-center p');
    $.each(aP,function(i){
        $(aBtn[1]).click(function(){
            var iNow=i;
            setTimeout(function(){
                aP.eq(iNow).animate({'opacity':1});
            },600*i)
        })
        $(aBtn[2]).click(function(){
            $(aBox[2]).addClass('active1');
        })
        $(aBtn[3]).click(function(){
            $(aBox[3]).addClass('active2');
        })
        $(aBtn[4]).click(function(){
            $(aBox[4]).addClass('active3');
        })
        $(aBtn[5]).click(function(){
            $(aBox[5]).addClass('active4');
        })
    });
});
/*(window.onload=function(){
    var oP=document.querySelector('.b-center');
    var aBtn=document.querySelector('.i-head3>li');
    var aP=document.querySelectorAll('p');
    var timer=null;
    for(var i=0;i<aP.length;i++){
        aBtn[1].onclick=function(){
            for(var i=0;i<aP.length;i++){
                var iNow=i;
                timer=setInterval(function(){
                    aP[iNow].style.opacity='1';
                },600)
            }

        }
    }
})()*/
