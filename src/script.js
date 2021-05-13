
// INITIALIZES THE CODE
document.getElementById('link1').click();
let currentPage = 1;
let isScrollEnabled = true;


// SETS EVENT LISTENERS TO THE HMTL
document.getElementsByTagName('html')[0]   .addEventListener('wheel',   mousePageScroll);
document.getElementsByTagName('html')[0]   .addEventListener('keydown', keypadPageScroll);
document.getElementById('proj-tic-tac-toe').addEventListener('click',   ticTacToeInit);


// SCROLL FUNCTIONS
function mousePageScroll(e){
  if (isScrollEnabled){
    if (e.deltaY>0){ nextPage(); }
    if (e.deltaY<0){ prevPage(); }
    supressEventTrigger('wheel');  
  }
}
function keypadPageScroll(e){
  if (isScrollEnabled){
    let key = e.which || e.keyCode;
    if (key == 40){ nextPage(); }
    if (key == 38){ prevPage(); }
    supressEventTrigger('keydown');  
  }
}


// NAVIGATION FUNCTIONS
function nextPage(){
  if (currentPage < 5){
    document.getElementById(`link${ currentPage+1 }`).click();
    document.getElementById(`link${ currentPage }`  ).classList.toggle('selected');
    document.getElementById(`link${ currentPage+1 }`).classList.toggle('selected');
    currentPage++;
  }
}
function prevPage(){
  if (currentPage > 1){
    document.getElementById(`link${ currentPage-1 }`).click();
    document.getElementById(`link${ currentPage }`  ).classList.toggle('selected');
    document.getElementById(`link${ currentPage-1 }`).classList.toggle('selected');
    currentPage--;
  }
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
  

// ticTacToeInit(); //DEL

