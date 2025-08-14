const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialBoard;

    for (const turn of turns) {
        const { cell, player } = turn;
        const { row, col } = cell;

        gameBoard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex) }>{playerSymbol}</button>
                        </li>)}
                </ol>
            </li> )}
        </ol>
    )
}