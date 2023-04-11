const targets = ".slide-left, .slide-right, .fade-in, .move-up";


var observer = new IntersectionObserver(function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
   entries.forEach((entry)=>{
       if(entry.isIntersecting === true){
           
           console.log(entry.target.classList.contains)
           
           if(entry.target.classList.contains("slide-right")){
               
                entry.target.classList.add("slide-it-right");
             
           }else if(entry.target.classList.contains("slide-left")){
                entry.target.classList.add("slide-it-left");
           }else if(entry.target.classList.contains("fade-in")){
                entry.target.classList.add("fade-it-in");
           }
           else if(entry.target.classList.contains("move-up")){
                entry.target.classList.add("slide-it-up");
            }
       }else{
            console.log("not in view");
       }
   });
 /*   if (entries[0].isIntersecting === true) {
        //element visible
        if(entries[0].target.classList.contains("scroll-anim")){
            
            entries[0].target.classList.add("fade-in");
            entries[0].target.classList.remove("opace");
        }
        else
        if(entries[0].target.classList.contains("slide")){
          
            entries[0].target.classList.add("slide-right");
         
        }
    } else {
        //element not visible
        if(entries[0].target.classList.contains("scroll-anim")){
        entries[0].target.classList.add("opace");
        entries[0].target.classList.remove("fade-in");
       }else{
        entries[0].target.classList.remove("slide-right");
       }
    }*/
   




}, {
    threshold: [0]
});


document.querySelectorAll(targets).forEach((i) => {
    if (i) {
        observer.observe(i);
    }
});