//*定义位置：由于图片个数与下侧顺序按钮数量一致，可通过位置进行关联*/
    var index=0;
     /*当鼠标放到顺序按钮上时：
     1.将当前这个顺序按钮增加样式
     2.移除周围其他同级元素红色背景样式
     3.获取当前顺序按钮的index
     4.通过index获取该位置图片
     5.一秒钟渐入该图片
     6.一秒钟渐出其他相邻图片
     7.防止移动过快导致的效果闪现，使用stop方法
     */
     $(".focus .num li").mousemove(function () {
        $(this).addClass(".focus current").siblings().removeClass(".focus current");
        index=$(this).index();
        $(".img li").eq(index).stop().fadeIn(2000).siblings().stop().fadeOut(2000);
     });
     /*设置每一秒钟自动轮播：
     1.获取当前位置序号：自加操作；当超过图片最大序号时序号设置为0
     2.设置下侧顺序按钮及轮播图显示
     */
     var time=setInterval(move,2000);
     function move() {
        index++;
        if (index==5){
            index=0
        }
        $(".focus .num li").eq(index).addClass(".focus current").siblings().removeClass(".focus current");
        $(".focus .img li").eq(index).stop().fadeIn(2000).siblings().stop().fadeOut(2000);
     };
    /*当鼠标划入、划出轮播图区域时：
    1.划入时停止自动轮播
    2.划出时继续自动轮播
    */
    $(".focus-slider").hover(function(){
        $(this).find('.btn').show();//鼠标划入时轮播图切换按钮显示
        clearInterval(time);
    },
    function () {
        $(this).find('.btn').hide();
        time=setInterval(move,2000);
    });
    /*点击右侧按钮时执行*/
    $(".focus .right_btn").click(function () {
        move();
    });
    /*点击左侧按钮时执行*/
    function moveL() {
        index--;
        if (index==-1){
            index=4
        }
        $(".focus .num li").eq(index).addClass(".focus current").siblings().removeClass(".focus current");
        $(".focus .img li").eq(index).stop().fadeIn(2000).siblings().stop().fadeOut(2000);
    }
    $(".focus .left_btn").click(function () {
        moveL();
    });
