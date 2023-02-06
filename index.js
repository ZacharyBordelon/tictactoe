// state

const state = {
    players:['',''],
    currentPlayer: '',
    board:[
        ['','',''],
        ['','',''],
        ['','',''],
    ],
};

//dom Selection
const section = document.getElementsByTagName('section')[0];
const playerNameButton = document.getElementsByClassName('name-button');
const playerOneInput = document.getElementById("player-one-name");
const playerOneDisplay = document.getElementById('player-one-display')
const playerTwoInput = document.getElementById("player-two-name");
const playerTwoDisplay = document.getElementById('player-two-display')
const resetGameButton = document.getElementById('reset')
const turnIndicator = document.getElementById('turn-indicator')
const cells = document.getElementsByClassName('cell')
const turnPlayer = document.getElementById('turn-player')



const checkWinDraw = () => {
    const gamePiece = state.currentPlayer === state.players[0] ? 'X' : 'O';
    if(state.board[0][0] === gamePiece && 
        state.board[0][1] === gamePiece &&
        state.board[0][2] === gamePiece)
    {
        window.alert(`${state.currentPlayer} Wins!`)
    } else if(state.board[1][0] === gamePiece && 
        state.board[1][1] === gamePiece &&
        state.board[1][2] === gamePiece
    ){
        window.alert(`${state.currentPlayer} Wins!`)
    }else if(state.board[2][0] === gamePiece && 
        state.board[2][1] === gamePiece &&
        state.board[2][2] === gamePiece
    ){
        window.alert(`${state.currentPlayer} Wins!`)
    }else if(state.board[0][1] === gamePiece && 
        state.board[1][0] === gamePiece &&
        state.board[2][0] === gamePiece
    ){
        window.alert(`${state.currentPlayer} Wins!`)
    }else if(state.board[0][1] === gamePiece && 
        state.board[1][1] === gamePiece &&
        state.board[2][1] === gamePiece
    ){
        window.alert(`${state.currentPlayer} Wins!`)
    }else if(state.board[0][2] === gamePiece && 
        state.board[1][2] === gamePiece &&
        state.board[2][2] === gamePiece
    ){
        window.alert(`${state.currentPlayer} Wins!`)
    }else if(state.board[0][0] === gamePiece && 
        state.board[1][1] === gamePiece &&
        state.board[2][2] === gamePiece
    ){
        window.alert(`${state.currentPlayer} Wins!`)
    }else if(state.board[2][0] === gamePiece && 
        state.board[1][1] === gamePiece &&
        state.board[0][2] === gamePiece
    ){
        window.alert(`${state.currentPlayer} Wins!`)
    }
        
        
        
         
};




//event listeners

for(let i=0; i < playerNameButton.length; i++){
    playerNameButton[i].addEventListener('click', (event) =>{
        const isPlayer1 = event.target.innerText.includes('X')
        if(isPlayer1){
            state.currentPlayer = playerOneInput.value;
            state.players[0] = playerOneInput.value;
            playerOneDisplay.innerText = `Player X Is: ${playerOneInput.value}`;
            turnPlayer.innerText = `Current Player Is: ${state.players[0]}`

        } else {
            state.players[1] = playerTwoInput.value;
            playerTwoDisplay.innerText = `Player O Is: ${playerTwoInput.value}`;
           
        }        
    });
}

for(let i=0; i < cells.length; i++){
    cells[i].addEventListener('click', (event) =>{
        if (event.target.innerText !== ''){
            return
        };
        if (state.currentPlayer === state.players[0]){
            event.target.innerText = 'X';

            
            state.board[event.target.id[0]][event.target.id[1]] = 'X'
            checkWinDraw();

            state.currentPlayer = state.players[1];
            turnPlayer.innerText = `Current Player Is: ${state.players[1]}`
        } 
        else {
            
            event.target.innerText = 'O';
            state.board[event.target.id[0]][event.target.id[1]] = "O"
            checkWinDraw();
            state.currentPlayer = state.players[0];
            turnPlayer.innerText = `Current Player Is: ${state.players[0]}`
        }
    })
}


resetGameButton.addEventListener('click', (event) => {
    state.board = [['','',''],['','',''],['','','']];
    
    for(let i = 0; i < cells.length; i++ ){
        const cell = cells[i]
        cell.innerText = ''
    }

    turnPlayer.innerText = ''
    playerOneDisplay.innerText = 'Player X is:'
    playerTwoDisplay.innerText = 'Player O is:'
    playerOneInput.value = ''
    playerTwoInput.value = ''
    state.players = ['','']
    state.currentPlayer = ''
});


