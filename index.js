var lang = "en";
var c = document.getElementById("container");

document.onkeydown = function (e) {
    if(e.key == "q" || e.key == "e"){
        if(lang == "en"){
            swapHTML("containerCn");
            lang = "cn";
        } else {
            swapHTML("containerEn");
            lang = "en";
        }
    }
}


window.addEventListener('load', function() {
    console.log('All assets are loaded');
    swapHTML("containerEn");
})

function swapHTML(i){
    c.innerHTML = document.getElementById(i).innerHTML;
}

// function changeBG(){
//     let n = Math.floor(Math.random() * 8);
//     console.log(n);
//     document.body.style.backgroundImage = 'url(images/rdr'+n+'\.jpg)';
// }

// changeBG();