

const mobile_icon = document.getElementById('mobile-icon');
const mobile_menu = document.getElementById('mobile-menu');
const hamburger_icon = document.querySelector("#mobile-icon i");

function openCloseMenu() {
    mobile_menu.classList.toggle('block');
    mobile_menu.classList.toggle('active');
}

function changeIcon(icon) {
    icon.classList.toggle("fa-xmark");
}

mobile_icon.addEventListener('click', openCloseMenu);





let sliderContainer =document.getElementById('sliderContainer');
let slider =document.getElementById('slider');
let cards =slider.getElementsByTagName('li');

let elementsToShow = 3;
if(document.body.clientWidth<1000){
    elementsToShow =1;

}
else if(document.body.clientWidth<1500){
    elementsToShow =3;
}
let sliderContainerWidth = sliderContainer.clientWidth;
let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length*cardWidth + 'px';
slider.style.transition ='margin';
slider.style.transitionDuration='1s';

for(let index = 0; index < cards.length; index++){
    const element = cards[index];
    element.style.width = cardWidth+'px';
}

function prev(){
    // console.log(+slider.style.marginLeft.slice(0,-2))
    // console.log(-cardWidth*(cards.length-elementsToShow))
    if(+slider.style.marginLeft.slice(0,-2) != -cardWidth*(cards.length-elementsToShow))
        slider.style.marginLeft =((+ slider.style.marginLeft.slice(0,-2))-cardWidth)+'px';
    }
   //100px

function next(){
    if(+slider.style.marginLeft.slice(0,-2)!=0)

        slider.style.marginLeft =((+ slider.style.marginLeft.slice(0,-2))+cardWidth)+'px';



   //100px
  
}





// var swiper = new Swiper('.swiper-initialize', {
//     slidesPerView: 5,
//     spaceBetween: 20,
//     breakpoints: {
//         1920: {
//             slidesPerView: 5
//         },
//         992: {
//             slidesPerView: 3
//         },
//         320: {
//             slidesPerView: 2
//         }
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     }
// });
