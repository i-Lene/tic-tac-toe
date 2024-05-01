
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectSquare, turns }) {
    // let [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleClick(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const newGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
    //         newGameBoard[rowIndex][colIndex] = activePlayerSymbol;

    //         return newGameBoard;
    //     });

    //     onSelectSquare();
    // }

    let gameBoard = initialGameBoard;

    for (const turn of turns) {

        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, index) => {
                return <li key={index}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => {
                            return <li key={colIndex}>
                                {<button onClick={() => onSelectSquare(index, colIndex)}>{playerSymbol}</button>}
                            </li>
                        })}
                    </ol>
                </li>
            })}
        </ol>
    )
}