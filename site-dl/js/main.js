const date = new Date();
let curYear = date.getFullYear();
let mobNavActive = false;
let copyTxt = document.getElementById("copy-text");
let mobileToggler = document.getElementById("mobile-toggler");

copyTxt.innerHTML += " "+curYear;


mobileToggler.addEventListener("click",function(){
    if(!mobNavActive){
     unHideLinks();
     
    }else{
       hideLinks();
    }
    mobileToggler.classList.toggle('toggle');
});



function fade(element) {
    //fading out
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}


function unfade(element) {
    //fading in
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
function hideLinks(){
    let links = document.getElementById("mobile-links");
    links.classList.add("hidden-mobile");
    links.classList.remove("visible-mobile");
    mobNavActive=false;
}
function unHideLinks(){
    let links = document.getElementById("mobile-links");
    
    for(var i = 0;i<links.children.length;i++){
     var theLink = links.querySelectorAll("li");

     for(var i =0;i<theLink.length;i++){
         theLink[i].style.opacity = 0.1;
         
         
            unfade(theLink[i]);
            
           
     }
    }
    links.classList.add("visible-mobile");
    links.classList.remove("hidden-mobile");
    mobNavActive=true;
}
