(function(){
    var num=0;
    var settime;
    $(".item").siblings().hide();
    $(".item").eq(0).show();
    var _lb={
        init:function(obj){
            //�����һҳ����һҳ����ӵ���¼�
            //�Ƿ����liԲ��
            if(obj.item2){
                _lb.lidian();
            }
            //�Ƿ�����Զ��ֲ�
            var time=obj.timer || 1000
            if(obj.auto){
                _lb.autoli(time);
            }
            _lb._addElement();
            _lb._addright();
            _lb._addleft();
        },
        //������·�ҳ
        _addElement:function(){
            var html=`<p id="right">&gt;</p>
                      <p id="left">&lt;</p>`
            $(".lbcontent")[0].innerHTML+=html;
        },
        //��ӵ���¼�
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
        //��һҳ
        left:function(){
            _lb.showlb();
            num--;
            if(num==0){
                num=$(".item").length;
            }
        },
        //��һҳ
        right:function(){
            _lb.showlb();
            num++;
            if(num==$(".item").length){
                num=0;
            }
        },
        //СԲ��
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
            //����СԲ��
            _lb.lidianhover();
        },
        //����СԲ��
        lidianhover: function () {
            $(".item2").hover(function(){
                    clearInterval(settime);
                    //��ȡ��ǰli��ֵ
                    num = $(this).index();
                    console.log(num)
                    _lb.showlb();
                }
            ), function () {
                _lb.autoli();
            }
        },
        //�Զ�����
        autoli:function(time){
            settime=setInterval(function(){
               _lb.showlb();
                num++;
                if(num==$(".item").length){
                    num=0;
                }
            },time)
        },
        //��ʾ
        showlb:function(){
            $(".item").eq(num).fadeIn(300).siblings(".item").fadeOut(300);
            $(".item2").eq(num).addClass("active").siblings(".item2").removeClass("active");
        }
    }
    //��¶
    window.lb={init:_lb.init}
})()