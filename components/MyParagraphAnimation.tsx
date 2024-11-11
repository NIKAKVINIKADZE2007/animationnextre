'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
type ParagraphProps = {
  paragraph: string;
};

export default function MyParagraphAnimation({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['center 0.9', 'start 0.25'],
  });

  useEffect(() => {
    scrollYProgress.on('change', (e) => console.log(e));
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.p
      ref={container}
      style={{ opacity }}
      className='text-white leading-none p-10 max-w-[1280px]'
    >
      {paragraph}
    </motion.p>
  );
}
