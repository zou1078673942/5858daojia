let Mock = require('mockjs')

let data = Mock.toJSONSchema({
    'info|3-4': [{
        'name': '@cname',
        "image": "@image('75x75')",
        "day": ["今天", "昨天", "前天", "一周前", "一个月前"],
        "time": "@time",
        "text": "@ctext"
    }] 
}) 

module.exports = data;