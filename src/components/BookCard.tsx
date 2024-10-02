import { CircleDot } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
type bookProp = {
    textDetailId: number;
    status: string;
    slug: string;
    name : string;
    locale : string;
    description: string;
    alternativeNames : null;
}
function BookCard({book} : {book : bookProp}) : React.JSX.Element {
  return (
    <div className='flex flex-col w-[360px] border border-black dark:border-white rounded-lg overflow-hidden'>
      <img src={`https://picsum.photos/200/300?random=${book.textDetailId}`} alt="dummy" width={360} height={90} className=''/>
      <div className='p-4'>
        <h2 className='font-bold py-2 text-lg'>{book.name}</h2>
        <h4 className='flex gap-2 items-center my-3 dark:text-gray-200 text-gray-800'> <CircleDot /> {book.status}</h4>
        <p className='font-normal dark:text-gray-400 text-gray-700'>{book.description}</p>
        
      </div>
    </div>
  )
}

export default BookCard
