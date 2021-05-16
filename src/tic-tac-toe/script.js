
// Variaveis Globais
let lastTurn;

function ticTacToeInit(){
  
  // Injeta HTML no modal
  document.getElementById('injection-div').innerHTML = ticTacToeHtml;

  // Inicia as Variaveis Globais
  lastTurn = false;
  isScrollEnabled = false;
  
  
  // Adiciona Event Listeners
  let cells = document.getElementById('matrix');
  for (let i = 0; i < cells.children.length; i++){
    for (let j = 0; j < cells.children[i].children.length; j++){
      cells.children[i].children[j].addEventListener('click', _click)
    }
  }
  document.getElementById('reset-btn').addEventListener('click', resetGame);
  document.getElementById('undo-btn') .addEventListener('click', undoTurn);
  document.getElementById('modal-close-btn') .addEventListener('click', closeModal);
  
  // Deixa o modal visivel
  document.getElementById('modal-bg').style.visibility = 'visible';
}


function _click(e){
  if (e.target.innerHTML != ''){ return }
  if (document.getElementById('turn').innerHTML == 'X'){
    e.target.innerHTML = 'X';
    e.target.classList.add('playerX');
  }else{
    e.target.innerHTML = 'O';
    e.target.classList.add('playerO');
  }
  lastTurn = e.target;
  togglePlayer();
  checkIfWins();
}

function togglePlayer(){
  if (document.getElementById('turn').innerHTML == 'X'){
    document.getElementById('turn').innerHTML = 'O';
    document.getElementById('turn').classList.remove('playerX');
    document.getElementById('turn').classList.add('playerO');
  }else{
    document.getElementById('turn').innerHTML = 'X';
    document.getElementById('turn').classList.remove('playerO');
    document.getElementById('turn').classList.add('playerX');
  }
}

function resetGame(){
  let cells = document.getElementById('matrix');
  for (let i = 0; i < cells.children.length; i++){
    for (let j = 0; j < cells.children[i].children.length; j++){
      cells.children[i].children[j].innerHTML = '';
      cells.children[i].children[j].classList.remove('playerO');
      cells.children[i].children[j].classList.remove('playerX');
    }
  }
  document.getElementById('turn').innerHTML = 'X';
  document.getElementById('turn').classList.remove('playerO');
  document.getElementById('turn').classList.add('playerX');
  document.getElementById('winner-line').className = '';
}

function undoTurn(){
  if (lastTurn){
    togglePlayer();
    lastTurn.innerHTML = '';
    lastTurn = false;
  }
}

function checkIfWins(){

  let a11 = document.getElementById('cell11').innerHTML;
  let a12 = document.getElementById('cell12').innerHTML;
  let a13 = document.getElementById('cell13').innerHTML;
  let a21 = document.getElementById('cell21').innerHTML;
  let a22 = document.getElementById('cell22').innerHTML;
  let a23 = document.getElementById('cell23').innerHTML;
  let a31 = document.getElementById('cell31').innerHTML;
  let a32 = document.getElementById('cell32').innerHTML;
  let a33 = document.getElementById('cell33').innerHTML;  
  let winnerLine = document.getElementById('winner-line').classList;

  if      (a11 == 'X' && a12 == 'X' && a13 == 'X'){ winnerLine.add('winL1') }
  else if (a21 == 'X' && a22 == 'X' && a23 == 'X'){ winnerLine.add('winL2') }
  else if (a31 == 'X' && a32 == 'X' && a33 == 'X'){ winnerLine.add('winL3') }
  else if (a11 == 'X' && a21 == 'X' && a31 == 'X'){ winnerLine.add('winC1') }
  else if (a12 == 'X' && a22 == 'X' && a32 == 'X'){ winnerLine.add('winC2') }
  else if (a13 == 'X' && a23 == 'X' && a33 == 'X'){ winnerLine.add('winC3') }
  else if (a11 == 'X' && a22 == 'X' && a33 == 'X'){ winnerLine.add('winD1') }
  else if (a13 == 'X' && a22 == 'X' && a31 == 'X'){ winnerLine.add('winD2') }

  else if (a11 == 'O' && a12 == 'O' && a13 == 'O'){ winnerLine.add('winL1') }
  else if (a21 == 'O' && a22 == 'O' && a23 == 'O'){ winnerLine.add('winL2') }
  else if (a31 == 'O' && a32 == 'O' && a33 == 'O'){ winnerLine.add('winL3') }
  else if (a11 == 'O' && a21 == 'O' && a31 == 'O'){ winnerLine.add('winC1') }
  else if (a12 == 'O' && a22 == 'O' && a32 == 'O'){ winnerLine.add('winC2') }
  else if (a13 == 'O' && a23 == 'O' && a33 == 'O'){ winnerLine.add('winC3') }
  else if (a11 == 'O' && a22 == 'O' && a33 == 'O'){ winnerLine.add('winD1') }
  else if (a13 == 'O' && a22 == 'O' && a31 == 'O'){ winnerLine.add('winD2') }
}
