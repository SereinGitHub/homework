(function(){
    var num=0;
    var settime;
    $(".item").siblings().hide();
    $(".item").eq(0).show();
    var _lb={
        init:function(obj){
            //添加上一页，下一页，添加点击事件
            //是否添加li圆点
            if(obj.item2){
                _lb.lidian();
            }
            //是否添加自动轮播
            var time=obj.timer || 1000
            if(obj.auto){
                _lb.autoli(time);
            }
            _lb._addElement();
            _lb._addright();
            _lb._addleft();
        },
        //添加上下翻页
        _addElement:function(){
            var html=`<p id="right">&gt;</p>
                      <p id="left">&lt;</p>`
            $(".lbcontent")[0].innerHTML+=html;
        },
        //添加点击事件
        _addleft:function(){
            $("#left").click(function(){
                _lb.left();
            })
        },
        _addright:function(){
            $("#right").click(function(){
                _lb.right();
            })
        },
        //上一页
        left:function(){
            _lb.showlb();
            num--;
            if(num==0){
                num=$(".item").length;
            }
        },
        //下一页
        right:function(){
            _lb.showlb();
            num++;
            if(num==$(".item").length){
                num=0;
            }
        },
        //小圆点
        lidian:function(){
            var htmllidian=` <ul>
            <li class="item2 active"></li>
            <li class="item2"></li>
            <li class="item2"></li>
            <li class="item2"></li>
            <li class="item2"></li>
            <li class="item2"></li>
        </ul>`
            $(".lbcontent")[0].innerHTML+=htmllidian;
            //移入小圆点
            _lb.lidianhover();
        },
        //移入小圆点
        lidianhover: function () {
            $(".item2").hover(function(){
                    clearInterval(settime);
                    //获取当前li的值
                    num = $(this).index();
                    console.log(num)
                    _lb.showlb();
                }
            ), function () {
                _lb.autoli();
            }
        },
        //自动播放
        autoli:function(time){
            settime=setInterval(function(){
               _lb.showlb();
                num++;
                if(num==$(".item").length){
                    num=0;
                }
            },time)
        },
        //显示
        showlb:function(){
            $(".item").eq(num).fadeIn(300).siblings(".item").fadeOut(300);
            $(".item2").eq(num).addClass("active").siblings(".item2").removeClass("active");
        }
    }
    //暴露
    window.lb={init:_lb.init}
})()