// Create a module for the game board
// Use functions from gameBoard with dot notation
const gameBoard = (() => {
    // Array representing the game board
    const gameBoardArray = [["X", "X", "X"], ["X", "X", "X"], ["X", "X", "X"]];

    // Set the webpage game board with the values from our gameBoardArray
    const gameBoardHTML = document.querySelector('.game-board');
    const spaceOne = document.querySelector('#space-one');
    const spaceTwo = document.querySelector('#space-two');
    const spaceThree = document.querySelector('#space-three');
    const spaceFour = document.querySelector('#space-four');
    const spaceFive = document.querySelector('#space-five');
    const spaceSix = document.querySelector('#space-six');
    const spaceSeven = document.querySelector('#space-seven');
    const spaceEight = document.querySelector('#space-eight');
    const spaceNine = document.querySelector('#space-nine');

    spaceOne.textContent = gameBoardArray[0][0];
    spaceTwo.textContent = gameBoardArray[0][1];
    spaceThree.textContent = gameBoardArray[0][2];
    spaceFour.textContent = gameBoardArray[1][0];
    spaceFive.textContent = gameBoardArray[1][1];
    spaceSix.textContent = gameBoardArray[1][2];
    spaceSeven.textContent = gameBoardArray[2][0];
    spaceEight.textContent = gameBoardArray[2][1];
    spaceNine.textContent = gameBoardArray[2][2];


    // Function to place an X/O on the game board
    const placeToken = (token, rowIdx, colIdx) => gameBoardArray[rowIdx][colIdx] = token;

    return {placeToken};
    
})();

// Create a module for display controller (?)

// Create a factory to represent players
// Create a new player using 'const playerOne = player('tyler');'
const player = (token) => {

    return { token };
};








// First, try to make functionality where a player object can edit the array
// So, if a player is X, let it be able to edit the gameBoardArray with an X