/**
 * Created by Administrator on 2020/5/18/018.
 */
(function () {
    var _arrImg = [];
    var num = 0;
    var bannerTime;
    var banner = {
        //初始化
        init:function (obj) {
            _arrImg = [...obj.imgSrc];
            //添加元素
            banner._addEventLi();
            //添加事件
            banner.btnClick();
            //是否自动轮播
            if (obj.orBanner) {
                banner.bannerPlay(obj.time)
            }
            //是否添加小圆点
            if (obj.orYuanDian) {
                banner._addEventYuanDian();
            }
            //banner.hoverSuspended()
        },
        //添加元素
        _addEventLi:function () {
            for (var i = 0;i < _arrImg.length;i++) {
                $("#bannerUl").append("<li><img src='"+_arrImg[i]+"' alt=''/></li>");
            }
            $("#banner").append("<div id='btn'><button id='outBtn'>上一张</button><button id='nextBtn'>下一张</button></div>");
        },
        //是否添加小圆点
        _addEventYuanDian:function () {
            $("#banner").append("<div id='yuanDianDiv'></div>");
            for (var i = 0;i < _arrImg.length;i++) {
                $("#yuanDianDiv").append("<button class='yuanDianBtn' data-id='"+i+"'></button>")
            }
            //点击小圆点切换对应图片
            $(".yuanDianBtn").click(function () {
                num = jQuery(this).attr("data-id");
                banner.bannerUlmL();
            });
        },
        //自动轮播
        bannerPlay:function (time) {
           bannerTime = setInterval(banner.nextImg,time)
        },
        //鼠标移入轮播暂停
        hoverSuspended:function () {
            $("#banner").onmouseover = function () {
                clearInterval(bannerTime);
            };
            //移出继续播放
            $("#banner").onmouseout = function(){
                banner.bannerPlay()
            };
        },
        //切换按钮点击事件
        btnClick:function () {
            $("#outBtn").click(banner.outImg);
            $("#nextBtn").click(banner.nextImg);
        },
        //banner移动
        bannerUlmL:function () {
            $("#bannerUl").css({"marginLeft":-num*100 + "%"});
        },
        //上一张
        outImg:function () {
            if (num > 0) {
                num--;
            } else {
                num = _arrImg.length - 1;
            }
            banner.bannerUlmL()
        },
        //下一张
        nextImg:function () {
            if (num < _arrImg.length - 1) {
                num++;
            } else {
                num = 0;
            }
            banner.bannerUlmL();
        }
    };
    window.banner = {init:banner.init};
})();