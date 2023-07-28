import { component$, useStylesScoped$ } from '@builder.io/qwik';
import ContactStyles from './contact.css?inline'

export default component$(() => {
    useStylesScoped$(ContactStyles)
    return (
        <>
            <article>
                <h1>Contact 👋</h1>
                <p>
                    Webworkers они предоставляли уже давно , у них есть потрясающие пример применения.
                    Например сервер Mastodon развёрнутый прямо в инфраструктуре Cloudflare - то есть прямо вообще без своего сервера.
                </p>


            </article>


        </>
    );
});