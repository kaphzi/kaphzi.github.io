var mainImg = document.getElementById("mainImg");
var source;
var imgNum = 0;


//const choiceScenes = [50, 75, 80, 130, 175];
// 50 -> 60 || 65
// 130 -> 140 || 145

// 75 -> 90 || 85
// 80 -> 90 || 85

// 175 -> 180

// all other cases img src += 10


if(window.location.href == "scene.html#en"){
    
}

document.onkeydown = function (e){
    if(e.key == " " || e.key == "x" || e.key == "b" || e.key == "Enter"){
        // if space or enter, continue
        // if x or b, go to corresponding choice
        swapImg(e.key);
    }
}

function swapImg(k) {
    //source = "";
    source = mainImg.src;
    imgNum = parseInt(source.slice(source.lastIndexOf('/')+1, -4));
    // source = source.slice(0,source.lastIndexOf('/')+1);
    source = imgDir;

    switch (imgNum){
        case imgNum == 50:
        case imgNum == 130:
            console.log(imgNum);
            if(k == "x"){
                imgNum += 10;
            } else if (k=="b"){
                imgNum += 15;
            }
            source += imgNum + ".png";
            break;

        case imgNum == 75:
        case imgNum == 80:
            if(k == "x"){
                // responded positively; first choice
                source += "90.png";
            } else {
                // responded negatively; second choice
                source += "85.png";
            }   
            break;

        case imgNum == 175:
            source += "180.png";
            break;
        
        default:
            imgNum += 10;
            source += imgNum + ".png";
    }
    mainImg.src = source;

}