
// INITIALIZES THE CODE
let currentPage = 1;
let isScrollEnabled = true;
document.getElementById('link1').click();


// SETS EVENT LISTENERS TO THE HMTL
window                                     .addEventListener('resize',  resizeScrollCancel);
document.getElementsByTagName('html')[0]   .addEventListener('keydown', scrollOnZoomCancel1);
document.getElementsByTagName('html')[0]   .addEventListener('keyup',   scrollOnZoomCancel2);
document.getElementsByTagName('html')[0]   .addEventListener('wheel',   mousePageScroll);
document.getElementsByTagName('html')[0]   .addEventListener('keydown', keypadPageScroll);
document.getElementById('proj-tic-tac-toe').addEventListener('click',   ticTacToeInit);




// PREVENTS PAGE FROM BUGGIN ON RESIZE OR ZOOM
function resizeScrollCancel(){
  document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto';
  document.getElementById(`link${ currentPage }`).click();
  setTimeout(() => { 
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth';
  }, 100);
}


// ZOOM CANCEL FUNCTIONS
function scrollOnZoomCancel1(e){console.log('zoom cancel');
  let key = e.which || e.keyCode;
  if(key == 17) { isScrollEnabled = false; }
}
function scrollOnZoomCancel2(e){
  let key = e.which || e.keyCode;
  if(key == 17) { isScrollEnabled = true; }
}


// SCROLL FUNCTIONS
function mousePageScroll(e){
  if (isScrollEnabled && document.hasFocus()){
    if (e.deltaY>0  && currentPage < 5){ 
      location.href = `#page${ currentPage+1 }`; 
      updateState(currentPage+1);
    }
    if (e.deltaY<0  && currentPage > 1){ 
      location.href = `#page${ currentPage-1 }`; 
      updateState(currentPage-1);
    }
    supressEventTrigger('wheel');  
  }
}
function keypadPageScroll(e){ 
  if (isScrollEnabled){
    let key = e.which || e.keyCode;
    if (key == 40  && currentPage < 5){ document.getElementById(`link${ currentPage+1 }`).click(); }
    if (key == 38  && currentPage > 1){ document.getElementById(`link${ currentPage-1 }`).click(); }
    supressEventTrigger('keydown');  
  }
}


// UPDATES CURRENT DISPLAYING PAGE TO JS
function updateState(page){
  currentPage = page;
  let nav = document.getElementById('nav').children;
  for (let i = 0; i < nav.length; i++){
    nav[i].classList.remove('selected');
  }
  nav[page-1].classList.add('selected');
}


// DEALING WITH REPEATED SCROLL REQUESTS LOGIC
function supressEventTrigger(){
  isScrollEnabled = false;
  setTimeout(() => { isScrollEnabled = true;}, 100);
}
  
function closeModal(){
  document.getElementById('modal-bg').style.visibility = 'hidden';
  isScrollEnabled = true;
}

// let x = 0;

// setTimeout(() => {
//   console.log(x);
// }, 1000);

// x = 'pudim';