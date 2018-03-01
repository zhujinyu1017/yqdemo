/**
 * Created by zhujinyu on 2018/2/7.
 */
//渲染模板
function getRenderTmpl(tmpl,data_set) {

    var template = $(tmpl).html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, data_set);
    return rendered;
}
function addItem(tmpl,data_set,obj) {
    switch (obj){
        case '#demo1':
            data_set.list1.map(function(currentValue){
                var eval = parseInt(currentValue.evaluation);
                var arr = [];
                for(var i=0;i<eval;i++){
                    arr.push('★');
                }
                currentValue.star = arr;
                return currentValue;
            });
            break;
        case '#demo2':
            data_set.list2.map(function(currentValue){
                var eval = parseInt(currentValue.evaluation);
                var arr = [];
                for(var i=0;i<eval;i++){
                    arr.push('★');
                }
                currentValue.star = arr;
                return currentValue;
            });
            break;
        case '#demo3':
            data_set.list3.map(function(currentValue){
                var eval = parseInt(currentValue.evaluation);
                var arr = [];
                for(var i=0;i<eval;i++){
                    arr.push('★');
                }
                currentValue.star = arr;
                return currentValue;
            });
            break;
    }
    var rendered = getRenderTmpl(tmpl,data_set);
    $(obj).append(rendered);
}
/*跳转到地图*/
function initGaode() {
    map = new AMap.Map("mapContainer");
    AMap.plugin(["AMap.Driving"], function() {
        var drivingOption = {
            policy:AMap.DrivingPolicy.LEAST_TIME,
            map:map
        };
        var driving = new AMap.Driving(drivingOption); //构造驾车导航类
        $(document).on('click','.navigation',function () {
            console.log($(this));
            var location_end = $(this).attr("data-end").split(",");
            //根据起终点坐标规划驾车路线
            driving.search([116.379028, 39.865042], location_end,function(status,result){
                driving.searchOnAMAP({
                    origin:result.origin,
                    destination:result.destination
                });
            });
        })
    });
}