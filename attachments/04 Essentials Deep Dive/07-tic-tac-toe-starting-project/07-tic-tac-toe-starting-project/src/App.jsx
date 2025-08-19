import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "../../../winning-combinations";

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const PLAYERS = {
    X: "Player 1",
    O: "Player 2",
};

function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}

function deriveWinner(gameBoard, playersNames) {
    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSymbol =
            gameBoard[combination[0].row][combination[0].column];
        const secondSymbol =
            gameBoard[combination[1].row][combination[1].column];
        const thirdSymbol =
            gameBoard[combination[2].row][combination[2].column];

        if (
            firstSymbol &&
            firstSymbol === secondSymbol &&
            firstSymbol === thirdSymbol
        ) {
            winner = playersNames[firstSymbol];
        }
    }

    return winner;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

    for (const turn of gameTurns) {
        const { cell, player } = turn;
        const { row, col } = cell;

        gameBoard[row][col] = player;
    }

    return gameBoard;
}
function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [playersNames, setPlayersNames] = useState(PLAYERS);

    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, playersNames);
    const isDraw = gameTurns.length === 9 && !winner;

    function handlePlayerNameChange(newName, playerSymbol) {
        setPlayersNames((prevNames) => ({
            ...prevNames,
            [playerSymbol]: newName,
        }));
    }

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);

            const newTurns = [
                {
                    cell: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];

            return newTurns;
        });
    }

    function handleResetGame() {
        setGameTurns([]);
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        name={PLAYERS.X}
                        symbol="X"
                        isActive={activePlayer === "X"}
                        onNameChange={handlePlayerNameChange}
                    />
                    <Player
                        name={PLAYERS.O}
                        symbol="O"
                        isActive={activePlayer === "O"}
                        onNameChange={handlePlayerNameChange}
                    />
                </ol>
                {(winner || isDraw) && (
                    <GameOver winner={winner} onRematch={handleResetGame} />
                )}
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    board={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
