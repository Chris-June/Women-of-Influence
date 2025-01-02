'use client';

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
} from 'motion/react';
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { cn } from '@/lib/utils';

const DOCK_WIDTH = 128;
const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_WIDTH = 64;

type DockProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  panelWidth?: number;
  magnification?: number;
  spring?: SpringOptions;
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

type DocContextType = {
  mouseY: MotionValue;
  spring: SpringOptions;
  magnification: number;
  distance: number;
};

type DockProviderProps = {
  children: React.ReactNode;
  value: DocContextType;
};

const DockContext = createContext<DocContextType | undefined>(undefined);

function DockProvider({ children, value }: DockProviderProps) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
}

function useDock() {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error('useDock must be used within an DockProvider');
  }
  return context;
}

function VerticalDock({
  children,
  className,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelWidth = DEFAULT_PANEL_WIDTH,
}: DockProps) {
  const mouseY = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxWidth = useMemo(() => {
    return Math.max(DOCK_WIDTH, magnification + magnification / 2 + 4);
  }, [magnification]);

  const widthColumn = useTransform(isHovered, [0, 1], [panelWidth, maxWidth]);
  const width = useSpring(widthColumn, spring);

  return (
    <motion.div
      style={{
        width,
        scrollbarWidth: 'none',
      }}
      className={cn(
        'my-2 flex max-h-full flex-col items-center overflow-y-auto',
        className
      )}
    >
      <motion.div
        onMouseMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          mouseY.set(event.pageY - bounds.top);
          isHovered.set(1);
        }}
        onMouseLeave={() => {
          mouseY.set(Infinity);
          isHovered.set(0);
        }}
        className='flex flex-col gap-4'
      >
        <DockProvider
          value={{
            mouseY,
            spring,
            magnification,
            distance,
          }}
        >
          {children}
        </DockProvider>
      </motion.div>
    </motion.div>
  );
}

function DockItem({ children, className }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { mouseY, spring, magnification, distance } = useDock();
  const { top, height } = ref.current?.getBoundingClientRect() ?? {
    top: 0,
    height: 0,
  };

  const position = useMotionValue(top + height / 2);
  useEffect(() => {
    position.set(top + height / 2);
  }, [position, top, height]);

  const distanceFromMouse = useTransform(() => {
    const mousePos = mouseY.get();
    const itemPos = position.get();
    return Math.abs(mousePos - itemPos);
  });

  const scale = useTransform(distanceFromMouse, [0, distance], [1.5, 1]);
  const scaleValue = useSpring(scale, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleValue,
      }}
      className={cn('relative flex aspect-square w-12', className)}
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

export { VerticalDock as Dock, DockIcon, DockItem, DockLabel };
