import { component$, useStylesScoped$ } from '@builder.io/qwik';
import CookbookStyles from './cookbook.css?inline'
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    useStylesScoped$(CookbookStyles)
    return (
        <>

            <article>
                <h1>Cookbook 👋</h1>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/examples/layout-no">Layout-no</Link>
                    </li>
                    <li>
                        <Link href="/examples/layout-test">Layout-test</Link>
                    </li>
                    <li>
                        <Link href="/examples/states">Use state</Link>
                    </li>
                    <li>
                        <Link href="/examples/forms">Use forms</Link>
                    </li>
                    <li>
                        <Link href="/examples/modal">Use modal (SLOT)</Link>
                    </li>
                </ul>

            </article>

        </>
    );
});