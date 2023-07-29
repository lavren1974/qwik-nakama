import { component$, useStylesScoped$ } from '@builder.io/qwik';
import Board from "~/components/tictactoe/board";
import TicTacToeStyles from './tictactoe.css?inline'
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    useStylesScoped$(TicTacToeStyles)

    return (
        <>
            <article>
                <h1>TicTacToe 👋</h1>
                <hr></hr>
                <h4>Пример игры в крестики-нолики</h4>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/cookbook">Cookbook</Link>
                    </li>
                </ul>
                <Board />
            </article>
        </>
    );
});
