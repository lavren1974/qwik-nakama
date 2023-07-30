import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Client, Session } from "@heroiclabs/nakama-js";



async function getAccount(email: string, password: string, create: boolean, username: string) {
  // const session = client.authenticateEmail(email, password);

  let useSSL = false; // Enable if server is run with an SSL certificate.
  let client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);
  let session = await client.authenticateEmail(email, password, create, username);
  let account = await client.getAccount(session);

  // Save the session token for future API calls
  //localStorage.setItem("sessionToken", session.token);
  console.log(account);
  //return account.email;

  console.info(session.token); // raw JWT token
  console.info(session.user_id);
  console.info(session.username);
  console.info("Session has expired?", session.isexpired(Date.now() / 1000));
  // const expiresat = session.expires_at;
  // console.warn("Session will expire at", new Date(expiresat * 1000).toISOString());


  // Assume we've stored the auth token in browser Web Storage.
  // const authtoken = window.localStorage.getItem("nkauthtoken");
  // const session2 = session.refresh_token(authtoken);
  // if (session.isexpired(Date.now() / 1000)) {
  //     console.warn("Session has expired. Must reauthenticate.");
  // }

}



export default component$(() => {

  let useSSL = false; // Enable if server is run with an SSL certificate.
  let client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);
  let username = "abcdef";
  let email = "abcdef@gmail.com";
  let password = "12345678";
  let create = true;

  getAccount(email, password, create, username);

  return (
    <>
      <h1>Hello Qwik-Nakama!!!</h1>
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
