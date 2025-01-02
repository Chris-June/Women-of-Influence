'use client';
import { cn } from '@/lib/utils';
import { motion, Transition } from 'framer-motion';

type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
  shape?: 'rect' | 'circle';
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
  shape = 'rect',
}: BorderTrailProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear',
  };

  const getOffsetPath = () => {
    switch (shape) {
      case 'circle':
        return `path('M50,50 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0')`;
      case 'rect':
      default:
        return `rect(0 auto auto 0 round ${size}px)`;
    }
  };

  return (
    <div className='pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]'>
      <motion.div
        className={cn('absolute aspect-square bg-zinc-500', className)}
        style={{
          width: size,
          offsetPath: getOffsetPath(),
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}

export function BorderTrailTextarea() {
  return (
    <div className='relative h-[160px] w-[260px] overflow-hidden rounded-md border border-zinc-950/10 bg-white text-zinc-700 outline-none dark:border-zinc-50/20 dark:bg-zinc-950 dark:text-zinc-300'>
      <textarea className='h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none' />
      <BorderTrail
        className='bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700'
        size={120}
        shape="circle"
      />
    </div>
  );
}
