import { component$, useStylesScoped$ } from '@builder.io/qwik';
import LayoutNoStyles from './layout-no.css?inline'
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    useStylesScoped$(LayoutNoStyles)
    return (
        <>
            <article>
                <h1>Layout No 👋</h1>
                <hr></hr>
                <h4>Не использовать макет</h4>
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