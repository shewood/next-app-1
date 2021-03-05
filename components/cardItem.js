
import { format, parseISO } from "date-fns";
import Link from "next/link";
import Image from 'next/image'

export function CardItem({ slug, title, date, content}) {
    return (
        //key={item.slug}

<div className=' flex flex-row border bg-white rounded-lg shadow-md p-4 w-4/5 relative'>
 
  <Image

src="/i-like-food.svg"
alt="food"
// layout="fill"
width={100}
height={100}
/>



 



<div className=' border-gray-100 shadow-md p-4 w-4/5 bg-white absolute inset-y-0 right-0'>
        <div >

          <Link href={`/blog/${slug}`}>
            <a className="font-bold text-blue-700 hover:text-blue-400;">{title}</a>
          </Link>
        </div>
        <div className='text-xs text-gray-500'>{format(parseISO(date), 'MMMM do, uuu')}</div>
        <div>{content}</div>
     
        </div>

</div>







   
    );
}