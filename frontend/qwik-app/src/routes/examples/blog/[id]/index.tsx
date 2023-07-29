import { component$, Resource } from "@builder.io/qwik";
import { routeLoader$ } from '@builder.io/qwik-city';


interface BlogData {
    id: string,
    title: string,
    content: string
}

export const useBlogData = routeLoader$(async ({ params }) => {
    const res = await fetch(`http://localhost:3000/blogs/${params.id}`);
    const data = await res.json();
    return data as BlogData;

});


export default component$(() => {
    //  npm install -g json-server
    //  json-server -w ./data/db.json

    //  http://localhost:3000/blogs

    const blog = useBlogData();

    // return <p>Product name: {blog.value.title}</p>;

    return (
        <Resource
            value={blog}
            onPending={() => <div>Loading ...</div>}
            onResolved={(blog) => (
                <div>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            )}
        />
    )

})