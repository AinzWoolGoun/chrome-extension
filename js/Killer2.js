function kill(){
  var button=document.getElementsByClassName("show_topic js_show_topic");
  if(button.length>0){
    button[0].click();
  }

  let classnames=["mediav_ad",
                  "pulllog-box",
                  "adsbygoogle",
                  "img-wrapper"];

  let idnames=["adContent"];

  for(var name=0;name<classnames.length;name++){
    var ad=document.getElementsByClassName(classnames[name]);
    if(ad.length>0){
      var len=ad.length;
      for(var i=1;i<=len;i++){
        ad[0].parentNode.removeChild(ad[0]);
      }
    }
  }

  for(var name=0;name<idnames.length;name++){
    var ad=document.getElementById(idnames[name]);
    if(ad!=null){
        ad.parentNode.removeChild(ad);
    }
  }

}
kill();
