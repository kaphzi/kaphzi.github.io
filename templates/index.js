var eng = true;
var titlePage = true;
var eleClass;

// var title = document.getElementById("title");
var body = document.body;

var mainDisplay = document.getElementById("mainDisplay")
var ele;

function replaceWith(id) {
  ele = document.getElementById(id);
  eleClass = ele.classList;
  if(eleClass.contains("titlePage")){
    titlePage = true;
  } else {
    titlePage = false;
  }
  if(eleClass.contains("eng")){
    eng = true;
  } else {
    eng = false;
  }
  mainDisplay.innerHTML = ele.innerHTML;
  // main.style = "display:block";
  console.log(id);
  console.log(titlePage);
  console.log(eng);
}

document.onkeydown = function (e) {
  if(titlePage){
    if(eng){
      switch(e.key){
        case "q":
        case "e":
          document.getElementById("titleCn").click();
          break;
        case "c":
          document.getElementById("controlsEn").click();
          break;
        case "n":
          document.getElementById("notesEn").click();
          break;
        case "l":
          document.getElementById("linksEn").click();
          break;
        case "Enter":
          lang = "en";
          document.getElementById("beginSceneEn").click();
        case "Escape":
          document.getElementById("quit").click();
      }

    } else {
      switch(e.key){
        case "q":
        case "e":
          document.getElementById("titleEn").click();
          break;
        case "c":
          document.getElementById("controlsCn").click();
          break;
        case "n":
          document.getElementById("notesCn").click();
          break;
        case "l":
          document.getElementById("linksCn").click();
          break;
        case "Enter":
          lang = "cn";
          document.getElementById("beginSceneCn").click();
        case "Escape":
          document.getElementById("quit").click();
        
      }
    }
  } else {
    if(eng && e.key=="Escape"){
      document.getElementById("titleEn").click();
    } else if((!eng) && e.key=="Escape"){
      document.getElementById("titleCn").click();
    }

  }
}
