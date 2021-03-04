import Link from "next/link";
import Image from 'next/image'


export const Navbar = () => {
    return (
      <div >
   <nav className=' items-center flex-wrap  bg-gray-500 p-5 '>
                 <ul className='flex justify-between px-3'>
        <li className=''>
          <Link href="/">
            <a className='max-w-xs' data-cy='home-icon'>
            <Image className='max-w-xs'
        src="/home.svg"
        alt="home"
        width={40}
        height={40}
      />

            </a>
          </Link>
        </li>
 
        <li >
          <Link href="/about">
            <a className='text-white font-bold tracking-wide'  data-cy='about-nav-link'>About</a>
          </Link>
        </li>
      </ul>
        </nav>
      </div>
     
     
    );
  };