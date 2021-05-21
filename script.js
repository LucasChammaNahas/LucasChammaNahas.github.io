
// INITIALIZES THE CODE
let $G = {
  currentPage: 1,
  dY:0,
  key:0,
  resizing: false,
  scrollEnabled: true,
};
let t1;
let t2;
location.href = '#page1';


// SETS EVENT LISTENERS TO THE HMTL
window                                     .addEventListener('resize',  resizeIssues);
document.getElementsByTagName('html')[0]   .addEventListener('keydown', scrollOnZoomCancel1);
document.getElementsByTagName('html')[0]   .addEventListener('keyup',   scrollOnZoomCancel2);
document.getElementsByTagName('html')[0]   .addEventListener('wheel',   mousePageScroll);
document.getElementsByTagName('html')[0]   .addEventListener('keydown', keypadPageScroll);



// PREVENTS PAGE FROM BUGGIN ON RESIZE OR ZOOM
function resizeIssues(){
  location.href = `#page${ $G.currentPage }`;
  $G.resizing = true;
  document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto';
  setTimeout(() => { 
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth';
  }, 100);
}


// DISABLE SCROLL ON ZOOM FUNCTIONS
function scrollOnZoomCancel1(e){
  let key = e.which || e.keyCode;
  if(key == 17) { $G.scrollEnabled = false; }
}
function scrollOnZoomCancel2(e){
  let key = e.which || e.keyCode;
  if(key == 17) { $G.scrollEnabled = true; }
}


// SCROLL FUNCTIONS
function mousePageScroll(e){
  if(e.deltaY > 0  && $G.currentPage < 5){ 
    $G.dY++;
    magic();
  }
  if(e.deltaY < 0  && $G.currentPage > 1){ 
    $G.dY--;
    magic();
  }
}
function keypadPageScroll(e){ 
  let key = e.which || e.keyCode;
  if (key == 40  && $G.currentPage < 5){ 
    $G.key =  1;
    magic();
  }
  if (key == 38  && $G.currentPage > 1){ 
    $G.key = -1;
    magic();
  }
}


// UPDATES CURRENT DISPLAYING PAGE TO JS
function updateState(page){
  $G.currentPage = page;
  let nav = document.getElementById('nav').children;
  for (let i = 0; i < nav.length; i++){
    nav[i].classList.remove('selected');
  }
  nav[page-1].classList.add('selected');
}
  

// CLOSE PROJECT MODAL
function closeModal(){
  document.getElementById('modal-bg').style.visibility = 'hidden';
  $G.scrollEnabled = true;
}


// CONTEM TODA A LOGICA DE ROTAS
function magic(page){
  
  clearInterval(t1);
  t1 = setTimeout(() => {

    if(page != undefined) { $G.currentPage = page; }
    
    let condition = $G.scrollEnabled && !$G.resizing && ($G.key!=0 && $G.dY==0 || $G.key==0 && $G.dY!=0) || (page!=undefined);
    if (condition){
      if($G.key > 0 || $G.dY > 0){ $G.currentPage++; }
      if($G.key < 0 || $G.dY < 0){ $G.currentPage--; }
      location.href = `#page${ $G.currentPage }`; 
      updateState($G.currentPage);

      clearInterval(t2);
      t2 = setTimeout(() => { 
        location.href = `#page${ $G.currentPage }`;      
       }, 600);
    }

    $G.dY = 0;
    $G.key = 0;
    $G.resizing = false;
    
  }, 150);
}