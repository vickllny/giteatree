window.onload = init
/**
 * 初始化方法
 */
function init(){
    appendHtml('body', htmlStr());
    fileTree();
}
/**
 * 构建ztree
 */
function fileTree(){
    var setting = {
        data: {
            simpleData: {
                enable: true
            },
        },
        view: {
            showLine: false
        }
    };
    var data = [
        {name:'111',id:'111'},
        {name:'222',id:'222',pId:'111'},
        {name:'333',id:'333',pId:'111'},
        {name:'444',id:'444',pId:'111'},
        {name:'555',id:'555',pId:'111'},
        {name:'666',id:'666',pId:'111'},
        {name:'777',id:'777',pId:'111'},
    ];
    treeObj = $.fn.zTree.init($("#file-tree"), setting, data);
}
/**
 * html
 */
function htmlStr(){
    var navHtmlStr = '<nav></nav>';
    var $nav = $(navHtmlStr);
    $nav.addClass('gitea-sidebar');
    $nav.append('<div class="ztree" id="file-tree"></div>')
    return $nav;
}
/**
 * 指定元素内添加html
 * @param eleName 
 * @param html 
 */
function appendHtml(eleName,html){
    var $ele = $(eleName);
    if($ele){
        children = $ele.children();
        var lastHtmlDom = null;
        for(var i=0;i<children.length;i++){
            var $c = $(children[i]);
            var tagName = $c.get(0).tagName;
            if(!isScriptOrStyleTag(tagName)){
                lastHtmlDom = $c;
            }
        }
        if(lastHtmlDom){
            lastHtmlDom.after(html);
        }
    }
}
/**
 * 判断标签是否是script 或者 style
 * @param {标签名} tagName 
 */
function isScriptOrStyleTag(tagName){
    return tagName.toLowerCase() === 'script' || tagName.toLowerCase() === 'style';
}