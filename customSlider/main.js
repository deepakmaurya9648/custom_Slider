//targeting the element here
const slideImage=document.querySelectorAll(".slide-image");
const slideContainer=document.querySelector(".slides-container");
const nextBtn=document.querySelector(".next-btn");
const prevBtn=document.querySelector(".prev-btn");
const navigationDots=document.querySelector(".navigation-dots");
 
let noOfImage=slideImage.length;
let slideWidth=slideImage[0].clientWidth;
let currentSlide=0;
// setting up slider
// console.log(slideImage);

function init(){
    slideImage.forEach((img,i)=>{
        img.style.left=i*100+"%";
    });
    slideImage[0].classList.add("active");

createNavigationDots();    
}
init();
// creating navigation dots------
function createNavigationDots(){
    for(let i=0;i<noOfImage;i++){
        const dot=document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);
        dot.addEventListener("click",()=>{
            goToSlide(i);
        })
    }
    navigationDots.children[0].classList.add("active");
}

//next button working
nextBtn.addEventListener("click",()=>{
    if(currentSlide>=noOfImage-1){
        goToSlide(0);
        return;
    }
    currentSlide++;
     goToSlide(currentSlide);
})
//prev button working
prevBtn.addEventListener("click",()=>{
    if(currentSlide<=0){
        goToSlide(noOfImage-1);
        return;
    }
    currentSlide--;
     goToSlide(currentSlide);
})

function goToSlide(slideNumber){
    slideContainer.style.transform="translateX(-"+slideWidth*slideNumber+"px)";
    currentSlide=slideNumber;
    setActiveClass();
}

//set active class

function setActiveClass(){
    let currentActive=document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    // /set active class for navigation dots
    let currentDot=document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");
}
let autoPlay=setInterval(()=>{
    if(currentSlide>=noOfImage-1){
        goToSlide(0);
        return;
    }
    currentSlide++;
     goToSlide(currentSlide);
},4000);

