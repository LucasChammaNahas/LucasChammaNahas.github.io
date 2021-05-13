
let ticTacToeHtml = `
    <p>Turn: <span id="turn" class="playerX">X</span></p>

    <div id="matrix">
      <div id="col1">
        <div id="cell11" class="cell"></div>
        <div id="cell21" class="cell"></div>
        <div id="cell31" class="cell"></div>
      </div>
      <div id="col2">
        <div id="cell12" class="cell"></div>
        <div id="cell22" class="cell"></div>
        <div id="cell32" class="cell"></div>
      </div>
      <div id="col3">
        <div id="cell13" class="cell"></div>
        <div id="cell23" class="cell"></div>
        <div id="cell33" class="cell"></div>
      </div>
    </div>

    <div class="btn-container">
      <button id="reset-btn">RESET GAME</button>
      <button id="undo-btn">UNDO LAST PLAY</button>
    </div>
    <div id="winner-line"></div>
`;
