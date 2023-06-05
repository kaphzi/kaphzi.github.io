var mainImg = document.getElementById("mainImg");
var imgSrc = "imagesEn/";
var imgNum = 1;

var totalImgs = 19;



if(window.location.href.slice(-2,) == "en"){
    imgSrc = "imagesEn/";
} else if(window.location.href.slice(-2,) == "cn"){
    imgSrc = "imagesCn/";
    document.getElementsByTagName("title")[0].innerHTML = "紧绷的弦";
    mainImg.src = imgSrc + "1.png";
}

document.onkeydown = function (e){

    if(e.key == " " || e.key == "e" || e.key == "ArrowRight"){
        // if space or enter, continue
        // if x or b, go to corresponding choice
        swapImg(1);
    } else if(e.key=="q" || e.key=="ArrowLeft"){
        swapImg(0);
    } else if(e.key=="Escape"){
        window.location.href = "index.html";
    }

}

function swapImg(n) {
    if(n == 0 && imgNum > 1){
        // prev img
        imgNum --;
    } else if(n==1 && imgNum < totalImgs) {
        imgNum ++;
    }
    mainImg.src = imgSrc + ""+imgNum + ".png";
    console.log(imgSrc + ""+imgNum + ".png");
}

