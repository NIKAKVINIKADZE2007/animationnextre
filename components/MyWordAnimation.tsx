'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { div } from 'framer-motion/client';
type ParagraphProps = {
  paragraph: string;
};

export default function MyWordAnimation({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['center 0.9', 'start 0.25'],
  });

  const words = paragraph.split(' ');

  return (
    <p
      ref={container}
      className='text-white flex flex-wrap leading-none p-10 max-w-[1280px]'
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);

        return (
          <motion.span style={{ opacity }} className='relative mr-3 mt-3'>
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}
