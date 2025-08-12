import {useState} from 'react';

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [board, setNewBoard] = useState(initialBoard);

    function handleClickX(rowIndex, cellIndex) {
        setNewBoard((prevBoard) => {
            const newBoard = [...prevBoard.map(innerArray => [...innerArray])];
            newBoard[rowIndex][cellIndex] = 'X';
            return newBoard;
        });
    }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, cellIndex) =>
                        <li key={cellIndex}>
                            <button onClick={() => handleClickX(rowIndex, cellIndex)}>{playerSymbol}</button>
                        </li>)}
                </ol>
            </li> )}
        </ol>
    )
}