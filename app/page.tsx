'use client';

import MyParagraphAnimation from '@/components/MyParagraphAnimation';
import MyWordAnimation from '@/components/MyWordAnimation';
import PricingContent from '@/components/PricingContent';
import PricingLayout from '@/components/PricingLayout';

const paragraph: string =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum incidunt dolorem, est, aliquam nam illum, minima ea perferendis maxime perspiciatis fugiat distinctio laudantium facere beatae eum repellendus officia corporis velit!';

export default function Home() {
  return (
    <div className='flex h-[580px] justify-center bg-neutral-900 px-3 py-12'>
      <main className='flex flex-col gap-8  items-center'>
        <p className='text-white'>hello world</p>
        <PricingLayout href='#' MyCountentLayout={PricingContent}>
          <p className='text-white'>Abouts us</p>
        </PricingLayout>
      </main>
    </div>
  );
}
