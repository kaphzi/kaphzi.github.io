var mainImg = document.getElementById("mainImg");
var imgSrc = "imagesEn/";




if(window.location.href.slice(-2,) == "en"){
    imgSrc = "imagesEn/";
} else if(window.location.href.slice(-2,) == "cn"){
    imgSrc = "imagesCn/";
    document.getElementsByTagName("title")[0].innerHTML = "烈阳之下";
    document.getElementById("quit").innerHTML = "返回";
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
        if(imgNum > totalImgs){
            document.getElementById("main").innerHTML = document.getElementById("image").innerHTML;
            // document.body.innerHTML = document.getElementById("image").innerHTML;
            mainImg = document.getElementById("mainImg");
        }
        imgNum --;
        mainImg.src = imgSrc + ""+imgNum + ".png";
        console.log(imgSrc + ""+imgNum + ".png");
    } else if(n==1 && imgNum <= totalImgs) {
        if(imgNum < totalImgs){
            imgNum ++;
            mainImg.src = imgSrc + ""+imgNum + ".png";
        }
        else if(imgNum == totalImgs){
            document.getElementById("main").innerHTML = document.getElementById("end").innerHTML;
            imgNum ++;
        }
        
    }
}



// mobile swipe

let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if (touchendX < touchstartX) {
    // swiped left; go to next img
    swapImg(1);
  }
  if (touchendX > touchstartX) {
    swapImg(0);
  }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})