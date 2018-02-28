$(function () {
    'use strict';
      //多个标签页下的无限滚动
    $(document).on("pageInit", "#page-fixed-tab-infinite-scroll", function(e, id, page) {
        var loading = false;
        var time=0;
        $(page).on('infinite', function() {
            // 如果正在加载，则退出
            if (loading) return;
            // 设置flag
            loading = true;
            var hasNext = true;
            if (time > 4) {
                hasNext = false;
            }
            var data = {
                banner:[
                    {
                        img_url:'./public/img/a1.jpg',
                        url:''
                    },
                    {
                        img_url:'./public/img/a2.jpg',
                        url:''
                    },
                    {
                        img_url:'./public/img/a3.jpg',
                        url:''
                    },
                    {
                        img_url:'./public/img/a4.jpg',
                        url:''
                    },
                    {
                        img_url:'./public/img/a5.jpg',
                        url:''
                    }
                ],
                name: 'Fxtpl模板引擎',
                list1: [
                    {
                        img_url:"./public/img/a1.jpg",
                        title:'标题一',
                        sub_title:'子标题一'
                    },
                    {
                        img_url:"./public/img/a1.jpg",
                        title:'标题一',
                        sub_title:'子标题一'
                    },
                    {
                        img_url:"./public/img/a1.jpg",
                        title:'标题一',
                        sub_title:'子标题一'
                    },
                    {
                        img_url:"./public/img/a1.jpg",
                        title:'标题一',
                        sub_title:'子标题一'
                    },
                    {
                        img_url:"./public/img/a1.jpg",
                        title:'标题一',
                        sub_title:'子标题一'
                    },
                    {
                        img_url:"./public/img/a1.jpg",
                        title:'标题一',
                        sub_title:'子标题一'
                    },
                    {
                        img_url:"./public/img/a1.jpg",
                        title:'标题一',
                        sub_title:'子标题一'
                    },
                    {
                        img_url:"./public/img/a1.jpg",
                        title:'标题一',
                        sub_title:'子标题一'
                    },
                    {
                        img_url:"./public/img/a1.jpg",
                        title:'标题一',
                        sub_title:'子标题一'
                    },
                    {
                        img_url:"./public/img/a1.jpg",
                        title:'标题一',
                        sub_title:'子标题一'
                    },
                    {
                        img_url:"./public/img/a1.jpg",
                        title:'标题一',
                        sub_title:'子标题一'
                    },
                    {
                        img_url:"./public/img/a1.jpg",
                        title:'标题一',
                        sub_title:'子标题一'
                    },
                ],
                list2: [
                    {
                        img_url:"./public/img/a2.jpg",
                        title:'标题二',
                        sub_title:'子标题二'
                    },
                    {
                        img_url:"./public/img/a2.jpg",
                        title:'标题二',
                        sub_title:'子标题二'
                    },
                    {
                        img_url:"./public/img/a2.jpg",
                        title:'标题二',
                        sub_title:'子标题二'
                    },
                    {
                        img_url:"./public/img/a2.jpg",
                        title:'标题二',
                        sub_title:'子标题二'
                    },
                    {
                        img_url:"./public/img/a2.jpg",
                        title:'标题二',
                        sub_title:'子标题二'
                    },
                    {
                        img_url:"./public/img/a2.jpg",
                        title:'标题二',
                        sub_title:'子标题二'
                    },
                    {
                        img_url:"./public/img/a2.jpg",
                        title:'标题二',
                        sub_title:'子标题二'
                    },
                    {
                        img_url:"./public/img/a2.jpg",
                        title:'标题二',
                        sub_title:'子标题二'
                    },
                    {
                        img_url:"./public/img/a2.jpg",
                        title:'标题二',
                        sub_title:'子标题二'
                    },
                    {
                        img_url:"./public/img/a2.jpg",
                        title:'标题二',
                        sub_title:'子标题二'
                    },
                    {
                        img_url:"./public/img/a2.jpg",
                        title:'标题二',
                        sub_title:'子标题二'
                    },
                    {
                        img_url:"./public/img/a2.jpg",
                        title:'标题二',
                        sub_title:'子标题二'
                    }
                ],
                list3: [
                    {
                        img_url:"./public/img/a3.jpg",
                        title:'标题三',
                        sub_title:'子标题三'
                    },
                    {
                        img_url:"./public/img/a3.jpg",
                        title:'标题三',
                        sub_title:'子标题三'
                    },
                    {
                        img_url:"./public/img/a3.jpg",
                        title:'标题三',
                        sub_title:'子标题三'
                    },
                    {
                        img_url:"./public/img/a3.jpg",
                        title:'标题三',
                        sub_title:'子标题三'
                    },
                    {
                        img_url:"./public/img/a3.jpg",
                        title:'标题三',
                        sub_title:'子标题三'
                    },
                    {
                        img_url:"./public/img/a3.jpg",
                        title:'标题三',
                        sub_title:'子标题三'
                    },
                    {
                        img_url:"./public/img/a3.jpg",
                        title:'标题三',
                        sub_title:'子标题三'
                    },
                    {
                        img_url:"./public/img/a3.jpg",
                        title:'标题三',
                        sub_title:'子标题三'
                    },
                    {
                        img_url:"./public/img/a3.jpg",
                        title:'标题三',
                        sub_title:'子标题三'
                    },
                    {
                        img_url:"./public/img/a3.jpg",
                        title:'标题三',
                        sub_title:'子标题三'
                    },
                    {
                        img_url:"./public/img/a3.jpg",
                        title:'标题三',
                        sub_title:'子标题三'
                    },
                    {
                        img_url:"./public/img/a3.jpg",
                        title:'标题三',
                        sub_title:'子标题三'
                    }
                ]
            };
            // 模拟1s的加载过程
            setTimeout(function() {
                // 重置加载flag
                loading = false;
                if (!hasNext) {
                    // 加载完毕，则注销无限加载事件，以防不必要的加载
                    $.detachInfiniteScroll($('.infinite-scroll'));
                    // 删除加载提示符
                    $('.infinite-scroll-preloader').html("<span style='font-size: .6rem;color: #dbdbdb;'>到底了(⊙o⊙)</span>");
                    return;
                }
                var index= parseInt($(".tab.active").index())+1;
                addItem("#list"+index,data,"#demo"+index);
                // 更新最后加载的序号
                $.refreshScroller();
            }, 1000);
            time++;
        });
    });
    $(document).on("pageInit", "#page-index", function(e, pageId, $page) {});
    $.init();
});
