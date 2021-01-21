$(function () {
    $.ajax({
        url: 'http://sw4.bbs.duoyi.com/api/v2/csrfToken?_=' + Date.now(),
        type: 'GET',
        contentType: 'application/json',
        success: function ({ Message }) {
            const { csrfToken } = Message;
            console.log(csrfToken);
            doComment(csrfToken);
        },
        fail: function () {
            console.log('fail')
        }
    })

    function doComment(_csrf) {
        $.ajax({
            url: 'http://sw4.bbs.duoyi.com/api/v1/weibo/27499514/comments',
            type: 'POST',
            data: {
                zone: "sw3",
                wbcContent: '<p><img src="https://oss-bbs.2980.com/7f/d2/7fd293af29e57d01ae775f70c5036ad7-1167806-723x1563.png">&nbsp; test</p><p><br></p>',
                wbImages: ["https://oss-bbs.2980.com/7f/d2/7fd293af29e57d01ae775f70c5036ad7-1167806-723x1563.png"],
                _csrf
            },
            success: function ({ Desc, Code, Message, Succeed }) {
                console.log(Desc, Code, Message, Succeed);
            },
            fail: function () {
                console.log('fail')
            }
        })
    }
})
