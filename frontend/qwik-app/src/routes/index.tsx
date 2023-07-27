import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hello Qwik-Nakama</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome Qwik-Nakama",
  meta: [
    {
      name: "description",
      content: "Qwik-Nakama site description",
    },
  ],
};
