import Link from 'next/link';
import React from 'react';

export default function PricingContent() {
  return (
    <div className='w-64 bg-white p-6 shadow-xl text-black'>
      {/* part 1 */}
      <div className='mb-3 space-y-3'>
        <h3 className='font-semibold'>For Individuals</h3>
        <Link href='#' className='block text-sm hover:underline'>
          Introduction
        </Link>

        <Link href='#' className='block text-sm hover:underline'>
          Pay as you go
        </Link>
      </div>
      {/* part 2 */}
      <div className='mb-3 space-y-3'>
        <h3 className='font-semibold'>For Individuals</h3>
        <Link href='#' className='block text-sm hover:underline'>
          Introduction
        </Link>

        <Link href='#' className='block text-sm hover:underline'>
          Pay as you go
        </Link>

        <Link href='#' className='block text-sm hover:underline'>
          Pay as you go
        </Link>

        <Link href='#' className='block text-sm hover:underline'>
          Pay as you go
        </Link>
      </div>

      <button className='w-full text-black rounded-lg border-2 border-neutral-900 px-4 py-2 font-semibold transition-colors hover:bg-neutral-700 hover:text-white'>
        Contact sales
      </button>
    </div>
  );
}
