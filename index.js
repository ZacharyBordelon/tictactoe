// state
let board = [
    ['','',''],
    ['','',''],
    ['','',''],
]



let state = {
    players:['',''],
    currentPayer: '',
    };

let playerOne = '';
let playerTwo = '';

const winIfMatch = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

    const winMessage = () => `Player ${currentPlayer} has won the game`;
    const drawMessage = () => `Both Players Draw`;
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;


//dom Selection
const section = document.getElementsByTagName('section')[0];
const playerNameButton = document.getElementsByClassName('name-button');
const playerOneInput = document.getElementById("player-one-name");
const playerOneDisplay = document.getElementById('player-one-display')
const playerTwoInput = document.getElementById("player-two-name");
const playerTwoDisplay = document.getElementById('player-two-display')
const resetGameButton = document.getElementById('reset')
const turnIndicator = document.getElementById('turn-indicator')
const cell = document.getElementsByClassName('cell')


//functions
const resetGame = () =>{
    board.innerText = ['','',''],
                      ['','',''],
                      ['','',''];
    playerOneDisplay.innerText = 'Player 1 is:'
    playerTwoDisplay.innerText = 'Player 2 is:'
};

const checkWinDraw = () => {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const playerWin = winIfMatch[i];
        const a = board[playerWin[0]];
        const b = board[playerWin[1]];
        const c = board[playerWin[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
};



//event listeners

for(let i=0; i < playerNameButton.length; i++){
    playerNameButton[i].addEventListener('click', (event) =>{
        const isPlayer1 = event.target.innerText.includes(1)

        if(isPlayer1){
            state.currentPlayer = playerOneInput.value;
            state.players[0] = playerOneInput.value;
            playerOneDisplay.innerText = `player 1 is: ${playerOneInput.value}`;
            
        } else {
            state.players[1] = playerTwoInput.value;
            playerTwoDisplay.innerText = `player 2 is: ${playerTwoInput.value}`;
            
        }

        
    });
}

resetGameButton.addEventListener('click', resetGame);


