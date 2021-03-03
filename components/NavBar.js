import Link from "next/link";


export const Navbar = () => {
    return (
      
        <nav className='flex items-center flex-wrap bg-gray-500 p-5 '>
                 <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
        </nav>
     
    );
  };