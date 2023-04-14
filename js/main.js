const targets = ".slide-left, .slide-right, .fade-in, .move-up, .nav-bar";
const mobNav = document.querySelector(".nav-bar__mobile")
const checkBox = document.getElementById("navi-toggle");
const date = document.querySelector(".copy-text-date");

//set date to footer
const theDate = new Date();
date.textContent = theDate.getFullYear();
//observer watches the targets  
const observer = new IntersectionObserver(entries => {
    //iterate through the targets
  entries.forEach(entry => {
    //check if target intersecting
    const { target, isIntersecting } = entry;
    if (isIntersecting) {
      const classToAdd = target.classList.contains("slide-right") ? "slide-it-right"
        : target.classList.contains("slide-left") ? "slide-it-left"
        : target.classList.contains("fade-in") ? "fade-it-in"
        : target.classList.contains("move-up") ? "slide-it-up"
        : null;
      //add class to target 
      if (classToAdd) {
        target.classList.add(classToAdd);
      } 
    } else if (target.classList.contains("nav")) {
      if(checkBox.checked){
        setCheckboxValue(checkBox);
      }
    }
  });
}, { threshold: [0] });

document.querySelectorAll(targets).forEach(target => observer.observe(target));


function setCheckboxValue(checkbox,value) {
    if (checkbox.checked!=value)
        checkbox.click();
}
