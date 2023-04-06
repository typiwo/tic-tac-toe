// Create a factory to represent players
// Create a new player using 'const playerOne = player('tyler');'
const Player = (sign) => 
{
    this.sign = sign;

    // Function to get the player sign
    const getSign = () =>
    {
        return sign;
    };

    return { getSign };
};

// Create a module for the game board
// Use functions from gameBoard with dot notation
const gameBoard = (() => 
{
    // Array representing the game board
    const board = ["", "", "", "", "", "", "", "", ""];

    // Function to set a space with the player sign (X/O)
    const setSpace = (idx, sign) => 
    {
        if (idx > board.length) return;
        board[idx] = sign;
    };

    // Function to get the sign at a space
    const getSpace = (idx) => 
    {
        return board[idx];
    };

    // Function to reset game board
    const resetBoard = () => 
    {
        for (let i = 0; i < board.length; i++) 
        {
            board[i] = "";
        }
    };

    return { setSpace, getSpace, resetBoard };
    
    
})();

// Create module to display game board
const displayController = (() => 
{
    // Load in the spaces
    const spaceElements = document.querySelectorAll(".space");
    // Load in restart button
    const restartButton = document.getElementById("restart-button");

    // Add event listener for each space
    spaceElements.forEach((space) =>
    space.addEventListener("click", (e) =>
    {
        // if game is over or if this space is taken
        if (gameController.getIsOver() || e.target.textContent !== "")
        {
            console.log("clicking space"); 
            return;
        }

        // otherwise, play the round and place the sign
        gameController.playRound(parseInt(e.target.dataset.index));

        // update the game board
        updateGameboard();

    })
    );

    // Add event listener for restart button
    restartButton.addEventListener("click", (e) =>
    {
        gameBoard.resetBoard();
        gameController.resetGame();
        updateGameboard();
    });

    // Function to update the gameboard
    const updateGameboard = () => 
    {
        for (let i = 0; i < spaceElements.length; i++)
        {
            spaceElements[i].textContent = gameBoard.getSpace(i);
        }
    };


})();


// Create module to control the flow of the game
const gameController = (() =>
{
    // Create variables for each player
    const playerX = Player("X");
    const playerO = Player("O");
    // Variable to represent the round
    let round = 1;
    // Boolean variable to signal when game is over
    let isOver = false;

    // Function to get current player sign
    const getCurrentPlayerSign = () =>
    {
        return round % 2 === 1 ? playerX.getSign() : playerO.getSign();
    };

    // Function to check if someone won
    const checkWinner = (spaceIdx) => 
    {
        // list of possible winning conditions
        const winConditions = 
        [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        // 
        return winConditions.filter((combination) => combination.includes(spaceIdx))
        .some((possibleCombination) =>
        possibleCombination.every((index) => gameBoard.getSpace(index) === getCurrentPlayerSign()
        )
        );
    };

    // Function to check if game is over
    const getIsOver = () =>
    {
        return isOver;
    };

    // Function to reset game
    const resetGame = () =>
    {
        round = 1;
        isOver = false;
    };

    // Function to play a round (a player places a token)
    const playRound = (spaceIdx) =>
    {
        // place the players sign
        gameBoard.setSpace(spaceIdx, getCurrentPlayerSign());

        // check if someone won with this placement
        if (checkWinner(spaceIdx))
        {
            isOver = true;  // game is over
            return;
        }

        // check if all spaces filled
        if (round === 9)
        {
            isOver = true;
            return;
        }

        // otherwise, update round
        round++;

    };

    return { playRound, getIsOver, resetGame };

})();




