export default function Log({ turns }) {
    return (
        <div>
            <h2>Log</h2>
            <ol id="log">
                {turns.map((turn) => <li key={`${turn.cell.row}${turn.cell.col}`}>{turn.player} played at row {turn.cell.row}, column {turn.cell.col}</li>)};
            </ol>
        </div>
    )
}