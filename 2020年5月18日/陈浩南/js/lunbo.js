//$(function () {
//    var lis = $(".lunbo>li");
//    var count = 0;
//
//    $(".arrow-right").click(function () {
//        count++;
//        if (count == lis.length) {
//            count = 0;
//        }
//        lis.eq(count).fadeIn(1000).siblings().fadeOut(1000);
//    });
//
//    $(".arrow-left").click(function () {
//        count--;
//        if (count == -1) {
//            count = lis.length - 1;
//        }
//        lis.eq(count).fadeIn(1000).siblings().fadeOut(1000);
//    });
//});


(function () {
    var lis = $(".lunbo>li");
    var count = 0;
    var lunbo = {
        init: function () {
            lunbo.autoplay();
            lunbo.addNext();
            lunbo.addPrev();
        },
        autoplay: function () {
            setInterval(next,1000)
        },
        addNext: function () {
            $("#arrow-right").onclick = lunbo.next;
        },
        addPrev: function () {
            $("#arrow-left").onclick = lunbo.prev;
        },
        next: function () {
            count++;
            if (count == lis.length) {
                count = 0;
            }
            lis.eq(count).fadeIn(1000).siblings().fadeOut(1000);
        },
        prev: function () {
            count--;
            if (count == -1) {
                count = lis.length - 1;
            }
            lis.eq(count).fadeIn(1000).siblings().fadeOut(1000);
        }
    };
    window.lunbo = {init: lunbo.init};
})();