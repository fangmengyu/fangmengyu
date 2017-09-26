var artical = [
    {
        title : '美联储加息预期降温 美元走软支撑亚盘金价持稳。',
        src   : 'http://img.kxt.com/uploads/image/69d/d8ada09d575f3ae48859f5c1db90e7.jpg',
        source : '文/快讯通财经',
        sourcesrc : 'https://www.bing.com/',
        time   : '2017-09-07',
        arcid  : 1,
        cont : '<img class="banner" src="http://pic36.photophoto.cn/20150830/0033034027690794_b.jpg" alt="">\
            <p>今日凌晨两点美联储发布政策声明称，从10月份开始启动渐进式被动缩表，这是解除历史性经济刺激计划的首次试探。耶伦在会后的新闻发布会上表示，美国经济足够强劲，能够承受进一步加息以及缩减资产负债表，并宣布将于10月开始缩减4.5万亿美元的资产负债表。与此同时，美联储维持基准利率1%-1.25%不变，但暗示今年可能再次加息，尽管近期的通胀数据表现低迷。</p>\
            <p>于此之外，特朗普在周二的联合国大会上称，“朝鲜的核武器与弹道导弹是对全世界的威胁，如果美国被迫自卫或者保护盟国那么将别无选择去彻底摧毁朝鲜”。 针对各方对于特朗普在联大发言的质疑，美国常驻联合国代表黑莉昨天在接受媒体采访时表示，特朗普并没有要和朝鲜开战的意思，美国还没有放弃外交努力解决朝鲜半岛危机。</p>\
            <p>目前来看，朝鲜局势是最大的地缘政治不确定因素，黄金时刻保持警惕，美朝之间的任何“风吹草动”无疑都将影响黄金走势。而美联储声明偏鹰派，这个黄金造成了压力，如果黄金持续稳在1300下方，我们将会看到更多的技术性抛售，从而导致黄金进一步下跌，除非地缘政治上出现超预期的因素。</p>\
            <p>从日线上看黄金在BOLL上轨待了长达2个月，于本周一回到BOLL下轨并在昨晚受到美联储影响短线跌破1300位置，目前仍在1300左右震荡，MACD高位死叉向下运行，空头呈持续放量状态。从四小时图看，黄金本周整体处于BOLL中轨下方以波浪震荡下跌，目前BOLL开口向下运行，MACD低位死叉向下运行，空头呈持续放量状态。从一小时图看，BOLL开口向下运行，MACD空头放量减缓，短线有回调迹象。综合来看黄金短期空头显著，多单不建议参与。</p>\
            <p>很多人不懂得分析与现价单有着天壤之别，我的操盘经验期待与大家共同探讨，如何在盘中做到游刃有余！我能理解你亏损后的身心疲惫，并将为你出谋划策，桥梁已经搭建，而过河与否在于你的选择。</p>\
            <p>德国商业银行（Commerzbank）预计黄金2017年将以1300美元终结，但明年金价将攀升至1400美元。 德国商业银行对</p>'
    },
    {
        title : '基于 Node.js 平台，快速、开放、极简的 web 开发框架。',
        src   : 'http://img.kxt.com/uploads/image/f8b/bf91661793a90a72a30bc29e106938.jpg',
        source : 'express',
        sourcesrc : 'https://www.bing.com/',
        time   : '2017-09-26',
        arcid  : 2,
        cont : '<img class="banner" src="http://pic36.photophoto.cn/20150830/0033034027690794_b.jpg" alt="">\
            <h2>Web 应用</h2>\
            <p>Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。</p>\
            <h2>API</h2>\
            <p><img src="http://pic17.nipic.com/20111026/3631203_103332255000_2.jpg" alt=""></p>\
            <p>丰富的 HTTP 快捷方法和任意排列组合的 Connect 中间件，让你创建健壮、友好的 API 变得既快速又简单。</p>\
            <h2>性能</h2>\
            <p>Express 不对 Node.js 已有的特性进行二次抽象，我们只是在它之上扩展了 Web 应用所需的基本功能。</p>\
            <h2>LoopBack 提供赞助</h2>\
            <p>Develop model-driven apps with an Express-based framework.Find out more at loopback.io.</p>'
    }
]


exports.list = function(req,res){
    res.json(artical);
}
exports.arc = function(req,res){
    var result;
    if ( artical.length > 0 ) {
        if ( req.body.arcid ) {
            result = artical.filter( ( key,i ) => {
                return key.arcid == req.body.arcid;
            })[0];
        } else {
            result = artical[0];
        }
        if (result) {
            console.log(result)
            res.json(result);
        } else {
            res.send('没有相关文章');
        }
    } else {
        res.send('暂无数据');
    }
}
