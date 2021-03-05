import Head from "next/head";
import { Layout } from "../components/layout";
import { CardItem } from "../components/carditem";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>this is the about page</h1>
      </main>
    </div>
  );
}