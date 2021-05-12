document.getElementById('link1').click();
let currentPage = 1;
let isScrollEnabled = true;

document.getElementsByTagName('html')[0].addEventListener('wheel', mousePageScroll);
// document.getElementsByTagName('html')[0].addEventListener('wheel', mousePageScroll);


function mousePageScroll(e){
  if (isScrollEnabled){
    if (e.deltaY>0){ nextPage(); }
    if (e.deltaY<0){ prevPage(); }
    supressEventTrigger('wheel');  
  }
}

function nextPage(){
  if (currentPage < 5){
    document.getElementById(`link${ currentPage+1 }`).click();
    currentPage++;
  }
}
function prevPage(){
  if (currentPage > 1){
    document.getElementById(`link${ currentPage-1 }`).click();
    currentPage--;
  }
}
function supressEventTrigger(){
  isScrollEnabled = false;
  setTimeout(() => { isScrollEnabled = true;}, 300);
}
  
  












// // left: 37, up: 38, right: 39, down: 40,
// // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// var keys = {37: 1, 38: 1, 39: 1, 40: 1};

// function preventDefault(e) {
//   e.preventDefault();
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

// // modern Chrome requires { passive: false } when adding event
// var supportsPassive = false;
// try {
//   window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
//     get: function () { supportsPassive = true; } 
//   }));
// } catch(e) {}

// var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// // call this to Disable
// function disableScroll() {
//   window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
//   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
//   window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
//   window.addEventListener('keydown', preventDefaultForScrollKeys, false);
// }

// // call this to Enable
// function enableScroll() {
//   window.removeEventListener('DOMMouseScroll', preventDefault, false);
//   window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
//   window.removeEventListener('touchmove', preventDefault, wheelOpt);
//   window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
// }