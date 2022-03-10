// Slide show carousel
const track = document.querySelector('.carousel')
const slides = Array.from(track.children)
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children)
 const nextbtn = document.querySelector('.carousel__btn--right')
const prevbtn =document.querySelector('.carousel__btn--left')
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';

}

slides.forEach(setSlidePosition);
// Making one function to use it for two buttons
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide')
    
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');


}

// When you click the left button
 prevbtn.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);

    // this for de nav dowen
    const currentDot = dotsNav.querySelector('.current-slide')
    const prevtDot = currentDot.previousElementSibling;
     updateDots(currentDot, prevtDot);
 })

// When you click the right button

nextbtn.addEventListener('click', e => {

    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    // const amountToMove = nextSlide.style.left;
    //  move to the next slide
    // track.style.transform = 'translateX(-' + amountToMove + ')';
    // currentSlide.classList.remove('current-slide');
    // nextSlide.classList.add('current-slide')

     // this for de nav dowen
     const currentDot = dotsNav.querySelector('.current-slide')
     const nextDot = currentDot.nextElementSibling;
     updateDots(currentDot, nextDot);
    
})

// when click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {

    const targetDot = e.target.closest('button')

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide')
    const currentDot = dotsNav.querySelector('.current-slide')
    const targetIndex = dots.findIndex(dot => dot === targetDot )
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);


    // currentDot.classList.remove('current-slide');
    // targetDot.classList.add('current-slide');


  
})