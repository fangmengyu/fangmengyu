var count = 2;
var chatlist =  [
    {
        type   : 0,
        name   : '时崎狂三',
        userid : '10',
        src    : 'https://tse1-mm.cn.bing.net/th?id=OIP.hJAF3P-CCcICpdXctXag2gDaEd&p=0&pid=1.1',
        time   : 1505283681399,
        msg    : '今天的黄金行情大家怎么看',
        msgid  : 0,
    },
    {
        type   : 0,
        name   : '忍野忍',
        userid : '12',
        src    : 'http://p13.qhimg.com/dr/360_210_/t0179052db044e2b5f5.jpg',
        time   : 1505983684399,
        msg    : '咔咔<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505802535180&di=e60fe064b3a8c0283a1a973359722991&imgtype=jpg&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8694a4c27d1ed21bd85def25a46eddc450da3f5e.jpg"></img>',
        msgid  : 1
    },
    {
        type   : 1,
        name   : '月火',
        userid : '13',
        src    : 'http://p1.qhimg.com/dr/250_500_/t01685cd2454d0a221f.jpg',
        time   : 15059836119399,
        msg    : '好无聊啊',
        msgid  : 2
    }
]

exports.getchatList = function(){
    return chatlist;
}
exports.addchatmsg = function(msg){
    console.log(msg)
    msg.msgid = ++count;
    chatlist.push(msg);
    return msg;
}
exports.deletechatmsg = function(msgid) {
    chatlist = chatlist.filter( el =>{
        return el.msgid != msgid.msgid;
    } )
    return chatlist;
}