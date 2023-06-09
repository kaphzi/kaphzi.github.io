var mainImg = document.getElementById("mainImg");
var imgSrc = "imagesEn/";
const choiceScenes = [50, 80, 85, 160];

var lang = "en";

var choices = document.getElementById("choices");
choices.style = "display: none;";
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

if(window.location.href.slice(-2,) == "en"){
    imgSrc = "imagesEn/";
    lang = "en";
} else if(window.location.href.slice(-2,) == "cn"){
    imgSrc = "imagesCn/";
    document.getElementsByTagName("title")[0].innerHTML = "掉落的帽子";
    document.getElementById("quit").innerHTML = "返回";
    mainImg.src = imgSrc + "10.png";
    lang = "cn";
}





document.onkeydown = function (e){
    if(imgNum == 125 || imgNum == 260){
        if(e.key=="Escape"){
            window.location.href = "index.html";
        }
        return;
    }

    // if choice scene, only respond to keypress of x or b
    // else 
    if(choiceScenes.includes(imgNum)){
        if(e.key == "x") {
            // first choice (canon choice)
            swapImg(1);
        } else if(e.key == "b") {
            // second non canonical choice
            swapImg(0);
        } else if(e.key=="Escape"){
            window.location.href = "index.html";
        }
    } else {
        // normal img
        if(e.key == " " || e.key == "e" || e.key == "ArrowRight"){
            // if space or enter, continue
            // if x or b, go to corresponding choice
            swapImg(1);
        }
    }


}

function swapImg(n) {
    switch(imgNum){
        case 50:
        case 80:
        case 160:
            if(n == 1){
                imgNum += 10;
            } else {
                imgNum += 15;
            }
            break;
        case 85:
            if(n == 1){
                imgNum = 90;
            } else {
                imgNum = 95;
            }
            break;
        case 215:
            imgNum = 220;
            break;
        default:
            imgNum += 10;
    }
    // if end of cutscene
    if(imgNum == 115 || imgNum == 260){
        document.getElementById("main").innerHTML = document.getElementById("end").innerHTML;
        return;
    }
    mainImg.src = imgSrc + ""+imgNum + ".png";
    
    // choice buttons
    if(choiceScenes.includes(imgNum)){
        choices.style = "display: flex;";
        mainImg.onclick = null;
        console.log("disabled click img");
        if(lang == "en"){
            switch(imgNum){
                case 50:
                    button1.innerHTML = "I'll go with you.<span class=\"square-button\">X</span>";
                    button2.innerHTML = "Good luck.<span class=\"square-button\">B</span>";
                    break;
                case 80:
                case 85:
                    button1.innerHTML = "I'm fine.<span class=\"square-button\">X</span>";
                    button2.innerHTML = "You're right.<span class=\"square-button\">B</span>";
                    break;
                case 160:
                    button1.innerHTML = "Separate.<span class=\"square-button\">X</span>";
                    button2.innerHTML = "Stick with Arthur.<span class=\"square-button\">B</span>";
                    break;
            }
        } else if(lang == "cn"){
            switch(imgNum){
                case 50:
                    button1.innerHTML = "我和你一起去。<span class=\"square-button\">X</span>";
                    button2.innerHTML = "祝你好运。<span class=\"square-button\">B</span>";
                    break;
                case 80:
                case 85:
                    button1.innerHTML = "我不累。<span class=\"square-button\">X</span>";
                    button2.innerHTML = "你说得对。<span class=\"square-button\">B</span>";
                    break;
                case 160:
                    button1.innerHTML = "分开找<span class=\"square-button\">X</span>";
                    button2.innerHTML = "一起找<span class=\"square-button\">B</span>";
                    break;
            }
        }
        
        console.log("display choices");

    } else if(!choiceScenes.includes(imgNum)){
        choices.style = "display: none;";
        mainImg.onclick = function() {swapImg(1);};
        console.log("reenable click img");
        console.log("hide choices");
    }

}



// mobile swipe

// let touchstartX = 0
// let touchendX = 0
    
// function checkDirection() {
//   if (touchendX < touchstartX) {
//     // swiped left; go to next img
//     swapImg(1);
//   }
// //   if (touchendX > touchstartX) {
// //     swapImg(0);
// //   }
// }

// document.addEventListener('touchstart', e => {
//   touchstartX = e.changedTouches[0].screenX
// })

// document.addEventListener('touchend', e => {
//   touchendX = e.changedTouches[0].screenX
//   checkDirection()
// })