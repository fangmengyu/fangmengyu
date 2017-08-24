/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-06 11:45:06
 * @version $Id$
 */

(function(){
    function w() {
        var r = document.documentElement; //根元素html
        var a = r.getBoundingClientRect().width;
            if (a > 750 ){
                a = 750;
            }
            rem = a / 7.5;
            r.style.fontSize = rem + "px";
    }
    var t;
    w();
    window.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(w, 300);
    }, false);


})();

function _alert(msg){
    layer.open({
        content: msg,
        btn: '我知道了'
  });
}

function _confirm(msg){

  layer.open({
    content: msg,
    btn: ['确定', '取消'],
    // yes: function(index){
    //   location.reload();
    //   layer.close(index);
    // }
  });
}
/*
window.onload=function(){
    //绑定登录查看我的订单
    document.getElementsByClassName('user')[0].onclick = function(){
        window.location.href = 'details.html';
    }
}*/