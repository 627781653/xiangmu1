/**
 * Created by Administrator on 2017/3/7.
 */
$(function(){
    var aLi=$('.header>ul>li');
    var aI=$('.solid');
    var aA=$('.header>ul>li>a');
    $.each(aLi,function(i){
        aLi.mouseover(function(i){
            aI.eq(1).css({'width':'100%'});
            aI.eq($(this).index()).stop().animate({'width':'100%'})
            aA.eq($(this).index()).addClass('active');
        });
        aLi.mouseout(function(i){
            aI.eq($(this).index()).stop().animate({'width':'0'});
            aA.eq($(this).index()).removeClass('active');
            aA.eq(1).addClass('active');
        });
    });
    var aBtn=$('.i-head3>li');
    var aImg=$('#add_img>li');
    var aBox=$('#add_box>li');
    $.each(aBtn,function(i){
       aBtn.eq($(this).index()).click(function(i){
           aImg.animate({'opacity':'0','top':'0'});
           aBox.removeClass('in');
           aImg.eq($(this).index()).animate({'opacity':'1','top':'630px'});
           aBox.eq($(this).index()).addClass('in');
       }); 
    });
});