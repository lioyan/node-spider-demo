var cheerio = require('cheerio');
var request = require('sync-request');
var fs = require('fs');

var startURL = "https://search.jd.com/Search?keyword=%E6%89%8B%E6%9C%BA&enc=utf-8&wq=%E6%89%8B%E6%9C%BA&pvid=e5d21c4f3b9d4deb8fad72d104d4eaf5";
var linksToGo = []; //链接列表
linksToGo.push(startURL);


while (linksToGo.length > 0) {
    try {

      var url = linksToGo[0];
      linksToGo.splice(0,1);

        console.log("当前正在处理",url,"这个页面");
        html = request('GET', url).getBody().toString();
        var $ = cheerio.load(html);
        var _link = $('a');
        console.log("页面上有：" + _link.length + "个链接");

        _link.each(function() {
            var _link = $(this).attr("href") || "";
            //链接的过滤规则
            if (_link == "") return true;
            if(_link =="#") return true;
            if (_link.substr(0,11) == "javascript:") return true;
            if (_link.substr(0, 2) == "//") _link = "http:" + _link;
            if (_link.substr(0, 1) == "/" && _link.substr(0, 2) != "//") _link = "https:" + _link;
            if (linksToGo.indexOf(_link) > -1) return true;

            linksToGo.push(_link);
        });
        console.log("队列里有" + linksToGo.length + "个链接");
    } catch (ex) {
        console.log(ex);
        //getNext();
    }
}
