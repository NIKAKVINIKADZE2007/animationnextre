import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
export default function PricingLayout({
  children,
  href,
  MyCountentLayout,
}: {
  children: React.ReactNode;
  href: string;
  MyCountentLayout?: React.ElementType;
}) {
  const [open, setOpen] = useState(false);
  const showFlayout = MyCountentLayout && open;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='relative h-fit w-fit'
    >
      <Link href={href} className='relative text-white'>
        {children}
        <span
          style={{
            transform: showFlayout ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className='absolute h-1 transition-transform duration-300 ease-out origin-left scale-x-0 bg-indigo-300 rounded-full -bottom-2 -left-2 -right-2'
        />
      </Link>

      <AnimatePresence>
        {showFlayout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='absolute text-black bg-white left-1/2 top-12'
          >
            <div className='absolute top-0 w-4 h-4 rotate-45 -translate-x-1/2 -translate-y-1/2 bg-white left-1/2'></div>
            {MyCountentLayout && <MyCountentLayout />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
