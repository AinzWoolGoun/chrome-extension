function kill(){
  var button1=document.getElementById("btn-readmore");
  var background1=document.getElementsByClassName("blog-content-box");
  var background2=document.getElementsByClassName("prettyprint");

  if(button1!=null){
    button1.click();
  }
  if(background1.length>0){
    background1[0].style.background="rgb(250, 249, 222)";
  }
  if(background2.length>0){
    for(var i=0;i<background2.length;i++)
      background2[i].firstChild.style.background="rgb(250, 249, 222)";
  }

  var ad1=document.getElementsByClassName("csdn-tracking-statistics mb8 box-shadow");
  var ad2=document.getElementById("asideFooter");
  var ad3=document.getElementsByClassName("pulllog-box");
  var ad4=document.getElementsByClassName("_360_interactive");
  var ad5=document.getElementById("adContent");
  var ad6=document.getElementsByClassName("recommend-item-box recommend-ad-box");
  var ad7=document.getElementsByClassName("p4course_target");
  var ad8=document.getElementsByClassName("wrap");

  if(ad1.length>0){
      ad1[0].parentNode.removeChild(ad1[0]);
  }
  if(ad2!=null){
    ad2.parentNode.removeChild(ad2);
  }
  if(ad3.length>0){
    ad3[0].parentNode.removeChild(ad3[0]);
  }
  if(ad4.length>0){
    ad4[0].parentNode.removeChild(ad4[0]);
  }
  if(ad5!=null){
    ad5.parentNode.removeChild(ad5);
  }
  if(ad6.length>0){
    var len=ad6.length;
    for(var i=0;i<len;i++){
        ad6[0].parentNode.removeChild(ad6[0]);
    }
  }
  if(ad7.length>0){
    ad7[0].style.visibility="hidden";
  }
  if(ad8.length>0){
    ad8[0].style.visibility="hidden";
  }
}
kill();
