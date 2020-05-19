/**
 * Created by asus on 2020/5/18.
 */
(function(){
    var index=0;
    var imgLeft=parseInt($("#content").css("margin-left"));
    var imgArr=$("#content img");
    var imgLength=imgArr.length;
    var imgwidth=parseInt($("img").css("width"));
    var lunbo={
        init:function(obj){
            lunbo._addDomElment();
            lunbo.btnOclik();
            lunbo.lunboPlay();
            lunbo.addyuan();
            //是否自动轮播
            //if (obj.isLunbo) {
            //    lunbo.lunboPlay(obj.time)
            //}
        },

        //添加元素
        _addDomElment:function(){
            var page=$("#page");
            page.append(`<span id="left"> &lt; </span>
                    <span id="right"> &gt; </span>`);
        },
        //点击事件
        btnOclik:function(){
            $("#left").click(lunbo.proImg);
            $("#right").click(lunbo.proImg);
        },
        //上一页
        proImg:function(){
            if(imgLeft==0){
                imgLeft=-imgwidth*(imgLength-1);
            }else{
                imgLeft+=imgwidth;
            }
            $("#content").css({"margin-left":imgLeft+"px"});
        },
        //下一页
        nextImg:function(){
            if(imgLeft==-imgwidth*(imgLength-1)){
                imgLeft=0;
            }else{
                imgLeft-=imgwidth;
            }
            content.css({"margin-left":imgLeft+"px"});
        },
        //自动轮播
        lunboPlay:function (time) {
            bannerTime = setInterval(lunbo.nextImg,time)
        },
        //原点事件
        addyuan:function(){
            var yuans=$("#yuans");
            for(var i=0;i<imgLength;i++){
                yuans.append(`
                <span data-id="${i}" class="yuan"></span>
                `);
            }
            //点击圆点切换对应图片
            $(".yuan").click(function () {
                newLeft = jQuery(this).attr("data-id");
                lunbo.bannerUlmL();
            });
        },
        bannerUlmL:function () {
            $("#content").css({"marginLeft":-(newLeft)*imgwidth + "px"});
        }
    }
    window.lunbo = {init:lunbo.init};
})();