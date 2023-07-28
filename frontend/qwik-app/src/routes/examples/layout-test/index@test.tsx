import { component$, useStylesScoped$ } from '@builder.io/qwik';
import LayoutTestStyles from './layout-test.css?inline'
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    useStylesScoped$(LayoutTestStyles)
    return (
        <>
            <article>
                <h1>Layout Test 👋</h1>
                <hr></hr>
                <h4>Использовать макет layout-test</h4>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/cookbook">Cookbook</Link>
                    </li>
                </ul>
            </article>


        </>
    );
});