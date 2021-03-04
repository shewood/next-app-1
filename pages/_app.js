import Link from "next/link";
import "../styles/globals.css";
import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
<div className='mx-auto w-9/12'>
<Layout>

<div >
<Component {...pageProps} />
</div>

 
</Layout>
</div>

  );
}

export default MyApp;
