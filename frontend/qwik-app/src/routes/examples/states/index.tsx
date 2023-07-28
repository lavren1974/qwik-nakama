import { component$, useStylesScoped$, useSignal, useStore } from '@builder.io/qwik';
import StatesStyles from './states.css?inline'
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    useStylesScoped$(StatesStyles)

    const name = useSignal("Qwik-Nakama!!!")
    const person = useStore({ name: "Nikolay", age: 49 })

    const blogs = useStore([
        { id: 1, title: "article-1" },
        { id: 2, title: "article-2" },
        { id: 3, title: "article-3" }
    ])

    return (
        <>
            <article>
                <h1>Use states 👋</h1>
                <hr></hr>
                <h4>Использовать состояния</h4>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/cookbook">Cookbook</Link>
                    </li>
                </ul>
                <h1>Hello {name.value}</h1>
                <h2>Name - {person.name}</h2>
                <h3>Age - {person.age}</h3>

                <button onClick$={() => name.value = "QWIK"}>edit name</button>
                <button onClick$={() => person.age = person.age + 1}>edit age</button>

                {blogs.map(blog => (
                    <div key={blog.id}>{blog.title}</div>
                ))}

                <button onClick$={() => blogs.pop()}>delete article</button>
            </article>


        </>
    );
});