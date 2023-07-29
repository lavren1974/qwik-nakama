import { component$, useStylesScoped$, useSignal, useStore } from '@builder.io/qwik';
import ModalStyles from './modal.css?inline'
import { Link } from '@builder.io/qwik-city';
import Modal from "~/components/modal/modal"

export default component$(() => {
    useStylesScoped$(ModalStyles)

    const modalVisible = useSignal(false)
    return (
        <>
            <article>
                <h1>Use Modal 👋</h1>
                <hr></hr>
                <h4>Использовать SLOT</h4>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/cookbook">Cookbook</Link>
                    </li>
                </ul>

                <button onClick$={() => modalVisible.value = true}>Open Modal</button>

                {modalVisible.value && (
                    <Modal size="lg" frosted={true}>
                    <div>some modal content</div>
                    <div q:slot="content">
                      <h3>Great News!!</h3>
                      <p>impedit sit fugiat laudantium nobis at illum ipsum non.</p>
                    </div>
                    <div q:slot="footer">
                      <button>Sign up now!</button>
                    </div>
                  </Modal>
                )}




            </article>


        </>
    );
});