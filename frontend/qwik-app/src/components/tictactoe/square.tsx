import { component$, useStylesScoped$ } from '@builder.io/qwik';
import SquareStyles from './board.css?inline'
import type { PropFunction } from "@builder.io/qwik";

interface SquareProps {
    value?: string,
    close: PropFunction<(val: number) => void>,
    id: number,
}

export default component$<SquareProps>((props) => {
    // const squareValue = useSignal(props.value);
    // const squareKey = useSignal(props.id);
    // console.log(props.value);
    useStylesScoped$(SquareStyles)
    //return <button onClick$={() => { squareValue.value = "X" }} class="square">{squareValue.value}</button>;
    return <button onClick$={() => { props.close(props.id) }} class="square">{props.value}</button>;

});