// var chatLists = {
//     stickMsg: [], //置顶消息列表 后期需要
//     baseMsg: {
//         "g1":{
//             "mid": "g1",
//             "type": "group",
//             "group_name": "公众聊天室",
//             "group_qrCode": "",
//             "read": true,
//             "logo":'http://cdn0.108zhibo.com/dyhj/Uploads/Picture/2017-09-07/59b0a900bc7c5.png',
//             "newMsgCount": 0,
//             "quiet": false,
//             "msg": [
//                /*  {
//                     "f_uid":100,
//                     f_rid:1,
//                     "data": "长按消息，唤醒消息操作菜单",
//                     "time": 1488117964,
//                     "f_name": "夜华",
//                     "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg",
//                     "is_checked":0,
//                 }*/
//             ],
//         },
//         "f1":{
//             "mid": "f1",
//             "type": "friend",
//             "group_name": "时崎狂三",
//             "group_qrCode": "",
//             "read": true,
//             "logo":'http://cdn0.108zhibo.com/dyhj/Uploads/Picture/2017-09-07/59b0a900bc7c5.png',
//             "newMsgCount": 0,
//             "quiet": false,
//             "msg": [
//                /*  {
//                     "f_uid":100,
//                     f_rid:1,
//                     "data": "长按消息，唤醒消息操作菜单",
//                     "time": 1488117964,
//                     "f_name": "夜华",
//                     "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg",
//                     "is_checked":0,
//                 }*/
//             ],
//         },
//         "f2":{
//             "mid": "f2",
//             "type": "friend",
//             "group_name": "忍野忍",
//             "group_qrCode": "",
//             "read": true,
//             "logo":'http://cdn0.108zhibo.com/dyhj/Uploads/Picture/2017-09-07/59b0a900bc7c5.png',
//             "newMsgCount": 0,
//             "quiet": false,
//             "msg": [
//                /*  {
//                     "f_uid":100,
//                     f_rid:1,
//                     "data": "长按消息，唤醒消息操作菜单",
//                     "time": 1488117964,
//                     "f_name": "夜华",
//                     "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg",
//                     "is_checked":0,
//                 }*/
//             ],
//         },
//         "f3":{
//             "mid": "f3",
//             "type": "friend",
//             "group_name": "test",
//             "group_qrCode": "",
//             "read": true,
//             "logo":'http://cdn0.108zhibo.com/dyhj/Uploads/Picture/2017-09-07/59b0a900bc7c5.png',
//             "newMsgCount": 0,
//             "quiet": false,
//             "msg": [
//                /*  {
//                     "f_uid":100,
//                     f_rid:1,
//                     "data": "长按消息，唤醒消息操作菜单",
//                     "time": 1488117964,
//                     "f_name": "夜华",
//                     "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg",
//                     "is_checked":0,
//                 }*/
//             ],
//         },
//     }
// }

const login = require('./login.js');

var chatLists = [
    {
        id      : 1,
        tid     : '',
        fid     : '',
        mid     : 123,
        name    : '公众聊天室',
        type    : 'group',
        icon    : 'http://pic.qiantucdn.com/58pic/26/13/18/58c2812bb54e2_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center',
        read    : true,
        qrCode  : '',
        newMsgCount : 20,
        quiet   : false
    },
    {
        id      : 2,
        tid     : '',
        fid     : '',
        mid     : 123,
        name    : '时崎狂三',
        type    : 'friend',
        icon    : 'https://tse1-mm.cn.bing.net/th?id=OIP.hJAF3P-CCcICpdXctXag2gDaEd&p=0&pid=1.1',
        read    : true,
        qrCode  : '',
        newMsgCount : 1,
        quiet   : false
    },
    {
        id      : 3,
        tid     : '',
        fid     : '',
        mid     : 123,
        name    : '忍野忍',
        type    : 'friend',
        icon    : 'http://p13.qhimg.com/dr/360_210_/t0179052db044e2b5f5.jpg',
        read    : true,
        qrCode  : '',
        newMsgCount : 0,
        quiet   : false
    },
    {
        id      : 4,
        tid     : '',
        fid     : '',
        mid     : 123,
        name    : 'admin',
        type    : 'friend',
        icon    : 'http://p1.qhimg.com/dr/250_500_/t01685cd2454d0a221f.jpg',
        read    : true,
        qrCode  : '',
        newMsgCount : 2,
        quiet   : false
    },
    {
        id      : 5,
        tid     : '',
        fid     : '',
        mid     : 123,
        name    : 'test',
        type    : 'friend',
        icon    : 'data:image/jpeg;base64,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',
        read    : true,
        qrCode  : '',
        newMsgCount : '99+',
        quiet   : false
    }
]


var culist = [
    {
        cid : 1,
        list : [
            1,
            2,
            3,
            4
        ]
    },
    {
        cid : 2,
        list : [
            2
        ]
    },
    {
        cid : 3,
        list : [
            3
        ]
    },
    {
        cid : 4,
        list : [
            4
        ]
    }
]


exports.list = function(req,res){
    res.json(chatLists);
}
exports.chat = function(req,res){
    var result = chatLists.filter( k => k.id == req.body.id )[0];
    var ulist  = culist.filter( k => k.cid == req.body.id )[0].list;
    var resultulist = [];
    console.log(1,ulist,login.user);
    for (var i = 0,l = ulist.length;i < l;i++){
        resultulist[i] = login.user.filter( k => k.id == ulist[i] )[0];
    }
    console.log(result,resultulist)
    result.ulist = resultulist;
    res.json(result);
}



