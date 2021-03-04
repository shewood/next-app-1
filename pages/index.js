import Head from "next/head";
import Link from "next/link";
import { blogPosts } from "../lib/data";
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

      <main>
        <h1 className='text-center text-4xl uppercase text-bold'>this is a blog</h1>
      </main>
<div>
  {blogPosts.map((item) => (
    <div key={item.slug}>
      <div>
        <Link href={`/blog/${item.slug}`}>
        <a className='text-blue-700 hover:text-blue-500;'>
        {item.title}
        </a>
        </Link>
       
        </div>
      <div>{item.date.toString()}</div>
      <div>{item.content}</div>

    </div>
  ))}
</div>

    </div>
  );
}
