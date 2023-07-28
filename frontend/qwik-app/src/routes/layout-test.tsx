import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <p>Тестовый макет!</p>
        <section class="container">
          <Slot />
        </section>
      </main>
      <footer>
        <p>Qwik.blog</p>
      </footer>
    </>
  );
});