/**
 * Created by Allie on 2020/5/18.
 */
(function () {
    var imgArr = [];
    var currentIndex = 0;
    var spotArr = [];
    var autoPlayTimer; // 设置自动轮播定时器
    var lunbo = {
        init:function (obj) {
            //1- 接收传过来的轮播数组图片
            imgArr = obj.imgArr;
            if(imgArr.length > 0){ //如果传过来的轮播图片数组不为空，添加上一页 下一页样式
                lunbo.addPage();
            }
            $("#lunbo").on("click","#prev",function () {  //为上一页添加事件
                lunbo.prev();
            });
            $("#lunbo").on("click","#next",function () {  //为下一页添加事件
                lunbo.next();
            });
            //2- 是否添加小圆点
            if(obj.showSpot){
                lunbo.addSpot(); //添加圆点
                spotArr = $("#spot span");
                spotArr.click(function () {
                   currentIndex = $(this).index(); //获取当前点击圆点的索引
                    $("#showImg").attr("src",imgArr[currentIndex]); //把图片换成当前索引的图片
                    spotArr.removeClass("active"); //先把所有圆点移除active
                    $(spotArr[currentIndex]).attr("class","active"); //为当前点击的小圆点添加active --- attr是jquery才有的
                });
            }
            //3- 是否添加自动轮播
            if(obj.autoplay){
                lunbo.autoPlay();
                //设置鼠标移入移除轮播的播放和暂停
                $("#lunbo").mouseover(function () {
                    lunbo.endAotuPlay();  //鼠标移入 自动轮播暂停
                });
                $("#lunbo").mouseout(function () {
                    lunbo.autoPlay();  //鼠标移除  轮播自动播放
                });
            }
        },
        //设置自动轮播
        autoPlay:function () {
            autoPlayTimer = setInterval(lunbo.next,1000);
        },
        //结束自动轮播
        endAotuPlay:function () {
            clearInterval(autoPlayTimer);
        },
        //添加上一页 下一页样式
        addPage:function () {
            var htmlStr =  `<img src="imgs/toPre.png" id="prev">
                            <img src="imgs/toNext.png" id="next">`;
            $("#lunbo").append(htmlStr);
        },
        //添加小圆点
        addSpot:function () {
            var htmlStr = `<div id="spot"><span class="active"></span></div>`;
            $("#lunbo").append(htmlStr);
            for(var i=1;i<imgArr.length;i++){ //已经默认显示一个了，下标就从1开始
                $("#spot").append(`<span></span>`);
            }
        },
        //上一页
        prev:function () {
            currentIndex--;
            if(currentIndex < 0){
                currentIndex = imgArr.length - 1;
            }
            lunbo.showImg();
        },
        //下一页
        next:function () {
            currentIndex++;
            if(currentIndex > imgArr.length - 1){
                currentIndex = 0;
            }
            lunbo.showImg();
        },
        //显示图片
        showImg:function () {
            $("#showImg").attr("src",imgArr[currentIndex]);
            if(spotArr.length != 0){
                spotArr.removeClass("active"); //先把所有的active移除
                $(spotArr[currentIndex]).attr("class","active"); //为当前原点添加active
            }
        }
    };
    window.lunbo={init:lunbo.init};
})();