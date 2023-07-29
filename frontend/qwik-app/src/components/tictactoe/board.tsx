import { component$, useStylesScoped$, useSignal, useStore, $ } from '@builder.io/qwik';
import BoardStyles from './board.css?inline'
import Square from './square'

// TicTacToe v0.5.0 20230605


export default component$(() => {
    useStylesScoped$(BoardStyles)

    //const boardValue = useSignal(0);
    const xIsNext = useSignal(true);

    const boardStore = useStore(
        {
            sector: ["", "", "", "", "", "", "", "", ""],
        },
    );

    // const closeModal = $((val: number) => {
    //     // modalVisible.value = false
    //     console.log(val);
    // })

    const handleClick = $((i: number) => {

        if (boardStore.sector[i] || calculateWinner(boardStore.sector)) {
            return;
        }

        // boardStore.sector[i] = 'X';
        const nextSquares = boardStore.sector.slice();

        // if (xIsNext) {
        //     nextSquares[i] = "X";
        //   } else {
        //     nextSquares[i] = "O";
        //   }

        nextSquares[i] = (xIsNext.value) ? "X" : "O"
        xIsNext.value = !xIsNext.value;

        //nextSquares[i] = 'X';
        boardStore.sector = nextSquares;

        // boardValue.value = i;
        // console.log(i);
        // console.log(boardStore.sector);
        // console.log(boardValue.value);
    })

    const winner = calculateWinner(boardStore.sector);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext.value ? "X" : "O");
    }

    return (
        <>
            <div class="board-row">
                <Square value={boardStore.sector[0]} close={handleClick} id={0} />
                <Square value={boardStore.sector[1]} close={handleClick} id={1} />
                <Square value={boardStore.sector[2]} close={handleClick} id={2} />
            </div>
            <div class="board-row">
                <Square value={boardStore.sector[3]} close={handleClick} id={3} />
                <Square value={boardStore.sector[4]} close={handleClick} id={4} />
                <Square value={boardStore.sector[5]} close={handleClick} id={5} />
            </div>
            <div class="board-row">
                <Square value={boardStore.sector[6]} close={handleClick} id={6} />
                <Square value={boardStore.sector[7]} close={handleClick} id={7} />
                <Square value={boardStore.sector[8]} close={handleClick} id={8} />
            </div>
            <div class="status">{status}</div>
        </>
    );
});

function calculateWinner(squares: Array<String>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}