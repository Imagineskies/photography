'use strict';
// Variable
var shortImgScale = document.getElementById('shortImgScale');
var longImgScale = document.getElementById('longImgScale');


// Declarations


// Constants
const menuTemp = document.getElementById('menuTemp');


/*
____________________________________________________________________________________
Functions
____________________________________________________________________________________
*/

document.documentElement.style.setProperty("--figureShortHight", shortImgScale);
document.documentElement.style.setProperty("--figureLongHight", longImgScale);

/*
____________________________________________________________________________________
Event Listeners
____________________________________________________________________________________
*/

window.onscroll = function() {
  var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
  console.log(scrollPos);
  if (scrollPos >= 115) {
    menuTemp.classList.remove('animate__animated', 'animate__slideInDown');
    menuTemp.classList.add('animate__animated', 'animate__slideOutUp');
  }
  if (scrollPos <= 115) {
    menuTemp.classList.remove('animate__animated', 'animate__slideOutUp');
    menuTemp.classList.add('animate__animated', 'animate__slideInDown');
  }
}
