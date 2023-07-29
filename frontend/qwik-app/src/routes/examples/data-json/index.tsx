import { component$, useStylesScoped$, Resource } from '@builder.io/qwik';
import DataJsonStyles from './data-json.css?inline'
import { Link } from '@builder.io/qwik-city';
// import type { RequestHandler } from '@builder.io/qwik-city';
//import { useEndpoint } from '@builder.io/qwik-city';

import { routeLoader$ } from '@builder.io/qwik-city';

interface BlogData {
    id: string,
    title: string,
    content: string
}

export const useBlogData = routeLoader$(async () => {
    const res = await fetch('http://localhost:3000/blogs');
    const data = (await res.json()) as BlogData[];
    return data;
});


export default component$(() => {
    useStylesScoped$(DataJsonStyles)

    //  npm install -g json-server
    //  json-server -w ./data/db.json

    //  http://localhost:3000/blogs

    const blogs = useBlogData();

    return (
        <>
            <article>
                <h1>Data Json 👋</h1>
                <hr></hr>
                <h4>Использовать данные из внешнего источника</h4>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/cookbook">Cookbook</Link>
                    </li>
                </ul>

                <Resource
                    value={blogs}
                    onPending={() => <div>Loading blogs...</div>}
                    onResolved={(blogs) => (
                        <div class="blogs">
                            {blogs && blogs.map(blog => (
                                <div key={blog.id}>
                                    <h3>{blog.title}</h3>
                                    <p>{blog.content.slice(0, 50)}...</p>
                                    <Link href={"/examples/blog/" + blog.id}>Read More</Link>
                                </div>
                            ))}
                        </div>
                    )}
                />
            </article>


        </>
    );
});