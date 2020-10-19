var CurrentImg = document.getElementById("image");
var prefix = document.getElementById("prefix");
var iterator = document.getElementById("iterator");
var postfix = document.getElementById("postfix");
 
function showImg(){
    CurrentImg.src = prefix.value + iterator.value + postfix.value;
}

$("#prefix").
    on("keydown",function(e){
        if(e.keyCode == 13){
            showImg();
        }
    });

$("#next")
    .on("click",function(){
        iterator.value = String(parseInt(iterator.value) + 1);
        window.scrollTo(0,0);
        showImg();
    });

