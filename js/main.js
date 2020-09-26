'use strict';
// Variables



// Constant

const menuTemp = document.getElementById('#menuTemp');




// Functions





// Event Listeners


// https://stackoverflow.com/a/31223774
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st >= 850){
     menuTemp.classList.add('colorTwo');
     menuTemp.ClassList.remove('colorOne');
   } else {
     menuTemp.classList.add('colorOne');
     menuTemp.ClassList.remove('colorTwo');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
