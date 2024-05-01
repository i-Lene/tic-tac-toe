
export default function GameBoard({ onSelectSquare, board }) {

    return (
        <ol id="game-board">
            {board.map((row, index) => {
                return <li key={index}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => {
                            return <li key={colIndex}>
                                {<button onClick={() => onSelectSquare(index, colIndex)} disabled={playerSymbol ? true : false} >{playerSymbol}</button>}
                            </li>
                        })}
                    </ol>
                </li>
            })}
        </ol>
    )
}