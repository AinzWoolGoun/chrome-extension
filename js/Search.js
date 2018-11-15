chrome.contextMenus.create({
  title:"使用Baidu搜索\"%s\"",
  contexts:['selection'],
  onclick:function(params){
    chrome.tabs.create({url:"http://www.baidu.com/s?ie=utf-8&wd="+encodeURI(params.selectionText)})
  }
});
