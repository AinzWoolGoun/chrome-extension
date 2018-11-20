function kill(){
  var button=document.getElementsByClassName("show_topic js_show_topic");
  if(button.length>0){
    button[0].click();
  }

  var ad1=document.getElementsByClassName("mediav_ad");
  var ad2=document.getElementsByClassName("pulllog-box");
  var ad3=document.getElementById("adContent");

  if(ad1.length>0){
    var len=ad1.length;
    for(var i=1;i<=len;i++){
      ad1[0].parentNode.removeChild(ad1[0]);
    }
  }
  if(ad2.length>0){
    ad2[0].parentNode.removeChild(ad2[0]);
  }
  if(ad3!=null){
      ad3.parentNode.removeChild(ad3);
  }

}
kill();
