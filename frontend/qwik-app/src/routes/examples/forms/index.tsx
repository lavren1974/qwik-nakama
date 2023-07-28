import { component$, useStylesScoped$, useSignal, useStore } from '@builder.io/qwik';
import FormsStyles from './forms.css?inline'
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    useStylesScoped$(FormsStyles)

    const formVisible = useSignal(false)
    const formState = useStore({ name: '', message: '' })

    return (
        <>
            <article>
                <h1>Use forms 👋</h1>
                <hr></hr>
                <h4>Использовать формы</h4>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/cookbook">Cookbook</Link>
                    </li>
                </ul>
                <button onClick$={() => formVisible.value = true}>Contact Me</button>

                {formVisible.value && (
                    <form preventdefault:submit onSubmit$={() => {
                        console.log(formState.name, formState.message)
                        formState.name = ''
                        formState.message = ''
                    }}>
                        <label>
                            <span>Your name:</span>
                            <input
                                type="text"
                                value={formState.name}
                                onInput$={(e) => formState.name = (e.target as HTMLInputElement).value}
                            />
                        </label>
                        <label>
                            <span>Your message:</span>
                            <textarea
                                value={formState.message}
                                onInput$={(e) => formState.message = (e.target as HTMLInputElement).value}
                            ></textarea>
                        </label>
                        <button>Send</button>

                        <p>{formState.name}</p>
                        <p>{formState.message}</p>
                    </form>
                )}
            </article>


        </>
    );
});