chrome.contextMenus.create({
  title:"使用Baidu搜索\"%s\"",
  contexts:['selection'],
  onclick:function(params){
    chrome.tabs.create({url:"http://www.baidu.com/s?ie=utf-8&wd="+encodeURI(params.selectionText)})
  }
});

chrome.contextMenus.create({
  title:"使用Google翻译\"%s\"",
  contexts:['selection'],
  onclick:function(params){
    chrome.tabs.create({url:"https://translate.google.cn/#en/zh-CN/"+encodeURI(params.selectionText)})
  }
});

chrome.contextMenus.create({
  title:"ImgReader",
  contexts:["browser_action"],
  onclick:function(info,tab){
    chrome.tabs.create({url:'../ImgReader/imgReader.html'});
  }
});

