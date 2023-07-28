import { component$, useStylesScoped$ } from '@builder.io/qwik';
import AboutStyles from './about.css?inline'

export default component$(() => {
    useStylesScoped$(AboutStyles)
    return (
        <>
            <article>
                <h1>About 👋</h1>
                <p>
                    Webworkers они предоставляли уже давно , у них есть потрясающие пример применения.
                    Например сервер Mastodon развёрнутый прямо в инфраструктуре Cloudflare - то есть прямо вообще без своего сервера.
                </p>
                <p>
                    Webworkers они предоставляли уже давно , у них есть потрясающие пример применения.
                    Например сервер Mastodon развёрнутый прямо в инфраструктуре Cloudflare - то есть прямо вообще без своего сервера.
                </p>
                <p>
                    Webworkers они предоставляли уже давно , у них есть потрясающие пример применения.
                    Например сервер Mastodon развёрнутый прямо в инфраструктуре Cloudflare - то есть прямо вообще без своего сервера.
                </p>

            </article>


        </>
    );
});