function toggleImage(){
    imgsrc=document.getElementById("1").src;
    if (imgsrc.indexOf("assets/avatar.png")!=-1){
        document.getElementById("1").src = "assets/picture.png";
    }
    else{
        document.getElementById("1").src = "assets/avatar.png";
    } 
}

function darkmode() {
    var body= document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark" ? "light" : "dark";
}