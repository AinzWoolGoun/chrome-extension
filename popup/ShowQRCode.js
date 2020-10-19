var qrcode = new QRCode(document.getElementById("qrcode"),{width:100,height:100});
function makeCode(){
    var elText = document.getElementById("text");
    if(!elText.value){
        alert("Input a text");
        elText.focus();
        return;
    }
    qrcode.makeCode(elText.value);
}
makeCode();
$("#text").
    on("blur",function(){  /*失去焦点时触发*/
        makeCode();
    }).
    on("keydown",function(e){
        if(e.keyCode == 13){
            makeCode();
        }
    });