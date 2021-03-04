
$(document).ready(function(){

        $('#tab-tilte li').click(function(){

           var cur=$(this).index(); //获取当前点击tab标题的索引值
            tabFun(cur);//调用方法
        });
    });

    function  tabFun(cur){
        $('#tab-tilte li').eq(cur).addClass('active').siblings().removeClass('active');
        $('#tab-content div').eq(cur).addClass('cur').siblings().removeClass('cur');
    }

//第二层
$(document).ready(function(){

        $('#tab-tilte_2 li').click(function(){

           var cur=$(this).index(); //获取当前点击tab标题的索引值
            tabFun_2(cur);//调用方法
        });
    });

    function  tabFun_2(cur){
        $('#tab-tilte_2 li').eq(cur).addClass('active').siblings().removeClass('active');
        $('#tab-content_2 div').eq(cur).addClass('cur').siblings().removeClass('cur');
    }


// 侧边栏 左侧边栏 右侧边栏只有返回顶部有效
 $(function() {
     //先将侧边栏隐藏隐藏
	     $('.taoolbar-left').hide();
	     $('.taoolbar').hide();

	     //当滚动条的垂直位置距顶部100像素一下时，跳转链接出现，否则消失
	     $(window).scroll(function() {
	         if ($(window).scrollTop() > 300) {
	             $('.taoolbar-left').fadeIn(1000);
	         } else {
	             $(".taoolbar-left").fadeOut(1000);
	         }
	     });
	     $(window).scroll(function() {
	         if ($(window).scrollTop() > 100) {
	             $('.taoolbar').fadeIn(1000);
	         } else {
	             $(".taoolbar").fadeOut(1000);
	         }
	     });

     //点击跳转链接，滚动条跳到0的位置，页面移动速度是1000
     $(".return").click(function() {
         $('body,html').animate({
             scrollTop: '0'
         }, 1000);
         return false; //防止默认事件行为
     });
     //点击跳转链接，滚动条跳到0的位置，页面移动速度是1000
     $(".top1").click(function() {
         $('body,html').animate({
             scrollTop: '708'
         }, 1000);
         return false; //防止默认事件行为
     });
     //点击跳转链接，滚动条跳到0的位置，页面移动速度是1000
     $(".top2").click(function() {
         $('body,html').animate({
             scrollTop: '1241'
         }, 1000)
         return false; //防止默认事件行为
     });
 //点击跳转链接，滚动条跳游览器窗口的位置小于1时，侧边框名称发生改变
      $(window).scroll(function() {
         if ($(window).scrollTop() > 500 && $(window).scrollTop() < 1000) {
             $('.top1').html("食品").css({'color':'#f01414'});
         } else {
              $('.top1').html("1F").css({'color':'#333'});
         }
     });
 //点击跳转链接，滚动条跳游览器窗口的位置大于1时，侧边框名称发生改变
     $(window).scroll(function() {
         if ($(window).scrollTop() > 1000) {
             $('.top2').html("护肤").css({'color':'#f01414'});
         } else {
              $('.top2').html("2F").css({'color':'#333'});
         }
     })
     
 });

