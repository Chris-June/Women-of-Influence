import React, { useState } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, Variants, TargetAndTransition, Transition } from "framer-motion";

// Expanded animation types
export type AnimationType = 
  | 'float'
  | 'pulse'
  | 'rotate'
  | 'scale'
  | 'shake'
  | 'bounce'
  | 'wave';

export interface AnimationConfig {
  type?: AnimationType;
  duration?: number;
  repeat?: number | 'infinite';
  direction?: 'normal' | 'reverse' | 'alternate';
  ease?: string;
  delay?: number;
}

export interface AnimatedIcon {
  icon: LucideIcon;
  color: string;
  size?: number;
  delay?: number;
  animationConfig?: AnimationConfig;
  interactive?: boolean;
}

interface AnimatedIconsProps {
  icons: AnimatedIcon[];
  className?: string;
  containerClassName?: string;
  randomPosition?: boolean;
  grid?: boolean;
  gridCols?: number;
  interactiveGlobal?: boolean;
}

// Animation variant generators
const animationVariants = {
  float: (reverse: boolean = false): Variants => ({
    initial: { y: 0 },
    animate: { 
      y: reverse ? [0, 10, 0] : [0, -10, 0],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  }),
  
  pulse: (): Variants => ({
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 1.5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  }),
  
  rotate: (): Variants => ({
    initial: { rotate: 0 },
    animate: { 
      rotate: [0, 360],
      transition: { 
        duration: 3, 
        repeat: Infinity, 
        ease: "linear" 
      }
    }
  }),
  
  scale: (): Variants => ({
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.2, 1],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  }),
  
  shake: (): Variants => ({
    initial: { x: 0 },
    animate: { 
      x: [-5, 5, -5, 5, 0],
      transition: { 
        duration: 0.5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  }),
  
  bounce: (): Variants => ({
    initial: { y: 0 },
    animate: { 
      y: [0, -20, 0],
      transition: { 
        duration: 1, 
        repeat: Infinity, 
        ease: "easeOut" 
      }
    }
  }),
  
  wave: (): Variants => ({
    initial: { rotate: 0 },
    animate: { 
      rotate: [-10, 10, -10],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  })
};

const IconWrapper: React.FC<{
  icon: LucideIcon;
  color: string;
  size?: number;
  delay?: number;
  animationConfig?: AnimationConfig;
  interactive?: boolean;
  style?: React.CSSProperties;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  whileHover?: TargetAndTransition;
  className?: string;
}> = ({ 
  icon: Icon, 
  color, 
  size = 12, 
  delay = 0, 
  animationConfig = { type: 'float' },
  interactive = false,
  style,
  onHoverStart,
  onHoverEnd,
  whileHover,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine animation variants
  const variants = animationVariants[animationConfig.type ?? 'float'](false);

  const defaultTransition: Transition = {
    duration: 2,
    repeat: 0,
    ease: 'easeInOut',
    direction: 'normal'
  };

  // Hover effect variants
  const hoverVariants: Variants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { 
        duration: 0.2,
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{
        duration: animationConfig.duration ?? defaultTransition.duration,
        repeat: animationConfig.repeat === 'infinite' ? Infinity : (animationConfig.repeat ?? defaultTransition.repeat),
        ease: animationConfig.ease ?? defaultTransition.ease,
        direction: animationConfig.direction ?? defaultTransition.direction
      }}
      whileHover={whileHover || (interactive ? { 
        scale: 1.1, 
        transition: { 
          duration: 0.2, 
          ease: "easeInOut" 
        } 
      } : undefined)}
      onHoverStart={onHoverStart || (interactive ? () => setIsHovered(true) : undefined)}
      onHoverEnd={onHoverEnd || (interactive ? () => setIsHovered(false) : undefined)}
      style={{ animationDelay: `${delay}ms`, ...style }}
      className={cn(
        `transform transition-all`,
        `h-${size} w-${size}`,
        color,
        interactive && "cursor-pointer",
        className
      )}
    >
      <Icon 
        className={cn(
          `h-full w-full`,
          isHovered && "text-purple-600 transition-colors"
        )} 
      />
    </motion.div>
  );
};

export const AnimatedIcons: React.FC<AnimatedIconsProps> = ({
  icons,
  className,
  containerClassName,
  randomPosition = true,  
  grid = false,
  gridCols = 3,
  interactiveGlobal = true  
}) => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  return (
    <div className={cn(
      "relative flex flex-wrap justify-center items-center gap-4 p-4",
      grid ? `grid grid-cols-${gridCols}` : "flex",
      containerClassName
    )}>
      {icons.map((iconProps, index) => {
        // Generate random positioning if enabled
        const randomStyles = randomPosition ? {
          position: 'absolute' as const,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: 10
        } : {};

        // Vary animation duration and delay
        const animConfig = {
          ...iconProps.animationConfig,
          duration: iconProps.animationConfig?.duration || (Math.random() * 2 + 1),
          delay: iconProps.animationConfig?.delay || (index * 0.3)
        };

        return (
          <IconWrapper
            key={index}
            {...iconProps}
            animationConfig={animConfig}
            interactive={interactiveGlobal && iconProps.interactive}
            style={randomStyles}
            onHoverStart={() => setHoveredIcon(index)}
            onHoverEnd={() => setHoveredIcon(null)}
            whileHover={{ 
              scale: 1.2,
              rotate: Math.random() * 20 - 10,  
              transition: { duration: 0.2 }
            }}
            className={cn(
              className,
              hoveredIcon !== null && hoveredIcon !== index ? "opacity-30" : "",
              "transition-all duration-300 ease-in-out"
            )}
          />
        );
      })}
    </div>
  );
};

export default AnimatedIcons;
