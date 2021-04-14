
function _open(){
  document.getElementById('main-menu-id').style.visibility = 'visible';
  document.getElementById('main-menu-id').style.opacity = 1;
}

function _close(){
  document.getElementById('main-menu-id').style.opacity = 0;
  setTimeout(function(){ 
    document.getElementById('main-menu-id').style.visibility = 'hidden';
  }, 300);

}