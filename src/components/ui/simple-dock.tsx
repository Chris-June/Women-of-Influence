import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

type DockProps = {
  children: React.ReactNode;
  className?: string;
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
};

type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};

type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

function Dock({ children, className }: DockProps) {
  return (
    <div className={cn('flex gap-4', className)}>
      {children}
    </div>
  );
}

function DockItem({ children, className }: DockItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn('relative flex aspect-square w-12 group', className)}
    >
      {children}
    </motion.div>
  );
}

function DockLabel({ children, className, ...rest }: DockLabelProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute -left-2 -translate-x-full whitespace-nowrap rounded-lg bg-black/80 px-3 py-2 text-sm text-white opacity-0 shadow-xl duration-200 group-hover:opacity-100',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

function DockIcon({ children, className, ...rest }: DockIconProps) {
  return (
    <div
      className={cn('relative h-full w-full p-1.5', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export { Dock, DockIcon, DockItem, DockLabel };
