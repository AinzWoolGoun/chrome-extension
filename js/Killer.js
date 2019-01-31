function kill(){
  var button1=document.getElementById("btn-readmore");
  if(button1!=null){
    button1.click();
  }

  var background1=document.getElementsByClassName("blog-content-box");
  if(background1.length>0){
    background1[0].style.background="rgb(250, 249, 222)";
  }

  var background2=document.getElementsByClassName("prettyprint");
  if(background2.length>0){
    for(var i=0;i<background2.length;i++)
      background2[i].firstChild.style.background="rgb(250, 249, 222)";
  }

  let classnames=["csdn-tracking-statistics mb8 box-shadow",
                  "pulllog-box",
                  "_360_interactive",
                  "recommend-item-box recommend-ad-box",
                  "p4course_target",
                  "p4course_target",
                  "mediav_ad",
                  "aside-box custom-box",
                  "light-box",
                  "indexSuperise",
                  "blog_star_enter"];

  let idnames=["asideFooter",
              "adContent"];

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
