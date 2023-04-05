// Create a module for the game board
// Use functions from gameBoard with dot notation
const gameBoard = (() => 
{
    // Array representing the game board
    const board = ["", "", "", "", "", "", "", "", ""];

    // Function to set a space with the player sign (X/O)
    const setSpace = (idx, sign) => 
    {
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

// Create a factory to represent players
// Create a new player using 'const playerOne = player('tyler');'
const player = (sign) => 
{
    this.sign = sign;

    // Function to get the player sign
    const getSign = () =>
    {
        return sign;
    };

    return { getSign };
};




