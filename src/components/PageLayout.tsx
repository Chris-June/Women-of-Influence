import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { AnimatedGradient } from '@/components/core/animated-gradient';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  children,
  className = ''
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className={`
        min-h-screen 
        bg-gradient-to-br 
        from-indigo-500/70 
        to-purple-500/30 
        py-16 px-4 sm:px-6 lg:px-8 
        relative overflow-hidden
        bg-fixed
        backdrop-blur-xl
        ${className}
      `}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>{title} - Women of Influence</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      
      <AnimatedGradient />

      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export const PageHeader: React.FC<{ 
  title: string, 
  subtitle?: string 
}> = ({ title, subtitle }) => (
  <motion.h1 
    className="text-4xl font-bold text-center mb-12 text-purple-900"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {title}
    {subtitle && (
      <p className="text-base font-normal text-gray-600 mt-2">
        {subtitle}
      </p>
    )}
  </motion.h1>
);

export const InteractiveCard: React.FC<{
  children: ReactNode;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}> = ({ 
  children, 
  onClick, 
  selected = false, 
  className = '' 
}) => (
  <motion.div
    className={`
      flex flex-col relative group border border-transparent hover:border-purple-300 
      transition-all duration-300 rounded-xl p-4 
      hover:shadow-lg cursor-pointer
      ${selected ? 'bg-purple-100/50' : ''}
      ${className}
    `}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
  >
    {children}
  </motion.div>
);
