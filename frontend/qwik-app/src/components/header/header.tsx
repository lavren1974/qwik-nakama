import { component$, useStyles$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './header.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <header>
      <nav>
        <img src="/logo.png" alt="logo" />
        <h1>Qwik-Nakama</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/cookbook">Cookbook</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});