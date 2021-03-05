import Head from "next/head";
import Link from "next/link";
import { blogPosts } from "../lib/data";
import { CardItem } from "../components/carditem";
import Image from "next/image";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <Head>
        <title>Tacos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center text-4xl uppercase text-bold py-3">Join the Junk Food debate</h1>
      </main>

      <div className="">
        {blogPosts.map((item) => (
          <div key={item.slug} className="flex justify-center py-2 ">
            <CardItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
