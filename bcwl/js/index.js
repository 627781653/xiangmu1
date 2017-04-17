/**
 * Created by Administrator on 2017/2/23.indexjavascript
 */
$(function(){
    var aLi=$('.header>ul>li');
    var aI=$('.solid');
    var aA=$('.header>ul>li>a');
    $.each(aLi,function(i){
        aLi.mouseover(function(i){
            /*aI.eq(0).css({'width':'100%'});
            aA.eq(0).addClass('active');*/
            aI.eq($(this).index()) .stop().animate({'width':'100%'});
            aA.eq($(this).index()).addClass('active');
        });
        aLi.mouseout(function(i){
            aI.eq($(this).index()).stop().animate({'width':'0'});
            aA.eq($(this).index()).removeClass('active');
        });
    });
});
/*window.onload=function(){
    var oBtn=document.getElementById('btn');
    var aBtn=document.getElementsByTagName('li');
    var oTab=document.getElementById('tab');
    var aTab=document.getElementsByTagName('li');
    for(var i=0;i<aBtn.length;i++){
     aBtn[i].onclick=function(){
         for(var i=0;i<aBtn.length;i++){
             aBtn[i].className='';
         }
         this.className='active';
     }
    }
}*/
$(function(){
    var aBtn=$('.first>ul>li');
    var aTab=$('#tab');
    aBtn.click(function(){
        aBtn.removeClass('active');
        $(this).addClass('active');
        aTab.animate({'top':-$(this).index()*900+'px'});
    })
});
$(function(){
    var oBtn=$('.sed2-1');
    var oBg=$('.sed2-1>.sed2-2>.hover');
    var oShow=$('.sed2-1>.sed2-3');
    $.each(oBtn,function(i){
        $(oBtn[i]).mouseenter(function(){
            $(oBg[i]).stop().animate({'opacity':1});
            $(oShow[i]).stop().animate({'bottom':'0px'});
        })
        $(oBtn[i]).mouseleave(function(){
            $(oBg[i]).stop().animate({'opacity':0});
            $(oShow[i]).stop().animate({'bottom':'-75px'});
        })
    })
});
(window.onload=function(){
    var aBox=document.getElementsByClassName('t-li-box2');
    var aL=document.getElementsByClassName('t-l');
    var aR=document.getElementsByClassName('t-r');
    for(var i=0;i<aBox.length;i++){
        aBox[i].index=i;
        aBox[i].onmouseover=function(){
            for(var i=0;i<aBox.length;i++){
                aL[this.index].style.transform='translate(240px)';
                aR[this.index].style.transform='translate(-120px)';
            }
        }
        aBox[i].onmouseout=function(){
            for(var i=0;i<aBox.length;i++){
                aL[this.index].style.transform='';
                aR[this.index].style.transform='';
            }
        }
    }
});