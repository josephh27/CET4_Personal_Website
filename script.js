const carousel = document.querySelectorAll(".carousel");
const arrowIcons = document.querySelectorAll(".hobby-images > img");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".right-header");

let isDragStart = false;
let prevPageX, prevScrollLeft, positionDiff;
let count = 0;

const showHideIcons = (element) => {
    if (element === carousel[0]) {
        let scrollWidth = element.scrollWidth - element.clientWidth;
        arrowIcons[0].style.display = element.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = element.scrollLeft == scrollWidth ? "none" : "block";
    } else if (element === carousel[1]) {
        let scrollWidth = element.scrollWidth - element.clientWidth;
        arrowIcons[2].style.display = element.scrollLeft == 0 ? "none" : "block";
        arrowIcons[3].style.display = element.scrollLeft == scrollWidth ? "none" : "block";
    } else if (element === carousel[2]) {
        let scrollWidth = element.scrollWidth - element.clientWidth;
        arrowIcons[4].style.display = element.scrollLeft == 0 ? "none" : "block";
        arrowIcons[5].style.display = element.scrollLeft == scrollWidth ? "none" : "block";
    }
}

arrowIcons.forEach(icon => {
    if (icon.id === "arrow0" || icon.id === "arrow1") {
        icon.addEventListener("click", () => {
            let firstImg = carousel[0].querySelectorAll("img")[0]
            let firstImgWidth = firstImg.clientWidth + 14; //Getting first img width & adding 14 margin value
            carousel[0].scrollLeft += icon.className == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(showHideIcons(carousel[0]), 60);
         })
    } else if (icon.id === "arrow2" || icon.id === "arrow3") {
        icon.addEventListener("click", () => {
            let firstImg = carousel[0].querySelectorAll("img")[0]
            let firstImgWidth = firstImg.clientWidth + 14; //Getting first img width & adding 14 margin value
            carousel[1].scrollLeft += icon.className == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(showHideIcons(carousel[1]), 60);
         })
    } else if (icon.id === "arrow4" || icon.id === "arrow5") {
        icon.addEventListener("click", () => {
            let firstImg = carousel[0].querySelectorAll("img")[0]
            let firstImgWidth = firstImg.clientWidth + 14; //Getting first img width & adding 14 margin value
            carousel[2].scrollLeft += icon.className == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(showHideIcons(carousel[2]), 60);
         })
    } 
})

const dragStart = (e) => {
    //Updates global variables value on mouse down event to continue the dragging at the last position
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = e.currentTarget.scrollLeft;
}


const dragStop = (e) => {
    isDragStart = false;
    e.currentTarget.classList.remove('dragging');
}

const dragging = (e) => {
    //Scrolling images/carousel to left according to mouse pointer
    //e.touched[0] is for mobile devices
    if (!isDragStart) return;
    e.preventDefault();
    e.currentTarget.classList.add('dragging');
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    e.currentTarget.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons(e.currentTarget);
}


carousel.forEach(element => {
    element.addEventListener("mousedown", dragStart);
    element.addEventListener("touchstart", dragStart);
    
    element.addEventListener("mousemove", dragging);
    element.addEventListener("touchmove", dragging);
    
    element.addEventListener("mouseup", dragStop)
    element.addEventListener("mouseleave", dragStop);
    element.addEventListener("touchend", dragStop);
})

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})