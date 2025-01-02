import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
  speed?: number;
  colors?: string[];
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  className,
  speed = 20, // Default speed if not provided
  colors,
}) => {
  const gradientStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    background: colors ? `linear-gradient(to bottom, ${colors.join(', ')})` : `
      linear-gradient(to bottom, 
        rgba(107, 33, 168, 0.2), 
        rgba(219, 39, 119, 0.2), 
        rgba(30, 64, 175, 0.2)
      )
    `,
    backgroundSize: '100% 400%',
    animation: `
      gradientFlow ${speed}s ease infinite
    `
  };

  return (
    <>
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 0%; }
          50% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
      <div 
        style={gradientStyle} 
        className={cn('absolute inset-0', className)}
      />
    </>
  );
};
