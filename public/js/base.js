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
    var rendered = getRenderTmpl(tmpl,data_set);
    $(obj).append(rendered);
}