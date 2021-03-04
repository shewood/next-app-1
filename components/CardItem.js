
import { format, parseISO } from "date-fns";
import Link from "next/link";

export function CardItem({ slug, title, date, content}) {
    return (
        //key={item.slug}
        <div className='border border-gray-300 rounded-lg shadow-md p-4 w-4/5 bg-white'>
        <div>
          <Link href={`/blog/${slug}`}>
            <a className="font-bold text-blue-700 hover:text-blue-400;">{title}</a>
          </Link>
        </div>
        <div className='text-xs text-gray-500'>{format(parseISO(date), 'MMMM do, uuu')}</div>
        <div>{content}</div>
      </div>
    );
}