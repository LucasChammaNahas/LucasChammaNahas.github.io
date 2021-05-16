
// INITIALIZES THE CODE
let currentPage = 1;
let isScrollEnabled = true;
document.getElementById('link1').click();


// SETS EVENT LISTENERS TO THE HMTL
window.addEventListener('resize', resizeCancel);
document.getElementsByTagName('html')[0]   .addEventListener('keydown', zoomCancel1);
document.getElementsByTagName('html')[0]   .addEventListener('keyup',   zoomCancel2);
document.getElementsByTagName('html')[0]   .addEventListener('wheel',   mousePageScroll);
document.getElementsByTagName('html')[0]   .addEventListener('keydown', keypadPageScroll);
document.getElementById('proj-tic-tac-toe').addEventListener('click',   ticTacToeInit);



// PREVENTS PAGE FROM BUGGIN ON RESIZE OR ZOOM
function resizeCancel(){
  document.getElementById(`link${ currentPage }`).click();
}


// ZOOM CANCEL FUNCTIONS
function zoomCancel1(e){
  let key = e.which || e.keyCode;
  if(key == 17) { isScrollEnabled = false; }
}
function zoomCancel2(e){
  let key = e.which || e.keyCode;
  if(key == 17) { isScrollEnabled = true; }
}


// SCROLL FUNCTIONS
function mousePageScroll(e){
  if (isScrollEnabled){
    if (e.deltaY>0  && currentPage < 5){ document.getElementById(`link${ currentPage+1 }`).click(); }
    if (e.deltaY<0  && currentPage > 1){ document.getElementById(`link${ currentPage-1 }`).click(); }
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
  setTimeout(() => { isScrollEnabled = true;}, 300);
}
  
function closeModal(){
  document.getElementById('modal-bg').style.visibility = 'hidden';
  isScrollEnabled = true;
}
  


